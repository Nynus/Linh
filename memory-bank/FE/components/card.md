# Card Component

## Mô tả

Card Component là một container đa năng dùng để hiển thị thông tin theo định dạng nhất quán và có cấu trúc. Cards được sử dụng rộng rãi trên nền tảng NyNus để hiển thị các khóa học, câu hỏi, bài viết, thông tin người dùng, và nhiều loại nội dung khác. Mỗi card cung cấp một khung nhìn nhỏ gọn vào thông tin quan trọng, với khả năng tương tác (như click để mở chi tiết) và visual hierarchy rõ ràng. Cards có thể được nhóm lại thành grid, list, hoặc carousel views để hiển thị nhiều items liên quan.

## Loại

- Server Component cho phiên bản tĩnh/đơn giản
- Client Component cho các card có tương tác phức tạp
- Có thể kết hợp Server và Client Components (hydration islands)
- Tái sử dụng cao với nhiều variants

## Variants

- **Standard**: Card cơ bản với image, tiêu đề, nội dung và actions
- **Course**: Thiết kế chuyên biệt cho hiển thị khóa học với thông tin học tập
- **Question**: Format đặc biệt cho câu hỏi và bài tập
- **User**: Hiển thị thông tin người dùng với avatar và stats
- **Horizontal**: Layout ngang cho các danh sách item với space giới hạn
- **Interactive**: Card với nhiều tương tác như expandable sections, hover states
- **Dashboard**: Card nhỏ gọn hiển thị metrics và data visualization
- **Feature**: Card lớn highlight tính năng quan trọng với graphics và CTAs

## Prompt chi tiết

