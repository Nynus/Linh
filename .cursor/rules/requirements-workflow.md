# Yêu Cầu và Quy Trình Làm Việc

## 1. Tổng Quan

- **Mục tiêu**: Đảm bảo tính nhất quán, hiệu quả và bảo mật trong phát triển dự án NyNus.
- **Đối tượng**: Dành cho toàn bộ thành viên (bao gồm các AI hỗ trợ) cần tuân thủ quy tắc phát triển.
- **Ngôn ngữ giao tiếp**: Sử dụng tiếng Việt.

## 2. Cursor Rules for NyNus Project

- **Speak Vietnamese**: Giao tiếp và viết tài liệu bằng tiếng Việt.
- **Run server FE and BE**: Sử dụng lệnh `npm run dev` để chạy cả frontend và backend.
- **PowerShell**: Không hỗ trợ `&&`, vui lòng sử dụng dấu `;` để nối các lệnh.
- **TypeScript Paths**: Sử dụng đường dẫn tương đối cho các `extends` trong tsconfig (ví dụ: `"../../packages/tsconfig/base.json"`).
- **React/JSX Usage**: Đảm bảo file tsconfig.json của mỗi package React có `"jsx": "react-jsx"` trong compilerOptions.
- **VS Code Setup**: Sử dụng các extension và settings được đề xuất trong thư mục `.vscode`.

## 3. Nguyên Tắc Cơ Bản

- **Tuân thủ quy tắc**: Mọi hành động phải dựa trên quy tắc đã định.
- **Kiểm tra phiên bản**: Luôn xác nhận sử dụng tài liệu và mã mới nhất.
- **Cập nhật liên tục**: Theo dõi các thay đổi và cập nhật mới từ tài liệu gốc.

## 4. Phương Châm Phát Triển

- **Mobile First & Accessibility**: Ưu tiên thiết kế responsive và đảm bảo khả năng tiếp cận cho mọi người.
- **Progressive Enhancement**: Đảm bảo các tính năng cơ bản hoạt động trên mọi trình duyệt.
- **Performance Budget**:
  - Thời gian tải trang dưới 3 giây trên 3G.
  - First Input Delay < 100ms.

## 5. Quy Ước Mã Nguồn & Commit

- **Code Style**: Sử dụng ESLint & Prettier, tuân thủ naming conventions.
- **TypeScript**: Luôn định nghĩa rõ types/interfaces; hạn chế sử dụng `any`.
- **Testing**: Viết test cho components và API (coverage tối thiểu: 70%+).

## 6. Checklist Trước Mỗi Lần Làm Việc

### Setup Môi Trường

- [ ] Đảm bảo đã clone repository mới nhất (`git pull origin develop`)
- [ ] Cài đặt đầy đủ dependencies (`npm install` trong thư mục `client` và `server`)
- [ ] Kiểm tra file `.env` đã được cấu hình đúng (theo file `.env.example`)
- [ ] Đảm bảo databases (MongoDB, PostgreSQL) đang hoạt động
- [ ] Kiểm tra Redis đang chạy (nếu liên quan đến caching)

### Trước Khi Bắt Đầu Tính Năng Mới

- [ ] Tạo branch mới từ develop (`git checkout -b feature/[feature-name]`)
- [ ] Đọc kỹ yêu cầu và user stories liên quan
- [ ] Thảo luận với team về giải pháp kỹ thuật
- [ ] Xác định các API endpoints và cấu trúc cần thiết
- [ ] Kiểm tra các component có thể tái sử dụng

### Checklist Phần Frontend

- [ ] Sử dụng Tailwind CSS classes đúng quy ước
- [ ] Kiểm tra responsive trên tất cả các breakpoint (mobile, tablet, desktop)
- [ ] Tối ưu hóa lazy-loading cho images và components
- [ ] Đảm bảo hiệu suất (kiểm tra Lighthouse score)
- [ ] Sử dụng Next.js image optimization
- [ ] Bổ sung error boundaries nếu cần
- [ ] Xử lý các trạng thái loading, error, empty
- [ ] Kiểm tra accessibility (đủ contrast, alt text, keyboard navigation)
- [ ] Đảm bảo SEO meta tags đã được cấu hình (nếu cần)

### Checklist Phần Backend

- [ ] Chuẩn hóa response format
- [ ] Xử lý lỗi đầy đủ với status codes phù hợp
- [ ] Validation đầu vào
- [ ] Xử lý async/await với try-catch
- [ ] Xác thực và phân quyền
- [ ] Rate limiting cho các endpoint quan trọng
- [ ] Đảm bảo queries tối ưu (indexing, tránh N+1 problem)
- [ ] Xem xét sử dụng caching cho các query thường xuyên

### Trước Khi Tạo Pull Request

- [ ] Chạy và pass tất cả tests (`npm test`)
- [ ] Chạy linter và formatter (`npm run lint` và `npm run format`)
- [ ] Kiểm tra và sửa hết type errors (`npm run type-check`)
- [ ] Kiểm tra không có console.log() trong code
- [ ] Xóa code thừa và comments không cần thiết
- [ ] Đảm bảo code đã được tối ưu (không vòng lặp thừa, tránh memory leaks)
- [ ] Update documentation (API docs, component docs) nếu cần

## 7. Quy Trình Triển Khai Tính Năng

### Quy Trình Triển Khai

1. **Phân tích yêu cầu**

   - Xác định input/output
   - Liệt kê use cases
   - Xác định ràng buộc

2. **Thiết kế giải pháp**

   - Xác định APIs cần thiết
   - Thiết kế database schema
   - Xác định components UI cần thiết

3. **Triển khai**

   - Xây dựng từ backend đến frontend
   - Viết tests
   - Kiểm tra chéo với yêu cầu ban đầu

4. **Testing**
   - Unit tests
   - Integration tests
   - Manual testing

## 8. Quy Trình Review Code

### Checklist Review Code

- [ ] **Functionality**: Code làm đúng chức năng yêu cầu
- [ ] **TypeScript**: Types được định nghĩa đầy đủ và chính xác
- [ ] **Security**: Không có lỗ hổng bảo mật
- [ ] **Performance**: Không có vấn đề hiệu năng rõ ràng
- [ ] **Testing**: Tests đầy đủ và pass
- [ ] **Standards**: Tuân thủ code standards
- [ ] **Structure**: Cấu trúc code hợp lý
- [ ] **Reusability**: Components được thiết kế để tái sử dụng
- [ ] **Documentation**: JSDoc và comments đầy đủ
- [ ] **Error Handling**: Xử lý lỗi đầy đủ

### Mẫu Feedback

```
## Đánh giá code

### Điểm mạnh ✅
- Code có cấu trúc rõ ràng
- Xử lý lỗi đầy đủ
- Types được định nghĩa tốt

### Cần cải thiện ⚠️
- Component UserList có thể tách nhỏ hơn nữa
- Nên sử dụng useMemo để tối ưu hiệu năng
- Thiếu xử lý trường hợp khi API trả về lỗi 404

### Lỗi cần sửa 🚨
- Thiếu validation đầu vào cho UserForm
- Có memory leak tiềm ẩn trong useEffect
- Không xử lý case người dùng không có quyền xem

### Gợi ý cụ thể
- Thêm abort controller cho useEffect để tránh memory leak
- Tách logic validations thành hook riêng
- Sử dụng ErrorBoundary để xử lý lỗi UI
```
