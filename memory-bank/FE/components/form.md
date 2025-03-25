# Form Components

## Mô tả

Form Components là một tập hợp các thành phần UI được thiết kế để thu thập và xác thực dữ liệu người dùng trong nền tảng NyNus. Các components này tuân theo design system thống nhất và cung cấp trải nghiệm nhập liệu mượt mà, dễ sử dụng và accessible. Form components bao gồm nhiều input types khác nhau như text, number, email, password, checkbox, radio, select, file upload và có tích hợp sẵn các chức năng validation, error handling, và accessibility features. Chúng đóng vai trò quan trọng trong các tương tác người dùng như đăng ký, đăng nhập, tìm kiếm, tạo nội dung và cấu hình hệ thống.

## Loại

- Client Components (cần JavaScript cho validation và interactive states)
- Được xây dựng trên React Hook Form và Zod cho validation
- Tích hợp với Radix UI Primitives cho accessibility và customization
- Hỗ trợ cả controlled và uncontrolled components
- Tương thích với cả Next.js Server Actions và client-side submissions

## Variants

### Input Components

- **Text Input**: Nhập text đơn dòng
- **Password Input**: Nhập mật khẩu với toggle show/hide
- **Email Input**: Chuyên biệt cho email với validation
- **Number Input**: Nhập số với step controls
- **Search Input**: Input với search icon và clear button
- **Textarea**: Input đa dòng cho text dài
- **URL Input**: Input chuyên biệt cho URL

### Selection Components

- **Select/Dropdown**: Chọn từ danh sách các options
- **Combobox**: Kết hợp input và dropdown cho filtering
- **Checkbox**: Toggle on/off cho single option
- **Radio Group**: Chọn một option từ nhóm
- **Switch**: Toggle on/off với visual indicator
- **Slider**: Chọn giá trị từ range
- **Date Picker**: Chọn ngày/giờ
- **File Upload**: Upload files và media

### Form Organization

- **Form**: Container cho form elements
- **Form Group**: Group label và input
- **Form Section**: Nhóm các fields liên quan
- **Form Grid**: Layout grid cho form fields
- **Fieldset**: Group các controls liên quan với legend

### Validation & Feedback

- **Error Message**: Hiển thị lỗi validation
- **Helper Text**: Additional context/instructions
- **Form Success**: Feedback khi submit thành công
- **Loading State**: Indicator khi form processing

## Prompt chi tiết

