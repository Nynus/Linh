# Typography Components

## Mô tả

Typography Components là các thành phần UI nền tảng dùng để hiển thị và định dạng văn bản trong nền tảng NyNus. Một hệ thống typography nhất quán là trụ cột của mọi design system, đảm bảo tính dễ đọc, hiệu quả truyền tải thông tin và trải nghiệm người dùng tốt. Hệ thống Typography của NyNus cung cấp các components để hiển thị văn bản với các mức độ nhấn mạnh, kích thước và trọng lượng khác nhau, tuân theo hệ thống type scale được thiết kế tỉ mỉ. Các components này đảm bảo tính nhất quán về mặt thị giác trên toàn bộ ứng dụng, đồng thời tối ưu hóa cho việc đọc trên nhiều kích thước màn hình và điều kiện ánh sáng khác nhau, với sự tập trung cao vào accessibility để đảm bảo mọi người dùng đều có thể truy cập nội dung một cách hiệu quả.

## Loại

- **Server Components** (hầu hết các typography components là stateless và có thể là server components)
- **Primitive Components** (các building blocks cơ bản cho typography)
- **Semantic Components** (sử dụng đúng HTML tags như h1-h6, p, blockquote, etc.)
- **Scale-based** (tuân theo type scale nhất quán)
- **Responsive** (thích ứng với viewport size)
- **Themeable** (thay đổi style dựa trên theme)
- **Accessible** (đáp ứng các tiêu chuẩn WCAG)

## Variants

### Core Typography

- **Heading**: Tiêu đề từ mức h1 đến h6
- **Text**: Component text đa năng cho văn bản thông thường
- **Paragraph**: Block văn bản có định dạng phù hợp với paragraphs
- **Lead**: Văn bản giới thiệu/mở đầu với kích thước lớn hơn
- **Blockquote**: Trích dẫn hoặc đoạn trích với visual styling riêng
- **Code**: Inline code và code blocks
- **Label**: Text cho form inputs và các elements UI khác

### Functional Typography

- **Title**: Heading lớn cho page titles, section headers
- **Subtitle**: Tiêu đề phụ đi kèm với Title
- **Caption**: Text nhỏ dùng cho captions, footnotes, metadata
- **Display**: Heading rất lớn cho hero sections, landing pages
- **Overline**: Small uppercase text phía trên heading làm label
- **List**: Ordered, unordered và description lists với styling nhất quán

### Special Typography

- **Highlight**: Text với visual emphasis
- **Truncate**: Text có thể bị cắt ngắn với ellipsis
- **Gradient**: Text với gradient color
- **Animated**: Text với animation effects
- **Badge**: Small label text cho status, counts, etc.
- **KeyboardKey**: Styling cho keyboard shortcuts

### Text Styles

- **Weight**: Regular, Medium, SemiBold, Bold
- **Style**: Normal, Italic
- **Decoration**: Underline, Strikethrough, Overline
- **Alignment**: Left, Center, Right, Justify
- **Transform**: Uppercase, Lowercase, Capitalize
- **Size**: Type scale từ xs đến 9xl
- **Line Height**: Tight, Normal, Relaxed, Loose

## Prompt chi tiết

