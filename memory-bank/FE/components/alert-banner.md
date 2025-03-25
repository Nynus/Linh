# Alert Banner Components

## Mô tả

Alert Banner Components là các thành phần UI dùng để hiển thị thông báo quan trọng, cảnh báo hoặc thông tin trạng thái cho người dùng trong nền tảng NyNus. Alert banners thường xuất hiện ở vị trí nổi bật (thường là phía trên cùng của trang hoặc section) và có thể persistent hoặc dismissible tùy theo mức độ quan trọng của thông báo. Chúng được thiết kế để thu hút sự chú ý của người dùng một cách phù hợp, sử dụng màu sắc, icons và typography để truyền đạt mức độ khẩn cấp và loại thông báo. Alert banners đóng vai trò quan trọng trong việc thông báo cho người dùng về các thay đổi hệ thống, lỗi, cảnh báo bảo mật, hoặc thông tin quan trọng khác.

## Loại

- Client Components cho interactive alerts
- Server Components cho static alerts
- Tích hợp với Radix UI cho accessibility
- Responsive và mobile-optimized
- Support cho rich content và actions
- Có thể được controlled hoặc uncontrolled

## Variants

### Theo Mức Độ

- **Info**: Thông tin chung, cập nhật
- **Success**: Thông báo thành công
- **Warning**: Cảnh báo cần chú ý
- **Error**: Lỗi hoặc vấn đề nghiêm trọng
- **Neutral**: Thông báo không có tính chất đặc biệt

### Theo Vị Trí

- **Top**: Hiển thị ở đầu trang
- **Bottom**: Hiển thị ở cuối trang
- **Inline**: Trong nội dung
- **Floating**: Nổi trên nội dung
- **Sticky**: Bám dính khi scroll

### Theo Behavior

- **Static**: Luôn hiển thị
- **Dismissible**: Có thể đóng
- **Auto-dismiss**: Tự động đóng sau thời gian
- **Expandable**: Có thể mở rộng để xem thêm
- **Interactive**: Có các actions

### Theo Style

- **Solid**: Background đặc
- **Soft**: Background nhạt
- **Outline**: Viền ngoài
- **Minimal**: Tối giản
- **Custom**: Tùy chỉnh theo brand

## Prompt chi tiết

```
Thiết kế một hệ thống Alert Banner Components toàn diện và nhất quán cho nền tảng học tập NyNus. Alert banners đóng vai trò quan trọng trong việc thông báo và hướng dẫn người dùng, do đó cần đảm bảo tính rõ ràng, dễ nhận biết và phù hợp với ngữ cảnh. Hệ thống alert cần cân bằng giữa việc thu hút sự chú ý và không gây phiền nhiễu cho trải nghiệm người dùng.

1. Core Structure:
   - Clear visual hierarchy
   - Consistent layout và spacing
   - Icon integration
   - Title và description areas
   - Action buttons
   - Dismiss controls
   - Status indicators
   - Content containers

2. Visual Design:
   - Color system cho different severities
   - Icon set phù hợp với message types
   - Typography hierarchy
   - Spacing và padding
   - Border radius và shadows
   - Animation và transitions
   - Responsive behavior
   - Dark mode support

3. Interaction States:
   - Hover effects
   - Focus states
   - Active states
   - Disabled states
   - Loading states
   - Expanded/collapsed states
   - Dismiss animations
   - Click/tap feedback

4. Content Guidelines:
   - Message structure
   - Title formatting
   - Description length
   - Action button text
   - Icon usage
   - Link styling
   - Truncation rules
   - Rich content support

5. Accessibility Features:
   - ARIA roles và labels
   - Keyboard navigation
   - Focus management
   - Screen reader support
   - Color contrast
   - Motion reduction
   - Touch targets
   - Semantic HTML

6. Responsive Behavior:
   - Mobile adaptations
   - Stack order
   - Content reflow
   - Touch interactions
   - Viewport adjustments
   - Orientation changes
   - Breakpoint handling
   - Performance optimization

Alert banners phải effective trong việc communicate important information while maintaining a balance between urgency và user experience. Design phải scalable để handle different types của alerts và flexible enough để adapt to various contexts trong educational platform. Focus on clarity, accessibility, và appropriate urgency levels cho different message types.
```

## Props và API

### Alert Banner