```
Thiết kế một hệ thống Card Components linh hoạt và nhất quán cho nền tảng học tập NyNus. Cards là thành phần giao diện cơ bản xuất hiện xuyên suốt toàn bộ hệ thống, từ trang chủ đến trang khóa học, câu hỏi, và dashboard. Hệ thống card cần đảm bảo tính nhất quán về visual language trong khi vẫn đủ linh hoạt để phục vụ nhiều use cases khác nhau.

1. Cấu trúc chung:
   - Container hình chữ nhật với border radius nhất quán (default: 8px)
   - Box shadow subtle tạo elevation feel (variable shadow intensities)
   - Padding nội dung phù hợp và nhất quán (16-24px)
   - Border siêu mỏng hoặc không border tùy theme
   - Aspect ratio có thể tùy chỉnh nhưng với các preset chuẩn
   - Background màu trắng hoặc tông nhẹ theo context
   - Overflow handling cho text dài (ellipsis, line clamping)
   - Border radius đồng nhất cho tất cả inner elements
   - Hover và focus states rõ ràng
   - Support cho status indicators/badges
   - Container có thể relative hoặc absolute positioning

2. Anatomy tiêu chuẩn:
   - Header area (optional) với title, subtitle, và controls
   - Media section (optional) cho images, videos, hoặc graphics
   - Content area với text content được format tốt
   - Footer area (optional) cho metadata, actions, và controls
   - Dividers tinh tế giữa các sections khi cần
   - Consistent spacing giữa các sections
   - Clear visual hierarchy của information
   - Action items được nhóm logic
   - Optional badge/label ở góc hoặc bên header
   - Status indicators khi cần thiết

3. Typography & Content:
   - Heading scales rõ ràng (h3 thường cho titles)
   - Subheading với font-weight và size khác phù hợp
   - Body text với line height thoải mái (1.5-1.6)
   - Limited text lines với proper truncation
   - Strong support cho rich text formatting trong content
   - Metadata styling (lighter weight, smaller size)
   - Iconography nhất quán đi kèm text khi cần
   - Balance white space với content density
   - Truncation với ellipsis cho text overflow
   - Support cho highlights và text emphasis

4. Media handling:
   - Image aspect ratios nhất quán (16:9, 4:3, 1:1)
   - Lazy loading tích hợp sẵn cho images
   - Proper image compression và sizing
   - Placeholder states khi loading
   - Alt text support đầy đủ
   - Optional hover zoom hoặc focus effects
   - Fallback cho khi image fails
   - Video thumbnail styling với play indicator
   - Image borders hoặc rounding phù hợp
   - Subtle hover effects cho images khi card clickable

5. Interactive elements:
   - Clear hover states cho clickable cards
   - Focus indicators cho keyboard users
   - Tooltips cho truncated content
   - Action buttons với proper states
   - Click target size phù hợp accessibility
   - Transition effects mượt mà (hover, active)
   - Toggle các sections options (expandable)
   - Loading states cho async content
   - Tactile feedback với micro-animations
   - Cursor indicators cho interactive parts

6. Layout & Responsiveness:
   - Grid-friendly sizing cho layout đồng đều
   - Responsive scaling từ mobile tới desktop
   - Flexbox-based inner layout
   - Equal-height cards trong cùng row
   - Horizontal scrolling support cho mobile
   - Consistent gutters giữa grid items
   - Stacking behavior trên small screens
   - Viewport-aware sizing
   - Proper resizing không breaking layout
   - Touch-friendly sizing trên mobile

7. Variants chuyên biệt:

   a. Course Card:
   - Progress indicator (circular hoặc linear)
   - Duration và lesson count
   - Instructor info với avatar nhỏ
   - Skill level indicator
   - Rating và enrollment count
   - Category/subject badge
   - "Continue Learning" action khi in-progress
   - Preview hoặc trailer trigger
   - Last accessed timestamp
   - New content indicator

   b. Question Card:
   - Difficulty level indicator
   - Question type badge (MCQ, essay, etc.)
   - Subject/topic tags
   - Attempt count hoặc success rate
   - Points/score value
   - Time estimate
   - Expandable hints section
   - Related resource links
   - Quick answer submission
   - Bookmarking functionality

   c. User Card:
   - Avatar với proper sizing
   - Online status indicator
   - Achievement badges
   - Role/permission indicator
   - Activity metrics (compact)
   - Follow/connect actions
   - Membership level
   - Location/timezone info
   - Mutual connections
   - Contact/message action

   d. Dashboard Card:
   - Data visualization area
   - Metric với large number display
   - Trend indicator (up/down)
   - Time period selector
   - Refresh/reload control
   - Export/share functionality
   - Compact layout optimized cho glanceability
   - Color-coding cho status
   - Alert threshold indicators
   - Link to detailed view

8. State variants:
   - Default state
   - Hover state (subtle elevation increase, highlight)
   - Active/selected state (border highlight hoặc background)
   - Disabled state (greyed out, reduced opacity)
   - Loading state (skeleton hoặc spinner)
   - Error state (không load được content)
   - New/unread state (indicator hoặc badge)
   - Featured/promoted state (highlight visual)
   - Archived/inactive state (reduced visibility)
   - Empty state (placeholder content)

9. Theming & Styling:
   - Color tokens consistent với design system
   - Light & dark mode support
   - High contrast mode for accessibility
   - Brand color accents ở appropriate spots
   - Variable-based styling để dễ customize
   - State-based styling (hover, active, etc.)
   - Status colors (success, warning, error, info)
   - Neutral colors cho backgrounds và borders
   - Gradient options cho feature cards
   - Content-aware color adjustments

10. Accessibility & Performance:
    - Proper heading hierarchy
    - ARIA attributes cho interactive cards
    - Keyboard navigability
    - Touch targets đủ lớn (min 44x44px)
    - Reduced motion option
    - Screen reader friendly content structure
    - Sufficient color contrast
    - Performance optimized image loading
    - Lazy loading của non-critical content
    - Minimal repaints/reflows khi interacting

11. Special Features:
    - Bookmarking/save functionality
    - Share options
    - Quick actions menu (3-dot menu)
    - Expandable sections
    - Drag-and-drop support cho reordering
    - Animations cho state changes
    - Custom action buttons
    - Right-click context menu
    - Pinning functionality
    - Custom badge/ribbon styling

Hệ thống card cần modular, composable và đủ linh hoạt để phục vụ mọi nhu cầu hiển thị thông tin trên nền tảng, trong khi vẫn đảm bảo trải nghiệm nhất quán cho người dùng. Sử dụng design tokens để đảm bảo nhất quán và dễ duy trì. Cards nên đẹp mắt nhưng không gây mất tập trung, với focus vào nội dung và chức năng.
```

## Props và API

### CardContainer

