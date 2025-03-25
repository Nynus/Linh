# Navbar Component

## Mô tả

Navbar Component là thanh điều hướng chính xuất hiện ở đầu mỗi trang trong nền tảng NyNus, cung cấp truy cập nhanh vào các chức năng và trang quan trọng. Component này hoạt động như điểm neo chính cho trải nghiệm người dùng, giúp điều hướng dễ dàng và đảm bảo trải nghiệm nhất quán trên toàn bộ nền tảng. Navbar điều chỉnh theo ngữ cảnh dựa trên trạng thái đăng nhập của người dùng, vai trò, và trang hiện tại, hiển thị các menu items và hành động phù hợp.

## Loại

- Hybrid Component (kết hợp Server và Client Components)
- Server Component cho phần cấu trúc tĩnh và data-fetching
- Client Components cho các phần tương tác như dropdowns và mobile menu
- Có thể xuất hiện global trên tất cả các trang hoặc tùy chỉnh theo route

## Variants

- **Standard**: Thanh điều hướng đầy đủ với logo, các liên kết chính, tìm kiếm và user dropdown
- **Minimal**: Phiên bản đơn giản hóa với chỉ logo và các liên kết thiết yếu
- **Learning**: Phiên bản đặc biệt cho trang học tập, bao gồm điều hướng khóa học và tiến độ
- **Admin**: Phiên bản dành cho khu vực quản trị với các liên kết và công cụ quản lý
- **Transparent**: Phiên bản trong suốt với background gradient sử dụng trên landing pages

## Prompt chi tiết

