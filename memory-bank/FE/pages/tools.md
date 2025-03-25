# Trang Công cụ Đặc biệt (Special Tools)

## Mô tả

Các trang công cụ đặc biệt trong nền tảng NyNus bao gồm các tiện ích và ứng dụng chuyên biệt được thiết kế để hỗ trợ việc quản lý, tạo nội dung và phân tích dữ liệu. Những công cụ này thường được sử dụng bởi quản trị viên, giáo viên và người dùng đặc quyền để thực hiện các tác vụ nâng cao mà giao diện người dùng thông thường không hỗ trợ.

## Đường dẫn

- **ID Map Tool**: `/tools/id-map`
- **Question Entry Tool**: `/tools/question-entry`
- **Exam Generator**: `/tools/exam-generator`
- **Batch Processing**: `/tools/batch-processing`
- **Data Import/Export**: `/tools/data-transfer`
- **Advanced Analytics**: `/tools/advanced-analytics`

## Chức năng chính

- Cung cấp các công cụ chuyên biệt cho quản trị viên và người dùng nâng cao
- Tự động hóa các tác vụ phức tạp và tốn thời gian
- Cho phép xử lý hàng loạt và nhập dữ liệu quy mô lớn
- Hỗ trợ phân tích dữ liệu nâng cao và báo cáo
- Cung cấp giao diện tùy chỉnh cho các tác vụ đặc biệt

## Prompt chi tiết

### ID Map Tool

```
Thiết kế một công cụ ID Map hiệu quả và linh hoạt cho nền tảng NyNus, cho phép người dùng quản lý và điều hướng giữa các hệ thống ID khác nhau trong nền tảng. Giao diện cần trực quan, mạnh mẽ và cho phép xử lý cả thao tác đơn lẻ và hàng loạt.

1. Header & Controls:
   - Tiêu đề "ID Map Tool" với biểu tượng nhận dạng
   - Thông tin vắn tắt về mục đích và cách sử dụng công cụ
   - Thanh tìm kiếm với auto-complete
   - Bộ lọc nâng cao (ẩn/hiện)
   - Nút chuyển chế độ xem (đơn lẻ/hàng loạt)
   - Export/Import controls
   - Nút Help với hướng dẫn chi tiết

2. ID Lookup Panel (Single Mode):
   - Trường nhập ID với format detection
   - Dropdown chọn loại ID nguồn
   - Dropdown chọn loại ID đích
   - Nút tìm kiếm và chuyển đổi
   - Kết quả hiển thị rõ ràng với copy option
   - Danh sách các ID liên quan và bối cảnh
   - Lịch sử tìm kiếm gần đây

3. Batch Operations Panel:
   - Textarea cho nhập multiple IDs
   - CSV/Excel upload option
   - Source và target system selection
   - Mapping preview table
   - Validation indicators
   - Progress bar khi xử lý
   - Error handling và reporting
   - Download results button

4. Mapping Results Display:
   - Bảng hiển thị kết quả ánh xạ
   - Các cột: Source ID, Target ID, Status, Metadata
   - Sorting và filtering capabilities
   - Pagination controls
   - Color-coding cho trạng thái (success, error, warning)
   - Quick action buttons (copy, explore, report issue)

5. Visualization View:
   - Graph visualization cho ID relationships
   - Nodes đại diện cho entities
   - Edges hiển thị relationships và mapping
   - Interactive zoom và pan controls
   - Hover tooltips với entity details
   - Filtering based on relationship types
   - Export graph as image option

6. Favorites & History:
   - Saved mappings section
   - Recent lookups với timestamps
   - Frequently used ID patterns
   - Quick access buttons
   - Clear history option
   - Notes và annotations functionality

7. Advanced Options:
   - Custom mapping rules configuration
   - Regular expression pattern matching
   - Field mapping for complex conversions
   - Chained mapping (multi-step conversions)
   - Metadata inclusion options
   - Audit trail settings

8. Admin Controls (for authorized users):
   - Add new ID system/namespace
   - Update mapping rules
   - View usage statistics
   - Manage permissions
   - Configure caching settings
   - System pairing management

9. Mapping Analytics:
   - Usage trends chart
   - Most frequently mapped systems
   - Error rate metrics
   - Performance statistics
   - User activity summary
   - System health indicators

10. Context Panel:
    - Related entities information
    - Hierarchical relationships
    - Timestamp và provenance data
    - Audit trail for ID
    - Associated metadata
    - Quick links to related systems

Ensure the interface balances efficiency with clarity, supporting both technical và non-technical users. Implement error prevention mechanisms via input validation và format detection. Include comprehensive in-context help, tooltips và examples. Provide keyboard shortcuts for power users. Optimize for both speed và accuracy, with clear feedback on mapping results. Support dark mode switching for extended use sessions. Ensure responsive design for various screen sizes và touch interfaces.
```

