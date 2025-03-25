# Hướng Dẫn và Quy Ước Chung

## 1. General Guidelines

- Sử dụng tiếng Anh cho code, nhưng dùng tiếng Việt cho comments và documentation.
- Tuân thủ các best practices của TypeScript.
- Ưu tiên dùng explicit types thay vì `any`.
- Đảm bảo xử lý lỗi toàn diện.
- Thêm JSDoc cho các phương thức và class công khai.
- Mỗi file chỉ chứa một export chính để tăng tính module.
- Tuân thủ naming conventions nhất quán.
- Sử dụng decorators cho các thành phần của NestJS.
- Giữ cho các function nhỏ gọn và tập trung vào một nhiệm vụ cụ thể.

## 2. Naming Conventions

- **Classes, interfaces, types, enums**: Sử dụng PascalCase.
- **Variables, functions, methods, properties**: Sử dụng camelCase.
- **File và directory names**: Sử dụng kebab-case.
- **Constants và environment variables**: Sử dụng UPPERCASE.
- **Interfaces**: Tiền tố bằng chữ "I" (ví dụ: `IUserRepository`).
- **Type definitions**: Đặt tên rõ ràng, ví dụ `UserDto`, `CourseResponse`.
- Sử dụng tên mô tả cho mọi identifier.

## 3. File Structure

- Nhóm các file liên quan theo tính năng/ domain thành các module.
- Giữ controllers, services và repositories trong các file riêng biệt.
- Đặt interfaces và types vào file riêng khi số lượng lớn.
- Sử dụng file `index.ts` để quản lý export tốt hơn.
- Duy trì cấu trúc thư mục nhất quán giữa các module.

## 4. TypeScript Patterns

### Interface Consistency

- Định nghĩa interface cần nhất quán trên toàn dự án.
- Tránh định nghĩa nhiều lần cho cùng 1 interface (ví dụ: `VoteInput`), hãy tạo file shared types khi cần tái sử dụng.

### Type Definitions

- Ưu tiên explicit types thay vì implicit.
- Sử dụng các kiểu dữ liệu cụ thể (ví dụ: `MongoId` thay vì `string` cho ID của MongoDB).
- Đảm bảo các method trong repository có chữ ký (signature) khớp với phần triển khai.
- Dùng type guards khi xử lý các giá trị có khả năng null.

### Circular Dependencies

- Tránh circular imports trong định nghĩa type.
- Nếu cần circular references, sử dụng interface extension thay vì import trực tiếp.

### Express và NestJS Integration

- Khi mở rộng các kiểu của Express, dùng interface augmentation.
- Đảm bảo rằng `AuthenticatedRequest` bao gồm đủ các thuộc tính cần thiết (params, body, query).
- Ưu tiên import từ các module cụ thể thay vì dùng wildcard imports.

## 5. Common Pitfalls to Avoid

- ❌ Không sử dụng `any` trừ khi thực sự cần thiết.
- ❌ Không để lại các import hoặc biến không sử dụng.
- ❌ Không dùng `console.log` cho logging trong production.
- ❌ Không trộn lẫn giữa MongoDB ObjectId và string nếu không có xử lý chuyển đổi đúng.
- ❌ Không bỏ qua xử lý lỗi.
- ❌ Không trả về response không nhất quán.
- ❌ Không đặt business logic trực tiếp trong controllers.
- ❌ Tránh dùng nested callbacks (ưu tiên async/await).
- ❌ Không sử dụng các phương thức hoặc thư viện đã deprecated.

## 6. AI Assistant Guidelines

### Mức Độ Ưu Tiên

- 🚨 **Cực kỳ quan trọng**: Các quy tắc bắt buộc phải tuân thủ
- ⚠️ **Quan trọng**: Nên tuân thủ trong hầu hết trường hợp
- 💡 **Khuyến nghị**: Áp dụng khi có thể để cải thiện chất lượng

### Format Trả Lời

- Giao tiếp bằng tiếng Việt
- Câu trả lời ngắn gọn, tập trung vào vấn đề
- Phân loại rõ ràng giữa giải pháp và giải thích
- Sử dụng emoji để đánh dấu mức độ ưu tiên

### Format Code

- Sử dụng TypeScript có định kiểu rõ ràng
- Tuân thủ các quy ước đặt tên
- Bao gồm JSDoc khi cần thiết
- Tổ chức code theo thứ tự:
  1. Import
  2. Type/Interface
  3. Constants
  4. Helper Functions
  5. Component/Functions chính
  6. Export

### Format Giải Thích