```
Thiết kế một Navbar Component hiện đại, đáp ứng và trực quan cho nền tảng học tập NyNus. Navbar này phải cung cấp điều hướng mượt mà giữa các sections chính của nền tảng, thích ứng với trạng thái người dùng (đăng nhập/đăng xuất), vai trò, và context hiện tại.

1. Main Container:
   - Full-width design với content area căn giữa (max-width đồng nhất với site)
   - Height phù hợp (~64px desktop, ~56px mobile)
   - Sticky positioning với subtle drop shadow khi scroll
   - Backdrop blur effect option cho transparent variant
   - Z-index phù hợp để luôn hiển thị phía trên các elements khác
   - Transition mượt mà khi scroll (ví dụ: từ transparent sang solid)
   - Border bottom subtle hoặc divider để phân tách với content
   - Responsive height và spacing tùy theo device size
   - Support cho safe area insets trên mobile devices

2. Brand Presentation:
   - Logo NyNus với link về trang chủ
   - Logo sizing phù hợp responsive
   - Optional animated logo interaction khi hover/focus
   - Transition giữa full logo và compact logo trên mobile
   - Consistent placement (left-aligned)
   - High-contrast mode support cho logo
   - Variant logo cho các modes khác nhau (light/dark)
   - Space buffer để tránh crowding với other elements

3. Primary Navigation:
   - Horizontally arranged main nav links trên desktop
   - Clear visual indication of current page/section
   - Dropdown support cho nested navigation items
   - Hover và active states với transitions mượt mà
   - Spacing đồng đều giữa các items
   - Intelligent grouping của related navigation items
   - Optional microcopy hoặc description dưới primary links
   - Keyboard accessibility với clear focus indicators

4. Secondary Items (Right Side):
   - Search toggle/box
   - Notifications icon với counter badge
   - User profile dropdown/button
   - Call-to-action button cho users chưa đăng nhập
   - Settings or preferences shortcut
   - Help or support access
   - Language selector nếu multi-lingual
   - Dark/light mode toggle
   - Consistent spacing và alignment

5. Search Functionality:
   - Expandable search input trên click/focus
   - Search icon clear và recognizable
   - Placeholder text helpful
   - Autocomplete dropdown với recent/suggested searches
   - Loading state khi searching
   - Keyboard shortcuts (Ctrl+K/Cmd+K) overlay
   - Clear và clear search buttons
   - Voice search option trên supported devices
   - Mobile-optimized expansion

6. User Profile Section:
   - Avatar với fallback cho users không có profile picture
   - Status indicator (online/offline/busy)
   - Dropdown menu với user info và quick actions
   - Current role/plan indicator
   - Quick links tới profile, settings, help
   - Sign out action
   - Clean transition và animation cho dropdown
   - Dropdown positioning để không bị cut off

7. Notification Center:
   - Icon với count badge cho unread notifications
   - Dropdown panel showing recent notifications
   - Categorization của different notification types
   - Clear all và mark as read actions
   - Link to full notification center
   - Preview/truncation cho notification content
   - Timestamp information
   - Unread vs read styling distinction
   - Loading state khi fetching new notifications

8. Mobile Optimization:
   - Hamburger menu toggle cho collapsed navigation
   - Slide-in drawer hoặc full-screen overlay cho mobile nav
   - Reordering của nav items based on importance
   - Larger touch targets cho mobile interactions
   - Bottom navigation bar option cho mobile
   - Gesture support (swipe to open/close menu)
   - Collapsible sections trong mobile menu
   - Breadcrumb trail hoặc back button trong nested menus
   - Progress indicators cho multi-step processes

9. Authentication States:
   - Separate states cho logged-in và anonymous users
   - Sign In/Sign Up CTAs cho anonymous users
   - User-specific information khi logged in
   - Role-specific menu items (student, teacher, admin)
   - Smooth transition khi authentication state changes
   - Session status indicators
   - Welcome message hoặc personalization touch
   - Quick onboarding nudges cho new users

10. Context-Awareness:
    - Learning context mode (khi trong course/lesson)
    - Course-specific navigation khi trong course
    - Section indicator/progress bar khi trong multi-step process
    - Admin tools khi trong admin area
    - Breadcrumbs cho deep navigation hierarchies
    - Back button khi appropriate
    - Dynamic title/subtitle showing current context
    - Visual theming adapting cho different sections

11. Visual Design:
    - Consistent with NyNus brand guidelines
    - Purposeful use của color highlighting cho active items
    - Subtle hover animations và transitions
    - Support cho light/dark themes
    - High-contrast mode compliance
    - Crisp iconography với consistent style
    - Typography hierarchy rõ ràng
    - Responsive text truncation strategy

12. Performance & Accessibility:
    - Minimal re-renders và optimized code
    - Semantic HTML structure (nav, ul, li, etc.)
    - Proper ARIA labels và roles
    - Keyboard navigation support
    - Skip-to-content link for accessibility
    - Reduced motion option cho animations
    - Color contrast compliance (WCAG AA/AAA)
    - Screen reader announcements cho dynamic content

Navigation bar phải thể hiện brand personality của NyNus và cung cấp điều hướng trực quan. Animations và transitions nên mượt mà và tinh tế, không gây phân tâm. Đảm bảo navbar có thể scale up/down dựa trên screen size mà không làm mất functionality nào. Consider caching nav status để tránh navigation jumps khi page transitions. Ensure proper focus management khi sử dụng dropdowns hoặc mobile menus. The navbar should feel lightweight but complete - a helpful guide without dominating the interface.
```

## Props và API

### NavbarContainer

| Prop             | Type                                                              | Default     | Description                              |
| ---------------- | ----------------------------------------------------------------- | ----------- | ---------------------------------------- |
| variant          | 'standard' \| 'minimal' \| 'learning' \| 'admin' \| 'transparent' | 'standard'  | Kiểu navbar hiển thị                     |
| isSticky         | boolean                                                           | true        | Navbar cố định khi scroll                |
| isTransparent    | boolean                                                           | false       | Navbar có nền trong suốt ban đầu         |
| solidOnScroll    | boolean                                                           | true        | Chuyển từ trong suốt sang đặc khi scroll |
| maxWidth         | string                                                            | 'max-w-7xl' | Chiều rộng tối đa của nội dung           |
| className        | string                                                            | ''          | Custom classes cho navbar container      |
| hideOnScroll     | boolean                                                           | false       | Ẩn navbar khi scroll xuống               |
| showLogoOnMobile | boolean                                                           | true        | Hiển thị logo trên mobile                |
| showOnlyLogo     | boolean                                                           | false       | Chỉ hiển thị logo, ẩn các phần khác      |
| showDivider      | boolean                                                           | true        | Hiển thị divider ở dưới navbar           |

