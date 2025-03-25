// Cấu hình cho phân tích code
export interface CodeHealthConfig {
  include?: string[];
  exclude: string[];
  thresholds: {
    complexity: number;
    maintainability: number;
    linesOfCode: number;
    security: string;
    duplication: number;
  };
}

// Cấu trúc báo cáo
export interface CodeHealthReport {
  summary?: {
    totalFiles: number;
    totalLines: number;
    totalIssues: number;
    averageComplexity: number;
    typeCoverage: number;
    dependencyHealth: number;
    securityScore: number;
    maintainabilityScore: number;
    testCoverage: number;
    overallHealth: string;
    complexityDistribution: {
      low: number;
      medium: number;
      high: number;
      veryHigh: number;
    };
    issuesBySeverity: {
      error: number;
      warning: number;
      info: number;
    };
  };
  files?: FileReport[];
  issues: any[];
  totalFiles: number;
  totalLinesOfCode: number;
  overallHealth: number;
  maintainabilityScore: number;
  securityScore: number;
  typeCoverage: number;
  totalIssues: number;
  fileReports: FileDetailReport[];
}

// Báo cáo chi tiết cho file được dùng trong reporter.ts
export interface FileDetailReport {
  filePath: string;
  linesOfCode: number;
  healthScore: number;
  maintainabilityScore: number;
  complexity: number;
  issues: FileIssue[];
}

// Định nghĩa vấn đề của file
export interface FileIssue {
  category: string;
  severity: string;
  message: string;
}

// Báo cáo cho từng file
export interface FileReport {
  path: string;
  lines: number;
  complexity: number;
  maintainability: number;
  dependencies: number;
  issues: number;
  typeCoverage: number;
  functions: FunctionReport[];
}

// Báo cáo cho từng function
export interface FunctionReport {
  name: string;
  lineStart: number;
  lineEnd: number;
  complexity: number;
  parameters: number;
  lines: number;
  nestingDepth: number;
}

// Cấu trúc vấn đề tìm thấy trong code
export interface IssueReport {
  file: string;
  line: number;
  column: number;
  message: string;
  severity: string;
  ruleId: string;
  category: string;
  filePath?: string;
}

// Cấu trúc cho phân tích dependency
export interface DependencyAnalysis {
  direct: number;
  indirect: number;
  circular: number;
  external: number;
  health: number;
  total: number;
}

// Cấu trúc cho phân tích security
export interface SecurityAnalysis {
  vulnerabilities: any[];
  totalVulnerabilities: number;
  criticalVulnerabilities: number;
  highVulnerabilities: number;
  mediumVulnerabilities: number;
  lowVulnerabilities: number;
}

// Cấu trúc cho phân tích duplicate code
export interface DuplicationAnalysis {
  percentage: number;
  totalDuplicates: number;
  files: string[];
} 