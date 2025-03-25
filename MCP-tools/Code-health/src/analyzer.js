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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeProject = analyzeProject;
var fs = require("fs-extra");
var path = require("path");
var glob = require("glob");
var complexity_analyzer_1 = require("./complexity-analyzer");
var dependency_analyzer_1 = require("./dependency-analyzer");
var type_analyzer_1 = require("./type-analyzer");
var security_analyzer_1 = require("./security-analyzer");
var duplication_analyzer_1 = require("./duplication-analyzer");
/**
 * Phân tích dự án
 */
function analyzeProject(projectPath, config) {
    return __awaiter(this, void 0, void 0, function () {
        var files, fileReports, allIssues, totalLines, totalComplexity, totalMaintainability, _i, files_1, file, fileContent, lines, complexityResult, issues, healthScore, _a, issues_1, issue, error_1, dependencyAnalysis, typeCoverage, securityAnalysis, duplicationAnalysis, avgComplexity, avgMaintainability, overallHealth, report;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, findFiles(projectPath, config)];
                case 1:
                    files = _b.sent();
                    fileReports = [];
                    allIssues = [];
                    totalLines = 0;
                    totalComplexity = 0;
                    totalMaintainability = 0;
                    _i = 0, files_1 = files;
                    _b.label = 2;
                case 2:
                    if (!(_i < files_1.length)) return [3 /*break*/, 8];
                    file = files_1[_i];
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 6, , 7]);
                    return [4 /*yield*/, fs.readFile(file, 'utf-8')];
                case 4:
                    fileContent = _b.sent();
                    lines = fileContent.split('\n').length;
                    totalLines += lines;
                    return [4 /*yield*/, (0, complexity_analyzer_1.analyzeFileComplexitySimple)(file, fileContent)];
                case 5:
                    complexityResult = _b.sent();
                    issues = [];
                    // Thêm các vấn đề về độ phức tạp
                    if (complexityResult.complexity > config.thresholds.complexity) {
                        issues.push({
                            category: 'complexity',
                            severity: 'medium',
                            message: "File c\u00F3 \u0111\u1ED9 ph\u1EE9c t\u1EA1p (".concat(complexityResult.complexity, ") v\u01B0\u1EE3t ng\u01B0\u1EE1ng (").concat(config.thresholds.complexity, ")")
                        });
                    }
                    if (lines > config.thresholds.linesOfCode) {
                        issues.push({
                            category: 'maintainability',
                            severity: 'medium',
                            message: "File c\u00F3 s\u1ED1 d\u00F2ng (".concat(lines, ") v\u01B0\u1EE3t ng\u01B0\u1EE1ng (").concat(config.thresholds.linesOfCode, ")")
                        });
                    }
                    healthScore = calculateHealthScore(complexityResult.complexity, complexityResult.maintainability, issues.length);
                    // Thêm báo cáo file
                    fileReports.push({
                        filePath: path.relative(projectPath, file),
                        linesOfCode: lines,
                        healthScore: healthScore,
                        maintainabilityScore: complexityResult.maintainability,
                        complexity: complexityResult.complexity,
                        issues: issues
                    });
                    // Cập nhật các chỉ số tổng hợp
                    totalComplexity += complexityResult.complexity;
                    totalMaintainability += complexityResult.maintainability;
                    // Thêm các vấn đề vào danh sách tổng hợp
                    for (_a = 0, issues_1 = issues; _a < issues_1.length; _a++) {
                        issue = issues_1[_a];
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
                    return [3 /*break*/, 7];
                case 6:
                    error_1 = _b.sent();
                    console.error("L\u1ED7i khi ph\u00E2n t\u00EDch file ".concat(file, ":"), error_1);
                    return [3 /*break*/, 7];
                case 7:
                    _i++;
                    return [3 /*break*/, 2];
                case 8: return [4 /*yield*/, (0, dependency_analyzer_1.analyzeDependencies)(projectPath)];
                case 9:
                    dependencyAnalysis = _b.sent();
                    return [4 /*yield*/, (0, type_analyzer_1.analyzeTypeCoverage)(projectPath)];
                case 10:
                    typeCoverage = _b.sent();
                    return [4 /*yield*/, (0, security_analyzer_1.analyzeSecurityIssues)(projectPath)];
                case 11:
                    securityAnalysis = _b.sent();
                    return [4 /*yield*/, (0, duplication_analyzer_1.analyzeDuplication)(projectPath)];
                case 12:
                    duplicationAnalysis = _b.sent();
                    avgComplexity = files.length > 0 ? totalComplexity / files.length : 0;
                    avgMaintainability = files.length > 0 ? totalMaintainability / files.length : 0;
                    overallHealth = calculateOverallHealth(avgMaintainability, typeCoverage, securityAnalysis.score, duplicationAnalysis.percentage);
                    report = {
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
                                error: allIssues.filter(function (i) { return i.severity === 'high'; }).length,
                                warning: allIssues.filter(function (i) { return i.severity === 'medium'; }).length,
                                info: allIssues.filter(function (i) { return i.severity === 'low'; }).length
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
                    return [2 /*return*/, report];
            }
        });
    });
}
/**
 * Tìm tất cả các file cần phân tích trong dự án
 */
