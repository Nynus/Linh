# Trang Đăng nhập & Đăng ký

## Mô tả

Trang đăng nhập và đăng ký cung cấp phương thức xác thực và tạo tài khoản cho người dùng NyNus. Các trang được thiết kế để đơn giản, dễ sử dụng nhưng vẫn đảm bảo tính bảo mật cao. Bao gồm cả trang phục hồi mật khẩu và trang debug login dành cho developers.

## Đường dẫn

- **Đăng nhập**: `/auth/signin`
- **Đăng ký**: `/auth/signup`
- **Quên mật khẩu**: `/auth/forgot-password`
- **Debug Login**: `/debug-login` (chỉ môi trường development)

## Chức năng chính

- Xác thực người dùng với email/mật khẩu
- Đăng nhập với các provider (Google, Facebook)
- Đăng ký tài khoản mới
- Khôi phục/đặt lại mật khẩu
- Debug các vấn đề liên quan đến authentication (dev only)

## Prompt chi tiết

### Trang Đăng nhập

```
Thiết kế một trang đăng nhập hiện đại, tương thích với cả màn hình tối và sáng. Trang được chia thành hai phần: bên trái hiển thị hình ảnh minh họa và thông điệp chào mừng, bên phải là form đăng nhập.

Form đăng nhập bao gồm các trường: email và mật khẩu, với validation đầy đủ thông qua Zod. Email phải hợp lệ và mật khẩu ít nhất 5 ký tự. Cần có chức năng hiển thị/ẩn mật khẩu với các icon eye/eye-off.

Nút đăng nhập có gradient từ indigo đến purple, với hiệu ứng loading khi đang xử lý. Form hiển thị thông báo lỗi rõ ràng nếu đăng nhập thất bại.

Bên dưới form cần có liên kết đến trang đăng ký, nút đăng nhập với Google, và tùy chọn quên mật khẩu. Toàn bộ form được làm nổi bật với hiệu ứng shadow và border tinh tế.
```

### Trang Đăng ký

```
Thiết kế một trang đăng ký hiện đại và thân thiện với người dùng, nhất quán với thiết kế trang đăng nhập. Trang cũng chia làm hai phần: panel minh họa bên trái và form đăng ký bên phải.

1. Panel Trái - Giới thiệu:
   - Background gradient với hiệu ứng animated particles nhẹ nhàng
   - Hình minh họa về học tập cộng đồng hoặc hành trình phát triển
   - Heading: "Bắt đầu hành trình học tập cùng NyNus"
   - Bulleted list các lợi ích chính: "AI cá nhân hóa", "Học liệu chất lượng cao", "Cộng đồng hỗ trợ"
   - Metrics: Số học sinh đã đạt kết quả tốt hơn với NyNus
   - Testimonial từ học sinh tiêu biểu

2. Panel Phải - Form Đăng ký:
   - Card với hiệu ứng elevation và rounded corners
   - Progress bar/stepper ở trên cùng nếu form có nhiều bước
   - Tiêu đề "Tạo tài khoản mới" với animation subtle fade-in

   - Form với các trường:
     - Họ tên đầy đủ với icon User
     - Email với icon Mail và validation trực tiếp
     - Số điện thoại (tùy chọn) với country selector
     - Mật khẩu với icon Lock và strength meter
     - Xác nhận mật khẩu với matching validation
     - Dropdown chọn cấp học (Lớp 10, 11, 12, Sinh viên...)

   - Checkbox đồng ý điều khoản với link đến Terms & Privacy
   - Checkbox nhận thông báo về khuyến mãi (opt-in)

   - Nút "Đăng ký":
     - Gradient button full width
     - Disabled state khi form chưa hợp lệ
     - Loading state khi đang xử lý
     - Animation celebration khi hoàn thành

   - Divider với text "hoặc đăng ký với"

   - Social sign up:
     - Buttons cho Google, Facebook, Apple với branding phù hợp
     - Tooltip giải thích về thông tin được chia sẻ khi hover

   - Footer:
     - "Đã có tài khoản? Đăng nhập"
     - Links đến Help Center và FAQ

3. Validation & Error Handling:
   - Real-time validation với visual cues (checkmarks, X marks)
   - Password strength meter với feedback cụ thể
   - Error messages rõ ràng dưới mỗi field
   - Form không reset khi có lỗi, giữ nguyên dữ liệu đã nhập

4. Success State:
   - Confirmation screen với confetti animation
   - "Chào mừng [Tên người dùng]!"
   - Options: "Khám phá ngay" hoặc "Hoàn thiện hồ sơ"
   - Email verification notice nếu cần

5. Responsive Behavior:
   - Stack vertical trên mobile (panel minh họa ở trên, form ở dưới)
   - Compressed panel minh họa trên tablet/mobile
   - Form fields đủ lớn trên mobile để dễ dàng nhập liệu
   - Keyboard adjustments để đảm bảo submit button luôn visible

Đảm bảo tất cả texts và labels rõ ràng, dễ đọc với contrast ratio đạt WCAG standards. Form cần có proper tab indexing và keyboard navigation. Implement ARIA attributes cho accessibility.
```

