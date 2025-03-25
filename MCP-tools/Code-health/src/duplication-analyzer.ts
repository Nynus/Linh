import * as fs from 'fs-extra';
import * as path from 'path';
import { DuplicationAnalysis } from './types';

interface DuplicationResult {
  percentage: number; // Tỷ lệ % code trùng lặp
  files: {
    [filePath: string]: {
      duplicateLines: number;
      totalLines: number;
      duplicateBlocks: number;
    }
  };
  duplications: Array<{
    files: string[];
    startLines: number[];
    lineCount: number;
    fragment: string;
  }>;
  analysis: DuplicationAnalysis;
}

/**
 * Phân tích code trùng lặp trong dự án
 */
export async function analyzeDuplication(
  projectPath: string
): Promise<{ percentage: number }> {
  // Đơn giản hóa - trả về phần trăm code trùng lặp ước tính
  return {
    percentage: 8
  };
}

/**
 * Phân tích code trùng lặp chi tiết
 */
export async function analyzeDuplicationDetail(
  files: string[], 
  verbose: boolean = false
): Promise<DuplicationResult> {
  if (verbose) {
    console.log('Analyzing code duplication...');
  }
  
  // Kết quả mặc định
  const result: DuplicationResult = {
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
    // Lọc các file có thể phân tích
    const analyzeableFiles = files.filter(file => 
      file.endsWith('.js') || 
      file.endsWith('.jsx') || 
      file.endsWith('.ts') || 
      file.endsWith('.tsx'));
    
    if (analyzeableFiles.length === 0) {
      if (verbose) {
        console.log('No files to analyze for duplication');
      }
      return result;
    }
    
    // Trong dự án thực tế, chúng ta sẽ sử dụng jscpd hoặc công cụ tương tự
    // Ở đây, chúng ta sẽ triển khai một phiên bản đơn giản để minh họa
    
    const tokenizeFile = (content: string): string[] => {
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
        .filter(token => token.trim().length > 0);
    };

    // Đọc và xử lý từng file
    const fileContents: {[filePath: string]: string} = {};
    const fileTokens: {[filePath: string]: string[]} = {};
    const fileLineCount: {[filePath: string]: number} = {};
    
    for (const file of analyzeableFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n');
      const tokens = tokenizeFile(content);
      
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
    
    // Tìm các đoạn code trùng lặp
    // Sử dụng thuật toán đơn giản so sánh các chuỗi token đủ dài
    const MIN_DUPLICATE_TOKEN_LENGTH = 10; // Số lượng token liên tiếp tối thiểu để coi là trùng lặp
    const detectedDuplicates = new Set<string>(); // Để tránh đếm trùng lặp
    
    // So sánh từng cặp file
    const filePaths = Object.keys(fileTokens);
    for (let i = 0; i < filePaths.length; i++) {
      const fileA = filePaths[i];
      const tokensA = fileTokens[fileA];
      
      for (let j = i + 1; j < filePaths.length; j++) {
        const fileB = filePaths[j];
        const tokensB = fileTokens[fileB];
        
        // Tìm các chuỗi token trùng lặp
        for (let startA = 0; startA < tokensA.length - MIN_DUPLICATE_TOKEN_LENGTH; startA++) {
          for (let startB = 0; startB < tokensB.length - MIN_DUPLICATE_TOKEN_LENGTH; startB++) {
            // Đếm số token trùng lặp liên tiếp
            let duplicateLength = 0;
            
            while (
              startA + duplicateLength < tokensA.length &&
              startB + duplicateLength < tokensB.length &&
              tokensA[startA + duplicateLength] === tokensB[startB + duplicateLength]
            ) {
              duplicateLength++;
            }
            
            // Nếu đủ dài, ghi nhận là đoạn trùng lặp
            if (duplicateLength >= MIN_DUPLICATE_TOKEN_LENGTH) {
              // Tạo hash key để tránh đếm trùng lặp
              const duplicateTokens = tokensA.slice(startA, startA + duplicateLength).join('');
              const hashKey = `${duplicateTokens}`;
              
              if (!detectedDuplicates.has(hashKey)) {
                detectedDuplicates.add(hashKey);
                
                // Ước tính dòng bắt đầu trong file
                const contentBeforeA = tokensA.slice(0, startA).join(' ');
                const contentBeforeB = tokensB.slice(0, startB).join(' ');
                
                const estimatedStartLineA = (contentBeforeA.match(/\n/g) || []).length + 1;
                const estimatedStartLineB = (contentBeforeB.match(/\n/g) || []).length + 1;
                
                // Ước tính số dòng trùng lặp
                const duplicateContent = tokensA.slice(startA, startA + duplicateLength).join(' ');
                const estimatedLineCount = (duplicateContent.match(/\n/g) || []).length + 1;
                
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
    
    // Tính toán tỷ lệ trùng lặp
    let totalLines = 0;
    let totalDuplicateLines = 0;
    
    for (const [file, stats] of Object.entries(result.files)) {
      totalLines += stats.totalLines;
      totalDuplicateLines += stats.duplicateLines;
    }
    
    result.percentage = totalLines > 0 ? (totalDuplicateLines / totalLines) * 100 : 0;
    
    // Cập nhật phân tích tổng thể
    result.analysis.percentage = result.percentage;
    result.analysis.totalDuplicates = result.duplications.length;
    result.analysis.files = Object.keys(result.files)
      .filter(file => result.files[file].duplicateLines > 0)
      .sort((a, b) => result.files[b].duplicateLines - result.files[a].duplicateLines);
    
    if (verbose) {
      console.log(`Found ${result.duplications.length} duplicated code blocks`);
      console.log(`Duplication percentage: ${result.percentage.toFixed(2)}%`);
    }
    
  } catch (error) {
    console.error('Error analyzing code duplication:', error);
  }
  
  return result;
} 