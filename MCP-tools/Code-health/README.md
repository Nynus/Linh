# MCP Code Health

Công cụ phân tích sức khỏe code cho các dự án TypeScript/JavaScript.

## Tổng quan MCP

MCP Code-health là một công cụ phân tích tĩnh được thiết kế để đánh giá chất lượng code của các dự án TypeScript/JavaScript. Tool cung cấp các chỉ số quan trọng về sức khỏe code như:

- Độ phức tạp của code
- Khả năng bảo trì
- Độ bao phủ của type
- Các vấn đề bảo mật tiềm ẩn
- Mức độ trùng lặp code
- Các vấn đề về coding style

## Cài đặt

```bash
# Clone repository
git clone <repo-url>

# Di chuyển vào thư mục
cd mcp-code-health

# Cài đặt dependencies
npm install

# Build dự án
npm run build

# Link package để sử dụng toàn cục (tùy chọn)
npm link
```

## Lưu ý quan trọng

1. **Môi trường**:

   - Node.js version >= 14
   - TypeScript version >= 4.0
   - PowerShell trên Windows không hỗ trợ &&, sử dụng ; để nối các lệnh

2. **Dependencies**:

   - Sử dụng chalk@4.x (không dùng chalk@5.x do vấn đề với ESM)
   - Cần cài đặt đầy đủ devDependencies để build project

3. **Cấu hình**:

   - Đảm bảo tsconfig.json có đúng cấu hình outDir và rootDir
   - File cấu hình .code-health.json phải đúng format JSON

4. **Quyền truy cập**:
   - Cần quyền đọc/ghi cho thư mục đầu ra báo cáo
   - Đảm bảo quyền thực thi cho file CLI

## Cách sử dụng

1. **Sử dụng cơ bản**:

```bash
# Phân tích thư mục hiện tại
mcp-code-health

# Phân tích một dự án cụ thể
mcp-code-health --path /đường/dẫn/dự/án

# Tạo báo cáo HTML
mcp-code-health --format html --output report.html
```

2. **Với file cấu hình**:

```bash
# Sử dụng file cấu hình tùy chỉnh
mcp-code-health --config ./my-config.json

# File cấu hình mẫu (.code-health.json):
{
  "include": ["src/**/*.ts", "src/**/*.tsx"],
  "exclude": ["**/*.spec.ts", "**/*.test.ts"],
  "thresholds": {
    "complexity": 15,
    "maintainability": 65,
    "linesOfCode": 300,
    "security": "high",
    "duplication": 5
  }
}
```

3. **Xem thông tin chi tiết**:

```bash
# Hiển thị thêm thông tin về các file có vấn đề
mcp-code-health --verbose
```

## Các chức năng chính

1. **Phân tích độ phức tạp**:

   - Tính toán độ phức tạp cyclomatic
   - Đánh giá độ sâu của các khối lệnh lồng nhau
   - Phát hiện các hàm/phương thức quá phức tạp

2. **Đánh giá khả năng bảo trì**:

   - Tính toán chỉ số maintainability
   - Đánh giá cấu trúc code
   - Kiểm tra độ dài của các hàm/file

3. **Phân tích type coverage**:

   - Kiểm tra tỷ lệ sử dụng type
   - Phát hiện các any type
   - Đánh giá chất lượng type definition

4. **Kiểm tra bảo mật**:

   - Phát hiện các lỗ hổng bảo mật phổ biến
   - Kiểm tra các dependency có vấn đề
   - Cảnh báo các pattern code không an toàn

5. **Phát hiện code trùng lặp**:

   - Tìm các đoạn code giống nhau
   - Đề xuất cơ hội tái sử dụng code
   - Tính toán tỷ lệ trùng lặp

6. **Báo cáo và đề xuất**:
   - Tạo báo cáo theo nhiều định dạng
   - Đề xuất cách cải thiện code
   - Cung cấp metrics chi tiết

## Định dạng báo cáo

Tool hỗ trợ 4 định dạng báo cáo:

- **Console**: Hiển thị trực tiếp trên terminal
- **JSON**: Phù hợp cho việc tích hợp với các tool khác
- **HTML**: Báo cáo trực quan với giao diện web
- **Markdown**: Dễ đọc và tích hợp với documentation

## Tùy chọn command line

- `--path, -p`: Đường dẫn đến dự án cần phân tích (mặc định: thư mục hiện tại)
- `--format, -f`: Định dạng báo cáo (json, html, markdown, console) (mặc định: console)
- `--output, -o`: Đường dẫn đến file đầu ra (mặc định: code-health-report.{ext})
- `--config, -c`: Đường dẫn đến file cấu hình (mặc định: .code-health.json)
- `--verbose, -v`: Hiển thị thông tin chi tiết
- `--help, -h`: Hiển thị help
