# Bối cảnh kỹ thuật

## Công nghệ sử dụng

### Backend

#### Node.js và TypeScript

- **Node.js**: v18.0.0 hoặc cao hơn (LTS)
- **TypeScript**: v5.3.0+
- **npm**: v7.24.2 (hạ cấp để tương thích với workspace)

#### Frameworks và Libraries

- **NestJS**: v10.3.0

  - Framework Node.js progressive dựa trên TypeScript, sử dụng kiến trúc module hóa
  - Cung cấp Dependency Injection, Exception filters, Guards, Interceptors
  - Sử dụng để xây dựng API RESTful có cấu trúc rõ ràng và dễ mở rộng

- **Express.js**: v4.18.2
  - Web framework nhẹ và linh hoạt cho Node.js
  - Sử dụng làm nền tảng cơ bản cho NestJS
  - Xử lý HTTP requests, middleware, routes

#### Cơ sở dữ liệu

- **MongoDB**: v6.0+

  - NoSQL database cho lưu trữ dữ liệu phi cấu trúc hoặc bán cấu trúc
  - Mongoose v7.6.3 làm ODM (Object Document Mapper)
  - Lưu trữ dữ liệu câu hỏi, đề thi, khóa học và nội dung tùy chỉnh

- **PostgreSQL**: v14.0+
  - Relational database cho lưu trữ dữ liệu cấu trúc
  - Prisma v5.2.0 làm ORM (Object Relational Mapper)
  - Lưu trữ dữ liệu người dùng, thảo luận, thông báo và quan hệ dữ liệu

#### Authentication & Authorization

- **JWT (JSON Web Tokens)**: v9.0.2
  - Sử dụng cho xác thực stateless
  - Lưu trữ thông tin người dùng trong token được mã hóa
  - Cấu hình với JWT_SECRET và JWT_EXPIRES_IN

#### Validation

- **class-validator**: v0.14.0

  - Validation cho DTO (Data Transfer Objects)
  - Sử dụng decorators để xác thực dữ liệu đầu vào
  - Tích hợp với NestJS Pipes

- **class-transformer**: v0.5.1
  - Chuyển đổi plain objects thành instances của classes
  - Hỗ trợ serialization và deserialization
  - Tích hợp với class-validator

#### Configuration

- **@nestjs/config**: v3.1.1
  - Quản lý cấu hình môi trường (.env)
  - Validation schema với Joi
  - Configuration factory cho từng module

#### Logging và Monitoring

- **Winston**: v3.11.0

  - Logging framework linh hoạt
  - Cấu hình multiple transports (console, file, etc.)
  - Integration với NestJS

- **Prometheus**: v2.49.0

  - Hệ thống thu thập metrics dạng time-series
  - Pull-based metrics collection
  - PromQL (Prometheus Query Language) cho truy vấn metrics
  - Tích hợp với NestJS qua prom-client

- **Grafana**: v10.3.0

  - Nền tảng hiển thị trực quan và theo dõi metrics
  - Dashboard tùy chỉnh cho metrics
  - Alerts dựa trên các điều kiện metrics
  - Data source cho Prometheus

- **prom-client**: v15.1.0
  - Thư viện cho Node.js để thu thập metrics
  - Cung cấp counter, gauge, histogram, summary
  - Default metrics cho Node.js (CPU, memory, etc.)
  - Registry cho custom metrics

### Frontend

#### Next.js

- **Next.js**: v14.0.0+
  - React framework với App Router
  - Server-side rendering (SSR) và static site generation (SSG)
  - API routes
  - Image optimization
  - Font optimization

#### UI

- **Tailwind CSS**: v3.3.0+

  - Utility-first CSS framework
  - JIT (Just-In-Time) compiler
  - Customizable design system
  - Responsive design

- **Radix UI**: v2.0.0

  - Unstyled, accessible components
  - Focus management, keyboard navigation
  - Composable primitives
  - A11y compliant

- **Shadcn/ui**: Custom components
  - Built on top of Radix UI
  - Pre-styled but customizable
  - Copy and paste components
  - Custom extensions:
    - Extended Menu & Dropdown system
    - Advanced Navigation components
    - Context Menu implementations
    - Multi-level dropdown support
    - Rich dropdown with search functionality
    - Comprehensive Search Bar system với multiple variants
    - Full-featured search functionality với voice, filters, và suggestions

#### State Management

- **React Context API**

  - Built-in React state management
  - Provider/Consumer pattern
  - Custom hook wrappers

- **React Query**: v5.0.0
  - Data fetching, caching, and synchronization
  - Server state management
  - Background updates
  - Optimistic updates

#### Form Handling

- **React Hook Form**: v7.45.0

  - Performance focused form library
  - Uncontrolled components
  - Validation integration
  - Minimal re-renders

- **Zod**: v3.22.0
  - TypeScript-first schema validation
  - Integration with React Hook Form
  - Type inference

### DevOps & Tooling

#### Monorepo Management

- **Turborepo**: v2.4.4
  - Monorepo build system
  - Cache build artifacts
  - Parallel execution
  - Task dependencies

#### Code Quality

- **ESLint**: v8.55.0

  - Static code analysis
  - Enforce coding standards
  - TypeScript integration
  - Custom rules