| Prop         | Type                                                                                                        | Default           | Description                       |
| ------------ | ----------------------------------------------------------------------------------------------------------- | ----------------- | --------------------------------- |
| variant      | 'standard' \| 'course' \| 'question' \| 'user' \| 'horizontal' \| 'interactive' \| 'dashboard' \| 'feature' | 'standard'        | Kiểu card hiển thị                |
| elevation    | 'none' \| 'low' \| 'medium' \| 'high'                                                                       | 'low'             | Mức độ shadow tạo elevation       |
| isHoverable  | boolean                                                                                                     | false             | Card có hover effect không        |
| isSelectable | boolean                                                                                                     | false             | Card có selectable state không    |
| isSelected   | boolean                                                                                                     | false             | Card có đang được chọn không      |
| isDisabled   | boolean                                                                                                     | false             | Card có bị disabled không         |
| isLoading    | boolean                                                                                                     | false             | Card đang ở trạng thái loading    |
| isClickable  | boolean                                                                                                     | false             | Card có thể click toàn bộ         |
| onClick      | () => void                                                                                                  | undefined         | Handler khi click vào card        |
| className    | string                                                                                                      | ''                | Custom classes cho card container |
| aspectRatio  | 'auto' \| 'square' \| '4:3' \| '16:9' \| '3:2'                                                              | 'auto'            | Tỷ lệ khung hình của card         |
| padding      | 'none' \| 'small' \| 'medium' \| 'large'                                                                    | 'medium'          | Padding của card content          |
| border       | 'none' \| 'thin' \| 'medium'                                                                                | 'none'            | Kiểu border của card              |
| borderColor  | string                                                                                                      | 'border-gray-200' | Màu của border (nếu có)           |
| status       | 'none' \| 'new' \| 'featured' \| 'popular' \| 'limited'                                                     | 'none'            | Trạng thái đặc biệt của card      |

### CardMedia

| Prop            | Type                                                                     | Default     | Description                     |
| --------------- | ------------------------------------------------------------------------ | ----------- | ------------------------------- |
| src             | string                                                                   | ''          | URL của media (hình ảnh/video)  |
| alt             | string                                                                   | ''          | Alt text cho hình ảnh           |
| type            | 'image' \| 'video' \| 'custom'                                           | 'image'     | Loại media                      |
| position        | 'top' \| 'left' \| 'right' \| 'bottom' \| 'background'                   | 'top'       | Vị trí của media                |
| aspectRatio     | 'auto' \| 'square' \| '4:3' \| '16:9' \| '3:2'                           | '16:9'      | Tỷ lệ khung hình của media      |
| overlay         | ReactNode                                                                | null        | Overlay content trên media      |
| overlayPosition | 'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right' \| 'center' | 'top-right' | Vị trí của overlay              |
| isLazy          | boolean                                                                  | true        | Sử dụng lazy loading            |
| objectFit       | 'cover' \| 'contain' \| 'fill'                                           | 'cover'     | Kiểu scale của hình ảnh         |
| fallback        | ReactNode                                                                | null        | Nội dung fallback khi media lỗi |
| hoverEffect     | 'none' \| 'zoom' \| 'darken' \| 'brighten'                               | 'none'      | Hiệu ứng hover trên media       |

### CardHeader

| Prop          | Type                                                  | Default | Description                         |
| ------------- | ----------------------------------------------------- | ------- | ----------------------------------- |
| title         | ReactNode                                             | null    | Tiêu đề chính                       |
| subtitle      | ReactNode                                             | null    | Tiêu đề phụ                         |
| avatar        | ReactNode                                             | null    | Avatar hoặc icon                    |
| action        | ReactNode                                             | null    | Action ở góc phải                   |
| titleAs       | 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' \| 'div' | 'h3'    | Element cho tiêu đề                 |
| titleLines    | number                                                | 2       | Số dòng tối đa cho title (truncate) |
| subtitleLines | number                                                | 1       | Số dòng tối đa cho subtitle         |
| divider       | boolean                                               | false   | Hiển thị divider dưới header        |
| alignment     | 'left' \| 'center' \| 'right'                         | 'left'  | Căn chỉnh của nội dung              |

### CardContent

