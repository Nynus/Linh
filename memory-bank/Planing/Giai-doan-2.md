# Giai đoạn 2: Xây dựng chức năng cốt lõi

### 2.1. Hệ thống quản lý người dùng

- ⏳ **Công việc 2.1.1**: Thiết kế Schema/Model User trong MongoDB [P0]

  - Công cụ: Mongoose, TypeScript
  - Chức năng:
    - Quản lý thông tin người dùng (admin, giáo viên, học sinh)
    - Định nghĩa interface IUser, UserProfile, UserSettings, UserLearningData
    - Định nghĩa các enum (UserRole, UserStatus)
    - Cài đặt middleware cho hash password
    - Implement phương thức comparePassword cho xác thực
  - Kỹ thuật tham chiếu: Schema Design, Middleware, Hash Password

- ⏳ **Công việc 2.1.2**: Thiết kế Schema/Model User trong PostgreSQL [P0]

  - Công cụ: Prisma, PostgreSQL
  - Chức năng:
    - Thiết kế schema Prisma cho User với các quan hệ
    - Định nghĩa các enum (Role, UserStatus)
    - Thiết lập các ràng buộc và indexes
    - Cấu hình trường tham chiếu mongoId
  - Kỹ thuật tham chiếu: Relational Schema Design, Prisma Modeling

- ⏳ **Công việc 2.1.3**: Xây dựng cơ chế đồng bộ hóa dữ liệu [P1]

  - Công cụ: NestJS, MongoDB Change Streams, PostgreSQL Triggers
  - Chức năng:
    - Implement đồng bộ hai chiều MongoDB <-> PostgreSQL
    - Xử lý xung đột dữ liệu theo quy tắc ưu tiên
    - Đảm bảo tính nhất quán giữa hai CSDL
    - Xây dựng cơ chế lưu trữ và khôi phục trong trường hợp lỗi
  - Kỹ thuật tham chiếu: CDC (Change Data Capture), Event-driven Synchronization

- ⏳ **Công việc 2.1.4**: Xây dựng DTO và Input Types [P0]

  - Công cụ: NestJS, class-validator, TypeScript
  - Chức năng:
    - Định nghĩa CreateUserInput, UpdateUserInput
    - Định nghĩa UpdateUserProfileInput
    - Định nghĩa UserFilters cho tìm kiếm
    - Implement các class validators và transformers
  - Kỹ thuật tham chiếu: DTO Pattern, Input Validation

- ⏳ **Công việc 2.1.5**: Xây dựng UserRepository [P0]

  - Công cụ: NestJS, Prisma, Mongoose
  - Chức năng:
    - Implement các phương thức CRUD cơ bản
    - Implement các phương thức tìm kiếm theo bộ lọc
    - Implement các phương thức xác thực và đổi mật khẩu
    - Implement các phương thức thống kê và báo cáo
  - Kỹ thuật tham chiếu: Repository Pattern, Data Access Layer

- ⏳ **Công việc 2.1.6**: Xây dựng UserService [P0]

  - Công cụ: NestJS, bcrypt, JWT
  - Chức năng:
    - Implement business logic cho quản lý người dùng
    - Implement logic xác thực và phân quyền
    - Implement các phương thức reset mật khẩu và xác minh email
    - Xử lý các trường hợp đặc biệt (khóa tài khoản, xóa tài khoản, v.v.)
  - Kỹ thuật tham chiếu: Service Layer, Business Logic, Auth Flow

- ⏳ **Công việc 2.1.7**: Xây dựng API Authentication [P0]

  - Công cụ: NestJS, Passport, JWT
  - Chức năng:
    - Implement API đăng ký, đăng nhập
    - Implement API refresh token
    - Implement API đăng xuất
    - Implement API đổi mật khẩu và reset mật khẩu
    - Implement API xác minh email
  - Kỹ thuật tham chiếu: JWT, Guards, Strategy Pattern

- ⏳ **Công việc 2.1.8**: Xây dựng API quản lý người dùng [P0]

  - Công cụ: NestJS Controllers
  - Chức năng:
    - Implement API CRUD người dùng
    - Implement API quản lý vai trò và phân quyền
    - Implement API quản lý profile
    - Implement API thống kê người dùng
  - Kỹ thuật tham chiếu: RESTful API Design, RBAC (Role-based Access Control)

