# Course Card Component

## Mô tả

Course Card là một component hiển thị thông tin tóm tắt về một khóa học trong hệ thống NyNus. Component này cung cấp cái nhìn tổng quan và hấp dẫn về khóa học, bao gồm hình ảnh, tiêu đề, thông tin giảng viên, giá cả, đánh giá, và tiến độ học tập. Course Card được thiết kế để hiển thị trong các danh sách hoặc grid khóa học, giúp người dùng dễ dàng duyệt qua và so sánh các lựa chọn học tập.

## Loại

- Primarily Server Component với một số Client Component interactions
- Presentational card với nhiều information states
- Responsive design element với nhiều layout variations

## Variants

- **Standard**: Hiển thị đầy đủ thông tin khóa học trong layout chuẩn
- **Compact**: Phiên bản nhỏ gọn với thông tin tối thiểu
- **Featured**: Phiên bản nổi bật với visual enhancements và thông tin bổ sung
- **Progress**: Tập trung hiển thị tiến độ học tập của người dùng
- **Admin**: Variant dành cho admin với các action quản lý bổ sung

## Prompt chi tiết

```
Thiết kế một Course Card component hiện đại, hấp dẫn, và thông tin đầy đủ cho nền tảng học tập NyNus. Component này sẽ là cách chính để hiển thị khóa học trong danh sách và grid views, giúp học viên dễ dàng duyệt qua và chọn lựa khóa học phù hợp.

1. Card Container & Layout:
   - Clean, modern card design với border radius nhẹ nhàng (8-12px)
   - Border subtle hoặc shadow để tạo elevation effect
   - Aspect ratio nhất quán (16:9 hoặc 3:2 cho thumbnail)
   - Padding đồng nhất bên trong (16px)
   - Hover state tinh tế với subtle elevation increase
   - Focus state rõ ràng cho keyboard navigation
   - Cursor pointer để indicate clickable nature
   - Responsive sizing với min/max width constraints

2. Course Thumbnail:
   - High-quality image với proper aspect ratio
   - Gradient overlay để đảm bảo text readability nếu có
   - Loading state với skeleton placeholder
   - Error state với placeholder image khi image fails
   - Optional badge overlay cho status (New, Popular, Featured)
   - Image optimization với multiple resolutions
   - Optional play button overlay nếu có preview video
   - Image hover effect subtle (zoom or brightness)

3. Course Information Layout:
   - Clean typographic hierarchy với clear visual scanning
   - Title với truncation sau 1-2 lines
   - Subtitle/description với truncation sau 2-3 lines
   - Instructor information với avatar và name
   - Rating display với stars và số lượng reviews
   - Price display với original/discounted options
   - Spacing consistent giữa các elements
   - Clear separation giữa các information sections

4. Visual Indicators:
   - Difficulty level indicator (Beginner, Intermediate, Advanced)
   - Duration/time commitment display
   - Topic tags với consistent styling
   - Student count hoặc popularity metrics
   - Certification badge nếu course cấp chứng chỉ
   - "Last updated" timestamp nếu relevant
   - Language indicator nếu multiple languages available
   - Course format indicators (Video, Interactive, Text)

5. Progress Indicators (for enrolled courses):
   - Progress bar với percentage completion
   - Visual distinction giữa started vs. completed
   - Next lesson indicator
   - Remaining time/lessons counter
   - Achievement badges earned
   - Resume button for in-progress courses
   - Due date reminder nếu applicable
   - Visual cue cho recently active courses

6. Interactive Elements:
   - Primary action button (Enroll, View, Continue)
   - Wishlist/save button với toggle state
   - Quick preview button/hover
   - Share option với social platforms
   - Optional menu với additional actions
   - Interactive rating hover states
   - Tooltip information for complex elements
   - Hover states nhất quán cho tất cả interactive elements

7. Status & Special States:
   - "Enrolled" status indicator
   - "Completed" achievement display
   - "New" or "Updated" badges khi applicable
   - "Sale" or "Discount" indicators
   - "Popular" or "Trending" badges
   - "Recommended for you" personalization
   - "Limited availability" urgency indicators
   - Wishlist/saved state với visual feedback

8. Accessibility Features:
   - High contrast text-to-background
   - Proper heading hierarchy
   - Alt text cho all images
   - ARIA labels cho interactive elements
   - Keyboard focus indicators
   - Screen reader friendly structure
   - Touch target sizes phù hợp
   - Reduced motion alternatives cho animations

9. Responsive Behavior:
   - Graceful resizing từ mobile đến desktop
   - Stack layout adjustment for narrow viewports
   - Image size và quality optimization
   - Content prioritization on smaller screens
   - Touch-friendly targets trên mobile
   - Balanced information density across breakpoints
   - Horizontal scroll optimization for mobile listings
   - Grid-to-list view transitions

10. Performance Considerations:
    - Lazy loading cho images
    - Minimal render cost for listings với many cards
    - Efficient handling của hover/interaction states
    - Image compression và format optimization
    - Minimal JS footprint nếu có thể
    - CSS animations thay vì JS khi thích hợp
    - Efficient re-rendering khi data updates
    - Bundle size optimization cho repeated components

11. Animation & Micro-interactions:
    - Subtle entrance animations when cards load
    - Hover state transitions (150-200ms)
    - Focus state animations
    - Loading state pulses hoặc transitions
    - Enrollment button feedback animation
    - Progress updates celebration micro-animation
    - Wishlist/save button toggle animation
    - Card selection/highlight effects

12. Data & State Handling:
    - Skeleton loading state khi fetching data
    - Error states với retry options
    - Empty state nếu không có data
    - Optimistic UI updates cho actions
    - Caching strategy cho repeated views
    - Intersection observer cho lazy loading
    - Save enrollment status locally nếu offline
    - Data refresh strategy khi returning to listing

Card design nên cân bằng giữa aesthetic appeal và information density, đảm bảo rằng người dùng có đủ thông tin để đánh giá khóa học mà không bị overwhelm. Visual hierarchy rõ ràng phải guide user's attention đến most important details first. Animation và interaction nên subtle và purposeful, enhancing UX mà không trở thành distraction. Design nên scalable và maintainable, với variants và configurations phù hợp cho different contexts trong application. Cuối cùng, component phải performant ngay cả khi render nhiều cards trong một listing.
```