```
Thiết kế một hệ thống Form Components toàn diện và nhất quán cho nền tảng học tập NyNus. Form components đóng vai trò then chốt trong việc thu thập thông tin từ người dùng, do đó cần đảm bảo không chỉ về mặt thẩm mỹ mà còn về usability, accessibility và validations.

1. Nguyên tắc thiết kế chung:
   - Visual consistency trong tất cả form elements
   - Clear visual hierarchy giữa labels, inputs và helper text
   - Obvious interactive states (default, hover, focus, disabled)
   - Error states rõ ràng và informative
   - Responsive adaptation cho mọi screen size
   - Support cho dark/light mode
   - Đảm bảo dễ dàng tab navigation
   - Minimal layout shifts khi validation errors hiển thị
   - Tối đa hóa usability cho cả mouse và touch users
   - Visual feedback tức thì cho user actions

2. Text Input Specifications:
   - Container với border, padding và background nhất quán
   - Border radius phù hợp (4-8px) tương đồng với các components khác
   - Clear focus state với outline/ring focus
   - Padding đủ lớn cho text và space giữa text và borders
   - Optional leading và trailing icons/addons
   - Placeholder text với proper styling (lighter color)
   - Helper text slot dưới input
   - Error messaging với validation
   - Support cho disabled và read-only states
   - Subtle visual cue cho required fields
   - Clear và dismiss buttons cho specific input types

3. Text Area Specifications:
   - Consistent styling với text inputs
   - Auto-resizing option (grow với content)
   - Min và max height controls
   - Scroll khi content vượt quá max height
   - Character/word counter option
   - Resize handle option (none, vertical, both)
   - Clear và intuitive focus states
   - Maintain text cursor position khi resize
   - Proper padding để tránh text áp sát edges
   - Markdown hoặc rich text support options

4. Selection Controls:
   - Checkbox:
     * Rõ ràng checked, unchecked, và indeterminate states
     * Tap target đủ lớn (min 24x24px)
     * Label position options (right, left)
     * Support cho single checkbox và checkbox groups
     * Clear visual feedback khi checked
     * Consistent animation khi state changes
     * Proper support cho keyboard navigation

   - Radio Buttons:
     * Clear visual differentiation từ checkboxes
     * Obvious selected và unselected states
     * Group controls với proper spacing
     * Single selection enforcement trong group
     * Adequate touch targets cho mobile
     * Optional description text cho mỗi option
     * Support cho disabled options trong group

   - Select/Dropdown:
     * Consistent styling với text inputs
     * Clear indicator cho dropdown functionality
     * Proper handling của long option text
     * Multi-select capability khi cần
     * Dropdown positioning (auto-detect best position)
     * Loading states cho async options
     * Empty và error states
     * Keyboard navigable dropdown
     * Search/filter functionality cho large lists
     * Clear selection option
     * Option grouping support
     * Custom option rendering
     * Virtual scrolling cho large datasets

   - Switch:
     * Clear toggle states (on/off)
     * Animations mượt mà khi toggle
     * Color differentiation giữa states
     * Label position options
     * Size variants (sm, md, lg)
     * Optional icons cho on/off states
     * Proper touch target sizing
     * Support cho disabled state

5. Specialized Inputs:

   - Date/Time Picker:
     * Calendar interface cho date selection
     * Clock interface cho time selection
     * Range selection support
     * Localization
     * Keyboard input fallback
     * Min/max date restrictions
     * Disabled dates functionality
     * Clear formatting của selected dates
     * Mobile-optimized interface

   - File Upload:
     * Drag-and-drop zone
     * File type restrictions
     * Multiple file support
     * Progress indicators khi uploading
     * Preview capabilities cho images/documents
     * Error handling cho invalid files
     * Size limit warnings/enforcement
     * Delete/remove functionality
     * Compact và expanded views

   - Number Input:
     * Increment/decrement controls
     * Min/max value restrictions
     * Step size control
     * Formatting options (decimal, percentage, currency)
     * Prevent invalid characters
     * Support cho keyboard up/down increment
     * Mobile-friendly controls

6. Form Organization:

   - Form Groups:
     * Container grouping label, input và error message
     * Consistent spacing giữa elements
     * Logical tab order enforcement
     * Visual connection giữa label và input
     * Optional visual grouping của related controls
     * Support cho required indicators
     * Help text/tooltip integration
     * Proper markup cho accessibility

   - Form Layouts:
     * Grid-based form layouts
     * Responsive collapsing từ multi-column to single
     * Logical grouping của related fields
     * Section dividers và headings
     * Progressive disclosure patterns
     * Sticky submit buttons cho long forms
     * Maintain proper visual hierarchy
     * Appropriate spacing giữa sections
     * Field dependencies và conditional rendering

7. Validation & Error States:

   - Visual Indicators:
     * Error colors (red/danger) cho invalid fields
     * Success colors (green) cho validated fields
     * Warning colors (amber/yellow) cho cautions
     * Icon indicators matching states
     * Border colors reflecting validation state
     * Clear error messages beneath affected fields
     * Summarized errors at form level khi cần
     * Animation/transition khi errors appear

   - Validation Types:
     * Required field validation
     * Format validation (email, URL, phone)
     * Length restrictions (min/max)
     * Numerical range validation
     * Pattern matching (regex)
     * Cross-field validation (password confirmation)
     * Asynchronous validation (username availability)
     * Custom validation rules
     * Real-time vs. submit-time validation options

   - Error Messaging:
     * Clear, concise error text
     * Actionable guidance (how to fix)
     * Proper error message placement
     * Grouped errors cho related issues
     * Avoidance của technical jargon
     * Internationalization support
     * Context-specific help

8. Accessibility Features:

   - Semantic HTML structure
   - Proper labeling (explicit và implicit)
   - ARIA attributes khi cần thiết
   - Keyboard navigation support
   - Screen reader considerations
   - Focus management
   - Color không phải only indicator
   - Error announcement cho screen readers
   - Reduced motion support
   - High contrast mode compatibility
   - Text zoom support

9. Performance Considerations:

   - Minimal re-renders khi typing
   - Debouncing cho real-time validation
   - Lazy loading của complex inputs
   - Optimized event handlers
   - Efficient form state management
   - Proper memo/caching for derived values
   - Small bundle size cho common inputs
   - Virtual rendering cho large option lists
   - Efficient validation (avoid blocking UI)
   - Static form fields khi appropriate

10. Advanced Features:

    - Multi-step form capabilities
    - Form arrays (dynamic field addition/removal)
    - Conditional form fields
    - Nested form objects
    - Save draft/auto-save functionality
    - Form wizard patterns
    - Field masking (phone numbers, credit cards)
    - Copy/paste optimization
    - Context-aware auto-fill
    - Undo/redo capability
    - Cross-field dependencies
    - Form-level reset và clear

Tất cả form components phải hoạt động tốt trong mọi contexts của NyNus, từ login forms đến quiz creation, course configuration, và user profiles. Chú ý đến nhất quán thị giác và hành vi, đảm bảo người dùng có thể dễ dàng hiểu và sử dụng forms trên toàn bộ nền tảng. Form components cần phải extensible để có thể tùy chỉnh cho specific use cases trong khi vẫn duy trì look-and-feel cốt lõi của design system.
```

