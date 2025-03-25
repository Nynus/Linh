import * as fs from 'fs-extra';
import * as path from 'path';
import * as chalk from 'chalk';
import { CodeHealthReport } from './types';

/**
 * Tạo báo cáo với định dạng được chỉ định
 */
export async function generateReport(
  report: CodeHealthReport,
  format: 'json' | 'html' | 'markdown' | 'console',
  outputPath: string
): Promise<void> {
  switch (format) {
    case 'json':
      await generateJsonReport(report, outputPath);
      break;
    case 'html':
      await generateHtmlReport(report, outputPath);
      break;
    case 'markdown':
      await generateMarkdownReport(report, outputPath);
      break;
    // Với format "console", không cần làm gì vì kết quả đã hiển thị ra console
    default:
      break;
  }
}

/**
 * Tạo báo cáo dạng JSON
 */
async function generateJsonReport(
  report: CodeHealthReport,
  outputPath: string
): Promise<void> {
  await fs.writeJSON(outputPath, report, { spaces: 2 });
  console.log(`JSON report generated at ${outputPath}`);
}

/**
 * Tạo báo cáo dạng HTML
 */
async function generateHtmlReport(
  report: CodeHealthReport,
  outputPath: string
): Promise<void> {
  // Tạo template HTML đơn giản
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Code Health Report</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 1200px; margin: 0 auto; padding: 20px; }
    h1 { color: #2c3e50; }
    .summary { background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
    .good { color: green; }
    .fair { color: orange; }
    .poor { color: red; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
    th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
    th { background-color: #f2f2f2; }
  </style>
</head>
<body>
  <h1>Code Health Report</h1>
  
  <div class="summary">
    <h2>Summary</h2>
    <p>Total Files: ${report.totalFiles}</p>
    <p>Total Lines of Code: ${report.totalLinesOfCode}</p>
    <p>Overall Health: <span class="${getHealthClass(report.overallHealth)}">${report.overallHealth}%</span></p>
    <p>Maintainability Score: <span class="${getHealthClass(report.maintainabilityScore)}">${report.maintainabilityScore}%</span></p>
    <p>Security Score: <span class="${getHealthClass(report.securityScore)}">${report.securityScore}%</span></p>
    <p>Type Coverage: <span class="${getHealthClass(report.typeCoverage)}">${report.typeCoverage}%</span></p>
    <p>Total Issues: ${report.totalIssues}</p>
  </div>
  
  <h2>Files</h2>
  <table>
    <tr>
      <th>File</th>
      <th>Lines</th>
      <th>Complexity</th>
      <th>Health Score</th>
      <th>Issues</th>
    </tr>
    ${report.fileReports.map(file => `
    <tr>
      <td>${file.filePath}</td>
      <td>${file.linesOfCode}</td>
      <td>${file.complexity}</td>
      <td><span class="${getHealthClass(file.healthScore)}">${file.healthScore}%</span></td>
      <td>${file.issues.length}</td>
    </tr>
    `).join('')}
  </table>
  
  <h2>Issues</h2>
  <table>
    <tr>
      <th>File</th>
      <th>Message</th>
      <th>Category</th>
      <th>Severity</th>
    </tr>
    ${report.issues.map(issue => `
    <tr>
      <td>${issue.filePath || issue.file}</td>
      <td>${issue.message}</td>
      <td>${issue.category}</td>
      <td>${issue.severity}</td>
    </tr>
    `).join('')}
  </table>
</body>
</html>
  `;
  
  await fs.writeFile(outputPath, html, 'utf8');
  console.log(`HTML report generated at ${outputPath}`);
}

/**
 * Tạo báo cáo dạng Markdown
 */
async function generateMarkdownReport(
  report: CodeHealthReport,
  outputPath: string
): Promise<void> {
  const markdown = `# Code Health Report

## Summary

- **Total Files:** ${report.totalFiles}
- **Total Lines of Code:** ${report.totalLinesOfCode}
- **Overall Health:** ${report.overallHealth}%
- **Maintainability Score:** ${report.maintainabilityScore}%
- **Security Score:** ${report.securityScore}%
- **Type Coverage:** ${report.typeCoverage}%
- **Total Issues:** ${report.totalIssues}

## Files

| File | Lines | Complexity | Health Score | Issues |
|------|-------|------------|--------------|--------|
${report.fileReports.map(file => `| ${file.filePath} | ${file.linesOfCode} | ${file.complexity} | ${file.healthScore}% | ${file.issues.length} |`).join('\n')}

## Issues

| File | Message | Category | Severity |
|------|---------|----------|----------|
${report.issues.map(issue => `| ${issue.filePath || issue.file} | ${issue.message} | ${issue.category} | ${issue.severity} |`).join('\n')}
`;
  
  await fs.writeFile(outputPath, markdown, 'utf8');
  console.log(`Markdown report generated at ${outputPath}`);
}

/**
 * Lấy class CSS dựa trên điểm số
 */
function getHealthClass(score: number): string {
  if (score >= 80) return 'good';
  if (score >= 60) return 'fair';
  return 'poor';
}

/**
 * Tạo các khuyến nghị dựa trên kết quả phân tích
 */
function generateRecommendations(report: CodeHealthReport): string {
  const recommendations: string[] = [];

  // Kiểm tra độ phức tạp
  const complexFiles = report.fileReports.filter(file => file.complexity > 15);
  if (complexFiles.length > 0) {
    recommendations.push(`### Reduce Complexity

${complexFiles.length} file(s) have high complexity. Consider refactoring these files to improve maintainability:
${complexFiles
  .slice(0, 5)
  .map(file => `- \`${file.filePath}\` (complexity: ${file.complexity})`)
  .join('\n')}
${complexFiles.length > 5 ? `- *And ${complexFiles.length - 5} more files...*` : ''}
    `);
  }

  // Kiểm tra vấn đề bảo mật
  const securityIssues = report.issues.filter(issue => issue.category === 'security' && issue.severity === 'high');
  if (securityIssues.length > 0) {
    recommendations.push(`### Fix Security Issues

${securityIssues.length} high severity security issue(s) found:
${securityIssues
  .slice(0, 5)
  .map(issue => `- \`${issue.filePath}\`: ${issue.message}`)
  .join('\n')}
${securityIssues.length > 5 ? `- *And ${securityIssues.length - 5} more issues...*` : ''}
    `);
  }

  // Kiểm tra độ bao phủ type
  if (report.typeCoverage < 70) {
    recommendations.push(`### Improve Type Coverage

Current type coverage is ${report.typeCoverage.toFixed(1)}%. Consider adding better type annotations to improve type safety.
    `);
  }

  // Kiểm tra code trùng lặp
  const filesWithDuplication = report.fileReports.filter(file => 
    file.issues.some(issue => issue.category === 'duplication')
  );
  
  if (filesWithDuplication.length > 0) {
    recommendations.push(`### Reduce Code Duplication

${filesWithDuplication.length} file(s) contain duplicated code. Consider extracting common functionality:
${filesWithDuplication
  .slice(0, 5)
  .map(file => `- \`${file.filePath}\``)
  .join('\n')}
${filesWithDuplication.length > 5 ? `- *And ${filesWithDuplication.length - 5} more files...*` : ''}
    `);
  }

  return recommendations.join('\n\n') || 'No specific recommendations at this time.';
} 