## Props và API

### Inputs

| Prop            | Type                                                           | Default    | Description                                                   |
| --------------- | -------------------------------------------------------------- | ---------- | ------------------------------------------------------------- |
| course          | CourseObject                                                   | required   | Đối tượng chứa thông tin về khóa học                          |
| variant         | 'standard' \| 'compact' \| 'featured' \| 'progress' \| 'admin' | 'standard' | Kiểu hiển thị của card                                        |
| size            | 'small' \| 'medium' \| 'large'                                 | 'medium'   | Kích thước hiển thị của card                                  |
| aspectRatio     | string                                                         | '16:9'     | Tỷ lệ khung hình của thumbnail                                |
| showRating      | boolean                                                        | true       | Hiển thị đánh giá của khóa học                                |
| showInstructor  | boolean                                                        | true       | Hiển thị thông tin giảng viên                                 |
| showPrice       | boolean                                                        | true       | Hiển thị thông tin giá                                        |
| showProgress    | boolean                                                        | false      | Hiển thị tiến độ học tập (chỉ dành cho người dùng đã đăng ký) |
| showActions     | boolean                                                        | true       | Hiển thị các nút hành động                                    |
| isEnrolled      | boolean                                                        | false      | Trạng thái đăng ký của người dùng                             |
| onEnroll        | (courseId: string) => void                                     | undefined  | Callback khi người dùng nhấn nút đăng ký                      |
| onAddToWishlist | (courseId: string) => void                                     | undefined  | Callback khi người dùng thêm vào wishlist                     |
| onShare         | (courseId: string) => void                                     | undefined  | Callback khi người dùng chia sẻ khóa học                      |
| onCardClick     | (courseId: string) => void                                     | undefined  | Callback khi người dùng click vào card                        |
| className       | string                                                         | ''         | Custom class cho component                                    |
| highlightNew    | boolean                                                        | true       | Highlight khóa học mới                                        |
| newThreshold    | number                                                         | 30         | Số ngày để xác định khóa học mới                              |
| showTags        | boolean                                                        | true       | Hiển thị tags của khóa học                                    |
| maxTags         | number                                                         | 3          | Số lượng tags tối đa hiển thị                                 |

### Methods/Events