### Question Entry Tool

```
Thiết kế một công cụ nhập câu hỏi hiệu quả và mạnh mẽ cho nền tảng NyNus, cho phép nhập câu hỏi nhanh chóng trong khi vẫn đảm bảo chất lượng và tính nhất quán. Giao diện cần hỗ trợ nhập liệu hiệu quả, xử lý hàng loạt, và hỗ trợ nhiều loại câu hỏi.

1. Header & Navigation:
   - Tiêu đề "Question Entry Tool" với batch counter
   - Progress indicator cho batch hiện tại
   - Quick navigation giữa questions trong batch
   - Save status indicator
   - Exit và finalize batch buttons
   - Undo/redo controls
   - Settings và help menu

2. Question Type Selector:
   - Visual grid của question types với icons:
     - Multiple Choice (Single Answer)
     - Multiple Choice (Multiple Answers)
     - True/False
     - Fill in the Blank
     - Short Answer
     - Essay/Long Form
     - Matching
     - Ordering/Sequence
     - Numeric
     - Hotspot/Image-based
   - "Recently Used" section
   - Search box cho question types
   - Question type description on hover

3. Primary Question Authoring:
   - Rich text editor cho question stem
   - Support cho math equations (LaTex)
   - Image/media upload và embedding
   - Code snippet integration với syntax highlighting
   - Formatting tools và templates
   - Character/word count
   - Readability score
   - AI assistance toggle

4. Answer Configuration Panel:
   - Dynamic interface based on question type
   - Add/remove answer options
   - Drag-and-drop reordering
   - Correct answer indication
   - Partial credit configuration
   - Distractors quality indicators
   - Answer explanation fields
   - Answer shuffling options

5. Metadata & Tagging:
   - Subject/topic hierarchical selector
   - Grade level indicators
   - Difficulty slider (with AI suggestion)
   - Bloom's taxonomy classification
   - Skill/competency mapping
   - Time estimate slider
   - Custom tag creation
   - Required vs. optional field indicators

6. Batch Management Controls:
   - List view của all questions in batch
   - Duplicate question function
   - Create similar question option
   - Batch validation summary
   - Import from file (Word, Excel, QTI)
   - Export batch options
   - Publish/schedule options
   - Assign to review workflow

7. Preview & Testing Panel:
   - Student view preview
   - Mobile view toggle
   - Accessibility checker
   - Language/translation preview
   - Test the question functionality
   - Statistics prediction (if AI-enabled)
   - Similar questions comparison

8. AI Assistance Features:
   - Generate alternative question wordings
   - Suggest additional answer options
   - Check for bias và clarity
   - Estimate difficulty level
   - Recommend tags và metadata
   - Generate distractors
   - Identify potential issues
   - Translation assistance

9. Quality Assurance Tools:
   - Spelling và grammar check
   - Terminology consistency check
   - Accessibility compliance indicators
   - Best practices checklist
   - Peer review assignment
   - Comments và feedback panel
   - Version history và diff viewer

10. Bulk Operations:
    - Apply metadata to multiple questions
    - Find và replace across batch
    - Validate multiple questions
    - Generate variations of questions
    - Apply templates to multiple questions
    - Randomization settings
    - Difficulty balancing

11. Integration Panel:
    - Add to question bank
    - Assign to course/module
    - Include in assessment
    - Share with colleague
    - Send for review
    - Publish to marketplace
    - Connect to standards/objectives

12. Analytics & Insights:
    - Personal productivity metrics
    - Quality score trends
    - Subject/topic coverage
    - Authoring time analysis
    - Comparison to benchmarks
    - Team contribution statistics
    - Suggestion for improvement

Ensure the interface prioritizes efficiency while guiding users toward creating high-quality questions. Implement smart default values và templates to speed up entry. Include inline validation to catch common issues early. Support keyboard shortcuts và batch operations for power users. Provide intelligent suggestions based on question history và best practices. Allow customization of workflow và interface based on user preference. Maintain continuous auto-save với version history. Include comprehensive accessibility tools for creating inclusive questions.
```

