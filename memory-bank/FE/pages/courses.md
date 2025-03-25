# Trang Khóa Học

## Mô tả

Trang khóa học là hạt nhân của nền tảng NyNus, cho phép người dùng duyệt, tìm kiếm, và tương tác với các khóa học. Bao gồm trang danh sách khóa học, trang chi tiết khóa học, và trang học tập (learning page). Người dùng có thể xem thông tin chi tiết, đánh giá, và tiến độ học tập của mình.

## Đường dẫn

- **Danh sách khóa học**: `/courses`
- **Chi tiết khóa học**: `/courses/[course-id]`
- **Trang học tập**: `/courses/[course-id]/learn`
- **Tạo/chỉnh sửa khóa học** (admin): `/admin/courses/[course-id]`

## Chức năng chính

- Hiển thị danh sách khóa học với bộ lọc và tìm kiếm nâng cao
- Hiển thị thông tin chi tiết về khóa học (nội dung, giảng viên, đánh giá)
- Cho phép người dùng đăng ký và theo dõi tiến độ học tập
- Tích hợp công cụ học tập với hỗ trợ AI
- Quản lý và chỉnh sửa khóa học (dành cho admin)

## Prompt chi tiết

### Trang Danh sách Khóa học

```
Thiết kế một trang danh sách khóa học hiện đại, responsive và tương thích với cả light và dark mode. Trang này phải dễ dàng lọc và tìm kiếm khóa học phù hợp với nhu cầu người dùng.

1. Header:
   - Thanh tìm kiếm nổi bật ở trên cùng với icon magnifying glass
   - Text placeholder: "Tìm kiếm khóa học, chủ đề..."
   - Voice search option với microphone icon
   - Filters toggles cho: Cấp độ, Chủ đề, Thời lượng, Đánh giá

2. Filter Side Panel (collapsible trên mobile):
   - Category selection với checkboxes:
     - Toán đại số
     - Hình học
     - Giải tích
     - Xác suất & Thống kê
     - STEM
   - Difficulty filters:
     - Cơ bản
     - Trung bình
     - Nâng cao
     - Chuyên sâu
   - Duration filters:
     - Dưới 5 giờ
     - 5-10 giờ
     - 10-20 giờ
     - Trên 20 giờ
   - Rating filter với star selector (3+ sao, 4+ sao, etc.)
   - Price range slider nếu có khóa học premium
   - "Apply Filters" button với badge hiển thị số lượng filters đang active
   - "Reset Filters" link

3. Course Grid/List:
   - Toggle view giữa grid (default) và list views
   - Grid: 3 columns trên desktop, 2 trên tablet, 1 trên mobile
   - Sort dropdown: Mới nhất, Phổ biến nhất, Đánh giá cao nhất, A-Z

4. Course Cards:
   - Thumbnail với overlay showing difficulty
   - Title với max 2 lines, truncate nếu dài hơn
   - Instructor name với avatar nhỏ
   - Rating với số lượng đánh giá
   - Brief description (max 3 lines)
   - Tags/categories với màu phân biệt
   - Progress indicator cho enrolled courses
   - "Xem chi tiết" button hover state
   - Wishlist/bookmark icon

5. Pagination/Infinite Scroll:
   - Load more button hoặc infinite scroll với loading indicator
   - Hiển thị "Showing X of Y courses"

6. No Results State:
   - Friendly illustration
   - "Không tìm thấy khóa học phù hợp" message
   - Gợi ý search terms hoặc filters khác
   - "Browse all courses" button

7. Featured Sections:
   - "Khóa học phổ biến" carousel ở đầu trang
   - "Đề xuất cho bạn" section dựa trên lịch sử học tập
   - "Tiếp tục học" cho enrolled courses với progress

8. Responsive Behavior:
   - Filters collapse vào dropdown/modal trên mobile
   - Cards stack vertically trên mobile
   - Search persists trong sticky header khi scroll

Sử dụng animations tinh tế khi filter/sort để tăng trải nghiệm người dùng. Cards nên có hover states với subtle elevation increase. Đảm bảo lazy loading cho images và skeleton states khi loading data.
```

### Trang Chi tiết Khóa học

