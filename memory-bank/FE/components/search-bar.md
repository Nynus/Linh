# Search Bar Component

## Mô tả

Search Bar là một component tương tác cho phép người dùng tìm kiếm nội dung trong toàn bộ ứng dụng. Đây là một thành phần thiết yếu của hệ thống navigation giúp người dùng nhanh chóng tìm thấy khóa học, câu hỏi, bài viết, người dùng và nội dung khác. Search Bar hỗ trợ tìm kiếm nâng cao với các bộ lọc, gợi ý tự động, và tính năng tìm kiếm bằng AI, mang lại trải nghiệm tìm kiếm mạnh mẽ và trực quan.

## Loại

- Client Component với tương tác phức tạp
- Input control với các states và behaviors đặc biệt
- Kết hợp Client và Server Components cho search results

## Variants

- **Simple**: Search bar cơ bản chỉ với input field
- **Expanded**: Bao gồm input field, filter controls, và advanced search toggle
- **Omnisearch**: Tìm kiếm toàn diện với kết quả nhóm theo categories
- **Inline**: Search bar nhỏ gọn tích hợp trong các components khác

## Prompt chi tiết

```
Thiết kế một Search Bar hiện đại, thông minh và mạnh mẽ cho nền tảng học tập NyNus. Component này sẽ là cổng tìm kiếm chính trong ứng dụng, cung cấp khả năng truy cập nhanh đến mọi loại nội dung và hỗ trợ tìm kiếm bằng AI.

1. Input Field Design:
   - Clean, minimal input field với border radius nhẹ nhàng
   - Placeholder text thông minh ("Tìm khóa học, câu hỏi, người dùng...")
   - Search icon đặt bên trái hoặc phải (configurable)
   - Clear button xuất hiện khi có text
   - Focus state rõ ràng với border highlight và subtle shadow
   - Đủ rộng để hiển thị queries dài (min-width phù hợp)
   - Subtle animation khi focus/blur
   - Màu sắc và styling phù hợp với design system

2. Search Behavior:
   - Instant search khi typing (debounced, ~300ms)
   - History suggestions từ các tìm kiếm trước đó
   - Popular/trending searches hiển thị khi empty state
   - Keyboard navigation (arrow keys, enter, escape)
   - Submit với Enter key hoặc click icon
   - Clear với Escape key hoặc clear button
   - Preserve query khi navigate giữa các trang
   - Deep linking với search parameters trong URL

3. Search Suggestions:
   - Dropdown hiển thị kết quả ngay khi gõ
   - Categorized suggestions (Courses, Questions, Posts, Users)
   - Rich previews với thumbnails/avatars khi thích hợp
   - Highlight của matching text trong suggestions
   - Recent searches section ở đầu dropdown
   - "View all results" link ở cuối dropdown
   - Smooth open/close animation cho dropdown
   - Hover states rõ ràng cho các suggestions

4. AI-Assisted Search:
   - Natural language processing cho complex queries
   - Auto-correction cho typos và spelling mistakes
   - Synonym matching và semantic search
   - "Did you mean..." suggestions khi thích hợp
   - Auto-translate nếu query không phải ngôn ngữ chính
   - Context-aware suggestions dựa trên user history
   - AI explanations cho certain educational queries

5. Filters & Advanced Search:
   - Toggleable advanced search panel
   - Các filter phổ biến ngay trên search bar (content type, date range)
   - Filter chips hiển thị activated filters
   - Trạng thái clear all filters
   - Custom ranges và filter combinations
   - Save searches functionality cho complex queries
   - Visual indication khi filters active

6. Visual Feedback:
   - Loading state khi fetching results
   - Empty state với helpful suggestions
   - Error state khi search fails
   - Success micro-animation khi results load
   - Filter "applied" indicators
   - Count badge hiển thị số lượng kết quả
   - Subtle transitions between states

7. Voice Search (nếu hỗ trợ):
   - Voice input toggle button
   - Microphone animation khi recording
   - Real-time transcription hiển thị
   - Cancel/submit voice input controls
   - Permission request UI cho microphone
   - Fallback cho browsers không hỗ trợ

8. Mobile Adaptations:
   - Collapsible search bar trong header
   - Expand to full-screen mode trên mobile
   - Touch-friendly hitboxes
   - Soft keyboard optimizations
   - Bottom sheet for filters trên mobile
   - Gesture support (swipe to dismiss)
   - Position adjustments khi keyboard visible

9. Accessibility:
   - Proper ARIA roles và labels
   - Keyboard navigation support
   - Screen reader announcements cho results
   - High contrast mode support
   - Focus management between search và results
   - Sufficient color contrast
   - Support for text scaling

10. Performance Optimizations:
    - Efficient query caching
    - Request debouncing/throttling
    - Progressive loading của result previews
    - Image lazy-loading trong suggestions
    - Minimal re-renders
    - Efficient DOM updates
    - Data prefetching cho likely searches

11. Special Features:
    - Math equation search support
    - Code snippet search capability
    - Tagging system integration (#tags in search)
    - Scoped search within sections (e.g., within a course)
    - Search history management
    - Trending/popular searches
    - Personalized result ranking

12. Results Display (for full search page):
    - Categorized results tabs
    - Relevant sorting options
    - List/grid view toggle
    - Pagination controls
    - Filter sidebar/panel
    - Result highlighting
    - Quick action buttons on results

Search bar phải cảm thấy responsive và intelligent, cung cấp kết quả có giá trị ngay khi người dùng bắt đầu gõ. AI functionality nên tinh tế nhưng hiệu quả, giúp người dùng tìm thấy nội dung họ cần ngay cả khi họ không biết chính xác cách diễn đạt. Component phải lightweight và performant, đặc biệt trên mobile và connection chậm. Design nên clean và unobtrusive khi không active, nhưng expanded và helpful khi đang sử dụng.
```