- **Prettier**: v3.1.0
  - Code formatting
  - Integration with ESLint
  - Pre-commit hooks

#### Testing

- **Jest**: v29.7.0

  - JavaScript testing framework
  - Snapshot testing
  - Mocking
  - Code coverage
  - Cấu hình để hỗ trợ ESM modules
  - Tích hợp với TypeScript qua ts-jest

- **Testing Library**: v14.1.0
  - DOM testing utilities
  - User-centric testing
  - Integration with Jest

#### CI/CD và Security Testing

- **GitHub Actions**

  - Tự động hoá quy trình CI/CD
  - Kiểm tra mã nguồn và chạy tests
  - Triển khai tự động khi tests pass
  - Phân chia workflows thành API, Web và Security

- **Security Testing Tools**
  - CodeQL cho phân tích mã nguồn tĩnh (SAST)
  - Snyk cho kiểm tra dependencies
  - Bài kiểm tra bảo mật tùy chỉnh qua Jest
  - Security scanning định kỳ và theo yêu cầu

## Môi trường phát triển

### Yêu cầu

- **OS**: Windows 10/11, macOS 10.15+, or Linux (Ubuntu 20.04+/Debian 11+)
- **CPU**: 2+ cores recommended
- **RAM**: 8GB+ (16GB recommended)
- **Disk**: 10GB+ free space
- **Network**: Stable connection for dependencies

### IDE và Tools

- **VS Code** (recommended)
  - ESLint extension
  - Prettier extension
  - Tailwind CSS IntelliSense
  - TypeScript Vue Plugin
  - MongoDB for VS Code
  - Thunder Client (REST API client)

### Cài đặt môi trường

1. **Node.js**: v18.0.0+ (v22.14.0 hoạt động tốt)
2. **npm**: Hạ cấp xuống v7.24.2
3. **Git**: v2.25.0+
4. **MongoDB**: v6.0+ (v6.6.5 hoạt động tốt)
5. **Turborepo**: v2.4.4

### Cấu hình dự án

1. **Clone repository**:

   ```bash
   git clone https://github.com/Nynus/NyNus.git
   cd NyNus
   ```

2. **Cài đặt dependencies**:

   ```bash
   npm install
   ```

3. **Thiết lập cơ sở dữ liệu**:

   - Chạy MongoDB service
   - Tạo database và user
   - Thiết lập connection string trong `.env`

4. **Khởi động development server**:
   ```bash
   npm run dev
   ```

## Hạn chế kỹ thuật

1. **Cross-database consistency**:

   - Đồng bộ hóa dữ liệu giữa MongoDB và PostgreSQL
   - Cần giải quyết thách thức về eventual consistency
   - Triển khai event system cho data sync

2. **Type safety với MongoDB**:

   - MongoDB không có schema validation mặc định
   - Cần triển khai validation thông qua Mongoose
   - Xử lý compatibility giữa MongoDB ObjectId và các string ID
   - Nhiều interface khác nhau cho cùng một entity (ví dụ VoteInput có nhiều định nghĩa khác nhau)
   - Cần đảm bảo type definitions nhất quán trong toàn bộ dự án

3. **Vấn đề Type Definitions**:

   - Xung đột định nghĩa interface giữa các module (ví dụ: AuthenticatedRequest)
   - Circular imports trong type definitions
   - Không tương thích giữa kiểu dữ liệu từ Express và NestJS
   - Cần đảm bảo type safety khi làm việc với mongoose/MongoDB

4. **Performance với large datasets**:

   - Tối ưu hóa queries cho dữ liệu lớn
   - Triển khai pagination, caching
   - Indexing chiến lược để cải thiện hiệu suất

5. **Authentication và authorization**:

   - Xử lý token expiration
   - Phân quyền phức tạp
   - Cross-service authentication

6. **Deployment và scaling**:
   - Cấu hình CI/CD
   - Multiple environments
   - Containerization với Docker

## Dependencies của dự án

### Backend Dependencies

```json
{
  "dependencies": {
    "@nestjs/common": "^10.3.0",
    "@nestjs/config": "^3.1.1",
    "@nestjs/core": "^10.3.0",
    "@nestjs/mongoose": "^10.0.2",
    "@nestjs/platform-express": "^10.3.0",
    "bcryptjs": "^2.4.3",
    "class-transformer": "^0.5.1",
    "class-validator": "^0.14.0",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^7.6.3",
    "pg": "^8.11.3",
    "prisma": "^5.2.0",
    "winston": "^3.11.0"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/jest": "^29.5.11",
    "@types/node": "^20.10.4",
    "jest": "^29.7.0",
    "ts-jest": "^29.1.1",
    "typescript": "^5.3.3"
  }
}
```

### Frontend Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.48.2",
    "@tanstack/react-query": "^5.8.4",
    "zod": "^3.22.4",
    "tailwindcss": "^3.3.5",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.31"
  },
  "devDependencies": {
    "@types/node": "^20.10.4",
    "@types/react": "^18.2.42",
    "@types/react-dom": "^18.2.17",
    "eslint": "^8.55.0",
    "eslint-config-next": "^14.0.4",
    "typescript": "^5.3.3"
  }
}
```