### Exam Generator

```
Thiết kế một công cụ tạo đề thi thông minh và linh hoạt cho nền tảng NyNus, cho phép người dùng tạo và tùy chỉnh các bài kiểm tra phù hợp với nhu cầu giáo dục cụ thể. Giao diện cần trực quan, mạnh mẽ và hỗ trợ nhiều phương pháp tạo đề thi khác nhau.

1. Header & Configuration:
   - Tiêu đề "Exam Generator" với exam title input
   - Save status indicator và auto-save notification
   - Undo/redo controls
   - Help button với tutorial access
   - Export và print options
   - Settings menu (preferences, defaults)
   - Generation mode toggle (manual, semi-automatic, AI-driven)

2. Exam Properties Panel:
   - Exam title và description fields
   - Time limit configuration
   - Total points allocation
   - Passing score threshold
   - Intended grade level/audience
   - Difficulty target (slider or distribution chart)
   - Instructions for test-takers
   - Header/footer customization
   - Cover page options

3. Content Selection Methods (tabbed interface):
   - Question Bank Browser:
     - Hierarchical subject/topic browser
     - Advanced search với filters
     - Preview questions in-place
     - Drag-and-drop selection
     - List/grid view toggle
     - Saved searches và favorites

   - Blueprint Builder:
     - Specification table (topics x cognitive levels)
     - Drag to adjust question counts per cell
     - Automatic suggestions based on learning objectives
     - Coverage indicators
     - Balance visualization

   - AI-Assisted Generation:
     - Learning objectives input
     - Topic coverage specifications
     - Sample questions for style matching
     - Constraint definition
     - Difficulty distribution curve
     - Question type preferences

   - Quick Assembly:
     - Recent exams to clone from
     - Templates và starting points
     - Pre-defined exam structures
     - Import from file options

4. Exam Structure Builder:
   - Section management (add, remove, reorder)
   - Section properties (title, instructions, timing)
   - Question slot arrangement
   - Drag-and-drop organization
   - Numbering options và formatting
   - Question weight assignment
   - Randomization settings per section
   - Section dependencies và conditional display

5. Question Preview & Edit:
   - Inline question viewing
   - Quick edit capabilities
   - Swap question function
   - Duplicate question
   - Create alternative version
   - Flag for review
   - Preview as student
   - Individual question settings

6. Assessment Analysis Panel:
   - Total questions count và type breakdown
   - Topic coverage visualization
   - Bloom's taxonomy distribution
   - Difficulty distribution chart
   - Time estimation analysis
   - Point allocation summary
   - Balance indicators và warnings
   - Diversity of question types chart

7. Randomization & Security:
   - Question pooling configuration
   - Randomization settings:
     - Question order
     - Answer option order
     - Variable values (for numeric questions)
     - Section order
   - Security level settings
   - Cheating prevention options
   - Proctor requirements
   - Access code generation
   - Time window settings

8. Layout & Formatting:
   - Theme selection
   - Font và styling options
   - Spacing và layout controls
   - Page break preview và control
   - Mobile view optimization
   - Print layout preview
   - Custom header/footer design
   - Logo và branding placement

9. Collaborative Features:
   - Share for review button
   - Contributor management
   - Comment và suggestion tools
   - Track changes options
   - Role-based permissions
   - Notification settings
   - Activity timeline

10. Output & Delivery Options:
    - Publish to course button
    - Schedule for release
    - Distribution methods:
      - Online assessment
      - Printable PDF
      - Interactive app
      - Practice mode
    - Accessibility format generation
    - Multiple language output
    - Answer key và rubric generation

11. Analytics & Projections:
    - Estimated completion time
    - Difficulty prediction
    - Discrimination projection
    - Reliability estimation
    - Score distribution prediction
    - Comparison to previous exams
    - Learning outcome coverage

12. Quality Assurance Tools:
    - Spelling và grammar check
    - Similarity detection
    - Duplicate question warning
    - Balance analysis
    - Fairness check
    - Accessibility compliance
    - Best practices checklist
    - Preview in multiple formats

Ensure the interface supports multiple approaches to exam creation, from highly manual to fully automated. Implement intelligent suggestions that improve with usage. Provide immediate feedback on exam quality và balance. Support team collaboration with appropriate controls và permissions. Include comprehensive preview options that accurately represent student experience. Build in quality assurance tools that help identify potential issues. Allow easy refinement of automatically generated content. Optimize for both first-time và experienced users with progressive disclosure of advanced features.
```

