#!/usr/bin/env node
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var fs = require("fs-extra");
var path = require("path");
var chalk = require("chalk");
var yargs = require("yargs");
var helpers_1 = require("yargs/helpers");
var analyzer_1 = require("./analyzer");
var reporter_1 = require("./reporter");
// Cấu hình mặc định
var DEFAULT_CONFIG = {
    exclude: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/coverage/**', '**/.git/**'],
    thresholds: {
        complexity: 15,
        maintainability: 65,
        linesOfCode: 300,
        security: 'high',
        duplication: 10
    }
};
// Hàm chính
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var argv, projectPath, config, configPath, customConfig, error_1, startTime, results, endTime, outputPath, lowHealthFiles, _i, lowHealthFiles_1, file, topIssues, _a, topIssues_1, issue, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 12, , 13]);
                    argv = yargs((0, helpers_1.hideBin)(process.argv))
                        .usage('Usage: $0 [options]')
                        .option('path', {
                        alias: 'p',
                        description: 'Đường dẫn đến dự án cần phân tích',
                        type: 'string',
                        default: '.'
                    })
                        .option('config', {
                        alias: 'c',
                        description: 'File cấu hình',
                        type: 'string'
                    })
                        .option('format', {
                        alias: 'f',
                        description: 'Định dạng báo cáo (json, html, markdown, console)',
                        choices: ['json', 'html', 'markdown', 'console'],
                        default: 'console'
                    })
                        .option('output', {
                        alias: 'o',
                        description: 'Đường dẫn file báo cáo',
                        type: 'string',
                        default: './code-health-report'
                    })
                        .option('verbose', {
                        alias: 'v',
                        description: 'Hiển thị thông tin chi tiết',
                        type: 'boolean',
                        default: false
                    })
                        .help()
                        .alias('help', 'h')
                        .parseSync();
                    projectPath = path.resolve(argv.path);
                    // Kiểm tra xem thư mục dự án có tồn tại không
                    if (!fs.existsSync(projectPath)) {
                        console.error(chalk.red("Error: Path ".concat(projectPath, " does not exist")));
                        process.exit(1);
                    }
                    console.log(chalk.cyan("Analyzing project at ".concat(projectPath)));
                    config = DEFAULT_CONFIG;
                    if (!argv.config) return [3 /*break*/, 7];
                    configPath = path.resolve(argv.config);
                    if (!fs.existsSync(configPath)) return [3 /*break*/, 5];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fs.readJSON(configPath)];
                case 2:
                    customConfig = _b.sent();
                    config = __assign(__assign({}, DEFAULT_CONFIG), customConfig);
                    console.log(chalk.cyan('Using custom configuration'));
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    console.error(chalk.yellow("Warning: Failed to read config file: ".concat(configPath)));
                    console.log(chalk.cyan('Using default configuration'));
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 6];
                case 5:
                    console.error(chalk.yellow("Warning: Config file not found: ".concat(configPath)));
                    console.log(chalk.cyan('Using default configuration'));
                    _b.label = 6;
                case 6: return [3 /*break*/, 8];
                case 7:
                    console.log(chalk.cyan('Using default configuration'));
                    _b.label = 8;
                case 8:
                    // Tiến hành phân tích
                    console.log(chalk.cyan('Starting code health analysis...'));
                    startTime = Date.now();
                    return [4 /*yield*/, (0, analyzer_1.analyzeProject)(projectPath, config)];
                case 9:
                    results = _b.sent();
                    endTime = Date.now();
                    // Hiển thị thông tin tóm tắt
                    console.log(chalk.green('\n=== Code Health Report ==='));
                    console.log(chalk.white("Total Files: ".concat(results.totalFiles)));
                    console.log(chalk.white("Total Lines of Code: ".concat(results.totalLinesOfCode)));
                    console.log(chalk.white("Overall Health: ".concat(formatHealth(results.overallHealth))));
                    console.log(chalk.white("Maintainability Score: ".concat(formatHealth(results.maintainabilityScore))));
                    console.log(chalk.white("Security Score: ".concat(formatHealth(results.securityScore))));
                    console.log(chalk.white("Type Coverage: ".concat(formatHealth(results.typeCoverage))));
                    console.log(chalk.white("Total Issues: ".concat(formatIssueCount(results.totalIssues))));
                    console.log(chalk.white("Analysis Time: ".concat((endTime - startTime) / 1000, "s")));
                    if (!(argv.format !== 'console')) return [3 /*break*/, 11];
                    outputPath = argv.output;
                    if (!outputPath.endsWith(".".concat(argv.format))) {
                        outputPath += ".".concat(argv.format);
                    }
                    // Tạo báo cáo
                    return [4 /*yield*/, (0, reporter_1.generateReport)(results, argv.format, outputPath)];
                case 10:
                    // Tạo báo cáo
                    _b.sent();
                    console.log(chalk.green("\nReport generated at: ".concat(path.resolve(outputPath))));
                    _b.label = 11;
                case 11:
                    // Nếu verbose, hiển thị thêm thông tin
                    if (argv.verbose) {
                        console.log(chalk.cyan('\n=== Files with Lowest Health Scores ==='));
                        lowHealthFiles = __spreadArray([], results.fileReports, true).sort(function (a, b) { return a.healthScore - b.healthScore; })
                            .slice(0, 5);
                        for (_i = 0, lowHealthFiles_1 = lowHealthFiles; _i < lowHealthFiles_1.length; _i++) {
                            file = lowHealthFiles_1[_i];
                            console.log(chalk.white("".concat(file.filePath, ": ").concat(formatHealth(file.healthScore), " (Complexity: ").concat(file.complexity, ")")));
                        }
                        console.log(chalk.cyan('\n=== Top Issues ==='));
                        topIssues = results.issues.slice(0, 5);
                        for (_a = 0, topIssues_1 = topIssues; _a < topIssues_1.length; _a++) {
                            issue = topIssues_1[_a];
                            console.log(chalk.white("".concat(issue.filePath || issue.file, ": ").concat(issue.message, " (").concat(issue.severity, ")")));
                        }
                    }
                    return [3 /*break*/, 13];
                case 12:
                    error_2 = _b.sent();
                    console.error(chalk.red('Error during analysis:'), error_2);
                    process.exit(1);
                    return [3 /*break*/, 13];
                case 13: return [2 /*return*/];
            }
        });
    });
}
// Hàm định dạng điểm health
function formatHealth(score) {
    if (score >= 80) {
        return chalk.green("".concat(score.toFixed(1), "%"));
    }
    else if (score >= 60) {
        return chalk.yellow("".concat(score.toFixed(1), "%"));
    }
    else {
        return chalk.red("".concat(score.toFixed(1), "%"));
    }
}
// Hàm định dạng số lượng vấn đề
function formatIssueCount(count) {
    if (count === 0) {
        return chalk.green(count.toString());
    }
    else if (count < 10) {
        return chalk.yellow(count.toString());
    }
    else {
        return chalk.red(count.toString());
    }
}
// Chạy hàm main
if (require.main === module) {
    main().catch(function (error) {
        console.error('Unhandled error:', error);
        process.exit(1);
    });
}