- Giải thích ngắn gọn cho từng phần code
- Chỉ ra điểm mạnh/yếu của giải pháp
- Nêu rõ điểm cần chú ý hoặc cảnh báo

### Quy Trình Xử Lý Yêu Cầu

1. Phân tích yêu cầu
2. Tìm hiểu codebase liên quan
3. Đề xuất giải pháp
4. Triển khai giải pháp
5. Kiểm tra lại theo checklist

## 7. Phát Hiện và Xử Lý Mã Nguồn Kém Chất Lượng

### Dấu Hiệu Của Code Cần Refactor

- 🚨 Functions quá dài (> 50 dòng)
- 🚨 Nhiều tham số truyền vào (> 3 tham số)
- 🚨 Lồng ghép nhiều câu điều kiện (> 3 cấp)
- ⚠️ Trùng lặp code
- ⚠️ Thiếu typing hoặc sử dụng `any`
- ⚠️ Cấu trúc dữ liệu không hiệu quả
- 💡 Tên biến không mô tả
- 💡 Comment dư thừa hoặc thiếu cập nhật

### Checklist Kiểm Tra Code

- [ ] Có định nghĩa type/interface rõ ràng
- [ ] Không có `any` không cần thiết
- [ ] Các function đơn chức năng, dưới 30 dòng
- [ ] Xử lý lỗi đầy đủ
- [ ] Không có code trùng lặp
- [ ] Đặt tên biến, function rõ ràng
- [ ] Có phân tách concerns

## 8. Quy Tắc Đánh Giá Hiệu Năng

### Frontend Performance Checklist

#### Rendering Optimization

- [ ] Sử dụng React memo cho components lặp lại nhiều
- [ ] Tránh re-renders không cần thiết với useMemo/useCallback
- [ ] Đảm bảo dependencies array đúng trong useEffect
- [ ] Sử dụng React.lazy để code-splitting
- [ ] Triển khai virtualization cho danh sách dài

#### Bundle Size

- [ ] Kiểm tra bundle size với tools như Webpack Bundle Analyzer
- [ ] Tối ưu import (chỉ import những gì cần)
- [ ] Sử dụng dynamic imports cho các module lớn
- [ ] Tránh import thư viện quá lớn
- [ ] Xem xét các thay thế nhẹ hơn cho thư viện lớn

### Backend Performance Checklist

#### Database

- [ ] Đánh index cho các fields thường dùng để query
- [ ] Tối ưu queries (sử dụng explain plan)
- [ ] Sử dụng caching cho queries phổ biến
- [ ] Pagination cho large datasets
- [ ] Định kỳ vacuum/reindex databases

#### API

- [ ] Rate limiting
- [ ] Response compression
- [ ] Implement caching với ETags
- [ ] Batch requests
- [ ] Streaming cho large responses

## 9. Quy Tắc Viết Technical Design Document

### Cấu Trúc TDD Chuẩn

```markdown
# Technical Design Document: [Tên Tính Năng]

## 1. Overview

Mô tả ngắn gọn mục đích và phạm vi của tính năng.

## 2. Requirements

### 2.1 Functional Requirements

- Liệt kê các yêu cầu chức năng cụ thể, đo lường được, khả thi, phù hợp và có thời hạn.
  - Ví dụ: Là người dùng, tôi muốn tạo category cấu hình mới để quản lý các item cấu hình.

### 2.2 Non-Functional Requirements

- Liệt kê các yêu cầu phi chức năng như hiệu suất, bảo mật, khả năng mở rộng và khả năng bảo trì.
  - Ví dụ: Hệ thống phải xử lý được 100 người dùng đồng thời.
  - Ví dụ: Tất cả API endpoint phải được bảo mật bằng JWT.

## 3. Technical Design

### 3.1. Data Model Changes

- Mô tả các thay đổi đối với schema database (sử dụng Mermaid diagram nếu cần).
- Chỉ rõ entities, fields, relationships và data types mới.
- Tham chiếu đến entities hiện có khi thích hợp.

### 3.2. API Changes

- Mô tả API endpoints mới hoặc thay đổi đối với endpoints hiện có.
- Chỉ rõ định dạng request và response (sử dụng JSON).
- Đưa ra ví dụ về requests và responses.
- Tham chiếu đến CQRS commands và queries liên quan.

### 3.3. UI Changes

- Mô tả các thay đổi trên UI.
- Tham chiếu đến các components liên quan.

### 3.4. Logic Flow

- Mô tả luồng logic của tính năng, bao gồm tương tác giữa các components.
- Sử dụng sequence diagrams hoặc flowcharts nếu cần (sử dụng Mermaid diagram).

### 3.5. Dependencies

- Liệt kê các libraries, packages hoặc services mới cần thiết.
  - Ví dụ: Package `@aws-sdk/client-s3` sẽ được sử dụng để tương tác với Amazon S3.

### 3.6. Security Considerations

- Đề cập đến các vấn đề bảo mật liên quan đến tính năng.
  - Ví dụ: Thực hiện validation input để ngăn chặn SQL injection.
  - Ví dụ: Dữ liệu nhạy cảm sẽ được mã hóa khi lưu trữ và truyền tải.

### 3.7. Performance Considerations

- Đề cập đến các vấn đề hiệu suất liên quan đến tính năng.
  - Ví dụ: Sử dụng caching để cải thiện hiệu suất.

## 4. Testing Plan

- Mô tả cách tính năng sẽ được kiểm thử, bao gồm unit tests, integration tests và user acceptance tests.
  - Ví dụ: Unit tests sẽ được viết cho tất cả classes và methods mới.
  - Ví dụ: Integration tests sẽ được viết để xác minh tương tác giữa API và database.

## 5. Open Questions

- Liệt kê các vấn đề chưa giải quyết hoặc các lĩnh vực cần làm rõ thêm.
  - Ví dụ: Chúng ta có nên sử dụng database riêng cho deployment logs không?

## 6. Alternatives Considered

- Mô tả ngắn gọn các giải pháp thay thế đã được xem xét và lý do tại sao chúng bị từ chối.
```

