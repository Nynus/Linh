# Notification System

## Mô tả

Notification System là hệ thống hiển thị thông báo, cảnh báo và tin nhắn cho người dùng trên nền tảng NyNus. System này cung cấp các phương thức nhất quán để thông báo cho người dùng về các sự kiện, thay đổi trạng thái, kết quả của các hành động, và thông tin quan trọng khác. Các thông báo được thiết kế để thông tin nhưng không làm gián đoạn, cung cấp feedback kịp thời và rõ ràng cho người dùng trong quá trình tương tác với hệ thống.

## Loại

- Client Components (do cần tương tác người dùng và trạng thái)
- Global context-based để quản lý notifications toàn ứng dụng
- Kết hợp với một Provider ở root level của ứng dụng

## Variants

- **Toast**: Thông báo nhỏ, tạm thời hiển thị ở góc màn hình
- **Alert Banner**: Thông báo nổi bật hiển thị ở đầu hoặc giữa trang
- **Inline Notification**: Thông báo nhúng trong context cụ thể (như form hoặc card)
- **Badge**: Hiển thị số lượng thông báo mới/chưa đọc
- **Notification Center**: Drawer hoặc dropdown chứa lịch sử thông báo
- **Push Notification**: Thông báo hiển thị ở cấp độ hệ thống (browser/OS)

## Prompt chi tiết