### Trang Debug Login

```
Thiết kế một trang debug đăng nhập dành cho nhà phát triển để kiểm tra và troubleshoot quá trình authentication. Trang này chỉ hiển thị trong môi trường development.

1. Header:
   - Warning banner rõ ràng: "Development Tool Only"
   - Mô tả ngắn về mục đích của trang
   - Toggle giữa dark/light mode để test cả hai theme

2. Authentication Debug Panel:
   - Card với border dashed và màu cảnh báo nhẹ
   - Tabs để chuyển đổi giữa các phương thức auth: JWT, Session, OAuth

   - JWT Debug Section:
     - Input field để nhập/paste JWT token
     - Button "Decode" để hiển thị thông tin token
     - Display kết quả decoded với syntax highlighting
     - Thông tin về expiration time với visual countdown
     - Copy button cho mỗi phần của token

   - Session Debug:
     - Hiển thị session hiện tại (nếu có)
     - Button tạo test session mới
     - Thông tin về session storage location (cookie/db)
     - Ability để modify session data cho testing

   - OAuth Providers Test:
     - Buttons cho mỗi OAuth provider (Google, Facebook, etc.)
     - Status indicators cho mỗi provider (configured/not configured)
     - Test flow buttons có thể trigger auth flow giả lập
     - Response visualizer

3. User Impersonation:
   - Dropdown chọn test users có sẵn (Admin, Teacher, Student)
   - "Login as User X" button với warning confirmation
   - Clear impersonation button
   - Session details của user đang impersonate

4. Auth Flow Visualizer:
   - Diagram flowchart của authentication process
   - Current step highlight trong flow
   - Timing metrics cho mỗi step
   - Error simulation controls

5. Network Monitor:
   - Display của auth-related API calls
   - Status codes và response times
   - Ability để replay requests
   - Filter options cho request types

6. Console:
   - Log viewer cho auth-related events
   - Filter và search functionality
   - Clear và copy options
   - Severity levels với color coding

7. Testing Utilities:
   - Generate random credentials
   - Test against rate limiting
   - Simulate network conditions (slow/offline)
   - Validate CSRF protection

8. Footer:
   - Environment indicator (DEV/STAGING)
   - Version number của auth system
   - Quick links đến authentication docs
   - Report issue button

Đảm bảo trang này chỉ accessible trong môi trường development, với multiple safeguards để ngăn access trong production. UI cần technical và functional hơn là aesthetic, với focus vào readability và usability cho developers.
```

### Trang Quên Mật khẩu

