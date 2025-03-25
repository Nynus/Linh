# Trang Quản trị (Admin)

## Mô tả

Trang quản trị cung cấp giao diện quản lý toàn diện cho người quản trị nền tảng NyNus. Hệ thống bao gồm các công cụ để quản lý người dùng, nội dung, phân tích dữ liệu, cấu hình nền tảng và điều chỉnh hệ thống. Giao diện được thiết kế để hiệu quả, an toàn và dễ sử dụng cho nhóm quản trị.

## Đường dẫn

- **Dashboard**: `/admin`
- **Quản lý người dùng**: `/admin/users`
- **Quản lý khóa học**: `/admin/courses`
- **Quản lý câu hỏi & bài thi**: `/admin/questions`
- **Quản lý diễn đàn**: `/admin/forum`
- **Phân tích và báo cáo**: `/admin/analytics`
- **Cấu hình hệ thống**: `/admin/settings`

## Chức năng chính

- Hiển thị tổng quan về hoạt động hệ thống và KPIs
- Quản lý người dùng: tạo, chỉnh sửa, phân quyền và vô hiệu hóa tài khoản
- Quản lý khóa học: tạo, phê duyệt và theo dõi hiệu suất
- Quản lý nội dung: kiểm duyệt, biên tập và phân loại
- Theo dõi và phân tích dữ liệu sử dụng nền tảng
- Cấu hình hệ thống: thiết lập tham số, tùy chỉnh giao diện
- Quản lý API keys và tích hợp bên thứ ba

## Prompt chi tiết

### Trang Dashboard

```
Thiết kế một trang dashboard hành chính hiện đại, toàn diện và dễ sử dụng cho nền tảng học tập NyNus. Dashboard phải cung cấp cái nhìn tổng quan chi tiết về sức khỏe của nền tảng, hiệu suất chính, và các cảnh báo yêu cầu sự chú ý của admin.

1. Header Section:
   - Logo và tên nền tảng
   - Admin profile dropdown menu
   - Notification bell với counter
   - Quick search hệ thống
   - Timestamp với timezone indicator
   - System health indicator (green/yellow/red)

2. Key Metrics Overview:
   - Row of KPI cards với số liệu lớn và sparkline trends:
     - Total active users (daily/weekly/monthly toggles)
     - New registrations (với % change)
     - Course enrollments
     - Completion rates
     - Revenue metrics (nếu applicable)
     - System uptime
   - Mỗi card có drill-down option
   - Visual indicators cho positive/negative trends

3. Real-time Activity Feed:
   - Live updates của user actions
   - New registrations
   - Course completions
   - Significant forum activities
   - Failed login attempts
   - Auto-refresh với pausable controls

4. Alert & Issues Panel:
   - High-priority items requiring attention
   - Flagged content awaiting moderation
   - User reports và complaints
   - System warnings (storage, performance, security)
   - Maintenance schedules và notifications

5. User Growth & Engagement:
   - Multi-line/area chart showing growth trends
   - Segmentation by user types
   - Retention curves
   - Daily active users (DAU) và monthly active users (MAU)
   - Engagement depth metrics

6. Content Performance:
   - Top courses by enrollment
   - Highest rated content
   - Lowest performing areas
   - Content completion funnels
   - Recently added content

7. Quick Actions Panel:
   - Frequently used admin tools
   - Create new user/course buttons
   - Run reports shortcut
   - System backup trigger
   - Cache clearing utilities
   - Send announcement option

8. System Health Monitors:
   - Server status indicators
   - Database performance metrics
   - API response times
   - Storage utilization
   - Background job statuses
   - Error rate monitoring

9. Calendar & Scheduled Events:
   - Upcoming maintenance windows
   - Scheduled content releases
   - Marketing campaigns
   - Important deadlines
   - Team meetings

10. User Feedback Summary:
    - Recent ratings distribution
    - Sentiment analysis trends
    - Feature requests leaderboard
    - Common support issues
    - Testimonial highlights

11. Revenue & Financial Metrics (if applicable):
    - Revenue charts (daily/weekly/monthly/yearly)
    - Subscription metrics
    - Conversion funnels
    - Payment processing status
    - Refund rates

12. Admin Activity Log:
    - Recent admin actions với user và timestamp
    - Changes to critical settings
    - Content approvals/rejections
    - Permission changes
    - Filter và search capabilities

The dashboard should support customization options allowing admins to rearrange panels, save layouts, và pin frequently monitored metrics. Implement responsive design maintaining usability across device sizes. Use appropriate data visualizations (charts, heatmaps, gauges) based on data types. Include export capabilities for reports và metrics. Ensure real-time or near-real-time data refresh where appropriate. Optimize loading với progressive rendering của panels và smart caching.
```

