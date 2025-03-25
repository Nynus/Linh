# Skeleton & Loader Components

## Mô tả

Skeleton và Loader Components là các thành phần UI dùng để biểu thị trạng thái loading và cung cấp feedback trực quan cho người dùng khi hệ thống đang xử lý dữ liệu hoặc thực hiện các tác vụ không đồng bộ. Trong nền tảng NyNus, các components này đóng vai trò quan trọng trong việc duy trì một UI phản hồi và engaging, giảm thiểu cảm giác chờ đợi và cải thiện perceived performance. Chúng cung cấp visual placeholders cho nội dung đang được tải, giúp giảm layout shifts và tạo ra một trải nghiệm mượt mà hơn. Hệ thống loader của NyNus bao gồm nhiều loại feedback loading khác nhau - từ các skeleton screens mô phỏng nội dung sắp xuất hiện, đến các spinners và progress bars cho tác vụ nặng hơn, tất cả đều được thiết kế để hoạt động hiệu quả trong các contexts khác nhau, từ page loading đến form submissions, từ component loading đến background processes.

## Loại

- **Static Components** (không có animation, thường là skeleton placeholders)
- **Animated Components** (có motion để tạo visual interest và feedback)
- **Interactive Components** (có thể tương tác, như progress bars có cancel buttons)
- **Client Components** (animation và interactivity yêu cầu client-side code)
- **Server-Generated Skeletons** (có thể render ngay từ server cho LCP tốt hơn)
- **Contextual Loaders** (thích ứng với ngữ cảnh hiển thị)
- **Inline Loaders** (nhúng trực tiếp vào UI hiện tại)
- **Overlay Loaders** (hiển thị trên nền đè lên UI hiện tại)

## Variants

### Skeleton UI

- **Text Skeleton**: Giả lập text blocks, paragraphs, headings
- **Card Skeleton**: Giả lập card layouts với image và text
- **List Skeleton**: Giả lập lists và tables
- **Profile Skeleton**: Giả lập user profile layouts
- **Form Skeleton**: Giả lập input fields và form layouts
- **Mixed Content Skeleton**: Giả lập layouts phức tạp với nhiều loại nội dung

### Spinners & Circular Loaders

- **Simple Spinner**: Spinner đơn giản cho inline loading
- **Circular Progress**: Hiển thị tiến trình dạng vòng tròn
- **Branded Spinner**: Spinner được customized theo brand
- **Dot Loader**: Animated dots cho subtle loading indicators
- **Icon Spinner**: Icon với rotation animation

### Progress Indicators

- **Linear Progress**: Horizontal progress bar
- **Indeterminate Progress**: Progress bar không có specific progress value
- **Determinate Progress**: Progress bar với percentage clearly shown
- **Step Progress**: Hiển thị progress qua multiple steps
- **Upload Progress**: Specialized cho file uploads với percentage

### Interactive Loaders

- **Cancelable Progress**: Progress with cancel option
- **Pausable Progress**: Progress có thể pause
- **Retry Loader**: Loader có retry option khi failed
- **Contextual Loading**: Loader thể hiện context của tác vụ
- **Smart Loading**: Điều chỉnh loại loading dựa trên predicted time

### Special Loading Patterns

- **Lazy Loading**: Cho media và components
- **Incremental Loading**: Loading content theo chunks
- **Infinite Scroll Loading**: Loader cho endless scrolling
- **Coordinated Loading**: Multiple components loading với cùng timing
- **Staggered Loading**: Content loading theo sequence
- **Pull-to-Refresh**: Mobile-specific refreshing pattern

## Prompt chi tiết

