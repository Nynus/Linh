# Table Components

## Mô tả

Table Components là các thành phần UI dùng để hiển thị dữ liệu dạng bảng với các hàng và cột có cấu trúc trong nền tảng NyNus. Tables là cách hiệu quả để trình bày lượng lớn dữ liệu có cấu trúc tương tự, cho phép người dùng dễ dàng quét, phân tích và so sánh thông tin. Các table components được thiết kế để hỗ trợ nhiều loại dữ liệu và use cases khác nhau, từ bảng dữ liệu đơn giản hiển thị thông tin tĩnh đến các bảng phức tạp, tương tác cao với chức năng sorting, filtering, pagination, selection hàng, và inline editing. Tables cũng đóng vai trò quan trọng trong các khu vực quản trị của nền tảng NyNus để hiển thị và quản lý danh sách người dùng, khóa học, bài học, và các loại dữ liệu khác.

## Loại

- Client Components cho các bảng tương tác (với sorting, filtering, pagination)
- Server Components cho các bảng đơn giản hiển thị dữ liệu tĩnh
- Hybrid Components kết hợp Server-side data fetching với Client-side interactions
- Được xây dựng trên nền TanStack Table (React Table) cho logic phức tạp
- Tích hợp với Radix UI Primitives cho accessibility
- Sử dụng Tailwind CSS cho styling linh hoạt
- Hỗ trợ virtualization cho bảng lớn

## Variants

### Theo Độ Phức Tạp

- **Simple Table**: Bảng cơ bản để hiển thị dữ liệu tĩnh, không có tương tác
- **Interactive Table**: Hỗ trợ sorting, filtering, và pagination
- **Advanced Table**: Đầy đủ tính năng với sorting, filtering, pagination, selection, expandable rows và inline editing
- **Data Grid**: Biến thể phức tạp nhất, tương tự Excel, với cell editing và các tính năng nâng cao

### Theo Mục Đích Sử Dụng

- **Data Table**: Hiển thị và tương tác với dữ liệu có cấu trúc
- **Admin Table**: Tối ưu cho giao diện admin và quản lý
- **Comparison Table**: Thiết kế để so sánh các đặc điểm giữa các mục
- **Stats Table**: Hiển thị dữ liệu thống kê và số liệu
- **Pricing Table**: Hiển thị các gói dịch vụ và giá cả
- **Schedule Table**: Hiển thị lịch trình, thời khóa biểu

### Theo Kích Thước và Layout

- **Compact**: Mật độ cao, phù hợp cho nhiều dữ liệu
- **Standard**: Kích thước và khoảng cách cân bằng
- **Relaxed**: Nhiều khoảng trắng, dễ đọc
- **Responsive**: Thích ứng với các kích thước màn hình khác nhau
- **Horizontal Scroll**: Cho phép scroll ngang khi có nhiều cột
- **Fixed-header**: Header cố định khi scroll

## Prompt chi tiết