### Trang Quản lý Người dùng

```
Thiết kế một trang quản lý người dùng toàn diện và hiệu quả cho nền tảng NyNus. Trang cần cung cấp công cụ để admin quản lý tài khoản người dùng, vai trò, phân quyền và hoạt động một cách trực quan và an toàn.

1. Header & Controls:
   - Title "User Management" với user count
   - Search bar với advanced filters (expandable)
   - Add New User button
   - Bulk Actions dropdown
   - View toggle (Table/Card/Detail views)
   - Export data buttons (CSV, Excel, PDF)
   - Column visibility controller

2. Advanced Search & Filters:
   - User type/role filter (Student, Teacher, Admin, etc.)
   - Status filters (Active, Inactive, Pending, Suspended)
   - Registration date range picker
   - Activity recency filter
   - Location/geography filters
   - Course enrollment filters
   - Custom attribute filters
   - Saved filter sets

3. User Table/List:
   - Checkbox selection column
   - User avatar and name (clickable for details)
   - Email và contact info
   - Role/permission level với badge
   - Account status indicator
   - Registration date
   - Last login timestamp
   - Total courses enrolled/completed
   - Activity score/engagement metric
   - Quick action buttons (edit, disable, impersonate)
   - Expandable rows for quick preview

4. Detailed User Profile Panel (slide-in):
   - Complete user information với tabs:
     - Personal Info (contact details, bio, etc.)
     - Activity Log (recent actions và logins)
     - Course Enrollments và progress
     - Payment History (if applicable)
     - Communication History
     - Notes và Internal Comments
   - Edit User button
   - Change Password option
   - Permission override controls
   - Account action buttons (suspend, delete, etc.)

5. Bulk Operations Panel:
   - Selection counter và summary
   - Available actions based on selected users:
     - Change role/permissions
     - Export selected users
     - Send email/notification
     - Enable/disable accounts
     - Enroll in courses
     - Add to groups
   - Confirmation step for sensitive actions

6. User Creation/Edit Form:
   - Multi-step form với progress indicator
   - Required và optional field indicators
   - Dynamic fields based on selected user type
   - Password policy enforcement
   - Role và permission selection matrix
   - Custom field configuration
   - Course pre-enrollment options
   - Group assignment
   - Save as draft option

7. User Analytics Summary:
   - User growth chart
   - Activation và engagement funnels
   - Role distribution pie chart
   - Retention metrics
   - User health score distribution
   - Geographic distribution map

8. User Groups Management:
   - Create và manage user groups
   - Assign users to multiple groups
   - Batch permission management
   - Group-based reporting

9. Role & Permission Management:
   - Define custom roles
   - Granular permission matrix
   - Permission inheritance và overrides
   - Role-based access review
   - Permission change audit log

10. Import/Export Utilities:
    - Template downloads
    - CSV/Excel import wizard
    - Field mapping interface
    - Validation rules configuration
    - Import preview và error correction
    - Scheduled import/export jobs

11. User Communication Tools:
    - Template-based messaging
    - Targeted announcements
    - Welcome và onboarding sequences
    - Notification preference management
    - Communication history logs

12. Compliance & Security:
    - GDPR và data privacy tools
    - Data retention controls
    - Account lockout management
    - Security log review
    - Two-factor authentication enforcement
    - IP restriction configuration

Ensure the interface supports both everyday user management tasks và less common advanced operations through progressive disclosure. Implement proper validation for all user data operations. Use clear visual cues for destructive actions. Include comprehensive audit logging for all admin actions on user accounts. Optimize for both efficient bulk operations và detailed individual user management.
```