```
Thiết kế một hệ thống Skeleton và Loader Components toàn diện và có tính nhất quán cao cho nền tảng học tập NyNus. Loading states là khoảnh khắc quan trọng trong user experience, và việc thiết kế các loading indicators trực quan, informative và pleasing là critical để duy trì engagement và minimize perceived waiting time. Hệ thống này cần cung cấp đa dạng loading experiences tuỳ thuộc vào context, expected duration, và information availability.

1. Loading Philosophy & Principles:
   - Immediate feedback cho mọi user action
   - Content-aware loading patterns
   - Minimizing content jumps/layout shifts
   - Realistic timing expectations
   - Branded loading experiences
   - Hierarchy of loading states (subtle → obvious)
   - Informative loading khi có thể
   - Opportunistic và progressive loading
   - Animation subtlety để avoid excessive distraction
   - Consistency across platform
   - Appropriate use cho different loading times (short vs long)
   - Responsiveness trong loading states

2. Skeleton UI System:
   - Content-mirroring skeletons với realistic shapes
   - Appropriate sizing để match actual content
   - Animation subtle pulse/shimmer effect
   - Nested component skeletons
   - Semantic structure (headings, text, images)
   - Responsive behavior identical to loaded content
   - Light/dark mode variants
   - Common layout patterns pre-built (list, card, profile)
   - Composition system cho complex layouts
   - Performance-optimized animations
   - Low-fidelity to high-fidelity variations
   - Consideration cho repeat patterns (lists, grids)

3. Spinner & Circular Loaders:
   - Minimalist design cho simplicity
   - Scale variations (xs, sm, md, lg, xl)
   - Animation smoothness và timing
   - Color customization options
   - Brand alignment
   - Determinate và indeterminate variants
   - Contrast levels để work trên different backgrounds
   - Centered và inline positioning
   - Standalone và overlay modes
   - Optional labels và context
   - Accessible motion considerations
   - Reduced motion alternatives

4. Progress Indicators:
   - Linear progress bars với smooth updates
   - Determinate progress với accurate percentage
   - Indeterminate progress cho unknown durations
   - Segmented progress cho multi-step operations
   - Color coding cho status (normal, success, warning, error)
   - Size variants cho different contexts
   - Optional text labels (percentage, step descriptions)
   - Animation subtlety tuning
   - Placement options (top, inline, overlay)
   - Interactive elements (cancel, pause)
   - Edge case handling (slow progress, stuck states)
   - Multi-operation aggregation

5. Contextual Loading Patterns:
   - Button loading states
   - Form submission loading
   - Page transition loading
   - Media loading (images, videos)
   - Data fetching indicators
   - Search loading states
   - List và infinite scroll loading
   - Initial app loading
   - Background task indicators
   - Section refresh loading
   - Partial updates loading
   - Authentication loading

6. Animation & Motion Design:
   - Consistent timing và easing curves
   - Subtle, non-distracting animations
   - Purpose-driven motion (không chỉ decorative)
   - Looping smoothness
   - Progressive enhancement cho animation
   - Reduced motion support
   - Performance optimization (không gây jank)
   - Hardware acceleration khi thích hợp
   - Battery/resource considerations cho mobile
   - Coordinated animations khi multiple elements loading
   - Staggered effect cho sequential loading
   - Entry và exit animations

7. Loading Strategy & UX:
   - Minimum display time (avoid flashing)
   - Maximum waiting time before feedback escalation
   - Skeleton-to-spinner transitions cho long waits
   - Heuristics về khi nào dùng mỗi loader type
   - Loading priority system
   - Handling errors during loading
   - Retry mechanisms
   - Background loading patterns
   - Preloading strategies
   - Progressive loading (hiển thị data khi có)
   - Optimistic UI updates khi thích hợp
   - Loading state persistence across navigations

8. Accessibility Considerations:
   - ARIA roles và attributes (aria-busy, aria-live)
   - Screen reader announcements
   - Non-animation fallbacks
   - Keyboard accessibility during loading
   - Focus management
   - Color contrast cho loading elements
   - Motion sensitivity accommodations
   - Appropriate text alternatives
   - Progress communication cho assistive technology
   - Timeout notifications
   - Keyboard interruption của loading processes
   - Reduced motion preferences support

9. Technical Implementation:
   - React Suspense integration
   - Server-side rendering support
   - Static generation compatibility
   - Minimal bundle size impact
   - Code splitting friendly
   - Lazy loading integration
   - CSS-only variants khi có thể
   - Animation performance optimization
   - Prop-based customization
   - Composition với other components
   - Reusable loading hooks/utilities
   - Context-based loading state management

10. System Integration:
    - Automatic loading detection khi có thể
    - Global loading state management
    - Route change loading integration
    - API request loading coordination
    - Form submission integration
    - Integration với error boundaries
    - Timeout handling
    - Caching considerations
    - Integration với data fetching utilities
    - Component-specific loading states
    - Loading hierarchies (page → section → component)
    - Interactive element loading states

11. Special Loading Scenarios:
    - First contentful paint optimization
    - Complex data visualization loading
    - Heavy media loading (videos, large images)
    - Background processing feedback
    - Login/authentication processes
    - Multi-step processes
    - File upload/download progress
    - Long-running operations
    - Operation with unknown completion time
    - Real-time data updates
    - Geolocation và permission-based operations
    - Critical vs. non-critical loading distinction

12. Responsive & Platform Considerations:
    - Mobile-specific loading patterns
    - Touch feedback during loading
    - Viewport-based sizing adjustments
    - Orientation changes during loading
    - Low-bandwidth adaptation
    - Offline loading states
    - Device performance adaptation
    - Native-feeling loading on mobile platforms
    - Pull-to-refresh integration
    - Connection-aware loading
    - Progressive enhancement approach
    - Graceful degradation strategy

Skeleton và Loader components trong NyNus platform nên cung cấp một hệ thống toàn diện để handle tất cả loading scenarios mà vẫn giữ được tính nhất quán, đảm bảo users luôn biết system đang làm gì và cần bao lâu để complete. Loading không chỉ là functional necessity mà còn là opportunity để demonstrate brand personality và commitment to user experience. Timing, animation, và visual design của loaders cần được fine-tuned để feel "just right" - không quá intrusive nhưng cũng không quá subtle đến mức unnoticeable.
```

