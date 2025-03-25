# Input Components

## Mô tả

Input Components là các thành phần UI cơ bản dùng để thu thập dữ liệu từ người dùng trong nền tảng NyNus. Chúng bao gồm nhiều loại input khác nhau như text, number, password, email, search, và các biến thể đặc biệt khác. Input components được thiết kế để cung cấp trải nghiệm nhập liệu mượt mà, dễ sử dụng và accessible, đồng thời tích hợp chặt chẽ với hệ thống validation và form handling của nền tảng. Các input được tối ưu hóa cho cả desktop và mobile, với sự chú ý đặc biệt đến các chi tiết như touch targets, keyboard interactions, và error states.

## Loại

- Client Components (cần JavaScript cho validation và states)
- Tích hợp với React Hook Form cho form handling
- Sử dụng Zod cho validation schemas
- Tương thích với cả controlled và uncontrolled patterns
- Hỗ trợ accessibility và keyboard navigation
- Responsive và mobile-optimized

## Variants

### Theo Loại Input

- **Text Input**: Nhập text đơn dòng cơ bản
- **Password Input**: Nhập mật khẩu với toggle show/hide
- **Number Input**: Nhập số với step controls
- **Email Input**: Chuyên biệt cho email với validation
- **Search Input**: Input với search icon và clear button
- **URL Input**: Input cho địa chỉ web
- **Phone Input**: Input cho số điện thoại với country code
- **Date Input**: Input cho ngày tháng
- **Time Input**: Input cho thời gian

### Theo Trạng Thái

- **Default**: Trạng thái bình thường
- **Focused**: Khi input được focus
- **Filled**: Khi có giá trị
- **Error**: Khi có lỗi validation
- **Success**: Khi validation thành công
- **Disabled**: Khi input bị vô hiệu hóa
- **Read-only**: Chỉ đọc, không thể chỉnh sửa

### Theo Kích Thước

- **Small**: Cho UI dense hoặc compact
- **Medium**: Kích thước tiêu chuẩn
- **Large**: Cho emphasis hoặc touch interfaces

### Theo Style

- **Outline**: Border rõ ràng
- **Filled**: Background filled
- **Flushed**: Chỉ có bottom border
- **Unstyled**: Minimal styling cho custom cases

## Prompt chi tiết

```
Thiết kế một hệ thống Input Components toàn diện và nhất quán cho nền tảng học tập NyNus. Input components là điểm tiếp xúc chính giữa người dùng và hệ thống trong việc nhập liệu, do đó cần đảm bảo tính dễ sử dụng, rõ ràng và đáng tin cậy. Hệ thống input cần cân bằng giữa tính thẩm mỹ và chức năng, đồng thời đảm bảo accessibility và validation chặt chẽ.

1. Core Structure:
   - Clear visual hierarchy
   - Consistent spacing và sizing
   - Label placement options
   - Helper text support
   - Error message display
   - Icon integration (left/right)
   - Clear affordances
   - Focus states
   - Placeholder text

2. Validation & Feedback:
   - Real-time validation
   - Error states với clear messaging
   - Success states
   - Loading states
   - Required field indicators
   - Character count
   - Strength indicators (cho passwords)
   - Custom validation rules
   - Async validation support

3. Accessibility Features:
   - ARIA labels và descriptions
   - Error announcements
   - Keyboard navigation
   - Focus management
   - High contrast support
   - Screen reader optimization
   - Touch target sizing
   - Reduced motion options

4. Mobile Considerations:
   - Touch-friendly sizing
   - Virtual keyboard optimization
   - Clear touch feedback
   - Appropriate input types
   - Viewport adjustments
   - Gesture support
   - Smooth scrolling
   - Zoom behavior

5. Advanced Features:
   - Auto-complete support
   - Mask input patterns
   - Copy/paste handling
   - Undo/redo support
   - Selection behavior
   - Cursor management
   - IME support
   - Context menu integration

6. Integration:
   - Form library compatibility
   - Validation schema support
   - Event handling
   - State management
   - Custom hooks
   - Controlled/uncontrolled modes
   - Server actions support
   - Error boundary handling

Input components phải provide consistent experience across platform, maintaining familiar patterns while adding thoughtful enhancements for educational context. Design should focus on clarity và ease of use, với clear feedback và error prevention. System must be flexible enough to handle various data types và validation rules while maintaining performance và accessibility.
```

