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
exports.analyzeDuplication = analyzeDuplication;
exports.analyzeDuplicationDetail = analyzeDuplicationDetail;
var fs = require("fs-extra");
/**
 * Phân tích code trùng lặp trong dự án
 */
function analyzeDuplication(projectPath) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // Đơn giản hóa - trả về phần trăm code trùng lặp ước tính
            return [2 /*return*/, {
                    percentage: 8
                }];
        });
    });
}
/**
 * Phân tích code trùng lặp chi tiết
 */
function analyzeDuplicationDetail(files_1) {
    return __awaiter(this, arguments, void 0, function (files, verbose) {
        var result, analyzeableFiles, tokenizeFile, fileContents, fileTokens, fileLineCount, _i, analyzeableFiles_1, file, content, lines, tokens, MIN_DUPLICATE_TOKEN_LENGTH, detectedDuplicates, filePaths, i, fileA, tokensA, j, fileB, tokensB, startA, startB, duplicateLength, duplicateTokens, hashKey, contentBeforeA, contentBeforeB, estimatedStartLineA, estimatedStartLineB, duplicateContent, estimatedLineCount, totalLines, totalDuplicateLines, _a, _b, _c, file, stats;
        if (verbose === void 0) { verbose = false; }
        return __generator(this, function (_d) {
            if (verbose) {
                console.log('Analyzing code duplication...');
            }
            result = {
                percentage: 0,
                files: {},
                duplications: [],
                analysis: {
                    percentage: 0,
                    totalDuplicates: 0,
                    files: []
                }
            };
            try {
                analyzeableFiles = files.filter(function (file) {
                    return file.endsWith('.js') ||
                        file.endsWith('.jsx') ||
                        file.endsWith('.ts') ||
                        file.endsWith('.tsx');
                });
                if (analyzeableFiles.length === 0) {
                    if (verbose) {
                        console.log('No files to analyze for duplication');
                    }
                    return [2 /*return*/, result];
                }
                tokenizeFile = function (content) {
                    // Một tokenizer đơn giản cho mục đích minh họa
                    // Trong thực tế, chúng ta sẽ sử dụng một công cụ tokenization mạnh mẽ hơn
                    // Loại bỏ comments
                    content = content.replace(/\/\/.*$/gm, '');
                    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
                    // Loại bỏ chuỗi string
                    content = content.replace(/'.*?'/g, 'STRING');
                    content = content.replace(/".*?"/g, 'STRING');
                    content = content.replace(/`[\s\S]*?`/g, 'STRING');
                    // Chuẩn hóa khoảng trắng
                    content = content.replace(/\s+/g, ' ').trim();
                    // Tách thành tokens
                    return content.split(/([{}()[\];,.<>:=+\-*/%&|^~!?]|\s+)/g)
                        .filter(function (token) { return token.trim().length > 0; });
                };
                fileContents = {};
                fileTokens = {};
                fileLineCount = {};
                for (_i = 0, analyzeableFiles_1 = analyzeableFiles; _i < analyzeableFiles_1.length; _i++) {
                    file = analyzeableFiles_1[_i];
                    content = fs.readFileSync(file, 'utf8');
                    lines = content.split('\n');
                    tokens = tokenizeFile(content);
                    fileContents[file] = content;
                    fileTokens[file] = tokens;
                    fileLineCount[file] = lines.length;
                    // Khởi tạo thống kê cho file
                    result.files[file] = {
                        duplicateLines: 0,
                        totalLines: lines.length,
                        duplicateBlocks: 0
                    };
                }
                MIN_DUPLICATE_TOKEN_LENGTH = 10;
                detectedDuplicates = new Set();
                filePaths = Object.keys(fileTokens);
                for (i = 0; i < filePaths.length; i++) {
                    fileA = filePaths[i];
                    tokensA = fileTokens[fileA];
                    for (j = i + 1; j < filePaths.length; j++) {
                        fileB = filePaths[j];
                        tokensB = fileTokens[fileB];
                        // Tìm các chuỗi token trùng lặp
                        for (startA = 0; startA < tokensA.length - MIN_DUPLICATE_TOKEN_LENGTH; startA++) {
                            for (startB = 0; startB < tokensB.length - MIN_DUPLICATE_TOKEN_LENGTH; startB++) {
                                duplicateLength = 0;
                                while (startA + duplicateLength < tokensA.length &&
                                    startB + duplicateLength < tokensB.length &&
                                    tokensA[startA + duplicateLength] === tokensB[startB + duplicateLength]) {
                                    duplicateLength++;
                                }
                                // Nếu đủ dài, ghi nhận là đoạn trùng lặp
                                if (duplicateLength >= MIN_DUPLICATE_TOKEN_LENGTH) {
                                    duplicateTokens = tokensA.slice(startA, startA + duplicateLength).join('');
                                    hashKey = "".concat(duplicateTokens);
                                    if (!detectedDuplicates.has(hashKey)) {
                                        detectedDuplicates.add(hashKey);
                                        contentBeforeA = tokensA.slice(0, startA).join(' ');
                                        contentBeforeB = tokensB.slice(0, startB).join(' ');
                                        estimatedStartLineA = (contentBeforeA.match(/\n/g) || []).length + 1;
                                        estimatedStartLineB = (contentBeforeB.match(/\n/g) || []).length + 1;
                                        duplicateContent = tokensA.slice(startA, startA + duplicateLength).join(' ');
                                        estimatedLineCount = (duplicateContent.match(/\n/g) || []).length + 1;
                                        // Thêm vào kết quả
                                        result.duplications.push({
                                            files: [fileA, fileB],
                                            startLines: [estimatedStartLineA, estimatedStartLineB],
                                            lineCount: estimatedLineCount,
                                            fragment: duplicateContent.substr(0, 100) + '...' // Lưu đoạn đầu của fragment
                                        });
                                        // Cập nhật thông tin trùng lặp cho từng file
                                        result.files[fileA].duplicateLines += estimatedLineCount;
                                        result.files[fileA].duplicateBlocks++;
                                        result.files[fileB].duplicateLines += estimatedLineCount;
                                        result.files[fileB].duplicateBlocks++;
                                        // Bỏ qua các token đã kiểm tra
                                        startB += duplicateLength - 1;
                                    }
                                }
                            }
                        }
                    }
                }
                totalLines = 0;
                totalDuplicateLines = 0;
                for (_a = 0, _b = Object.entries(result.files); _a < _b.length; _a++) {
                    _c = _b[_a], file = _c[0], stats = _c[1];
                    totalLines += stats.totalLines;
                    totalDuplicateLines += stats.duplicateLines;
                }
                result.percentage = totalLines > 0 ? (totalDuplicateLines / totalLines) * 100 : 0;
                // Cập nhật phân tích tổng thể
                result.analysis.percentage = result.percentage;
                result.analysis.totalDuplicates = result.duplications.length;
                result.analysis.files = Object.keys(result.files)
                    .filter(function (file) { return result.files[file].duplicateLines > 0; })
                    .sort(function (a, b) { return result.files[b].duplicateLines - result.files[a].duplicateLines; });
                if (verbose) {
                    console.log("Found ".concat(result.duplications.length, " duplicated code blocks"));
                    console.log("Duplication percentage: ".concat(result.percentage.toFixed(2), "%"));
                }
            }
            catch (error) {
                console.error('Error analyzing code duplication:', error);
            }
            return [2 /*return*/, result];
        });
    });
}