## Props và API

### Skeleton

| Prop                | Type                                                                                        | Default            | Description                                               |
| ------------------- | ------------------------------------------------------------------------------------------- | ------------------ | --------------------------------------------------------- |
| variant             | 'text' \| 'circular' \| 'rectangular' \| 'card' \| 'avatar' \| 'list' \| 'form' \| 'custom' | 'text'             | Phong cách của skeleton                                   |
| width               | string \| number                                                                            | '100%'             | Chiều rộng của skeleton                                   |
| height              | string \| number                                                                            | Depends on variant | Chiều cao của skeleton                                    |
| animation           | 'pulse' \| 'wave' \| 'none'                                                                 | 'pulse'            | Animation style của skeleton                              |
| className           | string                                                                                      | ''                 | Custom CSS classes                                        |
| count               | number                                                                                      | 1                  | Số lượng skeleton items (cho list variants)               |
| circle              | boolean                                                                                     | false              | Shorthand để render circular skeleton                     |
| rounded             | boolean \| string                                                                           | false              | Border radius (true=default radius, string=custom radius) |
| children            | ReactNode                                                                                   | undefined          | Content thay thế khi không còn loading                    |
| isLoaded            | boolean                                                                                     | false              | Khi true, hiển thị children thay vì skeleton              |
| showAfter           | number                                                                                      | 0                  | Chỉ hiển thị skeleton sau X milliseconds                  |
| fitContent          | boolean                                                                                     | false              | Skeleton tự điều chỉnh theo content size                  |
| speed               | number                                                                                      | 2                  | Tốc độ animation (seconds)                                |
| inline              | boolean                                                                                     | false              | Render dạng inline block                                  |
| preserveAspectRatio | boolean                                                                                     | false              | Giữ tỉ lệ khung hình khi resize                           |

### Spinner

| Prop          | Type                                           | Default   | Description                                          |
| ------------- | ---------------------------------------------- | --------- | ---------------------------------------------------- |
| size          | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number | 'md'      | Kích thước của spinner                               |
| color         | string                                         | 'primary' | Màu sắc của spinner                                  |
| speed         | number                                         | 1.5       | Tốc độ quay (seconds per rotation)                   |
| thickness     | number \| string                               | '2px'     | Độ dày của spinner line                              |
| label         | string                                         | undefined | Accessible label cho spinner                         |
| labelPosition | 'top' \| 'bottom' \| 'left' \| 'right'         | 'bottom'  | Vị trí của text label                                |
| className     | string                                         | ''        | Custom CSS classes                                   |
| variant       | 'border' \| 'dots' \| 'grow' \| 'custom'       | 'border'  | Visual style của spinner                             |
| fillParent    | boolean                                        | false     | Khi true, spinner sẽ center và fill parent container |
| overlay       | boolean                                        | false     | Render như overlay với background scrim              |
| transparent   | boolean                                        | false     | Transparent background cho overlay mode              |

### Progress