```
Thiết kế một hệ thống Typography Components toàn diện và có tính nhất quán cao cho nền tảng học tập NyNus. Typography đóng vai trò nền tảng trong việc truyền tải thông tin và tạo trải nghiệm người dùng rõ ràng, dễ đọc trên nền tảng. Hệ thống cần balance giữa functional clarity và aesthetic appeal, đảm bảo văn bản dễ đọc trong nhiều contexts khác nhau từ headlines đến body text dài, và trên các devices từ mobile đến desktop.

1. Type Scale & Hierarchy:
   - Xây dựng type scale toàn diện với proportional sizing
   - Scale nên bao gồm: 3xs, 2xs, xs, sm, base, md, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl, 8xl, 9xl
   - Propositional line-heights cho mỗi size
   - Clear visual hierarchy giữa các levels
   - Font weights phù hợp cho mỗi text role
   - Consistent spacing relationships giữa headings và paragraphs
   - Responsive scaling cho các devices khác nhau
   - Balanced relationship giữa font sizes, weights và line heights

2. Fonts & Typography System:
   - Primary font cho headings: Sans-serif với personality
   - Primary font cho body text: Highly readable sans-serif
   - Mono font cho code, technical content
   - Font fallbacks và web font loading strategy
   - Variable font support khi có thể
   - Character spacing (tracking) thích hợp cho mỗi size
   - Font smoothing tuỳ theo platform
   - Kerning và hinting considerations

3. Heading Component:
   - Six levels phù hợp với HTML h1-h6
   - Visual styling nhất quán với type hierarchy
   - Responsive size scaling
   - Semantic và non-semantic options (as="h1" etc.)
   - Color variants cho context khác nhau
   - Weight options (regular, medium, semibold, bold)
   - Truncation options với configurable lines
   - Optional decoration elements (underlines, accents)
   - Spaced margins phù hợp với content rhythm
   - Font feature settings phù hợp cho headings

4. Text Component:
   - Base text component cho đa dạng use cases
   - Polymorphic rendering (span, p, div, etc.)
   - Size variants từ xs đến xl
   - Weight variants từ light đến extrabold
   - Color variants cho context khác nhau
   - Style variants (normal, italic)
   - Decoration options (underline, strikethrough)
   - Transform options (uppercase, lowercase, capitalize)
   - Alignment options (left, center, right, justify)
   - Truncation với configurable lines
   - Responsive behavior

5. Paragraph Component:
   - Specialized cho blocks of running text
   - Optimal line length constraints (65-75 characters)
   - Appropriate line height for readability
   - Size variants (small, base, large)
   - Margin spacing phù hợp với text blocks
   - First-line và drop cap options cho long-form content
   - Hyphenation và justification options
   - Indent options cho first paragraph và subsequent
   - List integration với proper bullet styling
   - Column layout options cho longer text

6. Special Typography Components:
   - Lead: Larger introductory paragraph style
   - Blockquote: Styled quote blocks với citation
   - Caption: Smaller text cho descriptions, image captions
   - Code: Inline và block code với syntax highlighting
   - List: Ordered, unordered và description lists với styling nhất quán
   - Mark: Highlighted text
   - Keyboard: Keyboard key styling
   - Label: Form labels with proper spacing và sizing
   - Title: Large display headings cho hero sections
   - Overline: Small uppercase text above headings

7. Functional Typography:
   - Data display text với mono variants cho numbers
   - Status indicators với appropriate emphasis
   - Navigation text sizing và weight
   - Button text với consistent styling và wrapping
   - Link text với style cues cho interaction
   - Form input text với optimal sizing
   - Error và feedback message text
   - Helper text với appropriate de-emphasis
   - Toast và notification text
   - Badge và tag typography

8. Accessibility Considerations:
   - Minimum font sizes cho readability (16px/1rem base)
   - WCAG AA compliance cho color contrast
   - Adjustable text size support
   - Line height thích hợp cho dyslexic users
   - Proper focus states cho interactive text
   - Screen reader semantics và ARIA labels
   - Keyboard navigation for interactive text elements
   - Sufficient color contrast ratios
   - Responsive text adjustments cho low vision
   - Support cho user font size preferences

9. Responsive Typography:
   - Mobile-first approach với appropriate sizing
   - Fluid type scaling between breakpoints
   - Viewport-based adjustments
   - Minimum và maximum sizes cho containment
   - Line length control across viewport sizes
   - Heading size adjustments cho small screens
   - Responsive margin và padding adjustments
   - Display text special handling
   - Container-query-based typography khi cần
   - Orientation-aware adjustments

10. Technical Implementation:
    - Server Component friendly architecture
    - Minimal client-side JS requirements
    - Style extraction cho optimal loading
    - No unnecessary re-renders
    - CSS custom properties cho theming
    - Utility props cho flexibility
    - Composition với other components
    - Tailwind integration
    - Typography theme tokens
    - Default styles với override capabilities

11. Dark Mode & Theming:
    - Adjusted weights cho dark mode legibility
    - Color adjustments cho proper contrast
    - Optional slight letter spacing adjustments
    - Consideration for different background contrasts
    - Theme-aware typography
    - Color tokens cho text trong different contexts
    - Visual weight balance trong light/dark modes
    - Consistent reading experience across themes

12. Performance & Implementation:
    - Font loading optimization
    - Minimal CSS footprint
    - Variable fonts cho flexibility với minimal overhead
    - Font display swap strategy
    - Subsetting cho improved loading
    - Self-hosted vs CDN considerations
    - Static extraction của typography styles
    - Caching strategy cho web fonts
    - Font preloading cho critical text
    - Text-rendering optimizations

Typography trong NyNus platform nên tạo ra một hệ thống toàn diện, giúp nội dung dễ đọc, rõ ràng, và tạo trải nghiệm nhất quán trên toàn bộ nền tảng. System nên bao gồm các components cho mọi use case phổ biến, với props API rõ ràng và dễ sử dụng. Typography nên không chỉ functional mà còn thể hiện personality của brand, tạo tone và feeling phù hợp với nền tảng học tập. Accessibility là ưu tiên hàng đầu, đảm bảo text có thể đọc được bởi mọi người dùng trong mọi điều kiện.
```

