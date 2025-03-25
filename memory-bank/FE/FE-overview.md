# Tài liệu Giao diện Frontend NyNus

## Mục lục

- [Tổng quan](#tổng-quan)
- [Công nghệ sử dụng](#công-nghệ-sử-dụng)
- [Cấu trúc thư mục](#cấu-trúc-thư-mục)
- [Danh sách trang và chức năng](#danh-sách-trang-và-chức-năng)
- [Prompt thiết kế chung](#prompt-thiết-kế-chung)
- [Thiết kế từng trang](./pages/README.md)
  - [Trang chủ](./pages/home.md)
  - [Đăng nhập & Đăng ký](./pages/auth.md)
  - [Trang quản lý người dùng](./pages/admin-users.md)
  - [Trang quản lý câu hỏi](./pages/admin-questions.md)
  - [Trang quản lý khóa học](./pages/admin-courses.md)
  - [Trang quản lý đề thi](./pages/admin-exams.md)
  - [Trang quản lý thảo luận](./pages/admin-discussions.md)
  - [Trang phân tích chi tiết](./pages/analytics.md)
  - [Trang chi tiết đề thi](./pages/exam-detail.md)
  - [Trang làm bài thi](./pages/exam-taking.md)
  - [Trang kết quả bài thi](./pages/exam-results.md)
  - [Trang thư viện](./pages/library.md)
  - [Trang bản đồ ID](./pages/map-id.md)
  - [Trang hồ sơ người dùng](./pages/user-profile.md)
  - [Trang tạo/chỉnh sửa câu hỏi](./pages/question-edit.md)
- [Components chung](./components/README.md)
  - [Alert Banner](./components/alert-banner.md)
  - [Avatar](./components/avatar.md)
  - [Button](./components/button.md)
  - [Card](./components/card.md)
  - [Course Card](./components/course-card.md)
  - [Floating CTA](./components/floating-cta.md)
  - [Footer](./components/footer.md)
  - [Form](./components/form.md)
  - [Icon](./components/icon.md)
  - [Input](./components/input.md)
  - [Layout](./components/layout.md)
  - [Math Equation](./components/math-equation.md)
  - [Menu & Dropdown](./components/menu-dropdown.md)
  - [Modal](./components/modal.md)
  - [Navbar](./components/navbar.md)
  - [Notification](./components/notification.md)
  - [Progress Indicator](./components/progress-indicator.md)
  - [Search Bar](./components/search-bar.md)
  - [Skeleton & Loader](./components/skeleton-loader.md)
  - [Table](./components/table.md)
  - [Theme](./components/theme.md)
  - [Toast](./components/toast.md)
  - [Typography](./components/typography.md)
  - [User Dropdown](./components/user-dropdown.md)
- [Hướng dẫn phát triển](./guidelines/README.md)

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

## Components Overview

### Alert Banner Components

- Hiển thị thông báo quan trọng, cảnh báo hoặc thông tin trạng thái
- Variants: Info, Success, Warning, Error, Neutral
- Vị trí: Top, Bottom, Inline, Floating, Sticky
- Behavior: Static, Dismissible, Auto-dismiss, Expandable, Interactive

### Avatar Components

- Hiển thị hình ảnh đại diện người dùng
- Variants: Image, Initials, Icon, Fallback
- Sizes: XS, SM, MD, LG, XL
- Shapes: Circle, Square, Rounded

### Button Components

- Các nút tương tác cơ bản
- Variants: Primary, Secondary, Outline, Ghost, Link
- States: Default, Hover, Active, Disabled, Loading
- Sizes: SM, MD, LG

### Card Components

- Container cho nội dung có liên quan
- Variants: Basic, Interactive, Featured, Horizontal
- States: Default, Hover, Active, Disabled
- Sections: Header, Body, Footer, Media

### Course Card Components

- Hiển thị thông tin khóa học
- Variants: Default, Featured, Compact, List
- Sections: Thumbnail, Title, Description, Progress, Actions
- States: Default, Hover, Enrolled, Completed

### Floating CTA Components

- Nút hành động nổi trên giao diện
- Variants: Single Button, Speed Dial, Action Bar, Chat Bubble
- Positions: Bottom Right, Bottom Left, Bottom Center, Side
- Behaviors: Always Visible, Scroll Triggered, Context Dependent

### Form Components

- Các thành phần nhập liệu và xử lý form
- Elements: Input, Select, Checkbox, Radio, Switch
- Validation: Real-time, Submit-time, Custom rules
- States: Default, Focus, Error, Success, Loading

### Input Components

- Các trường nhập liệu
- Types: Text, Password, Number, Email, Search
- States: Default, Focus, Error, Success, Disabled
- Features: Validation, Masking, Auto-complete

### Progress Indicator Components

- Hiển thị tiến độ hoàn thành
- Variants: Linear, Circular, Step, Detailed, Dashboard
- Features: Animations, Milestones, Labels
- States: Default, Active, Complete, Error

### Toast Components

- Thông báo tạm thời
- Types: Info, Success, Warning, Error, Loading
- Positions: Top Right, Top Left, Bottom Right, Bottom Left
- Features: Auto-dismiss, Actions, Progress

## Prompt Mô tả Tổng quan Thiết kế

```
Thiết kế một nền tảng học tập toán học tương tác với AI có tên là NyNus. Nền tảng này tập trung vào việc cung cấp môi trường học tập cá nhân hóa, giúp học sinh đạt kết quả tốt hơn trong môn toán.

Giao diện cần hiện đại, mang tính tối giản nhưng đẹp mắt với theme màu gradient từ indigo đến purple trên nền tối. Sử dụng các hiệu ứng glass morphism và các animation tinh tế để tạo trải nghiệm người dùng tốt nhất.

Hệ thống bao gồm các module chính: quản lý tài khoản, khóa học, câu hỏi và đề thi, hệ thống thảo luận và nhắn tin, cùng với bảng điều khiển admin.

Ứng dụng cần responsive trên mọi thiết bị, với trải nghiệm mobile được tối ưu hóa. Sử dụng kết hợp giữa Server Components và Client Components để tối ưu hiệu suất, với ưu tiên cho SSR khi có thể.

Cuối cùng, thiết kế cần tập trung vào accessibility, đảm bảo người dùng ở mọi trình độ có thể dễ dàng tiếp cận và sử dụng nền tảng.
```
