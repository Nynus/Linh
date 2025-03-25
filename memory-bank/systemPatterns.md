# Kiến trúc hệ thống và mẫu thiết kế

## Kiến trúc tổng thể

NyNus sử dụng kiến trúc Monorepo với Turborepo, tổ chức theo cấu trúc sau:

## Mẫu thiết kế

### Repository Pattern

NyNus triển khai Repository Pattern để tách biệt logic truy cập dữ liệu khỏi logic nghiệp vụ:

```typescript
// Interface định nghĩa contract
export interface IUserRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(user: CreateUserDto): Promise<User>;
  update(id: string, data: UpdateUserDto): Promise<User | null>;
  delete(id: string): Promise<boolean>;
  // Các phương thức khác
}

// MongoDB implementation
export class MongoUserRepository implements IUserRepository {
  constructor(private readonly userModel: Model<UserDocument>) {}

  async findById(id: string): Promise<User | null> {
    // Implementation
  }

  // Các phương thức khác
}

// PostgreSQL implementation
export class PgUserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<User | null> {
    // Implementation
  }

  // Các phương thức khác
}
```

### Dependency Injection

NyNus sử dụng Dependency Injection thông qua NestJS để tạo code linh hoạt và dễ test:

```typescript
@Module({
  providers: [
    UserService,
    {
      provide: 'IUserRepository',
      useClass: MongoUserRepository,
    },
  ],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}

@Injectable()
export class UserService {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository
  ) {}

  // Business logic
}
```

### Event-driven Architecture

NyNus triển khai Event-driven Architecture để đồng bộ dữ liệu giữa MongoDB và PostgreSQL:

```typescript
export class EventEmitterService {
  private eventEmitter: EventEmitter = new EventEmitter();

  emit(event: EventType, payload: any): void {
    this.eventEmitter.emit(event, payload);
  }

  on(event: EventType, handler: (payload: any) => void): void {
    this.eventEmitter.on(event, handler);
  }
}

export class UserSyncHandler {
  constructor(
    private readonly eventEmitter: EventEmitterService,
    private readonly syncService: SyncService
  ) {
    this.registerHandlers();
  }

  private registerHandlers(): void {
    this.eventEmitter.on(EventType.USER_CREATED, this.handleUserCreated.bind(this));
    // Các event handlers khác
  }

  private async handleUserCreated(payload: any): Promise<void> {
    await this.syncService.syncUserToMongo(payload);
  }
}
```

### DTO Pattern

NyNus sử dụng DTO (Data Transfer Objects) để kiểm soát dữ liệu đầu vào và đầu ra:

```typescript
export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  fullName: string;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const user = await this.userService.createUser(createUserDto);
    return new UserResponseDto(user);
  }
}
```

### Factory Pattern

NyNus sử dụng Factory Pattern để tạo đối tượng phức tạp:

```typescript
export class ExamFactory {
  createStandardExam(options: CreateExamOptions): Exam {
    // Logic tạo đề thi tiêu chuẩn
  }

  createPracticeExam(options: CreateExamOptions): Exam {
    // Logic tạo đề thi luyện tập
  }

  createMockExam(options: CreateExamOptions): Exam {
    // Logic tạo đề thi mô phỏng
  }
}
```

### Strategy Pattern

NyNus sử dụng Strategy Pattern cho các thuật toán có thể thay đổi:

```typescript
export interface RecommendationStrategy {
  recommend(userId: string): Promise<RecommendationResult>;
}

export class ContentBasedRecommendation implements RecommendationStrategy {
  async recommend(userId: string): Promise<RecommendationResult> {
    // Implementation
  }
}

export class CollaborativeFilteringRecommendation implements RecommendationStrategy {
  async recommend(userId: string): Promise<RecommendationResult> {
    // Implementation
  }
}

export class RecommendationService {
  constructor(private strategy: RecommendationStrategy) {}

  setStrategy(strategy: RecommendationStrategy): void {
    this.strategy = strategy;
  }

  async getRecommendations(userId: string): Promise<RecommendationResult> {
    return this.strategy.recommend(userId);
  }
}
```

## Quy tắc và nguyên tắc kiến trúc

1. **SOLID Principles**: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion
2. **Clean Architecture**: Separation of concerns, dependency rules
3. **DRY (Don't Repeat Yourself)**: Tránh lặp lại code
4. **KISS (Keep It Simple, Stupid)**: Giữ code đơn giản, dễ hiểu
5. **YAGNI (You Aren't Gonna Need It)**: Không thêm tính năng cho đến khi thực sự cần