| Prop          | Type                                               | Default      | Description                               |
| ------------- | -------------------------------------------------- | ------------ | ----------------------------------------- |
| value         | number                                             | undefined    | Current progress value (0-100)            |
| max           | number                                             | 100          | Maximum value                             |
| indeterminate | boolean                                            | undefined    | Khi true, hiển thị indeterminate progress |
| size          | 'xs' \| 'sm' \| 'md' \| 'lg' \| number             | 'md'         | Kích thước của progress bar               |
| variant       | 'line' \| 'circle' \| 'semicircle'                 | 'line'       | Shape của progress indicator              |
| color         | string                                             | 'primary'    | Màu sắc của filled portion                |
| trackColor    | string                                             | 'gray.100'   | Màu sắc của unfilled track                |
| radius        | number                                             | undefined    | Border radius (cho line variant)          |
| thickness     | number \| string                                   | undefined    | Độ dày của progress bar/circle            |
| showValue     | boolean                                            | false        | Hiển thị numerical value                  |
| valueFormat   | (value: number) => string                          | v => `${v}%` | Format hiển thị của value                 |
| label         | string                                             | undefined    | Accessible text label                     |
| labelPosition | 'top' \| 'bottom' \| 'left' \| 'right' \| 'inside' | 'bottom'     | Vị trí của text label                     |
| animate       | boolean                                            | true         | Enable/disable animation                  |
| transition    | string                                             | '0.4s ease'  | CSS transition cho value changes          |
| className     | string                                             | ''           | Custom CSS classes                        |
| striped       | boolean                                            | false        | Hiển thị striped pattern                  |
| animated      | boolean                                            | false        | Animate stripes (khi striped=true)        |

### LoadingOverlay

| Prop               | Type                 | Default   | Description                                              |
| ------------------ | -------------------- | --------- | -------------------------------------------------------- |
| isLoading          | boolean              | false     | Control visibility của overlay                           |
| spinner            | ReactNode \| boolean | true      | Custom spinner hoặc boolean để show/hide default spinner |
| text               | string               | undefined | Text hiển thị với spinner                                |
| blur               | number \| string     | '2px'     | Blur amount cho content bên dưới                         |
| opacity            | number               | 0.6       | Opacity của overlay background                           |
| color              | string               | 'white'   | Màu nền của overlay                                      |
| zIndex             | number               | 50        | z-index của overlay                                      |
| className          | string               | ''        | Custom CSS classes                                       |
| transitionDuration | number               | 300       | Duration của fade animation (ms)                         |
| onClick            | function             | undefined | Handler cho click events                                 |
| onEscapeKey        | function             | undefined | Handler khi nhấn Escape key                              |
| closeOnClick       | boolean              | false     | Đóng overlay khi click                                   |
| closeOnEsc         | boolean              | false     | Đóng overlay khi nhấn Escape                             |

### LoadingButton

| Prop             | Type                         | Default   | Description                  |
| ---------------- | ---------------------------- | --------- | ---------------------------- |
| isLoading        | boolean                      | false     | Set button vào loading state |
| loadingText      | string                       | undefined | Text hiển thị khi loading    |
| spinner          | ReactNode                    | undefined | Custom spinner element       |
| spinnerPlacement | 'start' \| 'end'             | 'start'   | Vị trí của spinner           |
| className        | string                       | ''        | Custom CSS classes           |
| disabled         | boolean                      | false     | Disable button               |
| spinnerSize      | 'xs' \| 'sm' \| 'md' \| 'lg' | 'sm'      | Kích thước của spinner       |
| ...              | ...                          | ...       | Inherits all Button props    |

## Mô tả giao diện

### Skeleton UI

Skeleton UI components tạo ra placeholders mô phỏng layout của content sắp được load. Mỗi variant được thiết kế để trông giống với content type tương ứng:

- **Text Skeleton**: Gray rounded bars với chiều cao phù hợp với font size của text đang được mô phỏng. Khi rendering multiple lines, mỗi line có length hơi khác nhau (90-100% width) để trông realistic hơn, và line cuối thường ngắn hơn.

- **Card Skeleton**: Rectangular container với image placeholder ở trên (thường cao hơn), và text placeholders ở dưới, thường có 1 line "heading" (shorter, thicker) và 2-3 lines "body text" ở dưới.

- **List Skeleton**: Repeating pattern của rows, mỗi row có combinaison của text, image, hoặc action placeholders, separated bởi subtle dividers. Prop `count` controls số lượng items.

- **Avatar/Circle Skeleton**: Perfect circle với kích thước tùy chỉnh, thường được dùng cho profile pics và icons.

