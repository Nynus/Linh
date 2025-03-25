# User Dropdown Component

## Mô tả

User Dropdown là một menu tương tác hiển thị khi người dùng nhấp vào avatar profile trên thanh navigation. Component này cung cấp truy cập nhanh đến các tùy chọn và hành động liên quan đến tài khoản người dùng như thông tin profile, cài đặt, tiến trình học tập, và đăng xuất. User Dropdown cung cấp trải nghiệm cá nhân hóa và thể hiện trạng thái đăng nhập của người dùng.

## Loại

- Client Component với state management và tương tác phức tạp
- Component phụ thuộc vào authentication state
- Giao diện hiển thị thông tin và hành động người dùng

## Variants

- **Standard**: Menu dropdown đầy đủ với avatar, thông tin người dùng và các hành động
- **Minimal**: Phiên bản rút gọn chỉ hiển thị các hành động thiết yếu (dùng cho mobile)
- **Expanded**: Phiên bản mở rộng với nhiều thông tin chi tiết hơn (dùng trong admin panel)
- **Guest**: Hiển thị khi người dùng chưa đăng nhập

## Prompt chi tiết

```
Thiết kế một User Dropdown menu hiện đại, cá nhân hóa và linh hoạt cho nền tảng học tập NyNus. Component này sẽ hiển thị khi người dùng nhấp vào avatar profile trên thanh navigation, cung cấp truy cập nhanh đến thông tin tài khoản và hành động liên quan.

1. Trigger Element (Avatar Button):
   - Circular avatar image hiển thị ảnh profile của người dùng đã đăng nhập
   - Fallback hiển thị initials của người dùng hoặc icon user generic nếu không có ảnh
   - Subtle border highlight khi hover
   - Optional status indicator (nhỏ, tròn) ở góc để thể hiện online status
   - Accessibility support với keyboard navigation và ARIA labels
   - Active state rõ ràng khi dropdown đang mở
   - Micro-interaction nhẹ nhàng khi hover và click

2. Dropdown Container:
   - Khung chứa với border radius đồng nhất, drop shadow vừa phải
   - Background color sáng với độ tương phản tốt
   - Padding đủ rộng để tạo không gian thở cho nội dung
   - Smooth opening animation (fade + scale hoặc slide)
   - Backdrop blur optinoal để tạo hiệu ứng frosted glass
   - Position tự động điều chỉnh để luôn nằm trong viewport
   - Z-index phù hợp để hiển thị trên các elements khác
   - Click outside để đóng dropdown

3. Header Section:
   - Avatar lớn hơn (tùy chọn, có thể bỏ qua nếu đã có trên trigger)
   - Tên đầy đủ của người dùng với typography nổi bật
   - Email/username hiển thị dưới tên với style nhẹ hơn
   - Premium status badge nếu người dùng có subscription
   - Nút "View Profile" hoặc link trực tiếp đến trang profile
   - Separator tinh tế để phân tách với phần menu chính

4. Menu Items:
   - Danh sách các menu items với consistent styling
   - Mỗi item có icon bên trái và text rõ ràng
   - Hover state với background highlight nhẹ
   - Active/selected state nếu đang ở trang tương ứng
   - Grouping các items theo chức năng với optional dividers
   - Đảm bảo spacing đều nhau giữa các items
   - Mỗi item có hover và active states rõ ràng

5. Menu Groups/Sections:
   - Nhóm các hành động liên quan:
     - Account Management: Profile, Account Settings, Preferences
     - Learning: My Courses, Progress, Certificates, Bookmarks
     - System: Theme selection, Language, Notifications
     - Admin Functions (nếu user là admin): Dashboard, Content Management
     - Support & Help: Help Center, Contact Support, Feedback
   - Optional section headings với subtle styling
   - Visual dividers giữa các section

6. Footer Section:
   - Sign out button với visual treatment riêng biệt
   - Switch account nếu ứng dụng hỗ trợ multiple accounts
   - App version hoặc copyright info (optional, subtle text)
   - Administrative actions nếu người dùng có quyền admin

7. Interactive Features:
   - Smooth transitions giữa hover/focus states
   - Feedback visual khi click item
   - Ripple effects hoặc highlights khi tương tác
   - Tooltips for complex actions nếu cần
   - Sub-menus for sections với nhiều options (optional)

8. Status & Notifications:
   - Notification counts hoặc badges trên menu items tương ứng
   - System message nếu cần xác nhận email, cập nhật profile, etc.
   - User progress visualization (e.g., completion percentage)
   - Subscription info nếu áp dụng

9. Customization & Themes:
   - Đáp ứng với light/dark mode của application
   - Color accents dựa trên user role hoặc preferences
   - Respect reduced motion preferences
   - RTL support
   - Styling nhất quán với application's design system

10. Mobile Optimization:
    - Larger touch targets cho mobile screens
    - Simplified layout on very small screens
    - Possible full-screen modal thay vì dropdown trên mobile
    - Gesture support (swipe to dismiss)
    - Haptic feedback where appropriate

11. Performance Considerations:
    - Lazy loading của user data khi cần
    - Minimal re-renders khi interact với menu
    - Caching của user information
    - Efficient animations sử dụng CSS nếu có thể
    - Non-blocking loading của user details

12. Authentication Integration:
    - Handling expired sessions gracefully
    - Refresh token management nếu cần
    - Clear state feedback khi logged out
    - Login prompt khi user chưa authenticated
    - Guest mode với sign-in/sign-up options

13. Data Privacy & Security:
    - Chỉ hiển thị dữ liệu cần thiết
    - Masking sensitive information nếu phù hợp
    - Clear indication của account protection status
    - 2FA status indicator nếu applicable

14. Accessibility:
    - Full keyboard navigation support
    - ARIA roles và attributes đúng chuẩn
    - Focus management phù hợp
    - Screen reader friendly text và structure
    - Sufficient color contrast
    - Reduced motion options

Dropdown phải mang lại cảm giác cá nhân hóa cao, giúp người dùng cảm thấy được nhận diện bởi hệ thống. Design nên hiện đại, sạch sẽ nhưng cũng thân thiện và approachable. Cấu trúc menu phải logic và dễ hiểu, với các hành động thường xuyên sử dụng nhất được định vị ở vị trí dễ tiếp cận. Điều quan trọng là đảm bảo component này load nhanh vì nó là một phần của core navigation và được sử dụng thường xuyên.
```

