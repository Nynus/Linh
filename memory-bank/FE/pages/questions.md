# Trang Câu hỏi & Bài Thi

## Mô tả

Trang câu hỏi và bài thi được thiết kế để hỗ trợ trải nghiệm đánh giá và thực hành kiến thức. Hệ thống bao gồm các trang cho việc tạo, làm, đánh giá câu hỏi và bài thi, với tính năng tự động hóa và AI trợ giúp. Giao diện được thiết kế để phù hợp với việc hiển thị công thức toán học, biểu đồ và nội dung đa phương tiện.

## Đường dẫn

- **Danh sách câu hỏi**: `/questions`
- **Chi tiết câu hỏi**: `/questions/[question-id]`
- **Ngân hàng đề thi**: `/exams`
- **Làm bài thi**: `/exams/[exam-id]`
- **Công cụ tạo câu hỏi** (admin): `/admin/question-builder`
- **Công cụ tạo đề thi** (admin): `/admin/exam-builder`

## Chức năng chính

- Hiển thị và lọc câu hỏi theo chủ đề, độ khó, loại câu hỏi
- Tạo và chỉnh sửa câu hỏi với trình soạn thảo hỗ trợ công thức toán học
- Tạo đề thi tự động từ ngân hàng câu hỏi theo cấu trúc định sẵn
- Làm bài thi với tính năng theo dõi thời gian và tự động nộp bài
- Đánh giá và phân tích kết quả làm bài
- Hỗ trợ AI giải thích câu hỏi và gợi ý cách học

## Prompt chi tiết

### Trang Danh sách Câu hỏi

```
Thiết kế một trang danh sách câu hỏi có tính tương tác cao, dễ sử dụng và trực quan, giúp học sinh dễ dàng tìm kiếm và luyện tập với các câu hỏi phù hợp với nhu cầu học tập.

1. Header Section:
   - Tiêu đề "Ngân hàng câu hỏi" với counter tổng số câu hỏi
   - Thanh tìm kiếm full-width với placeholder "Tìm kiếm câu hỏi theo nội dung, chủ đề..."
   - Toggle giữa "Tất cả câu hỏi" và "Câu hỏi của tôi" (câu hỏi đã tạo/bookmark)
   - Nút "Tạo câu hỏi mới" (nếu user có permission)

2. Filter Panel:
   - Subject filters với visual icons:
     - Đại số
     - Hình học
     - Giải tích
     - Xác suất/Thống kê
   - Grade level filter (Lớp 10, 11, 12)
   - Difficulty selector (slide/select từ Cơ bản đến Nâng cao)
   - Question type filters với visual cues:
     - Multiple choice
     - True/False
     - Fill in the blank
     - Essay/Open-ended
     - Matching
   - Tags/Concepts cloud với popular tags
   - Time to solve range slider
   - Advanced filters toggle (show/hide)

3. Sorting & View Options:
   - Sort by: Recent, Most Attempted, Highest/Lowest Success Rate
   - View options: List (default) vs. Card view
   - Items per page selector

4. Question List/Grid:
   - Each question card/row includes:
     - Question preview (truncated with "..." nếu dài)
     - Math formulas rendered properly với MathJax/KaTeX
     - Visual indicator cho question type
     - Difficulty badge với color coding
     - Tags/concepts liên quan
     - Success rate indicator nếu đã attempt
     - Bookmark/save button
     - Attempt counter và average time to solve

5. Question Interaction:
   - Expandable để xem full question without leaving list
   - Quick answer option ngay trên list view
   - "View details" link đến trang chi tiết
   - Hover states với subtle animations

6. Quick Practice Section:
   - "Practice Now" panel với options:
     - Quick 5-minute practice
     - Topic-focused set (10 questions)
     - Daily challenge question
   - AI-recommended questions dựa trên performance history

7. Recently Attempted:
   - Compact horizontal scrolling list
   - Performance indicators (correct/incorrect)
   - "Continue from where you left off"

8. No Results State:
   - Friendly illustration
   - Helpful message
   - Suggested search terms và filter adjustments
   - Link to browse all questions

9. Responsive Considerations:
   - Filter sidebar collapses to top filters + "More filters" modal on mobile
   - Cards stack vertically on mobile
   - Important actions remain easily accessible
   - Search bar persists in sticky header

Sử dụng subtle animations khi filtering/sorting để improve user experience. Đảm bảo math equations được render properly trong previews. Include skeleton loading states khi fetching data. Tất cả elements phải accessibility-friendly với proper ARIA labels và keyboard navigation support.
```

