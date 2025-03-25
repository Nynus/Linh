# Avatar Component

## Mô tả

Avatar Component là thành phần UI dùng để hiển thị hình ảnh đại diện của người dùng, tổ chức, hoặc nội dung trong nền tảng NyNus. Đây là một trong những thành phần quan trọng trong hệ thống design, giúp tăng tính cá nhân hóa và nhận diện trong các tương tác xã hội của nền tảng. Avatar component được thiết kế để hiển thị hình ảnh người dùng một cách nhất quán trên toàn bộ platform, đồng thời xử lý các trường hợp khi hình ảnh không có sẵn bằng cách hiển thị fallback text (thường là initials của người dùng) hoặc fallback icon. Component này hỗ trợ nhiều kích thước, hình dạng, và có thể được mở rộng với các indicators cho status, presence, hoặc badges. Avatar được sử dụng rộng rãi trong profiles, comments, chat interfaces, user listings, và nhiều thành phần khác trên nền tảng.

## Loại

- **Server Components** (phiên bản cơ bản, static có thể render ở server)
- **Client Components** (khi có interactive features, status indicators)
- **Image-based Avatars** (hiển thị hình ảnh người dùng từ URL)
- **Text Avatars** (hiển thị initials khi không có hình ảnh)
- **Icon Avatars** (sử dụng icons khi không có hình ảnh)
- **Group Avatars** (tập hợp nhiều avatars trong một nhóm)
- **Interactive Avatars** (có thể click, hover với tooltips)
- **Stateful Avatars** (hiển thị status của người dùng)

## Variants

### Theo Hình Dạng

- **Circle**: Hình tròn tiêu chuẩn (mặc định)
- **Square**: Hình vuông
- **Rounded**: Hình vuông với border radius
- **Hexagon**: Hình lục giác (cho special users)

### Theo Kích Thước

- **XXS**: Extra extra small (16px)
- **XS**: Extra small (24px)
- **SM**: Small (32px)
- **MD**: Medium (40px)
- **LG**: Large (48px)
- **XL**: Extra large (56px)
- **XXL**: Extra extra large (72px)
- **XXXL**: Extra extra extra large (96px)

### Theo Content Type

- **Image Avatar**: Hiển thị hình ảnh người dùng
- **Initial Avatar**: Hiển thị chữ cái đầu của tên người dùng
- **Icon Avatar**: Hiển thị icon generic (e.g., person icon)
- **Custom Content Avatar**: Chứa custom content

### Theo Status/Indicator

- **Status Avatar**: Với indicator hiển thị online/offline status
- **Badge Avatar**: Với badge hiển thị thông tin bổ sung (e.g., notification count)
- **Verified Avatar**: Với verified badge
- **Role Avatar**: Thể hiện role của người dùng (e.g., instructor, admin)
- **Level Avatar**: Thể hiện level/achievement của người dùng

### Theo Interaction Type

- **Static Avatar**: No interactive features
- **Clickable Avatar**: Có thể click để navigate
- **Hoverable Avatar**: Hiển thị tooltip/popover khi hover
- **Droppable Avatar**: Cho drag-and-drop operations
- **Selectable Avatar**: Cho multiple selection interfaces

## Prompt chi tiết

