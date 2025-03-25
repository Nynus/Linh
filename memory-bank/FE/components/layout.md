# Layout Components

## Mô tả

Layout Components là các thành phần UI cơ bản dùng để tổ chức, sắp xếp và định vị nội dung trong giao diện của nền tảng NyNus. Chúng cung cấp một hệ thống layout nhất quán và linh hoạt, cho phép tạo ra các giao diện có cấu trúc tốt, responsive và thích ứng với nhiều kích thước màn hình. Layout components là nền tảng của toàn bộ hệ thống UI, hoạt động như những building blocks cơ bản để xây dựng mọi trang, section và component phức tạp hơn. Từ page layouts rộng lớn đến micro-layouts bên trong các components, các thành phần này cung cấp consistency trong spacing, alignment và organization, đồng thời tuân thủ các nguyên tắc thiết kế responsive và mobile-first của NyNus.

## Loại

- Server Components (đa số là stateless và chỉ xử lý layout)
- Primitive Components (building blocks cơ bản)
- Pattern Components (layout patterns phức tạp hơn)
- Styled Containers (wrappers với styling nhất định)
- Responsive Components (thích ứng với viewport size)
- Utility-based (tận dụng Tailwind CSS cho flexibility)
- Content-aware (có thể điều chỉnh dựa trên content)

## Variants

### Primitive Layouts

- **Box**: Container đơn giản nhất, wrapper cho các elements
- **Flex**: Container với Flexbox layout
- **Grid**: Container với CSS Grid layout
- **Container**: Centered container với max-width và padding
- **Stack**: Vertical hoặc horizontal arrangement với spacing đồng nhất
- **Divider**: Visual separator giữa sections
- **Spacer**: Component tạo space cụ thể
- **Aspect Ratio**: Container duy trì tỷ lệ khung hình cụ thể

### Structural Layouts

- **Page**: Full-page layout với header, footer, và main content
- **Section**: Content section với padding và background nhất định
- **Card Layout**: Card-based content organization
- **Split**: Two-column layout với control over ratio
- **Sidebar**: Main + sidebar layout với multiple configurations
- **Panel**: Full-height panels cho complex applications
- **Tabbed Layout**: Content organization qua tabs

### Special Purpose Layouts

- **Hero**: Full-width section thường ở đầu trang
- **Feature Section**: Layout cho feature showcase
- **Media with Content**: Image/video with accompanying text
- **List Layout**: Vertical hoặc horizontal lists
- **Masonry**: Pinterest-style variable height grid
- **Centered Content**: Horizontally and vertically centered content
- **Overlay**: Content positioned over other content

### Responsive Patterns

- **Mobile-first**: Designed for smallest breakpoint first
- **Responsive Grid**: Thay đổi số columns theo viewport
- **Stacking**: Elements stack vertically on small screens
- **Reordering**: Thay đổi order của elements theo viewport
- **Hidden/Visible**: Show/hide elements dựa trên screen size
- **Responsive Spacing**: Scale spacing theo viewport

## Prompt chi tiết

