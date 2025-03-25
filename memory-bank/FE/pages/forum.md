# Trang Diễn đàn & Thảo luận

## Mô tả

Trang diễn đàn và thảo luận là không gian tương tác cộng đồng của nền tảng NyNus, nơi học sinh, giáo viên và chuyên gia có thể trao đổi kiến thức, đặt câu hỏi và chia sẻ tài nguyên học tập. Hệ thống được thiết kế để khuyến khích sự hợp tác và xây dựng cộng đồng học tập mạnh mẽ.

## Đường dẫn

- **Trang chính diễn đàn**: `/forum`
- **Danh sách chủ đề**: `/forum/topics`
- **Chi tiết bài viết**: `/forum/posts/[post-id]`
- **Trang tạo bài viết**: `/forum/posts/new`
- **Trang cá nhân người dùng**: `/forum/users/[user-id]`
- **Danh sách câu hỏi chưa giải quyết**: `/forum/unanswered`

## Chức năng chính

- Đăng, chỉnh sửa, và xóa bài viết và bình luận
- Hỗ trợ định dạng văn bản phong phú với công thức toán học
- Gắn thẻ bài viết theo chủ đề và nội dung
- Tìm kiếm và lọc bài viết theo nhiều tiêu chí
- Vote up/down và đánh dấu câu trả lời hữu ích
- Nhận thông báo về hoạt động liên quan
- Xếp hạng danh tiếng người dùng và huy hiệu

## Prompt chi tiết

### Trang Chính Diễn đàn

```
Thiết kế một trang chính diễn đàn hiện đại, tương tác cao và thông minh cho nền tảng học tập NyNus. Trang cần được tối ưu cho việc khám phá nội dung, tương tác cộng đồng và chia sẻ kiến thức.

1. Header Section:
   - Logo và navigation breadcrumbs
   - Search bar nổi bật với autocomplete suggestions
   - Dropdown filters: Mới nhất, Trending, Chưa giải quyết, Đã theo dõi
   - Create Post button nổi bật với icon dấu cộng
   - Notification bell với counter cho unread notifications

2. Hero Banner:
   - Welcome message tùy chỉnh theo user ("Chào [Username], bạn có câu hỏi gì hôm nay?")
   - Stats snapshot: online users, total posts, questions answered
   - Quick actions: Ask Question, Browse Topics, My Saved Posts
   - Community highlights (rotating featured posts/contributors)

3. Main Navigation Tabs:
   - Tất cả bài viết (mặc định active)
   - Câu hỏi chưa giải quyết
   - Theo chủ đề
   - Trending
   - Bài viết của tôi

4. Featured Topics Carousel:
   - Horizontal scrolling row với topic cards
   - Mỗi topic card có icon, name, post count, follower count
   - Visual indicator cho unread posts in topics
   - Quick follow/unfollow action trên mỗi card

5. Post Feed Section:
   - Toggle view: Compact (default) vs. Expanded
   - Sort options: Recent, Most votes, Most viewed
   - Post cards include:
     - User avatar và name với reputation badge
     - Post title (truncated nếu quá dài)
     - Preview của content (2-3 lines)
     - Topic tags với color coding
     - Vote count và comment count
     - Time posted/updated
     - Solved indicator cho questions
     - Save/bookmark button

6. Sidebar Components:
   - "Your Activity" panel:
     - Recent contributions
     - Reputation points progress
     - Badges earned
     - Followed topics
   - "Top Contributors" leaderboard:
     - Weekly/Monthly toggle
     - User avatars, names, và reputation
     - Specialty badges
   - "Unanswered Questions" spotlight:
     - Curated list của high-priority unanswered questions
     - Tags matching user expertise
     - Time posted
     - Bounty indicators nếu applicable

7. "Recommended for You" Section:
   - AI-powered recommendations based on interests/history
   - Mix của questions, discussions, và resources
   - Reason for recommendation label
   - Feedback mechanism ("Was this helpful?")

8. Community Events:
   - Upcoming AMAs, study groups, or workshops
   - Calendar view toggle
   - Join/interested button
   - Reminder setting option

9. Quick Help & Resources:
   - Forum etiquette guidelines
   - FAQ section
   - Contact moderators
   - Tutorial for new users

10. Footer:
    - Topic directory
    - Community guidelines link
    - Moderator contact
    - Keyboard shortcuts reference

11. Floating Action Button:
    - Quick post creation
    - Ask AI assistant
    - Report issue

12. Responsive Considerations:
    - Sidebar collapses to bottom tabs on mobile
    - Post cards stack vertically
    - Critical actions remain accessible
    - Search persists in header

Implement subtle animations cho interactions như voting, following, và expanding posts. Sử dụng skeleton loading states khi fetching posts. Đảm bảo math và code formatting rendered properly trong previews. Provide visual cues for new content since last visit. Support keyboard navigation với clear focus states. Design for accessibility với proper contrast, text alternatives, và screen reader support.
```

