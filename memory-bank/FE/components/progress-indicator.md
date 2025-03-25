# Progress Indicator Component

## Mô tả

Progress Indicator là một component hiển thị trực quan về tiến độ hoàn thành của người dùng trong quá trình học tập hoặc hoàn thành nhiệm vụ. Component này không chỉ đơn thuần hiển thị tỷ lệ phần trăm đã hoàn thành mà còn cung cấp thông tin chi tiết, phân tích tiến độ, và động lực để người dùng tiếp tục. Progress Indicator được thiết kế để tăng cường trải nghiệm học tập bằng cách hiển thị rõ ràng thành tựu và các mục tiêu còn lại.

## Loại

- Client Component với animations và interactivity
- Có thể dùng cả ở Client và Server side
- Visual indicator with various data representations

## Variants

- **Linear**: Thanh tiến độ ngang hoặc dọc cơ bản
- **Circular**: Hiển thị tiến độ dạng vòng tròn
- **Step**: Hiển thị các bước/giai đoạn đã hoàn thành
- **Detailed**: Hiển thị chi tiết về các mục đã hoàn thành và chưa hoàn thành
- **Dashboard**: Tổng hợp nhiều tiến độ khác nhau trong dashboard view

## Prompt chi tiết

```
Thiết kế một Progress Indicator component hiện đại, thông tin và tạo động lực cho nền tảng học tập NyNus. Component này cần hiển thị tiến độ học tập của người dùng một cách trực quan, giúp họ nắm rõ thành tựu và những gì cần hoàn thành tiếp theo.

1. Linear Progress:
   - Clean, modern progress bar với rounded corners
   - Gradient fill hoặc solid color với brand identity
   - Smooth animation khi progress changes
   - Clear percentage indicator (text hoặc tooltip)
   - Optional secondary progress indicator (e.g., expected progress)
   - States for different completion levels (starting, halfway, near completion)
   - Optional milestone markers along the bar
   - Support cho dynamic width/length thay đổi theo container

2. Circular Progress:
   - Circle/arc design với rounded caps
   - Percentage display ở center
   - Appropriate stroke width (không quá dày hoặc mỏng)
   - Smooth animation khi value changes
   - Optional inner content (icon, text, status)
   - Color variants based on completion level
   - Configurable size để fit different contexts
   - Optional segments hoặc thresholds marked on circle

3. Step Progress:
   - Clear visual indicators cho steps completed/current/upcoming
   - Connecting lines hoặc paths giữa các steps
   - Icon or numbering for each step
   - Active step highlight
   - Hover/focus states cho interactive steps
   - Optional step descriptions
   - Support cho horizontal và vertical layouts
   - Responsive resizing và reflow on smaller screens

4. Progress Data Display:
   - Clear units of measurement (%, X/Y completed)
   - Time-based metrics khi thích hợp (time spent, estimated remaining)
   - Contextual descriptions của progress (e.g., "Great progress!" at 75%)
   - Comparison với cohort/average khi available
   - Historical progress visualization
   - Goal indicators và expected completion dates
   - Breakdown của sub-tasks hoặc categories
   - Tooltips với detailed information

5. Visual Design:
   - Consistent color system cho progress levels (e.g., red to green)
   - Appropriate use của color psychology (energetic colors)
   - Clear contrast giữa completed/incomplete sections
   - Subtle patterns hoặc textures nếu phù hợp
   - Appropriate spacing và padding
   - Subtle animations enhancing comprehension
   - Integration với overall design system
   - Differentiation between active/paused/completed states

6. Interactive Elements:
   - Hover states showing detailed information
   - Click/tap to reveal breakdowns
   - Drag functionality nếu progress có thể manually adjusted
   - Tooltips for clarification of metrics
   - Touch-friendly interaction areas
   - Keyboard accessibility cho interactive elements
   - Quick actions related to progress (e.g., "continue learning")
   - Optional mini chart/graph on interaction

7. Gamification Elements:
   - Achievement unlocking visualization
   - Celebration animations at milestones (confetti, badges)
   - Streak indicators
   - Next milestone preview
   - Rewards/points visualization
   - Motivational messaging based on progress
   - Competitive elements (leaderboard position)
   - Daily/weekly goals representation

8. Micro-Animations:
   - Smooth transitions khi values change
   - Subtle loading states nếu data is being fetched
   - Pulsing/glowing effects cho current position
   - Milestone reached celebrations
   - Direction indicators for progress trends
   - Subtle background animations cho motivation
   - Entrance animations khi component loads
   - Level-up hoặc completion animations

9. Responsive Behavior:
   - Appropriate sizing/scaling trên different devices
   - Simplified versions for very small screens
   - Touch-optimized controls for mobile
   - Orientation changes (horizontal to vertical) khi cần
   - Maintained legibility của text and indicators at all sizes
   - Prioritization of essential information on smaller screens
   - Consistent behavior across device sizes
   - Performance optimization cho mobile devices

10. Accessibility Considerations:
    - High contrast mode support
    - Screen reader-friendly status announcements
    - Keyboard navigable interactive elements
    - Text alternatives cho visual indicators
    - Sufficient color contrast
    - Avoidance của color-only feedback
    - Clear labels và descriptions
    - Reduced motion options cho animations

11. Edge Cases & States:
    - Zero progress state (empty/just started)
    - 100% completion celebration state
    - Error state nếu data không available
    - Loading/skeleton state khi fetching data
    - Stalled progress indicators
    - Backward progress handling
    - Offline/cached progress display
    - Overflow handling cho long step lists

12. Integration Features:
    - Easy embedding trong cards, headers, và sidebars
    - Consistent API cho different progress types
    - Theming compatibility với light/dark modes
    - Data refresh mechanism
    - Export/sharing options for progress
    - Event hooks cho milestone achievements
    - Context-awareness (different display for different sections)
    - Developer customization options

Component cần cân bằng giữa visual appeal và clarity, ensuring that progress is immediately understandable at a glance. It should feel encouraging and motivational rather than judgmental về progress. The design should be flexible enough để work across many different learning contexts (courses, quizzes, certification paths) while maintaining a consistent language và logic. Above all, nó phải làm cho việc theo dõi progress feel like a positive part của learning journey.
```