- **Form Skeleton**: Placeholder cho form fields, bao gồm boxes cho inputs, occasional circle placeholders cho radio/checkboxes, và rectangular buttons.

Animation thường là `pulse` (opacity fading in/out) hoặc `wave` (gradient that moves from left to right), tất cả đều subtle để không gây distraction.

### Spinners & Circular Loaders

Spinners là compact loading indicators, thiên về animation hơn content-mirroring:

- **Border Spinner**: Thin circular border với một phần được highlighted, spinning để tạo illusion của motion. Available trong nhiều sizes từ tiny (16px) đến large (48px). Tốc độ quay medium (1.5-2s per rotation).

- **Growing Spinner**: Animated circle that grows và fades in/out trong circular pattern, slightly more subtle than border spinner.

- **Dot Spinner**: Series of dots (thường 3-4 dots) that pulsate hoặc move up/down in sequence, thích hợp cho locations where vertical space limited.

Spinners thường single-color, inheriting theme colors, với focus vào subtle motion rather than drawing excessive attention.

### Progress Indicators

Progress Indicators biểu thị tiến trình của long-running tasks:

- **Linear Progress**: Horizontal bar filled từ trái sang phải as operation progresses. Fixed height (usually 4-8px), full width của container. Progress portion có màu primary theme color, unfilled portion là subtle gray.

- **Circular Progress**: Ring filled theo chiều kim đồng hồ, with optional percentage in center. Size based on context, từ compact (24px) đến larger indicators (64px+).

Determinate progress shows actual percentage with fill animation, trong khi indeterminate dùng animated patterns (gradient moving, pulsing animation) để indicate activity without specific progress amount.

### Loading Overlays

Overlays cover content being updated, preventing interactions và clearly indicating system is busy:

- Semi-transparent scrim (50-70% opacity) covers affected area
- Centered spinner, có thể kèm theo text message
- Optional subtle blur effect (2-3px) applied to content bên dưới
- Fade in/out animation when appearing/disappearing

### Loading Buttons

Khi buttons trong loading state:

- Spinner appears (thường bên trái của text)
- Button remains fixed width (không shrink or grow)
- Button text có thể thay đổi (e.g., "Save" → "Saving...")
- Button appears slightly faded/disabled
- Click functionality disabled

## Lưu ý quan trọng

- **Timing Considerations**: Hiển thị skeletons immediately, nhưng consider delaying spinners 300-500ms cho short operations để tránh gây flash
- **Consistency**: Sử dụng cùng một loại loader cho cùng một use case trên toàn app
- **Layout Shifts**: Thiết kế skeletons để match kích thước của actual content, minimizing layout shifts khi content loads
- **Animation Subtlety**: Giữ animations understated để tránh gây distraction hoặc motion sickness
- **Meaningful Progress**: Luôn cho determinate progress khi có thể, indeterminate chỉ khi không biết chính xác tiến độ
- **Accessibility**: Đảm bảo loading states được announced thích hợp cho screen readers và có alternatives cho animations
- **Reduced Motion**: Respect prefers-reduced-motion media query, providing less animated alternatives
- **Loading Hierarchy**: Define rõ ràng khi nào dùng page-level, component-level, hay inline loading indicators
- **Timeout Handling**: Have fallbacks và retry options cho operations kéo dài quá expected time
- **Perceived Performance**: Skeleton screens cải thiện perceived performance hơn là spinners
- **User Control**: Cho phép cancel, pause hoặc skip long-running operations khi có thể
- **Performance Impact**: Watch out cho costly animations during loading states, đặc biệt trên low-end devices
- **Coordinated Loading**: Consider how multiple loading elements interplay khi hiển thị cùng nhau
- **Micro-feedback**: Subtle loading indicators (như tiny spinner trong button) better cho micro-interactions
- **Error States**: Define cách chuyển từ loading sang error states một cách clear và actionable
- **Hybrid Approaches**: Sometimes mix skeleton với real content khi data loads partially
- **Priority Loading**: Critical content nên load & hiển thị trước non-critical elements
- **Testing**: Test loading states với different network conditions và device capabilities
- **Mobile Considerations**: Adjust loading patterns cho touch interfaces và variable network conditions
- **Contextual Appropriateness**: Sử dụng right loader cho từng context (e.g., subtle loaders cho background tasks)
- **Edge Cases**: Handle edge cases như very quick loads (<300ms) và very long loads (>10s)