```
Thiết kế một trang chi tiết khóa học toàn diện, cung cấp tất cả thông tin cần thiết để học viên quyết định đăng ký khóa học. Trang phải có cấu trúc rõ ràng, dễ tiếp cận, và hướng đến conversion.

1. Hero Section:
   - Banner image đại diện cho khóa học với overlay gradient
   - Breadcrumb navigation (Trang chủ > Khóa học > [Category] > [Course Name])
   - Tiêu đề khóa học (typography: large, bold, high contrast)
   - Tagline/brief description (1-2 sentences)
   - Instructor info với avatar, tên và chức danh
   - Key stats row: Đánh giá, Số học viên, Cập nhật gần nhất, Cấp độ
   - CTA button "Đăng ký học ngay" (sticky khi scroll on mobile)
   - Share và Bookmark buttons

2. Quick Info Card (sticky sidebar trên desktop):
   - Preview video hoặc slideshow
   - Price/Free badge
   - Thời lượng khóa học và số bài học
   - Completion badge/certificate preview
   - "Đăng ký học" primary button (large, full width)
   - Download materials button (nếu có)
   - Gifting option (tặng khóa học)
   - Money-back guarantee nếu là khóa premium

3. Course Overview Tabs:
   - Về khóa học (mặc định active)
   - Nội dung khóa học
   - Đánh giá từ học viên
   - Câu hỏi thường gặp
   - Thông tin giảng viên
   - Resources

4. About Tab Content:
   - Detailed description với formatting phù hợp
   - "Bạn sẽ học được gì" section với bullet points
   - Yêu cầu tiên quyết
   - Target audience description
   - Tags/categories liên quan
   - Key features với icons:
     - Lifetime access
     - Mobile compatible
     - AI assistance
     - Community support
     - Certificate

5. Content Tab:
   - Expandable syllabus với chapters/modules
   - Progress indicators cho từng section (nếu đã enrolled)
   - Preview badge cho free preview lessons
   - Duration và format (video, quiz, reading) cho từng lesson
   - Downloadable resources indicator
   - Search functionality trong syllabus

6. Reviews Tab:
   - Overall rating với star distribution chart
   - Filter reviews dropdown (highest/lowest/recent first)
   - Highlighted reviews section
   - Full reviews list với pagination
   - Verification badge cho verified learners
   - Helpful/Not helpful voting cho reviews
   - "Write a review" prompt nếu đã completed

7. FAQs Section:
   - Accordion UI cho câu hỏi/trả lời
   - Categorized FAQs nếu nhiều
   - "Không tìm thấy câu trả lời? Hỏi ngay" CTA

8. Instructor Section:
   - Bio với avatar lớn hơn
   - Stats: Courses, Students, Reviews
   - Expertise areas với tags
   - Brief teaching philosophy
   - Social media/website links
   - "Xem tất cả khóa học của giảng viên" link

9. Related Courses:
   - Horizontal scrolling cards
   - Based on same category/instructor/level
   - "Compare with this course" option

10. Social Proof Elements:
    - Student testimonials với avatars
    - Companies/schools using the course nếu có
    - Featured in/awards section nếu có

11. Responsive Behavior:
    - Sticky CTA bar ở bottom trên mobile
    - Collapsible sections để tiết kiệm space
    - Full-width video player trên mobile
    - Tabs chuyển thành accordion trên viewports nhỏ

12. Interactive Elements:
    - Course preview modal/lightbox
    - Sample lesson preview
    - Email notification signup cho course updates
    - Learning path visualization

Sử dụng psychological principles như social proof, urgency (nếu có limited spots/promotions), và authority markers. Thiết kế phải clean nhưng đủ detailed để không bỏ sót thông tin quan trọng cho quyết định của học viên. Đảm bảo tất cả images có alt text và videos có captions cho accessibility.
```

### Trang Học tập (Learning Page)