```
Thiết kế một hệ thống Table Components toàn diện và linh hoạt cho nền tảng học tập NyNus. Table components sẽ được sử dụng trong nhiều ngữ cảnh khác nhau, từ hiển thị danh sách khóa học, học viên và kết quả học tập đến phân tích dữ liệu và quản lý nội dung. Hệ thống cần hỗ trợ đa dạng use cases, vừa đảm bảo tính thẩm mỹ vừa cung cấp khả năng tương tác cao và hiệu suất tốt với bộ dữ liệu lớn.

1. Cấu trúc cơ bản:
   - Table container với styling nhất quán
   - Table header (THead) với visual distinction
   - Table body (TBody) với row styling alternating (nếu phù hợp)
   - Table row (TR) với hover states và selection states
   - Table cell (TD/TH) với proper padding và text alignment
   - Table footer (TFoot) cho tổng kết và pagination
   - Caption/title area cho context và mô tả về dữ liệu
   - Empty state khi không có dữ liệu
   - Loading state khi dữ liệu đang được tải

2. Visual và UI:
   - Border styles nhất quán (none, light, dividers)
   - Màu nền và foreground tương phản tốt
   - Row dividers hoặc alternating row colors để dễ đọc
   - Header styling distinct với font weight và background
   - Subtle hover states cho rows
   - Clear selected row styling
   - Iconography cho sorting, filtering, actions
   - Responsive behavior khi screen size thay đổi
   - Vertical alignment options (top, middle, bottom)
   - Typography scale phù hợp với design system
   - Support cho dark/light mode

3. Column Features:
   - Sortable columns với visual indicators
   - Resizable columns với drag handles
   - Column visibility toggle
   - Column ordering (drag-and-drop hoặc configuration)
   - Fixed/sticky columns cho tables rộng
   - Column types (text, number, date, actions, custom)
   - Column spanning khi cần
   - Header groups cho categorized columns
   - Text alignment options (left, center, right)
   - Width control (fixed, flexible, max, min)
   - Text truncation với tooltip cho nội dung dài
   - Custom rendering cho specific data types

4. Row Features:
   - Selection (single/multiple) với checkboxes
   - Expandable rows cho detail views
   - Drag-and-drop reordering
   - Contextual actions (hover hoặc click)
   - Highlight rows dựa trên conditions
   - Row height options
   - Row grouping với collapsible sections
   - Row spanning khi cần
   - Status indicators (icons, badges, colors)
   - Inline editing capabilities
   - Row hover cards cho preview

5. Data Management:
   - Client-side sorting của đa dạng data types
   - Server-side sorting integration
   - Filtering capabilities (text search, range, dropdown)
   - Advanced filtering với operators (equals, contains, greater than, etc.)
   - Custom filter UI cho data types khác nhau
   - Pagination controls (prev/next, numbered, load more)
   - Pagination state management
   - Page size selection
   - Batch actions cho selected rows
   - Export functionality (CSV, Excel, PDF)
   - State persistence (saved filters, sort, pagination)
   - Total count và filtered count display

6. Performance Considerations:
   - Virtualization cho large datasets
   - Lazy loading cho server-side data
   - Optimized re-renders
   - Debouncing cho filter inputs
   - Progressive loading animations
   - Efficient memorization của processed data
   - Smart column width calculation
   - Optimized sorting algorithms
   - Bundle size optimization
   - Asynchronous data operations

7. Accessibility Features:
   - Semantic markup (table, thead, tbody, etc.)
   - ARIA roles và attributes
   - Keyboard navigation trong table cells
   - Focus management
   - Screen reader considerations cho sorting, filtering
   - Proper labeling cho interactive elements
   - Color không phải là sole differentiator
   - Sortable column announcements
   - Pagination accessibility
   - Selection state announcements

8. Advanced Features:
   - Inline editing modes (click-to-edit, double-click, edit button)
   - Cell và row validation khi editing
   - Master-detail relationship
   - Tree structure data display
   - Cell formatting based on data type (currency, percentage, date)
   - Conditional formatting based on values hoặc rules
   - Aggregation functions (sum, average) cho columns hoặc groups
   - Pivot table capabilities
   - Search highlighting
   - Sticky headers và columns
   - Multi-level headers
   - Selection controls (select all, invert, clear)
   - Context menus

9. Mobile và Responsive Design:
   - Stacked card view cho small screens
   - Horizontal scrolling với fixed columns
   - Priority columns display
   - Progressive disclosure of actions
   - Touch-friendly controls
   - Collapsible column groups
   - Simplified filters và sorting trên mobile
   - Optimized tap targets
   - Space-efficient pagination
   - Responsive toolbars và actions

10. Integration và Customization:
    - Composable architecture cho modularity
    - Theming capabilities
    - Custom cell renderers
    - Hooks cho lifecycle events (sort, filter, select)
    - Integration với form controls
    - API design cho data loading và updates
    - Server-side operations (sort, filter, paginate)
    - State synchronization với URL parameters
    - Custom toolbar actions
    - Extensibility point cho plugins

Hệ thống Table Components cần đảm bảo sự cân bằng giữa tính đầy đủ/linh hoạt với ease of use. Default behavior nên hoạt động tốt cho most cases, trong khi vẫn cung cấp khả năng customization cho specific needs. Visual design nên hỗ trợ readability và data comprehension, đồng thời tuân thủ overall design language của NyNus platform. Accessibility và performance phải là first-class considerations, đặc biệt khi xử lý large datasets hoặc complex interactions.
```

## Props và API

### Table Container