## Props và API

### Input

| Prop         | Type                                                                                | Default   | Description                                      |
| ------------ | ----------------------------------------------------------------------------------- | --------- | ------------------------------------------------ |
| id           | string                                                                              | undefined | ID của input element                             |
| name         | string                                                                              | undefined | Name của input, được sử dụng cho form submission |
| value        | string                                                                              | undefined | Giá trị của input (controlled)                   |
| defaultValue | string                                                                              | undefined | Giá trị mặc định (uncontrolled)                  |
| type         | 'text' \| 'email' \| 'password' \| 'number' \| 'search' \| 'tel' \| 'url' \| 'date' | 'text'    | Loại input                                       |
| placeholder  | string                                                                              | undefined | Placeholder text                                 |
| disabled     | boolean                                                                             | false     | Vô hiệu hóa input                                |
| readOnly     | boolean                                                                             | false     | Chế độ chỉ đọc                                   |
| required     | boolean                                                                             | false     | Đánh dấu trường bắt buộc                         |
| autoFocus    | boolean                                                                             | false     | Tự động focus khi mount                          |
| error        | boolean                                                                             | false     | Trạng thái lỗi                                   |
| errorMessage | string                                                                              | undefined | Thông báo lỗi                                    |
| helperText   | string                                                                              | undefined | Text hỗ trợ hiển thị dưới input                  |
| leftIcon     | ReactNode                                                                           | undefined | Icon hiển thị bên trái                           |
| rightIcon    | ReactNode                                                                           | undefined | Icon hiển thị bên phải                           |
| showClear    | boolean                                                                             | false     | Hiển thị nút xóa                                 |
| onClear      | () => void                                                                          | undefined | Handler khi click nút xóa                        |
| size         | 'sm' \| 'md' \| 'lg'                                                                | 'md'      | Kích thước input                                 |
| className    | string                                                                              | ''        | Custom classes                                   |
| onChange     | (e: React.ChangeEvent<HTMLInputElement>) => void                                    | undefined | Handler khi giá trị thay đổi                     |
| onBlur       | (e: React.FocusEvent<HTMLInputElement>) => void                                     | undefined | Handler khi blur                                 |
| onFocus      | (e: React.FocusEvent<HTMLInputElement>) => void                                     | undefined | Handler khi focus                                |

### Textarea

