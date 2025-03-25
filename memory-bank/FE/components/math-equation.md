# Math Equation Component

## Mô tả

Math Equation là một component chuyên dụng để hiển thị và cho phép người dùng nhập các phương trình toán học phức tạp trên nền tảng học tập. Component này cung cấp khả năng render công thức và phương trình toán học với định dạng chuẩn xác, đẹp mắt, và rõ ràng. Math Equation hỗ trợ nhiều cú pháp phổ biến như LaTeX, AsciiMath và MathML, giúp cho việc truyền đạt và tương tác với nội dung toán học trở nên trực quan và chính xác.

## Loại

- Client Component với rendering đặc biệt
- Interactive khi ở chế độ editor
- Có thể là Server Component khi chỉ display-only

## Variants

- **Display**: Chỉ hiển thị phương trình trong chế độ đọc
- **Inline**: Công thức nhúng trong dòng văn bản
- **Block**: Công thức hiển thị dạng block độc lập
- **Interactive**: Editor cho phép người dùng nhập và chỉnh sửa phương trình
- **Preview**: Hiển thị preview của phương trình trong khi nhập

## Prompt chi tiết

```
Thiết kế một Math Equation component mạnh mẽ, rõ ràng và linh hoạt cho nền tảng học tập NyNus. Component này sẽ đóng vai trò quan trọng trong việc hiển thị và cho phép người dùng tương tác với các biểu thức và phương trình toán học trên nền tảng.

1. Basic Display & Rendering:
   - Sử dụng thư viện MathJax hoặc KaTeX để render công thức
   - Đảm bảo chất lượng render tốt nhất với hình ảnh sắc nét, không bị pixelated
   - Font chuyên dụng cho toán học với kích thước và spacing phù hợp
   - Căn chỉnh baseline đúng khi hiển thị inline với văn bản
   - Màu sắc và contrast phù hợp, dễ đọc trên mọi background
   - Animatable để highlight specific parts khi cần
   - Optimization cho performance với complex equations
   - Support cho LaTeX, AsciiMath, và MathML syntax

2. Interactive Features:
   - Copy to clipboard functionality với format preservation
   - Right-click menu với options phù hợp
   - Zoom in/out cho equations phức tạp
   - Tooltips cho symbols và expressions
   - Optional step-by-step solution display
   - Hover effects để highlight elements
   - Click interactions cho educational experiences
   - Focus states cho accessibility

3. Editor Mode:
   - Rich WYSIWYG editor cho math input
   - Syntax highlighting cho dễ đọc
   - Auto-completion cho common symbols và expressions
   - Template insertion cho frequently used equations
   - Validation và error highlighting real-time
   - Preview render song song khi typing
   - History/undo functionality
   - Symbol palette với categorized symbols

4. Toolbar & Controls:
   - Essential math symbols dễ truy cập
   - Common templates (fractions, integrals, matrices)
   - Category-based organization (arithmetic, algebra, calculus)
   - Quick access buttons cho frequently used symbols
   - Format controls (font size, color, alignment)
   - Toggle between inline và display modes
   - Mode switching (LaTeX, AsciiMath)
   - Insert special functions (trigonometric, logarithmic)

5. Visual Design:
   - Clean, modern styling phù hợp với design system
   - Consistent spacing và alignment
   - Clear visual hierarchy trong complex equations
   - Subtle container styling cho block equations
   - Separator styling cho inline equations
   - Visual feedback khi interactive
   - Error states rõ ràng khi syntax incorrect
   - Loading state khi render complex equations

6. Mobile & Touch Support:
   - Touch-friendly controls và spacing
   - Mobile keyboard integration cho equation input
   - Responsive layout adapting to screen size
   - Gesture support (pinch to zoom, swipe)
   - Larger touch targets cho controls
   - Simplified interface on small screens
   - Portrait/landscape optimizations
   - Soft keyboard customization khi có thể

7. Accessibility:
   - Screen reader support với proper ARIA attributes
   - Keyboard navigation cho editor
   - Text alternatives cho complex equations
   - High contrast mode support
   - Customizable font size
   - Alternative representations khi cần
   - Focus management trong editor
   - Keyboard shortcuts cho common actions

8. Performance Considerations:
   - Efficient rendering của complex equations
   - Caching mechanisms cho repeated equations
   - Lazy loading cho equation libraries
   - Optimized re-renders
   - Server-side pre-rendering khi có thể
   - Web worker utilization cho heavy calculations
   - Asset size optimization
   - Memory management cho large documents

9. Integration Features:
   - Easy embedding trong rich text
   - Export options (PNG, SVG, LaTeX)
   - Import từ various formats
   - API hooks cho external tools
   - Event system cho tracking và analytics
   - Interop với popular math libraries
   - CMS integration capabilities
   - Versioning support cho saved equations

10. Educational Enhancements:
    - Color coding cho parts của equations
    - Step-by-step solution display
    - Variable highlighting
    - Term explanation on hover
    - Connection to related concepts
    - Practice variations generation
    - Interactive manipulation của equations
    - Visualization aids cho abstract concepts

11. Advanced Features:
    - 3D formula support (khi thích hợp)
    - Animated equations cho demonstrating concepts
    - Equation search functionality
    - Voice input cho equation dictation
    - Handwriting recognition cho equation input
    - AI assistance cho equation construction
    - Equation solving capabilities
    - Personal equation library/favorites

12. Error Handling & Validation:
    - Real-time syntax checking
    - Clear error messages với suggestions
    - Auto-correction cho common mistakes
    - Contextual help cho complex syntax
    - Validation indicators (colors, icons)
    - Prevention của invalid submissions
    - Fallback rendering cho partial validity
    - Recovery suggestions khi syntax breaks

Component phải cân bằng giữa powerful functionality và ease of use, making complex math accessible cho students và educators. Phải chú ý đặc biệt đến rendering performance và accuracy, đảm bảo rằng phương trình hiển thị chính xác trên mọi device và browser. Editor experience phải intuitive ngay cả cho người dùng không quen với LaTeX, với đủ power cho advanced users. Quan trọng nhất, component phải reliable - math rendering là critical requirement trong educational context và phải hoạt động một cách consistent và chính xác.
```