```
Thiết kế một hệ thống thông báo toàn diện, linh hoạt và hiện đại cho nền tảng học tập NyNus. Hệ thống này cần cung cấp nhiều phương thức thông báo phù hợp với các ngữ cảnh khác nhau, từ các thông báo ngắn gọn không gián đoạn đến các thông báo quan trọng cần sự chú ý ngay lập tức của người dùng.

1. Toast Notifications:
   - Hiển thị ngắn gọn ở vị trí không gây cản trở (thường ở góc trên phải hoặc dưới)
   - Auto-dismiss sau khoảng thời gian phù hợp (3-5 giây cho thông tin thông thường)
   - Animation smooth khi xuất hiện và biến mất (slide + fade)
   - Stackable để xử lý nhiều notifications cùng lúc
   - Status variants: success, error, warning, info với màu sắc và icon phù hợp
   - Kích thước compact nhưng dễ đọc
   - Optional close button để user có thể dismiss sớm
   - Optional action button cho quick actions
   - Support cho rich content (icon, text formatting, links)
   - Progress bar indicator cho thời gian hiển thị còn lại
   - Hover pause auto-dismiss

2. Alert Banners:
   - Hiển thị nổi bật ở đầu trang hoặc section
   - Full-width design với border color và background phù hợp với loại alert
   - Status variants tương tự toast
   - Optional expandable details section
   - Persistent cho đến khi user dismiss hoặc issue resolved
   - Collapse/expand animation
   - Sticky option để alert luôn visible khi scroll
   - Support cho multiple paragraphs và formatted content
   - Primary và secondary action buttons
   - Icon leading và optional illustration

3. Inline Notifications:
   - Được nhúng trực tiếp trong context như form fields hoặc card components
   - Compact design phù hợp với parent container
   - Same visual language với toast và banner (colors, icons)
   - Directional indicators khi liên kết với specific element
   - Status indicators với appropriate styling
   - Concise text phù hợp với không gian
   - Optional collapse/expand cho detailed information
   - Liên kết trực tiếp với related UI elements

4. Badge Notifications:
   - Counter badges cho unread notifications
   - Hiển thị trên icons (như bell icon trong navbar)
   - Pulse animation cho new notifications
   - Numeric counter với "9+" styling cho large numbers
   - Status colors để indicate urgency hoặc category
   - Optional dot indicator cho subtle notification
   - Consistent placement và styling across app
   - Accessibility considerations cho screen readers

5. Notification Center:
   - Central hub cho tất cả notifications
   - Accessible từ persistent icon trong navbar
   - Dropdown hoặc drawer layout tùy thuộc vào context
   - Organized chronologically với grouping options
   - Status indicators cho mỗi notification
   - Pagination hoặc infinite scroll cho history
   - Filter options theo category, status, date
   - Batch actions (mark all as read, clear all)
   - Notification preview với truncation cho longer messages
   - Detail view cho expanded information
   - Unread vs. read styling distinction
   - Persistent storage (sync với server và local)

6. Push Notifications:
   - Integration với Browser Notifications API
   - Permission request flow với clear value proposition
   - Opt-in/opt-out settings cho different categories
   - Appropriate icons và branding trong notifications
   - Deep linking vào relevant section của app
   - Frequency capping để prevent overwhelming
   - Batching related notifications khi appropriate
   - Offline support và synchronization

7. Core System Features:
   - Centralized notification service/context
   - Consistent API cho triggering notifications từ bất kỳ component nào
   - Customizable duration, position, và styling
   - Queueing và priority system cho multiple notifications
   - Animation system với configurable transitions
   - Event system (onCreate, onDismiss, onClick, etc.)
   - Rate limiting để prevent notification fatigue
   - Accessibility features (screen reader announcements, keyboard interaction)
   - Responsive behavior trên tất cả device sizes

8. Interaction Patterns:
   - Hover interactions (pause auto-dismiss, reveal actions)
   - Click/tap để view details hoặc trigger action
   - Swipe để dismiss trên touch devices
   - Focus management cho keyboard users
   - Clear dismissal targets cho touch
   - Animation cues cho user actions
   - Interaction memory (không hiển thị đã dismissed notifications lại)
   - Undo capability sau khi dismiss

9. Technical Integration:
   - React Context Provider cho global state
   - Custom hooks (useNotification, useToast, etc.)
   - Component composition cho reusability
   - Optimized rendering để prevent unnecessary re-renders
   - Server-side state synchronization
   - Storage strategies (persistent vs. session)
   - Error boundary integration
   - SSR compatibility

10. Advanced Features:
    - Personalization options dựa trên user preferences
    - AI-powered notification priority
    - Smart grouping của related notifications
    - Time-aware delivery (không gửi notification vào inappropriate times)
    - Location context awareness
    - Interactive notifications với form elements
    - Sound effects (optional và respectful)
    - Haptic feedback trên supported devices
    - Analytics tracking (view rates, action rates, etc.)

11. Content Guidelines:
    - Concise, action-oriented language
    - Clear distinction giữa informational và actionable notifications
    - Consistently structured messages
    - Personalized content khi có thể
    - Localization support
    - Tone phù hợp với urgency level
    - Helpful next steps cho errors
    - Emoji và icon usage khi appropriate

12. Performance Considerations:
    - Minimal bundle size impact
    - Efficient DOM usage (reuse elements)
    - Optimized animations cho lower-end devices
    - Lazy loading cho notification history
    - Batched updates cho state changes
    - Throttling cho high-frequency events
    - Memory usage optimization cho long sessions

Design phải đảm bảo notifications không làm phiền hoặc overwhelm user, và luôn cung cấp giá trị. System phải tuân thủ WCAG 2.1 AA standards cho accessibility. Đảm bảo tất cả notifications đều responsive và rendering well trên cả desktop và mobile. Đặc biệt chú ý đến transition animations - chúng phải mượt mà nhưng không gây phân tâm hoặc làm chậm UI.
```

## Props và API

### NotificationProvider (Context Provider)

| Prop               | Type                                                                                            | Default     | Description                                |
| ------------------ | ----------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------ |
| maxToasts          | number                                                                                          | 5           | Số lượng toast tối đa hiển thị cùng lúc    |
| defaultDuration    | number                                                                                          | 5000        | Thời gian hiển thị mặc định cho toast (ms) |
| position           | 'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left' \| 'top-center' \| 'bottom-center' | 'top-right' | Vị trí mặc định cho toasts                 |
| containerClassName | string                                                                                          | -           | Custom class cho notification container    |
| transitionDuration | number                                                                                          | 300         | Thời gian transition khi show/hide (ms)    |
| pauseOnHover       | boolean                                                                                         | true        | Dừng auto-dismiss khi hover                |
| pauseOnFocusLoss   | boolean                                                                                         | true        | Dừng auto-dismiss khi tab không active     |
| children           | ReactNode                                                                                       | -           | Children components                        |

### useNotification Hook (Core API)

