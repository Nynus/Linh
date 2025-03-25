# Floating CTA Components

## Mô tả

Floating CTA (Call-to-Action) Components là các thành phần UI nổi, luôn hiển thị trên màn hình để cung cấp truy cập nhanh đến các hành động quan trọng trong nền tảng NyNus. Các components này được thiết kế để luôn dễ tiếp cận nhưng không gây phiền nhiễu, với khả năng thích ứng theo ngữ cảnh và vị trí người dùng trong ứng dụng. Floating CTAs đóng vai trò quan trọng trong việc hướng dẫn người dùng thực hiện các hành động chính, đồng thời cung cấp shortcut đến các chức năng thường xuyên sử dụng.

## Loại

- Client Components (yêu cầu JavaScript cho positioning và interactions)
- Tích hợp với Radix UI cho accessibility
- Responsive và mobile-optimized
- Context-aware (thay đổi theo route và user state)
- Support cho rich content và multiple actions
- Có thể được controlled hoặc uncontrolled

## Variants

### Theo Kiểu Hiển Thị

- **Single Button**: Một nút CTA đơn lẻ
- **Speed Dial**: Menu CTA mở rộng với nhiều options
- **Action Bar**: Thanh công cụ nổi với nhiều actions
- **Chat Bubble**: Dạng chat/messenger bubble
- **Notification Badge**: Với counter hoặc status indicator
- **Progress Bar**: Hiển thị tiến trình với actions

### Theo Vị Trí

- **Bottom Right**: Góc dưới bên phải (default)
- **Bottom Left**: Góc dưới bên trái
- **Bottom Center**: Giữa dưới
- **Side Right**: Cạnh phải
- **Side Left**: Cạnh trái
- **Custom**: Vị trí tùy chỉnh

### Theo Behavior

- **Always Visible**: Luôn hiển thị
- **Scroll Triggered**: Hiện/ẩn theo scroll
- **Context Dependent**: Thay đổi theo context
- **Collapsible**: Có thể thu gọn
- **Auto-hide**: Tự động ẩn sau thời gian
- **Drag to Move**: Cho phép kéo thả để di chuyển

### Theo Style

- **Solid**: Background đặc
- **Ghost**: Trong suốt với border
- **Glass**: Hiệu ứng kính mờ
- **Minimal**: Tối giản
- **Brand**: Theo brand colors
- **Custom**: Tùy chỉnh hoàn toàn

## Prompt chi tiết

```
Thiết kế một hệ thống Floating CTA Components toàn diện và nhất quán cho nền tảng học tập NyNus. Floating CTAs đóng vai trò quan trọng trong việc cung cấp truy cập nhanh đến các hành động chính và tính năng thường xuyên sử dụng. Hệ thống cần đảm bảo tính dễ tiếp cận trong khi không gây phiền nhiễu cho trải nghiệm người dùng.

1. Core Structure:
   - Clear visual hierarchy
   - Consistent layout và spacing
   - Icon integration
   - Label/tooltip support
   - Action triggers
   - Animation states
   - Position management
   - Z-index handling

2. Visual Design:
   - Color system cho different states
   - Icon set phù hợp với actions
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
   - Expanded states
   - Collapsed states
   - Drag states
   - Touch interactions
   - Keyboard navigation

4. Content Guidelines:
   - Icon selection
   - Label text
   - Tooltip content
   - Action descriptions
   - Status indicators
   - Counter displays
   - Progress visualization
   - Error states

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
   - Position adjustments
   - Size scaling
   - Touch interactions
   - Viewport awareness
   - Orientation changes
   - Collision detection
   - Safe area handling

Floating CTA components phải effective trong việc guide user actions while maintaining a non-intrusive presence. Design phải scalable để handle different types của actions và flexible enough để adapt to various contexts trong educational platform. Focus on accessibility, context-awareness, và appropriate styling cho different use cases.
```

## Props và API

### Floating CTA Component

