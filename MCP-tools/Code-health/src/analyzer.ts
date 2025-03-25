import * as fs from 'fs-extra';
import * as path from 'path';
import * as glob from 'glob';
import { analyzeFileComplexitySimple } from './complexity-analyzer';
import { analyzeDependencies } from './dependency-analyzer';
import { analyzeTypeCoverage } from './type-analyzer';
import { analyzeSecurityIssues } from './security-analyzer';
import { analyzeDuplication } from './duplication-analyzer';
import { CodeHealthConfig, CodeHealthReport, FileDetailReport, FileIssue } from './types';

/**
 * Phân tích dự án
 */
export async function analyzeProject(
  projectPath: string,
  config: CodeHealthConfig
): Promise<CodeHealthReport> {
  // Bước 1: Tìm tất cả các file cần phân tích
  const files = await findFiles(projectPath, config);
  
  // Bước 2: Phân tích từng file và thu thập kết quả
  const fileReports: FileDetailReport[] = [];
  const allIssues: any[] = [];
  let totalLines = 0;
  
  // Các chỉ số tổng hợp
  let totalComplexity = 0;
  let totalMaintainability = 0;
  
  // Phân tích từng file
  for (const file of files) {
    try {
      const fileContent = await fs.readFile(file, 'utf-8');
      const lines = fileContent.split('\n').length;
      totalLines += lines;
      
      // Phân tích độ phức tạp
      const complexityResult = await analyzeFileComplexitySimple(file, fileContent);
      
      // Thu thập vấn đề
      const issues: FileIssue[] = [];
      
      // Thêm các vấn đề về độ phức tạp
      if (complexityResult.complexity > config.thresholds.complexity) {
        issues.push({
          category: 'complexity',
          severity: 'medium',
          message: `File có độ phức tạp (${complexityResult.complexity}) vượt ngưỡng (${config.thresholds.complexity})`
        });
      }
      
      if (lines > config.thresholds.linesOfCode) {
        issues.push({
          category: 'maintainability',
          severity: 'medium',
          message: `File có số dòng (${lines}) vượt ngưỡng (${config.thresholds.linesOfCode})`
        });
      }
      
      // Tính điểm sức khỏe cho file
      const healthScore = calculateHealthScore(complexityResult.complexity, complexityResult.maintainability, issues.length);
      
      // Thêm báo cáo file
      fileReports.push({
        filePath: path.relative(projectPath, file),
        linesOfCode: lines,
        healthScore,
        maintainabilityScore: complexityResult.maintainability,
        complexity: complexityResult.complexity,
        issues
      });
      
      // Cập nhật các chỉ số tổng hợp
      totalComplexity += complexityResult.complexity;
      totalMaintainability += complexityResult.maintainability;
      
      // Thêm các vấn đề vào danh sách tổng hợp
      for (const issue of issues) {
        allIssues.push({
          file: path.relative(projectPath, file),
          filePath: path.relative(projectPath, file),
          line: 1, // Mặc định dòng đầu tiên
          column: 1,
          message: issue.message,
          severity: issue.severity,
          ruleId: issue.category,
          category: issue.category
        });
      }
    } catch (error) {
      console.error(`Lỗi khi phân tích file ${file}:`, error);
    }
  }
  
  // Bước 3: Phân tích ở cấp độ dự án
  
  // Phân tích phụ thuộc
  const dependencyAnalysis = await analyzeDependencies(projectPath);
  
  // Phân tích độ bao phủ type
  const typeCoverage = await analyzeTypeCoverage(projectPath);
  
  // Phân tích vấn đề bảo mật
  const securityAnalysis = await analyzeSecurityIssues(projectPath);
  
  // Phân tích code trùng lặp
  const duplicationAnalysis = await analyzeDuplication(projectPath);
  
  // Bước 4: Tính toán điểm tổng hợp
  const avgComplexity = files.length > 0 ? totalComplexity / files.length : 0;
  const avgMaintainability = files.length > 0 ? totalMaintainability / files.length : 0;
  
  // Tính điểm sức khỏe tổng thể
  const overallHealth = calculateOverallHealth(
    avgMaintainability, 
    typeCoverage, 
    securityAnalysis.score,
    duplicationAnalysis.percentage
  );
  
  // Bước 5: Tạo báo cáo
  const report: CodeHealthReport = {
    summary: {
      totalFiles: files.length,
      totalLines: totalLines,
      totalIssues: allIssues.length,
      averageComplexity: avgComplexity,
      typeCoverage: typeCoverage,
      dependencyHealth: dependencyAnalysis.health,
      securityScore: securityAnalysis.score,
      maintainabilityScore: avgMaintainability,
      testCoverage: 0, // Chưa phân tích độ bao phủ test
      overallHealth: getHealthCategory(overallHealth),
      complexityDistribution: {
        low: 0, // Chưa phân loại phân phối độ phức tạp
        medium: 0,
        high: 0,
        veryHigh: 0
      },
      issuesBySeverity: {
        error: allIssues.filter(i => i.severity === 'high').length,
        warning: allIssues.filter(i => i.severity === 'medium').length,
        info: allIssues.filter(i => i.severity === 'low').length
      }
    },
    files: [], // Chưa thực hiện
    issues: allIssues,
    totalFiles: files.length,
    totalLinesOfCode: totalLines,
    overallHealth: overallHealth,
    maintainabilityScore: avgMaintainability,
    securityScore: securityAnalysis.score,
    typeCoverage: typeCoverage,
    totalIssues: allIssues.length,
    fileReports: fileReports
  };
  
  return report;
}

