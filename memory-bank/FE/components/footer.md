# Footer Component

## Mô tả

Footer Component là thành phần xuất hiện ở cuối mỗi trang trong nền tảng NyNus, cung cấp thông tin bổ sung, điều hướng phụ, và các liên kết hữu ích khác. Footer đóng vai trò quan trọng trong việc cung cấp thông tin liên hệ, liên kết đến các trang quan trọng như Điều khoản dịch vụ và Chính sách bảo mật, đồng thời tăng cường độ tin cậy của nền tảng. Footer cũng là nơi để hiển thị thông tin về bản quyền, phiên bản hiện tại của hệ thống, và các tính năng hỗ trợ.

## Loại

- Server Component (hầu hết các trường hợp)
- Có thể bao gồm Client Components cho các phần tương tác như đăng ký nhận thông báo
- Xuất hiện global trên tất cả các trang hoặc có thể tùy chỉnh theo route

## Variants

- **Standard**: Footer đầy đủ với nhiều columns thông tin và liên kết
- **Minimal**: Phiên bản đơn giản hóa chỉ hiển thị thông tin cần thiết nhất
- **Content-rich**: Phiên bản mở rộng với nhiều thông tin và chức năng như form đăng ký newsletter
- **Admin**: Phiên bản đơn giản dành cho khu vực quản trị
- **Lesson**: Phiên bản đặc biệt cho trang học tập, hiển thị các điều khiển và thông tin liên quan đến khóa học

## Prompt chi tiết

```
Thiết kế một Footer Component hiện đại, thông tin và có tổ chức cho nền tảng học tập NyNus. Footer này phải cung cấp tất cả thông tin phụ trợ và liên kết hữu ích để hoàn thiện trải nghiệm người dùng, đồng thời củng cố thương hiệu và mức độ chuyên nghiệp của nền tảng.

1. Main Container:
   - Full-width design với padding vertical phù hợp (48-64px)
   - Background color phù hợp tạo sự tương phản với content sections
   - Optional divider ở phía trên để phân tách với nội dung
   - Responsive padding dựa trên viewport size
   - Content area được căn giữa với max-width đồng nhất với site
   - Optional subtle pattern hoặc gradient background
   - Border-top hoặc separator line
   - Semantic HTML structure (footer, nav, headings)

2. Logo & Brand Section:
   - Logo NyNus với kích thước tối ưu
   - Tagline hoặc slogan ngắn gọn
   - Mission statement tóm tắt (1-2 câu)
   - Social media icons với hover effects
   - Consistent placement (thường ở column đầu tiên)
   - Spacing hài hòa giữa elements
   - Optional animation subtle khi hover logo

3. Navigation Columns:
   - 3-5 columns of categorized links trên desktop
   - Mỗi column có heading rõ ràng
   - 4-8 links trong mỗi column với vertical spacing phù hợp
   - Hover states with smooth transitions
   - Grouping logic dựa trên liên quan:
     * Về Chúng Tôi (Giới thiệu, Đội ngũ, Blog, Tuyển dụng)
     * Hỗ Trợ (FAQ, Liên hệ, Help Center, Feedback)
     * Pháp Lý (Điều khoản, Chính sách bảo mật, Cookies)
     * Tính Năng (Khóa học, Đề thi, Diễn đàn, Công cụ)
     * Liên Kết Hữu Ích (Đối tác, Resources, Site map)
   - Consistent text styling và link appearance
   - Clear visual hierarchy với headings
   - Mobile-responsive stacking/accordions for smaller screens

4. Contact Information:
   - Địa chỉ vật lý (nếu có)
   - Email liên hệ với mailto link
   - Số điện thoại hỗ trợ (nếu có)
   - Thời gian làm việc/hỗ trợ
   - Contact form shortcut
   - Styling với icons phù hợp
   - Proper microdata/schema markup cho SEO
   - Clear visual distinction từ navigation links

5. Newsletter/Subscription:
   - Simple form với email input
   - Clear CTA và value proposition
   - Checkbox for consent/GDPR compliance
   - Success/error states
   - Placeholder text informative
   - Form validation với helpful error messages
   - Visual balance với các sections khác
   - Mobile-friendly input sizing

6. Copyright & Legal:
   - Copyright statement với dynamic year
   - Company registration info (nếu cần)
   - Additional legal disclaimers
   - App version/build number (tùy chọn)
   - Language selector (nếu multi-lingual)
   - Subtle styling để không competing với main content
   - Clear spacing từ links chính
   - Attribution credits nếu cần

7. Sub-footer:
   - Horizontal divider separating từ main footer
   - Payment method icons (nếu applicable)
   - Academic/industry certifications or badges
   - Secondary links (sitemap, accessibility statement)
   - Smaller font size to indicate secondary importance
   - Equal spacing giữa elements
   - Container width matching main footer
   - Optional background color variation

8. Responsive Behavior:
   - Stack columns vertically on smaller screens
   - Collapsible sections (accordion style) trên mobile
   - Reordering của important sections trên mobile
   - Maintain readable text sizes across devices
   - Adjust spacing và padding for touch interfaces
   - Center alignment của certain elements trên mobile
   - Full-width inputs trên small screens
   - Optimize tap target sizes

9. Visual Design:
   - Color scheme đồng bộ với brand identity
   - Consistent iconography style
   - Typography scale phù hợp và clear hierarchy
   - Adequate text contrast trên background
   - Subtle hover effects for interactive elements
   - Support cho dark/light modes
   - Neutral styling để không compete với CTAs khác
   - Balanced negative space distribution

10. Additional Features:
    - "Back to top" button/link
    - Region/location selector
    - App download links (với QR codes tùy chọn)
    - Trust badges/certifications
    - Awards hoặc recognitions
    - Last updated timestamp
    - Cookie consent settings shortcut
    - Feedback mechanism shortcut

11. Performance & Accessibility:
    - Semantic HTML structure
    - Proper heading hierarchy
    - ARIA labels cho interactive elements
    - Keyboard navigable links with clear focus states
    - Optimized image assets (especially logos, icons)
    - High color contrast ratios
    - Screen reader considerations
    - Reduced motion options cho animations

Footer phải truyền tải brand personality của NyNus trong khi cung cấp tất cả thông tin cần thiết một cách tổ chức và dễ tiếp cận. Thiết kế phải cân bằng giữa đầy đủ thông tin và clean, không overwhelm. Đồng thời, đảm bảo consistent footer giúp người dùng cảm thấy tin cậy và an tâm về tính chuyên nghiệp của nền tảng.
```

