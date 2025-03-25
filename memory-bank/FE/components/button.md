# Button Component

## Mô tả

Button Component là một thành phần tương tác cơ bản nhất của nền tảng NyNus, được sử dụng để kích hoạt các hành động, gửi form, điều hướng, và thực hiện nhiều thao tác khác. Buttons cung cấp visual cue rõ ràng về các điểm tương tác, giúp người dùng dễ dàng nhận biết và thực hiện các hành động quan trọng. Nền tảng NyNus sử dụng một hệ thống buttons nhất quán với nhiều variants và sizes để đáp ứng các ngữ cảnh sử dụng khác nhau, đồng thời duy trì trải nghiệm người dùng thống nhất trên toàn bộ ứng dụng.

## Loại

- Client Component
- Được xây dựng trên Radix UI và Tailwind CSS
- Có thể được tùy chỉnh và mở rộng qua class variants
- Được tích hợp accessibility và keyboard navigation
- Hỗ trợ Server Actions và client-side event handlers

## Variants

- **Primary**: Button chính với màu sắc nổi bật, sử dụng cho call-to-actions và hành động quan trọng nhất
- **Secondary**: Button phụ với visual weight thấp hơn primary, sử dụng cho hành động thứ yếu
- **Outline**: Button với border và background transparent, thường dùng cho hành động ít quan trọng hơn
- **Ghost**: Button không có background và border, chỉ hiển thị khi hover, dùng cho các hành động phụ
- **Destructive**: Button với màu đỏ/danger, dùng cho các hành động xóa hoặc nguy hiểm
- **Link**: Button trông giống như text link nhưng vẫn giữ kích thước và padding như button
- **Icon**: Button chỉ chứa icon, thường có hình dạng vuông hoặc tròn
- **Loading**: Trạng thái loading của button với spinner/indicator

## Prompt chi tiết