| Prop          | Type                                                | Default    | Description                        |
| ------------- | --------------------------------------------------- | ---------- | ---------------------------------- |
| id            | string                                              | undefined  | ID của textarea element            |
| name          | string                                              | undefined  | Name của textarea                  |
| value         | string                                              | undefined  | Giá trị của textarea (controlled)  |
| defaultValue  | string                                              | undefined  | Giá trị mặc định (uncontrolled)    |
| placeholder   | string                                              | undefined  | Placeholder text                   |
| rows          | number                                              | 3          | Số dòng hiển thị                   |
| maxRows       | number                                              | undefined  | Số dòng tối đa khi auto-resize     |
| minRows       | number                                              | undefined  | Số dòng tối thiểu khi auto-resize  |
| maxLength     | number                                              | undefined  | Số ký tự tối đa                    |
| disabled      | boolean                                             | false      | Vô hiệu hóa textarea               |
| readOnly      | boolean                                             | false      | Chế độ chỉ đọc                     |
| required      | boolean                                             | false      | Đánh dấu trường bắt buộc           |
| autoFocus     | boolean                                             | false      | Tự động focus khi mount            |
| error         | boolean                                             | false      | Trạng thái lỗi                     |
| errorMessage  | string                                              | undefined  | Thông báo lỗi                      |
| helperText    | string                                              | undefined  | Text hỗ trợ hiển thị dưới textarea |
| showCharCount | boolean                                             | false      | Hiển thị số ký tự đã nhập          |
| resize        | 'none' \| 'both' \| 'horizontal' \| 'vertical'      | 'vertical' | Cho phép resize                    |
| className     | string                                              | ''         | Custom classes                     |
| onChange      | (e: React.ChangeEvent<HTMLTextAreaElement>) => void | undefined  | Handler khi giá trị thay đổi       |
| onBlur        | (e: React.FocusEvent<HTMLTextAreaElement>) => void  | undefined  | Handler khi blur                   |
| onFocus       | (e: React.FocusEvent<HTMLTextAreaElement>) => void  | undefined  | Handler khi focus                  |

### Select

| Prop         | Type                                | Default            | Description                      |
| ------------ | ----------------------------------- | ------------------ | -------------------------------- |
| id           | string                              | undefined          | ID của select element            |
| name         | string                              | undefined          | Name của select                  |
| value        | string \| string[]                  | undefined          | Giá trị đã chọn (controlled)     |
| defaultValue | string \| string[]                  | undefined          | Giá trị mặc định (uncontrolled)  |
| options      | SelectOption[]                      | []                 | Danh sách options                |
| placeholder  | string                              | 'Chọn một giá trị' | Placeholder text                 |
| disabled     | boolean                             | false              | Vô hiệu hóa select               |
| required     | boolean                             | false              | Đánh dấu trường bắt buộc         |
| error        | boolean                             | false              | Trạng thái lỗi                   |
| errorMessage | string                              | undefined          | Thông báo lỗi                    |
| helperText   | string                              | undefined          | Text hỗ trợ hiển thị dưới select |
| multiple     | boolean                             | false              | Cho phép chọn nhiều              |
| searchable   | boolean                             | false              | Cho phép search trong options    |
| clearable    | boolean                             | false              | Cho phép xóa lựa chọn            |
| loading      | boolean                             | false              | Trạng thái loading options       |
| size         | 'sm' \| 'md' \| 'lg'                | 'md'               | Kích thước select                |
| className    | string                              | ''                 | Custom classes                   |
| onChange     | (value: string \| string[]) => void | undefined          | Handler khi lựa chọn thay đổi    |
| onBlur       | () => void                          | undefined          | Handler khi blur                 |
| onFocus      | () => void                          | undefined          | Handler khi focus                |

### Checkbox