- ⏳ **Công việc 2.1.9**: Xây dựng trang đăng nhập và đăng ký [P0]

  - Công cụ: Next.js, React Hook Form, Zod, Tailwind CSS
  - Chức năng:
    - Form đăng nhập với validation
    - Xử lý lỗi và thông báo
    - Tùy chọn đăng nhập với Google
    - Liên kết đến trang đăng ký và quên mật khẩu
    - Chuyển hướng sau đăng nhập thành công
    - Form đăng ký đa bước với validation
    - Xác thực email/số điện thoại
    - Password strength meter
    - Đăng ký với social accounts
    - Xử lý chuyển tiếp sau đăng ký
    - Flow đa bước quên mật khẩu: nhập email → xác thực → tạo mật khẩu mới
    - Verification code với timer
  - Kỹ thuật tham chiếu: Form Validation, Client Components, Auth Flows, Multi-step Form, Security Flows, OTP Verification

- ⏳ **Công việc 2.1.10**: Xây dựng trang hồ sơ người dùng [P1]

  - Công cụ: Next.js, React, Tailwind CSS, React Query
  - Chức năng:
    - Thông tin cá nhân với avatar upload
    - Form cập nhật thông tin cá nhân
    - Upload và cắt avatar
    - Quản lý cài đặt thông báo
    - Quản lý thông tin học tập
    - Learning progress visualization
    - Achievement gallery và badges
    - Activity history và saved items
    - Settings và preferences
  - Kỹ thuật tham chiếu: Optimistic Updates, Image Upload, Form Management, User Profile, Achievement System

- ⏳ **Công việc 2.1.11**: Xây dựng dashboard học tập người dùng [P2]

  - Công cụ: Next.js, Chart.js/D3.js, React Query
  - Chức năng:
    - Hiển thị thống kê tổng quan
    - Biểu đồ tiến độ học tập
    - Phân tích điểm mạnh và điểm yếu
    - Gợi ý khóa học và đề thi phù hợp
  - Kỹ thuật tham chiếu: Data Visualization, Learning Analytics

- ⏳ **Công việc 2.1.12**: Viết unit tests và integration tests cho module User [P0]

  - Công cụ: Jest, @nestjs/testing, supertest
  - Chức năng:
    - Test business logic trong UserService
    - Test data access layer trong UserRepository
    - Test API endpoints trong UserController
    - Test authentication flows và authorization
  - Kỹ thuật tham chiếu: Unit Testing, Integration Testing, Authentication Testing

- ⏳ **Công việc 2.1.13**: Viết E2E tests cho chức năng User [P1]

  - Công cụ: Cypress, Testing Library
  - Chức năng:
    - Test authentication flows (đăng ký, đăng nhập, đổi mật khẩu)
    - Test user profile management
    - Test quyền truy cập với các vai trò khác nhau
  - Kỹ thuật tham chiếu: E2E Testing, User Flow Testing

- ⏳ **Công việc 2.1.14**: Tạo tài liệu cho module User [P0]

  - Công cụ: Markdown, Docusaurus, Mermaid
  - Chức năng:
    - Tạo tài liệu API cho các endpoints User
    - Viết hướng dẫn sử dụng User module
    - Tạo sơ đồ luồng xác thực và phân quyền
    - Document các models, DTO và interfaces
  - Kỹ thuật tham chiếu: API Documentation, Authentication Flow Documentation

### 2.2. Quản lý ngân hàng câu hỏi

- ⏳ **Công việc 2.2.1**: Thiết kế Schema/Model Question trong MongoDB [P0]

  - Công cụ: Mongoose, TypeScript
  - Chức năng:
    - Thiết kế MongoDB Schema cho Question với các thành phần: raw_content, QuestionID, Subcount, form, content, correctAnswer, solutions, answers, images, tags, usageCount, creator, status, usageHistory
    - Định nghĩa Schema con: QuestionIDSchema, SubcountSchema, QuestionAnswerSchema, QuestionImagesSchema
    - Triển khai hỗ trợ đa dạng loại câu hỏi: MultipleChoice, TrueFalse, ShortAnswer, Essay, Matching
    - Cấu hình indexes cho tìm kiếm hiệu quả
  - Kỹ thuật tham chiếu: MongoDB Schema Design, Subdocuments, Indexing

- ⏳ **Công việc 2.2.2**: Xây dựng QuestionParser cho LaTeX

  - Công cụ: TypeScript, Regex
  - Chức năng:
    - Phát triển module BracketExtractor xử lý cú pháp LaTeX phức tạp
    - Triển khai hàm trích xuất cho các thành phần: QuestionID, Subcount, nguồn, nội dung, đáp án, lời giải
    - Xử lý các loại form câu hỏi khác nhau
    - Xử lý hình ảnh và công thức toán học trong câu hỏi
  - Kỹ thuật tham chiếu: Parser Development, Regex Patterns, Pattern Matching