```
Thiết kế một hệ thống Layout Components toàn diện và có tính nhất quán cao cho nền tảng học tập NyNus. Hệ thống layout đóng vai trò nền tảng cho toàn bộ UI, cung cấp structure, organization và positioning cho tất cả nội dung và components. Thiết kế cần đảm bảo flexibility, maintainability, responsive behavior và accessibility, đồng thời tận dụng tối đa khả năng của NextJS, React và Tailwind CSS.

1. Core Principles:
   - Mobile-first approach với responsive scaling
   - Consistent spacing system (4px/0.25rem increments)
   - Visual rhythm và balance across layouts
   - Logical content hierarchy
   - Clean component API với sensible defaults
   - Extensibility để dễ dàng customize
   - Performance optimization (minimal CSS overhead)
   - Accessibility built-in
   - Maintainability và reusability
   - Support cho RTL languages

2. Box Component:
   - Most basic building block
   - Accepts all styling props
   - Control over margin, padding, borders, colors, etc.
   - Polymorphic (renders as different HTML elements based on props)
   - Semantic markup options
   - Support cho Tailwind class propagation
   - Nesting capability với proper margin collapsing
   - Various display modes (block, inline, inline-block)
   - Directly styleable với theme tokens

3. Container Component:
   - Centered content với max-width constraints
   - Consistent horizontal padding
   - Responsive breakpoints với fluid resizing
   - Optional vertical padding
   - Size variants (sm, md, lg, xl, full)
   - Content type variants (text, wide content, narrow, full-bleed)
   - Nesting support
   - Background customization
   - Optional borders và rounded corners
   - Built-in constraint visualization (optional during development)

4. Flex Component:
   - Full flexbox capabilities với intuitive API
   - Direction control (row, column, row-reverse, column-reverse)
   - Alignment properties (justify-content, align-items, align-content)
   - Gap controls for spacing giữa children
   - Wrap behavior
   - Responsive variants
   - Grow/shrink behavior controls
   - Direct child control (immediate vs. deep)
   - Shorthand props for common patterns
   - Inline flex option

5. Grid Component:
   - CSS Grid-based layout
   - Column configuration (12-column, custom counts)
   - Row configuration và explicit placement
   - Gap controls (column và row)
   - Auto-flow behavior
   - Areas definition cho complex layouts
   - Responsive column counts
   - Auto-fit và auto-fill support
   - Sizing controls (fr units, auto, min/max content)
   - Alignment properties (both axes)
   - Named areas cho semantic placement

6. Stack Component:
   - Vertical và horizontal stacking
   - Consistent spacing giữa items
   - Dividers (optional) giữa items
   - Responsive spacing scaling
   - Alignment options (start, center, end, stretch)
   - Wrapping behavior cho horizontal stacks
   - Nesting support
   - Item dividers
   - Reverse order option
   - Conditional rendering for spacers

7. Section Component:
   - Full-width hoặc contained
   - Consistent vertical rhythm
   - Background variants (color, pattern, image)
   - Padding controls (top, bottom, horizontal)
   - Content width constraints
   - Standard structure: heading, subheading, content
   - Visual dividers (optional)
   - Responsive behavior
   - Layout variants (single column, multi-column)
   - Z-index management cho overlapping elements

8. Responsive System:
   - Consistent breakpoints (sm, md, lg, xl, 2xl)
   - Props taking responsive objects
   - Show/hide behaviors based on breakpoints
   - Column reflow cho all grid systems
   - Stack-to-horizontal conversions
   - Typography scaling
   - Spacing adjustments
   - Mobile view optimization
   - Tablet-specific accommodations
   - Desktop enhancements
   - Visual consistency across breakpoints

9. Page Layout Components:
   - Default page template với header, main, footer
   - Sidebar variations (left, right, both)
   - Dashboard layouts
   - Learning context layouts (lesson, quiz, discussion)
   - Content-focused layouts (article, blog)
   - Fixed vs. fluid header options
   - Sticky sidebar support
   - Full-height app layouts
   - Special purpose layouts (login, onboarding, landing)
   - Nested navigation patterns

10. Spacing System:
    - Consistent spacing scale (0.25rem increments)
    - Margin và padding utilities
    - Auto-spacing components
    - Content-aware spacing
    - Responsive space adjustments
    - Negative space utilization
    - Visual rhythm enforcement
    - Balance between elements
    - Whitespace management
    - Density controls (compact, comfortable, spacious)

11. Utility Layouts:
    - Aspect ratio containers
    - Overlay positioning
    - Center (absolute center, vertical, horizontal)
    - Sticky positioning
    - Hidden content (visually hidden but accessible)
    - Print-specific layouts
    - Scrollable areas với proper overflow controls
    - Masonry và variable layouts
    - Equal height containers
    - Auto-sizing behaviors

12. Special Purpose Layouts:
    - Hero sections with flexibility
    - Feature grids với various arrangements
    - Card layouts (grid, carousel, staggered)
    - Testimonial display patterns
    - Multi-column text layouts
    - Image gallery layouts
    - Form layouts với consistent spacing
    - Pricing table layouts
    - FAQ và disclosure patterns
    - Comparison layouts

13. Technical Implementation:
    - Server Component friendly architecture
    - Minimal client-side JS requirements
    - Style extraction cho optimal loading
    - No unnecessary re-renders
    - React children manipulation
    - Slot-based composition
    - Forwarded refs for all components
    - DOM node measurement khi cần
    - ResizeObserver usage for content-aware behaviors
    - Container queries khi appropriate

Layout components trong NyNus platform nên tạo ra một hệ thống toàn diện, giúp developers tạo UI nhất quán mà không cần viết CSS custom cho layout. Mỗi component nên có API rõ ràng, dễ hiểu và tài liệu hướng dẫn cụ thể. Balance giữa flexibility và convention là quan trọng - hệ thống cần guide developers toward good practices while still allowing for custom solutions when needed. The system should feel natural to use within the React/NextJS ecosystem while providing clear advantages over writing custom layout code for each component.
```

