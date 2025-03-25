# Modal Components

## Mô tả

Modal Components là các cửa sổ pop-up hiển thị nội dung, forms hoặc thông báo trên nền tảng NyNus. Modals tạm thời lấy sự tập trung của người dùng khỏi trang chính và tập trung vào một nhiệm vụ hoặc thông tin cụ thể. Components này có nhiều loại như dialog, drawer, lightbox, và notification center, có thể tùy chỉnh để phục vụ nhiều mục đích khác nhau từ hiển thị thông tin chi tiết đến thu thập dữ liệu từ người dùng.

## Loại

- Client Components (do cần tương tác người dùng và trạng thái)
- React Portal-based để render bên ngoài DOM hierarchy
- Context-driven để quản lý global modals

## Variants

- **Dialog**: Modal tiêu chuẩn hiển thị ở giữa màn hình với overlay
- **Drawer**: Trượt vào từ các cạnh của màn hình (trái, phải, trên, dưới)
- **Lightbox**: Modal toàn màn hình tập trung vào nội dung media
- **Alert**: Dialog nhỏ với những thông báo quan trọng, yêu cầu xác nhận
- **Sheet**: Bottom sheet modal phổ biến trên mobile
- **Panel**: Compact modal fixed ở một góc màn hình

## Prompt chi tiết

```
Thiết kế một hệ thống Modal Components linh hoạt, dễ sử dụng và đẹp mắt cho nền tảng học tập NyNus. Hệ thống này cần hỗ trợ nhiều loại modals khác nhau từ dialogs tiêu chuẩn đến drawers và lightboxes, tất cả đều mang lại trải nghiệm mượt mà và nhất quán cho người dùng.

1. Core Modal System:
   - Portal-based rendering để tránh z-index conflicts
   - Backdrop overlay với blur effect và opacity animation
   - Focus trap để bắt keyboard focus trong modal
   - Escape key listener để đóng modal
   - Click outside detection để dismiss (configurable)
   - React Context Provider để quản lý global modal states
   - Stack management cho multiple modals
   - Animation system cho entrance và exit

2. Dialog Variant:
   - Centered position với max-width appropriate
   - Rounded corners (border-radius: 12px)
   - Box shadow để tạo elevation effect
   - Clear visual hierarchy: Header, Body, Footer
   - Header với title, optional subtitle, và close button
   - Body với scrollable content khi cần
   - Footer với primary và secondary action buttons
   - Responsive sizing và layout
   - Optional size variants: small, medium, large, fullscreen
   - Animation: fade + scale from center

3. Drawer Variant:
   - Slide in từ bất kỳ edge nào (left, right, top, bottom)
   - Width/height tùy chỉnh dựa trên content
   - Handle/grabber cho resizable drawers
   - Push content mode vs overlay mode
   - Optional semi-transparent backdrop
   - Fixed header với title và close button
   - Scrollable content area
   - Optional footer area
   - Animation: slide from edge

4. Lightbox Variant:
   - Optimized cho media display (images, videos, documents)
   - Full-screen mode với minimal chrome
   - Thumbnail navigation khi display multiple items
   - Zoom và pan controls cho images
   - Lazy loading cho media collections
   - Gesture support trên touch devices (swipe, pinch)
   - Caption display với optional meta data
   - Custom controls cho different media types
   - Animation: fade + subtle zoom

5. Alert Variant:
   - Compact size cho quick decisions
   - Purpose-specific styling (success, warning, error, info)
   - Clear, concise message với optional icon
   - Limited action options (typically 1-2 buttons)
   - No close button option cho forced decisions
   - High prominence styling cho destructive actions
   - Optional auto-dismiss timer
   - Animation: quick fade + bounce

6. Sheet Variant:
   - Bottom-anchored panel (mobile pattern)
   - Drag handle để resize hoặc dismiss
   - Snap points cho multiple heights
   - Momentum scrolling cho content
   - Full-width design trên mobile
   - Optional backdrop opacity linked to drag position
   - Animation: slide up + spring physics

7. Panel Variant:
   - Anchored to corner (typically bottom-right)
   - Minimal design, smaller footprint
   - Optional minimize/maximize states
   - Can remain persistent during other interactions
   - Drag to reposition capability
   - Animation: slide from edge + fade

8. Header Components:
   - Title với appropriate typography
   - Subtitle support (smaller, lighter weight)
   - Close icon button với hover effect
   - Optional additional action buttons
   - Back button for multi-step flows
   - Progress indicator cho wizards/multi-step
   - Sticky positioning khi content scrolls

9. Body Components:
   - Content containers với appropriate padding
   - Section dividers khi cần
   - Form layout templates
   - Empty states
   - Loading states
   - Error states
   - Scrollable với custom scrollbar styling
   - Padding consistent với design system

10. Footer Components:
    - Action buttons với clear hierarchy
    - Button ordering based on platform conventions
    - Loading states cho buttons
    - Keyboard shortcuts hints
    - Sticky positioning khi content dài
    - Alignment options (center, space-between, end)
    - Optional tertiary links/actions

11. Advanced Features:
    - Nested modals support
    - Wizard/multi-step flow support
    - Form validation integration
    - Animations chainable cho complex sequences
    - Mouse và touch gesture support
    - Keyboard navigation optimized
    - React Hook APIs (useModal, useDialog, etc.)
    - Server-side rendering compatibility
    - Themeable với CSS variables

12. Accessibility Features:
    - ARIA roles, states và properties
    - Focus management
    - Keyboard navigation patterns
    - Screen reader announcements
    - Reduced motion support
    - High contrast mode compatibility
    - Large text compatibility
    - Keyboard shortcut help

Đảm bảo hệ thống modal responsive trên tất cả device sizes và screen orientations. Transitions cần mượt mà với timing appropriate (not too fast or slow) và physics-based khi thích hợp. Design cần tuân thủ WCAG 2.1 AA standards. Modal system cần có developer experience tốt với documented APIs, type definitions, và examples. Performance là critical - modals cần render nhanh và animations cần mượt mà ngay cả trên lower-end devices.
```