- ⏳ **Công việc 2.2.3**: Xây dựng module Map ID Processor

  - Công cụ: TypeScript, File System
  - Chức năng:
    - Phát triển module đọc và xử lý file Map ID.tex
    - Cài đặt hàm phân tích và giải mã QuestionID
    - Tạo các hàm tiện ích để tạo đối tượng QuestionID đầy đủ
    - Xây dựng cơ chế định danh câu hỏi theo cấu trúc phân cấp
  - Kỹ thuật tham chiếu: Tree Structure, ID Mapping, Hierarchical Data

- ⏳ **Công việc 2.2.4**: Xây dựng QuestionRepository

  - Công cụ: NestJS, Mongoose
  - Chức năng:
    - Cài đặt các phương thức CRUD cơ bản
    - Xây dựng các phương thức tìm kiếm nâng cao theo QuestionID, nội dung, tags
    - Triển khai các phương thức thống kê và phân tích câu hỏi
    - Xây dựng các phương thức quản lý phiên bản câu hỏi
  - Kỹ thuật tham chiếu: Repository Pattern, Data Access Layer, Advanced Queries

- ⏳ **Công việc 2.2.5**: Xây dựng QuestionService

  - Công cụ: NestJS
  - Chức năng:
    - Cài đặt business logic cho quản lý câu hỏi
    - Xử lý chuyển đổi giữa các định dạng câu hỏi
    - Triển khai logic phân tích độ khó và tính phân biệt của câu hỏi
    - Phân tích phân bố đáp án và các metrics khác
  - Kỹ thuật tham chiếu: Service Layer, Business Logic, Statistical Analysis

- ⏳ **Công việc 2.2.6**: Xây dựng API endpoints quản lý câu hỏi

  - Công cụ: NestJS Controllers
  - Chức năng:
    - Cài đặt các API endpoints CRUD cho câu hỏi
    - Xây dựng API tìm kiếm câu hỏi theo nhiều tiêu chí
    - Triển khai API upload/import câu hỏi dạng LaTeX
    - Xây dựng API thống kê và phân tích câu hỏi
  - Kỹ thuật tham chiếu: RESTful API Design, Controller Pattern, Upload Handling

- ⏳ **Công việc 2.2.7**: Xây dựng trang quản lý câu hỏi

  - Công cụ: Next.js, React, Shadcn UI, KaTeX/MathJax
  - Chức năng:
    - Danh sách câu hỏi với preview LaTeX
    - Bộ lọc nâng cao (chủ đề, độ khó, loại)
    - Modal preview câu hỏi đầy đủ
    - Bulk operations và import/export
    - Analytics cho câu hỏi
    - Phát triển form tạo/sửa câu hỏi với hỗ trợ LaTeX
  - Kỹ thuật tham chiếu: LaTeX Rendering, Advanced Filtering, Performance Optimization, LaTeX Editor Integration, Live Preview, Form Management

- ⏳ **Công việc 2.2.8**: Xây dựng trang câu hỏi và luyện tập

  - Công cụ: Next.js, React, KaTeX/MathJax, Tailwind CSS
  - Chức năng:
    - Hiển thị câu hỏi với hỗ trợ LaTeX
    - Interface trả lời theo loại câu hỏi
    - Hiển thị kết quả và giải thích
    - Navigation giữa các câu hỏi
    - Đánh dấu câu hỏi để xem lại
    - Thiết kế render động nội dung câu hỏi theo loại
    - Phát triển giao diện câu hỏi trắc nghiệm
    - Xây dựng giao diện câu hỏi tự luận và câu hỏi ghép đôi
    - Hỗ trợ hiển thị hình ảnh và công thức toán học
  - Kỹ thuật tham chiếu: LaTeX Rendering, Question Types, Feedback System, Dynamic Components, Math Rendering, Conditional Rendering

- ⏳ **Công việc 2.2.9**: Xây dựng hệ thống phản hồi câu hỏi

  - Công cụ: Next.js, React, MongoDB
  - Chức năng:
    - Cài đặt hệ thống thu thập phản hồi từ người dùng
    - Xây dựng giao diện báo cáo lỗi câu hỏi
    - Triển khai hệ thống đánh giá và phân loại câu hỏi
    - Phát triển dashboard phân tích phản hồi
  - Kỹ thuật tham chiếu: Feedback System, Rating System, User Experience

