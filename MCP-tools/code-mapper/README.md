# Code Mapper - Dependency Visualization Tool

Code Mapper là một công cụ trực quan hóa các mối quan hệ phụ thuộc (dependencies) trong codebase của bạn. Nó giúp phát hiện các vấn đề như circular dependencies (phụ thuộc vòng tròn) và orphaned modules (module mồ côi) để cải thiện chất lượng code.

![Code Mapper Screenshot](screenshot.png)

## Tính năng

- 🔍 Trực quan hóa cấu trúc phụ thuộc của dự án
- ⭕ Phát hiện và làm nổi bật các phụ thuộc vòng tròn
- 🔎 Tìm kiếm các module mồ côi
- 🔄 Chức năng tương tác: phóng to, thu nhỏ, kéo thả, tìm kiếm
- 🎨 Tùy chỉnh hiển thị: kích thước node, khoảng cách link, nhãn
- 🔍 Lọc theo loại dependency: tất cả, nội bộ, bên ngoài

## Cài đặt

1. Clone repository:

```bash
git clone https://github.com/yourusername/code-mapper.git
cd code-mapper
```

2. Cài đặt dependencies:

```bash
npm install
```

3. Chạy ứng dụng:

```bash
npm run dev
```

## Cách sử dụng

1. Mở trình duyệt và truy cập http://localhost:1235
2. Nhập đường dẫn tới dự án bạn muốn phân tích (đường dẫn tuyệt đối hoặc tương đối)
3. Nhấn nút "Analyze" để bắt đầu phân tích
4. Khám phá biểu đồ phụ thuộc:
   - Kéo các node để sắp xếp lại biểu đồ
   - Sử dụng chuột để phóng to/thu nhỏ
   - Lọc dữ liệu bằng các nút bộ lọc
   - Điều chỉnh kích thước node và khoảng cách link
   - Tìm kiếm các module cụ thể

## Ý nghĩa màu sắc

- **Xanh dương**: Node thông thường
- **Đỏ**: Node trong phụ thuộc vòng tròn
- **Cam**: Module mồ côi (không được import hoặc reference)

## Server Ports

- **Backend API**: http://localhost:1234
- **Frontend**: http://localhost:1235

## Yêu cầu kỹ thuật

- Node.js 14+
- Trình duyệt hiện đại hỗ trợ ES6

## Công nghệ

- **Frontend**: HTML, CSS, JavaScript, D3.js
- **Backend**: Node.js, Express, TypeScript
- **Dependency Analysis**: Madge

## Giấy phép

MIT

## Tác giả

Your Name