```
Thiết kế một hệ thống Button Components toàn diện, linh hoạt và nhất quán cho nền tảng học tập NyNus. Buttons là điểm tương tác cơ bản và phổ biến nhất trong giao diện người dùng, đóng vai trò thiết yếu trong việc hướng dẫn người dùng thực hiện các hành động. Hệ thống buttons cần cân bằng giữa tính thẩm mỹ, chức năng, và accessibility.

1. Cấu trúc cơ bản:
   - Container với padding phù hợp (horizontal > vertical)
   - Border radius nhất quán (default: 4-8px)
   - Text label rõ ràng, ngắn gọn với case nhất quán (sentence case)
   - Optional leading và/hoặc trailing icons
   - Visual feedback cho tất cả interaction states
   - Cursor pointer indicator
   - Focus ring visible cho keyboard navigation
   - Transition mượt mà cho state changes
   - Không line breaks trong button text
   - Consistent height trong cùng variant

2. Visual Hierarchy:
   - Primary: Brand color, high contrast, most visually prominent
   - Secondary: Neutral color, medium contrast, support actions
   - Outline: Border-only với minimal background
   - Ghost: No background/border until hover
   - Destructive: Red/danger color signaling caution
   - Link: Text-like appearance với padding của button
   - Icon: Square hoặc circular shape với icon centered
   - Subtle visual differences giữa các variants (color, shadow, etc.)
   - Clear hierarchy khi multiple buttons xuất hiện cùng nhau
   - Consistent visual weight trong cùng một context

3. States & Interactions:
   - Default: Normal, resting state
   - Hover: Subtle color change/highlight khi mouse over
   - Focus: Clear indication for keyboard users (focus ring)
   - Active/Pressed: Visual feedback khi click/tap
   - Disabled: Greyed out với no interactions
   - Loading: Shows spinner/indicator, prevents multiple clicks
   - Success: Optional state sau khi action complete
   - Error: Optional state khi action fails
   - Selected: For toggle or multi-select buttons
   - Smooth transitions giữa các states

4. Sizing Options:
   - XS: Mini buttons for compact UI areas (24-30px height)
   - SM: Small buttons for secondary actions (30-36px height)
   - MD: Default/medium size cho general use (36-42px height)
   - LG: Large buttons for primary CTAs (42-48px height)
   - XL: Extra large for hero/prominent actions (48-56px height)
   - Proportional padding adjustments for each size
   - Consistent icon sizing relative to text
   - Text scale phù hợp với button size
   - Touch target minimum 44x44px cho mobile
   - Responsive adjustments cho different devices

5. Icon Integration:
   - Leading icons (left side) cho additional context
   - Trailing icons (right side) cho action hint (dropdown, external link)
   - Icon-only option với tooltip for context
   - Proper alignment và spacing giữa icon và text
   - Icon size proportional to button size
   - Consistent iconography style across buttons
   - Optional separator giữa icon và text
   - Animate icons subtly khi appropriate
   - Alternative icon cho loading state
   - Ensure icon clarity at all sizes

6. Button Groups & Combinations:
   - Horizontal button groups (attached/separated)
   - Vertical button stacking when needed
   - Split buttons (button + dropdown)
   - Toggle button groups
   - Button với badge
   - Primary + secondary combinations
   - Consistent spacing between buttons
   - Clear visual relationships
   - Mobile-optimized groupings
   - Logical tab order khi grouped

7. Specialized Variants:
   - Social buttons (login with Google, Facebook, etc.)
   - Download/upload buttons
   - Pagination buttons
   - Filter toggle buttons
   - Circular action buttons (FABs)
   - Clear/reset buttons
   - Submit buttons
   - Back/next navigation buttons
   - Dropdown trigger buttons
   - "Load more" infinite scroll buttons

8. Responsive Behavior:
   - Adapt width (fixed vs. fluid)
   - Stack vs. inline display on small screens
   - Touch-friendly sizing on mobile
   - Maintain minimum tap target sizes
   - Priority shifting on smaller screens
   - Full-width on mobile when appropriate
   - Adjust padding for different devices
   - Maintain legibility at all sizes
   - Consider grouped buttons on small screens
   - Handle overflow gracefully

9. Content Guidelines:
   - Clear, action-oriented text (Start, Submit, Save)
   - Consistent verb tense và capitalization
   - Concise labeling (1-3 words ideal)
   - Avoid vague terms (Click Here, Submit)
   - Match label to action exactly
   - Indicate external links clearly
   - Use ellipsis for incomplete actions
   - Descriptive aria-labels cho icon-only buttons
   - Logical reading order
   - Localization/i18n support

10. Accessibility Requirements:
    - Sufficient color contrast (WCAG AA minimum)
    - Focus visibility for keyboard navigation
    - Touch target size minimum 44x44px
    - Descriptive aria-labels when needed
    - Support for screen readers
    - Keyboard activation (Enter/Space)
    - Clear disabled state indication
    - Role="button" for non-button elements
    - States conveyed beyond just color
    - Reduced motion options for animations

11. Technical Implementation:
    - Composable React component
    - Support for all standard HTML button attributes
    - Forwarded refs for integration
    - polymorphic "as" prop for rendering as different elements
    - Event handling for all interactive states
    - Loading state management
    - Proper default type attribute
    - Server component compatibility
    - Support for Server Actions
    - Form integration

12. Animation & Feedback:
    - Subtle hover animations
    - Press/active state feedback
    - Loading state animations
    - Transition timing consistency (150-250ms)
    - Optional success/error animations
    - Reduced motion alternatives
    - Purposeful micro-interactions
    - Hardware accelerated animations
    - Feedback proportional to action impact
    - Button ripple effects (optional)

Buttons cần thể hiện đúng brand personality của NyNus trong khi vẫn đảm bảo usability và accessibility. Hệ thống nên scalable và maintainable, với các variants được defined rõ ràng. Focus vào usability trước tiên, đảm bảo buttons luôn recognizable và actionable. Hệ thống phải cân nhắc tất cả devices và interaction modes (mouse, touch, keyboard), và phải responsive across all breakpoints. Tất cả buttons phải accessibility-compliant với WCAG 2.1 AA standards.
```

## Props và API

### Button

| Prop        | Type                                                                        | Default   | Description                                     |
| ----------- | --------------------------------------------------------------------------- | --------- | ----------------------------------------------- |
| variant     | 'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'destructive' \| 'link' | 'primary' | Kiểu styling của button                         |
| size        | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'                                        | 'md'      | Kích thước của button                           |
| asChild     | boolean                                                                     | false     | Render as child element (Radix UI slot pattern) |
| isLoading   | boolean                                                                     | false     | Hiển thị trạng thái loading                     |
| isDisabled  | boolean                                                                     | false     | Button disabled không thể tương tác             |
| loadingText | string                                                                      | undefined | Text hiển thị khi đang loading                  |
| leftIcon    | ReactNode                                                                   | undefined | Icon hiển thị bên trái text                     |
| rightIcon   | ReactNode                                                                   | undefined | Icon hiển thị bên phải text                     |
| fullWidth   | boolean                                                                     | false     | Button chiếm toàn bộ chiều rộng của container   |
| type        | 'button' \| 'submit' \| 'reset'                                             | 'button'  | Type HTML của button                            |
| form        | string                                                                      | undefined | ID của form mà button thuộc về                  |
| className   | string                                                                      | ''        | Custom classes cho button                       |
| children    | ReactNode                                                                   | undefined | Nội dung bên trong button                       |
| onClick     | (event: React.MouseEvent) => void                                           | undefined | Handler khi click button                        |

