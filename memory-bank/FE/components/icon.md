# Icon Components

## Mô tả

Icon Components là các thành phần UI thị giác dùng để biểu thị các hành động, trạng thái, và khái niệm một cách trực quan trong nền tảng NyNus. Icons đóng vai trò quan trọng trong việc tăng cường khả năng nhận diện và sử dụng của interface, cung cấp các gợi ý trực quan giúp người dùng hiểu và tương tác với hệ thống một cách nhanh chóng và hiệu quả. Hệ thống Icon của NyNus cung cấp một bộ icon nhất quán được thiết kế đặc biệt cho nền tảng học tập, với các biểu tượng phản ánh các khái niệm giáo dục, hành động điều hướng, trạng thái hệ thống, và nhiều tính năng khác. Các icons này được thiết kế để hoạt động hiệu quả ở nhiều kích thước khác nhau, đảm bảo tính nhận diện trên cả desktop và mobile, cùng với sự tối ưu cho hiệu suất và khả năng tiếp cận.

## Loại

- **Server Components** (SVG icons có thể được render ở server)
- **Client Components** (khi cần animation, dynamic states)
- **SVG-based** (vector graphics cho clarity ở mọi kích thước)
- **Optimized Icons** (compressed, minimal, semantic SVG code)
- **Scalable** (thích ứng với nhiều kích thước)
- **Themeable** (thay đổi color theo theme, context)
- **Accessible** (bao gồm ARIA attributes khi cần)

## Variants

### Theo Category

- **Navigation Icons**: Arrows, chevrons, hamburger menu, home, search
- **Action Icons**: Add, edit, delete, save, upload, download
- **State Icons**: Success, error, warning, info, loading
- **Education Icons**: Book, course, certificate, question, quiz
- **Communication Icons**: Message, notification, comment, share
- **UI Control Icons**: Close, expand, collapse, filter, sort
- **Social Icons**: Facebook, Twitter, LinkedIn, YouTube
- **File/Media Icons**: Document, image, video, audio
- **User Interface Icons**: User, settings, dashboard, calendar
- **Domain-specific Icons**: Learning, assessment, achievements

### Theo Style

- **Outline**: Thin stroke, no fill
- **Solid**: Filled shapes
- **Duotone**: Two-tone design
- **Colorful**: Multi-color icons
- **Animated**: Motion-based icons

### Theo Size

- **XS**: Extra small (12x12px)
- **SM**: Small (16x16px)
- **MD**: Medium (20x20px)
- **LG**: Large (24x24px)
- **XL**: Extra large (32x32px)
- **2XL**: Double extra large (48x48px)

## Prompt chi tiết