| Prop            | Type                                     | Default  | Description                           |
| --------------- | ---------------------------------------- | -------- | ------------------------------------- |
| children        | ReactNode                                | null     | Nội dung chính của card               |
| padding         | 'none' \| 'small' \| 'medium' \| 'large' | 'medium' | Padding của phần content              |
| maxLines        | number                                   | 0        | Giới hạn số dòng (0 = không giới hạn) |
| truncate        | boolean                                  | false    | Truncate text quá dài                 |
| expandable      | boolean                                  | false    | Cho phép expand content               |
| defaultExpanded | boolean                                  | false    | Mặc định đã expand                    |
| scrollable      | boolean                                  | false    | Cho phép scroll content               |
| maxHeight       | string                                   | 'none'   | Chiều cao tối đa của content          |

### CardFooter

| Prop       | Type                                             | Default  | Description                  |
| ---------- | ------------------------------------------------ | -------- | ---------------------------- |
| children   | ReactNode                                        | null     | Nội dung của footer          |
| divider    | boolean                                          | true     | Hiển thị divider trên footer |
| alignment  | 'left' \| 'center' \| 'right' \| 'space-between' | 'left'   | Căn chỉnh của nội dung       |
| padding    | 'none' \| 'small' \| 'medium' \| 'large'         | 'medium' | Padding của footer           |
| background | 'none' \| 'light' \| 'dark'                      | 'none'   | Background của footer        |
| fixed      | boolean                                          | false    | Footer có fixed position     |

### CardBadge

| Prop     | Type                                                                     | Default    | Description              |
| -------- | ------------------------------------------------------------------------ | ---------- | ------------------------ |
| text     | string                                                                   | ''         | Text hiển thị trên badge |
| variant  | 'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' | 'primary'  | Kiểu badge               |
| position | 'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'             | 'top-left' | Vị trí của badge         |
| size     | 'small' \| 'medium' \| 'large'                                           | 'medium'   | Kích thước badge         |
| icon     | ReactNode                                                                | null       | Icon hiển thị trên badge |
| pulse    | boolean                                                                  | false      | Badge có hiệu ứng pulse  |

## Mô tả giao diện

### Standard Card

Card tiêu chuẩn có layout dọc, với media ở trên, header bên dưới, tiếp theo là content và footer. Box-shadow nhẹ (elevation low) tạo cảm giác hơi nổi lên so với background. Border radius nhất quán (8px). Background màu trắng trong light mode và tối nhẹ trong dark mode. Padding internal thống nhất (16px hoặc 24px).

Header thường có title (bold, size lớn hơn) và optional subtitle (nhạt hơn, size nhỏ hơn). Content area có thể chứa paragraph text, lists, hoặc custom elements. Footer thường chứa metadata và action buttons, thường có divider ở trên để phân tách với content.

Khi isHoverable=true, card có transition mượt mà khi hover, tăng nhẹ elevation và có thể highlight border. Khi isClickable=true, toàn bộ card là một click target.

### Course Card

Được thiết kế đặc biệt cho hiển thị khóa học. Media thường lớn hơn và prominent hơn (tỷ lệ 16:9), có thể có play button overlay cho video content. Header có title của khóa học và subtitle thường hiển thị tên instructor. Content area hiển thị mô tả ngắn và thông tin quan trọng như:

- Skill level badge (Beginner, Intermediate, Advanced)
- Số lượng bài học và thời lượng
- Rating với số lượng reviews
- Progress bar cho khóa học đang học (0-100%)

Footer chứa giá (nếu có) và action buttons như "Enroll", "Continue Learning", "Add to Wishlist". Có thể có badges ở góc trên phải cho các trạng thái như "New", "Popular", "Sale".

### Question Card

Thiết kế tối ưu cho hiển thị câu hỏi và bài tập. Header bao gồm subject/topic và question type. Content area hiển thị phần đầu câu hỏi, có thể truncated nếu quá dài. Sử dụng indentation và formatting phù hợp cho các phần khác nhau của câu hỏi.

Thông tin bổ sung hiển thị như badges hoặc metadata:

- Độ khó (Easy, Medium, Hard)
- Estimated time
- Points/score value
- Attempt count hoặc success rate

Footer có thể chứa hints, related questions, hoặc action buttons như "Try", "View Solution". Card này thường có hover state để indicate clickable và có thể mở rộng để hiển thị thêm nội dung.

### User Card