### Trang Quản lý Khóa học

```
Thiết kế một trang quản lý khóa học mạnh mẽ và linh hoạt, cho phép admin tạo, theo dõi và tối ưu hóa mọi khía cạnh của khóa học trên nền tảng NyNus. Giao diện cần hỗ trợ các cấp độ phức tạp khác nhau của quản lý nội dung giáo dục.

1. Header & Primary Controls:
   - Title "Course Management" với course count
   - Global search courses với filters
   - Create New Course button
   - Bulk actions dropdown
   - View options (Grid/List/Table/Tree)
   - Filter và sort controls
   - Import/Export buttons

2. Course Overview Dashboard:
   - Status summary cards:
     - Active courses
     - Draft courses
     - Published recently
     - Needs review
     - Top performing
     - Low engagement
   - Quick filters by subject, level, format
   - Recently edited courses
   - Scheduled publications timeline

3. Course Listing:
   - Multi-select checkboxes
   - Course thumbnail và title
   - Subject/category indicators
   - Status badges (Draft, Published, Archived)
   - Creator/owner information
   - Publication date
   - Student count và completion rate
   - Average rating với star display
   - Last updated timestamp
   - Quick action buttons:
     - Edit
     - Preview
     - Duplicate
     - Archive
     - View analytics

4. Course Creation Wizard:
   - Step-by-step process với progress indicator
   - Templates và starting points
   - Basic info collection (title, description, category)
   - Structure builder (modules, lessons, assessments)
   - Content upload/integration options
   - Settings configuration
   - Review và publishing controls
   - Save as draft at any point

5. Bulk Operations Center:
   - Selection summary và context
   - Operations based on selected courses:
     - Change status/visibility
     - Update categories/tags
     - Assign to instructors
     - Adjust pricing (if applicable)
     - Enable/disable features
     - Schedule changes
   - Batch validation results
   - Confirmation workflow for major changes

6. Course Analytics Panel:
   - Performance metrics dashboard
   - Enrollment trends
   - Completion funnels
   - Time spent analysis
   - Assessment results distribution
   - Student feedback summary
   - Comparison to platform averages
   - Problem areas identification

7. Quality Control Tools:
   - Content review checklist
   - Accessibility compliance scanner
   - Broken link detector
   - Media quality assessment
   - Assessment difficulty analysis
   - Plagiarism checking
   - Peer review assignment

8. Curriculum Management:
   - Cross-course curriculum planning
   - Prerequisite mapping và visualization
   - Learning path creation
   - Course sequencing tools
   - Skill và competency mapping
   - Certification track management

9. Instructor Management:
   - Assign/remove course instructors
   - Instructor performance metrics
   - Permission và access controls
   - Communication tools
   - Training và support resources

10. Content Library Integration:
    - Media asset management
    - Shared resource repository
    - Reusable component library
    - Version control for shared content
    - Usage tracking across courses

11. Settings & Configuration:
    - Global course settings
    - Default templates
    - Auto-save preferences
    - Review workflow configuration
    - Notification settings
    - Integration options with external tools

12. Automation Tools:
    - Scheduled publishing/updates
    - Automated quality checks
    - Renewal reminders
    - Content refresh recommendations
    - Regular report generation
    - Maintenance task scheduling

Ensure the interface balances power và usability, với critical everyday tasks easily accessible và specialized functions available through progressive disclosure. Include comprehensive previewing capabilities to see content exactly as students will. Implement version history và change tracking for all course content. Provide contextual help và best practice guidance throughout the interface. Support both individual course management và curriculum-wide operations.
```