### Trang Chi tiết Bài viết

```
Thiết kế một trang chi tiết bài viết trực quan và tương tác cao, tối ưu hóa cho việc đọc, thảo luận và học tập cộng đồng. Trang cần hỗ trợ đầy đủ nội dung học thuật phức tạp bao gồm công thức toán học, code và media.

1. Navigation & Context:
   - Breadcrumb trail (Forum > Topic > Post Title)
   - Topic indicators với color coding
   - Post status badge (Answered, Unanswered, Closed, etc.)
   - View count và last active timestamp
   - Quick link đến related posts

2. Post Header:
   - Post title với typography rõ ràng, size lớn
   - Author information với avatar, name, reputation score, và badges
   - "Verified Teacher" hoặc "Expert" badge nếu applicable
   - Post creation date và last edited timestamp
   - Save/Bookmark toggle button
   - Share button với social/copy link options
   - Dropdown menu cho report, subscribe notifications

3. Main Post Content:
   - Content area với typography tối ưu cho readability
   - Rich text formatting với proper heading hierarchy
   - Math formulas (LaTeX) rendered beautifully với MathJax/KaTeX
   - Code blocks với syntax highlighting và copy button
   - Image gallery với lightbox functionality
   - Embedded media (video, interactive demos) với responsive sizing
   - Quote blocks với visual distinction
   - Link previews cho external resources
   - Table formatting cho structured data

4. Post Actions:
   - Voting controls (upvote/downvote) với animation feedback
   - Current vote score với historical chart on hover
   - Comment button/toggle
   - Share options với social platforms và direct link
   - Options menu (edit for author, report for others)
   - Mark as Solution button (for question posts)

5. Tags & Categories:
   - Visual tag chips với hover information
   - Topic/subtopic indicators
   - Difficulty level indicator nếu relevant
   - Grade level tag nếu applicable
   - Related concepts links

6. Answer/Comment Section:
   - Sort controls: Top rated, Newest, Oldest
   - Filter toggle: All, Verified responses, OP responses
   - Visual separation giữa answers và comments
   - "Accepted Solution" highlighted answer with green checkmark
   - Each answer includes:
     - User info với role badge
     - Content với rich formatting support
     - Upvote/downvote controls
     - Comment thread toggle
     - Timestamp và edited indicator
     - Mark as solution button (visible to question author)

7. Add Answer/Comment Area:
   - Rich text editor với:
     - Basic formatting (bold, italic, lists, etc.)
     - Math equation editor (toggle view)
     - Code editor với language selection
     - Image upload/embed
     - Link formatter
   - Preview toggle
   - Guidelines reminder
   - Post button với "answering as [user]" indicator
   - Anonymous posting option nếu applicable

8. Sidebar Elements:
   - "About the Author" card
     - Mini profile với stats
     - Expertise areas
     - Follow button
   - "Similar Questions" section
     - Related posts based on content/tags
     - Solved status indicators
   - "Hot Network Questions" from relevant topics
   - "Learning Resources" related to post topic
     - Course links
     - Study materials
     - Practice questions

9. Floating Toolbar:
   - Quick navigate to answers
   - Back to top button
   - Toggle sidebar visibility
   - Save reading position
   - Reader mode toggle

10. Moderation Tools (for moderators/teachers):
    - Pin/unpin controls
    - Move to different topic
    - Merge with other post
    - Close thread options
    - Add moderator note

11. AI Assistant Integration:
    - "Ask AI about this" button
    - Summarize discussion option
    - Explain concept referenced
    - Generate practice problems

12. Responsive Behavior:
    - Sidebar moves to bottom on mobile
    - Optimized reading width on all devices
    - Simplified editor controls on small screens
    - Touch-friendly voting và action buttons
    - Collapsible comment threads on mobile

Implement smooth scrolling between sections. Provide keyboard shortcuts for common actions (vote, comment, navigate). Ensure all images có proper lazy loading và alt text. Support dark mode với appropriate contrast for code blocks và math formulas. Include visual differentiation between questions, regular posts, và announcements. Implement real-time indicators khi others are typing responses.
```