### Batch Processing Tool

```
Thiết kế một công cụ xử lý hàng loạt mạnh mẽ và linh hoạt cho nền tảng NyNus, cho phép người dùng thực hiện các thao tác đồng loạt trên nhiều bản ghi dữ liệu. Giao diện cần rõ ràng, an toàn và hỗ trợ việc xử lý dữ liệu quy mô lớn.

1. Header & Controls:
   - Tiêu đề "Batch Processing Tool" với task type indicator
   - User permission level display
   - New batch button
   - Load saved batch dropdown
   - Clock/timer showing processing time
   - Status indicator (Ready, Running, Complete, Error)
   - Help & documentation access
   - Settings gear icon

2. Task Type Selection:
   - Visual grid of supported batch operations:
     - User Management
     - Content Operations
     - Data Updates
     - Enrollment Processing
     - Status Changes
     - Notification Dispatch
     - Reports Generation
     - System Maintenance
   - Recently used tasks
   - Most popular operations
   - Role-specific recommendations
   - Search tasks functionality

3. Data Source Configuration:
   - Source selection options:
     - File upload (CSV, Excel, JSON)
     - Database query builder
     - API endpoint
     - Previous results
     - Manual entry
   - Preview of source data
   - Field mapping interface
   - Data validation rules
   - Filtering options
   - Sample size selector
   - Character encoding settings
   - Delimiter configuration

4. Operation Configuration:
   - Operation-specific settings panel
   - Required fields với validation
   - Optional parameters với defaults
   - Conditional logic builder
   - Variable substitution options
   - Template selection
   - Preview of changes
   - Impact assessment warnings
   - Dependency checking

5. Validation & Preview:
   - Data validation summary
   - Error và warning count
   - Issue details với inline correction
   - Sample record preview
   - Before/after comparison
   - Estimated completion time
   - Resource usage projection
   - Affected records count
   - Potential conflicts highlight

6. Execution Controls:
   - Scheduling options:
     - Immediate execution
     - Delayed start
     - Recurrence pattern
     - Trigger-based execution
   - Priority level selection
   - Resource allocation
   - Notification preferences
   - Pause/resume capabilities
   - Emergency stop button
   - Dependency on other batches

7. Progress Monitoring:
   - Overall progress bar
   - Step-by-step status indicators
   - Real-time metrics:
     - Records processed
     - Success rate
     - Error count
     - Processing speed
     - Estimated time remaining
   - Auto-refresh toggle
   - Log level selector
   - Live log viewer

8. Results & Reports:
   - Summary statistics dashboard
   - Detailed results table
   - Filtering và sorting options
   - Success/failure breakdown
   - Error categorization
   - Data changes summary
   - Export results functionality
   - Drill-down capabilities
   - Visual charts of outcomes

9. Error Management:
   - Error classification view
   - Bulk error resolution options
   - Retry failed items button
   - Error pattern detection
   - Suggested fixes
   - Manual intervention interface
   - Skip và continue options
   - Error logging configuration

10. History & Audit:
    - Batch operation history
    - Searchable audit log
    - User attribution
    - Timestamp tracking
    - Parameter recording
    - Restoration points
    - Comparative analysis
    - Usage patterns

11. Templates & Saved Operations:
    - Save current configuration
    - Template library
    - Versioning support
    - Share templates với team
    - Import/export templates
    - Template categories
    - Favorite templates
    - Template analytics

12. Integration Panel:
    - Webhook configuration
    - Callback URL settings
    - Notification endpoints
    - External system connections
    - Authentication keys
    - Data mapping for external systems
    - API response handling
    - Error forwarding options

Design the interface to emphasize safety và predictability while enabling powerful bulk operations. Implement progressive disclosure to manage complexity, showing basic options by default và advanced settings on demand. Include comprehensive validation with clear error messages và correction suggestions. Provide robust monitoring và control mechanisms for long-running processes. Ensure audit trails và change tracking for compliance và troubleshooting. Build in safeguards against common batch processing mistakes like duplicate processing. Support for transaction rollback where applicable. Include performance optimizations for handling very large datasets efficiently.
```

