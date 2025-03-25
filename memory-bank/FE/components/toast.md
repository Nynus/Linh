# Toast Components

## Mô tả

Toast Components là các thành phần UI dùng để hiển thị thông báo tạm thời, ngắn gọn cho người dùng trong nền tảng NyNus. Toasts thường xuất hiện ở góc màn hình (thường là góc trên bên phải) và tự động biến mất sau một khoảng thời gian. Chúng được thiết kế để cung cấp feedback không gây gián đoạn cho các hành động của người dùng, sử dụng animation mượt mà và styling phù hợp để truyền đạt thông tin một cách hiệu quả. Toast components là một phần quan trọng của hệ thống notification, phù hợp cho các thông báo ngắn gọn không yêu cầu tương tác từ người dùng.

## Loại

- Client Components cho interactive toasts
- Server Components cho static toasts
- Tích hợp với Radix UI Toast cho accessibility
- Responsive và mobile-optimized
- Support cho rich content
- Có thể được controlled hoặc uncontrolled

## Variants

### Theo Mức Độ

- **Info**: Thông tin chung
- **Success**: Thông báo thành công
- **Warning**: Cảnh báo nhẹ
- **Error**: Thông báo lỗi
- **Loading**: Trạng thái đang xử lý
- **Custom**: Tùy chỉnh theo nhu cầu

### Theo Vị Trí

- **Top Right**: Góc trên bên phải (default)
- **Top Left**: Góc trên bên trái
- **Bottom Right**: Góc dưới bên phải
- **Bottom Left**: Góc dưới bên trái
- **Top Center**: Giữa trên
- **Bottom Center**: Giữa dưới

### Theo Animation

- **Fade**: Mờ dần
- **Slide**: Trượt vào/ra
- **Scale**: Phóng to/thu nhỏ
- **Custom**: Animation tùy chỉnh
- **None**: Không có animation

### Theo Style

- **Default**: Style mặc định
- **Solid**: Background đặc
- **Soft**: Background nhạt
- **Outline**: Viền ngoài
- **Minimal**: Tối giản
- **Custom**: Tùy chỉnh theo brand

## Prompt chi tiết

```
Thiết kế một hệ thống Toast Components toàn diện và nhất quán cho nền tảng học tập NyNus. Toast notifications đóng vai trò quan trọng trong việc cung cấp feedback ngay lập tức cho người dùng mà không làm gián đoạn luồng công việc. Hệ thống toast cần đảm bảo tính rõ ràng, không gây phiền nhiễu và phù hợp với ngữ cảnh sử dụng.

1. Core Structure:
   - Clear visual hierarchy
   - Consistent layout và spacing
   - Icon integration
   - Title và description areas
   - Optional action buttons
   - Progress indicator
   - Close button
   - Content container

2. Visual Design:
   - Color system cho different types
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
   - Progress indicator
   - Close button states
   - Animation states
   - Stack behavior
   - Touch interactions

4. Content Guidelines:
   - Message structure
   - Title formatting
   - Description length
   - Action text
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

Toast components phải effective trong việc communicate feedback while maintaining a non-intrusive presence. Design phải scalable để handle different types của notifications và flexible enough để adapt to various contexts trong educational platform. Focus on timing, placement, và appropriate styling cho different message types.
```

## Props và API

### Toast Component

| Prop         | Type                                                     | Default     | Description                       |
| ------------ | -------------------------------------------------------- | ----------- | --------------------------------- |
| variant      | 'info' \| 'success' \| 'warning' \| 'error' \| 'loading' | 'info'      | Loại toast                        |
| title        | string                                                   | undefined   | Tiêu đề của toast                 |
| description  | string \| ReactNode                                      | undefined   | Nội dung mô tả                    |
| icon         | ReactNode                                                | undefined   | Icon hiển thị                     |
| action       | ReactNode                                                | undefined   | Action button/link                |
| duration     | number                                                   | 5000        | Thời gian hiển thị (ms)           |
| position     | ToastPosition                                            | 'top-right' | Vị trí hiển thị                   |
| onClose      | () => void                                               | undefined   | Handler khi đóng                  |
| onOpenChange | (open: boolean) => void                                  | undefined   | Handler khi thay đổi trạng thái   |
| className    | string                                                   | ''          | Custom classes                    |
| style        | 'solid' \| 'soft' \| 'outline' \| 'minimal'              | 'solid'     | Kiểu style                        |
| size         | 'sm' \| 'md' \| 'lg'                                     | 'md'        | Kích thước                        |
| animation    | 'fade' \| 'slide' \| 'scale' \| 'none'                   | 'fade'      | Kiểu animation                    |
| progress     | boolean                                                  | true        | Hiển thị progress indicator       |
| pauseOnHover | boolean                                                  | true        | Tạm dừng khi hover                |
| swipeToClose | boolean                                                  | true        | Cho phép vuốt để đóng trên mobile |
| role         | string                                                   | 'status'    | ARIA role                         |

