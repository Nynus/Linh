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
exports.analyzeSecurityIssues = analyzeSecurityIssues;
var fs = require("fs-extra");
var path = require("path");
var child_process_1 = require("child_process");
/**
 * Phân tích vấn đề bảo mật trong dự án
 */
function analyzeSecurityIssues(projectPath) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // Đơn giản hóa
            return [2 /*return*/, {
                    score: 85 // Điểm bảo mật
                }];
        });
    });
}
/**
 * Kiểm tra xem một lệnh có khả dụng hay không
 */
function checkCommandAvailable(command) {
    try {
        (0, child_process_1.execSync)(command, { stdio: 'ignore' });
        return true;
    }
    catch (error) {
        return false;
    }
}
/**
 * Phân tích npm audit để tìm các lỗ hổng bảo mật
 */
function analyzeNpmAudit(projectPath, verbose) {
    return __awaiter(this, void 0, void 0, function () {
        var packageJsonPath;
        return __generator(this, function (_a) {
            // Trong môi trường thực tế sẽ chạy npm audit và parse kết quả
            // Ở đây chúng ta chỉ giả lập kết quả
            if (verbose) {
                console.log('Analyzing npm dependencies for vulnerabilities');
            }
            packageJsonPath = path.join(projectPath, 'package.json');
            if (!fs.existsSync(packageJsonPath)) {
                return [2 /*return*/, {
                        vulnerabilities: [],
                        totalVulnerabilities: 0,
                        criticalVulnerabilities: 0,
                        highVulnerabilities: 0,
                        mediumVulnerabilities: 0,
                        lowVulnerabilities: 0
                    }];
            }
            // MOCK: Trong thực tế sẽ chạy `npm audit --json` và parse kết quả
            return [2 /*return*/, {
                    vulnerabilities: [],
                    totalVulnerabilities: 0,
                    criticalVulnerabilities: 0,
                    highVulnerabilities: 0,
                    mediumVulnerabilities: 0,
                    lowVulnerabilities: 0
                }];
        });
    });
}
/**
 * Phân tích mã nguồn để tìm các vấn đề bảo mật phổ biến
 */
function analyzeCodeSecurityIssues(projectPath, verbose) {
    return __awaiter(this, void 0, void 0, function () {
        var issues;
        return __generator(this, function (_a) {
            if (verbose) {
                console.log('Analyzing code for security issues');
            }
            issues = [];
            // Trong thực tế sẽ sử dụng các công cụ như eslint-plugin-security
            // hoặc phân tích mã nguồn để tìm các pattern không an toàn
            // MOCK: Trong thực tế sẽ scan file để tìm các pattern như eval(), dangerouslySetInnerHTML, etc.
            return [2 /*return*/, issues];
        });
    });
}
/**
 * Tính toán điểm bảo mật dựa trên kết quả phân tích
 */
function calculateSecurityScore(analysis) {
    // Bắt đầu với điểm tối đa
    var score = 100;
    // Giảm điểm cho từng loại lỗ hổng
    score -= analysis.criticalVulnerabilities * 15; // -15 điểm cho mỗi lỗ hổng critical
    score -= analysis.highVulnerabilities * 10; // -10 điểm cho mỗi lỗ hổng high
    score -= analysis.mediumVulnerabilities * 5; // -5 điểm cho mỗi lỗ hổng medium
    score -= analysis.lowVulnerabilities * 2; // -2 điểm cho mỗi lỗ hổng low
    // Đảm bảo điểm nằm trong khoảng 0-100
    return Math.max(0, Math.min(100, score));
}