- ⏳ **Công việc 2.2.10**: Tối ưu hiệu suất xử lý câu hỏi

  - Công cụ: Node.js, MongoDB, Redis
  - Chức năng:
    - Cài đặt xử lý bất đồng bộ và song song cho batch import
    - Triển khai caching cho các câu hỏi thường dùng
    - Tối ưu truy vấn và indexes MongoDB
    - Xây dựng worker threads cho xử lý nền
  - Kỹ thuật tham chiếu: Worker Threads, Redis Caching, Performance Optimization

- ⏳ **Công việc 2.2.11**: Viết unit tests và integration tests cho module Question [P0]

  - Công cụ: Jest, @nestjs/testing
  - Chức năng:
    - Test QuestionParser và Map ID Processor
    - Test QuestionService và các thuật toán phân tích
    - Test QuestionRepository và các database queries
    - Test API endpoints cho quản lý câu hỏi
  - Kỹ thuật tham chiếu: Unit Testing, LaTeX Parsing Testing, Database Query Testing

- ⏳ **Công việc 2.2.12**: Viết E2E tests cho chức năng Question [P1]

  - Công cụ: Cypress
  - Chức năng:
    - Test trang quản lý câu hỏi và các bộ lọc
    - Test import/export câu hỏi
    - Test trang xem và trả lời câu hỏi
  - Kỹ thuật tham chiếu: E2E Testing, LaTeX Rendering Testing

- ⏳ **Công việc 2.2.13**: Tạo tài liệu cho module Question [P0]

  - Công cụ: Markdown, Docusaurus, Mermaid
  - Chức năng:
    - Tạo tài liệu cấu trúc Question model và các thành phần
    - Document quy trình import câu hỏi từ LaTeX
    - Mô tả chi tiết các loại câu hỏi và cách xử lý
    - Viết hướng dẫn sử dụng API Question
  - Kỹ thuật tham chiếu: Schema Documentation, Data Format Documentation, API Reference

### 2.3. Quản lý đề thi

- ⏳ **Công việc 2.3.1**: Thiết kế Schema/Model Exam với PostgreSQL [P0]

  - Công cụ: Prisma, PostgreSQL, TypeScript
  - Chức năng:
    - Định nghĩa schema Prisma cho Exam, ExamConfig, ExamSection
    - Định nghĩa các enum (ExamType, ExamStatus, TimeLimit)
    - Thiết kế cấu trúc quan hệ với Questions (tham chiếu MongoDB ObjectIds)
    - Thiết kế cấu trúc lưu trữ cấu hình và metadata đề thi
    - Thiết lập các indexes và constraints cho hiệu suất truy vấn
  - Kỹ thuật tham chiếu: Relational Schema Design, Cross-Database References

- ⏳ **Công việc 2.3.2**: Thiết kế Schema/Model ExamResult với PostgreSQL [P0]

  - Công cụ: Prisma, PostgreSQL, TypeScript
  - Chức năng:
    - Thiết kế schema Prisma cho ExamResult với các mối quan hệ
    - Cấu trúc lưu trữ chi tiết từng câu trả lời với tham chiếu câu hỏi
    - Cấu trúc lưu trữ thời gian làm bài và timestamps
    - Cấu trúc lưu trữ số điểm và điểm phân bố theo sections
    - Thiết kế các trường phân tích kết quả với quan hệ tới User và Exam
  - Kỹ thuật tham chiếu: Relational Schema Design, Performance Metrics

- ⏳ **Công việc 2.3.3**: Xây dựng ExamRepository [P0]

  - Công cụ: NestJS, Mongoose, Prisma
  - Chức năng:
    - Implement CRUD cơ bản cho đề thi
    - Implement phương thức fetch đề thi với các câu hỏi
    - Implement phương thức lưu kết quả thi
    - Implement phương thức thống kê đề thi
  - Kỹ thuật tham chiếu: Repository Pattern, Aggregation, Joins

- ⏳ **Công việc 2.3.4**: Xây dựng ExamService [P0]

  - Công cụ: NestJS
  - Chức năng:
    - Implement business logic cho việc tạo đề thi
    - Implement logic tính điểm theo nhiều tiêu chí
    - Implement các thuật toán phân tích kết quả
    - Implement các phương thức export đề thi
  - Kỹ thuật tham chiếu: Service Layer, Assessment Algorithms