```
Thiết kế một hệ thống Avatar Component toàn diện và có tính nhất quán cao cho nền tảng học tập NyNus. Avatar component là một thành phần UI quan trọng, đại diện cho users trong môi trường digital, cung cấp nhận diện trực quan và cá nhân hóa trải nghiệm. Hệ thống này cần có tính linh hoạt cao để phục vụ nhiều contexts sử dụng khác nhau, từ profile displays đến comment threads, từ user listings đến messaging interfaces, trong khi vẫn duy trì tính nhất quán trong look-and-feel.

1. Core Avatar Features:
   - Image-based avatars với optimal aspect ratio handling
   - Text fallbacks khi không có image (1-2 initials)
   - Icon fallbacks cho generic representations
   - Background colors generation based on user ID/name
   - Consistent border handling
   - Proper image resolution management
   - Loading states và image error handling
   - Alt text và accessibility considerations
   - Lazy loading cho performance
   - Cross-browser consistency
   - Device pixel ratio handling
   - Image format optimization (WebP support, etc)

2. Visual Design Elements:
   - Size system với 6-8 standardized sizes
   - Shape variations (circle, square, rounded square)
   - Border options (width, color, style)
   - Default colors cho fallback backgrounds
   - Thematic variations based on context
   - Neutral color palette cho default states
   - High contrast options cho accessibility
   - Special styles cho system users vs regular users
   - Hover và focus states
   - Responsive scaling behaviors
   - Dark và light mode adaptations
   - Shadow options cho elevated display

3. Avatar Content Types:
   - User profile images (personal avatars)
   - System-generated initials rendering
   - Default user icon representations
   - Generic placeholder images
   - Group/team avatars
   - Organization/department avatars
   - Course/class avatars
   - Resource/content avatars
   - Bot/system avatars
   - Custom content support
   - Dynamic content (animated, live)
   - Branded avatars cho official accounts

4. Status Indicators & Badges:
   - Online/offline status indicators
   - Presence indicators (away, busy, etc)
   - Notification badges
   - Verification badges
   - Role indicators (teacher, student, admin)
   - Achievement badges
   - Level indicators
   - Special event markers
   - Badge placement options (top-right, bottom-right, etc)
   - Multiple badge support
   - Badge size scaling with avatar size
   - Animated/interactive badges

5. Group Avatars:
   - Stacked avatar groups
   - Overlapping pattern với consistent spacing
   - Maximum visible avatars với +N overflow
   - Different stacking directions
   - Size adaptation for grouped avatars
   - Group layout algorithms
   - Tooltip support cho hidden avatars
   - Interactive group expansion
   - Compact vs expanded view options
   - Group border handling
   - Z-index management
   - Responsive collapse behavior

6. Interactive Behaviors:
   - Clickable avatars với appropriate affordances
   - Hover states và tooltips
   - Focus indicators cho keyboard navigation
   - Click actions (profile view, chat initiation, etc)
   - Right-click context menus
   - Drag-and-drop support
   - Selection states for multi-select interfaces
   - Touch-friendly tap targets
   - Double-click behaviors
   - Long-press actions for mobile
   - Keyboard navigation support
   - Loading/transitional states during interactions

7. Integration Contexts:
   - Profile pages
   - Comment sections
   - Discussion forums
   - User lists and directories
   - Chat/messaging interfaces
   - Activity feeds
   - Leaderboards
   - Notification displays
   - Team/group displays
   - Navigation elements
   - Authorship attribution
   - Content creation interfaces

8. Advanced Features:
   - Image upload/edit integration
   - Webcam capture support
   - Cropping interface integration
   - Avatar editor với filters, frames
   - Animated avatar support
   - Video avatar support
   - Default avatar gallery
   - Avatar sharing functionality
   - Conditional display rules
   - Permission-based visibility
   - Caching strategy
   - Avatar preloading patterns

9. Technical Implementation:
   - Optimized image loading
   - Responsive image handling
   - CDN integration
   - Client-side vs server-side fallbacks
   - Accessible implementation (ARIA attributes, etc)
   - SSR compatibility
   - Prop-based API vs slot-based
   - Theming integration
   - Bundle size optimization
   - Lazy initialization
   - Virtualization support for lists
   - Animation performance considerations

10. Edge Cases & Considerations:
    - Very long names for initial generation
    - Script/language support for non-Latin names
    - RTL language support
    - Extremely small/large avatar sizes
    - Missing/corrupted images
    - Low bandwidth scenarios
    - High DPI displays
    - Print media rendering
    - Avatars in emails/external contexts
    - Screen reader experiences
    - Color blindness considerations
    - Fallbacks cho no-image/no-JS environments

11. Performance & Loading:
    - Progressive loading strategies
    - Skeleton states
    - Optimized file sizes
    - Appropriate caching headers
    - Preloading critical avatars
    - Lazy loading offscreen avatars
    - Low-quality image placeholders
    - Image format selection logic
    - Batch loading for groups
    - Request throttling for large lists
    - Failed load retry strategies
    - Timeout handling

12. Customization & Extensibility:
    - Theme integration
    - Custom background patterns
    - Branded avatar frameworks
    - Developer override points
    - Composition patterns
    - Extensible indicator system
    - Custom badge support
    - Animation hooks
    - Event callbacks
    - Render prop support
    - Context provider integration
    - Style injection points

Avatar system trong NyNus platform nên mang lại experience nhất quán, đồng thời linh hoạt đủ để thích ứng với nhiều contexts khác nhau. Việc display avatars nên balance giữa aesthetics, performance, và functionality, đặc biệt chú ý đến mobile experience và accessibility. System phải support fallbacks gracefully và handle edge cases một cách elegant, đảm bảo rằng representation của users luôn consistent và visually appealing across all touchpoints trong platform.
```

## Props và API

### Avatar