## Props và API

### Inputs

| Prop           | Type                                                           | Default                                           | Description                                                      |
| -------------- | -------------------------------------------------------------- | ------------------------------------------------- | ---------------------------------------------------------------- |
| value          | string                                                         | ''                                                | Nội dung phương trình dưới dạng chuỗi (LaTeX, AsciiMath, MathML) |
| variant        | 'display' \| 'inline' \| 'block' \| 'interactive' \| 'preview' | 'display'                                         | Kiểu hiển thị của component                                      |
| renderMode     | 'client' \| 'server' \| 'hybrid'                               | 'client'                                          | Chế độ render của phương trình                                   |
| mathStyle      | 'TeX' \| 'AsciiMath' \| 'MathML'                               | 'TeX'                                             | Cú pháp được sử dụng                                             |
| size           | 'small' \| 'medium' \| 'large'                                 | 'medium'                                          | Kích thước của phương trình                                      |
| color          | string                                                         | 'inherit'                                         | Màu chữ của phương trình                                         |
| interactive    | boolean                                                        | false                                             | Cho phép tương tác với phương trình                              |
| editable       | boolean                                                        | false                                             | Cho phép chỉnh sửa phương trình                                  |
| showEditor     | boolean                                                        | false                                             | Hiển thị editor toolbar                                          |
| showCopyButton | boolean                                                        | false                                             | Hiển thị nút copy                                                |
| errorDisplay   | 'none' \| 'tooltip' \| 'inline'                                | 'tooltip'                                         | Cách hiển thị lỗi cú pháp                                        |
| delimiters     | { inline: Array<string>, block: Array<string> }                | { inline: ['\\(', '\\)'], block: ['\\[', '\\]'] } | Ký tự phân cách cho phương trình inline và block                 |
| className      | string                                                         | ''                                                | Class tùy chỉnh cho component                                    |
| macros         | Record<string, string>                                         | {}                                                | Định nghĩa các macro LaTeX custom                                |

