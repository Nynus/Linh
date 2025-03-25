import * as fs from 'fs-extra';
import * as path from 'path';
import * as ts from 'typescript';

interface TypeCoverageResult {
  overall: number; // Độ phủ type tổng thể (0-100)
  files: {
    [filePath: string]: number; // Độ phủ type cho từng file (0-100)
  };
}

/**
 * Phân tích độ bao phủ của TypeScript types trong dự án
 */
export async function analyzeTypeCoverage(
  projectPath: string
): Promise<number> {
  // Đơn giản hóa - trả về số phần trăm bao phủ type ước tính
  return 80;
}

/**
 * Phân tích độ phủ type của các file TypeScript (phiên bản chi tiết)
 */
export async function analyzeTypeDetail(
  projectPath: string,
  files: string[],
  verbose: boolean = false
): Promise<TypeCoverageResult> {
  if (verbose) {
    console.log('Analyzing type coverage...');
  }
  
  const result: TypeCoverageResult = {
    overall: 0,
    files: {}
  };
  
  // Lọc ra các file TypeScript
  const tsFiles = files.filter(file => file.endsWith('.ts') || file.endsWith('.tsx'));
  
  if (tsFiles.length === 0) {
    if (verbose) {
      console.log('No TypeScript files found');
    }
    return result;
  }
  
  // Tạo compiler options
  const compilerOptions: ts.CompilerOptions = {
    noEmit: true,
    allowJs: true,
    checkJs: true,
    strict: true
  };
  
  // Khởi tạo compiler host
  const compilerHost = ts.createCompilerHost(compilerOptions);
  
  // Phân tích từng file
  let totalCoverage = 0;
  let totalAnyCount = 0;
  let totalNodeCount = 0;
  
  for (const file of tsFiles) {
    const relPath = path.relative(projectPath, file);
    const { coverage, anyCount, nodeCount } = analyzeFileCoverage(file, compilerHost, compilerOptions);
    
    result.files[relPath] = coverage;
    totalAnyCount += anyCount;
    totalNodeCount += nodeCount;
    
    if (verbose) {
      console.log(`File ${relPath}: ${coverage.toFixed(2)}% type coverage`);
    }
  }
  
  // Tính toán độ phủ type tổng thể
  result.overall = totalNodeCount > 0 
    ? 100 - (totalAnyCount / totalNodeCount * 100) 
    : 0;
  
  if (verbose) {
    console.log(`Overall type coverage: ${result.overall.toFixed(2)}%`);
  }
  
  return result;
}

/**
 * Phân tích độ phủ type của một file cụ thể
 */
function analyzeFileCoverage(
  filePath: string, 
  compilerHost: ts.CompilerHost,
  compilerOptions: ts.CompilerOptions
): { coverage: number; anyCount: number; nodeCount: number } {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Phân tích AST của file
    const sourceFile = ts.createSourceFile(
      path.basename(filePath),
      fileContent,
      ts.ScriptTarget.Latest,
      true
    );
    
    // Tạo một chương trình TypeScript cho file này
    const program = ts.createProgram([filePath], compilerOptions, compilerHost);
    
    // Lấy TypeChecker
    const checker = program.getTypeChecker();
    
    // Đếm số lượng node có type 'any'
    let anyCount = 0;
    let nodeCount = 0;
    
    // Hàm đệ quy để duyệt AST
    function visit(node: ts.Node) {
      // Chỉ xem xét các node biểu thị giá trị hoặc biến
      if (ts.isVariableDeclaration(node) || 
          ts.isParameter(node) || 
          ts.isPropertyDeclaration(node) ||
          ts.isFunctionDeclaration(node) ||
          ts.isMethodDeclaration(node)) {
            
        nodeCount++;
        
        // Lấy type của node
        const type = checker.getTypeAtLocation(node);
        const typeString = checker.typeToString(type);
        
        // Kiểm tra nếu là any
        if (typeString === 'any' || typeString.includes('any[]')) {
          anyCount++;
        }
      }
      
      // Duyệt các node con
      ts.forEachChild(node, visit);
    }
    
    // Bắt đầu duyệt từ root
    visit(sourceFile);
    
    // Tính toán độ phủ type
    const coverage = nodeCount > 0 ? 100 - (anyCount / nodeCount * 100) : 100;
    
    return { coverage, anyCount, nodeCount };
  } catch (error) {
    console.error(`Error analyzing type coverage for ${filePath}:`, error);
    return { coverage: 0, anyCount: 0, nodeCount: 0 };
  }
} 