## Props và API

### Heading

| Prop      | Type                                                                                                                                     | Default   | Description                               |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------------------------------------- |
| children  | ReactNode                                                                                                                                | undefined | Nội dung của heading                      |
| as        | 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'                                                                                             | undefined | HTML element (nếu khác với level)         |
| level     | 1 \| 2 \| 3 \| 4 \| 5 \| 6                                                                                                               | 1         | Level của heading (mặc định render h1-h6) |
| size      | '3xs' \| '2xs' \| 'xs' \| 'sm' \| 'base' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl' \| '5xl' \| '6xl' \| '7xl' \| '8xl' \| '9xl' | undefined | Size override (default theo level)        |
| weight    | 'regular' \| 'medium' \| 'semibold' \| 'bold'                                                                                            | undefined | Font weight (default theo level)          |
| align     | 'left' \| 'center' \| 'right'                                                                                                            | 'left'    | Text alignment                            |
| color     | string                                                                                                                                   | undefined | Text color (token hoặc custom)            |
| truncate  | boolean \| number                                                                                                                        | false     | Truncate text (true=1 line, số=số lines)  |
| className | string                                                                                                                                   | ''        | Custom classes                            |

### Text

| Prop          | Type                                                                               | Default   | Description                              |
| ------------- | ---------------------------------------------------------------------------------- | --------- | ---------------------------------------- |
| children      | ReactNode                                                                          | undefined | Nội dung của text                        |
| as            | ElementType                                                                        | 'span'    | HTML element to render                   |
| size          | '3xs' \| '2xs' \| 'xs' \| 'sm' \| 'base' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' | 'base'    | Text size                                |
| weight        | 'light' \| 'regular' \| 'medium' \| 'semibold' \| 'bold'                           | 'regular' | Font weight                              |
| align         | 'left' \| 'center' \| 'right' \| 'justify'                                         | 'left'    | Text alignment                           |
| color         | string                                                                             | undefined | Text color (token hoặc custom)           |
| transform     | 'uppercase' \| 'lowercase' \| 'capitalize' \| 'normal'                             | 'normal'  | Text transform                           |
| italic        | boolean                                                                            | false     | Italic style                             |
| underline     | boolean                                                                            | false     | Underline decoration                     |
| strikethrough | boolean                                                                            | false     | Strikethrough decoration                 |
| truncate      | boolean \| number                                                                  | false     | Truncate text (true=1 line, số=số lines) |
| className     | string                                                                             | ''        | Custom classes                           |

### Paragraph

| Prop         | Type                                       | Default   | Description                       |
| ------------ | ------------------------------------------ | --------- | --------------------------------- |
| children     | ReactNode                                  | undefined | Nội dung của paragraph            |
| size         | 'sm' \| 'base' \| 'lg'                     | 'base'    | Text size                         |
| lead         | boolean                                    | false     | Render as lead paragraph (larger) |
| color        | string                                     | undefined | Text color (token hoặc custom)    |
| align        | 'left' \| 'center' \| 'right' \| 'justify' | 'left'    | Text alignment                    |
| marginBottom | 'none' \| 'sm' \| 'md' \| 'lg'             | 'md'      | Margin bottom space               |
| className    | string                                     | ''        | Custom classes                    |

### Title

| Prop      | Type                                           | Default   | Description                    |
| --------- | ---------------------------------------------- | --------- | ------------------------------ |
| children  | ReactNode                                      | undefined | Nội dung của title             |
| as        | ElementType                                    | 'h1'      | HTML element to render         |
| size      | 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' | 'xl'      | Title size                     |
| align     | 'left' \| 'center' \| 'right'                  | 'left'    | Text alignment                 |
| color     | string                                         | undefined | Text color (token hoặc custom) |
| className | string                                         | ''        | Custom classes                 |

### Lead