## Props và API

### Base Input

| Prop         | Type                                                    | Default   | Description                     |
| ------------ | ------------------------------------------------------- | --------- | ------------------------------- |
| value        | string                                                  | undefined | Giá trị của input (controlled)  |
| defaultValue | string                                                  | undefined | Giá trị mặc định (uncontrolled) |
| type         | 'text' \| 'password' \| 'email' \| 'number' \| 'search' | 'text'    | Loại input                      |
| label        | string                                                  | undefined | Label cho input                 |
| placeholder  | string                                                  | undefined | Placeholder text                |
| error        | string                                                  | undefined | Error message                   |
| helperText   | string                                                  | undefined | Helper text                     |
| required     | boolean                                                 | false     | Đánh dấu field là bắt buộc      |
| disabled     | boolean                                                 | false     | Vô hiệu hóa input               |
| readOnly     | boolean                                                 | false     | Chế độ chỉ đọc                  |
| leftIcon     | ReactNode                                               | undefined | Icon bên trái                   |
| rightIcon    | ReactNode                                               | undefined | Icon bên phải                   |
| size         | 'sm' \| 'md' \| 'lg'                                    | 'md'      | Kích thước của input            |
| variant      | 'outline' \| 'filled' \| 'flushed' \| 'unstyled'        | 'outline' | Kiểu style của input            |
| fullWidth    | boolean                                                 | false     | Chiếm full width của container  |
| className    | string                                                  | ''        | Custom classes                  |
| id           | string                                                  | undefined | ID của input                    |
| name         | string                                                  | undefined | Name của input                  |
| maxLength    | number                                                  | undefined | Số ký tự tối đa                 |
| pattern      | string                                                  | undefined | Pattern validation              |
| autoComplete | string                                                  | undefined | Giá trị autocomplete            |
| autoFocus    | boolean                                                 | false     | Tự động focus khi mount         |
| form         | string                                                  | undefined | ID của form chứa input          |
| onChange     | (event: ChangeEvent) => void                            | undefined | Handler khi giá trị thay đổi    |
| onFocus      | (event: FocusEvent) => void                             | undefined | Handler khi focus               |
| onBlur       | (event: FocusEvent) => void                             | undefined | Handler khi blur                |
| onKeyDown    | (event: KeyboardEvent) => void                          | undefined | Handler khi nhấn phím           |
| onKeyUp      | (event: KeyboardEvent) => void                          | undefined | Handler khi thả phím            |
| onPaste      | (event: ClipboardEvent) => void                         | undefined | Handler khi paste               |

### Password Input

| Prop             | Type                                  | Default   | Description                             |
| ---------------- | ------------------------------------- | --------- | --------------------------------------- |
| showPassword     | boolean                               | false     | Hiển thị/ẩn mật khẩu                    |
| toggleIcon       | ReactNode                             | undefined | Icon cho toggle password                |
| showStrength     | boolean                               | false     | Hiển thị strength indicator             |
| strengthLevels   | Array<{level: string, color: string}> | []        | Các mức độ strength và màu tương ứng    |
| onToggle         | (show: boolean) => void               | undefined | Handler khi toggle show/hide            |
| strengthCallback | (score: number) => void               | undefined | Handler khi tính toán password strength |

### Number Input

| Prop      | Type                      | Default   | Description                    |
| --------- | ------------------------- | --------- | ------------------------------ |
| min       | number                    | undefined | Giá trị tối thiểu              |
| max       | number                    | undefined | Giá trị tối đa                 |
| step      | number                    | 1         | Bước nhảy khi tăng/giảm        |
| precision | number                    | 0         | Số chữ số thập phân            |
| format    | string                    | undefined | Format string (e.g., currency) |
| onStep    | (value: number) => void   | undefined | Handler khi step up/down       |
| parser    | (value: string) => any    | undefined | Custom parser function         |
| formatter | (value: number) => string | undefined | Custom formatter function      |