```
Thiết kế một trang học tập (learning page) tập trung vào trải nghiệm học tập hiệu quả và không bị phân tâm. Trang này là nơi học viên sẽ dành nhiều thời gian nhất trên nền tảng, vì vậy cần tối ưu cho cả hiệu suất và sự thoải mái.

1. Layout Chính:
   - Two-panel layout với content chính bên trái (70%) và course navigation bên phải (30%)
   - Toggle để ẩn/hiện panel navigation
   - Chế độ full-screen cho video/interactive content
   - Dark mode toggle (learning-optimized với blue light reduction)

2. Top Navigation:
   - Course title với link trở về course dashboard
   - Breadcrumb (Section > Lesson)
   - Progress indicator (X% hoàn thành)
   - Notes button để mở side notes panel
   - Settings button (playback speed, quality, captions)
   - Profile/account dropdown

3. Content Area:
   - Video player với custom controls:
     - Play/Pause
     - 10s rewind/forward
     - Playback speed (0.5x - 2x)
     - Quality selector
     - Captions toggle
     - Theater mode/full screen
     - Volume control
     - Timestamp/duration
   - Tabs dưới content chính:
     - Transcript (searchable, clickable timestamps)
     - Notes (personal notes with timestamps)
     - Resources (downloadable materials)
     - Discussion (Q&A cho specific lesson)

4. Course Navigation Panel:
   - Current module expanded by default
   - Checkmarks cho completed lessons
   - Visual progress bar cho mỗi module
   - "Đang xem" indicator
   - Duration cho từng lesson
   - Format icons (video, reading, quiz, assignment)
   - Collapsible accordion style navigation
   - "Tiếp tục" button hiển thị next lesson

5. Learning Tools:
   - Note-taking với rich text formatting
   - Highlight feature cho transcripts
   - Bookmark specific timestamps
   - Flashcard creation từ content
   - AI Learning Assistant button (fixed position):
     - Hỏi câu hỏi về nội dung hiện tại
     - Giải thích concepts phức tạp
     - Generate practice questions
     - Summarize key points

6. Interactive Elements:
   - In-video quizzes tại timestamps cụ thể
   - Knowledge check points
   - Code editors cho programming courses
   - Interactive diagrams/simulations
   - Practice exercises với feedback

7. Assessment Components:
   - Quiz interface với:
     - Timer nếu có time limit
     - Progress (Question X of Y)
     - Question types (MCQ, T/F, matching, fill blank)
     - Submit và Next buttons
     - Review answers option
   - Assignments với rubrics và submission area
   - Feedback view sau completion

8. Social Learning Features:
   - Discussion thread specific cho lesson
   - Ask question inline với timestamp
   - Upvote/marked as helpful cho comments
   - Instructor responses highlighted
   - Study group formation option

9. Progress & Gamification:
   - XP/points earned indicator
   - Achievement unlocked notifications
   - Streak counter (consecutive days learning)
   - Daily goal progress
   - Celebration animations khi complete section

10. End of Lesson Screen:
    - Recap của key points
    - "Đánh dấu hoàn thành" button
    - Rating lesson (quick 1-5 stars)
    - "Tiếp tục" button prominent
    - Related resources recommendation

11. Responsive Considerations:
    - Stack layout vertically trên mobile
    - Bottom navigation bar trên mobile
    - Simplified controls trên smaller screens
    - Touch-optimized video player
    - Adjustments cho different input methods (touch, pen)

12. Accessibility Features:
    - Screen reader compatibility
    - Keyboard navigation
    - Transcript search và highlighting
    - Customizable caption styles
    - Reading mode cho text content
    - Focus indicators rõ ràng

Tối ưu hóa UX cho extended learning sessions: reduced eye strain với proper contrast, thoughtful spacing, và focus states. Đảm bảo tốc độ load nhanh và response time cho interactions để không làm gián đoạn flow học tập. Implement spaced repetition principles và retrieval practice cues trong navigational elements.
```

### Trang Quản lý Khóa học (Admin)