### Trang Chi tiết Câu hỏi

```
Thiết kế một trang chi tiết câu hỏi với đầy đủ thông tin và công cụ tương tác cho việc học tập hiệu quả. Trang này cần làm nổi bật nội dung câu hỏi cùng với các tính năng hỗ trợ việc học và hiểu bài.

1. Question Header:
   - Breadcrumb navigation (Subject > Topic > Subtopic)
   - Question ID và chủ đề
   - Difficulty indicator với visual cue (Easy: xanh lá, Medium: vàng, Hard: đỏ)
   - Bookmark button với animation khi clicked
   - Share button với options (copy link, social media)
   - Report error button (nếu phát hiện sai sót)

2. Question Content Card:
   - Clean, well-spaced layout với high readability
   - Math formulas rendered beautifully với MathJax/KaTeX
   - Support cho images, diagrams, và graphs với lightbox zoom
   - Code snippets với syntax highlighting (cho STEM questions)
   - Audio playback nếu có audio component
   - Collapsible hints (progressive reveal)

3. Answer Section:
   - Clear separation từ question
   - Appropriate inputs dựa trên question type:
     - Radio buttons for MCQ
     - Checkboxes for multiple select
     - Styled text inputs for fill-in-blank
     - Rich text editor for open-ended
     - Drag-and-drop interface for matching
   - Math equation editor khi cần input công thức
   - Submit answer button với loading state
   - Clear/Reset button

4. Answer Review:
   - Color-coded feedback (correct/incorrect)
   - Detailed explanation với formatting và math support
   - Visual step-by-step solution khi có thể
   - Related formulas và concepts
   - Common mistakes và misconceptions

5. AI Learning Assistant:
   - "Ask about this question" prompt
   - Suggested questions related to concept
   - Step-by-step explanations on demand
   - Alternative solution methods
   - Concept breakdown với links to lessons
   - Personalized hints based on user's answering pattern

6. Similar Questions Panel:
   - 3-5 related questions với difficulty indicators
   - Progress/attempt status nếu đã thử
   - Quick preview on hover
   - "Try these next" suggestion

7. Performance & Analytics:
   - Success rate của user cho question này
   - Comparison với peers (percentile)
   - Time spent vs. average time
   - Historical attempts với date stamps
   - Progress on related concepts

8. Discussion Section:
   - Question-specific discussion thread
   - Upvote/downvote cho helpful comments
   - Rich text commenting với math support
   - Teacher/expert badges cho verified responses
   - Sort by: Recent, Most helpful

9. Learning Resources:
   - Links to relevant course sections
   - Recommended readings/videos
   - Downloadable resource materials
   - Practice worksheets

10. Metadata Footer:
    - Last updated date
    - Question author/contributor
    - Tags và categories
    - Curriculum alignment info

11. Navigation Controls:
    - Previous/Next question navigation
    - Return to list view
    - Save to collection option
    - "Try a similar question" button

12. Responsive Considerations:
    - Content reflow để maintain readability
    - Touch-friendly input controls
    - Collapsible sections on mobile
    - Persistent answer submission button

Đảm bảo tất cả math notations hiển thị correctly trên mọi device. Implement undo/redo functionality for complex inputs. Bao gồm keyboard shortcuts cho power users (next hint, check answer, etc.). Optimize performance để render phức tạp math expressions không làm lag interface.
```

### Trang Làm Bài Thi