## Props và API

### Box

| Prop          | Type                                                                | Default   | Description              |
| ------------- | ------------------------------------------------------------------- | --------- | ------------------------ |
| as            | ElementType                                                         | 'div'     | HTML element to render   |
| className     | string                                                              | ''        | Custom classes           |
| children      | ReactNode                                                           | undefined | Content của Box          |
| display       | 'block' \| 'inline' \| 'inline-block' \| 'flex' \| 'grid' \| 'none' | 'block'   | CSS display property     |
| padding       | Space \| ResponsiveSpace                                            | undefined | Padding cho tất cả sides |
| paddingX      | Space \| ResponsiveSpace                                            | undefined | Horizontal padding       |
| paddingY      | Space \| ResponsiveSpace                                            | undefined | Vertical padding         |
| paddingTop    | Space \| ResponsiveSpace                                            | undefined | Top padding              |
| paddingRight  | Space \| ResponsiveSpace                                            | undefined | Right padding            |
| paddingBottom | Space \| ResponsiveSpace                                            | undefined | Bottom padding           |
| paddingLeft   | Space \| ResponsiveSpace                                            | undefined | Left padding             |
| margin        | Space \| ResponsiveSpace                                            | undefined | Margin cho tất cả sides  |
| marginX       | Space \| ResponsiveSpace                                            | undefined | Horizontal margin        |
| marginY       | Space \| ResponsiveSpace                                            | undefined | Vertical margin          |
| marginTop     | Space \| ResponsiveSpace                                            | undefined | Top margin               |
| marginRight   | Space \| ResponsiveSpace                                            | undefined | Right margin             |
| marginBottom  | Space \| ResponsiveSpace                                            | undefined | Bottom margin            |
| marginLeft    | Space \| ResponsiveSpace                                            | undefined | Left margin              |
| width         | Size \| ResponsiveSize                                              | undefined | Width của Box            |
| height        | Size \| ResponsiveSize                                              | undefined | Height của Box           |
| maxWidth      | Size \| ResponsiveSize                                              | undefined | Maximum width            |
| maxHeight     | Size \| ResponsiveSize                                              | undefined | Maximum height           |
| minWidth      | Size \| ResponsiveSize                                              | undefined | Minimum width            |
| minHeight     | Size \| ResponsiveSize                                              | undefined | Minimum height           |
| color         | string                                                              | undefined | Text color               |
| bg            | string                                                              | undefined | Background color         |
| borderRadius  | Radius \| ResponsiveRadius                                          | undefined | Border radius            |
| borderWidth   | BorderWidth                                                         | undefined | Border width             |
| borderColor   | string                                                              | undefined | Border color             |
| position      | 'static' \| 'relative' \| 'absolute' \| 'fixed' \| 'sticky'         | undefined | Position property        |
| overflow      | 'visible' \| 'hidden' \| 'scroll' \| 'auto'                         | undefined | Overflow behavior        |

### Container

| Prop      | Type                                   | Default   | Description                                      |
| --------- | -------------------------------------- | --------- | ------------------------------------------------ |
| children  | ReactNode                              | undefined | Content của Container                            |
| size      | 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full' | 'lg'      | Preset max-width                                 |
| centered  | boolean                                | true      | Center container horizontally                    |
| paddingX  | Space                                  | '4'       | Horizontal padding                               |
| paddingY  | Space                                  | '0'       | Vertical padding                                 |
| maxWidth  | string                                 | undefined | Custom max-width (overrides size)                |
| fluid     | boolean                                | false     | Full-width container với just horizontal padding |
| className | string                                 | ''        | Custom classes                                   |
| as        | ElementType                            | 'div'     | HTML element to render                           |

### Flex