### Trang Tạo Bài viết

```
Thiết kế một trang tạo bài viết trực quan và linh hoạt, cho phép người dùng tạo ra các bài đăng với định dạng phong phú, đặc biệt hỗ trợ tốt cho nội dung học thuật như công thức toán học, code và các phương tiện đa dạng. Trải nghiệm cần mượt mà và hỗ trợ từ đơn giản đến nâng cao.

1. Header Section:
   - Tiêu đề rõ ràng "Tạo bài viết mới"
   - Breadcrumb navigation (Forum > New Post)
   - Save as draft và Preview buttons
   - Post settings dropdown (visibility, notifications, etc.)
   - Exit confirmation nếu có unsaved changes

2. Post Type Selector:
   - Tabbed interface hoặc segmented control
   - Options:
     - Question (default)
     - Discussion
     - Resource sharing
     - Poll/Survey
   - Visual indicators cho mỗi type
   - Brief description của appropriate content for each type

3. Title Section:
   - Large, prominent input field
   - Character counter (recommend 5-15 words)
   - Placeholder text based on selected post type
   - Real-time suggestions for similar existing posts
   - Title quality indicator (clear, searchable, specific)

4. Rich Text Editor:
   - Full-featured toolbar với context-sensitive options:
     - Text formatting (bold, italic, underline, strikethrough)
     - Headings và paragraph styles
     - Bulleted và numbered lists
     - Blockquotes và callouts
     - Text alignment và indentation
     - Links insertion với preview
     - Math equation editor (LaTeX support)
     - Code block với language selection
     - Table creator và editor
   - WYSIWYG mode với clean interface
   - Markdown mode toggle cho advanced users
   - Full screen mode option
   - Word/character count
   - Editing history/version control

5. Media Integration:
   - Drag and drop zone for uploads
   - Image insertion với alt text và caption fields
   - Image editor (crop, resize, annotate)
   - Video embedding từ YouTube, Vimeo, etc.
   - File attachments với type và size indicators
   - Gallery creation for multiple images
   - Interactive elements embedding (GeoGebra, CodePen, etc.)

6. Math & Science Tools:
   - Equation editor với:
     - Visual interface for common symbols
     - LaTeX direct input option
     - Live preview
     - Common equation templates
     - Recent equations history
   - Chemistry formula support
   - Graph và chart creation tools
   - Coordinate plane generator

7. Categorization Panel:
   - Topic selection (multi-level dropdown)
   - Subtopic refinement
   - Tags input với autocomplete suggestions
     - Popular tags indication
     - Topic-specific tag recommendations
   - Grade level selector nếu applicable
   - Difficulty level indicator nếu relevant

8. AI Assistance Features:
   - Writing suggestions panel
   - Grammar và spelling check
   - Clarity improvement suggestions
   - Math notation validation
   - Tag recommendations based on content
   - Similar posts suggestion
   - Title optimization help

9. Preview Section:
   - "How it will look" preview pane
   - Device type toggle (desktop, tablet, mobile views)
   - Theme toggle (light/dark mode preview)

10. Submission Controls:
    - Post visibility options:
      - Public
      - Topic members only
      - Specific groups/classes
      - Draft
    - Notification preferences
    - Schedule publishing option với datetime picker
    - Final review checklist
    - Clear Submit button với loading state

11. Context-Sensitive Help:
    - Inline tips based on current editing focus
    - "How to ask good questions" guide collapse panel
    - Examples of well-formatted posts
    - Community guidelines reminders
    - Keyboard shortcuts reference

12. Responsive Considerations:
    - Simplified toolbar on mobile
    - Collapsible panels to maximize editor space
    - Touch-friendly controls
    - Persistent save/submit actions

Implement autosave functionality với clear indicators. Provide keyboard shortcuts for common formatting actions. Ensure math và code formatting preview accurately matches final rendering. Include accessibility checkers for content (alt text reminders, contrast warnings). Support drafts management với timestamps và quick resume. Consider collaborative editing features nếu multiple users might contribute.
```