### Data Import/Export Tool

```
Thiết kế một công cụ import/export dữ liệu toàn diện và linh hoạt cho nền tảng NyNus, cho phép người dùng chuyển dữ liệu vào và ra khỏi hệ thống một cách an toàn và hiệu quả. Giao diện cần rõ ràng, đáng tin cậy và hỗ trợ nhiều định dạng dữ liệu.

1. Main Navigation & Mode Selection:
   - Toggle giữa Import và Export mode
   - Data type selection panel
   - Recently used configurations
   - Saved templates access
   - Step indicator showing process flow
   - Help & resources button
   - Settings và preferences access

2. Import Source Configuration:
   - Source type selection:
     - File upload (drag-drop enabled)
     - URL/API endpoint
     - Cloud storage integration
     - Database connection
     - Copy-paste area
   - Format selection (CSV, Excel, JSON, XML, SQL, etc.)
   - Advanced options:
     - Character encoding
     - Delimiter settings
     - Quote character
     - Date format
     - Number format
   - Sample data generation option

3. Export Destination Configuration:
   - Destination type selection:
     - File download
     - Email attachment
     - Cloud storage
     - API endpoint
     - Database
   - Format options với settings
   - Compression options
   - Encryption settings
   - Splitting options for large exports
   - Notification preferences
   - Scheduling options

4. Data Preview & Mapping:
   - Source data preview table
   - Target schema visualization
   - Drag-and-drop field mapping
   - Auto-mapping suggestions
   - Required field indicators
   - Data type warnings
   - Transformation preview
   - Sample record view
   - Pagination for large datasets

5. Transformation & Rules Engine:
   - Field-level transformations:
     - Text formatting
     - Date conversion
     - Number formatting
     - Value mapping
     - Concatenation/splitting
   - Conditional logic builder
   - Default value configuration
   - Formula editor
   - Regular expression tools
   - Bulk transformation rules
   - Reusable transformation library

6. Validation Configuration:
   - Data validation rule builder
   - Required fields management
   - Format validation settings
   - Range checks configuration
   - Uniqueness constraints
   - Referential integrity rules
   - Custom validation script editor
   - Error handling options:
     - Fail on error
     - Skip invalid
     - Replace với default
     - Flag for review

7. Advanced Options Panel:
   - Duplicate handling strategy
   - Update vs. insert preferences
   - Batch size configuration
   - Transaction settings
   - Logging detail level
   - Error threshold settings
   - Performance optimization
   - Dependency management
   - Trigger configuration

8. Execution & Monitoring:
   - Start/pause/abort controls
   - Real-time progress indicators:
     - Records processed
     - Success/error counts
     - Processing speed
     - Estimated time remaining
   - Resource usage meters
   - Live log viewer
   - Alert configuration
   - Mobile notification options

9. Results & Summary:
   - Operation statistics dashboard
   - Success/failure breakdown
   - Error categorization
   - Data volume metrics
   - Processing time analysis
   - Detailed record status
   - Error record export
   - Success confirmation options

10. Validation Report:
    - Data quality scorecards
    - Error pattern analysis
    - Field-level validation metrics
    - Data distribution charts
    - Outlier identification
    - Completeness assessment
    - Consistency checking results
    - Recommendation engine

11. Schedule & Automation:
    - One-time vs. recurring setup
    - Calendar-based scheduling
    - Event-triggered execution
    - Dependency chain configuration
    - Notification rules
    - Conditional execution
    - Failure handling strategy
    - Monitoring dashboard

12. Security & Compliance:
    - Permission verification
    - Sensitive data detection
    - Anonymization options
    - Compliance checking
    - Audit trail generation
    - Data lineage tracking
    - Access log viewer
    - Secure storage settings

Design the interface to balance power với accessibility, making complex data operations manageable for users với varying technical expertise. Implement strong error prevention, detection, và recovery mechanisms. Provide clear visualization of the data transformation process. Include templates và wizards for common import/export scenarios. Support for incremental và delta operations in addition to full imports/exports. Ensure robust handling of edge cases like incomplete data và interrupted operations. Provide comprehensive logging và audit capabilities for troubleshooting và compliance. Optimize for performance với large datasets through pagination, streaming, và background processing.
```