| Prop      | Type                                                                                   | Default   | Description                     |
| --------- | -------------------------------------------------------------------------------------- | --------- | ------------------------------- |
| children  | ReactNode                                                                              | undefined | Content của Flex container      |
| direction | 'row' \| 'column' \| 'row-reverse' \| 'column-reverse' \| ResponsiveFlexDirection      | 'row'     | Flex direction                  |
| wrap      | 'nowrap' \| 'wrap' \| 'wrap-reverse' \| ResponsiveFlexWrap                             | 'nowrap'  | Flex wrap                       |
| justify   | 'start' \| 'end' \| 'center' \| 'between' \| 'around' \| 'evenly' \| ResponsiveJustify | 'start'   | Justify content                 |
| align     | 'start' \| 'end' \| 'center' \| 'baseline' \| 'stretch' \| ResponsiveAlign             | 'start'   | Align items                     |
| gap       | Space \| ResponsiveSpace                                                               | '0'       | Gap giữa items                  |
| columnGap | Space \| ResponsiveSpace                                                               | undefined | Gap giữa columns                |
| rowGap    | Space \| ResponsiveSpace                                                               | undefined | Gap giữa rows                   |
| inline    | boolean                                                                                | false     | Use inline-flex instead of flex |
| flex      | string                                                                                 | undefined | CSS flex property               |
| className | string                                                                                 | ''        | Custom classes                  |
| as        | ElementType                                                                            | 'div'     | HTML element to render          |

### Grid

| Prop            | Type                                                          | Default   | Description                |
| --------------- | ------------------------------------------------------------- | --------- | -------------------------- |
| children        | ReactNode                                                     | undefined | Content của Grid container |
| columns         | number \| ResponsiveGridColumns                               | 12        | Số columns trong grid      |
| gap             | Space \| ResponsiveSpace                                      | '4'       | Gap giữa items             |
| columnGap       | Space \| ResponsiveSpace                                      | undefined | Gap giữa columns           |
| rowGap          | Space \| ResponsiveSpace                                      | undefined | Gap giữa rows              |
| autoRows        | string                                                        | undefined | Grid auto-rows             |
| autoColumns     | string                                                        | undefined | Grid auto-columns          |
| autoFlow        | 'row' \| 'column' \| 'dense' \| 'row dense' \| 'column dense' | undefined | Grid auto-flow             |
| templateRows    | string                                                        | undefined | Grid template rows         |
| templateColumns | string                                                        | undefined | Grid template columns      |
| templateAreas   | string                                                        | undefined | Grid template areas        |
| className       | string                                                        | ''        | Custom classes             |
| as              | ElementType                                                   | 'div'     | HTML element to render     |

### GridItem

| Prop        | Type                                      | Default   | Description            |
| ----------- | ----------------------------------------- | --------- | ---------------------- |
| children    | ReactNode                                 | undefined | Content của Grid item  |
| colSpan     | number \| ResponsiveGridSpan              | 1         | Số columns item spans  |
| rowSpan     | number \| ResponsiveGridSpan              | 1         | Số rows item spans     |
| colStart    | number \| 'auto'                          | undefined | Grid column start      |
| colEnd      | number \| 'auto'                          | undefined | Grid column end        |
| rowStart    | number \| 'auto'                          | undefined | Grid row start         |
| rowEnd      | number \| 'auto'                          | undefined | Grid row end           |
| area        | string                                    | undefined | Grid area name         |
| justifySelf | 'start' \| 'end' \| 'center' \| 'stretch' | undefined | Justify self           |
| alignSelf   | 'start' \| 'end' \| 'center' \| 'stretch' | undefined | Align self             |
| className   | string                                    | ''        | Custom classes         |
| as          | ElementType                               | 'div'     | HTML element to render |

### Stack

| Prop      | Type                                                                                   | Default    | Description            |
| --------- | -------------------------------------------------------------------------------------- | ---------- | ---------------------- |
| children  | ReactNode                                                                              | undefined  | Content của Stack      |
| direction | 'horizontal' \| 'vertical' \| ResponsiveStackDirection                                 | 'vertical' | Stack direction        |
| spacing   | Space \| ResponsiveSpace                                                               | '4'        | Space giữa items       |
| align     | 'start' \| 'end' \| 'center' \| 'baseline' \| 'stretch' \| ResponsiveAlign             | 'stretch'  | Align items            |
| justify   | 'start' \| 'end' \| 'center' \| 'between' \| 'around' \| 'evenly' \| ResponsiveJustify | 'start'    | Justify content        |
| wrap      | boolean                                                                                | false      | Wrap items if needed   |
| divider   | ReactNode                                                                              | undefined  | Element between items  |
| className | string                                                                                 | ''         | Custom classes         |
| as        | ElementType                                                                            | 'div'      | HTML element to render |

### Section