/**
 * Tìm tất cả các file cần phân tích trong dự án
 */
async function findFiles(projectPath: string, config: CodeHealthConfig): Promise<string[]> {
  const includes = config.include || ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'];
  const excludes = config.exclude || ['**/node_modules/**', '**/dist/**', '**/build/**'];
  
  // Sửa cách xử lý pattern để tránh lỗi invalid pattern
  const options = {
    cwd: projectPath,
    ignore: excludes,
    absolute: true
  };
  
  // Sử dụng glob.sync thay vì glob để tránh Promise/callback
  let files: string[] = [];
  
  for (const pattern of includes) {
    try {
      const matchedFiles = glob.sync(pattern, options);
      files = [...files, ...matchedFiles];
    } catch (error) {
      console.error(`Lỗi khi tìm file với pattern ${pattern}:`, error);
    }
  }
  
  return files;
}

/**
 * Tính điểm sức khỏe cho file dựa trên các chỉ số
 */
function calculateHealthScore(complexity: number, maintainability: number, issuesCount: number): number {
  // Trọng số
  const complexityWeight = 0.3;
  const maintainabilityWeight = 0.5;
  const issuesWeight = 0.2;
  
  // Chuẩn hóa
  const normalizedComplexity = Math.max(0, Math.min(100, (1 - complexity / 30) * 100));
  const normalizedMaintainability = maintainability;
  const normalizedIssues = Math.max(0, Math.min(100, (1 - issuesCount / 10) * 100));
  
  // Tính điểm
  return complexityWeight * normalizedComplexity +
         maintainabilityWeight * normalizedMaintainability +
         issuesWeight * normalizedIssues;
}

/**
 * Tính điểm sức khỏe tổng thể dựa trên các chỉ số
 */
function calculateOverallHealth(
  maintainability: number,
  typeCoverage: number,
  securityScore: number,
  duplication: number
): number {
  // Trọng số
  const maintainabilityWeight = 0.4;
  const typeCoverageWeight = 0.2;
  const securityWeight = 0.3;
  const duplicationWeight = 0.1;
  
  // Chuẩn hóa
  const normalizedDuplication = Math.max(0, Math.min(100, (1 - duplication / 100) * 100));
  
  // Tính điểm
  return maintainabilityWeight * maintainability +
         typeCoverageWeight * typeCoverage +
         securityWeight * securityScore +
         duplicationWeight * normalizedDuplication;
}

/**
 * Chuyển điểm số thành danh mục sức khỏe
 */
function getHealthCategory(score: number): string {
  if (score >= 90) return 'excellent';
  if (score >= 80) return 'good';
  if (score >= 60) return 'fair';
  return 'poor';
} 