- ⏳ **Công việc 2.3.5**: Xây dựng API endpoints quản lý đề thi [P0]

  - Công cụ: NestJS Controllers
  - Chức năng:
    - API tạo và quản lý đề thi
    - API lấy đề thi để làm bài
    - API nộp bài và tính điểm
    - API thống kê và phân tích kết quả
  - Kỹ thuật tham chiếu: RESTful API Design, Secure Endpoints

- ⏳ **Công việc 2.3.6**: Xây dựng API endpoints làm bài thi [P0]

  - Công cụ: NestJS Controllers, WebSockets (optional)
  - Chức năng:
    - API lấy đề thi để làm bài
    - API lưu trạng thái làm bài
    - API nộp bài và tính điểm
    - API thống kê và phân tích kết quả
  - Kỹ thuật tham chiếu: RESTful API Design, Real-time Updates

- ⏳ **Công việc 2.3.7**: Xây dựng trang quản lý đề thi [P1]

  - Công cụ: Next.js, React, Tailwind CSS, React Query, TanStack Table
  - Chức năng:
    - Danh sách đề thi với lọc và tìm kiếm
    - Form tạo đề thi với nhiều cấu hình
    - Giao diện chọn câu hỏi cho đề thi
    - Preview và test đề thi
    - Phân tích và thống kê kết quả
    - Quản lý quyền truy cập đề thi
  - Kỹ thuật tham chiếu: Drag and Drop Interface, Advanced Form Management, Test Preview

- ⏳ **Công việc 2.3.8**: Xây dựng trang làm bài thi [P1]

  - Công cụ: Next.js, React, Tailwind CSS, React Query
  - Chức năng:
    - Timer đếm ngược với visual cues
    - Navigation sidebar có thể thu gọn
    - Question map với trạng thái
    - Interface làm bài theo loại câu hỏi
    - Autosave và nộp bài
    - Fullscreen mode
    - Giao diện hiển thị câu hỏi theo loại
    - Timer đếm ngược thời gian làm bài
    - Navigation giữa các câu hỏi
    - Lưu tạm và nộp bài
  - Kỹ thuật tham chiếu: Exam Interface, Timer, Question Navigation, Autosave, State Management, Timer Component

- ⏳ **Công việc 2.3.9**: Xây dựng trang kết quả thi [P1]

  - Công cụ: Next.js, React, Chart.js/D3.js, Tailwind CSS
  - Chức năng:
    - Hiển thị điểm số và thời gian làm bài
    - Hiển thị đáp án đúng và giải thích
    - Thống kê kết quả theo từng phần
    - Biểu đồ phân tích hiệu suất
    - Phân tích câu trả lời đúng/sai
    - Đánh giá điểm mạnh/yếu
    - So sánh với các lần thi trước hoặc với người khác
    - Gợi ý ôn tập
  - Kỹ thuật tham chiếu: Data Visualization, Performance Analytics

- ⏳ **Công việc 2.3.10**: Xây dựng thống kê đề thi

  - Công cụ: Next.js, Chart.js/D3.js
  - Chức năng:
    - Dashboard thống kê tổng quan
    - Phân tích độ khó của đề thi
    - Phân tích phân phối điểm
    - Báo cáo hiệu suất theo câu hỏi
  - Kỹ thuật tham chiếu: Advanced Data Visualization, Statistical Analysis

- ⏳ **Công việc 2.3.11**: Viết unit tests và integration tests cho module Exam [P0]

  - Công cụ: Jest, @nestjs/testing
  - Chức năng:
    - Test business logic trong ExamService
    - Test tính toán điểm và phân tích kết quả
    - Test data access trong ExamRepository
    - Test API endpoints cho đề thi và làm bài
  - Kỹ thuật tham chiếu: Unit Testing, Integration Testing, Algorithm Testing

- ⏳ **Công việc 2.3.12**: Viết E2E tests cho chức năng Exam [P1]

  - Công cụ: Cypress
  - Chức năng:
    - Test trang tạo và quản lý đề thi
    - Test giao diện làm bài thi với các loại câu hỏi
    - Test trang kết quả và phân tích
  - Kỹ thuật tham chiếu: E2E Testing, Time-dependent Testing

