# Components Chung trong NyNus

Thư mục này chứa các tài liệu mô tả chi tiết về các components chung được sử dụng xuyên suốt trong nền tảng NyNus. Các components này được thiết kế để tái sử dụng và đảm bảo tính nhất quán về giao diện và trải nghiệm người dùng.

## Các Components Chung

1. **Thanh điều hướng (Navbar)**

   - Component điều hướng chính xuất hiện ở đầu mỗi trang
   - Cung cấp truy cập đến các trang chính trong ứng dụng
   - Điều chỉnh theo vai trò người dùng và trạng thái đăng nhập

2. **Footer**

   - Xuất hiện ở cuối mỗi trang
   - Chứa thông tin liên hệ, links hữu ích và đường dẫn đến các trang khác
   - Bao gồm form đăng ký nhận thông báo và liên kết mạng xã hội

3. **Floating CTA (Call-to-Action)**

   - Nút hành động nổi có thể truy cập từ bất kỳ đâu trong ứng dụng
   - Thay đổi chức năng dựa trên ngữ cảnh hiện tại của người dùng
   - Cung cấp truy cập nhanh đến các hành động phổ biến

4. **Modal Components**

   - Các cửa sổ pop-up hiển thị nội dung, forms hoặc thông báo
   - Bao gồm các loại khác nhau: dialog, drawer, lightbox, notifications
   - Có thể tùy chỉnh để phù hợp với nhiều mục đích khác nhau

5. **Notification System**
   - Hiển thị thông báo, cảnh báo và tin nhắn cho người dùng
   - Nhiều loại thông báo: toast, alert banners, notification center
   - Tùy chọn tương tác và phản hồi khác nhau

## Danh sách file tài liệu

- [navbar.md](./navbar.md) - Thanh điều hướng (Navbar)
- [footer.md](./footer.md) - Footer
- [floating-cta.md](./floating-cta.md) - Floating CTA (Call-to-Action)
- [modal.md](./modal.md) - Modal Components
- [notification.md](./notification.md) - Notification System

## Cấu trúc mỗi file tài liệu

Mỗi file tài liệu sẽ có cấu trúc như sau:

````
# Tên Component

## Mô tả

Mô tả ngắn gọn về component và mục đích sử dụng

## Loại Component

- Client Component / Server Component
- Responsive / Adaptive
- Stateful / Stateless

## Các biến thể

- Biến thể 1
- Biến thể 2
- ...

## Prompt chi tiết

```prompt
Nội dung prompt chi tiết để tạo ra component
````

## Props và API

| Prop  | Type    | Default   | Description |
| ----- | ------- | --------- | ----------- |
| prop1 | string  | "default" | Mô tả prop1 |
| prop2 | boolean | false     | Mô tả prop2 |
| ...   | ...     | ...       | ...         |

## Giao diện

Mô tả chi tiết giao diện của component, nếu có

## Lưu ý

Các lưu ý quan trọng khi sử dụng component

```

## Sử dụng Components

Các components chung này nên được ưu tiên sử dụng trong toàn bộ ứng dụng thay vì tạo mới các components tương tự. Điều này giúp:

1. Đảm bảo tính nhất quán trong trải nghiệm người dùng
2. Giảm thời gian phát triển thông qua việc tái sử dụng code
3. Đơn giản hóa việc bảo trì và cập nhật
4. Tuân thủ theo các tiêu chuẩn thiết kế đã được thiết lập

Khi cần một component chưa có trong danh sách này, hãy cân nhắc liệu nó có nên được thêm vào như một component chung hay không dựa trên mức độ tái sử dụng tiềm năng của nó.
```