### Trang Phân tích và Báo cáo

```
Thiết kế một trang phân tích và báo cáo toàn diện cho nền tảng học tập NyNus, cung cấp cho admin các công cụ để hiểu rõ hiệu suất, phát hiện xu hướng, và đưa ra quyết định dựa trên dữ liệu. Giao diện cần linh hoạt, trực quan và hỗ trợ các cấp độ phân tích từ tổng quan đến chi tiết.

1. Analytics Dashboard Overview:
   - Metrics summary cards với period-over-period comparisons
   - Key performance indicators với status indicators
   - Primary metric visualizations
   - Date range selector (với presets và custom ranges)
   - Segmentation controls
   - View preferences và bookmark functionality

2. Report Builder Interface:
   - Drag-and-drop report creation
   - Metric và dimension selection panels
   - Visualization type chooser:
     - Line/area charts
     - Bar/column charts
     - Pie/donut charts
     - Tables và pivots
     - Heatmaps
     - Geo maps
     - Funnel charts
     - Custom visualizations
   - Filter builder với complex logic
   - Calculation editor for custom metrics
   - Report preview pane

3. Preset Reports Library:
   - Categorized report templates
   - Recently used reports
   - Favorited/pinned reports
   - Team shared reports
   - One-click report generation
   - Suggested reports based on role

4. User Analytics Section:
   - Acquisition metrics và channels
   - Retention và churn analysis
   - Engagement depth visualization
   - User journey mapping
   - Cohort analysis tools
   - User segmentation
   - Behavior flow charts

5. Content Performance Analytics:
   - Course engagement metrics
   - Content effectiveness scores
   - Assessment results analysis
   - Difficulty curves
   - Time-to-completion trends
   - Drop-off point identification
   - Content quality indicators

6. Learning Outcome Analytics:
   - Mastery tracking dashboards
   - Skill acquisition rates
   - Assessment performance trends
   - Success predictors
   - Intervention opportunity identification
   - Long-term retention metrics

7. Financial Analytics (if applicable):
   - Revenue dashboards
   - Subscription metrics
   - Conversion rate analysis
   - Customer lifetime value
   - Payment processing monitoring
   - Refund tracking
   - Revenue forecasting

8. Operational Analytics:
   - System performance metrics
   - Resource utilization
   - Response time tracking
   - Error rate monitoring
   - Peak usage patterns
   - Capacity planning tools

9. Export & Scheduling Options:
   - Export formats (PDF, Excel, CSV, Google Sheets)
   - White-labeled report generation
   - Scheduled report delivery
   - Email report configuration
   - API access to report data
   - Embed & share options

10. Advanced Analytics Features:
    - Predictive analytics models
    - Anomaly detection
    - Correlation discovery
    - A/B test results analysis
    - Statistical significance calculators
    - Regression analysis tools
    - Machine learning insights

11. Data Management Controls:
    - Data freshness indicators
    - Sampling controls và information
    - Data source selection
    - Caching configuration
    - Custom dimension management
    - Event definition manager

12. Personalization & Collaboration:
    - Dashboard customization
    - Saved views và segments
    - Annotation và comments
    - Share & collaborate features
    - Alert configuration
    - Threshold notifications

Ensure the interface balances power với approachability, supporting both data analysts và non-technical administrators. Implement progressive loading of data visualizations to maintain performance. Provide clear documentation và contextual help for metrics và dimensions. Include data exploration paths that encourage discovery. Support both high-level strategic analysis và detailed tactical investigation. Ensure all visualizations have appropriate legends, labels, và context.
```

### Trang Cấu hình Hệ thống