- ⏳ **Công việc 2.3.13**: Tạo tài liệu cho module Exam [P0]

  - Công cụ: Markdown, Docusaurus, Mermaid
  - Chức năng:
    - Document cấu trúc Exam và ExamResult
    - Viết hướng dẫn chi tiết quy trình tạo và làm bài thi
    - Tạo sơ đồ luồng dữ liệu trong quá trình làm bài
    - Document các API endpoints và cách sử dụng
  - Kỹ thuật tham chiếu: Process Documentation, API Reference, Flow Diagrams

### 2.4. Diễn đàn thảo luận

- ⏳ **Công việc 2.4.1**: Thiết kế Schema/Model Discussion với PostgreSQL [P1]

  - Công cụ: Prisma, PostgreSQL, TypeScript
  - Chức năng:
    - Định nghĩa schema Prisma cho Discussion, Comment, Reply
    - Thiết kế cấu trúc quan hệ cho comments lồng nhau
    - Liên kết thông qua foreign keys với các entities Question, Exam, và User
    - Thiết kế cấu trúc cho voting, reactions và reporting
    - Triển khai recursive queries cho comments lồng nhau
  - Kỹ thuật tham chiếu: Relational Schema Design, Hierarchical Data, Self References

- ⏳ **Công việc 2.4.2**: Xây dựng DiscussionRepository [P1]

  - Công cụ: NestJS, Prisma
  - Chức năng:
    - Implement CRUD cho discussions và comments với Prisma
    - Implement phương thức fetch discussions với pagination
    - Triển khai recursive queries cho nested comments
    - Implement phương thức thống kê và báo cáo
  - Kỹ thuật tham chiếu: Repository Pattern, Pagination, SQL Recursive Queries

- ⏳ **Công việc 2.4.3**: Xây dựng DiscussionService [P1]

  - Công cụ: NestJS
  - Chức năng:
    - Implement business logic cho thảo luận
    - Implement logic báo cáo và kiểm duyệt
    - Implement notification system
  - Kỹ thuật tham chiếu: Service Layer, Moderation System

- ⏳ **Công việc 2.4.4**: Xây dựng API endpoints thảo luận [P1]

  - Công cụ: NestJS Controllers
  - Chức năng:
    - API tạo và quản lý discussions
    - API quản lý comments và replies
    - API đánh giá và báo cáo
    - API thống kê và phân tích
  - Kỹ thuật tham chiếu: RESTful API Design, Rate Limiting

- ⏳ **Công việc 2.4.5**: Xây dựng components thảo luận [P2]

  - Công cụ: Next.js, React, Tailwind CSS
  - Chức năng:
    - Component hiển thị danh sách discussions
    - Component tạo discussion mới
    - Component hiển thị và trả lời comments
    - Component đánh giá và báo cáo
  - Kỹ thuật tham chiếu: Comment Thread UI, Nested Replies, Rich Text Input

- ⏳ **Công việc 2.4.6**: Tích hợp thảo luận vào các trang [P2]

  - Công cụ: Next.js, React
  - Chức năng:
    - Tích hợp thảo luận vào trang câu hỏi
    - Tích hợp thảo luận vào trang kết quả thi
    - Tích hợp thảo luận vào trang tài liệu
  - Kỹ thuật tham chiếu: Component Integration, Context-aware Discussions

- ⏳ **Công việc 2.4.7**: Viết unit tests và integration tests cho module Discussion [P1]

  - Công cụ: Jest, @nestjs/testing
  - Chức năng:
    - Test business logic trong DiscussionService
    - Test nested comments và pagination trong DiscussionRepository
    - Test API endpoints cho discussions và comments
  - Kỹ thuật tham chiếu: Unit Testing, Recursive Structure Testing, API Testing

- ⏳ **Công việc 2.4.8**: Viết E2E tests cho chức năng Discussion [P2]

  - Công cụ: Cypress
  - Chức năng:
    - Test tạo discussion threads và comments
    - Test hiển thị nested comments
    - Test reporting và moderation
  - Kỹ thuật tham chiếu: E2E Testing, User Interaction Testing

- ⏳ **Công việc 2.4.9**: Tạo tài liệu cho module Discussion [P1]

  - Công cụ: Markdown, Docusaurus, Mermaid
  - Chức năng:
    - Mô tả cấu trúc dữ liệu thảo luận và quan hệ giữa các entities
    - Document các API endpoints và cách sử dụng
    - Tạo hướng dẫn tích hợp thảo luận vào các thành phần khác
    - Viết tài liệu về quy tắc báo cáo và kiểm duyệt
  - Kỹ thuật tham chiếu: Component Integration Docs, Moderation Guidelines