| Prop           | Type                       | Default   | Description                        |
| -------------- | -------------------------- | --------- | ---------------------------------- |
| id             | string                     | undefined | ID của checkbox element            |
| name           | string                     | undefined | Name của checkbox                  |
| checked        | boolean                    | undefined | Trạng thái checked (controlled)    |
| defaultChecked | boolean                    | undefined | Trạng thái mặc định (uncontrolled) |
| label          | ReactNode                  | undefined | Label cho checkbox                 |
| disabled       | boolean                    | false     | Vô hiệu hóa checkbox               |
| required       | boolean                    | false     | Đánh dấu trường bắt buộc           |
| indeterminate  | boolean                    | false     | Trạng thái indeterminate           |
| error          | boolean                    | false     | Trạng thái lỗi                     |
| errorMessage   | string                     | undefined | Thông báo lỗi                      |
| helperText     | string                     | undefined | Text hỗ trợ hiển thị dưới checkbox |
| labelPosition  | 'left' \| 'right'          | 'right'   | Vị trí của label                   |
| size           | 'sm' \| 'md' \| 'lg'       | 'md'      | Kích thước checkbox                |
| className      | string                     | ''        | Custom classes                     |
| onChange       | (checked: boolean) => void | undefined | Handler khi trạng thái thay đổi    |
| onBlur         | () => void                 | undefined | Handler khi blur                   |
| onFocus        | () => void                 | undefined | Handler khi focus                  |

### Radio

| Prop           | Type                                             | Default   | Description                                      |
| -------------- | ------------------------------------------------ | --------- | ------------------------------------------------ |
| id             | string                                           | undefined | ID của radio element                             |
| name           | string                                           | required  | Name của radio (cần giống nhau trong cùng group) |
| value          | string                                           | required  | Giá trị của radio option                         |
| checked        | boolean                                          | undefined | Trạng thái checked (controlled)                  |
| defaultChecked | boolean                                          | undefined | Trạng thái mặc định (uncontrolled)               |
| label          | ReactNode                                        | undefined | Label cho radio                                  |
| disabled       | boolean                                          | false     | Vô hiệu hóa radio                                |
| required       | boolean                                          | false     | Đánh dấu trường bắt buộc                         |
| error          | boolean                                          | false     | Trạng thái lỗi                                   |
| helperText     | string                                           | undefined | Text hỗ trợ hiển thị dưới radio                  |
| labelPosition  | 'left' \| 'right'                                | 'right'   | Vị trí của label                                 |
| size           | 'sm' \| 'md' \| 'lg'                             | 'md'      | Kích thước radio                                 |
| className      | string                                           | ''        | Custom classes                                   |
| onChange       | (e: React.ChangeEvent<HTMLInputElement>) => void | undefined | Handler khi trạng thái thay đổi                  |
| onBlur         | () => void                                       | undefined | Handler khi blur                                 |
| onFocus        | () => void                                       | undefined | Handler khi focus                                |

### RadioGroup

| Prop         | Type                       | Default    | Description                     |
| ------------ | -------------------------- | ---------- | ------------------------------- |
| name         | string                     | required   | Name cho radio group            |
| value        | string                     | undefined  | Giá trị đã chọn (controlled)    |
| defaultValue | string                     | undefined  | Giá trị mặc định (uncontrolled) |
| options      | RadioOption[]              | []         | Danh sách radio options         |
| disabled     | boolean                    | false      | Vô hiệu hóa toàn bộ group       |
| required     | boolean                    | false      | Đánh dấu trường bắt buộc        |
| error        | boolean                    | false      | Trạng thái lỗi                  |
| errorMessage | string                     | undefined  | Thông báo lỗi                   |
| helperText   | string                     | undefined  | Text hỗ trợ hiển thị dưới group |
| orientation  | 'horizontal' \| 'vertical' | 'vertical' | Hướng của group                 |
| size         | 'sm' \| 'md' \| 'lg'       | 'md'       | Kích thước radios               |
| className    | string                     | ''         | Custom classes                  |
| onChange     | (value: string) => void    | undefined  | Handler khi lựa chọn thay đổi   |

### Switch