```
Thiết kế một hệ thống Icon Components toàn diện và có tính nhất quán cao cho nền tảng học tập NyNus. Icons đóng vai trò quan trọng trong việc cung cấp visual cues, làm enhence navigation, và truyền tải thông tin một cách nhanh chóng và hiệu quả. Hệ thống icon cần balance giữa visual appeal, chức năng rõ ràng, và hiệu suất kỹ thuật, đồng thời đảm bảo tính nhất quán và khả năng tiếp cận trên toàn nền tảng.

1. Visual Style & Design Language:
   - Thiết kế icons với style nhất quán phù hợp với brand của NyNus
   - Sử dụng grid system (24x24 hoặc 16x16) để đảm bảo proportion và alignment
   - Visual weight balanced và nhất quán trên toàn bộ icon set
   - Stroke width đồng nhất (1-2px tuỳ theo size)
   - Corner radius nhất quán cho các rounded elements
   - Simplified silhouettes với minimal detail, nhưng vẫn recognizable
   - Negative space sử dụng hiệu quả
   - Phong cách thể hiện specific cho nền tảng học tập
   - Optically balanced icons (không chỉ mathematically centered)
   - Brand-specific touches mà không làm giảm khả năng nhận diện

2. Icon Categories & Coverage:
   - Navigation: Đủ icons cho global và section navigation
   - Actions: Icons cho mọi common user actions trong platform
   - States: Clear visual indicators cho states khác nhau
   - Education-specific: Icons phù hợp với context học tập
   - User interface: UI controls, form elements, interactions
   - Objects/Content types: Biểu thị các loại nội dung khác nhau
   - Feedback & notifications: Alert, success, error, etc.
   - Social & sharing: Integration với social platforms
   - Domain-specific: Concepts liên quan đến learning platform
   - System utilities: Settings, preferences, tools

3. Implementation & Architecture:
   - SVG-based với semantic markup
   - Single React component với strong typing
   - Prop-based customization cho size, color, và variants
   - Consistent export pattern
   - Multiple import methods (individual, bundled)
   - Integration với Tailwind CSS
   - Optimized SVG cho performance
   - Server Component friendly
   - Support cho icon state changes
   - Lazy-loading strategy cho large icon sets

4. Size System:
   - Consistent sizing scale (xs, sm, md, lg, xl, 2xl)
   - Pixel-perfect rendering tại mỗi size
   - Automatic scaling của stroke-width & details theo size
   - Size-specific variants khi cần
   - Responsive behavior trong different contexts
   - Minimum touch target size cho mobile (44x44px area)
   - Viewport-based responsive sizing
   - Size proportions between related icons
   - Fine-tuning cho optical alignment tại mỗi size
   - Guidelines cho sizing trong different contexts

5. Color System:
   - Default theme integration
   - Current color inheritance
   - Multi-color support cho complex icons
   - Color variations cho states (hover, active, disabled)
   - Contextual coloring (success, error, warning, info)
   - Accessible contrast với backgrounds
   - Color transitions cho animated icons
   - Dark/light mode adaptive colors
   - Brand color integration
   - Transparent/opacity considerations

6. Accessibility Features:
   - ARIA attributes integration (aria-hidden cho decorative)
   - Alternative text cho semantic icons
   - Focus states cho interactive icons
   - Sufficient contrast ratios
   - Meaningful icons với clear purpose
   - Size guidelines cho visibility
   - Keyboard navigation support
   - Screen reader considerations
   - Color không là sole indicator cho meaning
   - Touch target sizing cho motor impairments

7. Usage Patterns & Components:
   - Button với icon (icon-only, icon+text, leading, trailing)
   - Input với icon (prefix, suffix, action)
   - Navigation với icons
   - Lists với icons
   - Cards với icons
   - Notifications với status icons
   - Badges với icons
   - Alerts với icons
   - Modal/dialog icons
   - Tooltips với icons

8. Technical Optimizations:
   - SVG optimization (removed unnecessary paths/attributes)
   - Consistent viewBox attributes
   - Properly namespaced IDs
   - CSS inheritance cho styling
   - Bundle size considerations
   - Tree-shaking compatibility
   - Sprite techniques cho performance
   - Caching strategy
   - Performance metrics và budgets
   - Lazy loading patterns

9. Animation & Interactive States:
   - Guidelines cho icon animations
   - Transition effects
   - Loading/spinner variants
   - Interactive state changes
   - Microinteractions
   - Animation timing consistency
   - Performance considerations cho animations
   - Reduced motion support
   - Purpose-driven animations (không chỉ decorative)
   - State transitions

10. Documentation & Guidelines:
    - Clear naming conventions
    - Usage guidelines cho mỗi icon
    - Context-specific recommendations
    - Pairing suggestions
    - Technical implementation guidelines
    - Accessibility best practices
    - Size và color recommendations
    - Anti-patterns to avoid
    - Icon search và discovery tools
    - Custom icon creation guidelines

11. Management & Workflow:
    - Version control cho icon set
    - Update process
    - Deprecation guidelines
    - Request process cho new icons
    - Design-to-development workflow
    - Quality assurance checks
    - Audit processes
    - Performance monitoring
    - Usage analytics
    - Feedback mechanisms

Icon system trong NyNus platform nên provide một visual language nhất quán, giúp users navigate và interact với platform một cách trực quan và hiệu quả. System này nên bao gồm đủ icons cho mọi feature và function, nhưng vẫn duy trì tính curated để tránh overwhelming users. Accessibility, performance, và visual consistency là các primary considerations, đảm bảo rằng icons enhance user experience mà không làm giảm usability hoặc loading speed.
```

## Props và API

### Icon Component (Core)