| Prop        | Type                                                     | Default   | Description                 |
| ----------- | -------------------------------------------------------- | --------- | --------------------------- |
| variant     | 'info' \| 'success' \| 'warning' \| 'error' \| 'neutral' | 'info'    | Loại alert                  |
| title       | string                                                   | undefined | Tiêu đề của alert           |
| description | string \| ReactNode                                      | undefined | Nội dung mô tả              |
| icon        | ReactNode                                                | undefined | Icon hiển thị               |
| action      | ReactNode                                                | undefined | Action buttons/links        |
| onClose     | () => void                                               | undefined | Handler khi đóng alert      |
| dismissible | boolean                                                  | true      | Cho phép đóng alert         |
| persistent  | boolean                                                  | false     | Alert không tự động đóng    |
| autoClose   | number \| null                                           | null      | Thời gian tự động đóng (ms) |
| position    | 'top' \| 'bottom' \| 'inline'                            | 'top'     | Vị trí hiển thị             |
| sticky      | boolean                                                  | false     | Bám dính khi scroll         |
| expanded    | boolean                                                  | false     | Trạng thái mở rộng          |
| className   | string                                                   | ''        | Custom classes              |
| style       | 'solid' \| 'soft' \| 'outline' \| 'minimal'              | 'solid'   | Kiểu style                  |
| size        | 'sm' \| 'md' \| 'lg'                                     | 'md'      | Kích thước                  |
| fullWidth   | boolean                                                  | true      | Chiếm full width            |
| closeable   | boolean                                                  | true      | Hiển thị nút đóng           |
| closeIcon   | ReactNode                                                | undefined | Custom close icon           |
| onExpand    | (expanded: boolean) => void                              | undefined | Handler khi mở rộng/thu gọn |
| role        | string                                                   | 'alert'   | ARIA role                   |
| children    | ReactNode                                                | undefined | Custom content              |

### Alert Group

| Prop           | Type                                 | Default   | Description                     |
| -------------- | ------------------------------------ | --------- | ------------------------------- |
| alerts         | AlertProps[]                         | []        | Danh sách các alerts            |
| limit          | number                               | undefined | Số lượng alerts tối đa hiển thị |
| spacing        | number \| string                     | '0.5rem'  | Khoảng cách giữa các alerts     |
| position       | 'top' \| 'bottom'                    | 'top'     | Vị trí của group                |
| className      | string                               | ''        | Custom classes cho container    |
| onDismissAll   | () => void                           | undefined | Handler khi đóng tất cả alerts  |
| motionPreset   | 'fade' \| 'slide' \| 'none'          | 'fade'    | Preset cho animation            |
| containerProps | React.HTMLAttributes<HTMLDivElement> | {}        | Props cho container             |

### Alert Action

| Prop      | Type               | Default   | Description            |
| --------- | ------------------ | --------- | ---------------------- |
| label     | string             | required  | Text cho action button |
| onClick   | () => void         | required  | Handler khi click      |
| variant   | 'solid' \| 'ghost' | 'solid'   | Style của button       |
| size      | 'sm' \| 'md'       | 'sm'      | Kích thước của button  |
| disabled  | boolean            | false     | Vô hiệu hóa button     |
| loading   | boolean            | false     | Trạng thái loading     |
| icon      | ReactNode          | undefined | Icon cho button        |
| className | string             | ''        | Custom classes         |

## Mô tả giao diện

### Info Alert

Background màu xanh dương nhạt (light mode) hoặc xanh dương đậm (dark mode) với icon thông tin (i). Border subtle cùng tông màu. Title và description có màu text tương phản với background. Icon và title có màu đậm hơn description. Có thể có action buttons với styling phù hợp với severity level.

### Success Alert

Background màu xanh lá nhạt với icon check hoặc success. Border và styling tương tự info nhưng với màu xanh lá. Success alerts thường có visual weight nhẹ hơn warning/error để không gây phân tâm không cần thiết. Có thể có action để view details hoặc undo action.

### Warning Alert

Background màu vàng/amber nhạt với icon cảnh báo (triangle với exclamation mark). Border và text màu amber đậm hơn. Warning alerts có visual prominence cao hơn info/success nhưng thấp hơn error. Thường đi kèm với actions để resolve warning.

### Error Alert

Background màu đỏ nhạt với icon error (x hoặc exclamation mark). Border và text màu đỏ đậm. Error alerts có highest visual prominence để thu hút sự chú ý ngay lập tức. Luôn có clear actions để resolve error hoặc get help. Có thể có expanded state để hiển thị error details.

### Neutral Alert

Background màu gray nhạt với icon phù hợp với content. Được sử dụng cho các thông báo không có tính chất đặc biệt về mức độ quan trọng. Styling subtle và professional, phù hợp cho các system announcements hoặc general updates.

## Lưu ý quan trọng

- **Accessibility**: Đảm bảo alerts có proper ARIA roles và được announced bởi screen readers
- **Positioning**: Cẩn thận với sticky alerts để không che khuất content quan trọng
- **Stacking**: Quản lý thứ tự và số lượng alerts khi có nhiều alerts cùng lúc
- **Animation**: Sử dụng subtle animations cho appear/disappear, respect reduced motion
- **Mobile**: Đảm bảo alerts responsive và không chiếm quá nhiều space trên mobile
- **Content**: Keep messages clear và concise, provide actions khi appropriate
- **Timing**: Cân nhắc kỹ timing cho auto-dismiss và animation duration
- **Persistence**: Lưu trạng thái của dismissed alerts khi cần
- **Performance**: Optimize render performance khi có nhiều alerts
- **Z-index**: Quản lý stack order với các elements khác
- **Feedback**: Provide clear feedback khi user interacts với alert
- **States**: Handle tất cả possible states (loading, error, success)
- **Integration**: Seamless integration với notification system
- **Testing**: Test alerts trong various contexts và screen sizes
- **Documentation**: Clear guidelines cho content và usage patterns
