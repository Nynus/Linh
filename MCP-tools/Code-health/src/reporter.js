"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReport = generateReport;
var fs = require("fs-extra");
/**
 * Tạo báo cáo với định dạng được chỉ định
 */
function generateReport(report, format, outputPath) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = format;
                    switch (_a) {
                        case 'json': return [3 /*break*/, 1];
                        case 'html': return [3 /*break*/, 3];
                        case 'markdown': return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 7];
                case 1: return [4 /*yield*/, generateJsonReport(report, outputPath)];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 8];
                case 3: return [4 /*yield*/, generateHtmlReport(report, outputPath)];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 8];
                case 5: return [4 /*yield*/, generateMarkdownReport(report, outputPath)];
                case 6:
                    _b.sent();
                    return [3 /*break*/, 8];
                case 7: return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
/**
 * Tạo báo cáo dạng JSON
 */
function generateJsonReport(report, outputPath) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs.writeJSON(outputPath, report, { spaces: 2 })];
                case 1:
                    _a.sent();
                    console.log("JSON report generated at ".concat(outputPath));
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Tạo báo cáo dạng HTML
 */
function generateHtmlReport(report, outputPath) {
    return __awaiter(this, void 0, void 0, function () {
        var html;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    html = "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Code Health Report</title>\n  <style>\n    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 1200px; margin: 0 auto; padding: 20px; }\n    h1 { color: #2c3e50; }\n    .summary { background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin-bottom: 20px; }\n    .good { color: green; }\n    .fair { color: orange; }\n    .poor { color: red; }\n    table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }\n    th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }\n    th { background-color: #f2f2f2; }\n  </style>\n</head>\n<body>\n  <h1>Code Health Report</h1>\n  \n  <div class=\"summary\">\n    <h2>Summary</h2>\n    <p>Total Files: ".concat(report.totalFiles, "</p>\n    <p>Total Lines of Code: ").concat(report.totalLinesOfCode, "</p>\n    <p>Overall Health: <span class=\"").concat(getHealthClass(report.overallHealth), "\">").concat(report.overallHealth, "%</span></p>\n    <p>Maintainability Score: <span class=\"").concat(getHealthClass(report.maintainabilityScore), "\">").concat(report.maintainabilityScore, "%</span></p>\n    <p>Security Score: <span class=\"").concat(getHealthClass(report.securityScore), "\">").concat(report.securityScore, "%</span></p>\n    <p>Type Coverage: <span class=\"").concat(getHealthClass(report.typeCoverage), "\">").concat(report.typeCoverage, "%</span></p>\n    <p>Total Issues: ").concat(report.totalIssues, "</p>\n  </div>\n  \n  <h2>Files</h2>\n  <table>\n    <tr>\n      <th>File</th>\n      <th>Lines</th>\n      <th>Complexity</th>\n      <th>Health Score</th>\n      <th>Issues</th>\n    </tr>\n    ").concat(report.fileReports.map(function (file) { return "\n    <tr>\n      <td>".concat(file.filePath, "</td>\n      <td>").concat(file.linesOfCode, "</td>\n      <td>").concat(file.complexity, "</td>\n      <td><span class=\"").concat(getHealthClass(file.healthScore), "\">").concat(file.healthScore, "%</span></td>\n      <td>").concat(file.issues.length, "</td>\n    </tr>\n    "); }).join(''), "\n  </table>\n  \n  <h2>Issues</h2>\n  <table>\n    <tr>\n      <th>File</th>\n      <th>Message</th>\n      <th>Category</th>\n      <th>Severity</th>\n    </tr>\n    ").concat(report.issues.map(function (issue) { return "\n    <tr>\n      <td>".concat(issue.filePath || issue.file, "</td>\n      <td>").concat(issue.message, "</td>\n      <td>").concat(issue.category, "</td>\n      <td>").concat(issue.severity, "</td>\n    </tr>\n    "); }).join(''), "\n  </table>\n</body>\n</html>\n  ");
                    return [4 /*yield*/, fs.writeFile(outputPath, html, 'utf8')];
                case 1:
                    _a.sent();
                    console.log("HTML report generated at ".concat(outputPath));
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Tạo báo cáo dạng Markdown
 */
function generateMarkdownReport(report, outputPath) {
    return __awaiter(this, void 0, void 0, function () {
        var markdown;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    markdown = "# Code Health Report\n\n## Summary\n\n- **Total Files:** ".concat(report.totalFiles, "\n- **Total Lines of Code:** ").concat(report.totalLinesOfCode, "\n- **Overall Health:** ").concat(report.overallHealth, "%\n- **Maintainability Score:** ").concat(report.maintainabilityScore, "%\n- **Security Score:** ").concat(report.securityScore, "%\n- **Type Coverage:** ").concat(report.typeCoverage, "%\n- **Total Issues:** ").concat(report.totalIssues, "\n\n## Files\n\n| File | Lines | Complexity | Health Score | Issues |\n|------|-------|------------|--------------|--------|\n").concat(report.fileReports.map(function (file) { return "| ".concat(file.filePath, " | ").concat(file.linesOfCode, " | ").concat(file.complexity, " | ").concat(file.healthScore, "% | ").concat(file.issues.length, " |"); }).join('\n'), "\n\n## Issues\n\n| File | Message | Category | Severity |\n|------|---------|----------|----------|\n").concat(report.issues.map(function (issue) { return "| ".concat(issue.filePath || issue.file, " | ").concat(issue.message, " | ").concat(issue.category, " | ").concat(issue.severity, " |"); }).join('\n'), "\n");
                    return [4 /*yield*/, fs.writeFile(outputPath, markdown, 'utf8')];
                case 1:
                    _a.sent();
                    console.log("Markdown report generated at ".concat(outputPath));
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Lấy class CSS dựa trên điểm số
 */
function getHealthClass(score) {
    if (score >= 80)
        return 'good';
    if (score >= 60)
        return 'fair';
    return 'poor';
}
/**
 * Tạo các khuyến nghị dựa trên kết quả phân tích
 */
function generateRecommendations(report) {
    var recommendations = [];
    // Kiểm tra độ phức tạp
    var complexFiles = report.fileReports.filter(function (file) { return file.complexity > 15; });
    if (complexFiles.length > 0) {
        recommendations.push("### Reduce Complexity\n\n".concat(complexFiles.length, " file(s) have high complexity. Consider refactoring these files to improve maintainability:\n").concat(complexFiles
            .slice(0, 5)
            .map(function (file) { return "- `".concat(file.filePath, "` (complexity: ").concat(file.complexity, ")"); })
            .join('\n'), "\n").concat(complexFiles.length > 5 ? "- *And ".concat(complexFiles.length - 5, " more files...*") : '', "\n    "));
    }
    // Kiểm tra vấn đề bảo mật
    var securityIssues = report.issues.filter(function (issue) { return issue.category === 'security' && issue.severity === 'high'; });
    if (securityIssues.length > 0) {
        recommendations.push("### Fix Security Issues\n\n".concat(securityIssues.length, " high severity security issue(s) found:\n").concat(securityIssues
            .slice(0, 5)
            .map(function (issue) { return "- `".concat(issue.filePath, "`: ").concat(issue.message); })
            .join('\n'), "\n").concat(securityIssues.length > 5 ? "- *And ".concat(securityIssues.length - 5, " more issues...*") : '', "\n    "));
    }
    // Kiểm tra độ bao phủ type
    if (report.typeCoverage < 70) {
        recommendations.push("### Improve Type Coverage\n\nCurrent type coverage is ".concat(report.typeCoverage.toFixed(1), "%. Consider adding better type annotations to improve type safety.\n    "));
    }
    // Kiểm tra code trùng lặp
    var filesWithDuplication = report.fileReports.filter(function (file) {
        return file.issues.some(function (issue) { return issue.category === 'duplication'; });
    });
    if (filesWithDuplication.length > 0) {
        recommendations.push("### Reduce Code Duplication\n\n".concat(filesWithDuplication.length, " file(s) contain duplicated code. Consider extracting common functionality:\n").concat(filesWithDuplication
            .slice(0, 5)
            .map(function (file) { return "- `".concat(file.filePath, "`"); })
            .join('\n'), "\n").concat(filesWithDuplication.length > 5 ? "- *And ".concat(filesWithDuplication.length - 5, " more files...*") : '', "\n    "));
    }
    return recommendations.join('\n\n') || 'No specific recommendations at this time.';
}