| Prop           | Type                                                                       | Default        | Description                                              |
| -------------- | -------------------------------------------------------------------------- | -------------- | -------------------------------------------------------- |
| src            | string                                                                     | undefined      | URL của hình ảnh avatar                                  |
| alt            | string                                                                     | ''             | Alt text cho hình ảnh, cần thiết cho accessibility       |
| name           | string                                                                     | undefined      | Tên người dùng (dùng để tạo initials và fallback colors) |
| size           | 'xxs' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl' \| 'xxxl' \| number | 'md'           | Kích thước của avatar                                    |
| shape          | 'circle' \| 'square' \| 'rounded' \| 'hexagon'                             | 'circle'       | Hình dạng của avatar                                     |
| variant        | 'image' \| 'initial' \| 'icon'                                             | 'image'        | Variant mặc định, tự động fallback nếu image fails       |
| fallback       | ReactNode                                                                  | undefined      | Custom fallback content thay vì auto-generated initials  |
| icon           | ReactNode                                                                  | `<UserIcon />` | Icon sử dụng cho 'icon' variant                          |
| border         | boolean                                                                    | false          | Hiển thị border xung quanh avatar                        |
| borderColor    | string                                                                     | 'white'        | Màu của border                                           |
| borderWidth    | number \| string                                                           | '2px'          | Độ rộng của border                                       |
| background     | string                                                                     | undefined      | Force background color (thay vì auto-generated)          |
| color          | string                                                                     | undefined      | Text color cho initials                                  |
| online         | boolean                                                                    | undefined      | Hiển thị online status indicator                         |
| status         | 'online' \| 'offline' \| 'away' \| 'busy' \| 'invisible'                   | undefined      | Status để hiển thị indicator                             |
| statusSize     | 'xs' \| 'sm' \| 'md' \| 'lg'                                               | undefined      | Kích thước của status indicator                          |
| statusPosition | 'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'               | 'bottom-right' | Vị trí của status indicator                              |
| badge          | ReactNode                                                                  | undefined      | Badge content để hiển thị                                |
| badgeProps     | object                                                                     | {}             | Props cho badge element                                  |
| loading        | boolean                                                                    | false          | Show skeleton loader thay vì avatar                      |
| onClick        | function                                                                   | undefined      | Click handler                                            |
| onError        | function                                                                   | undefined      | Error handler khi image fails to load                    |
| className      | string                                                                     | ''             | Custom CSS classes                                       |
| showFallback   | boolean                                                                    | true           | Allow fallback to initials/icon khi image fails          |
| style          | CSSProperties                                                              | {}             | Custom inline styles                                     |
| title          | string                                                                     | undefined      | HTML title attribute (tooltip text)                      |
| as             | ElementType                                                                | 'span'         | Element type to render                                   |
| initials       | string                                                                     | undefined      | Force specific initials thay vì auto-generated từ name   |

### AvatarGroup

| Prop         | Type                                     | Default   | Description                                             |
| ------------ | ---------------------------------------- | --------- | ------------------------------------------------------- |
| children     | ReactNode[]                              | undefined | Avatar components to display as a group                 |
| max          | number                                   | 5         | Maximum số avatars hiển thị trước khi overflow          |
| size         | AvatarSize                               | 'md'      | Kích thước cho tất cả avatars trong group               |
| spacing      | 'tight' \| 'normal' \| 'loose' \| number | 'normal'  | Space giữa các avatars                                  |
| borderColor  | string                                   | 'white'   | Border color cho tất cả avatars                         |
| surplus      | 'count' \| 'avatar' \| 'none'            | 'count'   | Cách hiển thị surplus avatars                           |
| surplusLabel | string \| ReactNode                      | undefined | Custom label cho surplus avatar                         |
| direction    | 'row' \| 'row-reverse' \| 'column'       | 'row'     | Direction mà avatars được stacked                       |
| limit        | number                                   | undefined | Maximum avatars được render (khác với max, affects DOM) |
| className    | string                                   | ''        | Custom CSS classes                                      |
| stack        | boolean                                  | true      | Stack avatars với overlap                               |
| overlap      | number \| string                         | '0.3em'   | Amount of overlap giữa avatars                          |
| showTooltip  | boolean                                  | false     | Show tooltips khi hover avatar                          |
| onClick      | function                                 | undefined | Click handler cho avatar group                          |

### AvatarBadge

| Prop        | Type                                                         | Default        | Description                              |
| ----------- | ------------------------------------------------------------ | -------------- | ---------------------------------------- |
| size        | 'xs' \| 'sm' \| 'md' \| 'lg'                                 | 'md'           | Kích thước của badge                     |
| color       | string                                                       | 'green.500'    | Background color cho badge               |
| borderColor | string                                                       | 'white'        | Border color xung quanh badge            |
| placement   | 'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left' | 'bottom-right' | Vị trí của badge                         |
| borderWidth | number \| string                                             | '0.2em'        | Kích thước của border xung quanh badge   |
| children    | ReactNode                                                    | undefined      | Content của badge (text hoặc icon)       |
| className   | string                                                       | ''             | Custom CSS classes                       |
| boxSize     | number \| string                                             | undefined      | Override kích thước của badge            |
| dot         | boolean                                                      | false          | Render badge như simple dot (no content) |