## Props và API

### FooterContainer

| Prop            | Type                                                             | Default                                         | Description                         |
| --------------- | ---------------------------------------------------------------- | ----------------------------------------------- | ----------------------------------- |
| variant         | 'standard' \| 'minimal' \| 'content-rich' \| 'admin' \| 'lesson' | 'standard'                                      | Kiểu footer hiển thị                |
| showSocials     | boolean                                                          | true                                            | Hiển thị social media icons         |
| showNewsletter  | boolean                                                          | true                                            | Hiển thị form đăng ký newsletter    |
| showContactInfo | boolean                                                          | true                                            | Hiển thị thông tin liên hệ          |
| maxWidth        | string                                                           | 'max-w-7xl'                                     | Chiều rộng tối đa của nội dung      |
| className       | string                                                           | ''                                              | Custom classes cho footer container |
| logoVariant     | 'standard' \| 'monochrome' \| 'compact'                          | 'standard'                                      | Biến thể logo sử dụng trong footer  |
| showBackToTop   | boolean                                                          | true                                            | Hiển thị nút "back to top"          |
| copyrightText   | string                                                           | `© ${currentYear} NyNus. All rights reserved.` | Text bản quyền                      |
| showAppVersion  | boolean                                                          | false                                           | Hiển thị phiên bản ứng dụng         |

### NavigationColumn

| Prop        | Type         | Default | Description                          |
| ----------- | ------------ | ------- | ------------------------------------ |
| title       | string       | ''      | Tiêu đề của cột                      |
| links       | FooterLink[] | []      | Danh sách các liên kết trong cột     |
| collapsible | boolean      | true    | Cho phép collapse/expand trên mobile |
| defaultOpen | boolean      | false   | Trạng thái mở mặc định trên mobile   |
| icon        | ReactNode    | null    | Icon hiển thị bên cạnh title         |
| className   | string       | ''      | Custom classes cho cột               |

### FooterLink

| Prop         | Type                                                      | Default   | Description                       |
| ------------ | --------------------------------------------------------- | --------- | --------------------------------- |
| label        | string                                                    | ''        | Text hiển thị cho liên kết        |
| href         | string                                                    | '#'       | URL của liên kết                  |
| isExternal   | boolean                                                   | false     | Link mở trong tab mới             |
| icon         | ReactNode                                                 | null      | Icon hiển thị bên cạnh link       |
| onClick      | () => void                                                | undefined | Handler khi click vào link        |
| badge        | string                                                    | ''        | Badge text hiển thị bên cạnh link |
| badgeVariant | 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' | 'primary' | Kiểu badge hiển thị               |

### NewsletterSection

| Prop                | Type                                                  | Default                                                             | Description                            |
| ------------------- | ----------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------- |
| title               | string                                                | 'Đăng ký nhận thông báo'                                            | Tiêu đề của form đăng ký               |
| description         | string                                                | 'Nhận thông báo về các khóa học mới và cập nhật.'                   | Mô tả ngắn                             |
| placeholderText     | string                                                | 'Email của bạn'                                                     | Placeholder cho input email            |
| buttonText          | string                                                | 'Đăng ký'                                                           | Text cho button submit                 |
| showPrivacyCheckbox | boolean                                               | true                                                                | Hiển thị checkbox chấp nhận điều khoản |
| privacyText         | string                                                | 'Tôi đồng ý nhận email marketing từ NyNus. Xem Chính sách Bảo mật.' | Text điều khoản                        |
| onSubmit            | (email: string, consent: boolean) => Promise<boolean> | -                                                                   | Callback xử lý đăng ký                 |

