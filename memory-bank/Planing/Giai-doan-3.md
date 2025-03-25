# Giai đoạn 3: Xây dựng chức năng nâng cao

### 3.1. Khóa học trực tuyến

- ⏳ **Công việc 3.1.1**: Thiết kế Schema/Model Course với PostgreSQL [P1]

  - Công cụ: Prisma, PostgreSQL
  - Chức năng:
    - Thiết kế schema Prisma cho Course với các mối quan hệ
    - Cấu trúc khóa học, bài học, tài liệu với các ràng buộc quan hệ
    - Định nghĩa các trường và quan hệ với User và các entity khác
    - Thiết lập các indexes và constraints phù hợp
  - Kỹ thuật tham chiếu: Relational Database Design, Foreign Keys, Prisma Schema

- ⏳ **Công việc 3.1.2**: Xây dựng API quản lý khóa học [P1]

  - Công cụ: NestJS Controllers, Services, Prisma
  - Chức năng: CRUD khóa học, bài học, enrollment với Prisma
  - Kỹ thuật tham chiếu: Repository Pattern, Prisma Client, Authorization

- ⏳ **Công việc 3.1.3**: Xây dựng giao diện quản lý khóa học [P2]

  - Công cụ: Next.js, React Hook Form
  - Chức năng: Form tạo khóa học, quản lý bài học
  - Kỹ thuật tham chiếu: Dynamic Forms, File Upload

- ⏳ **Công việc 3.1.4**: Xây dựng giao diện học viên [P1]

  - Công cụ: Next.js, React, Video.js
  - Chức năng: Xem bài học, tài liệu, tiến độ
  - Kỹ thuật tham chiếu: Video Player Integration, Progress Tracking

- ⏳ **Công việc 3.1.5**: Viết unit tests và integration tests cho module Course [P1]

  - Công cụ: Jest, @nestjs/testing
  - Chức năng:
    - Test business logic trong CourseService
    - Test enrollment và progress tracking
    - Test data access trong CourseRepository
    - Test API endpoints cho quản lý khóa học
  - Kỹ thuật tham chiếu: Unit Testing, Integration Testing, Progress Testing

- ⏳ **Công việc 3.1.6**: Viết E2E tests cho chức năng Course [P2]

  - Công cụ: Cypress
  - Chức năng:
    - Test trang quản lý khóa học
    - Test trang học viên và xem bài học
    - Test progress tracking và completion
  - Kỹ thuật tham chiếu: E2E Testing, Media Player Testing

- ⏳ **Công việc 3.1.7**: Tạo tài liệu cho module Course [P1]

  - Công cụ: Markdown, Docusaurus, Mermaid
  - Chức năng:
    - Document Course models và các relationships
    - Viết hướng dẫn quản lý khóa học
    - Tạo tài liệu API endpoints và cách sử dụng
    - Mô tả quy trình học tập và tracking tiến độ
  - Kỹ thuật tham chiếu: Course Management Documentation, Learning Process Documentation

### 3.2. Hệ thống tin nhắn và thông báo

- ⏳ **Công việc 3.2.1**: Thiết kế Schema/Model Message và Notification [P2]

  - Công cụ: Prisma, PostgreSQL
  - Chức năng: Lưu trữ tin nhắn, thông báo
  - Kỹ thuật tham chiếu: Relational Database Design

- ⏳ **Công việc 3.2.2**: Xây dựng API tin nhắn và thông báo [P2]

  - Công cụ: NestJS, Socket.IO
  - Chức năng: Gửi/nhận tin nhắn, thông báo real-time
  - Kỹ thuật tham chiếu: Websockets, Event-driven Architecture

- ⏳ **Công việc 3.2.3**: Xây dựng giao diện tin nhắn [P2]

  - Công cụ: Next.js, React, Socket.IO-client
  - Chức năng: Chat UI, danh sách cuộc trò chuyện
  - Kỹ thuật tham chiếu: Real-time Updates, Chat Interface