## Props và API

### Modal Container (Common)

| Prop                        | Type                                   | Default | Description                                |
| --------------------------- | -------------------------------------- | ------- | ------------------------------------------ |
| isOpen                      | boolean                                | false   | Điều khiển trạng thái hiển thị của modal   |
| onClose                     | () => void                             | -       | Callback khi modal đóng                    |
| onAfterOpen                 | () => void                             | -       | Callback sau khi modal đã mở hoàn toàn     |
| onAfterClose                | () => void                             | -       | Callback sau khi modal đã đóng hoàn toàn   |
| closeOnEsc                  | boolean                                | true    | Đóng modal khi nhấn phím Escape            |
| closeOnOverlayClick         | boolean                                | true    | Đóng modal khi click vào overlay           |
| trapFocus                   | boolean                                | true    | Bắt và giữ focus trong modal               |
| shouldReturnFocusAfterClose | boolean                                | true    | Trả focus về element trước đó sau khi đóng |
| overlayClassName            | string                                 | -       | Class tùy chỉnh cho overlay                |
| contentClassName            | string                                 | -       | Class tùy chỉnh cho content container      |
| children                    | ReactNode                              | -       | Nội dung của modal                         |
| zIndex                      | number                                 | 1000    | Z-index cho modal container                |
| preventScroll               | boolean                                | true    | Ngăn scroll trên body khi modal mở         |
| animationPreset             | 'fade' \| 'scale' \| 'slide' \| 'none' | 'fade'  | Hiệu ứng animation khi mở/đóng             |
| animationDuration           | number                                 | 200     | Thời gian của animation (ms)               |

### Dialog Specific Props