### Hướng Dẫn Viết TDD

- 🚨 TDD phải được tạo cho mỗi tính năng lớn trước khi bắt đầu triển khai.
- 🚨 Đảm bảo tham chiếu chính xác đến các phần code hiện có khi mô tả thay đổi.
- ⚠️ Sử dụng Mermaid diagrams để mô tả luồng logic và mối quan hệ dữ liệu phức tạp.
- ⚠️ Cung cấp ví dụ cụ thể cho các API requests/responses và data structures.
- 💡 Đánh dấu các câu hỏi mở và các khu vực cần trao đổi thêm.
- 💡 Cân nhắc và ghi lại các giải pháp thay thế đã xem xét để tránh thảo luận lặp lại trong tương lai.

### Quy Trình Review TDD

1. **Xác định stakeholders** - Đảm bảo tất cả các bên liên quan đều review TDD.
2. **Lên lịch review meeting** - Đặt thời gian rõ ràng cho việc review.
3. **Thu thập feedback** - Ghi lại tất cả các ý kiến đóng góp.
4. **Cập nhật TDD** - Thực hiện các thay đổi dựa trên feedback.
5. **Xác nhận approval** - Đảm bảo TDD đã được phê duyệt trước khi bắt đầu triển khai.

### Checklist Review TDD

- [ ] Tất cả functional requirements đã rõ ràng và đo lường được
- [ ] Technical design đủ chi tiết để triển khai
- [ ] Data model changes được mô tả đầy đủ
- [ ] API endpoints được định nghĩa rõ ràng
- [ ] Logic flow được mô tả chi tiết
- [ ] Security considerations được đề cập
- [ ] Testing plan đầy đủ và phù hợp
- [ ] Open questions được ghi nhận để giải quyết

Code Style & Structure

- Functional, declarative TypeScript; avoid classes.
- Modular, reusable code with descriptive variable names.
- File structure: main component → subcomponents → helpers → static content → types.

Naming Conventions

- Lowercase-dash for directories (e.g., `components/auth-wizard`).
- Prefer named exports for components.

TypeScript Best Practices

- Use interfaces over types, avoid enums (prefer maps).
- Favor functional components with explicit props interfaces.

Syntax & Formatting

- Use `function` keyword for pure functions.
- Concise conditionals; declarative JSX.

UI & Styling

- Use Shadcn UI, Radix, and Tailwind.
- Mobile-first design, optimized accessibility.

Performance Optimization

- Minimize `use client`, `useEffect`, and `setState`—favor React Server Components.
- Wrap client components in `Suspense` with fallback.
- Use dynamic imports for non-critical components.
- Optimize images (WebP, lazy loading, explicit dimensions).

Next.js & Best Practices

- Use `nuqs` for URL search params.
- Optimize Web Vitals (LCP, CLS, FID).
- Prefer server components & SSR; limit client-side state management.
- Follow Next.js guidelines for data fetching, rendering, and routing.

Follow Next.js docs for Data Fetching, Rendering, and Routing.
tôi