### Search Input

| Prop           | Type                         | Default   | Description                        |
| -------------- | ---------------------------- | --------- | ---------------------------------- |
| onSearch       | (value: string) => void      | undefined | Handler khi search                 |
| onClear        | () => void                   | undefined | Handler khi clear input            |
| searchIcon     | ReactNode                    | undefined | Custom search icon                 |
| clearIcon      | ReactNode                    | undefined | Custom clear icon                  |
| loading        | boolean                      | false     | Hiển thị loading state             |
| debounceTime   | number                       | 300       | Thời gian debounce cho search (ms) |
| searchOnEnter  | boolean                      | false     | Chỉ search khi nhấn Enter          |
| onSearchChange | (value: string) => void      | undefined | Handler khi search value thay đổi  |
| suggestions    | string[]                     | []        | Danh sách suggestions              |
| onSuggestion   | (suggestion: string) => void | undefined | Handler khi chọn suggestion        |

## Mô tả giao diện

### Default State

Input có container hình chữ nhật với border radius nhẹ (thường 4-6px). Border color là màu neutral (gray) với độ đậm vừa phải. Background trắng (light mode) hoặc dark gray (dark mode). Label nằm phía trên input với font-size nhỏ hơn input text. Placeholder text có màu nhạt hơn regular text. Padding đủ rộng cho comfortable typing (thường 8-12px vertical, 12-16px horizontal).

### Focus State

Khi focus, border chuyển sang màu primary (thường là brand color) với độ đậm cao hơn. Có thể có subtle glow effect với màu primary opacity thấp. Focus ring hiển thị theo platform conventions (thường là outline với offset). Label có thể đổi màu theo primary color. Transition mượt mà khi vào/ra focus state.

### Error State

Border chuyển sang màu đỏ/danger khi có lỗi. Error message hiển thị bên dưới input với màu đỏ tương tự và icon cảnh báo (tùy chọn). Helper text (nếu có) bị thay thế bởi error message. Focus state trong error vẫn giữ màu đỏ thay vì primary color. Có thể có subtle shake animation khi error xuất hiện.

### Success State

Khi validation thành công, có thể hiển thị border màu xanh lá/success và checkmark icon (tùy chọn). Success state thường subtle hơn error state để không gây phân tâm. Helper text có thể hiển thị positive feedback.

### Disabled State

Opacity giảm xuống (thường 60-70%) và có cursor not-allowed. Background có thể chuyển sang màu nhạt hơn hoặc pattern disabled. Tất cả interactions đều bị vô hiệu hóa. Text và placeholder có màu muted.

### With Icons

Icons (left/right) được căn giữa theo chiều cao của input. Padding được điều chỉnh để tạo khoảng cách phù hợp giữa icon và text (thường 8px). Icons có màu neutral, có thể thay đổi màu theo state của input (error, success). Interactive icons (như password toggle, clear button) có hover states.

## Lưu ý quan trọng

- **Accessibility**: Đảm bảo proper ARIA labels, keyboard navigation và screen reader support
- **Validation**: Implement client-side validation với clear feedback và error prevention
- **Mobile UX**: Optimize cho touch interfaces với appropriate input types và keyboard behaviors
- **Performance**: Tránh unnecessary re-renders và implement proper debouncing cho real-time validation
- **Internationalization**: Support cho different character sets và text directions
- **Security**: Proper handling của sensitive data (passwords, personal info)
- **Integration**: Seamless integration với form libraries và validation schemas
- **Consistency**: Maintain consistent behavior và appearance across all input types
- **Error Prevention**: Help users avoid và recover from errors với clear guidance
- **Customization**: Flexible styling system để adapt to different contexts
- **State Management**: Clear handling của all possible states và transitions
- **Documentation**: Comprehensive documentation cho all props và behaviors
- **Testing**: Thorough testing của all states và edge cases
- **Feedback**: Clear visual và programmatic feedback cho all interactions
- **Defaults**: Sensible defaults that work well trong most cases
