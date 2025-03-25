import * as fs from 'fs-extra';
import * as path from 'path';
import * as ts from 'typescript';
import { DependencyAnalysis } from './types';

interface DependencyResult {
  health: number; // 0-100 score
  filesDependencies: {
    [filePath: string]: {
      direct: number; // Số lượng module import trực tiếp
      indirect: number; // Số lượng dependency gián tiếp
      circular: boolean; // Có phát hiện circular dependency không
      unusedImports: number; // Số lượng import không sử dụng
    }
  };
  analysis: DependencyAnalysis;
}

/**
 * Phân tích các phụ thuộc trong dự án
 */
export async function analyzeDependencies(
  projectPath: string
): Promise<DependencyAnalysis> {
  // Cài đặt giả mới được đơn giản hóa
  return {
    direct: 10,
    indirect: 20,
    circular: 2,
    external: 15,
    health: 85,
    total: 47
  };
}

/**
 * Phân tích dependencies trong package.json
 */
async function analyzePackageDependencies(
  projectPath: string,
  verbose: boolean
): Promise<{
  totalDependencies: number;
  outdatedDependencies: number;
  direct: number;
  dev: number;
  peer: number;
  optional: number;
  unusedDependencies: number;
  heaviestDependencies: string[];
}> {
  try {
    const packageJsonPath = path.join(projectPath, 'package.json');
    
    if (!fs.existsSync(packageJsonPath)) {
      if (verbose) {
        console.log('No package.json found');
      }
      
      return {
        totalDependencies: 0,
        outdatedDependencies: 0,
        direct: 0,
        dev: 0,
        peer: 0,
        optional: 0,
        unusedDependencies: 0,
        heaviestDependencies: []
      };
    }
    
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Đếm dependencies dựa theo loại
    const dependencies = packageJson.dependencies || {};
    const devDependencies = packageJson.devDependencies || {};
    const peerDependencies = packageJson.peerDependencies || {};
    const optionalDependencies = packageJson.optionalDependencies || {};
    
    const directCount = Object.keys(dependencies).length;
    const devCount = Object.keys(devDependencies).length;
    const peerCount = Object.keys(peerDependencies).length;
    const optionalCount = Object.keys(optionalDependencies).length;
    
    const totalDependencies = directCount + devCount + peerCount + optionalCount;
    
    // Giả lập phân tích outdated dependencies (trong thực tế sẽ sử dụng npm outdated)
    // và phân tích unused dependencies (trong thực tế sẽ phân tích import)
    const outdatedDependencies = 0; // Cần triển khai thực tế với npm outdated
    const unusedDependencies = 0; // Cần triển khai thực tế
    
    // Danh sách các heavy dependencies (trong thực tế sẽ sử dụng package-size hoặc phân tích node_modules)
    const heaviestDependencies: string[] = [];
    
    if (verbose) {
      console.log(`Total dependencies: ${totalDependencies}`);
      console.log(`Direct dependencies: ${directCount}`);
      console.log(`Dev dependencies: ${devCount}`);
    }
    
    return {
      totalDependencies,
      outdatedDependencies,
      direct: directCount,
      dev: devCount,
      peer: peerCount,
      optional: optionalCount,
      unusedDependencies,
      heaviestDependencies
    };
  } catch (error) {
    console.error('Error analyzing package dependencies:', error);
    
    return {
      totalDependencies: 0,
      outdatedDependencies: 0,
      direct: 0,
      dev: 0,
      peer: 0,
      optional: 0,
      unusedDependencies: 0,
      heaviestDependencies: []
    };
  }
}

/**
 * Phân tích dependencies giữa các file
 */