| Prop         | Type                           | Default   | Description                    |
| ------------ | ------------------------------ | --------- | ------------------------------ |
| children     | ReactNode                      | undefined | Nội dung của lead text         |
| as           | ElementType                    | 'p'       | HTML element to render         |
| size         | 'base' \| 'lg' \| 'xl'         | 'lg'      | Lead text size                 |
| color        | string                         | undefined | Text color (token hoặc custom) |
| align        | 'left' \| 'center' \| 'right'  | 'left'    | Text alignment                 |
| marginBottom | 'none' \| 'sm' \| 'md' \| 'lg' | 'lg'      | Margin bottom space            |
| className    | string                         | ''        | Custom classes                 |

### Blockquote

| Prop      | Type                                   | Default   | Description             |
| --------- | -------------------------------------- | --------- | ----------------------- |
| children  | ReactNode                              | undefined | Nội dung của blockquote |
| cite      | string                                 | undefined | Citation source         |
| variant   | 'default' \| 'bordered' \| 'highlight' | 'default' | Visual style variant    |
| className | string                                 | ''        | Custom classes          |

### Code

| Prop            | Type                | Default   | Description                           |
| --------------- | ------------------- | --------- | ------------------------------------- |
| children        | ReactNode \| string | undefined | Code content                          |
| inline          | boolean             | false     | Inline code vs block code             |
| language        | string              | undefined | Programming language for highlighting |
| showLineNumbers | boolean             | false     | Show line numbers                     |
| className       | string              | ''        | Custom classes                        |

### Caption

| Prop      | Type                          | Default      | Description                    |
| --------- | ----------------------------- | ------------ | ------------------------------ |
| children  | ReactNode                     | undefined    | Caption content                |
| as        | ElementType                   | 'figcaption' | HTML element to render         |
| align     | 'left' \| 'center' \| 'right' | 'left'       | Text alignment                 |
| color     | string                        | undefined    | Text color (token hoặc custom) |
| className | string                        | ''           | Custom classes                 |

## Mô tả giao diện

### Heading

Heading components tạo ra tiêu đề với 6 levels (h1-h6). Mỗi level có kích thước và font weight khác nhau để phân biệt rõ ràng trong visual hierarchy. Mặc định:

- **h1**: Extra large size (text-4xl/2.25rem), bold, với margin bottom lớn
- **h2**: Large size (text-3xl/1.875rem), bold, margin bottom lớn hơn h3
- **h3**: Medium large size (text-2xl/1.5rem), semibold
- **h4**: Medium size (text-xl/1.25rem), semibold
- **h5**: Base-plus size (text-lg/1.125rem), medium hoặc semibold
- **h6**: Base size (text-base/1rem), medium, có thể uppercase

Trên mobile, font size được giảm xuống một mức để đảm bảo tính dễ đọc. Line height được điều chỉnh để headings có spacing phù hợp. Headings thường có màu tối hơn một chút so với body text để tạo sự tương phản và nhấn mạnh.

### Text

Text component là thành phần typography đa năng nhất, có thể render thành nhiều HTML elements khác nhau (span, p, div, etc.). Text components hỗ trợ nhiều size, từ rất nhỏ (text-3xs/0.625rem) đến khá lớn (text-3xl/1.875rem), với size mặc định là base (text-base/1rem).

Font weight mặc định là regular (400), nhưng có thể thay đổi từ light (300) đến bold (700). Color mặc định theo theme (thường là gray-800 trong light mode, gray-200 trong dark mode). Text component hỗ trợ các style variations như italic, underline, strikethrough, và text transformations. Khi truncate được set, text sẽ bị cắt ngắn với ellipsis (...) sau số lines được chỉ định.

### Paragraph

Paragraph component được tối ưu hóa cho blocks of running text, với line height rộng hơn (text-base với leading-relaxed/1.625). Paragraphs có margin bottom để tạo vertical spacing giữa các đoạn văn. Size mặc định là base (16px), nhưng có thể là small (14px) hoặc large (18px).

Paragraphs thường được giới hạn chiều rộng tối đa (max-width) để đảm bảo line length tối ưu cho việc đọc (khoảng 65-75 ký tự). Trong long-form content, paragraph đầu tiên thường không có text indent, trong khi các paragraphs tiếp theo có thể có indent nhỏ hoặc chỉ dựa vào margin spacing.

### Title

Title component tạo ra headings lớn, thường dùng cho page titles hoặc major section headers. Nó có size lớn hơn so với heading thông thường và thường có font weight bold hoặc heavy. Titles có margin bottom lớn để tạo không gian thích hợp với content bên dưới.

