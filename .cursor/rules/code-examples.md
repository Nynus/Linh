# Mẫu Code Chuẩn

## 1. Ví Dụ về Code Xấu và Cải Thiện

### Không Nên ❌

```typescript
function handleData(data: any) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].status === 'active') {
      if (data[i].type === 'user') {
        result.push({
          id: data[i].id,
          name: data[i].name,
          isActive: true,
        });
      }
    }
  }
  return result;
}
```

### Nên ✅

```typescript
interface User {
  id: string;
  name: string;
  status: 'active' | 'inactive';
  type: 'user' | 'admin';
}

interface ProcessedUser {
  id: string;
  name: string;
  isActive: boolean;
}

function filterActiveUsers(users: User[]): ProcessedUser[] {
  return users
    .filter(user => user.status === 'active' && user.type === 'user')
    .map(({ id, name }) => ({
      id,
      name,
      isActive: true,
    }));
}
```

## 2. Mẫu Xử Lý Lỗi API Frontend

```typescript
const fetchData = async (): Promise<Result<Data, ApiError>> => {
  try {
    const response = await fetch('/api/data');

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      return {
        success: false,
        error: {
          status: response.status,
          message: errorData?.message || 'Lỗi không xác định',
          code: errorData?.code,
        },
      };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: {
        status: 0,
        message: error instanceof Error ? error.message : 'Lỗi kết nối',
        code: 'CONNECTION_ERROR',
      },
    };
  }
};
```

## 3. Mẫu Error Boundary

```tsx
import { ErrorBoundary } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="p-4 border border-red-500 rounded bg-red-50">
    <h2 className="text-lg font-semibold text-red-700">Đã xảy ra lỗi</h2>
    <p className="text-sm text-red-600">{error.message}</p>
    <button
      onClick={resetErrorBoundary}
      className="mt-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
    >
      Thử lại
    </button>
  </div>
);

export const SafeComponent = ({ children }) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
);
```

## 4. Mẫu Exception Filter (NestJS)

```typescript
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const errorResponse = exception.getResponse();

    response.status(status).json({
      success: false,
      error: {
        statusCode: status,
        message:
          typeof errorResponse === 'object' && 'message' in errorResponse
            ? errorResponse.message
            : exception.message,
        timestamp: new Date().toISOString(),
        path: request.url,
      },
    });
  }
}
```

## 5. Mẫu Component Server

```tsx
// Page.tsx
import { Suspense } from 'react';
import DataDisplay from './components/DataDisplay';
import { LoadingSkeleton } from '@/components/ui/loading-skeleton';

export const metadata = {
  title: 'Trang dữ liệu',
  description: 'Hiển thị dữ liệu từ API',
};

export default function DataPage() {
  return (
    <main className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Dữ Liệu</h1>
      <Suspense fallback={<LoadingSkeleton />}>
        <DataDisplay />
      </Suspense>
    </main>
  );
}
```

## 6. Mẫu Component Client

```tsx
// components/Form.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/toast';

// Định nghĩa schema
const formSchema = z.object({
  name: z.string().min(2, 'Tên phải có ít nhất 2 ký tự'),
  email: z.string().email('Email không hợp lệ'),
});

type FormValues = z.infer<typeof formSchema>;

export function UserForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Lỗi khi gửi form');
      }

      toast({
        title: 'Thành công',
        description: 'Đã gửi form thành công',
        variant: 'success',
      });
    } catch (error) {
      toast({
        title: 'Lỗi',
        description: error instanceof Error ? error.message : 'Đã xảy ra lỗi',
        variant: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Tên
        </label>
        <Input id="name" {...register('name')} />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <Input id="email" type="email" {...register('email')} />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Đang gửi...' : 'Gửi'}
      </Button>
    </form>
  );
}
```

## 7. Mẫu Phát Hiện Re-renders

```tsx
import { useEffect, useRef } from 'react';

const useTraceUpdates = (props: Record<string, any>) => {
  const prev = useRef(props);

  useEffect(() => {
    const changedProps = Object.entries(props).reduce(
      (acc, [key, value]) => {
        if (prev.current[key] !== value) {
          acc[key] = {
            from: prev.current[key],
            to: value,
          };
        }
        return acc;
      },
      {} as Record<string, { from: any; to: any }>
    );

    if (Object.keys(changedProps).length > 0) {
      console.log('Changed props:', changedProps);
    }

    prev.current = props;
  });
};
```