```
Thiết kế một trang cấu hình hệ thống trực quan và có tổ chức cho nền tảng NyNus, cho phép admin điều chỉnh, tùy chỉnh và duy trì các khía cạnh kỹ thuật của nền tảng. Giao diện cần rõ ràng, có cấu trúc, và bao gồm các biện pháp bảo vệ để ngăn ngừa các thay đổi có thể gây ra sự cố.

1. Settings Dashboard Overview:
   - System status summary
   - Environment information (Production/Staging/Development)
   - Last configuration changes log
   - Critical settings alerts
   - Quick access to common settings
   - System health indicators
   - Configuration search

2. Navigation & Organization:
   - Categorized settings sidebar:
     - General
     - Users & Authentication
     - Courses & Content
     - Email & Notifications
     - Integrations & API
     - Security & Privacy
     - Performance & Optimization
     - Customization & Branding
     - Advanced Settings
   - Recently accessed settings
   - Favorites/pinned settings

3. General Platform Settings:
   - Site name, description, và contact info
   - Default language và locale settings
   - Time zone configuration
   - Date và time format preferences
   - Homepage và landing page options
   - Default user preferences
   - System-wide announcements

4. User & Authentication Settings:
   - Registration options và workflow
   - Password policy configuration
   - Multi-factor authentication settings
   - Session management (timeouts, concurrency)
   - Single sign-on configuration
   - Social login integration
   - User field customization
   - Role và permission management

5. Email & Notification System:
   - Email provider configuration
   - Template editor với variables
   - Notification types và channels
   - Delivery schedule settings
   - Batch processing options
   - Email testing tools
   - Deliverability monitoring
   - Notification preferences management

6. Integration & API Management:
   - API key generation và management
   - Webhook configuration
   - Third-party service connections
   - Authentication for external services
   - Data synchronization settings
   - Integration health monitoring
   - Rate limiting configuration
   - API documentation access

7. Security & Privacy Configuration:
   - GDPR và compliance settings
   - Data retention policies
   - Privacy policy management
   - Content security policy
   - IP blocking và allow lists
   - Security header configuration
   - Audit logging settings
   - Vulnerability scanning options

8. Performance & Caching:
   - Cache management controls
   - Content delivery network settings
   - Storage optimization
   - Database maintenance options
   - Background task configuration
   - Rate limiting và throttling
   - Resource allocation
   - Performance monitoring thresholds

9. Customization & Branding:
   - Theme selection và configuration
   - Custom CSS/JavaScript injection
   - Logo và favicon upload
   - Color scheme customization
   - Typography settings
   - Layout options
   - White labeling capabilities
   - Custom domain configuration

10. Backup & Maintenance:
    - Automated backup settings
    - Backup retention policy
    - Manual backup triggers
    - Restore options
    - Maintenance mode configuration
    - Update và patch management
    - Database optimization tools
    - System cleanup utilities

11. Configuration Management:
    - Export/import configuration
    - Configuration versioning
    - Rollback capabilities
    - Configuration diff viewer
    - Environment-specific settings
    - Configuration templates
    - Scheduled configuration changes

12. Advanced Settings Controls:
    - Feature flags và toggles
    - Experimental features
    - Developer options
    - System constants
    - Custom code injection
    - Server-side scripting
    - Database query interface
    - Log level configuration

Implement a consistent settings form layout with clear section headings, descriptive help text, và tooltips. Use appropriate input controls based on setting types. Include validation với immediate feedback. Provide confirmation flows for critical settings changes with potential impact descriptions. Create visual differentiation for environment-specific settings. Include search functionality with settings descriptions. Maintain a comprehensive change log of all configuration changes with admin attribution.
```

### Trang Quản lý Báo cáo & Hỗ trợ