| Prop           | Type                                                    | Default        | Description                                          |
| -------------- | ------------------------------------------------------- | -------------- | ---------------------------------------------------- |
| name           | IconName                                                | undefined      | Tên của icon, reference đến specific icon từ library |
| size           | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| number | 'md'           | Kích thước của icon                                  |
| color          | string                                                  | 'currentColor' | Màu của icon (CSS color hoặc token)                  |
| className      | string                                                  | ''             | Custom CSS classes                                   |
| variant        | 'outline' \| 'solid' \| 'duotone'                       | 'outline'      | Style variant của icon                               |
| ariaLabel      | string                                                  | undefined      | ARIA label cho accessibility                         |
| ariaHidden     | boolean                                                 | undefined      | Ẩn khỏi screen readers (cho decorative icons)        |
| strokeWidth    | number                                                  | undefined      | Custom stroke width (chỉ cho outline icons)          |
| style          | CSSProperties                                           | {}             | Custom inline styles                                 |
| role           | string                                                  | undefined      | ARIA role                                            |
| secondaryColor | string                                                  | undefined      | Secondary color cho duotone icons                    |
| onClick        | function                                                | undefined      | Click handler cho interactive icons                  |
| onMouseEnter   | function                                                | undefined      | Mouse enter handler                                  |
| onMouseLeave   | function                                                | undefined      | Mouse leave handler                                  |

### IconButton

| Prop         | Type                                             | Default   | Description                                       |
| ------------ | ------------------------------------------------ | --------- | ------------------------------------------------- |
| icon         | IconName \| ReactNode                            | undefined | Icon để display                                   |
| size         | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'             | 'md'      | Kích thước của button và icon                     |
| variant      | 'primary' \| 'secondary' \| 'outline' \| 'ghost' | 'primary' | Style variant của button                          |
| ariaLabel    | string                                           | undefined | Accessible label (required cho icon-only buttons) |
| children     | ReactNode                                        | undefined | Text content (optional, for text+icon buttons)    |
| iconPosition | 'left' \| 'right'                                | 'left'    | Position của icon khi có text                     |
| tooltip      | string                                           | undefined | Tooltip text hiển thị on hover                    |
| disabled     | boolean                                          | false     | Disabled state                                    |
| loading      | boolean                                          | false     | Loading state (shows spinner)                     |
| color        | string                                           | undefined | Override cho icon color                           |
| className    | string                                           | ''        | Custom CSS classes                                |
| onClick      | function                                         | undefined | Click handler                                     |

### IconRegistry

| Prop      | Type                           | Default   | Description                          |
| --------- | ------------------------------ | --------- | ------------------------------------ |
| icons     | Record<string, IconDefinition> | {}        | Custom icons để register             |
| extend    | boolean                        | true      | Extend default icons thay vì replace |
| namespace | string                         | undefined | Namespace cho custom icons           |

### AnimatedIcon

| Prop      | Type                                    | Default       | Description                 |
| --------- | --------------------------------------- | ------------- | --------------------------- |
| name      | IconName                                | undefined     | Tên của icon từ library     |
| animation | 'spin' \| 'pulse' \| 'bounce' \| 'fade' | undefined     | Animation preset            |
| duration  | number                                  | 1000          | Duration của animation (ms) |
| infinite  | boolean                                 | true          | Loop animation vô hạn       |
| paused    | boolean                                 | false         | Pause animation             |
| easing    | string                                  | 'ease-in-out' | CSS easing function         |
| ...       | ...                                     | ...           | Inherits Icon props         |

### IconStack

| Prop      | Type                                          | Default   | Description              |
| --------- | --------------------------------------------- | --------- | ------------------------ |
| children  | ReactNode                                     | undefined | Multiple Icon components |
| size      | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' | 'md'      | Overall size của stack   |
| className | string                                        | ''        | Custom CSS classes       |

## Mô tả giao diện

### Icon (Base Component)

Icon component hiển thị một single icon dựa trên tên được chỉ định, sử dụng SVG được tối ưu hóa. Size mặc định là medium (20x20px viewport, render khoảng 20-24px tùy theo font size).

