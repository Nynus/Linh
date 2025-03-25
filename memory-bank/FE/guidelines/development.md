# Hướng dẫn Phát triển Giao diện Chi tiết

Tài liệu này cung cấp các hướng dẫn chi tiết và quy tắc cho việc phát triển giao diện người dùng cho nền tảng NyNus, nhằm đảm bảo tính nhất quán, chất lượng và hiệu quả trong toàn bộ dự án.

## Quy tắc Styling

### Tailwind CSS

- Sử dụng Tailwind CSS cho tất cả styling trên toàn bộ ứng dụng
- Áp dụng utilities theo thứ tự: Layout → Box Model → Typography → Visual → Misc
- Sử dụng plugin `@tailwindcss/forms` cho form styling nhất quán
- Kết hợp với Shadcn UI cho các components phức tạp

### Theme và Variables

- Tuân thủ các theme variables đã định nghĩa trong `tailwind.config.js`
- Màu chính: gradient từ indigo đến purple trên nền tối
- Sử dụng biến CSS cho các giá trị lặp lại nhiều lần
- Không hard-code màu sắc; luôn dùng color tokens

### CSS Module và Custom Styling

- Sử dụng CSS Module cho các component cần styling phức tạp hoặc động
- Đặt tên file CSS theo format: `[ComponentName].module.css`
- Tránh !important và các override phức tạp
- Minimizing styling overrides trong production

### Dark Mode

- Đảm bảo dark mode support cho mọi component
- Sử dụng `dark:` variants của Tailwind
- Kiểm tra contrast ratio cho cả light và dark mode
- Tránh hard-coding colors khi triển khai dark mode

## Cấu trúc Component

### Tổ chức File và Thư mục

- Mỗi component nên có file riêng
- Component phức tạp nên được tổ chức thành thư mục riêng
- Cấu trúc thư mục components theo chức năng hoặc domain
- Export tất cả components từ file index.ts

### Quy ước Component

- Sử dụng cấu trúc rõ ràng: Props interface → component → export
- Với component phức tạp: Sub-components → Main component → exports
- Tách logic phức tạp vào custom hooks
- Sử dụng destructuring cho props

### Server vs Client Components

- Ưu tiên sử dụng Server Components khi có thể
- Sử dụng "use client" directive chỉ khi cần thiết
- Phân tách rõ ràng logic giữa client và server
- Đặt tên file với hậu tố `.client.tsx` và `.server.tsx` khi cần

### TypeScript và Props

- Định nghĩa rõ ràng interfaces cho tất cả props
- Sử dụng thư viện `zod` cho runtime validation
- Cung cấp default values cho optional props
- Document props với JSDoc comments

## Accessibility

### WCAG Guidelines

- Tuân thủ WCAG 2.1 AA standards
- Sử dụng semantic HTML elements
- Cung cấp text alternatives cho non-text content
- Đảm bảo content có thể accessible qua keyboard

### Keyboard Navigation

- Đảm bảo tất cả interactive elements có thể truy cập qua keyboard
- Logical tab order được duy trì
- Focus states rõ ràng và visible
- Implement keyboard shortcuts cho các actions phổ biến

### Screen Reader Support

- Sử dụng ARIA attributes khi cần thiết
- Test với screen readers (NVDA, VoiceOver)
- Cung cấp text descriptions cho các visual elements
- Đảm bảo forms có error messages accessible

### Color và Typography

- Kiểm tra contrast ratio cho text và background (minimum 4.5:1)
- Không sử dụng màu sắc làm phương tiện truyền tải thông tin duy nhất
- Sử dụng font sizes rõ ràng và readable (min 16px cho body text)
- Đảm bảo text có thể resize lên đến 200% mà không mất functionality

## Responsive Design

### Mobile-First Approach

- Thiết kế mobile-first, sau đó mở rộng cho các viewport lớn hơn
- Sử dụng các breakpoint nhất quán: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Tránh horizontal scrolling trên mobile
- Đảm bảo text readable mà không cần zoom

### Layouts và Grids

- Sử dụng Flexbox và CSS Grid cho layouts
- Implement grid systems nhất quán
- Đảm bảo spacing scales theo viewport
- Sử dụng đơn vị tương đối (rem, em) thay vì pixels

### Touch Targets

- Đảm bảo tất cả interactive elements có kích thước phù hợp trên mobile (min 44x44px)
- Cung cấp đủ spacing giữa các touch targets
- Consider thumb zones khi positioning important actions
- Implement touch gestures khi appropriate

### Testing

- Test trên multiple devices và orientations
- Sử dụng Chrome DevTools device emulation
- Test với actual devices khi có thể
- Đảm bảo form inputs hoạt động tốt với virtual keyboards

## Performance

### Code Splitting và Lazy Loading

- Implement code splitting bằng dynamic imports
- Lazy load components không cần thiết ở initial render
- Sử dụng Next.js's image optimization
- Lazy load images và media ngoài viewport

### Bundle Optimization

- Minimize bundle sizes với tree shaking
- Optimize third-party dependencies
- Sử dụng production builds
- Implement request và response compression

### Rendering Optimization

- Minimize re-renders với React.memo, useMemo và useCallback
- Implement virtualization cho large lists
- Avoid layout shifts (CLS)
- Optimize for Core Web Vitals

### Monitoring và Analytics

- Implement performance monitoring
- Track key metrics (FCP, LCP, TTI, CLS)
- Set up error tracking
- Analyze và address performance bottlenecks

## Best Practices

### State Management

- Sử dụng React Context cho global state khi phù hợp
- Prefer component state cho local concerns
- Implement proper state initialization
- Handle loading, error và empty states

### Error Handling

- Implement error boundaries
- Handle API errors gracefully
- Provide helpful error messages
- Implement retry mechanisms khi appropriate

### Testing

- Write unit tests cho business logic
- Test components với React Testing Library
- Implement integration tests cho flows phức tạp
- Set up continuous integration testing

### Documentation

- Document components và their usage
- Maintain up-to-date README files
- Use JSDoc cho function và component documentation
- Create Storybook stories cho visual testing và documentation