| Prop           | Type                       | Default   | Description                        |
| -------------- | -------------------------- | --------- | ---------------------------------- |
| id             | string                     | undefined | ID của switch element              |
| name           | string                     | undefined | Name của switch                    |
| checked        | boolean                    | undefined | Trạng thái checked (controlled)    |
| defaultChecked | boolean                    | undefined | Trạng thái mặc định (uncontrolled) |
| label          | ReactNode                  | undefined | Label cho switch                   |
| disabled       | boolean                    | false     | Vô hiệu hóa switch                 |
| required       | boolean                    | false     | Đánh dấu trường bắt buộc           |
| error          | boolean                    | false     | Trạng thái lỗi                     |
| errorMessage   | string                     | undefined | Thông báo lỗi                      |
| helperText     | string                     | undefined | Text hỗ trợ hiển thị dưới switch   |
| labelPosition  | 'left' \| 'right'          | 'right'   | Vị trí của label                   |
| size           | 'sm' \| 'md' \| 'lg'       | 'md'      | Kích thước switch                  |
| className      | string                     | ''        | Custom classes                     |
| onChange       | (checked: boolean) => void | undefined | Handler khi trạng thái thay đổi    |
| onBlur         | () => void                 | undefined | Handler khi blur                   |
| onFocus        | () => void                 | undefined | Handler khi focus                  |

### FormControl

| Prop           | Type      | Default   | Description                      |
| -------------- | --------- | --------- | -------------------------------- |
| id             | string    | undefined | ID for the form control          |
| label          | ReactNode | undefined | Label cho form control           |
| labelFor       | string    | undefined | Element ID mà label liên kết đến |
| error          | boolean   | false     | Trạng thái lỗi                   |
| errorMessage   | string    | undefined | Thông báo lỗi                    |
| helperText     | string    | undefined | Text hỗ trợ                      |
| required       | boolean   | false     | Đánh dấu trường bắt buộc         |
| disabled       | boolean   | false     | Vô hiệu hóa control              |
| className      | string    | ''        | Custom classes cho container     |
| labelClassName | string    | ''        | Custom classes cho label         |
| children       | ReactNode | undefined | Form input element               |

### Form

| Prop         | Type                         | Default   | Description                        |
| ------------ | ---------------------------- | --------- | ---------------------------------- |
| id           | string                       | undefined | ID của form                        |
| onSubmit     | (e: React.FormEvent) => void | undefined | Handler khi submit form            |
| action       | string \| FormAction         | undefined | Form action URL hoặc Server Action |
| method       | 'get' \| 'post'              | 'post'    | HTTP method khi submit             |
| autoComplete | 'on' \| 'off'                | 'on'      | Browser autocomplete behavior      |
| noValidate   | boolean                      | false     | Disable HTML5 validation           |
| children     | ReactNode                    | undefined | Form content                       |
| className    | string                       | ''        | Custom classes                     |

## Mô tả giao diện

### Text Input

Input text có container hình chữ nhật với border (1-2px) và border-radius nhất quán với design system (thường 4-8px). Background màu sáng trong light mode hoặc trung tính trong dark mode. Chiều cao cố định cho mỗi size (sm: ~30px, md: ~40px, lg: ~50px) với padding ngang (12-16px) và dọc (8-12px) đủ rộng.

Text có màu sắc chính của typography system. Placeholder text có màu nhạt hơn và font-style normal. Khi focus, input có outline/ring với màu primary và transition mượt mà. Error state có border và outline màu đỏ/danger. Disabled state có opacity thấp (~60%) và background nhạt.

Khi có icons, chúng được đặt ở hai bên với padding phù hợp. Icons bên phải thường là actionable (clear, show/hide password). Input có dấu hiệu required nhỏ bên cạnh label (thường là dấu sao).

### Textarea

Textarea có visual styling giống text input nhưng với chiều cao auto hoặc fixed dựa vào rows. Padding đồng nhất quanh viền (12-16px). Text wrap tự động. Resize handle ở góc dưới phải khi resize=true với styling subtle.

Khi auto-resize được enabled, textarea tự động mở rộng khi người dùng nhập nhiều nội dung, nhưng không vượt quá maxRows. Scroll bar xuất hiện khi content vượt quá maxRows. Character counter nhỏ ở góc dưới phải khi showCharCount=true.

### Select/Dropdown

Select có appearance giống text input khi đóng, với dropdown indicator (thường là chevron) ở bên phải. Khi mở, dropdown hiển thị danh sách options trong một popup panel với shadow và cùng border-radius.

Mỗi option có padding đủ (10-14px) và hover state rõ ràng. Selected option được highlight (background và/hoặc checkmark). Multiple select cho phép chọn nhiều options với checkboxes và selected pills hiển thị trong input.