Được tối ưu cho hiển thị thông tin người dùng. Thường có format khác biệt với avatar lớn hoặc prominent. Header hiển thị tên người dùng và role/title. Content area hiển thị bio ngắn hoặc thông tin contact.

Metadata hiển thị có thể bao gồm:

- Location/timezone
- Join date
- Badges thành tích
- Connection status
- Activity metrics

Footer thường có action buttons như "Follow", "Message", "View Profile". Online status thường hiển thị như một indicator nhỏ trên avatar. Khi hover có thể hiển thị quick actions hoặc thông tin bổ sung.

### Horizontal Card

Layout ngang với media ở bên trái (hoặc phải) và content ở bên còn lại. Thường được sử dụng trong list views hoặc khi space theo chiều dọc bị giới hạn. Media thường có tỷ lệ 1:1 hoặc 4:3. Content area bao gồm tất cả các thành phần như header, body, và footer nhưng arranged theo chiều dọc trong phần bên phải của card.

Card này thích hợp cho thiết bị mobile, danh sách kết quả tìm kiếm, hoặc notitications. Thường có chiều cao cố định để tạo layout đồng nhất.

### Interactive Card

Phiên bản với nhiều tương tác phức tạp hơn. Có thể bao gồm các tính năng:

- Expandable/collapsible sections
- Tabs hoặc switches bên trong card
- Interactive elements như sliders, toggles
- Hover states cho các vùng khác nhau
- Dropdown menus hoặc popover content

Interactive cards thường cần JavaScript/client-side code để xử lý các tương tác. Chúng thường có các micro-animations và transitions mượt mà để enhance user experience.

### Dashboard Card

Thiết kế nhỏ gọn, tối ưu cho hiển thị metrics và data. Thường không có media lớn, thay vào đó có icon hoặc mini-visualization. Header đơn giản với metric name và action menu. Content area focus vào metric values với typography lớn, rõ ràng.

Thường bao gồm:

- Large number displays
- Trend indicators (up/down arrows)
- Percentage changes
- Mini charts (sparklines, mini bar charts)
- Color-coding theo status/performance

Footer có thể hiển thị timeframe hoặc comparison data. Cards này thường xuất hiện trong grid layout trên dashboards and analytics pages.

### Feature Card

Card lớn, nổi bật để highlight các tính năng quan trọng. Thường có media lớn hoặc illustrations. Typography lớn hơn với title prominent và content mô tả rõ ràng. Có thể sử dụng gradient backgrounds hoặc accent colors để tạo visual impact.

Thường bao gồm CTAs rõ ràng với primary buttons lớn. Layout có thể linh hoạt hơn, đôi khi breakout khỏi grid layout. Feature cards thường xuất hiện trên landing pages hoặc marketing sections.

## Lưu ý quan trọng

- **Consistency**: Đảm bảo visual consistency giữa các card variants để tạo trải nghiệm thống nhất
- **Responsive Design**: Cards phải hiển thị tốt trên mọi device sizes, đặc biệt là trên điện thoại
- **Performance**: Tối ưu image loading với lazy load, proper sizing và formats
- **Accessibility**: Đảm bảo đủ color contrast, keyboard navigability và ARIA attributes
- **Server vs Client Components**: Phân chia rõ ràng các phần nào cần interactive vs. static
- **Content Prioritization**: Chỉ hiển thị thông tin quan trọng nhất, tránh overcrowding
- **Image Handling**: Đảm bảo proper aspect ratios và fallbacks cho failed images
- **State Management**: Xử lý các states (hover, focus, active, loading) một cách graceful
- **Grid Layouts**: Cards cần worked well trong grid layouts với equal heights khi cần thiết
- **Typography Scale**: Sử dụng typography scale nhất quán cho card titles và content
- **Mobile Touch Targets**: Đảm bảo touch targets đủ lớn (ít nhất 44x44px) cho mobile users
- **Dark Mode Support**: Cards phải hiển thị tốt trong cả light và dark mode
- **Animation Performance**: Nếu sử dụng animations, đảm bảo chúng mượt mà và không ảnh hưởng performance
- **Layout Shifts**: Tránh layout shifts khi loading content hoặc images
- **Overflow Handling**: Xử lý text overflow một cách graceful với ellipsis hoặc line clamping

```

```