### IconButton

| Prop       | Type                                                              | Default   | Description                         |
| ---------- | ----------------------------------------------------------------- | --------- | ----------------------------------- |
| variant    | 'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'destructive' | 'primary' | Kiểu styling của button             |
| size       | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'                              | 'md'      | Kích thước của button               |
| icon       | ReactNode                                                         | undefined | Icon hiển thị trong button          |
| ariaLabel  | string                                                            | required  | Nhãn cho screen readers (bắt buộc)  |
| isRound    | boolean                                                           | false     | Button có hình tròn hay không       |
| isLoading  | boolean                                                           | false     | Hiển thị trạng thái loading         |
| isDisabled | boolean                                                           | false     | Button disabled không thể tương tác |
| className  | string                                                            | ''        | Custom classes cho button           |
| tooltip    | string                                                            | undefined | Text tooltip khi hover              |
| onClick    | (event: React.MouseEvent) => void                                 | undefined | Handler khi click button            |

### ButtonGroup

| Prop       | Type                                             | Default   | Description                                       |
| ---------- | ------------------------------------------------ | --------- | ------------------------------------------------- |
| variant    | 'primary' \| 'secondary' \| 'outline' \| 'ghost' | 'outline' | Kiểu styling cho các buttons trong group          |
| size       | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'             | 'md'      | Kích thước của các buttons                        |
| isAttached | boolean                                          | true      | Các buttons dính liền nhau hay không              |
| isVertical | boolean                                          | false     | Buttons xếp dọc hay ngang                         |
| spacing    | 'none' \| 'xs' \| 'sm' \| 'md'                   | 'none'    | Khoảng cách giữa các buttons (khi không attached) |
| className  | string                                           | ''        | Custom classes cho container                      |
| children   | ReactNode                                        | undefined | Các Button components                             |

### ToggleButton

| Prop          | Type                                             | Default   | Description                         |
| ------------- | ------------------------------------------------ | --------- | ----------------------------------- |
| isSelected    | boolean                                          | false     | Button có đang được chọn hay không  |
| onToggle      | (isSelected: boolean) => void                    | undefined | Handler khi toggle                  |
| variant       | 'primary' \| 'secondary' \| 'outline' \| 'ghost' | 'outline' | Kiểu styling của button             |
| size          | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'             | 'md'      | Kích thước của button               |
| activeVariant | 'primary' \| 'secondary'                         | 'primary' | Variant khi button active           |
| icon          | ReactNode                                        | undefined | Icon hiển thị trong button          |
| isDisabled    | boolean                                          | false     | Button disabled không thể tương tác |
| className     | string                                           | ''        | Custom classes cho button           |
| children      | ReactNode                                        | undefined | Nội dung bên trong button           |

### ToggleButtonGroup

| Prop       | Type                                             | Default   | Description                          |
| ---------- | ------------------------------------------------ | --------- | ------------------------------------ |
| value      | string \| string[]                               | []        | Giá trị đang được chọn               |
| onChange   | (value: string \| string[]) => void              | undefined | Handler khi chọn thay đổi            |
| isMultiple | boolean                                          | false     | Cho phép chọn nhiều hay không        |
| variant    | 'primary' \| 'secondary' \| 'outline' \| 'ghost' | 'outline' | Kiểu styling của button group        |
| size       | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'             | 'md'      | Kích thước của các buttons           |
| isAttached | boolean                                          | true      | Các buttons dính liền nhau hay không |
| isVertical | boolean                                          | false     | Buttons xếp dọc hay ngang            |
| className  | string                                           | ''        | Custom classes cho container         |
| children   | ReactNode                                        | undefined | Các ToggleButton components          |

## Mô tả giao diện

### Primary Button

Button primary có background color là màu chính của brand (blue/indigo), text màu trắng với độ tương phản cao. Có padding horizontal lớn hơn vertical (16px-24px horizontal, 8px-12px vertical tùy size). Border radius nhất quán (thường 6px hoặc 8px). Font weight thường là semi-bold hoặc bold. Có thể có subtle drop shadow để tăng elevation.

Hover state làm đậm màu background lên một chút. Focus state hiển thị ring focus xung quanh với outline offset. Active/pressed state thì tối hơn nữa và có slight scale-down effect. Khi disabled, button có opacity thấp hơn (~60-70%) và có cursor not-allowed.

Primary buttons dùng cho main calls-to-action như "Đăng ký", "Tiếp tục", "Thanh toán", v.v.

### Secondary Button