```
Thiết kế một trang làm bài thi trực tuyến với giao diện tập trung, không gây phân tâm, đồng thời đảm bảo tính bảo mật và ổn định cao. Trải nghiệm người dùng phải được tối ưu hóa để giảm stress và hỗ trợ học sinh hoàn thành bài thi một cách hiệu quả.

1. Exam Header (Fixed):
   - Exam title và môn thi
   - Timer lớn, dễ nhìn với visual indicators:
     - Regular: đếm ngược bình thường
     - Warning: chuyển vàng khi còn 25% thời gian
     - Urgent: đỏ nhấp nháy khi còn 10% thời gian
   - Progress bar hiển thị % hoàn thành
   - Questions navigator toggle (show/hide)
   - Fullscreen mode toggle
   - Technical support button

2. Questions Navigator Panel (Collapsible):
   - Grid/list hiển thị tất cả question numbers
   - Status indicators:
     - Not viewed: default
     - Viewed: light outline
     - Answered: filled
     - Flagged: corner indicator
   - Quick jump functionality
   - Filter view: All, Answered, Unanswered, Flagged
   - Collapse to minimal state để maximize content area

3. Main Content Area:
   - Clean, distraction-free design với ample white space
   - Question number và type indicator
   - Question content với support cho math, images, etc.
   - Answer options/input area với generous spacing
   - Math equation editor khi cần (với toolbar tối thiểu)
   - Flag for review checkbox/toggle
   - Notes/scratch work expandable area

4. Navigation Controls:
   - Previous/Next buttons large và obvious
   - "Mark for review" option
   - "Submit this answer" confirmation
   - Keyboard shortcuts (displayed discreetly)

5. Right Sidebar Tools (Collapsible):
   - Calculator (scientific/graphing based on exam)
   - Formula sheet toggle
   - Scratch pad/notes area
   - Exam rules reference
   - Color theme toggle (light/dark/sepia)

6. Proctor/Security Features (if applicable):
   - Webcam feed minimized
   - Notification area for proctor messages
   - Screen recording indicator
   - Attempt tracking

7. Save & Progress:
   - Auto-save indicators (subtle)
   - Connection status
   - Last saved timestamp
   - Local storage backup indication

8. Near Completion States:
   - Review screen with all questions và status
   - Unanswered questions warning
   - Final submission confirmation dialog with:
     - Number of answered/unanswered questions
     - Option to return to specific unanswered questions
     - Clear final submit button
     - Countdown timer nếu time is nearly up

9. Post-Submission:
   - Submission confirmation screen
   - Submission receipt với details
   - Option to see results (if immediate)
   - Return to dashboard button
   - Feedback/report issues form

10. Emergency Recovery:
    - Connection lost indicator & instructions
    - Auto-recovery when connection restored
    - Manual save to local option
    - Export answers functionality in emergency

11. Accessibility Features:
    - High contrast mode
    - Screen reader optimized content
    - Adjustable text size
    - Keyboard navigation với visual indicators
    - Reading tools (line focus, screen mask)

12. Responsive Considerations:
    - Simplified layout on smaller screens
    - Touch-optimized controls
    - Essential tools remain accessible
    - Portrait/landscape optimizations for tablets

Implement debounce/throttle cho user inputs để prevent performance issues. Ensure all media (images, graphs) là zoomable. Provide subtle audio cues (toggleable) for important events like successful answer submission. Optimize cho minimum network usage sau initial load để support unreliable connections. Implement strict security measures như copy-paste restrictions và browser tab monitoring khi cần thiết.
```

### Trang Xem Kết quả Bài Thi

```
Thiết kế một trang xem kết quả bài thi toàn diện, cung cấp không chỉ điểm số mà còn phân tích chi tiết về hiệu suất, các mục cần cải thiện và nguồn tài liệu học tập phù hợp. Trang này nên mang tính khuyến khích và hướng dẫn người học cải thiện.

1. Results Overview Hero:
   - Congratulatory message với tone phù hợp với kết quả
   - Score display lớn và visual:
     - Numerical score
     - Percentage
     - Grade (nếu applicable)
     - Pass/Fail indicator nếu cần
   - Score gauge/chart với color spectrum
   - Comparison với:
     - Personal best
     - Class average (anonymized)
     - Target score nếu đã set
   - Time taken vs. allotted time
   - Attempt # và history link nếu có previous attempts
   - Share result/certificate options

2. Performance Summary Cards:
   - Strengths card (areas performed well)
   - Areas for improvement card
   - Most challenging questions
   - Time management analysis
   - Answer change patterns

3. Topic Breakdown:
   - Bar/radar chart showing performance by topic
   - Color-coded indicators (strength/weakness)
   - Percentage correct cho mỗi topic
   - Click/tap to expand topic details
   - Recommendation chips cho mỗi topic

4. Question Review Navigator:
   - Filterable list/grid: All, Correct, Incorrect, Flagged
   - Question number với status indicators
   - Quick preview on hover
   - Jump to full question view

5. Individual Question Review:
   - Original question content
   - User's answer highlighted
   - Correct answer (if different)
   - Visual comparison
   - Detailed explanation
   - Success rate của question này among all students
   - Time spent on question vs. average
   - Related concepts and learning resources

6. Learning Recommendations:
   - AI-generated study plan based on results
   - Personalized resource recommendations:
     - Video lessons
     - Practice exercises
     - Reading materials
   - Suggested courses/modules focus
   - Recommended practice questions
   - Schedule retake suggestion nếu applicable

7. Progress Tracking:
   - Historical performance chart
   - Growth trajectory visualization
   - Mastery level indicators by topic
   - Long-term goal tracking
   - Streak và consistency metrics

8. Feedback Collection:
   - Question quality rating
   - Exam difficulty feedback
   - Report specific questions
   - General comments/feedback form

9. Social Elements:
   - Achievement badges unlocked
   - Milestone celebrations
   - Share progress option (anonymized)
   - Leaderboard position (optional)

10. Action Buttons:
    - Download results as PDF
    - Print friendly version
    - Add to portfolio/transcript
    - Schedule follow-up study session
    - Retake similar exam
    - Return to dashboard

11. Instructor Feedback (if applicable):
    - Comments from instructor
    - Manual grading for essay questions
    - Personalized tips
    - Schedule 1:1 session option

12. Responsive Considerations:
    - Priority information visible first on mobile
    - Collapsible sections for detailed analysis
    - Swipe navigation between questions
    - Touch-optimized interactive charts

Implement animations và micro-interactions to celebrate achievements. Use supportive và encouraging language, đặc biệt cho lower scores. Ensure graphs và charts có alternative text/data tables cho accessibility. Offer different perspective views (overview vs. detail-oriented) to accommodate different learning reflection styles. Design for printability với proper page breaks và print stylesheet.
```