```
Thiết kế một trang quên mật khẩu đơn giản, an toàn và dễ sử dụng, phù hợp với design system chung của NyNus.

1. Header:
   - Logo NyNus với link về trang chủ
   - Tiêu đề "Khôi phục mật khẩu" với icon Lock Reset
   - Mô tả ngắn gọn quy trình reset password

2. Multi-step Flow:
   - Step indicator ở trên cùng (Step 1: Verify Email → Step 2: Verification Code → Step 3: New Password)
   - Animation transition giữa các bước

3. Step 1 - Verify Email:
   - Form card với subtle shadow
   - Icon email/envelope ở trên cùng
   - Text giải thích: "Nhập email đã đăng ký để nhận mã xác thực"
   - Email input field với validation
   - "Gửi mã xác thực" button với loading state
   - Link "Quay lại đăng nhập" ở dưới cùng
   - Alternative option: "Verify bằng số điện thoại"

4. Step 2 - Verification Code:
   - Animation hiển thị email đã gửi code
   - OTP input fields (4-6 ô) với auto-focus khi nhập
   - Timer đếm ngược cho code expiration
   - "Resend code" option (disabled until timer expires)
   - "Verify" button
   - "Edit email" link để quay lại step 1

5. Step 3 - New Password:
   - Password field với requirements list:
     - Ít nhất 8 ký tự
     - Chứa chữ hoa và chữ thường
     - Chứa số hoặc ký tự đặc biệt
   - Visual password strength meter
   - Confirm password field với matching validation
   - "Cập nhật mật khẩu" button
   - Checkbox "Đăng xuất khỏi tất cả thiết bị"

6. Success Confirmation:
   - Success animation (checkmark với confetti)
   - "Mật khẩu đã được cập nhật thành công!"
   - "Đăng nhập ngay" button
   - Countdown auto-redirect đến trang đăng nhập

7. Error States:
   - Thông báo rõ ràng cho mỗi loại lỗi:
     - Email không tồn tại
     - Mã xác thực không chính xác hoặc hết hạn
     - Lỗi mạng hoặc server
   - Retry options cho mỗi lỗi
   - Support contact information khi cần

8. Security Features:
   - CAPTCHA cho multiple attempts
   - Rate limiting notice khi thử quá nhiều lần
   - IP tracking notification
   - Recent activity section nếu phát hiện suspicious activity

Đảm bảo toàn bộ quy trình được thiết kế theo best practices về security, với thông báo rõ ràng về mỗi bước. UI cần minimalist nhưng cung cấp đủ context và guidance. Tất cả states (loading, error, success) cần animation và visual feedback phù hợp.
```

## Giao diện

### Trang Đăng nhập

Layout hai cột (1:1) trên desktop, với panel minh họa bên trái và form đăng nhập bên phải. Trên tablet và mobile, layout chuyển sang dạng stacked với panel minh họa thu nhỏ hoặc chỉ hiển thị một phần.

Form đăng nhập đặt trong card với shadow nhẹ (box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08)), border radius 12px và padding vừa đủ (p-8). Các input fields có high contrast khi focus và đủ lớn cho mobile (h-12).

### Trang Đăng ký

Layout tương tự trang đăng nhập nhưng form phức tạp hơn. Sử dụng stepper (nếu nhiều bước) hoặc form dài với sections rõ ràng. Password strength meter sử dụng gradient color từ đỏ (yếu) đến xanh lá (mạnh) với animated fill effect.

### Trang Debug Login

Giao diện technical với sidebar navigation cho các công cụ debug khác nhau. Main content area sử dụng monospace font cho các JSON/code displays, với syntax highlighting. Card containers có dashed borders (#E2E8F0) và background color nhẹ (#F8FAFC).

### Trang Quên Mật khẩu

Layout đơn giản hơn với card trung tâm (max-width: 480px). Step indicator sử dụng circles connected với lines, và bước hiện tại được highlight với primary color. OTP input fields có width đều nhau và auto-focus.

## Lưu ý

- Tất cả forms phải sử dụng phương pháp defense-in-depth bao gồm:
  - Client-side validation (Zod/Yup)
  - Rate limiting
  - CSRF protection
  - Server-side validation
- Implement ARIA attributes cho tất cả form fields
- Đảm bảo error messages rõ ràng, cụ thể và actionable
- Social logins phải hiển thị rõ ràng scope của permissions được yêu cầu
- Session tokens cần được stored securely (httpOnly cookies)
- Tất cả authentication pages phải được served qua HTTPS
- Implement proper CSP headers cho protection và X-XSS-Protection
- Đảm bảo debug tools hoàn toàn không active trong production