### Navigation Links

| Prop                  | Type                 | Default   | Description                            |
| --------------------- | -------------------- | --------- | -------------------------------------- |
| navItems              | NavItem[]            | []        | Menu items chính hiển thị trong navbar |
| activeItemId          | string               | ''        | ID của item active hiện tại            |
| enableDropdowns       | boolean              | true      | Cho phép dropdown menus                |
| mobileBreakpoint      | 'sm' \| 'md' \| 'lg' | 'md'      | Breakpoint để chuyển sang mobile menu  |
| showMobileMenu        | boolean              | undefined | Controlled state của mobile menu       |
| defaultMobileMenuOpen | boolean              | false     | Default state cho mobile menu          |
| collapsible           | boolean              | true      | Cho phép collapse/expand dropdowns     |
| customActiveClass     | string               | ''        | Custom class cho active item           |

### Search Component

| Prop               | Type                                       | Default       | Description                       |
| ------------------ | ------------------------------------------ | ------------- | --------------------------------- |
| showSearch         | boolean                                    | true          | Hiển thị search component         |
| searchPlaceholder  | string                                     | 'Tìm kiếm...' | Placeholder cho search input      |
| onSearch           | (query: string) => Promise<SearchResult[]> | -             | Function xử lý tìm kiếm           |
| enableAutoComplete | boolean                                    | true          | Hiển thị autocomplete suggestions |
| searchDelay        | number                                     | 300           | Debounce delay khi nhập (ms)      |
| maxSuggestions     | number                                     | 5             | Số lượng suggestions tối đa       |
| searchPosition     | 'right' \| 'center' \| 'left'              | 'right'       | Vị trí của search component       |
| expandable         | boolean                                    | true          | Search có thể mở rộng khi focus   |

### User Section

| Prop                 | Type                            | Default        | Description                                  |
| -------------------- | ------------------------------- | -------------- | -------------------------------------------- |
| user                 | User \| null                    | null           | Thông tin người dùng đã đăng nhập            |
| showUserDropdown     | boolean                         | true           | Hiển thị dropdown menu người dùng            |
| authButtons          | ReactNode                       | -              | Custom buttons cho trạng thái chưa đăng nhập |
| avatarSize           | 'sm' \| 'md' \| 'lg'            | 'md'           | Kích thước avatar người dùng                 |
| userDropdownPosition | 'bottom-right' \| 'bottom-left' | 'bottom-right' | Vị trí hiển thị dropdown                     |
| onSignOut            | () => Promise<void>             | -              | Callback xử lý đăng xuất                     |
| showNotifications    | boolean                         | true           | Hiển thị icon thông báo                      |
| notificationCount    | number                          | 0              | Số lượng thông báo chưa đọc                  |

### Mobile Menu

| Prop               | Type                                   | Default  | Description                         |
| ------------------ | -------------------------------------- | -------- | ----------------------------------- |
| mobileMenuType     | 'drawer' \| 'fullscreen' \| 'dropdown' | 'drawer' | Kiểu hiển thị mobile menu           |
| mobileMenuPosition | 'left' \| 'right'                      | 'right'  | Vị trí drawer menu trên mobile      |
| showCloseButton    | boolean                                | true     | Hiển thị nút đóng trong mobile menu |
| mobileMenuWidth    | string                                 | '80vw'   | Độ rộng của drawer menu             |
| backdropBlur       | boolean                                | true     | Blur backdrop khi mở mobile menu    |
| animationDuration  | number                                 | 300      | Thời gian animation (ms)            |
| closeOnNavigation  | boolean                                | true     | Tự động đóng menu khi chuyển trang  |

## Mô tả giao diện

### Standard Variant

Navbar tiêu chuẩn có độ cao khoảng 64-72px trên desktop, background màu sáng (light mode) hoặc tối (dark mode) với drop shadow nhẹ khi sticky. Logo NyNus nằm ở góc trái, theo sau là các liên kết điều hướng chính được bố trí theo hàng ngang. Bên phải chứa search icon/input, icon thông báo có badge counter, và user dropdown với avatar.