function findFiles(projectPath, config) {
    return __awaiter(this, void 0, void 0, function () {
        var includes, excludes, options, files, _i, includes_1, pattern, matchedFiles;
        return __generator(this, function (_a) {
            includes = config.include || ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'];
            excludes = config.exclude || ['**/node_modules/**', '**/dist/**', '**/build/**'];
            options = {
                cwd: projectPath,
                ignore: excludes,
                absolute: true
            };
            files = [];
            for (_i = 0, includes_1 = includes; _i < includes_1.length; _i++) {
                pattern = includes_1[_i];
                try {
                    matchedFiles = glob.sync(pattern, options);
                    files = __spreadArray(__spreadArray([], files, true), matchedFiles, true);
                }
                catch (error) {
                    console.error("L\u1ED7i khi t\u00ECm file v\u1EDBi pattern ".concat(pattern, ":"), error);
                }
            }
            return [2 /*return*/, files];
        });
    });
}
/**
 * Tính điểm sức khỏe cho file dựa trên các chỉ số
 */
function calculateHealthScore(complexity, maintainability, issuesCount) {
    // Trọng số
    var complexityWeight = 0.3;
    var maintainabilityWeight = 0.5;
    var issuesWeight = 0.2;
    // Chuẩn hóa
    var normalizedComplexity = Math.max(0, Math.min(100, (1 - complexity / 30) * 100));
    var normalizedMaintainability = maintainability;
    var normalizedIssues = Math.max(0, Math.min(100, (1 - issuesCount / 10) * 100));
    // Tính điểm
    return complexityWeight * normalizedComplexity +
        maintainabilityWeight * normalizedMaintainability +
        issuesWeight * normalizedIssues;
}
/**
 * Tính điểm sức khỏe tổng thể dựa trên các chỉ số
 */
function calculateOverallHealth(maintainability, typeCoverage, securityScore, duplication) {
    // Trọng số
    var maintainabilityWeight = 0.4;
    var typeCoverageWeight = 0.2;
    var securityWeight = 0.3;
    var duplicationWeight = 0.1;
    // Chuẩn hóa
    var normalizedDuplication = Math.max(0, Math.min(100, (1 - duplication / 100) * 100));
    // Tính điểm
    return maintainabilityWeight * maintainability +
        typeCoverageWeight * typeCoverage +
        securityWeight * securityScore +
        duplicationWeight * normalizedDuplication;
}
/**
 * Chuyển điểm số thành danh mục sức khỏe
 */
function getHealthCategory(score) {
    if (score >= 90)
        return 'excellent';
    if (score >= 80)
        return 'good';
    if (score >= 60)
        return 'fair';
    return 'poor';
}