| Prop           | Type                                           | Default  | Description                               |
| -------------- | ---------------------------------------------- | -------- | ----------------------------------------- |
| size           | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full' | 'md'     | Kích thước của dialog                     |
| centered       | boolean                                        | true     | Căn giữa dialog theo chiều dọc            |
| scrollBehavior | 'inside' \| 'outside'                          | 'inside' | Xác định phần nào scroll khi nội dung dài |
| title          | ReactNode                                      | -        | Tiêu đề của dialog                        |
| footer         | ReactNode                                      | -        | Nội dung footer của dialog                |
| headerActions  | ReactNode                                      | -        | Actions bổ sung trong header              |

### Drawer Specific Props

| Prop        | Type                                   | Default | Description                                |
| ----------- | -------------------------------------- | ------- | ------------------------------------------ |
| placement   | 'left' \| 'right' \| 'top' \| 'bottom' | 'right' | Vị trí drawer xuất hiện                    |
| size        | string \| number                       | '300px' | Kích thước của drawer (width/height)       |
| isResizable | boolean                                | false   | Cho phép resize drawer                     |
| pushContent | boolean                                | false   | Đẩy nội dung sang khi mở (thay vì overlay) |
| showHandle  | boolean                                | false   | Hiển thị handle có thể kéo                 |

### Lightbox Specific Props

| Prop            | Type        | Default | Description                      |
| --------------- | ----------- | ------- | -------------------------------- |
| media           | MediaItem[] | []      | Danh sách media items            |
| initialIndex    | number      | 0       | Index của item hiển thị ban đầu  |
| showThumbnails  | boolean     | true    | Hiển thị thumbnails navigation   |
| enableZoom      | boolean     | true    | Cho phép zoom ảnh                |
| allowFullScreen | boolean     | true    | Cho phép chế độ toàn màn hình    |
| showControls    | boolean     | true    | Hiển thị các controls điều hướng |

### Alert Specific Props

| Prop        | Type                                        | Default | Description                               |
| ----------- | ------------------------------------------- | ------- | ----------------------------------------- |
| status      | 'info' \| 'warning' \| 'success' \| 'error' | 'info'  | Loại alert hiển thị                       |
| icon        | ReactNode                                   | -       | Icon tùy chỉnh thay cho default icon      |
| title       | string                                      | -       | Tiêu đề của alert                         |
| description | ReactNode                                   | -       | Mô tả chi tiết                            |
| buttons     | AlertButtonProps[]                          | []      | Config cho các buttons                    |
| autoClose   | number                                      | 0       | Tự động đóng sau số ms (0: không tự đóng) |

### Hook APIs

| Hook        | Parameters      | Returns                               | Description                                |
| ----------- | --------------- | ------------------------------------- | ------------------------------------------ |
| useModal    | ModalOptions    | { isOpen, onOpen, onClose, Modal }    | Hook để quản lý trạng thái và render modal |
| useDialog   | DialogOptions   | { isOpen, onOpen, onClose, Dialog }   | Hook tạo và quản lý dialog                 |
| useDrawer   | DrawerOptions   | { isOpen, onOpen, onClose, Drawer }   | Hook tạo và quản lý drawer                 |
| useLightbox | LightboxOptions | { isOpen, onOpen, onClose, Lightbox } | Hook tạo và quản lý lightbox               |
| useAlert    | AlertOptions    | { isOpen, onOpen, onClose, Alert }    | Hook tạo và quản lý alert                  |

## Mô tả giao diện

### Dialog Variant

Phiên bản tiêu chuẩn của modal hiển thị ở trung tâm màn hình trên nền overlay bán trong suốt. Dialog thường có cấu trúc ba phần rõ ràng: header, body và footer. Header chứa tiêu đề, nút đóng và tùy chọn các hành động bổ sung. Body chứa nội dung chính và có thể scroll khi cần. Footer chứa các nút hành động, thường được căn phải. Hiệu ứng mở có thể là fade kết hợp với scale nhẹ từ trung tâm. Dialog sử dụng các mức kích thước khác nhau từ xs đến xl và full, với responsive behavior trên các kích thước màn hình.

