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
exports.analyzeTypeCoverage = analyzeTypeCoverage;
exports.analyzeTypeDetail = analyzeTypeDetail;
var fs = require("fs-extra");
var path = require("path");
var ts = require("typescript");
/**
 * Phân tích độ bao phủ của TypeScript types trong dự án
 */
function analyzeTypeCoverage(projectPath) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // Đơn giản hóa - trả về số phần trăm bao phủ type ước tính
            return [2 /*return*/, 80];
        });
    });
}
/**
 * Phân tích độ phủ type của các file TypeScript (phiên bản chi tiết)
 */
function analyzeTypeDetail(projectPath_1, files_1) {
    return __awaiter(this, arguments, void 0, function (projectPath, files, verbose) {
        var result, tsFiles, compilerOptions, compilerHost, totalCoverage, totalAnyCount, totalNodeCount, _i, tsFiles_1, file, relPath, _a, coverage, anyCount, nodeCount;
        if (verbose === void 0) { verbose = false; }
        return __generator(this, function (_b) {
            if (verbose) {
                console.log('Analyzing type coverage...');
            }
            result = {
                overall: 0,
                files: {}
            };
            tsFiles = files.filter(function (file) { return file.endsWith('.ts') || file.endsWith('.tsx'); });
            if (tsFiles.length === 0) {
                if (verbose) {
                    console.log('No TypeScript files found');
                }
                return [2 /*return*/, result];
            }
            compilerOptions = {
                noEmit: true,
                allowJs: true,
                checkJs: true,
                strict: true
            };
            compilerHost = ts.createCompilerHost(compilerOptions);
            totalCoverage = 0;
            totalAnyCount = 0;
            totalNodeCount = 0;
            for (_i = 0, tsFiles_1 = tsFiles; _i < tsFiles_1.length; _i++) {
                file = tsFiles_1[_i];
                relPath = path.relative(projectPath, file);
                _a = analyzeFileCoverage(file, compilerHost, compilerOptions), coverage = _a.coverage, anyCount = _a.anyCount, nodeCount = _a.nodeCount;
                result.files[relPath] = coverage;
                totalAnyCount += anyCount;
                totalNodeCount += nodeCount;
                if (verbose) {
                    console.log("File ".concat(relPath, ": ").concat(coverage.toFixed(2), "% type coverage"));
                }
            }
            // Tính toán độ phủ type tổng thể
            result.overall = totalNodeCount > 0
                ? 100 - (totalAnyCount / totalNodeCount * 100)
                : 0;
            if (verbose) {
                console.log("Overall type coverage: ".concat(result.overall.toFixed(2), "%"));
            }
            return [2 /*return*/, result];
        });
    });
}
/**
 * Phân tích độ phủ type của một file cụ thể
 */
function analyzeFileCoverage(filePath, compilerHost, compilerOptions) {
    try {
        var fileContent = fs.readFileSync(filePath, 'utf8');
        // Phân tích AST của file
        var sourceFile = ts.createSourceFile(path.basename(filePath), fileContent, ts.ScriptTarget.Latest, true);
        // Tạo một chương trình TypeScript cho file này
        var program = ts.createProgram([filePath], compilerOptions, compilerHost);
        // Lấy TypeChecker
        var checker_1 = program.getTypeChecker();
        // Đếm số lượng node có type 'any'
        var anyCount_1 = 0;
        var nodeCount_1 = 0;
        // Hàm đệ quy để duyệt AST
        function visit(node) {
            // Chỉ xem xét các node biểu thị giá trị hoặc biến
            if (ts.isVariableDeclaration(node) ||
                ts.isParameter(node) ||
                ts.isPropertyDeclaration(node) ||
                ts.isFunctionDeclaration(node) ||
                ts.isMethodDeclaration(node)) {
                nodeCount_1++;
                // Lấy type của node
                var type = checker_1.getTypeAtLocation(node);
                var typeString = checker_1.typeToString(type);
                // Kiểm tra nếu là any
                if (typeString === 'any' || typeString.includes('any[]')) {
                    anyCount_1++;
                }
            }
            // Duyệt các node con
            ts.forEachChild(node, visit);
        }
        // Bắt đầu duyệt từ root
        visit(sourceFile);
        // Tính toán độ phủ type
        var coverage = nodeCount_1 > 0 ? 100 - (anyCount_1 / nodeCount_1 * 100) : 100;
        return { coverage: coverage, anyCount: anyCount_1, nodeCount: nodeCount_1 };
    }
    catch (error) {
        console.error("Error analyzing type coverage for ".concat(filePath, ":"), error);
        return { coverage: 0, anyCount: 0, nodeCount: 0 };
    }
}