| Method   | Parameters                                          | Returns          | Description                           |
| -------- | --------------------------------------------------- | ---------------- | ------------------------------------- |
| toast    | (options: ToastOptions)                             | string (id)      | Hiển thị toast notification           |
| alert    | (options: AlertOptions)                             | string (id)      | Hiển thị alert banner                 |
| inline   | (options: InlineOptions)                            | string (id)      | Tạo inline notification               |
| push     | (options: PushOptions)                              | Promise<boolean> | Gửi push notification                 |
| dismiss  | (id?: string)                                       | void             | Đóng notification theo id hoặc tất cả |
| update   | (id: string, options: Partial<NotificationOptions>) | void             | Cập nhật notification đang hiển thị   |
| clearAll | () => void                                          | void             | Xóa tất cả notifications              |
| getCount | () => number                                        | number           | Lấy số lượng notifications hiện tại   |

### Toast Component API

| Prop            | Type                                        | Default          | Description                 |
| --------------- | ------------------------------------------- | ---------------- | --------------------------- |
| id              | string                                      | auto-generated   | Unique identifier           |
| title           | ReactNode                                   | -                | Tiêu đề của toast           |
| description     | ReactNode                                   | -                | Nội dung chi tiết           |
| status          | 'info' \| 'success' \| 'warning' \| 'error' | 'info'           | Loại toast                  |
| icon            | ReactNode                                   | -                | Icon tùy chỉnh              |
| duration        | number                                      | Provider default | Thời gian hiển thị (ms)     |
| isClosable      | boolean                                     | true             | Hiển thị nút đóng           |
| position        | ToastPosition                               | Provider default | Vị trí hiển thị             |
| onClose         | () => void                                  | -                | Callback khi toast đóng     |
| action          | { label: string, onClick: () => void }      | -                | Action button configuration |
| autoClose       | boolean                                     | true             | Tự động đóng sau duration   |
| showProgressBar | boolean                                     | false            | Hiển thị progress bar       |

### Alert Banner API

| Prop        | Type                                        | Default        | Description                  |
| ----------- | ------------------------------------------- | -------------- | ---------------------------- |
| id          | string                                      | auto-generated | Unique identifier            |
| title       | ReactNode                                   | -              | Tiêu đề alert                |
| description | ReactNode                                   | -              | Nội dung chi tiết            |
| status      | 'info' \| 'success' \| 'warning' \| 'error' | 'info'         | Loại alert                   |
| icon        | ReactNode                                   | -              | Icon tùy chỉnh               |
| isClosable  | boolean                                     | true           | Hiển thị nút đóng            |
| actions     | ActionButton[]                              | []             | Các action buttons           |
| sticky      | boolean                                     | false          | Giữ alert visible khi scroll |
| expandable  | boolean                                     | false          | Cho phép mở rộng/thu gọn     |
| isExpanded  | boolean                                     | false          | Trạng thái mở rộng ban đầu   |
| className   | string                                      | -              | Custom styling class         |

### Notification Center API

| Prop          | Type                                 | Default | Description                             |
| ------------- | ------------------------------------ | ------- | --------------------------------------- |
| maxItems      | number                               | 50      | Số lượng tối đa notifications hiển thị  |
| filters       | NotificationFilter[]                 | []      | Các bộ lọc cho notifications            |
| onItemClick   | (notification: Notification) => void | -       | Callback khi click vào notification     |
| emptyState    | ReactNode                            | -       | UI hiển thị khi không có notifications  |
| className     | string                               | -       | Custom class name                       |
| showClearAll  | boolean                              | true    | Hiển thị nút xóa tất cả                 |
| groupByDate   | boolean                              | true    | Nhóm notifications theo ngày            |
| itemComponent | ComponentType<NotificationItemProps> | -       | Custom component cho notification items |

## Mô tả giao diện

### Toast Notifications

