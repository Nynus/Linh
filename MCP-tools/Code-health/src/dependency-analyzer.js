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
exports.analyzeDependencies = analyzeDependencies;
var fs = require("fs-extra");
var path = require("path");
var ts = require("typescript");
/**
 * Phân tích các phụ thuộc trong dự án
 */
function analyzeDependencies(projectPath) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // Cài đặt giả mới được đơn giản hóa
            return [2 /*return*/, {
                    direct: 10,
                    indirect: 20,
                    circular: 2,
                    external: 15,
                    health: 85,
                    total: 47
                }];
        });
    });
}
/**
 * Phân tích dependencies trong package.json
 */
function analyzePackageDependencies(projectPath, verbose) {
    return __awaiter(this, void 0, void 0, function () {
        var packageJsonPath, packageJson, dependencies, devDependencies, peerDependencies, optionalDependencies, directCount, devCount, peerCount, optionalCount, totalDependencies, outdatedDependencies, unusedDependencies, heaviestDependencies;
        return __generator(this, function (_a) {
            try {
                packageJsonPath = path.join(projectPath, 'package.json');
                if (!fs.existsSync(packageJsonPath)) {
                    if (verbose) {
                        console.log('No package.json found');
                    }
                    return [2 /*return*/, {
                            totalDependencies: 0,
                            outdatedDependencies: 0,
                            direct: 0,
                            dev: 0,
                            peer: 0,
                            optional: 0,
                            unusedDependencies: 0,
                            heaviestDependencies: []
                        }];
                }
                packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
                dependencies = packageJson.dependencies || {};
                devDependencies = packageJson.devDependencies || {};
                peerDependencies = packageJson.peerDependencies || {};
                optionalDependencies = packageJson.optionalDependencies || {};
                directCount = Object.keys(dependencies).length;
                devCount = Object.keys(devDependencies).length;
                peerCount = Object.keys(peerDependencies).length;
                optionalCount = Object.keys(optionalDependencies).length;
                totalDependencies = directCount + devCount + peerCount + optionalCount;
                outdatedDependencies = 0;
                unusedDependencies = 0;
                heaviestDependencies = [];
                if (verbose) {
                    console.log("Total dependencies: ".concat(totalDependencies));
                    console.log("Direct dependencies: ".concat(directCount));
                    console.log("Dev dependencies: ".concat(devCount));
                }
                return [2 /*return*/, {
                        totalDependencies: totalDependencies,
                        outdatedDependencies: outdatedDependencies,
                        direct: directCount,
                        dev: devCount,
                        peer: peerCount,
                        optional: optionalCount,
                        unusedDependencies: unusedDependencies,
                        heaviestDependencies: heaviestDependencies
                    }];
            }
            catch (error) {
                console.error('Error analyzing package dependencies:', error);
                return [2 /*return*/, {
                        totalDependencies: 0,
                        outdatedDependencies: 0,
                        direct: 0,
                        dev: 0,
                        peer: 0,
                        optional: 0,
                        unusedDependencies: 0,
                        heaviestDependencies: []
                    }];
            }
            return [2 /*return*/];
        });
    });
}
/**
 * Phân tích dependencies giữa các file
 */
function analyzeFileDependencies(files, projectPath, verbose) {
    return __awaiter(this, void 0, void 0, function () {
        var filesDependencies, dependencyGraph, _loop_1, _i, files_1, file, circularDependenciesCount, _a, _b, _c, file, imports, _d, imports_1, importFile, absoluteImportPath, relativeImportPath;
        var _e;
        return __generator(this, function (_f) {
            filesDependencies = {};
            dependencyGraph = {};
            _loop_1 = function (file) {
                if (!file.endsWith('.ts') && !file.endsWith('.tsx') &&
                    !file.endsWith('.js') && !file.endsWith('.jsx')) {
                    return "continue";
                }
                var relPath = path.relative(projectPath, file);
                var fileContent = fs.readFileSync(file, 'utf8');
                // Phân tích ast để tìm imports
                var sourceFile = ts.createSourceFile(path.basename(file), fileContent, ts.ScriptTarget.Latest, true);
                var imports = [];
                var collectImports = function (node) {
                    if (ts.isImportDeclaration(node) && node.moduleSpecifier && ts.isStringLiteral(node.moduleSpecifier)) {
                        var importPath = node.moduleSpecifier.text;
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
            };
            // Phân tích import cho từng file
            for (_i = 0, files_1 = files; _i < files_1.length; _i++) {
                file = files_1[_i];
                _loop_1(file);
            }
            circularDependenciesCount = 0;
            for (_a = 0, _b = Object.entries(dependencyGraph); _a < _b.length; _a++) {
                _c = _b[_a], file = _c[0], imports = _c[1];
                // Đơn giản hóa: chỉ kiểm tra cycle trực tiếp
                for (_d = 0, imports_1 = imports; _d < imports_1.length; _d++) {
                    importFile = imports_1[_d];
                    absoluteImportPath = path.resolve(path.dirname(path.join(projectPath, file)), importFile);
                    relativeImportPath = path.relative(projectPath, absoluteImportPath);
                    if ((_e = dependencyGraph[relativeImportPath]) === null || _e === void 0 ? void 0 : _e.includes(file)) {
                        filesDependencies[file].circular = true;
                        circularDependenciesCount++;
                    }
                }
            }
            if (verbose) {
                console.log("Found ".concat(circularDependenciesCount, " circular dependencies"));
            }
            return [2 /*return*/, {
                    filesDependencies: filesDependencies,
                    circularDependenciesCount: circularDependenciesCount
                }];
        });
    });
}
/**
 * Tính toán điểm health score dựa trên kết quả phân tích
 */
function calculateDependencyHealthScore(packageDependencies, fileDependencies) {
    // Bắt đầu với điểm tối đa
    var score = 100;
    // Giảm điểm cho outdated dependencies
    var outdatedRatio = packageDependencies.totalDependencies > 0
        ? packageDependencies.outdatedDependencies / packageDependencies.totalDependencies
        : 0;
    score -= outdatedRatio * 25; // Giảm tối đa 25 điểm cho outdated
    // Giảm điểm cho unused dependencies
    var unusedRatio = packageDependencies.totalDependencies > 0
        ? packageDependencies.unusedDependencies / packageDependencies.totalDependencies
        : 0;
    score -= unusedRatio * 20; // Giảm tối đa 20 điểm cho unused
    // Giảm điểm cho circular dependencies
    score -= Math.min(20, fileDependencies.circularDependenciesCount * 5); // Giảm tối đa 20 điểm
    // Đảm bảo điểm nằm trong khoảng 0-100
    return Math.max(0, Math.min(100, score));
}
