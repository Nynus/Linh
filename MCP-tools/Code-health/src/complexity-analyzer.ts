import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';
import { CodeHealthConfig, FunctionReport } from './types';

interface ComplexityResult {
  average: number;
  files: {
    [filePath: string]: {
      complexity: number;
      maintainability: number;
      functions: FunctionReport[];
    };
  };
}

/**
 * Phân tích độ phức tạp của code trong dự án
 */
export async function analyzeComplexity(
  files: string[],
  config: CodeHealthConfig,
  verbose: boolean = false
): Promise<ComplexityResult> {
  if (verbose) {
    console.log('Analyzing code complexity...');
  }

  const result: ComplexityResult = {
    average: 0,
    files: {}
  };

  let totalComplexity = 0;
  
  for (const file of files) {
    // Chỉ phân tích file TypeScript và JavaScript
    if (!file.endsWith('.ts') && !file.endsWith('.tsx') && 
        !file.endsWith('.js') && !file.endsWith('.jsx')) {
      continue;
    }
    
    const relativePath = path.basename(file);
    if (verbose) {
      console.log(`Analyzing complexity of ${relativePath}`);
    }
    
    const fileContent = fs.readFileSync(file, 'utf8');
    const fileComplexity = analyzeFileComplexity(file, fileContent);
    
    result.files[relativePath] = fileComplexity;
    totalComplexity += fileComplexity.complexity;
  }
  
  // Tính độ phức tạp trung bình
  result.average = Object.keys(result.files).length > 0 
    ? totalComplexity / Object.keys(result.files).length 
    : 0;

  if (verbose) {
    console.log(`Average complexity: ${result.average.toFixed(2)}`);
    console.log(`Analyzed ${Object.keys(result.files).length} files for complexity`);
  }

  return result;
}

/**
 * Phân tích độ phức tạp của một file cụ thể
 */
function analyzeFileComplexity(filePath: string, fileContent: string): {
  complexity: number;
  maintainability: number;
  functions: FunctionReport[];
} {
  // Phân tích TypeScript AST
  const sourceFile = ts.createSourceFile(
    path.basename(filePath),
    fileContent,
    ts.ScriptTarget.Latest,
    true
  );

  // Tìm tất cả các functions và methods
  const functions: FunctionReport[] = [];
  let totalCyclomaticComplexity = 0;
  
  const visit = (node: ts.Node) => {
    // Phân tích functions
    if (ts.isFunctionDeclaration(node) || 
        ts.isMethodDeclaration(node) || 
        ts.isArrowFunction(node) ||
        ts.isFunctionExpression(node)) {
      
      const functionName = getFunctionName(node);
      const startPosition = node.getStart(sourceFile);
      const endPosition = node.getEnd();
      const startLineCol = ts.getLineAndCharacterOfPosition(sourceFile, startPosition);
      const endLineCol = ts.getLineAndCharacterOfPosition(sourceFile, endPosition);
      
      // Tính toán số dòng
      const startLine = startLineCol.line + 1;
      const endLine = endLineCol.line + 1;
      const lineCount = endLine - startLine + 1;
      
      // Tính toán độ phức tạp
      const complexity = calculateCyclomaticComplexity(node, sourceFile);
      totalCyclomaticComplexity += complexity;

      // Phân tích số lượng tham số
      const parameterCount = getParameterCount(node);
      
      // Phân tích độ sâu của lồng nhau
      const nestingDepth = calculateNestingDepth(node, sourceFile);

      functions.push({
        name: functionName,
        lineStart: startLine,
        lineEnd: endLine,
        complexity,
        lines: lineCount,
        parameters: parameterCount,
        nestingDepth
      });
    }
    
    ts.forEachChild(node, visit);
  };
  
  visit(sourceFile);

  // Tính toán độ phức tạp tổng thể của file
  const fileComplexity = Math.max(1, totalCyclomaticComplexity);
  
  // Tính chỉ số maintainability (gần với Maintainability Index của Microsoft)
  // Formula: MI = MAX(0, (171 - 5.2 * ln(V) - 0.23 * G - 16.2 * ln(L)) * 100 / 171)
  // Đơn giản hóa công thức:
  const linesOfCode = fileContent.split('\n').length;
  const maintainability = calculateMaintainabilityIndex(fileComplexity, linesOfCode, functions.length);
  
  return {
    complexity: fileComplexity,
    maintainability,
    functions
  };
}

/**
 * Lấy tên của function
 */
function getFunctionName(node: ts.Node): string {
  if (ts.isFunctionDeclaration(node) && node.name) {
    return node.name.getText();
  } 
  
  if (ts.isMethodDeclaration(node) && node.name) {
    return node.name.getText();
  }
  
  if (ts.isArrowFunction(node) || ts.isFunctionExpression(node)) {
    // Cố gắng lấy tên từ variable declaration nếu có
    if (node.parent && ts.isVariableDeclaration(node.parent) && node.parent.name) {
      return node.parent.name.getText();
    }
    
    // Cố gắng lấy tên từ property assignment nếu có
    if (node.parent && ts.isPropertyAssignment(node.parent) && node.parent.name) {
      return node.parent.name.getText();
    }
  }
  
  return '(anonymous)';
}

/**
 * Tính toán độ phức tạp của function
 */