Button secondary thường có background màu neutral (xám nhẹ) với text color là text color chính. Visual weight thấp hơn primary nhưng vẫn dễ nhận biết là button. Có thể có border nhẹ thay vì drop shadow. Padding và border radius giống primary button.

Hover state làm đậm background lên. Focus và active states tương tự primary. Secondary buttons xuất hiện cạnh primary buttons cho các hành động thay thế như "Hủy", "Quay lại", "Bỏ qua".

### Outline Button

Button outline có background transparent với border solid (1-2px) theo màu brand hoặc neutral color. Text thường có màu tương tự border. Không có shadow, tạo visual weight nhẹ hơn secondary button.

Hover state thêm light background fill, thường là màu brand với opacity thấp. Focus state có focus ring bên ngoài border. Outline buttons thường dùng trong forms, filter controls, hoặc secondary toolbars.

### Ghost Button

Button ghost hoàn toàn transparent, không có background và border khi ở default state. Chỉ có text và optional icon với màu brand hoặc neutral. Padding vẫn giống các button khác để duy trì consistent tap target.

Hover state hiển thị background color rất nhẹ để indicate interactivity. Ghost buttons thường dùng cho các hành động ít quan trọng, trong các UI đã dense, hoặc khi cần minimalistic look.

### Destructive Button

Button destructive có visual styling tương tự primary hoặc outline nhưng với màu red/danger thay vì brand color. Thường đi kèm icon cảnh báo như trash/delete. Hover state tăng intensity của màu đỏ.

Destructive buttons dùng cho các hành động có consequence cao như "Xóa", "Hủy đăng ký", "Xóa tài khoản". Thường yêu cầu confirmation thêm để tránh accidental clicks.

### Link Button

Button link trông gần giống như text link nhưng vẫn giữ padding và kích thước của button thông thường. Không có background hay border, chỉ có text với màu brand và thường có underline hoặc không.

Hover có thể darkens text, adds/removes underline. Link buttons thường xuất hiện inline với text hoặc trong situations cần button nhưng với minimal visual presence.

### Icon Button

Button chỉ chứa icon, không có text, với shape thường là square hoặc circle. Kích thước bằng nhau theo cả width và height. Nếu là circle thì border-radius: 50%. Icon được căn giữa hoàn toàn. Thường có tooltip hiển thị khi hover để bổ sung context.

Icon buttons có tất cả states và variants như text buttons. Thường được sử dụng trong toolbars, compact UIs, mobile interfaces, hoặc khi space bị giới hạn.

### Loading Button

Variant đặc biệt của bất kỳ button type nào khi ở loading state. Hiển thị spinner/loading indicator thay thế hoặc bên cạnh text. Text có thể giữ nguyên hoặc thay đổi thành "Đang xử lý...", "Đang lưu...", etc.

Button ở trạng thái này vẫn giữ nguyên kích thước để tránh layout shifts. Thường kết hợp với isDisabled=true để prevent multiple submissions. Có thể có slight opacity reduction để indicate processing state.

## Lưu ý quan trọng

- **Accessibility**: Đảm bảo buttons có đủ contrast ratio, focus states rõ ràng, và proper ARIA attributes
- **Touch Targets**: Tất cả buttons đều phải có kích thước đủ lớn cho mobile (ít nhất 44x44px)
- **Visual Hierarchy**: Đảm bảo sự khác biệt rõ ràng giữa các button variants để người dùng hiểu đúng mức độ quan trọng
- **Loading States**: Luôn disable button khi trong loading state để ngăn multiple submissions
- **Text Labels**: Sử dụng text rõ ràng, hành động cụ thể, tránh các từ mơ hồ như "Click Here"
- **Icon Usage**: Icons phải có ý nghĩa rõ ràng và nhất quán, icon-only buttons cần có aria-label
- **Button vs Link**: Chỉ sử dụng button cho actions, dùng link (`<a>` tags) cho navigation
- **Form Submission**: Đảm bảo set type="submit" cho buttons submit form
- **Grouping**: Khi có nhiều buttons, group chúng lại và maintain consistent order
- **Responsive Behavior**: Buttons cần responsive và adaptive trên mobile, có thể fullWidth khi cần
- **Hover States**: Mọi button cần có visual feedback khi hover nhưng không quá dramatic
- **Naming Conventions**: Sử dụng prefix "Button" cho tất cả component liên quan (Button, IconButton, etc.)
- **Server vs Client Components**: Cân nhắc tách biệt button UI (server) và behavior/logic (client)
- **Performance**: Tránh quá nhiều variants tùy chỉnh sẽ làm tăng bundle size
- **Dark Mode**: Buttons phải adaptive trong cả light và dark mode với đủ contrast