### Trang Công cụ Tạo Câu hỏi (Admin)

```
Thiết kế một công cụ tạo câu hỏi mạnh mẽ dành cho giáo viên và admin, kết hợp sự linh hoạt của WYSIWYG editor với công cụ soạn thảo công thức toán học chuyên nghiệp. Giao diện cần trực quan, dễ sử dụng nhưng vẫn đầy đủ tính năng cho các câu hỏi phức tạp.

1. Header Area:
   - "Tạo câu hỏi mới" / "Chỉnh sửa câu hỏi" title
   - Question ID (auto-generated cho new questions)
   - Status indicator (Draft, Review, Published)
   - Save, Preview, và Publish buttons
   - Autosave indicator
   - Version history access

2. Metadata Panel:
   - Subject và topic selectors (multi-level dropdown)
   - Grade level selector
   - Difficulty slider (1-5 với visual indicator)
   - Estimated time to solve
   - Tags input với auto-suggestions
   - Curriculum alignment selector
   - Question type selector với icons:
     - Multiple choice
     - Multiple select
     - Fill in blank
     - Essay/Free response
     - Matching
     - Drag and drop
     - Hotspot
     - Math expression

3. Question Editor:
   - Full-featured WYSIWYG editor
   - Rich text formatting controls
   - Math formula editor với LaTeX support
   - Symbol và equation library
   - Image upload với annotation tools
   - Embed controls (video, audio, interactive)
   - Graph & diagram creation tools
   - Code editor với syntax highlighting
   - Template library access
   - Variable placeholders cho randomized questions

4. Answer Configuration:
   - Dynamic form based on question type
   - For MCQ/multiple select:
     - Add/remove choices
     - Mark correct answer(s)
     - Shuffle options toggle
     - Image cho mỗi option
   - For fill-in-blank:
     - Define acceptable answers
     - Precision/tolerance settings cho numeric
     - Case sensitivity toggle
   - For matching:
     - Create pairs với drag-drop reordering
     - Distractor options
   - For math expressions:
     - Expression equivalence rules
     - Variable tolerances
     - Unit recognition settings

5. Explanation Editor:
   - Separate WYSIWYG editor
   - Step-by-step solution builder
   - Common misconceptions field
   - Hint creation (multiple progressive hints)
   - Related concepts linking

6. AI Assistance Panel:
   - Generate similar questions
   - Difficulty estimation
   - Language improvement suggestions
   - Distractor quality analysis
   - Common misconception prediction
   - Auto-generate hints and explanations
   - Accessibility checker

7. Preview Pane:
   - Student view của question
   - Device preview toggles (desktop, tablet, mobile)
   - Light/dark mode preview
   - Answer và explanation toggle

8. Question Settings:
   - Scoring rules
     - Points value
     - Partial credit options
     - Penalty settings
   - Time limit (if different from default)
   - Attempt limits
   - Feedback display options
   - Analytics collection settings

9. Validation & Quality:
   - Validation status indicators
   - Accessibility score
   - Readability metrics
   - Mobile-friendly check
   - Estimated difficulty visualization
   - Question quality checklist

10. Bulk Operations:
    - Import questions from:
      - Word/Excel templates
      - QTI format
      - CSV
    - Export options
    - Batch edit functionality
    - Question set creation

11. Responsive Considerations:
    - Collapsible panels for small screens
    - Essential functions accessible on mobile
    - Touch-friendly editor controls
    - Simplified UI for basic scenarios

Implement keyboard shortcuts cho common operations. Provide math templates cho common equation types. Include real-time collaboration nếu multiple editors. Ensure thường xuyên autosaving và dễ recover từ drafts. Offer context-sensitive help cho complex features. Incorporate template gallery cho common question formats trong mỗi subject.
```