### SocialMediaSection

| Prop       | Type                       | Default      | Description                        |
| ---------- | -------------------------- | ------------ | ---------------------------------- |
| socials    | SocialLink[]               | []           | Danh sách các liên kết mạng xã hội |
| showLabels | boolean                    | false        | Hiển thị labels bên cạnh icons     |
| size       | 'sm' \| 'md' \| 'lg'       | 'md'         | Kích thước icons                   |
| layout     | 'horizontal' \| 'vertical' | 'horizontal' | Layout của socials section         |
| colorMode  | 'brand' \| 'monochrome'    | 'brand'      | Kiểu màu sắc của icons             |

## Mô tả giao diện

### Standard Variant

Footer tiêu chuẩn có background màu tối hơn so với nội dung chính (dark gray hoặc deep brand color), với thiết kế multi-column. Phần trên cùng có 3-5 columns, mỗi column có heading với font weight semibold/bold và 4-8 links dạng stacked. Column đầu tiên thường chứa logo, slogan, và social media links. Columns tiếp theo chứa các links được nhóm theo categories.

Ở phần dưới, footer có một divider line và sub-footer hiển thị copyright information, các essential links như Privacy Policy và Terms of Service, và có thể có language selector hoặc region selector. Toàn bộ footer được căn giữa với max-width giống phần content, padding vertical đủ rộng (48-64px), và responsive trên mọi screen sizes.

### Minimal Variant

Phiên bản đơn giản hóa, thường dùng trên các trang application cần ít phân tâm. Layout đơn giản hơn với single row hoặc 2-column layout. Bên trái chứa copyright và brand information, bên phải chứa essential links như Terms, Privacy, và Help hiển thị dạng horizontal. Background color subtle và padding nhỏ hơn standard variant.

Minimal footer thường có height tĩnh khoảng 60-80px, text size nhỏ hơn, không có section headings và không có form đăng ký newsletter. Vẫn duy trì đủ padding để links dễ click/tap trên mobile.

### Content-rich Variant

Footer mở rộng với nhiều nội dung và chức năng hơn, thường dùng trên landing pages hoặc marketing pages. Ngoài các components của standard variant, còn bao gồm một newsletter subscription form được highlight với kích thước lớn hơn và styling nổi bật.

Có thể bổ sung section giới thiệu về NyNus với statement ngắn về sứ mệnh và giá trị, trust badges, hoặc certifications. Phần contact information được mở rộng với map preview mini hoặc business hours. Có thể có thêm recent blog posts hoặc featured content.

### Admin Variant

Footer đơn giản dành cho khu vực admin, tập trung vào tính năng hơn là marketing. Single-row layout với app version, copyright, và một số essential links như Help, Documentation, và Contact Support. Background color thường là light gray hoặc neutral color phù hợp với admin UI theme.

Không có nhiều decorative elements, social media, hoặc newsletter form. Có thể hiển thị thông tin như server status, last updated timestamp, hoặc environment indicator (staging/production).

### Lesson Variant

Thiết kế đặc biệt khi đang trong context học tập, hiển thị thông tin và controls liên quan đến khóa học hoặc bài học hiện tại. Có thể hiển thị navigation controls (Previous/Next lesson), progress indicator, hoặc quick links đến related content, resources, hoặc discussion forums.

Phiên bản này có styling nhẹ nhàng hơn để không phân tâm khỏi học tập, nhưng vẫn cung cấp đủ thông tin hữu ích. Có thể collapse/expand để tiết kiệm không gian màn hình khi không cần thiết.

## Lưu ý quan trọng

- **Responsive Design**: Footer phải hiển thị tốt trên mọi kích thước màn hình, với columns stacking và collapsible sections trên mobile
- **Legal Compliance**: Đảm bảo các liên kết quan trọng như Privacy Policy, Terms of Service, và GDPR/Cookie settings luôn visible
- **Navigation Depth**: Không nên quá nhiều links trong footer để tránh overwhelm người dùng (tối đa 30-40 links)
- **Visual Hierarchy**: Sử dụng typography, spacing, và color để tạo clear hierarchy giữa các sections
- **Accessibility**: Đảm bảo đủ color contrast, đặc biệt cho text trên background có màu, và đúng cấu trúc HTML
- **Performance**: Tối ưu assets như logos và icons, sử dụng SVG khi có thể
- **Server vs Client**: Phân chia rõ ràng Server Component và Client Component phù hợp để tối ưu hóa hydration
- **Localization**: Thiết kế phải accommodate text expansion/contraction khi dịch sang ngôn ngữ khác
- **Brand Consistency**: Footer phải phản ánh đúng brand identity và tone của NyNus
- **Interaction States**: Đảm bảo tất cả links và interactive elements có các states (hover, focus, active) rõ ràng
- **Semantic HTML**: Sử dụng đúng semantic tags và ARIA attributes cho better accessibility
- **Dark Mode**: Support dark mode một cách consistent và visually pleasing
