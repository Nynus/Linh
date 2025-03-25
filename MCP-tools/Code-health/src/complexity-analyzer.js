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
exports.analyzeComplexity = analyzeComplexity;
exports.analyzeFileComplexitySimple = analyzeFileComplexitySimple;
var fs = require("fs");
var path = require("path");
var ts = require("typescript");
/**
 * Phân tích độ phức tạp của code trong dự án
 */
function analyzeComplexity(files_1, config_1) {
    return __awaiter(this, arguments, void 0, function (files, config, verbose) {
        var result, totalComplexity, _i, files_2, file, relativePath, fileContent, fileComplexity;
        if (verbose === void 0) { verbose = false; }
        return __generator(this, function (_a) {
            if (verbose) {
                console.log('Analyzing code complexity...');
            }
            result = {
                average: 0,
                files: {}
            };
            totalComplexity = 0;
            for (_i = 0, files_2 = files; _i < files_2.length; _i++) {
                file = files_2[_i];
                // Chỉ phân tích file TypeScript và JavaScript
                if (!file.endsWith('.ts') && !file.endsWith('.tsx') &&
                    !file.endsWith('.js') && !file.endsWith('.jsx')) {
                    continue;
                }
                relativePath = path.basename(file);
                if (verbose) {
                    console.log("Analyzing complexity of ".concat(relativePath));
                }
                fileContent = fs.readFileSync(file, 'utf8');
                fileComplexity = analyzeFileComplexity(file, fileContent);
                result.files[relativePath] = fileComplexity;
                totalComplexity += fileComplexity.complexity;
            }
            // Tính độ phức tạp trung bình
            result.average = Object.keys(result.files).length > 0
                ? totalComplexity / Object.keys(result.files).length
                : 0;
            if (verbose) {
                console.log("Average complexity: ".concat(result.average.toFixed(2)));
                console.log("Analyzed ".concat(Object.keys(result.files).length, " files for complexity"));
            }
            return [2 /*return*/, result];
        });
    });
}
/**
 * Phân tích độ phức tạp của một file cụ thể
 */
function analyzeFileComplexity(filePath, fileContent) {
    // Phân tích TypeScript AST
    var sourceFile = ts.createSourceFile(path.basename(filePath), fileContent, ts.ScriptTarget.Latest, true);
    // Tìm tất cả các functions và methods
    var functions = [];
    var totalCyclomaticComplexity = 0;
    var visit = function (node) {
        // Phân tích functions
        if (ts.isFunctionDeclaration(node) ||
            ts.isMethodDeclaration(node) ||
            ts.isArrowFunction(node) ||
            ts.isFunctionExpression(node)) {
            var functionName = getFunctionName(node);
            var startPosition = node.getStart(sourceFile);
            var endPosition = node.getEnd();
            var startLineCol = ts.getLineAndCharacterOfPosition(sourceFile, startPosition);
            var endLineCol = ts.getLineAndCharacterOfPosition(sourceFile, endPosition);
            // Tính toán số dòng
            var startLine = startLineCol.line + 1;
            var endLine = endLineCol.line + 1;
            var lineCount = endLine - startLine + 1;
            // Tính toán độ phức tạp
            var complexity = calculateCyclomaticComplexity(node, sourceFile);
            totalCyclomaticComplexity += complexity;
            // Phân tích số lượng tham số
            var parameterCount = getParameterCount(node);
            // Phân tích độ sâu của lồng nhau
            var nestingDepth = calculateNestingDepth(node, sourceFile);
            functions.push({
                name: functionName,
                lineStart: startLine,
                lineEnd: endLine,
                complexity: complexity,
                lines: lineCount,
                parameters: parameterCount,
                nestingDepth: nestingDepth
            });
        }
        ts.forEachChild(node, visit);
    };
    visit(sourceFile);
    // Tính toán độ phức tạp tổng thể của file
    var fileComplexity = Math.max(1, totalCyclomaticComplexity);
    // Tính chỉ số maintainability (gần với Maintainability Index của Microsoft)
    // Formula: MI = MAX(0, (171 - 5.2 * ln(V) - 0.23 * G - 16.2 * ln(L)) * 100 / 171)
    // Đơn giản hóa công thức:
    var linesOfCode = fileContent.split('\n').length;
    var maintainability = calculateMaintainabilityIndex(fileComplexity, linesOfCode, functions.length);
    return {
        complexity: fileComplexity,
        maintainability: maintainability,
        functions: functions
    };
}
/**
 * Lấy tên của function
 */