## Props và API

### Inputs

| Prop           | Type                                                          | Default      | Description                                                  |
| -------------- | ------------------------------------------------------------- | ------------ | ------------------------------------------------------------ |
| variant        | 'linear' \| 'circular' \| 'step' \| 'detailed' \| 'dashboard' | 'linear'     | Kiểu hiển thị của indicator                                  |
| value          | number                                                        | 0            | Giá trị tiến độ hiện tại                                     |
| maxValue       | number                                                        | 100          | Giá trị tối đa của tiến độ                                   |
| showLabel      | boolean                                                       | true         | Hiển thị label phần trăm                                     |
| labelPosition  | 'inside' \| 'outside' \| 'tooltip'                            | 'outside'    | Vị trí hiển thị label                                        |
| color          | string                                                        | 'primary'    | Màu sắc chính của indicator                                  |
| size           | 'small' \| 'medium' \| 'large'                                | 'medium'     | Kích thước của indicator                                     |
| thickness      | number                                                        | 4            | Độ dày của thanh progress hoặc vòng tròn                     |
| animate        | boolean                                                       | true         | Bật/tắt animation                                            |
| steps          | StepObject[]                                                  | []           | Các bước trong step variant                                  |
| showMilestones | boolean                                                       | false        | Hiển thị các mốc quan trọng trên thanh progress              |
| milestones     | MilestoneObject[]                                             | []           | Dữ liệu các mốc quan trọng                                   |
| orientation    | 'horizontal' \| 'vertical'                                    | 'horizontal' | Hướng hiển thị (cho linear và step variants)                 |
| subtitle       | string                                                        | ''           | Văn bản phụ hiển thị dưới progress                           |
| striped        | boolean                                                       | false        | Hiển thị pattern kẻ sọc                                      |
| animated       | boolean                                                       | false        | Hiện thị animation chạy trên pattern                         |
| indeterminate  | boolean                                                       | false        | Chế độ indeterminate (dùng khi không biết chính xác tiến độ) |
| className      | string                                                        | ''           | Custom class cho component                                   |

### Methods/Events