### Advanced Analytics Tool

```
Thiết kế một công cụ phân tích nâng cao mạnh mẽ và trực quan cho nền tảng NyNus, cho phép người dùng khám phá dữ liệu sâu, phát hiện các mô hình, và tạo báo cáo phức tạp. Giao diện cần linh hoạt, tương tác và hỗ trợ nhiều phương pháp phân tích khác nhau.

1. Dashboard Home:
   - Welcome panel với recent analyses
   - Quick start templates
   - Analytics workflow suggestions
   - Data source connections
   - Favorited reports và charts
   - Team shared analyses
   - System status indicators
   - Learning resources & tutorials

2. Data Source Management:
   - Source catalog với search & filter
   - Connection status indicators
   - Data preview capabilities
   - Schema browser
   - Refresh controls
   - Scheduling options
   - Credentials management
   - Usage statistics
   - Health metrics

3. Analysis Workspace:
   - Flexible canvas layout
   - Drag-and-drop component placement
   - Resizable visualization panels
   - Multiple layout templates
   - Grid/snap alignment helpers
   - Layer management
   - Theme selection
   - Canvas annotations

4. Data Selection & Transformation:
   - Visual query builder
   - SQL editor với syntax highlighting
   - Data filtering interface
   - Aggregation controls
   - Calculated field creator
   - Transformation pipeline builder
   - Join/merge configuration
   - Time period manipulation
   - Sample size controls

5. Visualization Gallery:
   - Categorized visualization types:
     - Charts (bar, line, pie, area, etc.)
     - Tables và pivots
     - Maps & geospatial
     - Network graphs
     - Heatmaps
     - Scatter plots
     - Tree maps
     - Gauges và single metrics
     - Custom visualizations
   - AI-recommended visualizations
   - Preview & example gallery
   - Favorites và recently used

6. Interactive Analysis Controls:
   - Dynamic filtering controls
   - Drill-down capabilities
   - Cross-filtering between visualizations
   - Parameters & variables
   - Slicers và timelines
   - Conditional formatting
   - Outlier highlighting
   - Trend line configuration
   - Forecast extensions

7. Statistical Analysis Tools:
   - Descriptive statistics generator
   - Correlation analysis
   - Regression modeling
   - Hypothesis testing
   - ANOVA capabilities
   - Time series analysis
   - Cluster analysis
   - Factor analysis
   - Statistical significance indicators

8. Advanced Analytics Features:
   - Predictive modeling interface
   - Machine learning workflow
   - Segmentation analysis
   - Pattern recognition
   - Anomaly detection
   - What-if analysis
   - Sensitivity testing
   - Monte Carlo simulation
   - Natural language querying

9. Reporting & Presentation:
   - Report layout designer
   - Page size và orientation
   - Header & footer customization
   - Print layout preview
   - Export format options
   - Scheduled distribution
   - White labeling
   - Embedded analytics configuration
   - Interactive vs. static options

10. Collaboration Tools:
    - Sharing controls với permissions
    - Comment & annotation system
    - Version history tracking
    - Change notifications
    - Collaborative editing
    - Approval workflow
    - Usage tracking
    - Feedback collection

11. Alert & Monitoring:
    - KPI threshold configuration
    - Alert rule builder
    - Notification channel selection
    - Alert history và management
    - Escalation configuration
    - Schedule & frequency settings
    - Alert testing tools
    - Acknowledgment tracking

12. Performance & Optimization:
    - Query performance metrics
    - Caching configuration
    - Refresh scheduling
    - Resource usage monitoring
    - Query optimization suggestions
    - Materialized view management
    - Load balancing options
    - Mobile optimization settings

Design the interface to support both guided analytics for beginners và advanced capabilities for data experts. Implement progressive disclosure to manage complexity, starting với essentials và revealing more options as needed. Include comprehensive in-app documentation và contextual help. Provide intelligent suggestions for visualizations based on data characteristics. Support both exploratory analysis và production reporting workflows. Ensure visualizations follow best practices for data representation và accessibility. Build in collaboration features for team-based analytics. Include export và sharing options in multiple formats. Optimize performance for large datasets through efficient queries, caching, và progressive loading. Implement responsive design for analytics on various devices.
```