function calculateCyclomaticComplexity(node: ts.Node, sourceFile: ts.SourceFile): number {
  let complexity = 1; // Bắt đầu với 1
  
  const calculateNodeComplexity = (node: ts.Node) => {
    // Tăng độ phức tạp cho các câu lệnh rẽ nhánh
    if (
      ts.isIfStatement(node) ||
      ts.isConditionalExpression(node) || // ternary operator
      ts.isCaseClause(node) ||
      ts.isForStatement(node) ||
      ts.isForInStatement(node) ||
      ts.isForOfStatement(node) ||
      ts.isWhileStatement(node) ||
      ts.isDoStatement(node)
    ) {
      complexity++;
    }
    
    // Tăng độ phức tạp cho các toán tử logic
    if (ts.isBinaryExpression(node)) {
      if (
        node.operatorToken.kind === ts.SyntaxKind.AmpersandAmpersandToken ||
        node.operatorToken.kind === ts.SyntaxKind.BarBarToken
      ) {
        complexity++;
      }
    }
    
    // Tăng độ phức tạp cho các catch blocks
    if (ts.isCatchClause(node)) {
      complexity++;
    }
    
    // Duyệt qua tất cả các node con
    ts.forEachChild(node, calculateNodeComplexity);
  };
  
  calculateNodeComplexity(node);
  return complexity;
}

/**
 * Đếm số lượng tham số của function
 */
function getParameterCount(node: ts.FunctionLikeDeclaration): number {
  return node.parameters.length;
}

/**
 * Tính toán độ sâu lồng nhau của khối lệnh
 */
function calculateNestingDepth(node: ts.Node, sourceFile: ts.SourceFile): number {
  let maxDepth = 0;
  
  function measureDepth(node: ts.Node, currentDepth: number) {
    // Cập nhật độ sâu tối đa
    maxDepth = Math.max(maxDepth, currentDepth);
    
    // Tăng độ sâu cho các khối lệnh
    if (
      ts.isBlock(node) ||
      ts.isIfStatement(node) ||
      ts.isForStatement(node) ||
      ts.isForInStatement(node) ||
      ts.isForOfStatement(node) ||
      ts.isWhileStatement(node) ||
      ts.isDoStatement(node) ||
      ts.isCaseClause(node) ||
      ts.isTryStatement(node)
    ) {
      currentDepth++;
    }
    
    // Duyệt qua các node con với độ sâu hiện tại
    ts.forEachChild(node, child => measureDepth(child, currentDepth));
  }
  
  measureDepth(node, 0);
  return maxDepth;
}

/**
 * Tính chỉ số maintainability
 */
function calculateMaintainabilityIndex(complexity: number, linesOfCode: number, numFunctions: number): number {
  // Dựa trên công thức Maintainability Index của Microsoft
  // MI = MAX(0, (171 - 5.2 * ln(V) - 0.23 * G - 16.2 * ln(L)) * 100 / 171)
  // Đơn giản hóa công thức:
  
  const normalized = Math.max(50, Math.min(100, 
    171 - (5.2 * Math.log(Math.max(1, linesOfCode))) - 
    (0.23 * complexity) - 
    (16.2 * Math.log(Math.max(1, linesOfCode))) 
  ));
  
  return normalized;
}

/**
 * Phân tích độ phức tạp của code
 */
export async function analyzeFileComplexitySimple(
  filePath: string,
  fileContent: string
): Promise<{ complexity: number; maintainability: number }> {
  // Trong phiên bản đơn giản này, chúng ta sử dụng thuật toán rất đơn giản để tính độ phức tạp
  
  // Đếm số vòng lặp, câu lệnh điều kiện như là ước lượng đơn giản
  const conditionals = (fileContent.match(/if|else|switch|case|for|while|do/g) || []).length;
  
  // Đếm số lượng function/method
  const functions = (fileContent.match(/function|=>/g) || []).length;
  
  // Đếm số lượng class/interface
  const classes = (fileContent.match(/class|interface|enum|type /g) || []).length;
  
  // Đếm số lượng toán tử logic
  const logicalOperators = (fileContent.match(/&&|\|\||\?\?/g) || []).length;
  
  // Đếm số lượng dòng code
  const lines = fileContent.split('\n').length;
  
  // Tính độ phức tạp dựa trên các yếu tố trên
  const complexity = calculateComplexity(conditionals, functions, classes, logicalOperators, lines);
  
  // Tính điểm bảo trì
  const maintainability = calculateMaintainability(complexity, lines);
  
  return {
    complexity,
    maintainability
  };
}

/**
 * Tính độ phức tạp dựa trên các yếu tố
 */
function calculateComplexity(
  conditionals: number,
  functions: number,
  classes: number,
  logicalOperators: number,
  lines: number
): number {
  // Trọng số
  const conditionalWeight = 1;
  const functionWeight = 0.5;
  const classWeight = 0.5;
  const logicalOperatorWeight = 0.3;
  const linesWeight = 0.01;
  
  // Tính độ phức tạp tổng hợp
  const complexity = 
    conditionals * conditionalWeight +
    functions * functionWeight +
    classes * classWeight +
    logicalOperators * logicalOperatorWeight +
    lines * linesWeight;
  
  return Math.round(complexity);
}

/**
 * Tính điểm bảo trì dựa trên độ phức tạp và số dòng code
 */
function calculateMaintainability(complexity: number, lines: number): number {
  // Công thức đơn giản dựa trên độ phức tạp và số dòng code
  // Điểm bảo trì sẽ giảm khi độ phức tạp tăng và số dòng tăng
  const maintainability = 100 - (complexity * 0.8) - (lines * 0.05);
  
  // Giới hạn trong khoảng 0-100
  return Math.max(0, Math.min(100, maintainability));
} 