### Trang Tìm kiếm và Lọc Bài viết

```
Thiết kế một trang tìm kiếm và lọc bài viết mạnh mẽ và trực quan, cho phép người dùng nhanh chóng tìm thấy thông tin liên quan trong diễn đàn thông qua các tùy chọn tìm kiếm và lọc đa dạng. Giao diện cần cân bằng giữa tính đơn giản và khả năng tùy chỉnh nâng cao.

1. Search Header:
   - Prominent search bar với autocomplete suggestions
   - Recent searches dropdown
   - Voice search option
   - "Advanced Search" toggle
   - Search scope selectors:
     - All forum
     - Specific topics
     - Within my followed
     - Within my contributions

2. Advanced Search Panel (expandable):
   - Content type filters (Questions, Discussions, Resources, etc.)
   - Date range pickers (posted/updated)
   - User filters (by specific author)
   - Status filters (Solved, Unsolved, Closed)
   - Post attributes (Has attachments, Contains code, etc.)
   - Vote count range
   - View count range
   - Response count range

3. Filter Sidebar:
   - Collapsible sections:
     - Topics hierarchy (checkbox tree)
     - Tags multi-select với search
     - Post dates (predefined ranges và custom)
     - Authors (top contributors và search)
     - Content types
     - Status indicators
   - Applied filters summary
   - Clear filters button
   - Save filter set option
   - Recent/saved filter sets

4. Results Display:
   - Toggle between list và grid views
   - Sort options:
     - Relevance (default for search)
     - Recent activity
     - Creation date
     - Vote count
     - View count
     - Response count
   - Results count và pagination controls
   - Bulk actions for selected results

5. Result Cards:
   - Highlighted search terms in preview
   - Relevance score/indicator
   - Visual indicators for match type (title match, content match, tag match)
   - Compact versus detailed view toggle
   - Quick actions (view, save, follow)
   - For each result:
     - Title với search term highlighting
     - Content snippet với context
     - Author information với badges
     - Post metadata (date, votes, views, answers)
     - Tags với relevance highlighting
     - Solution status for questions
     - Last activity timestamp

6. Topic/Tag Explorer:
   - Interactive visualization of related topics/tags
   - Size indicates post volume
   - Proximity indicates relatedness
   - Click to filter by selected topic/tag
   - Hover for quick stats

7. No Results State:
   - Friendly "No results found" message
   - Search term suggestions và corrections
   - Alternative search scopes
   - Popular topics suggestion
   - Create new post option related to search

8. Search Analytics (for users):
   - "Others searched for" suggestions
   - Popular searches in selected topics
   - Rising/trending searches
   - Search effectiveness feedback

9. Saved Searches:
   - Save current search parameters
   - Name và describe saved searches
   - Set notification preferences for new matches
   - Manage saved searches panel

10. Filter Combinations:
    - Pre-configured useful combinations
    - Community-created filter sets
    - "My favorite filters"
    - Filter history

11. Search Help Panel:
    - Search syntax guide
    - Advanced operators explanation
    - Example searches for common scenarios
    - Search tips based on current context

12. Responsive Behavior:
    - Filters collapse to top bar/modal on mobile
    - Critical search functions remain accessible
    - Simplified result cards on small screens
    - Touch-friendly filter controls

Implement type-ahead suggestions that improve as user types. Provide visual feedback cho search processing state với smooth transitions. Cache recent search results for quick access. Ensure math formulas và code snippets in results preview correctly. Highlight exact match sections in long posts. Support keyboard navigation throughout results. Include accessibility features như clear focus states và screen reader optimizations.
```

