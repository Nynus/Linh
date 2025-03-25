# Pages (Trang) trong NyNus

Thư mục này chứa các tài liệu mô tả chi tiết về các trang trong nền tảng NyNus. Mỗi file sẽ chứa thiết kế chi tiết của một trang cụ thể, bao gồm cấu trúc, thành phần, và prompt chi tiết để tạo ra trang đó.

## Cấu trúc trang trong NyNus

Các trang được chia thành các nhóm chính sau:

1. **Trang người dùng phổ thông**

   - Trang chủ
   - Đăng nhập & Đăng ký
   - Trang khóa học
   - Trang đề thi
   - Trang luyện tập
   - Trang thảo luận
   - Trang cá nhân

2. **Trang admin**

   - Dashboard admin
   - Quản lý người dùng
   - Quản lý câu hỏi
   - Quản lý khóa học
   - Quản lý đề thi
   - Quản lý thảo luận
   - Phân tích dữ liệu

3. **Trang công cụ đặc biệt**
   - Trang bản đồ ID
   - Trang nhập câu hỏi
   - Trang tạo/chỉnh sửa câu hỏi

## Danh sách file tài liệu

- [home.md](./home.md) - Trang chủ
- [auth.md](./auth.md) - Đăng nhập & Đăng ký
- [admin-users.md](./admin-users.md) - Quản lý người dùng
- [admin-questions.md](./admin-questions.md) - Quản lý câu hỏi
- [admin-courses.md](./admin-courses.md) - Quản lý khóa học
- [admin-exams.md](./admin-exams.md) - Quản lý đề thi
- [admin-discussions.md](./admin-discussions.md) - Quản lý thảo luận
- [analytics.md](./analytics.md) - Phân tích dữ liệu
- [exam-detail.md](./exam-detail.md) - Chi tiết đề thi
- [exam-taking.md](./exam-taking.md) - Làm bài thi
- [exam-results.md](./exam-results.md) - Kết quả bài thi
- [library.md](./library.md) - Thư viện
- [map-id.md](./map-id.md) - Bản đồ ID
- [user-profile.md](./user-profile.md) - Hồ sơ người dùng
- [question-edit.md](./question-edit.md) - Tạo/Chỉnh sửa câu hỏi

## Cấu trúc mỗi file tài liệu

Mỗi file tài liệu sẽ có cấu trúc như sau:

````
# Tên trang

## Mô tả

Mô tả ngắn gọn về trang và mục đích của nó

## Đường dẫn

URL của trang

## Chức năng chính

- Chức năng 1
- Chức năng 2
- ...

## Prompt chi tiết

```prompt
Nội dung prompt chi tiết để tạo ra trang
````

## Giao diện

Mô tả chi tiết giao diện của trang, nếu có

## Lưu ý

Các lưu ý quan trọng khi triển khai trang

```

## Sử dụng tài liệu

Các tài liệu này được sử dụng để:
1. Tham khảo khi phát triển giao diện
2. Đảm bảo tính nhất quán giữa các trang
3. Làm cơ sở cho việc tạo ra các mẫu giao diện tương tự
4. Cung cấp prompt chi tiết để tạo ra từng trang cụ thể

Khi xây dựng một trang mới, hãy tham khảo các trang tương tự để đảm bảo tính nhất quán trong thiết kế.
```
