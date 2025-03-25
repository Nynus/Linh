# Trang Chủ (Home Page)

## Mô tả

Trang chủ là điểm nhập chính của nền tảng NyNus, giới thiệu các tính năng học tập với AI, khóa học nổi bật và lời kêu gọi hành động. Trang được thiết kế để thu hút người dùng mới, truyền tải giá trị cốt lõi của nền tảng và khuyến khích đăng ký.

## Đường dẫn

URL: `/`

## Chức năng chính

- Giới thiệu tổng quan về nền tảng NyNus
- Hiển thị các tính năng nổi bật của hệ thống
- Showcase khóa học và giáo trình tiêu biểu
- Thu thập đăng ký người dùng mới
- Hiển thị đánh giá và phản hồi từ người dùng

## Prompt chi tiết

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

## Giao diện

### Hero Section

Hero section sẽ chiếm toàn bộ viewport khi lần đầu load trang, với gradient background từ indigo (#4F46E5) đến purple (#7E22CE) và hiệu ứng wave animation tinh tế ở dưới. Heading chính sử dụng font size lớn (3.5rem trên desktop) với animation reveal từ dưới lên, kèm theo subheading màu trắng mô tả ngắn gọn về giá trị của nền tảng.

### Feature Cards

Feature cards được bố trí theo grid layout (2x2 trên desktop, 1 cột trên mobile). Mỗi card có icon ở trên cùng với gradient subtle, tiêu đề font semi-bold và mô tả ngắn gọn bên dưới. Khi hover, card sẽ có hiệu ứng scale nhẹ (1.03) và shadow sâu hơn.

### CTA Sections

Primary CTA có màu gradient từ indigo đến purple với text màu trắng, border-radius 8px và padding vừa phải. Secondary CTA có outline border và background transparent. CTA cuối trang có kích thước lớn hơn và width đầy đủ trên mobile.

## Lưu ý

- Đảm bảo hero image được tối ưu cho web với kích thước phù hợp và định dạng modern (WebP)
- Lazy load tất cả images dưới fold đầu tiên
- Preload critical CSS và fonts
- Implement hệ thống dark/light mode với Tailwind
- Đảm bảo tất cả CTA có tracking event để analytics
- Trang chủ không nên load quá nhiều JavaScript không cần thiết
- Optimize cho Core Web Vitals, đặc biệt là LCP và CLS