| Prop             | Type                                                   | Default               | Description                     |
| ---------------- | ------------------------------------------------------ | --------------------- | ------------------------------- |
| data             | T[]                                                    | []                    | Dữ liệu nguồn cho bảng          |
| columns          | ColumnDef<T>[]                                         | []                    | Định nghĩa các cột của bảng     |
| variant          | 'simple' \| 'interactive' \| 'advanced' \| 'data-grid' | 'simple'              | Loại bảng                       |
| size             | 'sm' \| 'md' \| 'lg'                                   | 'md'                  | Kích thước cells và spacing     |
| density          | 'compact' \| 'standard' \| 'relaxed'                   | 'standard'            | Mật độ hiển thị                 |
| stickyHeader     | boolean                                                | false                 | Giữ header cố định khi scroll   |
| horizontalScroll | boolean                                                | false                 | Cho phép scroll ngang khi cần   |
| striped          | boolean                                                | false                 | Tạo striped rows                |
| bordered         | boolean                                                | false                 | Thêm borders cho cells          |
| caption          | ReactNode                                              | undefined             | Caption/title cho bảng          |
| noDataText       | string                                                 | 'Không có dữ liệu'    | Text hiển thị khi không có data |
| isLoading        | boolean                                                | false                 | Trạng thái loading              |
| loadingText      | string                                                 | 'Đang tải dữ liệu...' | Text hiển thị khi loading       |
| className        | string                                                 | ''                    | Custom classes                  |
| onRowClick       | (row: T, index: number) => void                        | undefined             | Handler khi click vào row       |
| containerRef     | RefObject<HTMLDivElement>                              | undefined             | Ref cho container               |

### Sorting Props

| Prop             | Type                          | Default   | Description                      |
| ---------------- | ----------------------------- | --------- | -------------------------------- |
| enableSorting    | boolean                       | false     | Bật tính năng sorting            |
| enableMultiSort  | boolean                       | false     | Cho phép sort nhiều cột cùng lúc |
| enableGlobalSort | boolean                       | false     | Bật global sorting menu          |
| defaultSorting   | SortingState                  | []        | State sorting mặc định           |
| sortingState     | SortingState                  | undefined | Controlled sorting state         |
| onSortingChange  | (state: SortingState) => void | undefined | Handler khi sorting thay đổi     |
| sortingFn        | Record<string, SortingFn<T>>  | undefined | Custom sorting functions         |
| sortDescFirst    | boolean                       | false     | Ưu tiên sắp xếp giảm dần trước   |

### Filtering Props

| Prop                    | Type                        | Default       | Description                        |
| ----------------------- | --------------------------- | ------------- | ---------------------------------- |
| enableFiltering         | boolean                     | false         | Bật tính năng filtering            |
| enableColumnFilters     | boolean                     | false         | Bật filter theo từng cột           |
| enableGlobalFilter      | boolean                     | false         | Bật global search                  |
| globalFilterValue       | string                      | ''            | Giá trị của global filter          |
| onGlobalFilterChange    | (value: string) => void     | undefined     | Handler khi global filter thay đổi |
| globalFilterPlaceholder | string                      | 'Tìm kiếm...' | Placeholder cho global filter      |
| filterFns               | Record<string, FilterFn<T>> | undefined     | Custom filter functions            |
| columnFilterDisplayMode | 'popover' \| 'header'       | 'popover'     | Cách hiển thị column filters       |

### Pagination Props

| Prop                 | Type                        | Default          | Description                        |
| -------------------- | --------------------------- | ---------------- | ---------------------------------- |
| enablePagination     | boolean                     | false            | Bật tính năng pagination           |
| pageCount            | number                      | undefined        | Tổng số trang (cho server-side)    |
| pageSize             | number                      | 10               | Số items mỗi trang                 |
| pageIndex            | number                      | 0                | Index của trang hiện tại (0-based) |
| onPageChange         | (page: number) => void      | undefined        | Handler khi chuyển trang           |
| onPageSizeChange     | (size: number) => void      | undefined        | Handler khi đổi page size          |
| pageSizeOptions      | number[]                    | [10, 20, 30, 50] | Các lựa chọn page size             |
| showPageSizeOptions  | boolean                     | true             | Hiển thị page size selector        |
| showFirstLastButtons | boolean                     | true             | Hiển thị nút first/last page       |
| paginationPosition   | 'top' \| 'bottom' \| 'both' | 'bottom'         | Vị trí của pagination controls     |

### Selection Props

