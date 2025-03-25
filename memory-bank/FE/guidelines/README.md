# Hướng dẫn Phát triển Giao diện NyNus

Thư mục này chứa các hướng dẫn và quy tắc cho việc phát triển giao diện người dùng cho nền tảng NyNus. Các hướng dẫn này giúp đảm bảo tính nhất quán, chất lượng và hiệu quả trong quá trình phát triển giao diện.

## Các hướng dẫn chính

1. **Quy tắc Styling**

   - Cách sử dụng Tailwind CSS
   - Theme variables và cách áp dụng
   - CSS Module cho các trường hợp đặc biệt
   - Dark mode và các theme khác

2. **Cấu trúc Component**

   - Tổ chức file và thư mục
   - Quy ước đặt tên
   - Server Components vs Client Components
   - Props và TypeScript interfaces

3. **Accessibility**

   - WCAG guidelines và compliance
   - Keyboard navigation
   - Screen reader support
   - Color contrast và text readability

4. **Responsive Design**

   - Mobile-first approach
   - Breakpoints và media queries
   - Adaptive vs responsive design
   - Touch targets và mobile optimizations

5. **Performance**
   - Code splitting và lazy loading
   - Image optimization
   - Font loading strategies
   - Minimizing main thread work

## Nội dung hướng dẫn phát triển

```
## Quy tắc Styling
- Sử dụng Tailwind CSS cho tất cả styling
- Tuân thủ các theme variables đã định nghĩa trong tailwind.config.js
- Sử dụng CSS Module cho các component cần styling phức tạp
- Đảm bảo dark mode support cho mọi component

## Cấu trúc Component
- Mỗi component nên có file riêng
- Sử dụng cấu trúc rõ ràng: Props interface → component → export
- Tách logic phức tạp vào custom hooks
- Ưu tiên sử dụng Server Components khi có thể

## Accessibility
- Đảm bảo tất cả input fields có labels phù hợp
- Sử dụng ARIA attributes khi cần thiết
- Đảm bảo keyboard navigation cho tất cả interactive elements
- Kiểm tra contrast ratio cho text và background

## Responsive Design
- Thiết kế mobile-first
- Sử dụng các breakpoint nhất quán: sm, md, lg, xl, 2xl
- Đảm bảo tất cả forms và buttons có kích thước phù hợp trên mobile
- Tối ưu hóa layout cho các kích thước màn hình khác nhau
```

## Cách sử dụng hướng dẫn

Các hướng dẫn phát triển này nên được tham khảo trước và trong quá trình phát triển giao diện. Cụ thể:

1. **Trước khi bắt đầu**: Xem qua toàn bộ hướng dẫn để nắm rõ các quy tắc và chuẩn mực
2. **Trong quá trình phát triển**: Tham khảo các phần liên quan khi gặp vấn đề hoặc cần làm rõ
3. **Khi review code**: Sử dụng các hướng dẫn như checklist để đảm bảo code tuân thủ chuẩn mực
4. **Khi cập nhật/mở rộng**: Đảm bảo các thay đổi/bổ sung tuân thủ các nguyên tắc đã đề ra

## Quy trình cập nhật hướng dẫn

Khi cần cập nhật hoặc bổ sung các hướng dẫn:

1. Thảo luận thay đổi với team
2. Tạo PR với thay đổi được đề xuất
3. Review và phê duyệt bởi ít nhất 2 team members
4. Merge và thông báo cho team về những thay đổi

Các hướng dẫn này là tài liệu sống, sẽ được cập nhật và cải thiện liên tục khi dự án phát triển và các best practices mới được xác định.