### Trang Công cụ Tạo Đề Thi (Admin)

```
Thiết kế một công cụ tạo đề thi linh hoạt và mạnh mẽ, cho phép giáo viên và admin tạo các kỳ thi cá nhân hóa theo nhiều tiêu chí khác nhau. Giao diện phải kết hợp khả năng tùy chỉnh chi tiết với tính AI tự động hóa khi cần.

1. Header Controls:
   - Exam title và description fields
   - Status indicator (Draft, Scheduled, Active, Closed)
   - Save & Exit, Preview, Publish buttons
   - Duplicate exam button
   - Version history dropdown
   - Export options (PDF, Word, QTI)

2. Exam Configuration Panel:
   - Time limit settings with options:
     - Fixed time for all
     - Extended time cho specific students
     - No time limit
   - Availability settings:
     - Date range picker
     - Time window
     - Access code option
     - Batch/Group access control
   - Attempt settings:
     - Number of allowed attempts
     - Grade calculation (highest, latest, average)
     - Re-attempt waiting period
   - Security options:
     - Proctoring requirements
     - Browser lockdown
     - IP restrictions
     - Shuffling (questions/answers)
     - One-at-a-time questions toggle

3. Question Selection:
   - Three tabs:
     - Manual selection
     - Automated generation
     - Import from file

   - Manual Selection View:
     - Question bank browser với filters:
       - Subject/Topic hierarchical filter
       - Difficulty range
       - Question type
       - Tags/keywords
       - Usage history
     - Preview on hover
     - Drag-and-drop or checkbox selection
     - Selected questions area với reordering

   - Automated Generation:
     - Exam blueprint builder:
       - Topic distribution pie chart
       - Difficulty distribution slider
       - Question type allocation
     - Constraints section:
       - Required topics/concepts
       - Excluded questions
       - Balance requirements
     - AI recommendation engine with options:
       - Target difficulty curve
       - Time distribution
       - Coverage goals
     - Generated preview với regenerate option

   - Import View:
     - File upload zone
     - Template download
     - Format instructions
     - Validation report

4. Exam Structure Builder:
   - Section creation và management
   - Section properties:
     - Title and instructions
     - Time limit (if different from exam)
     - Question selection method per section
     - Scoring rules
   - Question reordering và grouping
   - Question point value assignment
   - Question dependencies/branching logic
   - Randomization settings per section

5. Scoring & Grading:
   - Total points calculator
   - Grade scale mapper
     - Letter grade mapping
     - Pass threshold
     - Performance bands
   - Partial credit rules
   - Penalty configurations
   - Bonus question designation
   - Curve settings

6. Preview & Validation:
   - Complete exam preview
   - Student perspective view
   - Estimated completion time
   - Validation checks:
     - Content coverage
     - Difficulty balance
     - Timing appropriateness
     - Missing elements
   - Print layout preview

7. Results & Feedback Configuration:
   - Results visibility settings:
     - Immediate vs. delayed
     - Score only vs. full review
     - Comparative statistics display
   - Feedback options:
     - Per question feedback
     - General feedback based on score ranges
     - Review availability period
   - Certificate/badge settings
   - Export/integration options

8. Distribution Tools:
   - Student/group assignment
   - Batch enrollment
   - Email notification templates
   - Calendar integration
   - LMS embed options

9. Analytics Preview:
   - Predicted difficulty distribution
   - Estimated time distribution
   - Topic coverage visualization
   - Comparison to previous exams
   - Prediction của potential issues

10. AI Enhancement Tools:
    - Quality check và suggestions
    - Automatic distractor improvement
    - Bias and fairness analysis
    - Language clarity assessment
    - Difficulty calibration
    - Content coverage gaps identification

11. Collaborative Tools:
    - Commenting và annotation
    - Review request workflow
    - Role-based editing permissions
    - Change tracking
    - Approval process

Ensure the interface supports both quick exam creation (templates, AI assistance) và detailed customization. Implement progress tracking cho large exam creation. Support accessibility considerations trong cả creation process và final exam. Provide comprehensive validation to prevent errors in live exams. Include intelligent duplicate detection khi manually selecting questions.
```