Outline variant (default) có thin strokes (thường 1.5-2px) với transparent fill, thích hợp cho hầu hết các use cases. Solid variant sử dụng filled shapes với đơn giản hóa, thích hợp cho smaller sizes và stronger visual presence. Duotone variant có hai tông màu (primary và secondary), thích hợp cho icons cần visual distinction giữa các elements.

Icon mặc định kế thừa màu từ text color của parent element (currentColor), nhưng có thể được override. Icons có semantic markup và có thể được styled thông qua CSS, bao gồm hover states và transitions.

### IconButton

IconButton kết hợp Icon với Button component, tạo ra một interactive button với icon. Có thể là icon-only (circular hoặc square với padding) hoặc icon with text (icon đứng bên trái hoặc phải của text).

Size trải dài từ xs (24x24px) đến xl (48x48px) cho icon-only buttons, đảm bảo touch targets đủ lớn trên mobile. IconButton kế thừa styles từ Button system, với các variants như primary (filled), secondary, outline, và ghost.

Hover và active states thay đổi background và icon colors theo design system. Disabled state giảm opacity và loại bỏ interactivity. Loading state thay thế icon bằng spinner trong khi giữ nguyên kích thước và layout.

### IconStack

IconStack cho phép composing nhiều icons để tạo ra more complex visual indicators. Ví dụ, một icon nền với một icon overlay để chỉ thị status hoặc action.

Giao diện maintains proper sizing và alignment, với primary icon hiển thị ở kích thước đầy đủ và secondary icons được sized và positioned tương đối (thường ở corner hoặc edge của primary icon). Chỉ nên sử dụng cho specific use cases khi một single icon không thể truyền tải đủ thông tin.

### Animated Icon

AnimatedIcon extends base Icon với animation capabilities. Common animations bao gồm:

- **Spin**: Rotation 360 degrees xung quanh center point
- **Pulse**: Subtle scaling up và down
- **Bounce**: Vertical hoặc horizontal motion
- **Fade**: Opacity transitions

Animations should be subtle và purpose-driven, với consistent timing và easing. Loading indicators là common use case cho animated icons, cũng như status transitions hoặc attention-getting indicators.

## Lưu ý quan trọng

- **Nhất quán**: Sử dụng icons một cách nhất quán trong toàn bộ ứng dụng; cùng một hành động nên sử dụng cùng một icon
- **Accessibility**: Luôn provide appropriate ARIA labels cho semantic icons; set `aria-hidden="true"` cho decorative icons
- **Bundle Size**: Sử dụng các téchniques như tree-shaking, SVG sprite sheets, hoặc dynamic imports để giảm bundle size
- **Naming Convention**: Sử dụng naming pattern rõ ràng, descriptive, và cùng kiểu (ví dụ: camelCase hoặc kebab-case)
- **Touch Targets**: Đảm bảo interactive icons có touch target ít nhất 44x44px trên touch devices
- **Color Usage**: Không dựa vào color làm cách duy nhất để truyền tải meaning; cần có visual shape distinctions
- **Responsiveness**: Điều chỉnh icon size dựa vào viewport và container contexts
- **Performance**: Optimize SVGs và limit số lượng icons loaded trên mỗi page
- **Animation**: Sử dụng animation có chủ đích, không chỉ decorative; respect reduced motion preferences
- **Text Pairing**: Khi sử dụng icons với text, đảm bảo alignment và spacing nhất quán
- **Visual Density**: Cẩn thận với việc sử dụng quá nhiều icons gần nhau, có thể tạo visual noise
- **Cultural Contexts**: Lưu ý rằng một số icons có thể có ý nghĩa khác nhau trong các cultures khác nhau
- **Forward Compatibility**: Thiết kế icon system để dễ dàng expand và update trong tương lai
- **Documentation**: Maintain up-to-date icon documentation và usage guidelines
- **Testing**: Test icons trên multiple devices, screen sizes, và browsers
- **Dark Mode**: Đảm bảo icons hiển thị hiệu quả trong cả light và dark mode
- **Framework Agnostic**: Design core SVGs để có thể sử dụng với nhiều frameworks khác nhau
- **Version Control**: Maintain versioning cho icon library để track changes
- **Optimization**: Balance giữa detail và file size; optimize paths và attributes
- **Custom Icons**: Provide guidelines cho adding custom icons consistent với main library