### Trang Cá nhân Người dùng (Forum Profile)

```
Thiết kế một trang hồ sơ người dùng diễn đàn toàn diện, hiển thị thông tin về hoạt động, đóng góp, và thành tích của thành viên trong cộng đồng học tập. Trang cần đồng thời mang tính cá nhân hóa và cung cấp dữ liệu chi tiết hữu ích về hành trình học tập.

1. Profile Header:
   - Cover image option (default: gradient based on join date)
   - Profile picture với border reflecting role or reputation tier
   - Display name và username
   - Role badges (Student, Teacher, Moderator, Admin, etc.)
   - Join date và last active timestamp
   - Location và timezone (optional)
   - "Currently online" status indicator nếu active
   - Follow/Message buttons cho other users
   - Profile completion percentage cho own profile

2. Reputation & Achievements:
   - Reputation score với visual tier indicator
   - Progress to next reputation level
   - Earned badges gallery với tooltips
     - Recent badges highlighted
     - Rare/special badges showcased
   - Achievement timeline
   - "Top 5%" tags or categories nếu applicable
   - Contribution streaks

3. Activity Summary Cards:
   - Posts statistics:
     - Total questions, answers, discussions
     - Accepted answers ratio
     - Upvote/downvote ratio
     - Views generated
   - Topics expertise visualization:
     - Radar/spider chart of knowledge areas
     - Most active topics với post counts
     - Strongest topics based on upvotes
   - Contribution trends:
     - Activity heatmap (GitHub style)
     - Weekly/monthly trends chart
     - Peak activity times

4. Contribution Tabs:
   - Questions (with filter/sort options)
   - Answers (with accepted answer highlights)
   - Discussions started
   - Resources shared
   - Bookmarked posts
   - Follow activity (topics, users followed)

5. Knowledge Portfolio:
   - Topics mastered visualization
   - Learning path progress
   - Knowledge gaps identified
   - Recommended next topics
   - Study time/contributions by subject area

6. Content Feed:
   - Filterable activity stream
   - Post previews với engagement metrics
   - Chronological or categorized view options
   - Infinite scroll với lazy loading
   - Quick actions (view full post, bookmark, etc.)

7. Community Impact:
   - People helped counter
   - Questions solved metric
   - Top answer/post highlight
   - Teaching/explanation quality score
   - Community references (mentions, citations)

8. Personal Bio Section:
   - Rich text bio/about me
   - Learning goals
   - Current courses/subjects
   - External links (personal website, GitHub, etc.)
   - Contact preferences

9. Classroom/Group Affiliations:
   - Classes/courses enrolled
   - Study groups participation
   - Team contributions
   - Collaborative achievements

10. Settings Panel (for own profile):
    - Privacy controls
    - Notification preferences
    - Profile customization options
    - Activity visibility settings
    - Connected accounts management

11. Mentor/Mentee Relationships:
    - Mentorship availability toggle
    - Current mentorship connections
    - Mentorship history và success stories
    - Mentorship requests management

12. Responsive Considerations:
    - Priority content first on mobile
    - Collapsible sections/tabs
    - Simplified charts và visualizations
    - Touch-friendly action buttons
    - Preserved critical functionality

Implement smooth transitions between tabs và sections. Provide interactive data visualizations với hover/tap details. Use animations sparingly to highlight achievements và milestones. Ensure private information remains private với clear visual indicators of what's visible to whom. Support profile sharing và export formats. Include accessibility features like appropriate contrast ratios và semantic markup.
```

