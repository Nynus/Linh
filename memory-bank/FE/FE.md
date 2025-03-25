# Tài liệu Giao diện Frontend NyNus

## Mục lục

- [Tổng quan](#tổng-quan)
- [Công nghệ sử dụng](#công-nghệ-sử-dụng)
- [Cấu trúc thư mục](#cấu-trúc-thư-mục)
- [Danh sách trang và chức năng](#danh-sách-trang-và-chức-năng)
- [Prompt thiết kế chung](#prompt-thiết-kế-chung)
- [Prompt chi tiết cho từng trang](#prompt-chi-tiết-cho-từng-trang)
  - [Trang chủ](#trang-chủ)
  - [Đăng nhập & Đăng ký](#đăng-nhập--đăng-ký)
  - [Trang quản lý người dùng](#trang-quản-lý-người-dùng)
  - [Trang quản lý câu hỏi](#trang-quản-lý-câu-hỏi)
  - [Trang quản lý khóa học](#trang-quản-lý-khóa-học)
  - [Trang quản lý đề thi](#trang-quản-lý-đề-thi)
  - [Trang quản lý thảo luận](#trang-quản-lý-thảo-luận)
  - [Trang phân tích chi tiết](#trang-phân-tích-chi-tiết)
  - [Trang chi tiết đề thi](#trang-chi-tiết-đề-thi)
  - [Trang làm bài thi](#trang-làm-bài-thi)
  - [Trang kết quả bài thi](#trang-kết-quả-bài-thi)
  - [Trang thư viện](#trang-thư-viện)
  - [Trang bản đồ ID](#trang-bản-đồ-id)
  - [Trang hồ sơ người dùng](#trang-hồ-sơ-người-dùng)
  - [Trang tạo/chỉnh sửa câu hỏi](#trang-tạochỉnh-sửa-câu-hỏi)
- [Components chung](#components-chung)
  - [Thanh điều hướng (Navbar)](#thanh-điều-hướng-navbar)
  - [Footer](#footer)
  - [Floating CTA](#floating-cta-call-to-action)
  - [Modal Components](#modal-components)
  - [Notification System](#notification-system)
- [Công cụ và API chính](#công-cụ-và-api-chính)
- [Hướng dẫn phát triển giao diện](#hướng-dẫn-phát-triển-giao-diện)

---

## Tổng quan

NyNus là một nền tảng học tập toán học tương tác với AI, được xây dựng với các công nghệ hiện đại như Next.js, React, TypeScript, Tailwind CSS và Shadcn UI. Hệ thống cung cấp môi trường học tập cá nhân hóa để nâng cao kết quả học tập của học sinh, đặc biệt trong lĩnh vực toán học.

### Công nghệ chính

- **Frontend**: Next.js App Router, React, TypeScript, Tailwind CSS, Shadcn UI
- **UI Components**: Framer Motion (animations), Lucide (icons), Tailwind
- **API Integration**: API Client service cho giao tiếp Backend
- **Authentication**: NextAuth.js
- **State Management**: React Context API, Custom hooks

### Cấu trúc thư mục chính

- `/app`: Cấu trúc định tuyến của Next.js App Router
- `/components`: UI components tái sử dụng
- `/utils`: Utility functions
- `/lib`: Service và helper functions
- `/providers`: Context providers
- `/contexts`: React Context APIs

## Danh sách Các Trang và Chức năng

### 1. Trang chủ (/)

Trang giới thiệu chính của nền tảng, hiển thị các tính năng học tập với AI, khóa học nổi bật, và lời kêu gọi hành động.

### 2. Xác thực (Authentication)

- **Đăng nhập** (/auth/signin): Cho phép người dùng đăng nhập vào hệ thống
- **Đăng ký** (/auth/signup): Cho phép người dùng tạo tài khoản mới
- **Debug Login** (/debug-login): Công cụ để kiểm tra quá trình đăng nhập trong môi trường phát triển

### 3. Khóa học (courses)

- **Danh sách khóa học** (/khoa-hoc): Hiển thị tất cả khóa học có sẵn
- **Chi tiết khóa học** (/khoa-hoc/[id]): Hiển thị thông tin chi tiết về một khóa học
- **Chương trình học** (/khoa-hoc/[id]/bai-hoc): Danh sách các bài học trong khóa học

### 4. Câu hỏi và Đề thi

- **Danh sách câu hỏi** (/cau-hoi): Thư viện câu hỏi luyện tập
- **Chi tiết câu hỏi** (/cau-hoi/[id]): Hiển thị và cho phép trả lời câu hỏi
- **Danh sách đề thi** (/de-thi): Danh sách các đề thi có sẵn
- **Chi tiết đề thi** (/de-thi/[id]): Thông tin chi tiết về đề thi
- **Luyện đề** (/luyen-de): Chức năng luyện tập với đề thi mẫu
- **Thư viện** (/thu-vien): Tài liệu và tài nguyên học tập

### 5. Thảo luận và Tương tác

- **Diễn đàn thảo luận** (/thao-luan): Nơi trao đổi học tập
- **Chi tiết thảo luận** (/thao-luan/[id]): Xem và tham gia thảo luận cụ thể
- **Nhắn tin** (/nhan-tin): Hệ thống nhắn tin nội bộ giữa người dùng

### 6. Admin Dashboard

- **Admin Dashboard** (/3141592654/admin/dashboard): Tổng quan về hệ thống
- **Quản lý người dùng** (/3141592654/admin/users): Quản lý thông tin người dùng
- **Quản lý khóa học** (/3141592654/admin/courses): Quản lý thông tin khóa học
- **Quản lý câu hỏi** (/3141592654/admin/questions): Quản lý ngân hàng câu hỏi
- **Quản lý đề thi** (/3141592654/admin/exam): Tạo và quản lý đề thi trên hệ thống
- **Ngân hàng đề thi** (/3141592654/admin/exam-bank): Lưu trữ và quản lý các đề thi theo danh mục
- **Quản lý thảo luận** (/3141592654/admin/discussions): Kiểm duyệt nội dung thảo luận
- **Phân tích dữ liệu** (/3141592654/admin/analytics): Thống kê và phân tích dữ liệu
- **Quản lý sách** (/3141592654/admin/books): Quản lý tài liệu và sách trong thư viện
- **Quản lý AI Chat** (/3141592654/admin/ai-chat): Quản lý và cấu hình trợ lý AI
- **Quản lý FAQ** (/3141592654/admin/faq): Quản lý các câu hỏi thường gặp
- **Cài đặt Admin** (/3141592654/admin/settings): Quản lý cài đặt hệ thống

### 7. Công cụ Đặc biệt

- **Bản đồ ID** (/map-id-decoder): Công cụ giải mã ID và ánh xạ
- **Map ID Admin** (/3141592654/admin/map-id): Quản lý và cấu hình hệ thống ánh xạ ID
- **Công cụ kiểm tra LaTeX** (/3141592654/admin/latex-tester): Công cụ soạn thảo và kiểm tra mã LaTeX
- **Quản lý câu hỏi chi tiết** (/3141592654/admin/detailed-question): Quản lý chi tiết và nâng cao cho câu hỏi

## Prompt Mô tả Tổng quan Thiết kế

```
Thiết kế một nền tảng học tập toán học tương tác với AI có tên là NyNus. Nền tảng này tập trung vào việc cung cấp môi trường học tập cá nhân hóa, giúp học sinh đạt kết quả tốt hơn trong môn toán.

Giao diện cần hiện đại, mang tính tối giản nhưng đẹp mắt với theme màu gradient từ indigo đến purple trên nền tối. Sử dụng các hiệu ứng glass morphism và các animation tinh tế để tạo trải nghiệm người dùng tốt nhất.

Hệ thống bao gồm các module chính: quản lý tài khoản, khóa học, câu hỏi và đề thi, hệ thống thảo luận và nhắn tin, cùng với bảng điều khiển admin.

Ứng dụng cần responsive trên mọi thiết bị, với trải nghiệm mobile được tối ưu hóa. Sử dụng kết hợp giữa Server Components và Client Components để tối ưu hiệu suất, với ưu tiên cho SSR khi có thể.

Cuối cùng, thiết kế cần tập trung vào accessibility, đảm bảo người dùng ở mọi trình độ có thể dễ dàng tiếp cận và sử dụng nền tảng.
```

## Prompt Chi tiết cho Từng Trang

### Trang Chủ (Home Page)

```
Thiết kế một trang chủ hiện đại, hấp dẫn và thông tin cho nền tảng học tập toán học NyNus. Trang chủ cần truyền tải rõ giá trị cốt lõi của nền tảng và thu hút người dùng đăng ký.

1. Hero Section:
   - Nền gradient từ indigo đến tím với hiệu ứng wave animation nhẹ nhàng
   - Heading chính nổi bật: "Học toán thông minh với AI" với animation reveal
   - Subheading mô tả ngắn gọn giá trị cốt lõi của nền tảng
   - CTA buttons: "Bắt đầu miễn phí" và "Tìm hiểu thêm" với hover effects
   - Hình ảnh minh họa 3D hoặc animation phù hợp về học tập với AI
   - Badges: Số học sinh đã sử dụng, tỷ lệ cải thiện điểm số

2. Tính năng nổi bật (Feature Cards):
   - 3-4 tính năng chính với icon, tiêu đề và mô tả ngắn
   - Mỗi card có hiệu ứng hover subtle với shadow và scale nhẹ
   - Các tính năng: AI Tutor cá nhân, Phân tích lỗi thông minh, Đề thi thông minh, Cộng đồng học tập

3. Giới thiệu AI Learning:
   - Split section với hình ảnh dashboard minh họa bên trái
   - Nội dung bên phải giải thích cách AI phân tích và cá nhân hóa việc học
   - Hiệu ứng parallax nhẹ khi scroll
   - Icon checkmarks cho các lợi ích chính

4. Khóa học nổi bật:
   - Slider/carousel hiển thị 3-4 khóa học nổi bật
   - Mỗi card hiển thị thumbnail, tiêu đề, mô tả ngắn, đánh giá sao
   - Navigation dots/arrows với animation mượt mà
   - "Xem tất cả khóa học" CTA ở cuối section

5. Đánh giá từ học sinh:
   - Testimonial carousel với ảnh đại diện, tên học sinh, đánh giá
   - Star ratings và quote marks nổi bật
   - Background với pattern nhẹ tạo điểm nhấn
   - Auto-play với pause on hover

6. Thống kê ấn tượng:
   - 4 con số thống kê chính: học sinh, khóa học, bài giảng, tỷ lệ thành công
   - Animation đếm số từ 0 đến giá trị thực khi scroll đến
   - Icon phù hợp cho mỗi số liệu
   - Màu gradient cho các số liệu để nổi bật

7. CTA Section cuối trang:
   - Background gradient với hiệu ứng blob
   - Heading thúc đẩy đăng ký: "Sẵn sàng nâng cao kết quả học tập?"
   - Form đăng ký email đơn giản hoặc button lớn "Bắt đầu ngay"
   - Tùy chọn: countdown timer cho khuyến mãi đặc biệt

8. Footer:
   - Logo, slogan ngắn về nền tảng
   - Links đến các trang chính: Khóa học, Đề thi, Về chúng tôi, Blog
   - Social media icons với hover effects
   - Form đăng ký nhận tin với validation
   - Copyright và links chính sách

Đảm bảo trang responsive trên mọi thiết bị, với navigation mobile-friendly. Sử dụng lazy loading cho images và animation chỉ khi scroll đến view. Tối ưu LCP và CLS.
```

### Trang Đăng nhập (Sign In)

```
Thiết kế một trang đăng nhập hiện đại, tương thích với cả màn hình tối và sáng. Trang được chia thành hai phần: bên trái hiển thị hình ảnh minh họa và thông điệp chào mừng, bên phải là form đăng nhập.

Form đăng nhập bao gồm các trường: email và mật khẩu, với validation đầy đủ thông qua Zod. Email phải hợp lệ và mật khẩu ít nhất 5 ký tự. Cần có chức năng hiển thị/ẩn mật khẩu với các icon eye/eye-off.

Nút đăng nhập có gradient từ indigo đến purple, với hiệu ứng loading khi đang xử lý. Form hiển thị thông báo lỗi rõ ràng nếu đăng nhập thất bại.

Bên dưới form cần có liên kết đến trang đăng ký, nút đăng nhập với Google, và tùy chọn quên mật khẩu. Toàn bộ form được làm nổi bật với hiệu ứng shadow và border tinh tế.
```

### Trang Đăng ký (Sign Up)

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

## Prompt Chi tiết cho Từng Trang

### Trang Đăng nhập

```
Thiết kế một trang đăng nhập hiện đại, tương thích với cả màn hình tối và sáng. Trang được chia thành hai phần: bên trái hiển thị hình ảnh minh họa và thông điệp chào mừng, bên phải là form đăng nhập.

Form đăng nhập bao gồm các trường: email và mật khẩu, với validation đầy đủ thông qua Zod. Email phải hợp lệ và mật khẩu ít nhất 5 ký tự. Cần có chức năng hiển thị/ẩn mật khẩu với các icon eye/eye-off.

Nút đăng nhập có gradient từ indigo đến purple, với hiệu ứng loading khi đang xử lý. Form hiển thị thông báo lỗi rõ ràng nếu đăng nhập thất bại.

Bên dưới form cần có liên kết đến trang đăng ký, nút đăng nhập với Google, và tùy chọn quên mật khẩu. Toàn bộ form được làm nổi bật với hiệu ứng shadow và border tinh tế.
```

### Trang Dashboard Admin

```
Thiết kế một bảng điều khiển admin với sidebar bên trái có thể thu gọn. Sidebar chứa các mục: Dashboard, Users, Courses, Exams, Analytics, Settings và một nút đăng xuất ở cuối.

Phần chính của Dashboard hiển thị 4 thẻ thống kê: tổng người dùng, sách & tài liệu, đề thi & kiểm tra, và hoạt động diễn đàn. Mỗi thẻ hiển thị giá trị hiện tại, xu hướng so với tuần trước (tăng/giảm), và một biểu tượng liên quan.

Bên dưới là một biểu đồ thống kê hoạt động và danh sách các hoạt động gần đây. Các hoạt động hiển thị biểu tượng, loại hoạt động và thời gian.

Toàn bộ giao diện sử dụng nền gradient tối với các thẻ bán trong suốt (backdrop blur), tạo hiệu ứng depth cho giao diện. Các biểu đồ và thẻ thông tin sử dụng màu sắc tương phản để dễ đọc.
```

### Trang Khóa học

```
Thiết kế một trang danh sách khóa học với các bộ lọc ở đầu trang: cấp độ, môn học, và thanh tìm kiếm. Khóa học được hiển thị dưới dạng grid, mỗi thẻ khóa học hiển thị: hình ảnh thumbnail, tiêu đề, mô tả ngắn, cấp độ, số học viên và đánh giá.

Mỗi thẻ khóa học có hiệu ứng hover tinh tế, khi hover sẽ hiển thị nút "Xem chi tiết" hoặc "Đăng ký". Các khóa học đã đăng ký sẽ có dấu hiệu đặc biệt.

Giao diện cần phân trang, với tùy chọn hiển thị số lượng khóa học trên mỗi trang. Khi không có kết quả phù hợp với bộ lọc, hiển thị thông báo và gợi ý các khóa học liên quan.

Trang phải responsive, với 3 cột trên desktop, 2 cột trên tablet và 1 cột trên mobile. Các thẻ khóa học có chiều cao đồng nhất trong cùng một hàng.
```

### Trang Chi tiết Khóa học

```
Thiết kế trang chi tiết khóa học với banner lớn ở đầu trang hiển thị hình ảnh khóa học, tiêu đề, mô tả ngắn và đánh giá. Phía bên phải banner là thẻ thông tin đăng ký/tiến độ học tập.

Nội dung chính chia thành các tab: Tổng quan, Nội dung khóa học, Đánh giá, và FAQ. Tab Tổng quan hiển thị mô tả chi tiết, kết quả học tập, yêu cầu, thông tin giảng viên. Tab Nội dung khóa học hiển thị cấu trúc bài học theo chương/mục, với tiến độ hoàn thành cho người đã đăng ký.

Tab Đánh giá hiển thị các đánh giá từ học viên, với tùy chọn lọc theo số sao. Tab FAQ hiển thị các câu hỏi thường gặp dưới dạng accordion.

Với người chưa đăng ký, hiển thị nút đăng ký nổi bật và preview một số bài học. Với người đã đăng ký, hiển thị nút "Tiếp tục học" dẫn đến bài học gần nhất và tiến độ hoàn thành.
```

### Trang Câu hỏi và Luyện tập

```
Thiết kế một trang luyện tập với câu hỏi hiển thị ở trung tâm. Mỗi câu hỏi bao gồm: nội dung câu hỏi (có thể chứa LaTeX cho công thức toán học), các lựa chọn đáp án, và thời gian còn lại.

Thanh tiến trình ở đầu trang hiển thị vị trí câu hỏi hiện tại trong tổng số câu hỏi. Mỗi câu hỏi được làm nổi bật với shadow và border, các lựa chọn đáp án có hiệu ứng hover và selected.

Sau khi trả lời, hiển thị ngay kết quả đúng/sai và giải thích chi tiết. Có tùy chọn đánh dấu câu hỏi để xem lại sau.

Cuối trang có các nút: câu trước, câu tiếp theo, và nộp bài (nếu đang trong một bài kiểm tra). Khi hoàn thành tất cả câu hỏi, hiển thị kết quả tổng quan với số câu đúng, số điểm, và gợi ý cải thiện.
```

### Trang Thảo luận

```
Thiết kế một diễn đàn thảo luận với danh sách bài viết ở bên trái và nội dung chi tiết bên phải. Phần danh sách có các bộ lọc: mới nhất, phổ biến nhất, chưa trả lời, các bài của tôi, và tìm kiếm.

Mỗi bài trong danh sách hiển thị: tiêu đề, tên người đăng, thời gian, số lượng trả lời, số lượt xem, và tags. Các bài ghim được đánh dấu đặc biệt.

Phần nội dung chi tiết hiển thị đầy đủ bài viết với định dạng markdown (hỗ trợ LaTeX), các trả lời được sắp xếp theo thời gian, với trả lời được chấp nhận hiển thị đầu tiên.

Người dùng có thể thêm trả lời mới, vote up/down cho bài viết và trả lời. Nếu là tác giả bài viết, có thể đánh dấu một trả lời là câu trả lời được chấp nhận.

Bài viết và trả lời hỗ trợ đính kèm ảnh, mã và công thức toán học với syntax highlighting.
```

### Trang Nhắn tin

```
Thiết kế một hệ thống nhắn tin với danh sách cuộc trò chuyện ở bên trái và cửa sổ trò chuyện bên phải. Danh sách cuộc trò chuyện hiển thị: ảnh đại diện người dùng, tên, tin nhắn gần nhất, thời gian, và trạng thái đã đọc/chưa đọc.

Cửa sổ trò chuyện hiển thị tin nhắn theo dạng bubble, phân biệt bên gửi và nhận bằng màu sắc và vị trí. Mỗi tin nhắn hiển thị thời gian gửi và trạng thái đã đọc/đã gửi.

Ô nhập tin nhắn hỗ trợ emoji, đính kèm file và gửi hình ảnh. Tin nhắn hỗ trợ markdown đơn giản và hiển thị preview cho links.

Hệ thống cần có chức năng cuộn vô hạn để tải tin nhắn cũ, thông báo khi có tin nhắn mới, và hiển thị trạng thái "đang soạn tin" khi người kia đang nhập.
```

### Trang Analytics Admin

```
Thiết kế trang phân tích dữ liệu cho admin với các biểu đồ và số liệu thống kê. Đầu trang có bộ lọc thời gian: 7 ngày, 30 ngày, 90 ngày, 12 tháng và tùy chọn xem theo ngày/tuần/tháng.

Phần tổng quan hiển thị 4 chỉ số chính: người dùng, tài liệu, lượt thi và hoạt động diễn đàn, mỗi chỉ số có giá trị hiện tại và xu hướng so với kỳ trước.

Phần phân tích chi tiết hiển thị các biểu đồ: người dùng mới theo thời gian, hoạt động sử dụng theo giờ trong ngày, phân bố người dùng theo vùng miền, và tỷ lệ hoàn thành khóa học.

Phần hoạt động khóa học hiển thị bảng xếp hạng các khóa học phổ biến nhất, cùng với tỷ lệ hoàn thành và đánh giá trung bình.

Tất cả biểu đồ đều tương tác được, khi hover hiển thị thông tin chi tiết, và có tùy chọn xuất dữ liệu ra CSV.
```

## Công cụ và API chính

### Authentication và Authorization

- NextAuth.js để quản lý đăng nhập/đăng ký
- JWT và refresh token cho xác thực
- Guards bảo vệ các route admin

### Tích hợp API

- API Client service để gọi RESTful endpoints
- Middleware xử lý refresh token
- Interceptors để xử lý error và authentication headers

### UI Libraries

- Shadcn UI cho components cơ bản (buttons, forms, etc.)
- Tailwind CSS cho styling
- Framer Motion cho animations
- React Hook Form và Zod cho form validation

### Tính năng đặc biệt

- Tích hợp LaTeX cho công thức toán học
- Markdown editor cho nội dung diễn đàn
- Tải lên hình ảnh và đính kèm file
- Chức năng search với highlighting kết quả

### Trang Quản lý Người dùng (Admin Users)

```
Thiết kế một trang quản lý người dùng dành cho admin với đầy đủ chức năng hiển thị, tìm kiếm, lọc và quản lý thông tin người dùng.

1. Header Section:
   - Tiêu đề "Quản lý Người dùng" với badge hiển thị tổng số người dùng
   - Action buttons: "Thêm người dùng mới", "Xuất dữ liệu", "Bulk actions"
   - Search bar với filter dropdown (tìm theo tên, email, ID, etc.)
   - Filter chips: Recent, Active, Inactive, New

2. Filter Panel:
   - Dropdown lọc theo vai trò: Tất cả, Admin, Giáo viên, Học sinh
   - Date range picker cho ngày đăng ký
   - Checkbox filters: Verified email, Has payment method, Complete profile
   - Status filter: Active, Suspended, Pending, Deleted
   - Clear filters button với counter hiển thị số filters đang áp dụng

3. User Table:
   - Sticky header với sortable columns
   - Columns: Checkbox (bulk select), Avatar+Name, Email, Role, Status, Registration date, Last active, Actions
   - Row hover effect với quick action buttons hiện ra
   - Pagination controls với options cho rows per page
   - Skeleton loading state khi fetching data

   - Per-user Actions:
     - Edit user (icon button)
     - View details (opens drawer/modal)
     - Change role (dropdown)
     - Toggle status (switch/button)
     - Delete (requires confirmation)

   - Row expansion khi click để hiển thị thêm thông tin:
     - Subscription details
     - Device & login history
     - Course enrollments
     - Recent activity
     - Notes/flags

4. User Details Modal/Drawer:
   - Header với avatar, name và role badges
   - Tabs: Profile, Security, Subscriptions, Activity, Notes

   - Profile Tab:
     - Personal info (name, email, phone, DOB)
     - Education details
     - Address information
     - Preferences & settings
     - Edit mode toggle

   - Security Tab:
     - Password reset option
     - 2FA status và management
     - Active sessions với force logout option
     - Login history với location và device info

   - Subscriptions Tab:
     - Current plan details
     - Billing history
     - Payment methods
     - Upgrade/downgrade options

   - Activity Tab:
     - Timeline của user actions
     - Course progress overview
     - Test results summary
     - Forum participation stats

   - Notes Tab:
     - Admin notes về user
     - Flag controls (suspicious activity, VIP, etc.)
     - Support ticket history

5. Bulk Actions:
   - Activated khi multi-select checkbox được sử dụng
   - Actions: Change role, Change status, Delete, Export selected
   - Count indicator cho selected items

6. Import/Export:
   - Import users from CSV/Excel
   - Template download option
   - Export options (formats, fields to include)
   - Export history với downloadable files

7. Empty States:
   - No users matching filters
   - No users in database
   - Search with no results

8. Mobile Adaptation:
   - Table chuyển sang card view trên mobile
   - Swipe actions cho từng user card
   - Collapsible filters section
   - Priority information display

Đảm bảo rằng giao diện dễ sử dụng với các admin tasks thường xuyên được ưu tiên hiển thị. Performance cần được tối ưu cho large datasets với infinite scrolling hoặc pagination hiệu quả. Toàn bộ data actions cần có loading và error states rõ ràng.
```

### Trang Quản lý Câu hỏi (Admin Questions)

```
Thiết kế trang quản lý câu hỏi cho admin với khả năng tạo, chỉnh sửa, phân loại và kiểm duyệt ngân hàng câu hỏi trên nền tảng.

1. Header Section:
   - Tiêu đề "Ngân hàng Câu hỏi" với counter tổng số câu hỏi
   - Add question button với dropdown (Single, Batch import, AI generate)
   - View options: Grid/List toggle
   - Question analytics overview button (opens dashboard)

2. Advanced Search & Filter:
   - Search box với syntax highlighting hỗ trợ tìm theo nội dung, ID, tags
   - Subject filter với hierarchical dropdown (Toán > Đại số > Phương trình,...)
   - Difficulty slider (1-5 sao)
   - Grade level selector (multiple select)
   - Question type filter: Multiple choice, Essay, True/False, etc.
   - Status filter: Published, Draft, Under review, Flagged
   - Tags input với autocomplete
   - AI-assisted search button (tìm câu hỏi tương tự)

3. Question Listing:
   - Card view hoặc table view tùy thuộc vào selection

   - Card View:
     - Math expression preview với rendering của LaTeX
     - Card header với subject và grade indicators
     - Difficulty visualization (1-5 sao)
     - Tags display với color coding
     - Usage stats (times used, success rate)
     - Quick action buttons (edit, preview, duplicate, archive)
     - Visual indicator cho question types (icon)
     - Hover effect hiển thị preview đáp án

   - Table View:
     - Compact display với more rows
     - Columns: ID, Preview, Type, Subject, Grade, Difficulty, Usage, Last updated, Actions
     - Inline editing cho một số fields (difficulty, tags, status)
     - Batch selection checkbox

4. Question Preview Modal:
   - Full rendering của câu hỏi với LaTeX và hình ảnh
   - Tabs cho different aspects:
     - Student View (how it appears to students)
     - Answer & Explanation
     - Metadata & Usage stats
     - Version history
   - Related questions section
   - Edit và Duplicate buttons
   - Performance metrics (% correct answers, average time spent)

5. Question Editor:
   - Side-by-side preview khi editing
   - Rich text editor với LaTeX support
   - Image, video và file attachment tools
   - Answer options management với correct answer indication
   - Explanation editor
   - Metadata section:
     - Subject taxonomy selection
     - Grade level
     - Difficulty slider
     - Tags
     - Bloom's taxonomy classification
     - Related concepts
   - Auto-save và versioning
   - Validation warnings và tips
   - Accessibility checker

6. Question Bank Management:
   - Bulk actions: Delete, Change status, Export, Move
   - Import section với template download
   - Drag-and-drop reordering trong collections
   - Collection management (create, edit, delete)
   - Duplicate detection với highlighting của similar questions

7. Question Analytics Section:
   - Per-question performance metrics
   - Difficulty analysis
   - Discrimination index
   - Time spent distribution
   - Incorrect answer distribution
   - Usage trong các đề thi và courses
   - A/B testing options cho alternatives

8. AI Question Tools:
   - AI suggestion panel cho improvements
   - Auto-generation từ topics
   - Difficulty assessment
   - Similar question detection
   - Quality scoring

9. Mobile Experience:
   - Simplified card view
   - Basic editing capabilities
   - Preview mode optimization
   - Limited bulk actions

Đảm bảo giao diện hỗ trợ hiệu quả việc quản lý large question banks với tens of thousands of items. Performance optimization is critical, với placeholder loading states và pagination/infinite scroll. Toàn bộ LaTeX rendering cần được cached để tránh re-rendering không cần thiết.
```

### Trang Nhập Câu Hỏi (InputQues)

```
Thiết kế trang nhập câu hỏi chuyên dụng với giao diện trực quan cho việc nhập, trích xuất và quản lý câu hỏi từ nhiều nguồn khác nhau như LaTeX, Word hoặc nhập trực tiếp.

1. Header Section:
   - Thanh điều hướng với nút quay lại và tên trang ("Thêm câu hỏi" hoặc "Chỉnh sửa câu hỏi")
   - Nút lưu câu hỏi và xuất JSON ở góc phải
   - Thông báo lỗi/thành công hiển thị phía dưới header khi cần

2. Phương thức Nhập (Input Methods):
   - Thanh chuyển đổi giữa các phương thức nhập:
     - "Nhập từ LaTeX" - Cho phép dán mã LaTeX và tự động trích xuất
     - "Nhập từ Doc" - Cho phép tải lên tài liệu Word/PDF
   - Giao diện thay đổi tùy theo phương thức được chọn

3. Nhập LaTeX Section:
   - Editor lớn để nhập văn bản LaTeX với font monospace
   - Nút "Xem mẫu" để hiển thị các mẫu LaTeX phổ biến
   - Nút "Phân tích LaTeX" để xử lý và trích xuất thông tin
   - Panel hiển thị kết quả trích xuất với các thông tin được tổ chức

4. Tải tài liệu Section (Doc Upload):
   - Vùng kéo thả để tải tài liệu lên (docx, pdf)
   - Giới hạn file size và định dạng được hỗ trợ
   - Thông tin hướng dẫn về định dạng file chuẩn
   - Trạng thái hiện tại của tính năng (đang phát triển)

5. Tabs Thông tin Câu hỏi:
   - Tab Nội dung:
     - Form nhập thông tin cơ bản (nội dung câu hỏi, giải thích, nguồn)
     - Phần định danh câu hỏi (mã định danh, môn học, lớp)
     - Phần câu trả lời (tùy chọn, đáp án đúng)

   - Tab Metadata:
     - Thông tin về người tạo, trạng thái
     - Lịch sử sử dụng, thống kê
     - Phản hồi và đánh giá

   - Tab Danh sách:
     - Hiển thị danh sách câu hỏi đã có trong cơ sở dữ liệu
     - Cho phép tìm kiếm và chọn để chỉnh sửa

6. Phần Form Chính:
   - QuestionBasicInfo: Nhập nội dung câu hỏi, hình thức (trắc nghiệm, đúng/sai), giải thích, nguồn, tags
   - QuestionAnswerInfo: Quản lý các tùy chọn trả lời, đánh dấu đáp án đúng
   - QuestionIDInfo: Thiết lập định danh câu hỏi, chương trình, độ khó
   - QuestionMetadataInfo: Thông tin phụ như người tạo, trạng thái, lịch sử

7. Preview và Validation:
   - Hiển thị xem trước câu hỏi như cách học sinh sẽ nhìn thấy
   - Kiểm tra xác thực cho tất cả các trường
   - Hiển thị cảnh báo khi thiếu thông tin quan trọng

8. Hỗ trợ LaTeX:
   - Các mẫu LaTeX có sẵn cho các dạng câu hỏi phổ biến
   - Trích xuất tự động các thành phần từ mã LaTeX
   - Phân tích nội dung, đáp án, và giải thích
   - Xử lý các công thức toán học

9. Trạng thái Lưu:
   - Hiển thị trạng thái (đang lưu, thành công, lỗi)
   - Thông báo chi tiết và rõ ràng
   - Tự động lưu định kỳ để tránh mất dữ liệu

10. Tối ưu hóa Mobile:
    - Layout dạng stack cho màn hình nhỏ
    - Các input field lớn hơn để dễ sử dụng trên thiết bị cảm ứng
    - Tab navigation tối giản và rõ ràng
    - Tối ưu cho việc nhập văn bản trên mobile

Trang này cần ưu tiên UX cho quá trình nhập câu hỏi phức tạp, với focus vào việc giảm thiểu thời gian và công sức cần thiết để tạo câu hỏi chất lượng cao. Đặc biệt quan trọng là khả năng trích xuất tự động từ mã LaTeX hoặc tài liệu để tiết kiệm thời gian nhập liệu thủ công.
```

### Trang Quản lý Khóa học (Admin Courses)

```
Thiết kế trang quản lý khóa học cho admin với khả năng tạo, chỉnh sửa, theo dõi và phát triển nội dung khóa học trên nền tảng.

1. Header Section:
   - Tiêu đề "Quản lý Khóa học" với counter tổng số khóa học
   - "Tạo khóa học mới" button với template selection dropdown
   - View toggle: Grid/List/Kanban
   - Bulk actions và Export options

2. Filter Panel:
   - Search bar với filter theo tiêu đề, ID, instructor
   - Status filter: Published, Draft, Scheduled, Archived
   - Subject area với hierarchical selection
   - Grade level filter
   - Date range picker (created/updated)
   - Enrollment filter (popular, new, trending)
   - Rating filter

3. Course Grid/List View:
   - Card hiển thị:
     - Thumbnail với overlay status indicator
     - Tiêu đề và mô tả ngắn
     - Instructor avatar và tên
     - Subject và grade tags
     - Progress bar cho completion status nếu là draft
     - Key metrics: Enrollments, Rating, Revenue, Completion rate
     - Quick action buttons (edit, preview, duplicate, analytics)

   - List view với additional columns:
     - Created/Updated dates
     - Total modules/lessons
     - Duration
     - Price point

   - Kanban view:
     - Columns by status (Drafts, Review, Published, Archived)
     - Drag & drop functionality để update status

4. Course Detail Drawer/Page:
   - Header với thumbnail, title, status badge
   - Tabs: Overview, Structure, Students, Analytics, Settings

   - Overview Tab:
     - Description
     - Learning objectives
     - Requirements
     - Instructor info
     - Schedule & availability
     - Quick stats dashboard

   - Structure Tab:
     - Module & lesson hierarchical view
     - Drag & drop reordering
     - Bulk content operations
     - Content type indicators (video, quiz, text, etc.)
     - Duration & complexity metrics
     - Assessment distribution

   - Students Tab:
     - Enrollment table với search
     - Progress tracking
     - Performance metrics
     - Engagement statistics
     - Manual enrollment tools

   - Analytics Tab:
     - Engagement graphs (daily active students)
     - Completion funnel
     - Weak points identification (drop-off points)
     - Assessment performance
     - Revenue metrics if applicable
     - Comparison với platform averages

   - Settings Tab:
     - Visibility & access controls
     - Pricing configuration
     - Certificates
     - Discussion settings
     - Prerequisites
     - Scheduling tools

5. Course Editor:
   - Side navigation for modules/lessons
   - Content editor with rich formatting
   - Media library integration
   - Assessment builder
   - Live preview option
   - Version history & comparison
   - Collaboration tools for team editing
   - SEO optimization panel
   - AI content suggestions

6. Batch Operations Panel:
   - Bulk status changes
   - Batch category assignment
   - Price updates
   - Availability scheduling
   - Export/Import content
   - Clone/duplicate features

7. Analytics Dashboard:
   - Platform-wide course performance
   - Engagement heatmap
   - Top performing courses
   - Underperforming content
   - Student satisfaction metrics
   - Retention analysis

8. Mobile Experience:
   - Simplified monitoring view
   - Limited editing capabilities
   - Focus on approvals và status changes
   - Analytics visualization optimized for mobile

Thiết kế cần hỗ trợ quản lý cả single courses và large course libraries với hàng trăm khóa học. Cung cấp content templates và reusable components để tăng tốc course creation. Đảm bảo content versioning để track changes và rollback khi cần thiết.
```

### Trang Quản lý Đề thi (Admin Exams)

```
Thiết kế trang quản lý đề thi cho admin với công cụ toàn diện để tạo, quản lý, phân tích và phát triển các đề thi và bài kiểm tra trên nền tảng.

1. Header Section:
   - Tiêu đề "Quản lý Đề thi & Kiểm tra" với counter tổng số đề
   - "Tạo đề thi mới" button với options (blank, từ template, AI assisted)
   - View options toggle
   - Analytics dashboard button
   - Import/Export controls

2. Filter & Search Panel:
   - Search bar với syntax highlighting và filter options
   - Exam type filter: Practice, Assessment, Certification, Quiz
   - Status filter: Draft, Published, Scheduled, Archived, Active now
   - Subject area selection
   - Grade level filter
   - Difficulty range slider
   - Date range picker (created, scheduled, last used)
   - Duration filter

3. Exam Listing:
   - Card view với:
     - Thumbnail/icon indicator exam type
     - Title và brief description
     - Key info: Duration, Question count, Difficulty, Max score
     - Subject và grade badges
     - Usage count và last used date
     - Status chip with color coding
     - Quick action buttons (edit, preview, results, duplicate, settings)

   - Table view với additional columns:
     - Creator
     - Average score
     - Pass rate
     - Time scheduled
     - Version

4. Exam Detail/Preview:
   - Header với exam metadata
   - Tabs: Overview, Questions, Results, Settings, Analytics

   - Overview Tab:
     - Description
     - Instructions
     - Time limit và settings
     - Passing criteria
     - Distribution by question type/topic
     - Difficulty distribution chart
     - Preview as student button

   - Questions Tab:
     - List of all questions với drag-drop reordering
     - Question type indicators
     - Point values
     - Difficulty indicators
     - Topic/taxonomy tags
     - Add/Remove questions interface
     - Random question set configuration

   - Results Tab:
     - List of all attempts/submissions
     - Filterable by date, score, user
     - Detailed breakdown của individual attempts
     - Batch actions (download, reset, extend time)
     - Manual grading interface for essay questions

   - Settings Tab:
     - Access controls
     - Time limits và extensions
     - Randomization settings
     - Result display options
     - Retry policies
     - Proctoring settings
     - Grading scheme

   - Analytics Tab:
     - Performance distribution graph
     - Item analysis (difficulty, discrimination)
     - Time spent analysis
     - Question-by-question performance
     - Identified weak areas
     - Comparison với historical data

5. Exam Builder / Editor:
   - Split view với exam structure và question preview
   - Section management (add, remove, reorder)
   - Question bank integration với search và filters
   - Drag và drop question selection
   - Point value assignment
   - Random selection từ question pools
   - Time allocation per section
   - Instructions editor
   - Preview as student
   - Accessibility checker
   - Settings panel cho exam parameters

6. Results & Grading:
   - Batch grading tools
   - Grade curve adjustment
   - Export grades to CSV/Excel
   - Individual student performance view
   - Answer distribution visualization
   - Manual override options
   - Comment/feedback tools
   - Batch email notifications

7. Exam Scheduling:
   - Calendar view of scheduled exams
   - Time window settings
   - Access code generation
   - Group/class assignment
   - Notification scheduling
   - Conflict checker
   - Time zone handling

8. Mobile View:
   - Monitoring live exams
   - Quick grade review
   - Status updates
   - Limited editing capabilities

Thiết kế cần support multiple exam formats từ quick quizzes đến standardized assessments. Auto-saving và version control là critical. Cần có comprehensive analytics để improve exam quality over time và identify weak spots trong student knowledge.
```

### Trang Quản lý Thảo luận (Admin Discussions)

```
Thiết kế trang quản lý thảo luận cho admin với các công cụ để giám sát, kiểm duyệt và quản lý toàn bộ nội dung thảo luận trên nền tảng.

1. Header Section:
   - Tiêu đề "Quản lý Thảo luận" với counter tổng số bài đăng
   - Filter tabs: All, Pending review, Reported, Pinned, Closed
   - Search bar với syntax highlighting và advanced filters
   - View toggle: Recent, Active, Trending
   - Bulk actions dropdown

2. Filters Panel:
   - Date range selector
   - Topic/Category filter
   - Status filter (Open, Answered, Closed, Archived)
   - Author type (Student, Teacher, Admin)
   - Content type (Question, Discussion, Announcement)
   - Flag reason filter (Spam, Inappropriate, Off-topic)
   - Interaction metrics filter (Views, Replies, Votes)

3. Discussion Listing:
   - Table view với:
     - Status indicator
     - Title với preview text
     - Author với user level badge
     - Category/tags
     - Metrics (views, replies, votes)
     - Last activity timestamp
     - Flags/reports count với severity indicator
     - Action buttons (view, moderate, pin, close)

   - Expandable rows showing:
     - Content preview
     - Recent replies
     - Report details if flagged
     - Quick moderation actions

4. Moderation Queue:
   - Prioritized view of items requiring attention
   - Content needing review (new posts, flagged content)
   - Split view: content preview và moderation actions
   - Batch approval/rejection tools
   - Configurable auto-moderation rules display
   - Assignment to specific moderators

5. Discussion Detail View:
   - Full thread display
   - Highlighted reported content
   - User info panel for post author
   - Post history/edits
   - Inline moderation tools:
     - Edit content
     - Remove/hide
     - Add moderator note
     - Move to different category
     - Merge with another thread
   - Reply directly as moderator/admin
   - Lock/unlock thread
   - Pin/unpin controls
   - Convert thread type (e.g., question to discussion)

6. User Activity Panel:
   - Related to current discussion
   - User's recent activity across platform
   - Previous moderation actions on this user
   - Quick stats (join date, post count, warning level)
   - Restrict posting privileges option
   - Contact user tools

7. Content Policy Tools:
   - Policy violation tagging
   - Template responses for common issues
   - Warning level assignment
   - Automated action recommendations
   - Policy reference links
   - Moderation action history

8. Analytics Dashboard:
   - Activity trends over time
   - Moderation action stats
   - Top categories và topics
   - User engagement metrics
   - Response time metrics
   - Unresolved questions aging report
   - Sentiment analysis trends
   - Word cloud of trending topics

9. Category Management:
   - Create/edit discussion categories
   - Set permissions per category
   - Auto-tagging rules
   - Default moderator assignment
   - Template responses per category
   - Auto-routing rules

10. Mobile Experience:
    - Quick approve/reject swipe actions
    - Focused content view
    - Limited but critical moderation tools
    - Push notifications for urgent items

Thiết kế cần tối ưu workflow cho moderators, với priority queue để handle most urgent items first. Cần có clear visual indicators cho content needing attention và automation tools để reduce moderator workload while maintaining quality standards.
```

### Trang Analytics Chi tiết (Admin Detailed Analytics)

```
Thiết kế một trang analytics chi tiết dành cho admin, cung cấp cái nhìn sâu sắc về dữ liệu người dùng, nội dung và hiệu suất của nền tảng với khả năng phân tích đa chiều.

1. Header & Controls:
   - Tiêu đề "Analytics Platform" với timestamp cập nhật mới nhất
   - Date range picker với presets (7D, 30D, 90D, YTD, custom)
   - Comparison toggle (vs previous period, YoY)
   - Segmentation controls (by user group, geography, device)
   - Export & schedule report controls
   - Dashboard save/load functionality

2. Overview Dashboard:
   - KPI cards với trend indicators:
     - DAU/MAU (Daily/Monthly Active Users)
     - Retention rate
     - Conversion rate
     - Average engagement time
     - Revenue metrics (if applicable)
   - Sparkline mini-charts showing historical trends
   - Primary metrics percentage changes vs comparison period
   - Alert indicators for metrics outside expected ranges

3. User Analytics Section:
   - Active users chart (daily/weekly/monthly) với cohort view option
   - New user acquisition funnel
   - User segmentation breakdown:
     - By role (student, teacher, parent)
     - By grade level
     - By subscription tier
     - By activity level
   - Retention matrix showing cohort retention over time
   - User journey mapping visualization
   - Churn analysis với causes
   - Engagement depth metrics

4. Content Performance:
   - Heatmap của content engagement
   - Top courses by various metrics (enrollment, completion, rating)
   - Content type effectiveness comparison
   - Completion rates across different content types
   - Difficulty analysis of questions & assessments
   - Topic popularity trends
   - Search term analysis
   - Content gaps identification

5. Learning Analytics:
   - Grade distribution across tests/courses
   - Skill mastery progression
   - Learning path visualization
   - Time to mastery metrics
   - Struggle points identification
   - Knowledge retention analysis
   - Learning style pattern recognition
   - AI-powered learning effectiveness predictions

6. Engagement Analytics:
   - Session metrics (length, frequency, depth)
   - Feature usage breakdown
   - User flow diagrams with drop-off points
   - Interaction heatmaps
   - Notification effectiveness
   - Social features engagement
   - Peak usage time patterns
   - Device & platform breakdown

7. Advanced Visualization Tools:
   - Custom query builder
   - Drag-and-drop metric composition
   - Multiple visualization options:
     - Line/area charts
     - Bar/column charts
     - Pie/donut charts
     - Scatter plots
     - Sankey diagrams
     - Geographical maps
     - Tree maps
   - Correlation finder
   - Anomaly detection highlighting
   - Predictive trend lines

8. Actionable Insights Panel:
   - AI-generated observations
   - Anomaly explanations
   - Opportunity recommendations
   - Risk alerts
   - A/B test suggestions
   - Benchmarking against industry standards
   - Next best action recommendations

9. Report Builder:
   - Template selection
   - Drag-and-drop report composition
   - Scheduling options
   - Distribution list management
   - Export formats (PDF, Excel, CSV, API)
   - Annotation & commentary tools
   - White-labeling options

10. Mobile Experience:
    - KPI dashboard optimized for mobile
    - Critical alerts view
    - Limited but essential chart viewing
    - Saved reports access
    - Quick insights summary

Thiết kế cần balance giữa depth of information và clarity of presentation. Mọi chart/visualization cần có explainable components để admin understand the "why" behind the numbers. Data needs to be actionable với clear paths từ insight to action.
```

### Trang Chi tiết Đề thi (Exam Detail)

```
Thiết kế trang chi tiết đề thi với giao diện trực quan, đầy đủ thông tin và các tính năng cần thiết cho người dùng tham gia làm bài.

1. Header Section:
   - Tiêu đề đề thi với icon phù hợp với loại đề
   - Thông tin tóm tắt: số câu hỏi, thời gian làm bài, điểm tối đa
   - Badges hiển thị môn học, khối lớp, độ khó
   - Status indicator (Available, Time-limited, Completed)
   - Breadcrumb navigation để quay lại danh sách đề thi

2. Exam Info Card:
   - Thumbnail/cover image với visual cue về độ khó
   - Mô tả ngắn về nội dung và mục tiêu của đề thi
   - Structured metadata:
     - Thời gian: Tổng thời gian làm bài
     - Deadline (nếu có)
     - Số lần làm bài cho phép
     - Điểm để đạt (passing score)
     - Tác giả/người tạo đề
   - Thông tin thêm: số lượt làm, điểm trung bình, tỷ lệ pass
   - Phân bố câu hỏi theo chủ đề và độ khó (dạng mini-chart)

3. Action Buttons:
   - "Bắt đầu làm bài" button (primary action)
   - "Xem lại đề" nếu đã hoàn thành
   - "Tiếp tục" nếu đang làm dở
   - Share/Save options
   - Chế độ luyện tập (nếu cho phép)

4. Exam Rules & Instructions:
   - Collapsible section với icons minh họa
   - Điều kiện làm bài và hướng dẫn
   - Quy tắc tính điểm
   - Thông tin về chế độ hiển thị kết quả
   - Các lưu ý đặc biệt từ người tạo đề

5. Topics & Syllabus Coverage:
   - Visual representation của topics được đánh giá
   - Skill breakdown với progress bars nếu là retake
   - Syllabus mapping nếu đề thi liên quan đến chương trình chính thức
   - Recommended preparation materials

6. Your Progress Section:
   - Chỉ hiển thị nếu đã từng làm đề này
   - Progress timeline với các lần làm trước
   - Score history với trend line
   - Best score highlight
   - Completion rate
   - Weak areas identification
   - Suggested focus areas for improvement

7. Related/Recommended Exams:
   - Card slider/carousel với related exams
   - "Prepare for this" section với suggested practice tests
   - "Next steps" recommendations based on difficulty progression

8. Reviews & Feedback:
   - Rating distribution
   - User reviews/comments
   - Feedback summary từ previous test-takers
   - Upvote/downvote functionality cho reviews

9. Proctoring Info (nếu có):
   - Camera/microphone requirements
   - Identity verification steps
   - Prohibited behaviors
   - Technical requirements checklist

10. Mobile Experience:
    - Simplified metadata display
    - Prominent start/continue buttons
    - Collapsible sections để focus on key info
    - Offline availability notice

Đảm bảo rằng trang hiển thị rõ ràng trạng thái của đề thi đối với người dùng (chưa làm, đang làm dở, hoàn thành) với visual cues phù hợp. Thông tin cần được tổ chức theo thứ tự ưu tiên, với most actionable elements ở trên. Timing information cần được hiển thị prominently và clearly, especially for time-limited exams.
```

### Trang Làm Bài Thi (Exam Taking)

```
Thiết kế trang làm bài thi với trải nghiệm tập trung, dễ sử dụng, giảm thiểu stress và tối ưu hóa cho performance trong các kỳ thi.

1. Exam Header Bar (Fixed):
   - Logo nhỏ ở góc (collapsible on scroll)
   - Tên đề thi với indicator số câu
   - Timer hiển thị thời gian còn lại với visual cues:
     - Regular: màu bình thường
     - Warning: chuyển vàng khi còn 25% thời gian
     - Urgent: chuyển đỏ và pulse animation khi còn 10% thời gian
   - Progress indicator (câu đã làm/tổng số)
   - Nút "Nộp bài" (disabled cho đến khi tất cả câu hỏi được xem)
   - Fullscreen toggle

2. Navigation Sidebar (Collapsible):
   - Question map grid hiển thị trạng thái từng câu:
     - Not visited: neutral
     - Viewed: light highlight
     - Answered: strong highlight
     - Flagged for review: special indicator
     - Current question: outline/border highlight
   - Filter options: All, Answered, Unanswered, Flagged
   - Section jumps nếu đề thi có nhiều phần
   - Collapse/expand toggle
   - Calculator/Formula sheet access (nếu cho phép)

3. Question Display Area:
   - Clean, distraction-free layout
   - Question number và point value
   - Question content với math rendering (LaTeX)
   - Image/media support với lightbox for enlargement
   - Code blocks với syntax highlighting nếu có
   - Answer options được format rõ ràng:
     - Radio buttons cho single choice
     - Checkboxes cho multiple choice
     - Text areas cho free response
     - Specialized inputs (matching, sequence, highlight text)
   - "Flag for review" toggle
   - Previous/Next navigation buttons

4. Answer Sheet Panel (Optional Toggle):
   - Compact view của tất cả câu hỏi và đáp án đã chọn
   - Quick navigation khi click vào câu hỏi
   - Exportable/printable

5. Toolbar (Minimal):
   - Text size adjustment
   - High contrast mode toggle
   - Reference materials access (nếu cho phép)
   - Scratch pad for notes
   - Support/help button (non-disruptive)

6. Save & Navigation Controls:
   - Auto-save indicators với subtle animations
   - Next/Previous question buttons
   - Save & Next combined button
   - Keyboard shortcuts (displayed in tooltip)
   - Confirmation khi chuyển câu hỏi chưa trả lời

7. Submission Process:
   - Initial confirmation dialog với summary:
     - Questions answered/unanswered
     - Flagged questions reminder
     - Time remaining notice
   - Final confirmation với animation
   - Processing state với progress indication
   - Success confirmation với score preview (if immediate)

8. Special Features:
   - Distraction blocking mode
   - Screen reader compatibility
   - Math editor for formula input
   - Drawing tool for diagrams/sketches
   - Offline mode với sync indicators
   - Proctoring status indicators (nếu có)

9. Error & Recovery Handling:
   - Connection status indicators
   - Autosave failure alerts
   - Emergency save options
   - Session recovery flow
   - Time extension request (if policy allows)

10. Mobile Experience:
    - Simplified navigation
    - Touch-optimized answer selection
    - Swipe gestures for navigation
    - Floating navigation button
    - Reduced data mode for slow connections

Thiết kế cần đảm bảo người dùng dễ dàng focus vào việc làm bài thi, với minimal distractions. System performance phải được ưu tiên để tránh lag hoặc delays khi navigating giữa các câu hỏi. Accessibility considerations cần được implement đặc biệt cho tool này, với accommodations cho người dùng có disabilities.
```

### Trang Kết quả Bài thi (Exam Results)

```
Thiết kế trang kết quả bài thi cung cấp phân tích toàn diện về performance của người dùng, với insights sâu sắc và actionable feedback để cải thiện.

1. Header Section:
   - Congratulations message với animation thay đổi theo performance
   - Tên đề thi và thông tin cơ bản (môn học, chủ đề)
   - Date and time của lần thi
   - Share results button (tùy theo settings)
   - Download certificate option (nếu đạt yêu cầu)
   - Return to dashboard/exams list button

2. Score Overview Card:
   - Large, prominent score display (numeric và percentage)
   - Visual score gauge/dial
   - Pass/fail status với appropriate styling
   - Comparison với:
     - Previous attempts
     - Class/cohort average
     - Global average
   - Performance trend nếu đã làm nhiều lần
   - Time taken indicator

3. Performance Breakdown:
   - Score distribution by section/topics
   - Stacked bar chart cho correct, incorrect, unanswered
   - Skill mastery heat map
   - Strengths và weaknesses identification
   - Visual topic proficiency indicators
   - Time spent per question/section vs. average

4. Detailed Question Analysis:
   - Scrollable/expandable list của tất cả câu hỏi
   - Each question hiển thị:
     - Question content (có thể collapsed)
     - Your answer (highlighted)
     - Correct answer (nếu settings cho phép)
     - Explanation của correct answer
     - Time spent vs. average
     - Difficulty rating
     - Percentage of users answering correctly
   - Filters cho viewing: All, Correct, Incorrect, Flagged

5. Learning Recommendations:
   - Personalized study plan based on results
   - Resource recommendations cho weak areas
   - Similar questions để practice
   - Related courses/content suggestions
   - Skill improvement path visualization
   - AI-generated study tips

6. Comparative Analysis:
   - Performance percentile
   - Radar chart comparing different skill areas với peers
   - Historical performance comparison
   - Improvement areas highlight
   - Statistical significance của changes

7. Time Analysis:
   - Time management visualization
   - Questions taking longest time
   - Speed vs. accuracy correlation
   - Optimal time allocation suggestions

8. Achievement & Gamification:
   - Badges earned
   - Progress towards mastery
   - Streak indicators
   - Level up animations (nếu applicable)
   - Social sharing options với customized cards

9. Next Steps Panel:
   - Retake exam button với cooldown timer nếu có
   - Related exams suggestions
   - Continue learning path
   - Schedule tutoring/help based on weak areas
   - Add weak topics to study list

10. Mobile Experience:
    - Condensed score overview
    - Swipeable performance cards
    - Progressive disclosure của detailed analysis
    - Touch-friendly interactive charts
    - Offline viewing option

Đảm bảo rằng feedback là actionable và constructive, không tập trung quá nhiều vào negative aspects. Sử dụng encouraging tone kể cả khi performance chưa tốt. Visualizations cần dễ hiểu và không overwhelm. Cung cấp clear paths to improvement và tạo motivation để continue learning.
```

### Trang Thư viện (Library)

```
Thiết kế một trang thư viện đa phương tiện trực quan, phân loại rõ ràng và dễ tìm kiếm cho tất cả các học liệu và tài nguyên trên nền tảng.

1. Header Section:
   - Tiêu đề "Thư viện Học liệu" với kèm theo count tổng tài liệu
   - Search bar với type-ahead suggestions và recent searches
   - View toggle: Grid/List/Collections
   - Filter chips cho quick access: Recently added, Most popular, Your bookmarks

2. Advanced Search & Filters:
   - Type filters với icons: All, Books, Documents, Videos, Practice sets, Flashcards
   - Subject categorization với hierarchical dropdown
   - Grade level selection
   - Difficulty slider
   - Duration/length filters
   - Format filters (PDF, EPUB, MP4, etc.)
   - Tag-based filtering
   - Reset filters button

3. Library Grid View:
   - Card display với:
     - Thumbnail với type indicator icon
     - Title và brief description
     - Subject/grade badges
     - Rating stars và count
     - Duration/length indicator
     - "New" badge nếu added recently
     - Download/bookmark status indicator
   - Hover states hiển thị additional actions:
     - Quick preview
     - Add to collection
     - Download
     - Share
   - Infinite scroll với skeleton loading

4. Collections/Shelves Section:
   - Horizontal scrolling shelves organized by:
     - Topics (Math, Science, Literature...)
     - Purpose (Exam prep, Concept review, Extension...)
     - Curated collections (Teacher recommendations, Weekly picks...)
   - "Create collection" card để make custom collections
   - Collection management tools

5. Resource Detail Modal/Page:
   - Header với thumbnail và metadata
   - Rating và reviews summary
   - Download/read/watch primary CTA
   - Resources tabs:
     - Overview (description, learning objectives)
     - Preview (sample content)
     - Reviews & Ratings
     - Related resources
   - Technical information (file size, format, requirements)
   - Usage statistics
   - Creator information
   - Last updated date

6. Reading/Viewing Experience:
   - Integrated document viewer
   - Video player với playback controls và transcripts
   - Annotation tools
   - Bookmarking functionality
   - Night mode for reading
   - Text size adjustment
   - Table of contents navigation
   - Search within document

7. User Library Section:
   - "My Resources" area showing:
     - Downloaded items
     - Bookmarked resources
     - Recently viewed
     - In progress items với progress indicators
   - Custom collections created by user
   - Reading history và stats
   - Space usage information if applicable

8. Contribution Section (if applicable):
   - Upload resource button
   - Contribution guidelines
   - Submitted resources status
   - Community contributions highlight

9. Recommendations Panel:
   - Personalized recommendations based on:
     - Current courses
     - Past viewing/reading
     - Learning goals
     - Peer activity
   - "Because you read..." suggestions
   - "Complete your learning" with complementary resources

10. Mobile Experience:
    - Streamlined browsing experience
    - Download management for offline access
    - Reading mode optimized for smaller screens
    - Reduced data option for browsing

Đảm bảo performance tối ưu với lazy loading và progressive enhancement. Resources cần được categorized consistently với multiple ways to discover relevant content. Search functionality cần robust với support for partial matches, synonyms, và related concepts.
```

### Trang Bản đồ ID (Map ID Decoder)

```
Thiết kế một công cụ bản đồ ID chuyên dụng cho việc giải mã và ánh xạ các định danh trong hệ thống, cung cấp giao diện trực quan và hiệu quả cho cả người dùng kỹ thuật và không kỹ thuật.

1. Header Section:
   - Tiêu đề "Map ID Decoder" với developer/admin badge
   - Description ngắn về công cụ và mục đích sử dụng
   - Documentation link
   - Mode toggle: Basic/Advanced
   - System status indicator

2. Input Section:
   - Large, prominent textarea/input field để paste IDs
   - Format selection: Single ID, Multiple IDs (line separated), JSON, CSV
   - Entity type selector với icons:
     - User
     - Course
     - Question
     - Exam
     - Document
     - All (auto-detect)
   - Source format indication (MongoDB ID, UUID, Custom format)
   - "Decode" button với subtle loading animation
   - Sample inputs for demonstration

3. Bulk Operations:
   - Upload file option (CSV, JSON, TXT)
   - Batch size control
   - Processing priority settings
   - Export format selection
   - Schedule processing for large batches

4. Results Display:
   - Clean, tabular format với alternating row colors
   - Columns:
     - Original ID
     - Decoded entity type
     - Human-readable name/title
     - Creation date
     - Last modified
     - Status
     - Quick actions (view, copy, open in admin)
   - Expandable rows để hiển thị more details
   - Filtering và sorting controls
   - Pagination với size options

5. Entity Visualization:
   - Relationship graph visualization cho selected entities
   - Hierarchical view option
   - Interactive node exploration
   - Zoom và pan controls
   - Export graph as image

6. Advanced Features (Advanced Mode):
   - ID format validation và debugging
   - Cross-reference checking
   - Orphaned ID detection
   - Bulk transformation tools
   - Custom mapping rules configuration
   - Historical mapping logs
   - Performance metrics

7. Developer Tools:
   - API access information
   - Code snippets for common languages
   - Webhook configuration
   - Rate limit information
   - Authentication key management
   - Debug console

8. History & Saved Queries:
   - Recent operations list
   - Saved queries với names và descriptions
   - Schedule recurring decoding jobs
   - Export history logs
   - Clear history option

9. Help & Documentation:
   - Inline help tooltips
   - Pattern examples for different ID types
   - Common use cases
   - Troubleshooting guide
   - Video tutorials
   - Contact support option

10. Mobile Experience:
    - Simplified input interface
    - Readable results formatting
    - Limited but functional visual mapping
    - Share results via messaging apps

Đảm bảo tool có robust error handling với clear messages khi IDs không valid hoặc không tìm thấy. Security considerations cần được implement để prevent abuse của tool for data mining. Performance optimization for handling large batches of IDs cần được ưu tiên.
```

### Trang Hồ sơ Người dùng (User Profile)

```
Thiết kế trang hồ sơ người dùng sạch sẽ, thông tin và tùy chỉnh được, hiển thị thành tích học tập, tiến trình và các tùy chọn cá nhân hóa.

1. Header Section:
   - Cover photo với upload/customize option
   - Profile picture với edit overlay on hover
   - Display name và username
   - Role badge (Student, Teacher, etc.)
   - Bio/status line với edit option
   - Quick stats: Joined date, last active, streak count
   - Connect/Message buttons (for viewing other profiles)

2. Profile Tabs:
   - Overview (default)
   - Learning Progress
   - Achievements
   - Activities
   - Saved Items
   - Settings

3. Overview Tab:
   - Personal information card:
     - Education level/grade
     - Areas of interest/subjects
     - Learning goals
     - Contact info (visibility controlled)
     - Social links (optional)
   - Current courses card với progress rings
   - Recent achievements với badges
   - Activity feed showing recent actions
   - Statistics summary (courses completed, questions answered, etc.)
   - Upcoming deadlines và scheduled exams

4. Learning Progress Tab:
   - Subject mastery grid showing proficiency levels
   - Skills radar chart
   - Progress trends graph over time
   - Course completion timeline
   - Study time distribution by subject/topic
   - Strength & weakness analysis
   - Learning style insights
   - Custom learning goals tracker

5. Achievements Tab:
   - Badge gallery với unlock criteria
   - Certificates earned với download option
   - Leaderboard positions
   - Streak calendar
   - Milestones timeline
   - Points/XP history graph
   - Level progression system
   - Special recognition sections

6. Activities Tab:
   - Comprehensive activity history
   - Filter by activity type:
     - Course enrollments/completions
     - Discussions và comments
     - Quiz/test attempts
     - Content creation/contributions
   - Calendar view option
   - Activity heatmap
   - Time spent analytics

7. Saved Items Tab:
   - Bookmarked courses, articles, questions
   - Saved notes và highlights
   - Custom collections
   - Watch later videos
   - Reading list
   - Download manager for offline content
   - Organization tools

8. Settings Tab:
   - Account settings:
     - Email/password change
     - Notification preferences
     - Privacy controls
     - Linked accounts
   - Appearance settings:
     - Theme selection
     - Dashboard customization
     - Language preference
   - Learning preferences:
     - Difficulty settings
     - Study reminder configuration
     - Learning style customization
   - Data & Privacy:
     - Download your data
     - Activity history controls
     - Account deletion options

9. Customization Options:
   - Dashboard widget arrangement
   - Progress display preferences
   - Focus mode settings
   - Goal tracking configuration
   - Profile visibility controls
   - Custom tags và interests

10. Mobile Experience:
    - Streamlined profile view
    - Quick access to key metrics
    - Touch-friendly UI elements
    - Compact achievement display
    - Simplified settings

Đảm bảo profile balance giữa personalization và functionality. Cần có privacy controls rõ ràng để users can decide what information is visible to whom. Gamification elements should be meaningful và tie back to actual learning progress rather than just engagement metrics.
```

### Trang Nhập Câu Hỏi (InputQues)

```
Thiết kế trang nhập câu hỏi chuyên dụng với giao diện trực quan cho việc nhập, trích xuất và quản lý câu hỏi từ nhiều nguồn khác nhau như LaTeX, Word hoặc nhập trực tiếp.

1. Header Section:
   - Thanh điều hướng với nút quay lại và tên trang ("Thêm câu hỏi" hoặc "Chỉnh sửa câu hỏi")
   - Nút lưu câu hỏi và xuất JSON ở góc phải
   - Thông báo lỗi/thành công hiển thị phía dưới header khi cần

2. Phương thức Nhập (Input Methods):
   - Thanh chuyển đổi giữa các phương thức nhập:
     - "Nhập từ LaTeX" - Cho phép dán mã LaTeX và tự động trích xuất
     - "Nhập từ Doc" - Cho phép tải lên tài liệu Word/PDF
   - Giao diện thay đổi tùy theo phương thức được chọn

3. Nhập LaTeX Section:
   - Editor lớn để nhập văn bản LaTeX với font monospace
   - Nút "Xem mẫu" để hiển thị các mẫu LaTeX phổ biến
   - Nút "Phân tích LaTeX" để xử lý và trích xuất thông tin
   - Panel hiển thị kết quả trích xuất với các thông tin được tổ chức

4. Tải tài liệu Section (Doc Upload):
   - Vùng kéo thả để tải tài liệu lên (docx, pdf)
   - Giới hạn file size và định dạng được hỗ trợ
   - Thông tin hướng dẫn về định dạng file chuẩn
   - Trạng thái hiện tại của tính năng (đang phát triển)

5. Tabs Thông tin Câu hỏi:
   - Tab Nội dung:
     - Form nhập thông tin cơ bản (nội dung câu hỏi, giải thích, nguồn)
     - Phần định danh câu hỏi (mã định danh, môn học, lớp)
     - Phần câu trả lời (tùy chọn, đáp án đúng)

   - Tab Metadata:
     - Thông tin về người tạo, trạng thái
     - Lịch sử sử dụng, thống kê
     - Phản hồi và đánh giá

   - Tab Danh sách:
     - Hiển thị danh sách câu hỏi đã có trong cơ sở dữ liệu
     - Cho phép tìm kiếm và chọn để chỉnh sửa

6. Phần Form Chính:
   - QuestionBasicInfo: Nhập nội dung câu hỏi, hình thức (trắc nghiệm, đúng/sai), giải thích, nguồn, tags
   - QuestionAnswerInfo: Quản lý các tùy chọn trả lời, đánh dấu đáp án đúng
   - QuestionIDInfo: Thiết lập định danh câu hỏi, chương trình, độ khó
   - QuestionMetadataInfo: Thông tin phụ như người tạo, trạng thái, lịch sử

7. Preview và Validation:
   - Hiển thị xem trước câu hỏi như cách học sinh sẽ nhìn thấy
   - Kiểm tra xác thực cho tất cả các trường
   - Hiển thị cảnh báo khi thiếu thông tin quan trọng

8. Hỗ trợ LaTeX:
   - Các mẫu LaTeX có sẵn cho các dạng câu hỏi phổ biến
   - Trích xuất tự động các thành phần từ mã LaTeX
   - Phân tích nội dung, đáp án, và giải thích
   - Xử lý các công thức toán học

9. Trạng thái Lưu:
   - Hiển thị trạng thái (đang lưu, thành công, lỗi)
   - Thông báo chi tiết và rõ ràng
   - Tự động lưu định kỳ để tránh mất dữ liệu

10. Tối ưu hóa Mobile:
    - Layout dạng stack cho màn hình nhỏ
    - Các input field lớn hơn để dễ sử dụng trên thiết bị cảm ứng
    - Tab navigation tối giản và rõ ràng
    - Tối ưu cho việc nhập văn bản trên mobile

Trang này cần ưu tiên UX cho quá trình nhập câu hỏi phức tạp, với focus vào việc giảm thiểu thời gian và công sức cần thiết để tạo câu hỏi chất lượng cao. Đặc biệt quan trọng là khả năng trích xuất tự động từ mã LaTeX hoặc tài liệu để tiết kiệm thời gian nhập liệu thủ công.
```

### Trang Tạo và Chỉnh sửa Câu hỏi (Question Creation/Editing)

```
Thiết kế một trang tạo và chỉnh sửa câu hỏi trực quan, linh hoạt và mạnh mẽ, hỗ trợ nhiều định dạng câu hỏi và cung cấp công cụ để tạo câu hỏi chất lượng cao.

1. Header Section:
   - Tiêu đề "Tạo Câu hỏi Mới" hoặc "Chỉnh sửa Câu hỏi"
   - Question ID và version info (khi editing)
   - Autosave indicator với last saved timestamp
   - Breadcrumb navigation
   - Action buttons: Save, Preview, Cancel, More options (duplicate, archive)

2. Question Type Selector:
   - Visual card selection for question types:
     - Multiple choice (single correct)
     - Multiple choice (multiple correct)
     - True/False
     - Matching
     - Drag and drop
     - Fill in the blank
     - Short answer/essay
     - Numerical input
     - Hotspot/image selection
   - Preview example for each type
   - Usage guidance tooltips
   - Frequency indicator (most used types)

3. Question Content Editor:
   - Rich text editor with toolbar:
     - Text formatting
     - Math equation editor (LaTeX)
     - Code snippets với syntax highlighting
     - Tables
     - Images/media insertion
     - Special characters
   - Side-by-side preview
   - Formatting suggestions và accessibility tips
   - Word count
   - Readability score
   - Mobile preview toggle

4. Answer Options Section:
   - Dynamic controls based on question type
   - For multiple choice:
     - Add/remove options
     - Mark correct answer(s)
     - Randomize order toggle
     - Option for "None of the above"/"All of the above"
   - For matching:
     - Two-column editor với connection visualization
   - For numerical:
     - Acceptable range/precision settings
     - Unit specification
   - Drag-and-drop reordering
   - Bulk edit mode for multiple options

5. Explanation & Feedback Panel:
   - Correct answer explanation editor
   - Option-specific feedback fields
   - General incorrect answer guidance
   - Hints system (progressive hints)
   - Additional resources/reference links
   - Follow-up question suggestions

6. Metadata & Classification:
   - Subject/topic hierarchical selector
   - Subtopic tags với autocomplete
   - Grade level indicator
   - Difficulty slider (1-5)
   - Bloom's taxonomy classification
   - Cognitive skill tagging
   - Estimated time to answer
   - Keywords for searchability
   - Related standards/curriculum mapping

7. Media Manager:
   - Upload area with drag-and-drop
   - Image editing/cropping tools
   - Image alt text for accessibility
   - Video embedding options
   - Audio recorder/uploader
   - Media library access
   - Mobile-friendly media guidelines

8. Question Analysis & Quality:
   - Quality score with breakdown
   - Readability assessment
   - Clarity check
   - Bias detection
   - Difficulty estimation
   - Similar questions alert
   - AI suggestions for improvement
   - Best practices compliance checklist

9. Advanced Settings:
   - Scoring rules (partial credit, penalties)
   - Time limit for this specific question
   - Randomization options
   - Display conditions
   - Calculator/reference material allowance
   - Response validation rules
   - Accessibility settings

10. Mobile Experience:
    - Simplified editor controls
    - Touch-friendly option management
    - Step-by-step creation wizard
    - Limited but essential metadata fields
    - Preview mode optimization

Đảm bảo rằng interface intuitive ngay cả với complex question types. Cung cấp templates và examples để guide creators. Performance optimization cần focus vào responsive editor và media handling để ensure smooth experience kể cả với complex questions involving multiple media elements.
```

### Thanh điều hướng (Navbar)

```
Thiết kế một thanh điều hướng hiện đại, đáp ứng và trực quan cho nền tảng học tập NyNus, cung cấp truy cập nhanh vào các chức năng chính và tăng cường trải nghiệm người dùng.

1. Desktop Layout:
   - Container với backdrop blur effect, half-transparent background
   - Logo NyNus ở bên trái với animation tinh tế khi hover
   - Primary navigation links với spacing đều:
     - Trang chủ
     - Khóa học
     - Đề thi & Luyện tập
     - Thư viện
     - Thảo luận
   - Dropdown menus cho các mục phức tạp
   - Search icon mở expanding search bar
   - Right section với:
     - Notifications bell với counter badge
     - Messages icon với unread indicator
     - User avatar với dropdown (profile, settings, logout)
     - Theme toggle (light/dark)
   - Subtle gradient border bottom
   - Hover states với indicator animations

2. Mobile Layout:
   - Simplified header với logo và hamburger menu
   - Collapsible panel sliding từ edge
   - Full-height navigation panel
   - Touch-friendly tap targets (min 44x44px)
   - Nested navigation với back button
   - Bottom tab bar cho critical actions
   - Swipe gestures support

3. Dropdown Menus:
   - Khóa học dropdown:
     - Danh mục theo môn học
     - Khóa học đã đăng ký
     - Khóa học đề xuất
     - Khám phá tất cả
   - Đề thi dropdown:
     - Đề thi mới nhất
     - Đề thi theo môn
     - Kỳ thi sắp tới
     - Lịch sử làm bài
   - User dropdown:
     - User info summary
     - Profile link
     - Learning progress
     - Account settings
     - Help center
     - Logout

4. Notification Center:
   - Dropdown panel với tabs: All, Unread, Important
   - Categorized notifications với icons
   - Time indicators (2m ago, 5h ago)
   - Action buttons directly in notifications
   - Mark all as read button
   - Settings shortcut
   - Notification preview với truncation

5. Search Experience:
   - Expandable search bar với subtle animation
   - Type-ahead suggestions updating live
   - Category filters: All, Courses, Exams, Discussions
   - Recent searches saved
   - Voice search option
   - Search shortcuts (press / to focus)
   - Search loading states

6. States & Behaviors:
   - Scroll behavior: subtle shrink và opacity change
   - Active page indication
   - Sticky positioning
   - Transition animations between states
   - Keyboard navigable (tab navigation)
   - Screen reader friendly ARIA labels
   - Focus states for accessibility

7. Authentication States:
   - Logged out: Login/Register buttons
   - Logged in: User-specific menus và notifications
   - Limited access: Indicator for restricted features

8. Contextual Adaptation:
   - Course-specific navigation khi trong course
   - Exam-specific controls khi trong exam environment
   - Admin-specific items khi logged in as admin
   - Breadcrumbs integration for deep pages

9. Special Features:
   - Progress indicator for current course
   - Streak counter display
   - Quick actions menu (+ button)
   - Language selector if multilingual
   - System status indicator

10. Performance Considerations:
    - Lazy-loaded dropdown content
    - Optimized for minimal repaints
    - Accessible via keyboard shortcuts
    - Reduced motion option

Đảm bảo navbar responsive ở mọi breakpoint với graceful collapse của items trên smaller screens. Navigation phải intuitive với clear visual hierarchy. Accessibility cần được ưu tiên với proper contrast, focus states, và ARIA attributes.
```

### Footer

```
Thiết kế một footer toàn diện cho nền tảng NyNus, cung cấp thông tin liên hệ, điều hướng phụ, và tăng cường độ tin cậy của nền tảng.

1. Layout Structure:
   - Multi-column grid layout trên desktop
   - Stacked sections trên mobile
   - Background gradient subtle với light texture
   - Top border divider với accent color
   - Padding đủ để tạo visual separation
   - Max-width container để maintain readability

2. Company & Brand Section:
   - Logo NyNus với tagline
   - Mô tả ngắn về nhiệm vụ/tầm nhìn
   - Social media links với hover effects
   - Copyright notice với current year
   - Company registration/legal info
   - Trust badges/certifications nếu có

3. Navigation Columns:
   - Quick Links:
     - Trang chủ
     - Về chúng tôi
     - Đội ngũ
     - Blog/News
     - Tuyển dụng
     - Liên hệ

   - Sản phẩm & Dịch vụ:
     - Khóa học
     - Đề thi & Luyện tập
     - Thư viện
     - Premium Plans
     - Dành cho trường học
     - Dành cho giáo viên

   - Hỗ trợ:
     - Help Center
     - FAQs
     - Hướng dẫn sử dụng
     - Báo lỗi
     - Status page
     - Community

4. Newsletter Signup:
   - Heading và short description
   - Email input field với validation
   - Subscribe button với hover effect
   - Privacy reassurance text
   - Option selectors cho content preferences
   - Success/error message states

5. Contact Information:
   - Email contact với icon
   - Phone number nếu available
   - Physical address nếu applicable
   - Support hours
   - Live chat initiation button
   - Contact form link

6. Legal & Compliance:
   - Privacy Policy link
   - Terms of Service link
   - Cookie Policy
   - GDPR/Compliance information
   - Data processing details
   - Accessibility statement

7. App Downloads:
   - Mobile app badges (App Store, Google Play)
   - QR code for direct download
   - Desktop app links nếu có
   - Brief app features highlight
   - Install count or rating

8. Language & Accessibility:
   - Language selector
   - Accessibility controls/links
   - Text size adjustment
   - High contrast mode toggle
   - Screen reader optimization note

9. Community & Recognition:
   - User statistics (students helped, courses offered)
   - Awards & recognition
   - Press mentions
   - Testimonial snippet
   - Partner logos in grayscale

10. Mobile Optimizations:
    - Collapsible sections với accordion behavior
    - Touch-friendly tap targets
    - Simplified layout với critical elements prioritized
    - Click-to-call phone number
    - Map integration nếu applicable

Đảm bảo footer không overwhelming nhưng vẫn comprehensive. Spacing và typography cần clean với clear hierarchy. Include microinteractions như subtle hover effects và focus states. Footer cần appear consistent across all pages nhưng có thể contextually adapted cho special pages (landing pages, checkout, etc).
```

### Floating CTA (Call-to-Action)

```
Thiết kế một floating call-to-action button dynamic và không gây phiền nhiễu, giúp người dùng dễ dàng tiếp cận các hành động chính trong khi duyệt trang.

1. Base Design:
   - Circular primary button ở góc phải dưới
   - Icon "+" với animation nhẹ khi hover
   - Gradient background phù hợp với brand colors
   - Subtle shadow để tạo depth
   - Size vừa đủ (~56px diameter trên desktop)
   - Minimum distance từ screen edges
   - Background blur effect trong bán kính nhỏ

2. Expansion Behavior:
   - Click/tap để expand thành panel các actions
   - Animation smooth với timing function natural
   - Options fan out hoặc stack vertically
   - Backdrop semi-transparent để focus on options
   - Auto-collapse khi click elsewhere
   - Accessibility keyboard support

3. Action Options (Context-dependent):
   - Trang chủ/General:
     - Bắt đầu học tập
     - Tìm khóa học
     - Liên hệ hỗ trợ
     - Feedback/Suggest feature

   - Trong khóa học:
     - Tiếp tục bài học
     - Đánh dấu hoàn thành
     - Đặt câu hỏi
     - Tải tài liệu

   - Trong đề thi:
     - Quay lại checkpoints
     - Đánh dấu câu hỏi
     - Tính toán nhanh
     - Submit bài làm

4. Contextual Awareness:
   - Adapts based on user's location within app
   - Recognizes user journey stage
   - Custom actions based on user role
   - Personalized suggestions
   - History-aware recommendations

5. Visual States:
   - Default state (collapsed)
   - Hover state với subtle scale/glow
   - Active state khi expanded
   - Loading state khi processing action
   - Success feedback animation
   - Disabled state khi không applicable

6. Customization:
   - User-configurable quick actions
   - Frequency controls
   - Position preference (left/right)
   - Option to minimize to dot temporarily
   - Remember most used actions

7. Notification Features:
   - Subtle badge counter for alerts
   - Pulse animation for time-sensitive notices
   - Color-coding for different notification types
   - Sneak peek của new features

8. Mobile Considerations:
   - Touch area optimization
   - Haptic feedback
   - Gesture support (swipe to access additional options)
   - Position adjustment to avoid keyboard
   - Collapse when scrolling

9. Performance & Accessibility:
   - Lightweight implementation
   - Non-blocking rendering
   - Screen reader compatibility
   - High contrast mode support
   - Reduced motion alternative
   - Keyboard accessible (Tab + Enter/Space)

10. Special Behaviors:
    - Intelligent hiding during video playback
    - Distance awareness từ other UI elements
    - Scroll-aware positioning
    - Timed appearance for new users (onboarding)
    - A/B testing hooks for optimization

Đảm bảo rằng floating CTA enhances UX without being intrusive. Button cần có ích trong context hiện tại của user. Implementation cần lightweight không impact page performance. Animation subtle nhưng effective để draw attention appropriately.
```

### Modal Components

```
Thiết kế hệ thống modal component linh hoạt, dễ tiếp cận và nhất quán để hiển thị các loại nội dung, tương tác và thông báo khác nhau trong nền tảng.

1. Base Modal Architecture:
   - Fixed positioning centered trên viewport
   - Backdrop overlay với blur effect và opacity
   - Container với rounded corners và subtle shadow
   - Standard sizing với responsive breakpoints
   - Ability to resize based on content (với min/max constraints)
   - Z-index management để stay on top
   - Focus trap implementation cho keyboard navigation

2. Modal Header:
   - Title bar với clear typography
   - Close button (X) ở top-right
   - Optional icon/illustration
   - Subtitle or description text
   - Branded accent color bar/element
   - Sticky position khi content scrollable

3. Content Area:
   - Scrollable container với clean scrollbar styling
   - Padding consistent với design system
   - Support cho rich content (images, video, interactive elements)
   - Content sections với subtle dividers
   - Loading states và error states
   - Empty states với helpful guidance

4. Modal Footer:
   - Action buttons aligned theo design standards (primary right)
   - Cancel/dismiss option clearly available
   - Visual hierarchy giữa primary/secondary actions
   - Sticky position khi content lengthy
   - Loading states cho buttons during processing
   - Extra information/help text khi appropriate

5. Animation & Transitions:
   - Entry animation (fade + slight scale or slide)
   - Exit animation (quick fade)
   - Reduced motion setting compliance
   - Smooth backdrop transition
   - Content transition when switching views within modal
   - Loading state transitions

6. Modal Variants:
   - Standard Dialog (confirm/cancel)
   - Form Modal (với field validation)
   - Alert/Notification (information, warning, error, success)
   - Media Viewer (images, videos với lightbox functionality)
   - Walkthrough/Tutorial (với pagination/steps)
   - Side Sheet (slides in từ edge của screen)
   - Full Screen Modal (cho complex workflows)

7. Interaction Behaviors:
   - Close on outside click (configurable)
   - Close on Escape key
   - Prevent background scrolling
   - Return focus to triggering element on close
   - History management (back button handling)
   - Nested modals handling (stacking)

8. Responsive Adaptations:
   - Full screen on mobile devices
   - Adjusted padding và margins
   - Simplified layouts when necessary
   - Touch-friendly close mechanisms
   - Orientation change handling
   - Virtual keyboard accommodation

9. Accessibility Features:
   - ARIA role="dialog" with appropriate attributes
   - Clear focus management
   - Screen reader announcements
   - Keyboard navigation support
   - High contrast mode compatibility
   - Sufficient color contrast for all states

10. Special Features:
    - Draggable option for certain modals
    - Resizable handles when applicable
    - Multi-step workflow support
    - Persistent state between opens
    - Timer-based auto-dismissal (configurable)
    - "Don't show again" functionality

Đảm bảo hệ thống modal consistent throughout the platform với recognizable patterns cho users. Modals cần serve specific purposes và avoid disrupting user flow unnecessarily. Performance optimization (especially for animation) là critical để ensure smooth experience.
```

### Notification System

```
Thiết kế một hệ thống thông báo linh hoạt, thông tin và không gây phiền nhiễu cho nền tảng, cung cấp các cập nhật kịp thời và hành động cho người dùng.

1. Notification Types:
   - Toast notifications (short-lived, non-critical)
   - Alert banners (persistent system messages)
   - In-app notification center (historical log)
   - Push notifications (browser/mobile)
   - Email notifications (digest và critical updates)
   - Real-time indicators (badges, counters)

2. Toast Notification Design:
   - Slides in from top-right corner
   - Contained card với rounded corners
   - Icon indicating type (info, success, warning, error)
   - Color-coding based on severity/type
   - Brief message với action link when applicable
   - Progress bar indicating auto-dismiss timing
   - Close (X) button
   - Stacking behavior for multiple notifications

3. Alert Banner Design:
   - Full-width at top of page
   - Subtle background color based on type
   - Left border accent trong stronger color
   - Icon alignment với text
   - Possible actions: Dismiss, Learn more, Take action
   - Collapsible/expandable for detailed information
   - Sticky option for critical messages

4. Notification Center:
   - Access via bell icon trong navbar
   - Dropdown panel với scrollable content
   - Tabs for filtering: All, Unread, Important
   - Clear visual distinction between read/unread
   - Timestamp for each notification
   - Group by date (Today, Yesterday, This Week)
   - Empty state với helpful message
   - "Mark all as read" button
   - Settings shortcut

5. Visual Hierarchy & Styling:
   - Consistent iconography for notification types
   - Color system mapping to severity levels
   - Typography emphasizing readability
   - Adequate contrast for accessibility
   - Branded styling elements
   - Animation subtlety based on importance
   - Mobile-optimized layouts
   - Dark/light theme variations

6. Interaction Behaviors:
   - Click/tap to expand truncated content
   - Swipe to dismiss on mobile
   - Hover state revealing more actions
   - Automatic dismissal for non-critical toasts
   - Interactive elements within notifications
   - Read receipts for certain notifications
   - Bulk action support

7. Content Structure:
   - Clear, concise message text
   - Sender/source identification
   - Timestamp relative to current time
   - Action buttons với descriptive text
   - Contextual preview (message snippet, image thumbnail)
   - Localization support
   - Variable content templates

8. Intelligent Features:
   - Priority-based queuing system
   - Frequency capping to prevent overwhelming
   - Contextual awareness (don't interrupt critical tasks)
   - Grouping of similar notifications
   - Smart timing based on user activity
   - Personalization based on preferences/behavior
   - Cross-device synchronization

9. Settings & Controls:
   - Granular notification preferences
   - Category-based opt-in/opt-out
   - Quiet hours configuration
   - Channel preferences (in-app, email, push)
   - Frequency controls (instant, digest, none)
   - Importance filtering
   - Sound/vibration options for mobile

10. Technical Considerations:
    - Offline handling with queuing
    - Real-time delivery system
    - Low-latency updates for time-sensitive items
    - Battery/performance impact awareness
    - Graceful degradation for older browsers
    - Analytics tracking for engagement

Đảm bảo hệ thống notification balance giữa being informative và non-intrusive. Prioritize user control over their notification experience. Implement frequency limitations và smart bundling để prevent notification fatigue. Make all notifications actionable whenever possible.
```

## Hướng dẫn Phát triển Giao diện

### Quy tắc Styling

- Sử dụng Tailwind CSS cho tất cả styling
- Tuân thủ các theme variables đã định nghĩa trong tailwind.config.js
- Sử dụng CSS Module cho các component cần styling phức tạp
- Đảm bảo dark mode support cho mọi component

### Cấu trúc Component

- Mỗi component nên có file riêng
- Sử dụng cấu trúc rõ ràng: Props interface → component → export
- Tách logic phức tạp vào custom hooks
- Ưu tiên sử dụng Server Components khi có thể

### Accessibility

- Đảm bảo tất cả input fields có labels phù hợp
- Sử dụng ARIA attributes khi cần thiết
- Đảm bảo keyboard navigation cho tất cả interactive elements
- Kiểm tra contrast ratio cho text và background

### Responsive Design

- Thiết kế mobile-first
- Sử dụng các breakpoint nhất quán: sm, md, lg, xl, 2xl
- Đảm bảo tất cả forms và buttons có kích thước phù hợp trên mobile
- Tối ưu hóa layout cho các kích thước màn hình khác nhau