| Prop                    | Type                                    | Default    | Description                    |
| ----------------------- | --------------------------------------- | ---------- | ------------------------------ |
| enableRowSelection      | boolean                                 | false      | Bật tính năng chọn rows        |
| enableMultiRowSelection | boolean                                 | true       | Cho phép chọn nhiều rows       |
| selectionType           | 'checkbox' \| 'radio'                   | 'checkbox' | Kiểu component selection       |
| selectionMode           | 'click' \| 'dblclick'                   | 'click'    | Cách trigger selection         |
| selectionColumn         | 'first' \| 'last' \| number             | 'first'    | Vị trí của cột selection       |
| selectedRowIds          | Record<string, boolean>                 | {}         | Controlled selection state     |
| onRowSelectionChange    | (rows: Record<string, boolean>) => void | undefined  | Handler khi selection thay đổi |
| getRowId                | (row: T, index: number) => string       | undefined  | Function lấy row ID            |
| enableSelectAll         | boolean                                 | true       | Hiển thị checkbox select all   |

### Expandable Row Props

| Prop                 | Type                                        | Default   | Description                          |
| -------------------- | ------------------------------------------- | --------- | ------------------------------------ |
| enableExpanding      | boolean                                     | false     | Bật tính năng expandable rows        |
| expandedRowIds       | Record<string, boolean>                     | {}        | Controlled expansion state           |
| onExpandedChange     | (expanded: Record<string, boolean>) => void | undefined | Handler khi expansion thay đổi       |
| renderExpandedRow    | (row: T) => ReactNode                       | undefined | Render function cho expanded content |
| expandColumnPosition | 'first' \| 'last'                           | 'first'   | Vị trí của cột expand                |
| singleExpand         | boolean                                     | false     | Chỉ cho phép expand một row          |

### Column Props

| Prop                     | Type                                     | Default   | Description                        |
| ------------------------ | ---------------------------------------- | --------- | ---------------------------------- |
| enableColumnResizing     | boolean                                  | false     | Cho phép resize các cột            |
| enableColumnOrdering     | boolean                                  | false     | Cho phép reorder các cột           |
| enableHiding             | boolean                                  | false     | Cho phép hide/show các cột         |
| columnVisibility         | Record<string, boolean>                  | {}        | Controlled column visibility state |
| onColumnVisibilityChange | (state: Record<string, boolean>) => void | undefined | Handler khi visibility thay đổi    |
| showColumnToggle         | boolean                                  | false     | Hiển thị UI để toggle columns      |
| defaultWidth             | number                                   | 150       | Default width cho columns          |
| minColumnWidth           | number                                   | 40        | Minimum column width               |
| maxColumnWidth           | number                                   | 1000      | Maximum column width               |

### Virtualization Props

| Prop                 | Type                                     | Default   | Description                   |
| -------------------- | ---------------------------------------- | --------- | ----------------------------- |
| enableVirtualization | boolean                                  | false     | Bật tính năng virtualization  |
| estimatedRowHeight   | number                                   | 40        | Estimated height cho mỗi row  |
| overscan             | number                                   | 3         | Số lượng extra rows để render |
| scrollToIndex        | number                                   | undefined | Row index để scroll đến       |
| onScroll             | (info: { scrollOffset: number }) => void | undefined | Handler khi scroll            |

### Custom Component Props

| Prop               | Type                           | Default   | Description                       |
| ------------------ | ------------------------------ | --------- | --------------------------------- |
| renderToolbar      | (table: Table<T>) => ReactNode | undefined | Render function cho toolbar       |
| renderPagination   | (table: Table<T>) => ReactNode | undefined | Render function cho pagination    |
| renderEmptyState   | () => ReactNode                | undefined | Render function cho empty state   |
| renderLoadingState | () => ReactNode                | undefined | Render function cho loading state |
| renderRowActions   | (row: T) => ReactNode          | undefined | Render function cho row actions   |
| headerComponent    | ComponentType<HeaderProps<T>>  | undefined | Custom header component           |
| rowComponent       | ComponentType<RowProps<T>>     | undefined | Custom row component              |
| cellComponent      | ComponentType<CellProps<T>>    | undefined | Custom cell component             |

## Mô tả giao diện

### Simple Table

Bảng đơn giản với layout grid cơ bản, tập trung vào hiển thị dữ liệu rõ ràng. Header row có background color nhẹ (thường là light gray trong light mode hoặc darker shade trong dark mode) và font-weight semibold/bold để phân biệt với body rows. Cells có padding đều nhau (thường là 12-16px), với text alignment phù hợp (left cho text, right cho numbers). Border options bao gồm borders mỏng giữa các rows và/hoặc columns, hoặc chỉ bottom border cho header row.