```
Thiết kế một trang quản lý khóa học cho admin và course creators, cung cấp đầy đủ công cụ để tạo và chỉnh sửa khóa học một cách trực quan và hiệu quả. Trang phải vừa powerful vừa user-friendly.

1. Header & Navigation:
   - Tiêu đề "Quản lý khóa học" với course title nếu đang edit
   - Breadcrumb (Admin > Courses > [Course Name])
   - Tabs navigation:
     - Content (default view)
     - Settings
     - Students
     - Analytics
     - Discussions
     - Pricing
   - Status indicator (Draft/Published/Scheduled/Archived)
   - Save, Preview, và Publish buttons
   - Version history dropdown

2. Content Management Main Area:
   - Left sidebar: Course structure tree
   - Main content: Editor cho current selected item
   - Right sidebar: Properties và settings cho selected item

3. Course Structure Builder (left sidebar):
   - Drag and drop interface cho sections và lessons
   - Add buttons cho new section, lesson, assessment
   - Bulk actions (delete, duplicate, move)
   - Collapse/expand sections
   - Search trong course content
   - Status indicators cho từng item
   - Warnings cho incomplete/invalid items

4. Content Editor (main area):
   - Rich text editor với formatting tools
   - Content blocks:
     - Text (with headings, lists, tables)
     - Media (image, video, audio) với upload
     - Embeds (YouTube, Vimeo, CodePen, etc.)
     - Files/attachments
     - Quizzes và interactive elements
     - Code snippets với syntax highlighting
     - Math equations (LaTeX support)
     - Flashcards
   - Media library browser
   - Version history và restore options
   - Commenting/annotation tools cho collaboration
   - Preview mode toggle

5. Properties Panel (right sidebar):
   - Tuỳ chọn phụ thuộc vào selected item type:
     - Title and description fields
     - Visibility settings
     - Duration estimation
     - Completion criteria
     - Access restrictions
     - Prerequisites
     - Publication schedule
     - SEO metadata
     - Tags/categories
   - Toggle để show/hide từng lesson
   - Requirements để mark as complete

6. Quiz & Assessment Builder:
   - Question bank management
   - Question types:
     - Multiple choice (single/multiple answers)
     - True/False
     - Short answer
     - Essay
     - Fill in the blanks
     - Matching
     - Ranking/ordering
     - Interactive diagrams
   - Settings cho:
     - Time limits
     - Passing score
     - Attempts allowed
     - Randomization
     - Feedback options
     - Grading scale
   - Import questions from CSV/bank
   - AI-assisted question generation

7. Settings Tab:
   - Course information:
     - Title, subtitle, description
     - Cover image và promotional video
     - Learning objectives
     - Instructor(s) assignment
     - Certificate template selection
     - Language và accessibility options
   - Advanced settings:
     - Completion rules
     - Progress tracking options
     - Discussion settings
     - Enrollment requirements
     - Course expiry/access period
     - Certificate criteria

8. Students Tab:
   - Student enrollment table với:
     - Search và filter options
     - Progress tracking
     - Assessment scores
     - Last activity
     - Completion status
   - Bulk actions (message, extend access, etc.)
   - Export data options
   - Add/remove student access
   - Group management

9. Analytics Tab:
   - Dashboard với key metrics:
     - Enrollment trends
     - Completion rates
     - Average time spent
     - Engagement metrics
     - Popular/problematic lessons
     - Assessment performance
   - Heatmaps cho content engagement
   - Drop-off points visualization
   - Filter controls (date range, cohorts)
   - Export reports functionality

10. Responsive Considerations:
    - Collapse sidebar trên smaller screens
    - Modal editors for mobile
    - Simplified controls mà vẫn giữ core functionality
    - Touch-optimized drag and drop

11. AI-assisted Tools:
    - Content suggestion generator
    - Proofreading và accessibility checker
    - Auto-generate quizzes từ content
    - Engagement optimization suggestions
    - SEO recommendations
    - Content readability analysis

12. Collaboration Features:
    - Co-instructor access management
    - Comment và feedback system
    - Task assignment
    - Change tracking
    - Notifications cho team activities

Thiết kế phải balance giữa comprehensive toolset và usability, với progressive disclosure cho advanced features. Sử dụng trực quan icons, contextual help, và tooltips để guide users. Platform nên auto-save frequently và offer conflict resolution cho multi-user editing.
```

## Giao diện

### Trang Danh sách Khóa học

Giao diện card-based với khả năng chuyển đổi giữa grid và list view. Grid hiển thị 3-4 khóa học mỗi hàng trên desktop và dần giảm xuống khi responsive. Cards có shadow nhẹ (box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)) và border-radius: 8px. Khi hover, card có transition subtle nâng lên (transform: translateY(-4px)). Filter panel đặt bên trái với width 280px trên desktop và collapsible trên mobile.

### Trang Chi tiết Khóa học

Layout sử dụng two-column trên desktop: content chính bên trái (65-70%) và sidebar registration/information card bên phải (30-35%). Video preview nằm trong một card với border-radius: 12px và box-shadow vừa phải. Tabs navigation sử dụng underline style với indicator animation. Trên mobile, layout chuyển sang single-column với sticky CTA bar ở bottom.

### Trang Học tập (Learning Page)

Giao diện tối giản để tập trung vào nội dung học tập. Video player chiếm hầu hết width với custom controls được thiết kế clean và non-intrusive. Dark theme được set làm mặc định để giảm eye strain. Navigation panel có thể collapse/expand với animation smooth. Transcript area sử dụng monospace font với line height thoải mái (1.6).

### Trang Quản lý Khóa học (Admin)

Giao diện admin sử dụng 3-column layout với color scheme khác biệt so với student-facing pages để phân biệt rõ environment. Drag-handle icons cho sortable items, với visual feedback khi drag. Content editor sử dụng block-based approach tương tự Notion hoặc modern CMS. Tất cả tables có alternating row colors nhẹ để dễ scan. Analytics section sử dụng muted colors cho charts với chỉ highlight key insights.

## Lưu ý

- **Performance**: Lazy load images và course content, implement pagination/virtualization cho large course lists
- **Accessibility**: Đảm bảo video có captions, transcript searchable, và tất cả interactive elements accessible via keyboard
- **Mobile Experience**: Optimize video player controls cho touch, adjust layout significant cho smaller screens
- **Social Learning**: Tích hợp discussion và Q&A vào learning experience phải seamless nhưng không distracting
- **State Management**: Lưu và restore học tập progress một cách chính xác ngay cả khi user switch devices
- **Offline Support**: Consider progressive web app capabilities cho offline viewing của downloaded content
- **Analytics**: Track engagement metrics và learning outcomes để cải thiện course design
- **Gamification**: Implement progress tracking, achievements, và motivation elements một cách subtle không overwhelming