- ⏳ **Công việc 3.2.4**: Xây dựng giao diện thông báo [P1]

  - Công cụ: Next.js, React, Socket.IO-client
  - Chức năng: Hiển thị thông báo, đánh dấu đã đọc
  - Kỹ thuật tham chiếu: Toast Notifications, Badge Component

- ⏳ **Công việc 3.2.5**: Viết unit tests và integration tests cho module Message và Notification [P2]

  - Công cụ: Jest, @nestjs/testing, Socket.IO Testing
  - Chức năng:
    - Test real-time communication
    - Test message storage và retrieval
    - Test notification delivery và status updates
  - Kỹ thuật tham chiếu: WebSocket Testing, Real-time Testing

- ⏳ **Công việc 3.2.6**: Tạo tài liệu cho module Message và Notification [P2]

  - Công cụ: Markdown, Docusaurus, Mermaid
  - Chức năng:
    - Document các models Message và Notification
    - Viết hướng dẫn cài đặt và cấu hình WebSockets
    - Tạo tài liệu về luồng thông báo real-time
    - Viết API reference cho service này
  - Kỹ thuật tham chiếu: Real-time Communication Documentation, Notification System Documentation

### 3.3. Phân tích dữ liệu học tập

- ⏳ **Công việc 3.3.1**: Thiết kế Schema/Model Analytics với mô hình kết hợp [P2]

  - Công cụ: MongoDB (dữ liệu thô), PostgreSQL (dữ liệu tổng hợp)
  - Chức năng:
    - Thiết kế Time Series Collections trong MongoDB để lưu trữ dữ liệu học tập chi tiết
    - Thiết kế schema Prisma cho dữ liệu analytics tổng hợp trong PostgreSQL
    - Triển khai cơ chế đồng bộ từ dữ liệu thô sang dữ liệu tổng hợp
  - Kỹ thuật tham chiếu: Time Series Data, ETL Processes, Hybrid Storage

- ⏳ **Công việc 3.3.2**: Xây dựng API phân tích dữ liệu [P2]

  - Công cụ: NestJS, MongoDB Aggregation, Prisma
  - Chức năng:
    - Truy vấn dữ liệu thô từ MongoDB cho phân tích chi tiết
    - Truy vấn dữ liệu tổng hợp từ PostgreSQL cho báo cáo và dashboard
    - Phát triển các API endpoints cho analytics pipeline
  - Kỹ thuật tham chiếu: MongoDB Aggregation Pipeline, SQL Analytics

- ⏳ **Công việc 3.3.3**: Xây dựng giao diện dashboard cho học viên [P1]

  - Công cụ: Next.js, Chart.js/D3.js
  - Chức năng: Biểu đồ tiến độ, điểm số, thời gian học
  - Kỹ thuật tham chiếu: Data Visualization

- ⏳ **Công việc 3.3.4**: Xây dựng giao diện dashboard cho giáo viên [P2]

  - Công cụ: Next.js, Chart.js/D3.js
  - Chức năng: Biểu đồ kết quả lớp, phân tích câu hỏi
  - Kỹ thuật tham chiếu: Advanced Visualizations, Filters

- ⏳ **Công việc 3.3.5**: Viết unit tests và integration tests cho module Analytics [P2]

  - Công cụ: Jest, @nestjs/testing
  - Chức năng:
    - Test aggregation pipelines và complex queries
    - Test data transformation và reporting
    - Test API endpoints cho analytics
  - Kỹ thuật tham chiếu: Analytics Testing, Data Pipeline Testing

- ⏳ **Công việc 3.3.6**: Tạo tài liệu cho module Analytics [P2]

  - Công cụ: Markdown, Docusaurus, Mermaid
  - Chức năng:
    - Document cấu trúc dữ liệu analytics và ETL process
    - Viết hướng dẫn sử dụng API phân tích dữ liệu
    - Tạo tài liệu về các metrics và cách tính toán
    - Mô tả dashboard và cách sử dụng
  - Kỹ thuật tham chiếu: Analytics Documentation, Metrics Definitions, Dashboard Guide