## 8. Mẫu Custom Hook

```typescript
// hooks/useOptimisticUpdate.ts
import { useState } from 'react';

interface UseOptimisticUpdateOptions<T> {
  initialData: T[];
  updateFn: (id: string, data: Partial<T>) => Promise<T>;
}

export function useOptimisticUpdate<T extends { id: string }>({
  initialData,
  updateFn,
}: UseOptimisticUpdateOptions<T>) {
  const [data, setData] = useState<T[]>(initialData);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({});

  const update = async (id: string, updateData: Partial<T>) => {
    // Lưu trữ dữ liệu cũ để rollback nếu cần
    const oldData = [...data];

    // Cập nhật UI ngay lập tức (optimistic)
    setData(prev => prev.map(item => (item.id === id ? ({ ...item, ...updateData } as T) : item)));

    // Đánh dấu đang loading
    setIsLoading(prev => ({ ...prev, [id]: true }));

    try {
      // Thực hiện API call
      const updatedItem = await updateFn(id, updateData);

      // Cập nhật dữ liệu với response từ server
      setData(prev => prev.map(item => (item.id === id ? updatedItem : item)));

      setError(null);
      return updatedItem;
    } catch (err) {
      // Rollback nếu lỗi
      setData(oldData);
      const error = err instanceof Error ? err : new Error('Lỗi không xác định');
      setError(error);
      throw error;
    } finally {
      // Bỏ đánh dấu loading
      setIsLoading(prev => ({ ...prev, [id]: false }));
    }
  };

  return {
    data,
    update,
    error,
    isLoading,
    isLoadingById: (id: string) => isLoading[id] || false,
  };
}
```

## 9. Mẫu Controller (NestJS)

```typescript
import { Controller, Get, Post, Body, Param, UseGuards, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponse } from './interfaces/user-response.interface';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Tạo người dùng mới' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Người dùng được tạo thành công.',
    type: UserResponse,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Dữ liệu đầu vào không hợp lệ.',
  })
  async create(@Body() createUserDto: CreateUserDto): Promise<UserResponse> {
    const user = await this.usersService.create(createUserDto);
    return {
      success: true,
      data: user,
    };
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Lấy thông tin người dùng theo ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Lấy thông tin người dùng thành công.',
    type: UserResponse,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Không tìm thấy người dùng.',
  })
  async findOne(@Param('id') id: string): Promise<UserResponse> {
    const user = await this.usersService.findOne(id);
    return {
      success: true,
      data: user,
    };
  }
}
```

## 10. Mẫu Service (NestJS)

```typescript
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hashPassword } from '../common/utils/password.util';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { password, ...userData } = createUserDto;

    // Hash mật khẩu trước khi lưu
    const hashedPassword = await hashPassword(password);

    const user = this.usersRepository.create({
      ...userData,
      password: hashedPassword,
    });

    return this.usersRepository.save(user);
  }

  async findOne(id: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`Không tìm thấy người dùng với ID ${id}`);
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);

    // Nếu có cập nhật mật khẩu
    if (updateUserDto.password) {
      updateUserDto.password = await hashPassword(updateUserDto.password);
    }

    Object.assign(user, updateUserDto);

    return this.usersRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await this.usersRepository.remove(user);
  }
}
```

## 11. Mẫu Repository (Mongoose)

```typescript
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsRepository {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(createProductDto);
    return newProduct.save();
  }

  async findAll(options: {
    category?: string;
    limit?: number;
    skip?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }): Promise<{ items: Product[]; total: number }> {
    const { category, limit = 10, skip = 0, sortBy = 'createdAt', sortOrder = 'desc' } = options;

    const query: any = {};
    if (category) {
      query.category = category;
    }

    const sort: any = {};
    sort[sortBy] = sortOrder === 'asc' ? 1 : -1;

    const [items, total] = await Promise.all([
      this.productModel.find(query).sort(sort).skip(skip).limit(limit).exec(),
      this.productModel.countDocuments(query).exec(),
    ]);

    return { items, total };
  }

  async findById(id: string): Promise<Product | null> {
    if (!Types.ObjectId.isValid(id)) {
      return null;
    }
    return this.productModel.findById(id).exec();
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product | null> {
    if (!Types.ObjectId.isValid(id)) {
      return null;
    }
    return this.productModel.findByIdAndUpdate(id, updateProductDto, { new: true }).exec();
  }

  async remove(id: string): Promise<boolean> {
    if (!Types.ObjectId.isValid(id)) {
      return false;
    }
    const result = await this.productModel.deleteOne({ _id: id }).exec();
    return result.deletedCount === 1;
  }
}
```