| Name              | Parameters                                 | Description                                         |
| ----------------- | ------------------------------------------ | --------------------------------------------------- |
| onView            | (courseId: string) => void                 | Trigger khi card được hiển thị trong viewport       |
| onActionClick     | (action: string, courseId: string) => void | Trigger khi người dùng click vào một action buttons |
| onTagClick        | (tag: string) => void                      | Trigger khi người dùng click vào một tag            |
| onInstructorClick | (instructorId: string) => void             | Trigger khi người dùng click vào tên giảng viên     |
| onPreviewClick    | (courseId: string) => void                 | Trigger khi người dùng click vào preview button     |
| onImageLoad       | (courseId: string) => void                 | Trigger khi thumbnail đã load xong                  |
| onImageError      | (courseId: string, error: Error) => void   | Trigger khi thumbnail không load được               |

## Mô tả giao diện

### Standard Variant

Variant mặc định hiển thị đầy đủ thông tin khóa học trong một card có kích thước trung bình. Phần trên là thumbnail chất lượng cao với tỷ lệ 16:9, có thể có overlay badges cho các khóa học đặc biệt. Phần dưới chứa tiêu đề khóa học (2 dòng tối đa), tên giảng viên kèm avatar nhỏ, star rating với số lượng đánh giá, giá tiền (có thể hiển thị cả giá gốc đã gạch ngang nếu đang giảm giá), 2-3 tags chủ đề, và một nút CTA chính (Enroll/View). Hover state sẽ tăng nhẹ elevation của card và có thể hiển thị thêm một action button phụ.

### Compact Variant

Phiên bản nhỏ gọn với diện tích chiếm ít hơn, phù hợp cho sidebar, carousel, hoặc mobile view. Thumbnail nhỏ hơn với tỷ lệ 3:2, tiêu đề chỉ hiển thị 1 dòng, và các thông tin phụ được tối giản. Chỉ hiển thị rating mà không kèm số đánh giá, không hiển thị tags, và các action buttons được thu gọn hoặc ẩn hoàn toàn. Layout thường là horizontal trên mobile với thumbnail bên trái và nội dung bên phải.

### Featured Variant

Phiên bản nổi bật dùng cho các khóa học được đề xuất hoặc quảng bá. Kích thước lớn hơn Standard, có border highlight hoặc glow effect nhẹ. Thumbnail có thể có overlay text "Featured" hoặc "Recommended". Hiển thị nhiều nội dung hơn, bao gồm mô tả ngắn về khóa học (2-3 dòng), số học viên đã đăng ký, và thời lượng khóa học. CTA button lớn hơn và nổi bật hơn, có thể thêm một button "Preview" hoặc "Quick View". Animation và transitions tinh tế hơn khi hover.

### Progress Variant

Dành cho các khóa học mà người dùng đã đăng ký. Thumbnail có overlay mờ với progress percentage, phần dưới hiển thị progress bar trực quan với tỷ lệ hoàn thành. Thay vì nút "Enroll", hiển thị nút "Continue Learning" hoặc "Resume" dẫn trực tiếp đến bài học tiếp theo. Thêm thông tin về số bài học đã hoàn thành/tổng số, thời gian học gần nhất, và estimated time để hoàn thành. Có thể hiển thị các achievement badges đã đạt được trong khóa học.

### Admin Variant

Thiết kế cho admin dashboard, cung cấp quick glance và actions cho khóa học. Bên cạnh thông tin cơ bản, card hiển thị thêm các metrics như enrollment rate, completion rate, average rating, và revenue generated. Các admin actions như Edit, Archive, Feature, hoặc View Analytics được hiển thị dưới dạng icon buttons hoặc dropdown menu. Status indicators rõ ràng cho Draft, Published, hoặc Archived. Có thể include toggle switches cho settings như "Featured" hoặc "Public".

## Lưu ý quan trọng

- **Performance**: Optimize images và minimize re-renders để đảm bảo mượt mà trong grid views
- **Responsiveness**: Đảm bảo card hiển thị tốt trên tất cả kích thước màn hình, đặc biệt là mobile
- **Visual Consistency**: Maintain consistent styling và spacing giữa tất cả variants
- **Accessibility**: Đảm bảo contrast đủ cao, keyboard navigation, và proper ARIA attributes
- **Image Loading**: Implement lazy loading và placeholders để tránh layout shifts
- **Empty States**: Handle gracefully missing data như thiếu hình ảnh hoặc ratings
- **Internationalization**: Support cho multiple currencies, date formats, và text lengths
- **Animation Performance**: Sử dụng hardware-accelerated properties cho animations
- **Testing**: Verify behavior với various course data combinations và edge cases
- **Tracking**: Implement view và click tracking mà không affect performance