Khi searchable=true, dropdown có input field ở trên để filter options. Loading state hiển thị spinner thay cho chevron. Empty state có message hướng dẫn.

### Checkbox

Checkbox có container hình vuông (16-24px tùy size) với border và border-radius nhỏ (2-4px). Khi checked, background fill với màu primary và checkmark trắng. Animation mượt mà khi toggle states.

Label được đặt bên phải (mặc định) hoặc trái với spacing phù hợp. Focus state có outline/ring xung quanh checkbox. Indeterminate state có dash ngang thay vì checkmark. Touch target area lớn hơn visual checkbox để dễ tương tác trên mobile.

### Radio

Radio có visual styling tương tự checkbox nhưng với container hình tròn (border-radius 50%). Khi selected, có dot tròn trong center với màu primary. Animation mượt mà khi toggle.

RadioGroup cung cấp layout cho radios, theo chiều dọc (mặc định) hoặc ngang, với spacing đồng đều giữa các options. Mỗi radio có label riêng và có thể có helper text description.

### Switch

Switch có track hình chữ nhật với ends rounded và thumb tròn di chuyển từ trái sang phải. Khi off, track có màu neutral/gray. Khi on, track có màu primary. Thumb có subtle shadow và kích thước lớn hơn track height một chút.

Animation mượt mà khi toggle với thumb sliding và track color changing. Label được đặt bên cạnh với spacing phù hợp. Size variants ảnh hưởng đến kích thước của cả track và thumb.

### FormControl

FormControl là container bao quanh input và related elements. Label ở trên cùng với font-weight medium/semibold. Required indicator (dấu sao đỏ) nếu required=true. Input element ở giữa. Helper text và error message ở dưới với text size nhỏ hơn.

Spacing giữa các elements nhất quán (8-12px). Khi có error, error message có màu đỏ/danger và thay thế helper text. Animation mượt mà khi switching giữa helper text và error message.

### Form

Form component không có nhiều visual styling mà focus vào structure và behavior. Các FormControl được arranged theo grid system hoặc flex layout. Typical arrangement là một column trên mobile và 1-2 columns trên desktop.

Submit button thường ở dưới cùng, full-width trên mobile và align-right/center trên desktop. Spacing giữa các form groups nhất quán (16-24px). Form sections có thể được phân tách bằng dividers hoặc card containers.

## Lưu ý quan trọng

- **Accessibility**: Đảm bảo tất cả form controls có proper labeling, ARIA attributes và keyboard navigation
- **Validation**: Sử dụng kết hợp client-side và server-side validation, hiển thị lỗi rõ ràng và hướng dẫn cách sửa
- **Performance**: Tối ưu re-renders trong forms phức tạp, sử dụng memoization và debouncing khi cần
- **Mobile Experience**: Đảm bảo các fields đủ lớn cho touch interaction, virtual keyboard không che lấp input đang focus
- **Error Handling**: Xử lý và hiển thị lỗi ở cả field level và form level một cách rõ ràng
- **Responsive Design**: Form layouts phải responsive và adaptive trên các screen sizes khác nhau
- **Nested Forms**: Cẩn thận với nested forms - HTML không cho phép form elements lồng nhau
- **Tab Order**: Đảm bảo logical tab order giữa các fields để navigation dễ dàng
- **Dirty Tracking**: Implement dirty tracking để cảnh báo khi user rời form chưa hoàn thành
- **Auto-save**: Cân nhắc auto-save cho forms phức tạp để tránh mất dữ liệu
- **Form Reset**: Cung cấp cách reset form và xử lý reset event đúng cách
- **Loading States**: Hiển thị loading indicators khi form đang submit hoặc đang tải dữ liệu
- **Form Sections**: Chia forms dài thành sections logic hoặc steps để dễ quản lý
- **Input Masks**: Sử dụng input masks cho formats phức tạp (phone, credit card, etc.)
- **Server vs Client**: Cân nhắc việc sử dụng Server Components cho static parts và Client Components cho interactive parts