## Giao diện

### Trang Danh sách Câu hỏi

Giao diện sử dụng grid layout với khả năng chuyển sang list view. Mỗi câu hỏi được hiển thị trong card có border-radius: 8px, và box-shadow nhẹ. Filter panel chiếm khoảng 20% width bên trái, collapsible trên mobile. Header section có gradient background nhẹ với search bar nổi bật. Các filter chips sử dụng màu sắc phân biệt theo chủ đề. Questions render với MathJax/KaTeX để hiển thị công thức toán học đúng.

### Trang Chi tiết Câu hỏi

Layout sử dụng one-column hoặc two-column tùy thuộc vào độ phức tạp của câu hỏi. Câu hỏi được đặt trong card nổi bật với padding rộng rãi. Các công thức toán học được render với font size lớn hơn và spacing thoải mái. Phần explanation sử dụng steppers hoặc accordions để người dùng có thể mở dần. AI Learning Assistant được đặt fixed ở góc phải dưới với pulsing animation khi có suggestion mới.

### Trang Làm Bài Thi

Giao diện tối giản để giảm phân tâm, với header fixed chứa timer và progress. Question navigator sử dụng grid layout nhỏ gọn có thể collapse. Content area tối đa hóa không gian đọc với margins rộng rãi. Các input controls (radio buttons, checkboxes) được thiết kế lớn hơn bình thường để dễ tương tác và giảm lỗi. Timer có hiệu ứng đổi màu khi thời gian còn ít, từ xanh lá sang vàng rồi đỏ.

### Trang Xem Kết quả Bài Thi

Thiết kế sử dụng card-based layout với sections rõ ràng. Hero section có gradient background tương ứng với mức độ thành công. Charts và visualizations sử dụng color scheme nhất quán: xanh lá cho strengths, đỏ/cam cho areas of improvement. Question review sử dụng accordion hoặc tabbed interface để tiết kiệm không gian. Score breakdown sử dụng horizontal bar charts để so sánh visual giữa các topics.

### Trang Công cụ Tạo Câu hỏi

Giao diện cấu trúc 3 phần: metadata sidebar bên trái, main editor ở giữa, và properties/preview panel bên phải. Editor sử dụng block-based interface tương tự Notion, với toolbar floating. Math editor có thể mở rộng khi active. Preview panel có thể resize hoặc collapse khi không cần. Autosave indicator ở góc trên cùng thay đổi status khi đang lưu/đã lưu.

### Trang Công cụ Tạo Đề Thi

Layout sử dụng multi-panel approach với wizard-style steps ở top. Configuration panel ở bên trái, question bank/selection ở giữa, và exam structure ở bên phải. Exam structure sử dụng drag-drop interface với sections có thể collapse. Blueprint builder sử dụng interactive visual pie charts và sliders. Mobile version stack panels vertically với collapsed state mặc định.

## Lưu ý

- **Math Rendering**: Đảm bảo tất cả công thức toán học (LaTeX) render nhanh và chính xác, không bị broken trong responsive views
- **Accessibility**: Câu hỏi toán học cần đặc biệt chú ý đến screen reader compatibility, mô tả alt cho đồ thị và công thức
- **Performance**: Cache rendered math expressions, sử dụng virtualization cho large question banks
- **Autosave**: Implement robust autosave trong exam taking và question creation
- **Mobile Optimization**: Đặc biệt chú ý đến input controls cho math expressions trên mobile
- **Integrity**: Exam taking phải có multiple safeguards cho connectivity issues và security
- **Personalization**: Sử dụng data-driven recommendations để suggest phù hợp với level người dùng
- **Internationalization**: Math notation phải consistent bất kể language setting
- **Collaboration**: Hỗ trợ co-creation và review workflows cho question và exam authoring