## Props và API

### Inputs

| Prop              | Type                                               | Default                                           | Description                                        |
| ----------------- | -------------------------------------------------- | ------------------------------------------------- | -------------------------------------------------- |
| variant           | 'simple' \| 'expanded' \| 'omnisearch' \| 'inline' | 'simple'                                          | Kiểu hiển thị của search bar                       |
| placeholder       | string                                             | 'Tìm kiếm...'                                     | Placeholder text hiển thị khi input trống          |
| initialValue      | string                                             | ''                                                | Giá trị ban đầu của input field                    |
| searchEndpoint    | string                                             | '/api/search'                                     | Endpoint API cho tìm kiếm                          |
| debounceTime      | number                                             | 300                                               | Thời gian debounce giữa các lần search (ms)        |
| maxResults        | number                                             | 5                                                 | Số lượng kết quả hiển thị tối đa trong suggestions |
| showFilters       | boolean                                            | false                                             | Hiển thị filter controls                           |
| enableVoiceSearch | boolean                                            | false                                             | Bật tính năng tìm kiếm bằng giọng nói              |
| enableAI          | boolean                                            | true                                              | Bật tính năng tìm kiếm bằng AI                     |
| categories        | string[]                                           | ['all', 'courses', 'questions', 'users', 'posts'] | Danh sách categories cho kết quả                   |
| showRecent        | boolean                                            | true                                              | Hiển thị tìm kiếm gần đây                          |
| autoFocus         | boolean                                            | false                                             | Tự động focus vào input khi render                 |
| className         | string                                             | ''                                                | Custom class cho component                         |
| inputClassName    | string                                             | ''                                                | Custom class cho input field                       |
| dropdownClassName | string                                             | ''                                                | Custom class cho dropdown                          |
| iconPosition      | 'left' \| 'right'                                  | 'left'                                            | Vị trí icon tìm kiếm                               |

### Methods/Events

| Name               | Parameters                                | Description                                 |
| ------------------ | ----------------------------------------- | ------------------------------------------- |
| onSearch           | (query: string, filters?: object) => void | Trigger khi submit search                   |
| onQueryChange      | (query: string) => void                   | Trigger khi query thay đổi                  |
| onFilterChange     | (filters: object) => void                 | Trigger khi filters thay đổi                |
| onResultSelect     | (result: SearchResult) => void            | Trigger khi chọn một kết quả từ suggestions |
| onFocus            | (e: React.FocusEvent) => void             | Trigger khi input được focus                |
| onBlur             | (e: React.FocusEvent) => void             | Trigger khi input mất focus                 |
| onClear            | () => void                                | Trigger khi clear input                     |
| onVoiceSearchStart | () => void                                | Trigger khi bắt đầu voice search            |
| onVoiceSearchEnd   | (transcript: string) => void              | Trigger khi kết thúc voice search           |

## Mô tả giao diện

### Simple Variant

Variant cơ bản gồm một input field có border radius vừa phải, icon tìm kiếm ở bên trái, và clear button xuất hiện khi có text. Khi focus, có subtle highlight và shadow để tạo độ sâu. Dropdown suggestions xuất hiện khi bắt đầu gõ, hiển thị matched items với highlight text khớp với query. Mỗi suggestion có thể đi kèm icon hoặc thumbnail nhỏ. Thiết kế tối giản và nhẹ nhàng.

### Expanded Variant