Khi hover, các liên kết có hiệu ứng chuyển màu nhẹ và có thể có underline indicator. Dropdown menus mở ra mượt mà với animation fade+slide khi hover hoặc click. User dropdown hiển thị avatar, tên người dùng, và các quick links tới profile, settings, và logout.

Trên mobile, navbar chuyển thành layout với logo ở trái và hamburger menu ở phải. Khi nhấn hamburger, menu hiển thị dạng slide-in drawer hoặc overlay toàn màn hình với các liên kết dạng vertical stack.

### Minimal Variant

Phiên bản simplified của navbar với chiều cao nhỏ hơn (~56px) và ít elements hơn. Chỉ hiển thị logo ở trái và các liên kết quan trọng nhất. Thường bỏ qua search component và giữ lại chỉ user dropdown hoặc login button ở góc phải.

Background thường nhẹ nhàng hơn với border bottom thay vì drop shadow. Typography và iconography simple hơn, với ít hover effects. Phiên bản này focus vào sự tối giản và không gây mất tập trung, thường dùng trong learning pages.

### Learning Variant

Được thiết kế đặc biệt cho các trang học tập, navbar này bao gồm các elements của standard variant nhưng thêm navigation controls cho course navigation: tên khóa học, chapter/section hiện tại, và progress bar hiển thị tiến độ. Có nút back to course và nút next/previous section.

Khi trong bài học, navbar có thể hiển thị timer nếu có time-based tests hoặc assignments. Màu sắc và styling thường tùy chỉnh theo theme của khóa học. Dropdown menu có thể bao gồm course outline cho quick navigation.

### Admin Variant

Phiên bản dành cho admins và instructors với branding ít nổi bật hơn và tập trung vào chức năng quản lý. Navbar này có thể bao gồm breadcrumbs để hiển thị vị trí hiện tại trong hệ thống quản lý.

Navigation links tập trung vào các chức năng admin: Dashboard, Users, Courses, Analytics, Settings, v.v. Mỗi section có thể có sub-menus với các chức năng chi tiết. Styling thường professional và utilitarian hơn với mã màu phân biệt để chỉ rõ đang ở environment admin.

### Transparent Variant

Phiên bản với background ban đầu là transparent, thường sử dụng trên landing pages và marketing pages. Navbar này có animation để chuyển sang solid background khi scroll xuống. Text và logo thường có màu sáng để contrast với hero images tối.

Khi ở trạng thái transparent, navbar không có border hoặc shadow. Khi scroll, transition mượt mà sang background color đặc và có thể thêm shadow. Các interactives như search và user dropdown có thể có styling đặc biệt khi ở trạng thái transparent.

## Lưu ý quan trọng

- **Responsive Behavior**: Đảm bảo navbar hoạt động mượt mà trên tất cả kích thước màn hình, đặc biệt là các breakpoints mobile và tablet
- **Authentication Integration**: Navbar phải phản ánh chính xác trạng thái đăng nhập và hiển thị nội dung phù hợp
- **Performance**: Tối ưu việc render và animations để không ảnh hưởng đến performance, đặc biệt khi sticky
- **Accessibility**: Đảm bảo keyboard navigation, ARIA labels, và focus management đúng chuẩn
- **Server vs Client Components**: Tách biệt rõ ràng các phần stateful và stateless để tối ưu hóa streaming và hydration
- **State Management**: Xử lý chính xác các trạng thái active và hiện tại của navigation items
- **Context Awareness**: Điều chỉnh nội dung navbar dựa trên route và context hiện tại
- **Mobile Interactions**: Tối ưu các tương tác trên touch devices với touch targets đủ lớn
- **Internationalization**: Support đa ngôn ngữ với text expansion/contraction mà không bị breaking layout
- **Notification States**: Xử lý các trạng thái realtime cho notifications và badges một cách graceful
- **Visual Consistency**: Duy trì visual system nhất quán với các components khác trong hệ thống
- **Color Contrast**: Đảm bảo text và icons có đủ contrast với background trong tất cả các variants và modes