## Giao diện

### Trang Chính Diễn đàn

Layout sử dụng three-column design trên desktop với left sidebar (navigation), center content (post feed), và right sidebar (community/user info). Chuyển thành single-column stacked trên mobile. Post cards sử dụng subtle shadow (box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05)) và border-radius: 8px. Featured topics carousel hiển thị 4-6 topics trên desktop, với gradient background cards và scroll horizontally hoặc responsive stack. Search bar nổi bật với border có animation khi focus.

### Trang Chi tiết Bài viết

Layout sử dụng two-column với post content chiếm ~70% width, sidebar ~30%. Content được hiển thị trong card với padding rộng rãi (p-6 to p-8). Typography sử dụng serif hoặc comfortable sans-serif cho main content với line-height: 1.6. Code blocks có border-radius: 4px và subtle background với syntax highlighting. Answers được phân tách bằng dividers và spacing (my-6). Answered posts có visual indicator ở top (green checkmark và banner). Responsive chuyển sang single-column với sidebar chuyển xuống dưới.

### Trang Tạo Bài viết

Layout sử dụng full-width cho editor với fixed header và footer action buttons. Editor toolbar được thiết kế trực quan với tooltip cho mỗi action và nhóm lại theo chức năng. Math editor hỗ trợ visual builder và LaTeX input với split screen preview. Media uploads có drag-drop khu vực với visual feedback khi files được detection. Mobile version optimizes cho essential controls, với expandable toolbar khi cần advanced options.

### Trang Tìm kiếm và Lọc

Layout sử dụng left sidebar filter panel (~25% width) và right content area (~75%). Filter sections sử dụng collapsible accordion style với selected filters hiển thị ở top dưới dạng chips có thể remove. Results hiển thị trong cards với highlighting cho search terms. Status indicators sử dụng màu sắc phân biệt (green cho solved, orange cho active discussions, etc.). Mobile version chuyển sidebar thành collapsible panel hoặc modal overlay.

### Trang Cá nhân Người dùng

Layout sử dụng hero section ở top với cover image overlay và profile info. Main content được chia thành multiple columns trên desktop với card-based design. Achievements hiển thị dưới dạng badge collection với hover details. Activity charts sử dụng muted colors compatible với cả light/dark mode. Contribution tabs sử dụng underline style với smooth transitions. Mobile chuyển sang single-column stacked layout với collapsible sections.

## Lưu ý

- **Rich Text Support**: Hiển thị chính xác và nhất quán công thức toán học và code snippets trên tất cả các trang
- **Performance**: Implement pagination hoặc infinite scroll với lazy loading cho post feeds và search results
- **Real-time Updates**: Sử dụng websockets hoặc polling để hiển thị real-time notifications và updates
- **Cross-references**: Tạo liên kết tự động giữa các bài đăng liên quan và tài liệu học tập
- **Accessibility**: Đảm bảo đủ contrast, keyboard navigation và screen reader support trên toàn bộ diễn đàn
- **Moderation**: Cung cấp công cụ cho moderators để duy trì chất lượng và liên kết với hệ thống báo cáo
- **Gamification**: Cân bằng yếu tố gamification để khuyến khích đóng góp chất lượng mà không gây phân tâm
- **Integration**: Tích hợp với notification system, user profiles, và learning resources của nền tảng
- **Privacy**: Cung cấp tùy chọn để kiểm soát hiển thị hoạt động và dữ liệu cá nhân
- **Content Quality**: Khuyến khích high-quality posts với guidelines, templates và validation