Mở rộng từ Simple variant, thêm filter controls bên cạnh input field hoặc bên dưới khi responsive. Filter controls có thể là dropdown select, toggle buttons, hoặc icon buttons tùy thuộc vào space available. Advanced search toggle hiển thị panel hoặc modal với nhiều filter options. Khi có filters active, hiển thị filter chips để dễ dàng xem và xóa filters.

### Omnisearch Variant

Thiết kế đầy đủ nhất, chiếm nhiều không gian screen hơn. Input field lớn, thường được đặt chính giữa hoặc dưới header. Dropdown kết quả mở rộng thành một panel lớn hơn, hiển thị kết quả nhóm theo categories với tabs để chuyển đổi giữa các nhóm. Mỗi kết quả có preview phong phú hơn, có thể bao gồm mô tả ngắn, metadata, và quick actions. Panel có thể include navigation để xem all results trong một category.

### Inline Variant

Phiên bản nhỏ gọn được tối ưu hóa để nhúng vào các components khác như cards, sidebars hoặc panels. Input field nhỏ hơn, có thể không có border khi unfocused (chỉ hiển thị icon). Dropdown kết quả nhỏ hơn và chỉ hiển thị kết quả trong một category cụ thể tùy thuộc vào context sử dụng. Animation và transitions được tối giản để không làm phiền trải nghiệm chính.

## Lưu ý quan trọng

- **Performance**: Đảm bảo debounce search requests và caching results để tránh quá tải server
- **Relevance**: Kết quả tìm kiếm phải được sắp xếp theo độ phù hợp và cá nhân hóa cho user
- **Internationalization**: Support cho tìm kiếm đa ngôn ngữ và special characters
- **Privacy**: Cân nhắc lưu trữ search history và xử lý data một cách an toàn
- **Keyboard Navigation**: Đảm bảo trải nghiệm mượt mà khi sử dụng keyboard
- **Mobile Experience**: Design phải đáp ứng tốt trên all device sizes, đặc biệt là touch interactions
- **Error States**: Graceful handling của search errors và no-result scenarios
- **Analytics**: Tracking search patterns để cải thiện search functionality
- **History Management**: Lưu trữ và quản lý search history an toàn, cho phép clear history
- **Autocomplete Strategy**: Có chiến lược hiển thị suggestions phù hợp để giúp users tìm nhanh hơn

## Triển khai

### Cấu trúc file

- **`apps/web/src/components/navigation/search-bar.tsx`**: Component chính
- **`apps/web/src/app/components/search-showcase/page.tsx`**: Trang showcase
- **`apps/web/src/app/search/page.tsx`**: Trang kết quả tìm kiếm

### Components

#### SearchBar Component

Component chính cung cấp tính năng tìm kiếm với các variants:

- **Simple**: Phiên bản cơ bản cho tìm kiếm nhanh
- **Expanded**: Phiên bản mở rộng với filters và tính năng nâng cao
- **Omnisearch**: Tìm kiếm toàn diện với kết quả phân nhóm
- **Inline**: Phiên bản nhỏ gọn tích hợp vào các component khác

Tính năng chính:

- Input với debounced search và highlighting
- Dropdown hiển thị suggestions với categorizaton
- Recent searches và lịch sử tìm kiếm
- Voice search với animation feedback
- Advanced filters và filter chips
- Keyboard navigation và focus management
- Loading/empty/error states
- Responsive design với mobile adaptation

#### SearchResults Component

Hiển thị kết quả tìm kiếm với:

- Phân loại kết quả theo tab (All, Courses, Questions, Users, Posts)
- Card hiển thị cho mỗi kết quả với metadata phù hợp
- Filter sidebar cho advanced filtering
- Sorting options cho kết quả
- Pagination và lazy loading
- Trạng thái loading với skeleton
- Empty state với gợi ý

### Demo Showcase

Trang showcase hiển thị:

- Tất cả các variants với examples
- Input states (default, hover, focus, filled)
- Dropdown suggestions với mock data
- Voice search demo
- Filter controls demo
- Mobile responsive demonstrations
- API reference và props documentation

### Accessibility Considerations

- Đầy đủ ARIA attributes và roles
- Keyboard navigation hỗ trợ với focus trapping
- Screen reader announcements cho search results
- High contrast và dark mode support
- Support cho text scaling và zoom
- Tất cả interactive elements có trạng thái focus rõ ràng

### Performance Optimizations

- Debouncing search requests (300ms default)
- Caching results với React Query
- Lazy loading images trong search results
- Component code splitting
- Memoization để giảm re-renders
- Efficient DOM updates

### Mobile Adaptations

- Full-screen search mode trên viewport nhỏ
- Touch-friendly hitboxes và spacing
- Keyboard adjustments cho mobile
- Optimized voice input UI
- Bottom sheet cho filters
- Gesture support (swipe to dismiss)