| Prop           | Type                                   | Default       | Description                         |
| -------------- | -------------------------------------- | ------------- | ----------------------------------- |
| children       | ReactNode                              | undefined     | Content của Section                 |
| paddingY       | Space \| ResponsiveSpace               | '12'          | Vertical padding                    |
| paddingTop     | Space \| ResponsiveSpace               | undefined     | Top padding (overrides paddingY)    |
| paddingBottom  | Space \| ResponsiveSpace               | undefined     | Bottom padding (overrides paddingY) |
| bg             | string                                 | 'transparent' | Background color                    |
| bgImage        | string                                 | undefined     | Background image URL                |
| bgOpacity      | number                                 | 1             | Background opacity                  |
| containerSize  | 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full' | 'lg'          | Container size                      |
| containerProps | ContainerProps                         | {}            | Props for inner Container           |
| className      | string                                 | ''            | Custom classes                      |
| id             | string                                 | undefined     | HTML ID (for anchor links)          |
| as             | ElementType                            | 'section'     | HTML element to render              |

### AspectRatio

| Prop      | Type                       | Default   | Description                       |
| --------- | -------------------------- | --------- | --------------------------------- |
| children  | ReactNode                  | undefined | Content của AspectRatio container |
| ratio     | number \| [number, number] | 1         | Aspect ratio (width/height)       |
| className | string                     | ''        | Custom classes                    |
| as        | ElementType                | 'div'     | HTML element to render            |

### Divider

| Prop        | Type                       | Default      | Description                          |
| ----------- | -------------------------- | ------------ | ------------------------------------ |
| orientation | 'horizontal' \| 'vertical' | 'horizontal' | Divider orientation                  |
| thickness   | number                     | 1            | Divider thickness (px)               |
| color       | string                     | 'gray.200'   | Divider color                        |
| marginY     | Space                      | '4'          | Vertical margin (horizontal divider) |
| marginX     | Space                      | '4'          | Horizontal margin (vertical divider) |
| className   | string                     | ''           | Custom classes                       |
| as          | ElementType                | 'hr'         | HTML element to render               |

### Center

| Prop       | Type        | Default   | Description                     |
| ---------- | ----------- | --------- | ------------------------------- |
| children   | ReactNode   | undefined | Content to center               |
| inline     | boolean     | false     | Use inline-flex instead of flex |
| horizontal | boolean     | true      | Center horizontally             |
| vertical   | boolean     | true      | Center vertically               |
| className  | string      | ''        | Custom classes                  |
| as         | ElementType | 'div'     | HTML element to render          |

## Mô tả giao diện

### Box

Box là thành phần layout cơ bản nhất, không có visual styling specific nào ngoài properties được áp dụng qua props. Nó hoạt động như một div tiêu chuẩn với khả năng áp dụng các Tailwind classes và CSS properties thông qua props. Box có thể render thành bất kỳ HTML element nào thông qua prop `as`.

Box hoạt động như building block cơ bản cho các layout components khác, cung cấp interface nhất quán để áp dụng spacing, sizing, colors, và các visual properties khác. Width và height có thể được set dưới dạng pixel values, percentages, các đơn vị Tailwind (e.g., '1/2', 'full'), hoặc 'auto'.

### Container

Container tạo ra một centered block với fixed max-width và responsive padding. Nó thường được sử dụng để chứa content trong một defined width center-aligned trên page. Border width phụ thuộc vào breakpoint:

- Small (sm): 640px
- Medium (md): 768px
- Large (lg): 1024px
- Extra Large (xl): 1280px
- Full: 100% with padding

Container luôn có horizontal padding để tránh content áp sát vào viewport edges trên small screens. Visual appearance là content được center-aligned trong viewport với không gian trống đều ở hai bên trên larger screens, và full-width với padding phù hợp trên smaller screens.

### Flex

Flex container dựa trên CSS Flexbox với visual appearance phụ thuộc vào direction và alignment properties. Với `direction="row"` (default), items được arranged horizontally từ trái sang phải (hoặc phải sang trái trong RTL). Với `direction="column"`, items được stacked vertically từ trên xuống dưới.

Gap property tạo không gian đều giữa các flex items. Alignment props như justify và align ảnh hưởng đến positioning của items trong container. Justify controls alignment dọc theo main axis (horizontal trong row, vertical trong column), trong khi align controls alignment dọc theo cross axis.

### Grid