| Name                | Parameters                           | Description                                             |
| ------------------- | ------------------------------------ | ------------------------------------------------------- |
| onChange            | (value: number) => void              | Trigger khi giá trị tiến độ thay đổi                    |
| onMilestoneReached  | (milestone: MilestoneObject) => void | Trigger khi đạt được một mốc quan trọng                 |
| onComplete          | () => void                           | Trigger khi hoàn thành 100%                             |
| onStepClick         | (step: StepObject) => void           | Trigger khi người dùng click vào một step               |
| onHover             | (value: number) => void              | Trigger khi hover trên vị trí cụ thể của thanh progress |
| onAnimationComplete | () => void                           | Trigger khi hoàn thành animation                        |
| onRender            | (element: HTMLElement) => void       | Trigger khi component đã được render                    |
| onVisibilityChange  | (isVisible: boolean) => void         | Trigger khi visibility của component thay đổi           |

## Mô tả giao diện

### Linear Variant

Thanh progress ngang (hoặc dọc) với viền bo tròn ở hai đầu, hiển thị tiến độ bằng cách lấp đầy từ trái sang phải (hoặc từ dưới lên trên). Background là màu nhạt, phần đã hoàn thành là màu đậm hơn (thường là màu brand primary hoặc gradient). Khi cài đặt animation, progress tăng dần với transition mượt mà. Label phần trăm có thể hiển thị bên trong thanh (nếu đủ rộng), ở trên/dưới, hoặc xuất hiện khi hover. Có thể bổ sung các marker cho các milestone dọc theo thanh progress.

### Circular Variant

Vòng tròn progress với arc tăng dần theo chiều kim đồng hồ từ vị trí trên cùng. Background là arc màu nhạt, phần hoàn thành là arc màu đậm có rounded caps. Phần giữa vòng tròn hiển thị phần trăm hoàn thành dưới dạng text, có thể kèm theo icon hoặc label phụ. Animation mượt mà khi giá trị thay đổi, arc lớn dần. Size có thể điều chỉnh từ nhỏ (icon) đến lớn (featured metric), và thickness của arc có thể customized.

### Step Variant

Hiển thị tiến độ dưới dạng các bước riêng biệt theo trình tự, thường nằm ngang hoặc dọc. Mỗi step có indicator (số hoặc icon) và có thể có description. Steps đã hoàn thành được highlight (màu đậm, icon check), step hiện tại được đánh dấu đặc biệt (glow, pulsing), và steps chưa hoàn thành có style nhạt hơn. Các steps được nối với nhau bằng line hoặc connector, cũng được fill màu theo progress. Các steps có thể clickable để navigation.

### Detailed Variant

Mở rộng từ các variants khác, thêm thông tin chi tiết về tiến độ. Có thể bao gồm thanh progress chính ở trên, kèm theo breakdown của từng phần/module với mini progress bars riêng. Hiển thị thêm các metrics như thời gian đã học, số items đã hoàn thành/tổng số, estimated time to completion. Có thể kèm theo visualizations phụ như mini charts hiển thị trend, so sánh với mục tiêu hoặc trung bình. Thường bao gồm motivational messages tùy theo mức progress.

### Dashboard Variant

Tổng hợp nhiều progress indicators trong một dashboard view. Thường bao gồm một circular progress lớn cho overall completion, kết hợp với multiple linear bars cho từng category/section. Layout grid hoặc card-based với consistent styling. Bao gồm summary metrics và trends ở trên, chi tiết breakdown ở dưới. Các sections có thể expandable để xem thêm chi tiết. Thích hợp cho các learning paths phức tạp hoặc progress tracking đa chiều.

## Lưu ý quan trọng

- **Accuracy**: Đảm bảo hiển thị chính xác giá trị tiến độ, tránh làm tròn số gây hiểu lầm
- **Performance**: Optimize animations và rendering, đặc biệt khi hiển thị nhiều indicators cùng lúc
- **Color Psychology**: Sử dụng màu sắc phù hợp tạo động lực (xanh lá, xanh dương) thay vì màu cảnh báo
- **Accessibility**: Đảm bảo không chỉ dựa vào màu sắc để truyền đạt thông tin, hỗ trợ screen readers
- **Responsiveness**: Điều chỉnh size và layout phù hợp với các kích thước màn hình khác nhau
- **Consistency**: Maintain consistent behavior và appearance giữa các variants
- **Loading States**: Handle properly khi data đang được fetched
- **Edge Cases**: Xử lý gracefully các trường hợp như 0%, 100%, hoặc không có data
- **Animation Performance**: Sử dụng CSS transforms và opacity cho animations để tối ưu performance
- **Internationalization**: Support các formats khác nhau cho displaying percentages và numbers
  </rewritten_file>