## Props và API

### Inputs

| Prop                | Type                                             | Default    | Description                                                     |
| ------------------- | ------------------------------------------------ | ---------- | --------------------------------------------------------------- |
| user                | UserObject                                       | null       | Đối tượng chứa thông tin người dùng hiển thị trong dropdown     |
| variant             | 'standard' \| 'minimal' \| 'expanded' \| 'guest' | 'standard' | Kiểu hiển thị của dropdown                                      |
| customMenuItems     | MenuItem[]                                       | []         | Các menu items tùy chỉnh bổ sung                                |
| position            | 'left' \| 'right'                                | 'right'    | Vị trí hiển thị dropdown so với avatar                          |
| showNotifications   | boolean                                          | true       | Hiển thị badge thông báo trên avatar                            |
| notificationCount   | number                                           | 0          | Số lượng thông báo chưa đọc                                     |
| isOpen              | boolean                                          | undefined  | Controlled state của dropdown (nếu muốn kiểm soát từ bên ngoài) |
| defaultOpen         | boolean                                          | false      | Default open state nếu sử dụng uncontrolled component           |
| hideDefaultSections | string[]                                         | []         | Ẩn các sections mặc định theo tên                               |
| className           | string                                           | ''         | Custom classes cho component                                    |
| buttonClassName     | string                                           | ''         | Custom classes cho avatar button                                |
| menuClassName       | string                                           | ''         | Custom classes cho dropdown menu                                |
| onSignOut           | () => Promise<void>                              | undefined  | Function xử lý đăng xuất                                        |

### Methods/Events

| Name            | Parameters                    | Description                                       |
| --------------- | ----------------------------- | ------------------------------------------------- |
| onOpenChange    | (isOpen: boolean) => void     | Trigger khi dropdown mở hoặc đóng                 |
| onProfileClick  | () => void                    | Trigger khi người dùng click vào profile          |
| onSettingsClick | () => void                    | Trigger khi người dùng click vào settings         |
| onMenuItemClick | (item: MenuItem) => void      | Trigger khi người dùng click vào menu item bất kỳ |
| onAvatarClick   | (e: React.MouseEvent) => void | Trigger khi người dùng click vào avatar           |

## Mô tả giao diện

### Standard Variant

Variant mặc định hiển thị avatar người dùng làm trigger element, khi click sẽ mở ra một dropdown menu với header hiển thị thông tin người dùng (tên, email, trạng thái), các nhóm menu item được phân tách bởi divider mỏng. Các menu item được sắp xếp theo nhóm chức năng: quản lý tài khoản, học tập, hệ thống, hỗ trợ. Footer section chứa nút đăng xuất nổi bật. Tất cả đều có hiệu ứng hover và active states để tăng tính tương tác.

### Minimal Variant

Phiên bản đơn giản hóa với ít menu items hơn, tập trung vào các chức năng thiết yếu như profile, courses, notifications và sign out. Header chỉ hiển thị tên người dùng và không có dividers giữa các nhóm. Thiết kế tối giản để tối ưu cho màn hình nhỏ hoặc các giao diện có không gian hạn chế. Touch targets lớn hơn để dễ sử dụng trên thiết bị di động.

### Expanded Variant

Phiên bản mở rộng với nhiều thông tin và tùy chọn hơn, thường dùng trong admin panel. Header hiển thị thêm role của người dùng, ngày tham gia, và trạng thái subscription. Menu items có mô tả ngắn bên dưới text chính để giải thích chức năng. Có thể bao gồm các chức năng admin như quản lý nội dung, người dùng, thống kê. Kích thước tổng thể lớn hơn và có thể sử dụng 2 cột cho menu items trên màn hình lớn.

### Guest Variant

Hiển thị khi không có người dùng đăng nhập, trigger là icon user generic thay vì avatar. Dropdown chỉ chứa các options liên quan đến authentication như "Log In", "Sign Up", "Continue as Guest", và có thể bao gồm một form đăng nhập nhanh. Thiết kế tập trung vào việc khuyến khích người dùng đăng ký hoặc đăng nhập với call-to-action rõ ràng.

## Lưu ý quan trọng

- **Authentication State**: Component cần phản ứng chính xác với trạng thái đăng nhập của người dùng
- **Performance**: Không nên fetch dữ liệu nặng khi mở dropdown, sử dụng cached data khi có thể
- **Security**: Không hiển thị thông tin nhạy cảm, đặc biệt là trong môi trường shared device
- **Accessibility**: Đảm bảo hoàn toàn có thể truy cập bằng keyboard và screen readers
- **Responsive Design**: Điều chỉnh nội dung và layout phù hợp với kích thước màn hình
- **Caching Strategy**: Cân nhắc caching thông tin người dùng để tránh unnecessary fetches
- **Error Handling**: Xử lý gracefully các trường hợp dữ liệu không khả dụng
- **Session Management**: Tích hợp với hệ thống quản lý phiên người dùng
- **Customization**: Cho phép tùy chỉnh menu items dựa trên role hoặc permissions
- **Focus Management**: Quản lý focus đúng cách khi dropdown mở/đóng và khi navigate