```
Thiết kế một trang quản lý báo cáo và hỗ trợ người dùng toàn diện cho nền tảng NyNus, cho phép admin theo dõi, phản hồi và giải quyết các vấn đề do người dùng báo cáo và yêu cầu hỗ trợ. Giao diện cần hiệu quả, có tổ chức rõ ràng và hỗ trợ quy trình làm việc nhanh chóng.

1. Support Dashboard Overview:
   - Ticket summary widgets:
     - Open tickets count với severity breakdown
     - Unassigned tickets
     - Overdue tickets
     - Recently resolved
     - Satisfaction ratings
   - Incoming ticket trend chart
   - Response time và resolution time metrics
   - Team performance indicators
   - Knowledge base usage stats

2. Ticket Management Interface:
   - Filterable và searchable ticket list
   - Customizable columns view
   - Bulk action controls
   - Priority indicators (color-coded)
   - SLA compliance indicators
   - Quick preview pane
   - Ticket assignment controls
   - Status update dropdown

3. Ticket Detail View:
   - Complete ticket information header:
     - Ticket ID và reference number
     - Creation timestamp
     - User information với quick profile access
     - Category và subcategory
     - Status và priority
     - Assigned agent
   - Conversation timeline/thread
   - Internal notes section (staff-only)
   - Attached files và screenshots
   - Related tickets linkage
   - User system information
   - Ticket history và audit trail

4. Response Tools:
   - Rich text editor for responses
   - Canned response library với search
   - Template variable insertion
   - Knowledge base article suggestion
   - Draft saving
   - Response preview
   - Schedule send option
   - Follow-up reminder setting

5. User Reporting System:
   - Content flagging management
   - Abuse report processing
   - User conflict resolution
   - Community guideline enforcement
   - Moderation action tracking
   - Appeal management interface
   - Repeat offender identification

6. Knowledge Base Management:
   - Article creation và editing
   - Category và tag organization
   - Version control và publishing workflow
   - Usage analytics per article
   - Search term analysis
   - Gap identification
   - Feedback collection
   - Translation management

7. Automated Support Configuration:
   - Chatbot response customization
   - Auto-reply rules creation
   - Ticket routing rules
   - Escalation criteria configuration
   - SLA definition và management
   - Automated tagging rules
   - Trigger và automation setup

8. Team Management:
   - Agent workload dashboard
   - Shift scheduling interface
   - Skill và expertise mapping
   - Performance metrics
   - Quality assurance reviews
   - Training material access
   - Internal communication tools

9. Reporting & Analytics:
   - Ticket volume analysis
   - Category distribution
   - Resolution time tracking
   - Satisfaction score trends
   - Agent performance comparison
   - Peak time identification
   - Knowledge base effectiveness
   - Self-service success rate

10. Issue Tracking & Bug Management:
    - Bug report classification
    - Reproduction steps documentation
    - Severity assessment tools
    - Development team handoff
    - Status tracking pipeline
    - Fix verification process
    - User notification workflow
    - Regression testing checklist

11. Customer Satisfaction Tools:
    - Survey creation và customization
    - Response collection và analysis
    - Feedback categorization
    - Sentiment analysis dashboard
    - Improvement suggestion tracking
    - Recognition program for agents
    - Customer effort score monitoring

12. Integration & Workflow:
    - Integration với development ticketing
    - CRM system connection
    - Communication channel consolidation
    - Notification configuration
    - Data export capabilities
    - API access for custom reporting
    - Mobile support app management

Design the interface with efficiency as a priority, allowing support staff to quickly assess, respond to, và manage high volumes of tickets. Implement keyboard shortcuts for common actions. Create clear visual distinction between internal và external communications. Include comprehensive filtering và batch processing for scale. Provide contextual access to user history và previous interactions. Support both technical issues và general support workflows. Create escalation paths for critical issues requiring immediate attention.
```

## Giao diện

### Trang Dashboard

Giao diện sử dụng modular card-based layout để hiển thị các thông tin KPIs và metrics, với các widget có thể được sắp xếp lại (drag-and-drop). Các card metrics sử dụng large typography cho số liệu chính, với sparkline/miniature charts hiển thị xu hướng. Color scheme tập trung vào neutral colors với các accent colors chỉ dùng cho highlighting và status indicators. Fixed sidebar navigation ở trái với collapsible option cho không gian làm việc rộng hơn trên desktop, chuyển thành top navbar trên mobile. Dark mode được tối ưu để giảm eye strain trong sử dụng kéo dài.