Toast là hình chữ nhật nhỏ gọn với viền tròn (border-radius 6-8px) hiển thị ở một trong các góc màn hình, thường là trên bên phải. Toast có background màu sắc phù hợp với trạng thái (nhẹ), kèm icon bên trái và nút đóng ở góc phải. Content thường gồm tiêu đề in đậm và mô tả tùy chọn ở dưới. Toast có animation slide-in khi xuất hiện và fade-out khi biến mất. Khi có nhiều toasts, chúng xếp chồng lên nhau với khoảng cách nhỏ giữa mỗi toast. Progress bar tùy chọn ở dưới cùng hiển thị thời gian hiển thị còn lại. Action button (nếu có) được đặt ở dưới cùng hoặc bên phải nội dung.

### Alert Banners

Alert banners là thanh ngang kéo dài toàn bộ chiều rộng của container (thường là page hoặc section). Banners có viền màu ở bên trái (4-6px) và background màu nhẹ phù hợp với trạng thái. Icon status ở bên trái, tiêu đề in đậm, và mô tả chi tiết phía dưới hoặc bên cạnh (tùy layout). Banners thường có nút đóng ở góc trên bên phải và có thể có một hoặc nhiều action buttons ở cuối banner. Phiên bản expandable có chevron icon để toggle expanded state, hiển thị thêm nội dung chi tiết khi được mở rộng. Sticky variant sẽ giữ banner luôn visible ở đầu trang/phần khi scroll.

### Inline Notifications

Inline notifications là thành phần nhỏ gọn được nhúng trực tiếp trong context, như bên dưới form field hoặc trong card. Chúng thường có icon status nhỏ, message ngắn gọn, và tùy chọn một action link. Style phù hợp với trạng thái (error, warning, success, info) nhưng compact hơn so với toast và banner. Khi liên kết với form field cụ thể, có thể có indicator (như arrow hoặc line) trỏ đến field đó. Inline notifications thường không có animation khi xuất hiện/biến mất, và thường persistent cho đến khi vấn đề được giải quyết.

### Badge Notifications

Badges là indicators nhỏ, tròn hiển thị trên icons hoặc buttons, thường trong navbar hoặc menu items. Chúng hiển thị số lượng notifications chưa đọc hoặc mới. Badge có background màu nổi bật (thường là red hoặc primary color) với text màu trắng. Khi có nhiều hơn một threshold nào đó (thường là 9), hiển thị "9+" thay vì số chính xác. Dot variant đơn giản chỉ là chấm tròn nhỏ không có text. Pulse animation có thể được áp dụng cho badges mới xuất hiện để thu hút sự chú ý.

### Notification Center

Notification center là drawer hoặc dropdown panel hiển thị danh sách các notifications. Header có tiêu đề, số lượng unread, và actions (mark all read, clear all). Danh sách notifications được sắp xếp theo thời gian, có thể được nhóm theo ngày (Today, Yesterday, This Week, etc.). Mỗi notification item hiển thị icon status, tiêu đề, thời gian, và preview nội dung, với styling khác nhau cho read/unread. Click vào notification mở rộng để hiển thị nội dung đầy đủ và/hoặc navigate đến relevant content. Filter tabs hoặc dropdown cho phép lọc theo loại hoặc trạng thái. Infinite scroll hoặc pagination ở cuối danh sách cho phép truy cập history.

## Lưu ý quan trọng

- **Accessibility**: Đảm bảo notifications được announce cho screen readers một cách phù hợp
- **Overload Prevention**: Implement strategies để tránh notification fatigue (batching, rate limiting)
- **Responsive Design**: Điều chỉnh kích thước và vị trí notifications phù hợp với device size
- **Animation Performance**: Optimize animations để tránh jank và performance issues
- **State Management**: Synchronize notification state giữa client và server khi cần
- **Local Storage**: Consider caching recent notifications để hiển thị lại sau page reload
- **Priority System**: Implement priority levels cho notifications để xử lý multiple notifications hợp lý
- **Testing**: Test trên nhiều devices và screen readers để đảm bảo notifications hiển thị và hoạt động đúng
- **Consistency**: Maintain nhất quán trong visual language và animation patterns
- **Content Strategy**: Develop clear guidelines cho notification content để đảm bảo rõ ràng và hữu ích
- **Browser Support**: Ensure compatibility với tất cả các browsers chính, đặc biệt là cho Push Notifications
- **User Preferences**: Provide settings cho users để customize notification experience