## 12. Mẫu Repository (Prisma)

```typescript
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
    include?: Prisma.UserInclude;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy, include } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include,
    });
  }

  async findOne(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
    include?: Prisma.UserInclude
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
      include,
    });
  }

  async update(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }

  async count(where?: Prisma.UserWhereInput): Promise<number> {
    return this.prisma.user.count({
      where,
    });
  }
}
```

## 13. Mẫu Guards (NestJS)

```typescript
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Role } from '../enums/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('Token không được cung cấp');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });

      // Lưu thông tin người dùng vào request
      request['user'] = payload;

      return requiredRoles.some(role => payload.roles?.includes(role));
    } catch {
      throw new UnauthorizedException('Token không hợp lệ hoặc đã hết hạn');
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
```

## 14. Mẫu Middleware (NestJS)

```typescript
import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    const { ip, method, originalUrl } = req;
    const userAgent = req.get('user-agent') || '';
    const startTime = Date.now();

    res.on('finish', () => {
      const { statusCode } = res;
      const contentLength = res.get('content-length') || 0;
      const responseTime = Date.now() - startTime;

      this.logger.log(
        `${method} ${originalUrl} ${statusCode} ${contentLength} - ${responseTime}ms - ${userAgent} ${ip}`
      );
    });

    next();
  }
}
```

## 15. Mẫu Interceptor (NestJS)

```typescript
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
  meta?: Record<string, any>;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    const request = context.switchToHttp().getRequest();
    const { url, method } = request;

    return next.handle().pipe(
      map(data => {
        // Trường hợp data đã được định dạng
        if (data && typeof data === 'object' && 'success' in data) {
          return data;
        }

        // Định dạng lại response
        return {
          success: true,
          data,
          meta: {
            timestamp: new Date().toISOString(),
            path: url,
            method,
          },
        };
      })
    );
  }
}
```

## 16. Mẫu DTO (NestJS)

```typescript
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsOptional,
  MinLength,
  MaxLength,
  Matches,
  IsEnum,
} from 'class-validator';
import { Role } from '../enums/role.enum';

export class CreateUserDto {
  @ApiProperty({
    description: 'Tên đầy đủ của người dùng',
    example: 'Nguyễn Văn A',
  })
  @IsString()
  @MinLength(2, { message: 'Tên phải có ít nhất 2 ký tự' })
  @MaxLength(100, { message: 'Tên không được vượt quá 100 ký tự' })
  fullName: string;

  @ApiProperty({
    description: 'Địa chỉ email của người dùng',
    example: 'nguyenvana@example.com',
  })
  @IsEmail({}, { message: 'Email không hợp lệ' })
  email: string;

  @ApiProperty({
    description: 'Mật khẩu của người dùng',
    example: 'Password123@',
  })
  @IsString()
  @MinLength(8, { message: 'Mật khẩu phải có ít nhất 8 ký tự' })
  @MaxLength(30, { message: 'Mật khẩu không được vượt quá 30 ký tự' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường và 1 số hoặc ký tự đặc biệt',
  })
  password: string;

  @ApiProperty({
    description: 'Số điện thoại của người dùng',
    example: '0912345678',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Matches(/^(0|\+84)[3|5|7|8|9][0-9]{8}$/, {
    message: 'Số điện thoại không hợp lệ',
  })
  phoneNumber?: string;

  @ApiProperty({
    description: 'Vai trò của người dùng',
    enum: Role,
    default: Role.USER,
    required: false,
  })
  @IsOptional()
  @IsEnum(Role, { message: 'Vai trò không hợp lệ' })
  role?: Role;
}
```