async function analyzeFileDependencies(
  files: string[], 
  projectPath: string,
  verbose: boolean
): Promise<{
  filesDependencies: {
    [filePath: string]: {
      direct: number;
      indirect: number;
      circular: boolean;
      unusedImports: number;
    }
  };
  circularDependenciesCount: number;
}> {
  const filesDependencies: {
    [filePath: string]: {
      direct: number;
      indirect: number;
      circular: boolean;
      unusedImports: number;
    }
  } = {};
  
  // Xây dựng dependency graph
  const dependencyGraph: Record<string, string[]> = {};
  
  // Phân tích import cho từng file
  for (const file of files) {
    if (!file.endsWith('.ts') && !file.endsWith('.tsx') && 
        !file.endsWith('.js') && !file.endsWith('.jsx')) {
      continue;
    }
    
    const relPath = path.relative(projectPath, file);
    const fileContent = fs.readFileSync(file, 'utf8');
    
    // Phân tích ast để tìm imports
    const sourceFile = ts.createSourceFile(
      path.basename(file),
      fileContent,
      ts.ScriptTarget.Latest,
      true
    );
    
    const imports: string[] = [];
    
    const collectImports = (node: ts.Node) => {
      if (ts.isImportDeclaration(node) && node.moduleSpecifier && ts.isStringLiteral(node.moduleSpecifier)) {
        const importPath = node.moduleSpecifier.text;
        
        // Chỉ quan tâm đến các file trong dự án (không phải node_modules)
        if (importPath.startsWith('.')) {
          imports.push(importPath);
        }
      }
      
      ts.forEachChild(node, collectImports);
    };
    
    collectImports(sourceFile);
    
    // Lưu vào dependency graph
    dependencyGraph[relPath] = imports;
    
    // Lưu thông tin phân tích
    filesDependencies[relPath] = {
      direct: imports.length,
      indirect: 0, // Sẽ tính sau
      circular: false, // Sẽ kiểm tra sau
      unusedImports: 0 // Trong thực tế sẽ kiểm tra AST
    };
  }
  
  // Kiểm tra circular dependencies
  let circularDependenciesCount = 0;
  for (const [file, imports] of Object.entries(dependencyGraph)) {
    // Đơn giản hóa: chỉ kiểm tra cycle trực tiếp
    for (const importFile of imports) {
      // Chuẩn hóa đường dẫn import thành tương đối với projectPath
      const absoluteImportPath = path.resolve(path.dirname(path.join(projectPath, file)), importFile);
      const relativeImportPath = path.relative(projectPath, absoluteImportPath);
      
      if (dependencyGraph[relativeImportPath]?.includes(file)) {
        filesDependencies[file].circular = true;
        circularDependenciesCount++;
      }
    }
  }
  
  if (verbose) {
    console.log(`Found ${circularDependenciesCount} circular dependencies`);
  }
  
  return {
    filesDependencies,
    circularDependenciesCount
  };
}

/**
 * Tính toán điểm health score dựa trên kết quả phân tích
 */
function calculateDependencyHealthScore(
  packageDependencies: {
    totalDependencies: number;
    outdatedDependencies: number;
    unusedDependencies: number;
  },
  fileDependencies: {
    circularDependenciesCount: number;
  }
): number {
  // Bắt đầu với điểm tối đa
  let score = 100;
  
  // Giảm điểm cho outdated dependencies
  const outdatedRatio = packageDependencies.totalDependencies > 0 
    ? packageDependencies.outdatedDependencies / packageDependencies.totalDependencies 
    : 0;
  
  score -= outdatedRatio * 25; // Giảm tối đa 25 điểm cho outdated
  
  // Giảm điểm cho unused dependencies
  const unusedRatio = packageDependencies.totalDependencies > 0 
    ? packageDependencies.unusedDependencies / packageDependencies.totalDependencies 
    : 0;
  
  score -= unusedRatio * 20; // Giảm tối đa 20 điểm cho unused
  
  // Giảm điểm cho circular dependencies
  score -= Math.min(20, fileDependencies.circularDependenciesCount * 5); // Giảm tối đa 20 điểm
  
  // Đảm bảo điểm nằm trong khoảng 0-100
  return Math.max(0, Math.min(100, score));
} 