| Prop             | Type                                                                              | Default          | Description                                 |
| ---------------- | --------------------------------------------------------------------------------- | ---------------- | ------------------------------------------- |
| variant          | 'single' \| 'speed-dial' \| 'action-bar' \| 'chat' \| 'badge'                     | 'single'         | Kiểu hiển thị                               |
| position         | 'bottom-right' \| 'bottom-left' \| 'bottom-center' \| 'side-right' \| 'side-left' | 'bottom-right'   | Vị trí hiển thị                             |
| icon             | ReactNode                                                                         | undefined        | Icon chính                                  |
| label            | string                                                                            | undefined        | Label text                                  |
| actions          | Action[]                                                                          | []               | Danh sách actions cho speed dial/action bar |
| behavior         | 'always' \| 'scroll' \| 'context' \| 'auto-hide'                                  | 'always'         | Behavior hiển thị                           |
| style            | 'solid' \| 'ghost' \| 'glass' \| 'minimal' \| 'brand'                             | 'solid'          | Style visual                                |
| offset           | { x: number; y: number }                                                          | { x: 20, y: 20 } | Offset từ edge của viewport                 |
| draggable        | boolean                                                                           | false            | Cho phép drag để di chuyển                  |
| collapsible      | boolean                                                                           | false            | Cho phép thu gọn                            |
| showLabel        | boolean                                                                           | true             | Hiển thị label                              |
| tooltip          | string                                                                            | undefined        | Tooltip text                                |
| badge            | ReactNode                                                                         | undefined        | Badge/counter hiển thị                      |
| onClick          | () => void                                                                        | undefined        | Handler cho click event                     |
| onPositionChange | (position: Position) => void                                                      | undefined        | Handler khi vị trí thay đổi                 |
| className        | string                                                                            | ''               | Custom classes                              |
| children         | ReactNode                                                                         | undefined        | Custom content                              |

### Action Type

```typescript
interface Action {
  id: string;
  icon: ReactNode;
  label: string;
  tooltip?: string;
  onClick: () => void;
  disabled?: boolean;
  badge?: ReactNode;
  className?: string;
}
```

### useFloatingCTA Hook

```typescript
interface UseFloatingCTAOptions {
  variant?: FloatingCTAVariant;
  position?: Position;
  behavior?: Behavior;
  offset?: { x: number; y: number };
  draggable?: boolean;
  collapsible?: boolean;
}

interface UseFloatingCTAReturn {
  isVisible: boolean;
  isExpanded: boolean;
  position: Position;
  toggleExpanded: () => void;
  updatePosition: (position: Position) => void;
  setVisible: (visible: boolean) => void;
}

function useFloatingCTA(options: UseFloatingCTAOptions): UseFloatingCTAReturn;
```

## Mô tả giao diện

### Single Button CTA

Nút tròn hoặc pill-shaped với icon và optional label. Background solid hoặc glass effect tùy style. Shadow subtle để tạo elevation. Hover effect với scale nhẹ và brightness/opacity change. Badge hoặc counter có thể hiển thị ở góc trên bên phải.

### Speed Dial CTA

Nút chính giống Single Button, khi click sẽ mở rộng menu các actions theo hình quạt hoặc danh sách. Mỗi action có icon và tooltip/label. Animation mượt mà khi mở/đóng. Backdrop overlay có thể được thêm vào khi mở.

### Action Bar CTA

Thanh ngang hoặc dọc chứa nhiều actions. Có thể collapse thành một nút. Mỗi action có icon và optional label. Spacing đều giữa các actions. Có thể scroll nếu có nhiều actions.

### Chat Bubble CTA

Thiết kế giống messenger bubble với avatar hoặc icon. Badge hiển thị số tin nhắn mới. Bounce animation khi có tin nhắn mới. Có thể expand thành chat window.

### Notification Badge CTA

Nút với badge hiển thị số thông báo. Counter có animation khi số lượng thay đổi. Có thể expand để hiển thị notification list.

### Progress Bar CTA

Thanh progress ngang hoặc tròn với percentage. Actions có thể được thêm vào (pause, cancel, etc). Visual feedback rõ ràng cho progress changes.

## Lưu ý quan trọng

- **Positioning**: Cẩn thận với vị trí để không che khuất content quan trọng
- **Z-index**: Quản lý stack order với các elements khác
- **Mobile**: Đảm bảo touch targets đủ lớn và không cản trở navigation
- **Performance**: Optimize animations và position calculations
- **Accessibility**: Đảm bảo keyboard navigation và screen reader support
- **Context**: Update content và actions dựa trên user context
- **Persistence**: Lưu position preferences nếu draggable
- **Collision**: Tránh overlap với fixed elements khác
- **Responsiveness**: Adapt layout và position cho all devices
- **Animation**: Smooth transitions, respect reduced motion
- **States**: Handle tất cả possible states và interactions
- **Testing**: Test trong various contexts và screen sizes
- **Documentation**: Clear guidelines cho content và usage
- **Integration**: Seamless integration với app's navigation
- **Customization**: Flexible styling system cho brand alignment