### Trang Quản lý Người dùng

Layout sử dụng dạng table-centric với sort, filter, và search controls ở top. Table rows có hover states và selection checkboxes, với quick actions accessible thông qua hover icon buttons hoặc kebab menu. Sidebar slide-out panel cho user details và editing. Pagination controls nằm ở bottom với options cho items per page. Bulk action bar xuất hiện khi có multiple selections, floating ở bottom của viewport. Form elements sử dụng consistent styling với inline validation và error messages. Responsive behavior chuyển sang card view trên tablet và stacked view trên mobile.

### Trang Quản lý Khóa học

Giao diện chia thành hai view chính: grid view cho visual course browsing và table view cho detailed management. Course cards trong grid view có thumbnail, title, key stats và hover overlay với quick actions. Sidebar filters có thể collapse để tối đa hóa không gian display. Course editing interface sử dụng tabbed navigation với auto-save. Analytics view cho mỗi khóa học sử dụng multiple visualizations với export options. Bulk operation controls xuất hiện contextually khi courses được selected. Course creation wizard sử dụng multi-step process với progress indicator và persistent navigation.

### Trang Phân tích và Báo cáo

Layout sử dụng flexible grid để arrange multiple visualizations với resize handles. Visualizations sử dụng muted color palette với high contrast cho key data points. Controls cho date ranges và filtering nằm ở top, persistent khi scroll. Data tables có sticky headers và compact design. Dashboard có capability to drill down từ high-level metrics vào detailed data. Graphs và charts có interactive tooltips và click-through functionality để explore data deeper. Custom report builder sử dụng drag-and-drop interface với instant preview. Export controls nằm ở top-right mỗi visualization hoặc report.

### Trang Cấu hình Hệ thống

Giao diện chia các settings thành logical groups với sidebar navigation. Each setting group sử dụng card-based layout với clear section headings. Critical settings được highlight với subtle warning colors. Toggle switches sử dụng cho boolean settings, dropdown menus cho multiple choice options, và appropriately sized text inputs/textareas cho string/text settings. Form sections có collapse/expand capability để focus vào relevant settings. Changes được highlighted và require explicit save action. Confirmation dialogs cho critical changes với potential impact clearly explained. Search functionality có thể filter settings across all categories.

### Trang Quản lý Báo cáo & Hỗ trợ

Layout sử dụng three-column design cho ticket management: ticket list ở trái, selected ticket detail ở giữa, và context/tools panel ở phải. Ticket list sử dụng compact design với status indicators và priority color-coding. Conversation view trong ticket detail hiển thị dạng chat-like thread với clear visual distinction giữa user và staff messages. Quick response tools và canned responses accessible through right panel. Knowledge base editor sử dụng rich text interface với live preview. Dashboard view hiển thị key metrics với time-based filtering. Mobile view prioritizes ticket detail view với easy navigation back to list.

## Lưu ý

- **Security**: Implement strict role-based access control cho tất cả admin functions
- **Audit Trail**: Maintain detailed logs của tất cả admin actions với user attribution
- **Performance**: Tối ưu loading và rendering cho large datasets trong admin views
- **Progressive Loading**: Sử dụng skeleton loaders và progressive disclosure cho complex data
- **Bulk Operations**: Ensure confirmation flows và validation cho mass actions trên user/content data
- **Consistency**: Maintain consistent layout, controls và patterns xuyên suốt admin interface
- **Contextual Help**: Provide inline documentation và tooltips cho complex functions
- **Error Handling**: Clear error messages và recovery paths cho failed operations
- **Mobile Admin**: Optimize critical admin functions cho mobile emergency access
- **Testing Environment**: Provide sandbox/staging để test configuration changes trước khi áp dụng vào production