Grid container dựa trên CSS Grid Layout, tạo ra một 2D grid. Mặc định, nó hiển thị children trong grid với 12 columns, nhưng số columns và configuration có thể tùy chỉnh. Visual appearance phụ thuộc vào configuration, nhưng thường là items được arranged trong grid cells với equal gaps giữa chúng.

Responsive column systems cho phép grid thay đổi từ ít columns trên mobile lên nhiều columns trên larger screens. GridItems có thể span multiple columns và rows, tạo complex layouts như dashboard, gallery hoặc featured content sections.

### Stack

Stack là layout pattern đơn giản sắp xếp children theo vertical axis (column) hoặc horizontal axis (row) với equal spacing giữa chúng. Nó giống như Flex container đã được pre-configured để thực hiện specific layout pattern này.

Vertical Stack có children stacked từ trên xuống dưới với equal spacing (margin-bottom trên mọi child ngoại trừ child cuối cùng). Horizontal Stack có children arranged từ trái sang phải với equal spacing giữa chúng. Khi có divider, a visual separator (thường là line) được placed giữa các items để phân chia content sections.

### Section

Section tạo ra full-width blocks cho page content, thường với vertical padding to create visual separation giữa các major content areas. Sections thường contain Container component để center và constrain content width, trong khi vẫn cho phép background styling extend full-width.

Visual styling có thể bao gồm background colors, images, hoặc patterns. Sections thường có generous vertical spacing (e.g., py-12/3rem) để tạo clear visual breaks giữa các content sections. Sections thường được sử dụng để organize major page areas như hero, features, testimonials, hoặc contact.

### AspectRatio

AspectRatio duy trì một fixed width-to-height ratio bất kể container width. Nó thường được sử dụng cho media như images và videos để ngăn layout shifts khi content loads. Container có height được calculated dựa trên width và specified ratio, with content absolutely positioned trong nó.

Visual appearance là content (thường là image hoặc video) filling container completely với đúng aspect ratio, không bị stretched hoặc distorted. Trong responsive layouts, container width adjusts with viewport, nhưng ratio remains consistent.

### Divider

Divider tạo ra một thin line để visually separate content sections. Horizontal dividers là thin lines extending full-width với vertical margin để tạo space với surrounding content. Vertical dividers là thin lines extending full-height của container với horizontal margin.

Line có thể là solid, dashed, hoặc dotted với màu sắc thường là subtle (light gray trong light mode, darker gray trong dark mode). Thickness thường là 1px cho subtle separation, nhưng có thể thicker cho emphasis.

### Center

Center aligns content horizontally, vertically, hoặc both trong container của nó. Nó sử dụng Flexbox để achieve centering với simple visual appearance: content positioned chính giữa container. Với `horizontal={true}` và `vertical={false}`, content được horizontally centered nhưng aligned top. Với `horizontal={false}` và `vertical={true}`, content được vertically centered nhưng aligned left.

## Lưu ý quan trọng

- **Composition**: Layout components được thiết kế để compose với nhau. Ví dụ: `Section` contains `Container` contains `Grid`
- **Responsive Behavior**: Tất cả components cần đảm bảo responsive behavior tốt trên tất cả screen sizes
- **Consistency**: Duy trì consistent spacing và sizing dựa trên design system tokens
- **Performance**: Avoid multiple unnecessary wrapper divs để giảm DOM depth
- **Server Components**: Hầu hết layout components nên là server components để reduce client bundle
- **Accessibility**: Ensure semantic HTML và proper landmark roles khi applicable
- **Flexibility vs Standards**: Balance giữa flexibility cho custom use cases và standardization cho consistency
- **Overrides**: Cho phép override styles qua props và className prop
- **Nesting**: Cẩn thận với nested containers để tránh unintended margin/padding compounding
- **Z-index Management**: Clearly document when components create new stacking contexts
- **RTL Support**: Đảm bảo layouts hoạt động đúng trong right-to-left languages
- **Print Layouts**: Consider how layouts render in print mode
- **Container Queries**: Sử dụng CSS Container Queries khi phù hợp cho component-based responsive behavior
- **Reduced Motion**: Respect user preferences cho reduced motion trong animated layout changes
- **Content Reflow**: Minimize layout shifts khi content loads hoặc dynamically changes
- **Custom Properties**: Use CSS custom properties for theme values để enable runtime customization
- **Documentation**: Clearly document layout component APIs và intended use cases