### Drawer Variant

Drawer trượt vào từ một cạnh của màn hình (thường là bên phải hoặc trái). Phiên bản này thường được sử dụng cho các tác vụ phụ hoặc để hiển thị thông tin bổ sung mà không rời khỏi ngữ cảnh hiện tại. Drawer có thể chiếm full-height của màn hình và width tùy chỉnh. Phiên bản cao cấp có thể resize được qua việc kéo thả, với một handle hiển thị rõ ràng. Drawer thường có header với tiêu đề và nút đóng, phần thân có thể scroll và tùy chọn có footer. Trên mobile, drawer thường chiếm nhiều không gian hơn, đặc biệt là khi mở từ dưới lên (bottom drawer).

### Lightbox Variant

Thiết kế tối giản tập trung vào nội dung media với overlay tối màu. Controls điều hướng (next/previous) xuất hiện khi hover hoặc tap. Lightbox hỗ trợ hiển thị nhiều loại media (ảnh, video, documents) với các controls phù hợp cho từng loại. Khi hiển thị ảnh, có thể zoom và pan, với các controls bổ sung như download, share, hoặc full-screen. Navigation thumbnails có thể hiển thị ở dưới hoặc bên cạnh, tùy theo orientation của màn hình. Caption và metadata xuất hiện ở dưới cùng với animation fade in/out khi cần.

### Alert Variant

Alert là modal nhỏ gọn tập trung vào một thông báo hoặc quyết định. Chúng thường có icon status (info, warning, success, error) ở bên trái hoặc phía trên, tiêu đề rõ ràng và mô tả ngắn gọn. Buttons được đặt ở dưới cùng, với button destructive thường có styling nổi bật. Alert animations thường nhanh hơn và có thể bao gồm hiệu ứng bounce nhẹ để thu hút sự chú ý. Backdrop có thể tối màu hơn để nhấn mạnh tính khẩn cấp của thông báo.

### Sheet Variant

Sheet là phiên bản slide-up panel phổ biến trên mobile. Nó xuất hiện từ dưới lên và có thể có nhiều snap points (ví dụ: 25%, 50%, 75% của màn hình). Một drag handle rõ ràng ở phía trên cùng cho phép người dùng kéo để điều chỉnh kích thước hoặc đóng sheet. Nội dung bên trong có thể scroll qua momentum scrolling. Sheet thường chiếm toàn bộ chiều rộng màn hình trên mobile và có thể hiển thị dạng card với rounded corners ở top trên desktop.

## Lưu ý quan trọng

- **Performance**: Sử dụng CSS transitions thay vì heavy JS animations để đảm bảo mượt mà
- **Accessibility**: Modal phải tuân thủ WAI-ARIA practices, bao gồm focus management và keyboard navigation
- **Z-index Management**: Cẩn thận với stacking order của modals, đặc biệt khi nested hoặc có nhiều modals
- **Mobile Experience**: Tối ưu hóa touch interactions và đảm bảo modal có thể sử dụng tốt trên màn hình nhỏ
- **Content Overflow**: Xử lý và kiểm soát overflow một cách chính xác khi nội dung dài
- **Focus Restoration**: Đảm bảo focus trả về element thích hợp sau khi đóng modal
- **Scroll Lock**: Ngăn scroll trên body/background khi modal đang mở
- **Animation Timing**: Tìm balance giữa animations đẹp mắt và tốc độ để không làm chậm UX
- **Cross-browser Compatibility**: Test kỹ trên các trình duyệt khác nhau, đặc biệt là với các tính năng như focus trap
- **Context Preservation**: Modals nên duy trì ngữ cảnh và không khiến người dùng mất phương hướng
- **Server Components**: Modal thường cần là Client Components, nhưng nội dung bên trong có thể là Server Components
- **Rendering Strategy**: Sử dụng React Portal để tránh các vấn đề về CSS stacking context