function getFunctionName(node) {
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
function calculateCyclomaticComplexity(node, sourceFile) {
    var complexity = 1; // Bắt đầu với 1
    var calculateNodeComplexity = function (node) {
        // Tăng độ phức tạp cho các câu lệnh rẽ nhánh
        if (ts.isIfStatement(node) ||
            ts.isConditionalExpression(node) || // ternary operator
            ts.isCaseClause(node) ||
            ts.isForStatement(node) ||
            ts.isForInStatement(node) ||
            ts.isForOfStatement(node) ||
            ts.isWhileStatement(node) ||
            ts.isDoStatement(node)) {
            complexity++;
        }
        // Tăng độ phức tạp cho các toán tử logic
        if (ts.isBinaryExpression(node)) {
            if (node.operatorToken.kind === ts.SyntaxKind.AmpersandAmpersandToken ||
                node.operatorToken.kind === ts.SyntaxKind.BarBarToken) {
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
function getParameterCount(node) {
    return node.parameters.length;
}
/**
 * Tính toán độ sâu lồng nhau của khối lệnh
 */
function calculateNestingDepth(node, sourceFile) {
    var maxDepth = 0;
    function measureDepth(node, currentDepth) {
        // Cập nhật độ sâu tối đa
        maxDepth = Math.max(maxDepth, currentDepth);
        // Tăng độ sâu cho các khối lệnh
        if (ts.isBlock(node) ||
            ts.isIfStatement(node) ||
            ts.isForStatement(node) ||
            ts.isForInStatement(node) ||
            ts.isForOfStatement(node) ||
            ts.isWhileStatement(node) ||
            ts.isDoStatement(node) ||
            ts.isCaseClause(node) ||
            ts.isTryStatement(node)) {
            currentDepth++;
        }
        // Duyệt qua các node con với độ sâu hiện tại
        ts.forEachChild(node, function (child) { return measureDepth(child, currentDepth); });
    }
    measureDepth(node, 0);
    return maxDepth;
}
/**
 * Tính chỉ số maintainability
 */
function calculateMaintainabilityIndex(complexity, linesOfCode, numFunctions) {
    // Dựa trên công thức Maintainability Index của Microsoft
    // MI = MAX(0, (171 - 5.2 * ln(V) - 0.23 * G - 16.2 * ln(L)) * 100 / 171)
    // Đơn giản hóa công thức:
    var normalized = Math.max(50, Math.min(100, 171 - (5.2 * Math.log(Math.max(1, linesOfCode))) -
        (0.23 * complexity) -
        (16.2 * Math.log(Math.max(1, linesOfCode)))));
    return normalized;
}
/**
 * Phân tích độ phức tạp của code
 */
function analyzeFileComplexitySimple(filePath, fileContent) {
    return __awaiter(this, void 0, void 0, function () {
        var conditionals, functions, classes, logicalOperators, lines, complexity, maintainability;
        return __generator(this, function (_a) {
            conditionals = (fileContent.match(/if|else|switch|case|for|while|do/g) || []).length;
            functions = (fileContent.match(/function|=>/g) || []).length;
            classes = (fileContent.match(/class|interface|enum|type /g) || []).length;
            logicalOperators = (fileContent.match(/&&|\|\||\?\?/g) || []).length;
            lines = fileContent.split('\n').length;
            complexity = calculateComplexity(conditionals, functions, classes, logicalOperators, lines);
            maintainability = calculateMaintainability(complexity, lines);
            return [2 /*return*/, {
                    complexity: complexity,
                    maintainability: maintainability
                }];
        });
    });
}
/**
 * Tính độ phức tạp dựa trên các yếu tố
 */
function calculateComplexity(conditionals, functions, classes, logicalOperators, lines) {
    // Trọng số
    var conditionalWeight = 1;
    var functionWeight = 0.5;
    var classWeight = 0.5;
    var logicalOperatorWeight = 0.3;
    var linesWeight = 0.01;
    // Tính độ phức tạp tổng hợp
    var complexity = conditionals * conditionalWeight +
        functions * functionWeight +
        classes * classWeight +
        logicalOperators * logicalOperatorWeight +
        lines * linesWeight;
    return Math.round(complexity);
}
/**
 * Tính điểm bảo trì dựa trên độ phức tạp và số dòng code
 */
function calculateMaintainability(complexity, lines) {
    // Công thức đơn giản dựa trên độ phức tạp và số dòng code
    // Điểm bảo trì sẽ giảm khi độ phức tạp tăng và số dòng tăng
    var maintainability = 100 - (complexity * 0.8) - (lines * 0.05);
    // Giới hạn trong khoảng 0-100
    return Math.max(0, Math.min(100, maintainability));
}