## Giao diện

### ID Map Tool

Giao diện sử dụng hai-panel layout với source và target systems hiển thị song song. Main header toolbar chứa global controls và search. Primary content area chia thành lookup panel (left) và results panel (right) trên desktop, stacking vertically trên mobile. Navigation tabs nằm ở top of content area để chuyển đổi giữa Single Mode, Batch Mode và Visualization. Results hiển thị trong structured table với fixed header và scrollable body. Batch mode sử dụng spreadsheet-like interface với inline validation indicators. Visualization mode sử dụng interactive force-directed graph với zoom/pan controls. Color scheme sử dụng neutral background với color-coding cho status và relationship types.

### Question Entry Tool

Giao diện sử dụng split-screen layout với question editor ở main panel và preview/properties panel ở right sidebar (collapsible). Top navigation bar chứa batch controls và global actions. Question editor sử dụng rich text interface với toolbar và WYSIWYG editing. Answer configuration panel dynamically updates based on selected question type. Metadata panel hiển thị dạng collapsible card sections với form controls phù hợp với mỗi metadata type. Batch operations accessible thông qua dedicated tab với grid view của all questions trong batch. Mobile view focuses on one panel at a time với swipe navigation. Color scheme sử dụng light neutral background với accent colors cho highlighting active elements và status indicators. Interactive elements có obvious hover states và feedback.

### Exam Generator