## Mô tả giao diện

### Avatar

Avatar component là một hình tròn hoặc hình vuông hiển thị hình ảnh đại diện của người dùng. Kích thước mặc định là medium (40px × 40px).

**Image Avatar**: Khi cung cấp `src`, component hiển thị hình ảnh đó, cropped và centered để fit vào container. Hình ảnh được optimized cho không gian hiển thị, với proper object-fit để tránh stretching.

**Initial Avatar**: Khi không có `src` hoặc image loading fails (và `showFallback=true`), component hiển thị 1-2 chữ cái initials của tên người dùng (`name`). Initials được center horizontally và vertically, với font size tương ứng với kích thước của avatar. Background color được tự động generate dựa trên `name` để tạo màu nhất quán cho mỗi người dùng.

**Icon Avatar**: Khi không có `name` và `src`, component hiển thị generic user icon. Icon được scaled phù hợp với kích thước avatar.

Status indicators hiển thị như small colored dots ở góc (mặc định là bottom-right), với màu sắc tương ứng với status:

- Online: Green
- Busy: Red
- Away: Yellow
- Offline/Invisible: Gray

Borders là optional, mặc định là 2px solid white, tạo separation giữa avatar và background, đặc biệt hữu ích trong avatar groups.

### AvatarGroup

AvatarGroup hiển thị một collection của avatars với overlap style để tiết kiệm không gian. Mặc định, avatars overlap với nhau khoảng 30%, với z-index tăng dần từ trái sang phải (hoặc ngược lại tùy theo `direction`).

Khi số lượng avatars vượt quá `max`, component hiển thị một "surplus" avatar ở cuối với format "+N" để indicate có thêm N avatars không được hiển thị. Surplus avatar có background color neutral và text color contrasting.

AvatarGroup tự động áp dụng borders cho tất cả children avatars để ensure visual separation giữa overlapping avatars, tạo clean look khi avatars có contrasting colors.

### AvatarBadge

AvatarBadge hiển thị một small indicator attached to avatar. Mặc định là small circle (dot) với border, positioned ở corner của avatar.

Badges thích ứng theo kích thước của parent avatar, nhưng luôn maintain minimum touch target size cho interactive badges. Với content, badges auto-size để accommodate nội dung trong khi vẫn giữ circular/pill shape.

## Lưu ý quan trọng

- **Accessibility**: Luôn provide meaningful `alt` text cho image avatars. Ensure interactive avatars có proper ARIA attributes và keyboard navigation support.

- **Performance**: Optimize avatar images, consider using WebP format và multiple sizes cho responsive loading. Implement lazy loading cho avatars không trong viewport.

- **Internationalization**: Avatar initials generation nên handle non-Latin scripts properly. Consider cultural differences trong avatar usage và representation.

- **Image Handling**: Implement proper error handling cho broken images. Consider pre-loading critical avatars và cache management.

- **Responsive Behavior**: Avatars nên scale appropriately trên different screen sizes. Group avatars có thể collapse to show fewer items trên small screens.

- **User Privacy**: Respect user privacy settings về avatar visibility. Consider implementing privacy-aware loading patterns.

- **Default Avatars**: Provide professionally designed default avatars cho users chưa upload avatar image. Random colors cho initial avatars nên visually pleasant và accessible.

- **Border Usage**: Borders are important khi avatars displayed trên varying backgrounds hoặc trong groups. Ensure border color works with both light/dark modes.

- **Avatar Storage**: Store và serve avatars từ CDN cho better performance. Implement proper caching headers.

- **Skeleton States**: Show skeleton placeholders during avatar loading, especially cho large avatar displays.

- **Avatar Cropping**: When implementing avatar uploads, provide crop tools để users có thể adjust focus area của avatar image.

- **Group Aggregation**: Trong lists với nhiều participants, consider grouping avatars by relevance rather than just showing first N.

- **Badge Clarity**: Ensure badges are clearly visible nhưng không overwhelm avatar. Adjust badge size proportionally với avatar size.

- **Avatar Interactions**: Make interactive behaviors (clickable, hoverable) visually evident through subtle UI cues.

- **Touch Targets**: Ensure avatars used as interactive elements có adequate touch target size (minimum 44×44px) cho mobile users.

- **Error States**: Handle cases where avatar data is incomplete hoặc corrupted. Implement fallbacks at multiple levels.

- **Consistency**: Maintain consistent avatar usage patterns across platform to build familiar experience.

- **Loading Priority**: Prioritize loading avatars trong primary UI areas trước areas requiring scrolling to view.

- **Color Generation**: Algorithmic color generation cho initial avatars nên produce enough variation while avoiding too light/dark colors.

- **Print Styling**: Consider how avatars render trong print media và adjust styles accordingly.