Visual appearance features font size lớn (từ text-2xl/1.5rem đến text-6xl/3.75rem), với line height chặt chẽ hơn để tạo khối visual tốt hơn. Titles thường có màu đậm và có thể bao gồm subtle decorative elements như underline accents, gradient colors, hoặc background highlights.

### Lead

Lead component tạo ra introductory paragraphs với kích thước lớn hơn, thường đặt ở đầu một section hoặc article để tóm tắt hoặc giới thiệu nội dung. Lead text thường có kích thước lớn hơn body text thông thường (text-lg/1.125rem hoặc text-xl/1.25rem) và có thể có font weight nhẹ hơn một chút so với heading (regular hoặc medium).

Lead paragraphs thường có margin bottom lớn hơn paragraphs thông thường và đôi khi có slight color variation để phân biệt với body text. Line height thường rộng rãi để tăng khả năng đọc.

### Blockquote

Blockquote component tạo ra styled quote blocks với border trái hoặc styling đặc biệt để phân biệt với regular text. Ngoại hình điển hình bao gồm indent, left border (thường có màu primary hoặc neutral), font size hơi lớn hơn body text và có thể italic.

Khi có citation, nó được hiển thị ở dưới cùng của quote với styling khác (thường nhỏ hơn, có thể regular weight nếu quote là italic). Blockquotes thường có padding và margin để tạo breathing space với surrounding content.

### Code

Code component hiển thị code snippets với monospace font và styling thích hợp. Inline code thường có background color nhẹ, border radius nhỏ, và padding nhỏ để phân biệt với surrounding text.

Block code có padding lớn hơn, full-width background, và có thể có line numbers, syntax highlighting dựa trên language specified. Font size thường nhỏ hơn một chút so với body text (text-sm/0.875rem) để tránh quá nhiều line wrapping với code.

### Caption

Caption component tạo ra small text thường dùng bên dưới images, tables, hoặc figures. Nó có font size nhỏ (text-sm/0.875rem hoặc text-xs/0.75rem) và thường có màu nhạt hơn so với body text (gray-600 trong light mode, gray-400 trong dark mode).

Captions thường được center-aligned khi đi kèm với centered media, nhưng có thể left-aligned trong nhiều trường hợp khác. Spacing giữa media và caption thường nhỏ (margin-top nhỏ) để maintain connection giữa chúng.

## Lưu ý quan trọng

- **Semantic HTML**: Luôn sử dụng đúng HTML elements cho đúng mục đích (h1-h6 cho headings, p cho paragraphs)
- **Heading Hierarchy**: Chỉ có một h1 trên mỗi page và follow sequential order (không skip levels)
- **Responsive Typography**: Tất cả font sizes cần điều chỉnh phù hợp theo viewport size
- **Fluid Typography**: Cân nhắc sử dụng fluid typography cho smooth transitions giữa breakpoints
- **Color Contrast**: Đảm bảo tất cả text đáp ứng WCAG AA standards (4.5:1 cho normal text, 3:1 cho large text)
- **Font Loading**: Tối ưu font loading để tránh layout shifts và content flashes
- **Line Length**: Control line length để không quá dài (max ~75 chars) hoặc quá ngắn
- **Vertical Rhythm**: Maintain consistent vertical rhythm với predictable spacing
- **Font Size Floor**: Không sử dụng font sizes dưới 12px (text-xs) cho body text
- **Variable Fonts**: Cân nhắc variable fonts để flexible styling với minimal overhead
- **Screen Readers**: Đảm bảo semantics phù hợp cho screen readers
- **Dark Mode**: Adjust font weights và colors cho better legibility trong dark mode
- **Font Features**: Sử dụng font-feature-settings cho advanced typography khi cần
- **Overflow Handling**: Đảm bảo text overflow được xử lý gracefully
- **Inline Elements**: Be careful với nested inline elements và potential styling conflicts
- **Lang Attribute**: Set lang attribute on HTML element cho proper hyphenation và pronunciation
- **Quotation Marks**: Sử dụng proper quotation marks dựa trên language
- **Non-breaking Spaces**: Sử dụng non-breaking spaces ở những nơi cần thiết
- **Internationalization**: Đảm bảo typography works với các languages khác nhau
- **Letter Spacing**: Adjust letter spacing cho headings và all-caps text
- **System Font Stack**: Consider using system font stack cho improved performance