### Methods/Events

| Name              | Parameters                                          | Description                                   |
| ----------------- | --------------------------------------------------- | --------------------------------------------- |
| onChange          | (value: string) => void                             | Trigger khi nội dung phương trình thay đổi    |
| onRender          | (success: boolean) => void                          | Trigger khi phương trình được render          |
| onError           | (error: Error) => void                              | Trigger khi có lỗi rendering                  |
| onCopy            | (value: string) => void                             | Trigger khi phương trình được copy            |
| onFocus           | (event: React.FocusEvent) => void                   | Trigger khi editor được focus                 |
| onBlur            | (event: React.FocusEvent) => void                   | Trigger khi editor mất focus                  |
| onSelectionChange | (selection: { start: number, end: number }) => void | Trigger khi selection trong editor thay đổi   |
| onSymbolInsert    | (symbol: string) => void                            | Trigger khi một symbol được chèn vào editor   |
| onParse           | (ast: any) => void                                  | Trigger khi phương trình được parse thành AST |

## Mô tả giao diện

### Display Variant

Variant cơ bản chỉ hiển thị phương trình toán học một cách tĩnh, không có tương tác. Phương trình được render rõ ràng với font size, weight, và spacing phù hợp. Không có borders hoặc containers, trừ khi là block equation có thể có subtle background hoặc borders để phân biệt với nội dung xung quanh. Variant này tối ưu cho performance và phù hợp cho việc hiển thị nhiều phương trình trong một trang.

### Inline Variant

Thiết kế đặc biệt để hiển thị phương trình toán học trong một dòng text, đảm bảo alignment chính xác với baseline của text. Font size thường tương đương với surrounding text và có subtle styling để phân biệt khỏi text thường (có thể là italic hoặc font khác). Spacing được điều chỉnh để phương trình hòa hợp với flow của paragraph.

### Block Variant

Hiển thị phương trình toán học như một block riêng biệt, thường được căn giữa và có margins trên dưới. Font size thường lớn hơn inline và có thể kèm theo equation number hoặc reference nếu cần. Block equations được tách biệt rõ ràng khỏi surrounding text và có thể có container subtle để enhance visibility. Phù hợp cho các phương trình quan trọng hoặc phức tạp cần được nhấn mạnh.

### Interactive Variant

Mở rộng từ Display variant, thêm khả năng tương tác như highlight khi hover, click để zoom hoặc show details, context menu với options như copy, export, hoặc view explanation. Có visual indicators cho interactive elements như hover states, cursors thay đổi, hoặc subtle buttons xuất hiện khi hover. Interactive equations có thể linked với explanations, visualizations, hoặc step-by-step solutions.

### Preview Variant

Hiển thị preview của phương trình trong khi user đang nhập trong editor. Preview thường hiển thị real-time bên cạnh hoặc bên dưới editor area, updating khi user types. Styling tương tự Display variant nhưng có thể có visual indicators cho trạng thái preview như lighter opacity, subtle container, hoặc "Preview" label. Preview variant cũng có thể highlight syntax errors hoặc hiển thị warning icons khi có issues.

## Lưu ý quan trọng

- **Rendering Performance**: Optimize cho việc render nhiều phương trình phức tạp
- **Cross-Browser Compatibility**: Đảm bảo render nhất quán trên tất cả browsers
- **Accessibility**: Cung cấp alternatives cho screen readers và đảm bảo keyboard navigation
- **Mobile Support**: Đảm bảo display và interaction phù hợp trên các thiết bị nhỏ
- **Font Loading**: Quản lý font math đặc biệt để tránh FOUC (Flash of Unstyled Content)
- **Error Recovery**: Graceful handling của syntax errors trong user input
- **Integration**: Tương thích với rich text editors và CMS platforms
- **Versioning**: Quản lý versioning cho equation libraries để đảm bảo backward compatibility
- **Print Support**: Đảm bảo equations render chính xác khi print
- **Export Quality**: Cung cấp high-quality exports cho research và documentation

```

```