Các variants bao gồm striped rows (alternating background colors) để tăng readability, và borderless style cho clean look. Trong light mode, striped rows thường có light gray (#f9fafb) xen kẽ với white, trong khi dark mode có darker shade xen kẽ với base background. Row hover hiển thị subtle highlight (thường là slightly darker shade của background).

### Interactive Table

Xây dựng trên nền Simple Table nhưng thêm visual indicators cho interactive elements. Sortable columns có icon nhỏ (thường là up/down arrows hoặc carets) bên cạnh header text, thay đổi appearance khi active. Interactive elements như filter buttons, action buttons, và pagination controls có hover và active states rõ ràng.

Filterable columns có filter icon và popover/dropdown khi click. Pagination controls ở dưới bảng có clear buttons cho previous/next/first/last pages và current page indicator. Row selection sử dụng checkboxes ở column đầu tiên, với indeterminate state khi partial selection. Selected rows có background highlight rõ ràng hơn normal hover.

### Advanced Table

Giao diện phức tạp và feature-rich hơn. Toolbar phía trên bảng chứa global search, column visibility toggle, filter controls, và batch actions cho selected rows. Column headers có tooltips và context menus cho advanced options. Expandable rows có expand/collapse icon và expanded content có slight indent và subtle background change để phân biệt.

Inline editing cells có visual indicators (thường là dashed border hoặc hover effect) khi editable. Khi active edit mode, cells transform thành form controls (text inputs, selects, etc.) với validation styling. Resizable columns có subtle drag handle ở right edge của headers. Khi drag để resize, visual guide lines hiển thị để assist.

Với nhiều features, attention to spacing và visual hierarchy là critical để tránh overwhelming. Các controls được nhóm logic và có consistent styling. Error và validation states được hiển thị clearly với appropriate colors (đỏ cho errors, xanh lá cho success, vàng cho warnings).

### Data Grid

Biến thể phức tạp nhất, gần giống với Excel/spreadsheet. Các cells có clear borders và grid-like appearance. Header row và first column thường được pinned/sticky khi scroll. Cell selection hiển thị với border highlight, và multiple cell selection có shaded background và border outline.

Editing mode được indicated bằng text cursor và focused styling. Complex cells như dropdowns, datepickers, và custom inputs được rendered inline. Status bar ở bottom hiển thị aggregate information, selection stats, và context information.

Data Grid tập trung vào dense information display nên typography thường nhỏ hơn các variants khác (13-14px), với tighter padding để maximize content space. Keyboard navigation được heavily emphasized với focus indicators và keyboard shortcut hints trong tooltips.

## Lưu ý quan trọng

- **Accessibility**: Đảm bảo đúng ARIA roles, semantic HTML (<table>, <th>, <td>) và keyboard navigation trong table
- **Responsive Design**: Cân nhắc cách tables hoạt động trên mobile - column prioritization, horizontal scroll, hoặc card views
- **Performance**: Chú ý performance với large datasets, sử dụng virtualization và optimized rendering
- **Consistency**: Maintain consistent design language giữa các table variants khác nhau
- **Pagination**: Consider trade-offs giữa pagination, infinite scroll, và virtualization dựa trên use case
- **State Management**: Cẩn thận với complex state trong large tables (sort, filter, pagination, selection)
- **Data Types**: Handle các loại dữ liệu đặc biệt đúng cách (dates, currencies, percentages, long text)
- **Error States**: Hiển thị data loading errors và empty states một cách hữu ích
- **Server-Side Operations**: Design clean integrations với server-side sorting, filtering, và pagination
- **Selection States**: Clear visual feedback cho row selection and batch operations
- **Inline Editing**: Cân nhắc UX cho inline editing, validation, và save/cancel flows
- **Column Flexibility**: Đảm bảo columns resize và reflow appropriately với screen sizes
- **Focus Management**: Proper focus handling khi sorting, filtering, pagination thay đổi table content
- **Print Styling**: Cung cấp print-friendly styles với proper page breaks và repeated headers
- **Fixed Headers**: Khi sử dụng sticky headers, ensure z-index management để tránh overlay issues
- **Progressive Enhancement**: Tables nên degraded gracefully khi certain features không available
- **URL Integration**: Consider syncing table state với URL parameters để support bookmarking và sharing