Giao diện sử dụng three-column layout gồm: content sources (left), exam structure builder (center), và properties/preview panel (right). Panels có thể resize và collapse để focus vào task hiện tại. Header bar chứa global actions và exam metadata. Content source panel sử dụng tabbed interface để switch giữa different selection methods với search và filters ở top. Exam structure hiển thị visual representation của sections và questions với drag-drop reordering. Question slots hiển thị preview của actual content với hover actions. Properties panel sử dụng accordion-style sections cho different setting groups. Footer area hiển thị analytics và balance indicators. Mobile view simplifies to sequential workflow với focused screen cho mỗi major step. Color coding sử dụng để differentiate sections, question types và status indicators.

### Batch Processing Tool

Giao diện sử dụng wizard-style progression với clear step indicators ở top. Main workspace adapts to current step, showing appropriate controls và content. Configuration sections sử dụng card-based layout với expand/collapse capability. Data preview hiển thị trong paginated table với column headers và type indicators. Validation results highlight issues inline với color-coding (red for errors, yellow for warnings). Progress monitoring sử dụng prominent progress bars với detailed metrics below. Results display sử dụng combination của summary cards và detailed data table với filtering. Log viewer sử dụng monospaced font với syntax highlighting và log level filters. Color scheme emphasizes neutral backgrounds với status-based highlighting, ensuring critical controls và information stand out clearly. Mobile view focuses on essential controls với simplified data views.

### Data Import/Export Tool

Giao diện organized around step-based workflow với persistent navigation allowing forward/backward movement. Left sidebar shows process steps với completion status. Main content area adapts to current step with appropriate controls. Data mapping screen sử dụng two-panel interface showing source (left) và target (right) với connection lines between mapped fields. Field mapping uses drag-drop interactions với visual cues for compatibility. Validation configuration uses rule builder với condition blocks that can be stacked và grouped. Execution screen focuses on progress metrics với detailed logs accessible via expanding panel. Results screen features summary cards ở top với detailed table below. Color scheme uses neutral base với semantic colors for status indicators (success, warning, error). Interactive elements have clear states và provide immediate feedback. Mobile optimized views focus on one step at a time với simplified controls.

### Advanced Analytics Tool

Giao diện sử dụng responsive grid layout cho dashboard components với drag-drop positioning và resizing. Main workspace features canvas-like area where visualizations can be arranged freely. Left sidebar contains data source browser và visualization gallery. Top toolbar houses global actions, sharing controls và settings. Each visualization has its own header bar với local controls (export, filter, expand). Data selection interface uses intuitive visual query builder với option to switch to SQL for advanced users. Visualization configuration panels slide in from side when editing a chart, preserving context. Dashboard supports both light và dark themes với high-contrast options for data visualizations. Interactive elements provide immediate feedback và update connected visualizations through cross-filtering. Mobile experience optimizes individual visualizations cho smaller screens với navigation to switch between dashboard components.

## Lưu ý

- **Access Control**: Các công cụ này thường có quyền truy cập rộng vào dữ liệu và hệ thống - cần phân quyền nghiêm ngặt
- **User Training**: Cung cấp tài liệu hướng dẫn và tour có tính tương tác để giúp người dùng làm quen với các công cụ phức tạp này
- **Error Prevention**: Triển khai cơ chế xác nhận và preview để ngăn ngừa các thao tác nguy hiểm hoặc không mong muốn
- **Audit Trail**: Duy trì nhật ký chi tiết về tất cả các hoạt động trong các công cụ này để hỗ trợ khắc phục sự cố và tuân thủ
- **Performance**: Tối ưu hóa cho việc xử lý dữ liệu lớn và thao tác phức tạp, sử dụng xử lý bất đồng bộ khi cần thiết
- **Backup & Recovery**: Cung cấp điểm khôi phục và lịch sử phiên bản để phục hồi sau lỗi
- **Integration**: Đảm bảo các công cụ này tích hợp chặt chẽ với phần còn lại của nền tảng thông qua API và webhooks tiêu chuẩn
- **Extensibility**: Thiết kế các công cụ để hỗ trợ mở rộng qua plugin hoặc custom scripts
- **Consistency**: Duy trì mẫu UI nhất quán giữa các công cụ để giảm thời gian học