### Toast Provider

| Prop           | Type                                   | Default     | Description                 |
| -------------- | -------------------------------------- | ----------- | --------------------------- |
| position       | ToastPosition                          | 'top-right' | Vị trí mặc định cho toasts  |
| limit          | number                                 | 5           | Số lượng toasts tối đa      |
| spacing        | number \| string                       | '0.5rem'    | Khoảng cách giữa các toasts |
| duration       | number                                 | 5000        | Thời gian mặc định (ms)     |
| swipeDirection | 'up' \| 'down' \| 'left' \| 'right'    | 'right'     | Hướng vuốt để đóng          |
| motionPreset   | 'fade' \| 'slide' \| 'scale' \| 'none' | 'fade'      | Animation mặc định          |
| containerStyle | React.CSSProperties                    | {}          | Style cho container         |
| children       | ReactNode                              | required    | Content                     |

### useToast Hook

```typescript
interface ToastOptions {
  variant?: 'info' | 'success' | 'warning' | 'error' | 'loading';
  title?: string;
  description?: string | ReactNode;
  duration?: number;
  position?: ToastPosition;
  icon?: ReactNode;
  action?: ReactNode;
  style?: 'solid' | 'soft' | 'outline' | 'minimal';
  animation?: 'fade' | 'slide' | 'scale' | 'none';
  progress?: boolean;
  pauseOnHover?: boolean;
  onClose?: () => void;
}

interface ToastAPI {
  show: (options: ToastOptions) => string;
  success: (options: Omit<ToastOptions, 'variant'>) => string;
  error: (options: Omit<ToastOptions, 'variant'>) => string;
  warning: (options: Omit<ToastOptions, 'variant'>) => string;
  info: (options: Omit<ToastOptions, 'variant'>) => string;
  loading: (options: Omit<ToastOptions, 'variant'>) => string;
  dismiss: (id: string) => void;
  dismissAll: () => void;
  update: (id: string, options: Partial<ToastOptions>) => void;
  isActive: (id: string) => boolean;
}
```

## Mô tả giao diện

### Info Toast

Background màu xanh dương nhạt với icon thông tin. Border subtle cùng tông màu. Title và description có màu text tương phản với background. Icon và title có màu đậm hơn description. Progress indicator (nếu có) cùng màu với icon.

### Success Toast

Background màu xanh lá nhạt với icon check. Border và styling tương tự info nhưng với màu xanh lá. Success toasts thường xuất hiện sau khi hoàn thành một action thành công. Animation mượt mà và không gây phân tâm.

### Warning Toast

Background màu vàng/amber nhạt với icon cảnh báo. Border và text màu amber đậm hơn. Warning toasts có visual prominence vừa phải để thu hút sự chú ý nhưng không gây lo lắng.

### Error Toast

Background màu đỏ nhạt với icon error. Border và text màu đỏ đậm. Error toasts có highest visual prominence và thường có thời gian hiển thị lâu hơn các loại khác. Có thể có action để retry hoặc view details.

### Loading Toast

Background màu gray nhạt với spinner animation. Thường không có progress indicator và hiển thị cho đến khi action hoàn thành. Có thể update thành success/error toast sau khi xử lý xong.

## Lưu ý quan trọng

- **Timing**: Cân nhắc kỹ duration cho từng loại toast
- **Stacking**: Quản lý thứ tự và số lượng toasts hiển thị cùng lúc
- **Animation**: Sử dụng smooth transitions, respect reduced motion
- **Mobile**: Đảm bảo toasts không che khuất important content
- **Content**: Keep messages ngắn gọn và clear
- **Accessibility**: Đảm bảo toasts được announced appropriately
- **Performance**: Optimize render và animation performance
- **Z-index**: Quản lý stack order với các elements khác
- **Persistence**: Không lưu toasts qua page refreshes
- **Interaction**: Handle touch gestures trên mobile
- **States**: Handle tất cả possible states và transitions
- **Testing**: Test trong various contexts và screen sizes
- **Integration**: Seamless integration với app's notification system
- **Documentation**: Clear guidelines cho content và usage
- **Customization**: Flexible styling system cho brand alignment
