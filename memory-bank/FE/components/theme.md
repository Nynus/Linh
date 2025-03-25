# Theme và Theming System

## Mô tả

Theme và Theming System là nền tảng thiết kế cốt lõi của NyNus, định nghĩa và quản lý tất cả các khía cạnh thị giác của nền tảng theo cách nhất quán và có thể mở rộng. Hệ thống này được xây dựng trên các design tokens có cấu trúc chặt chẽ, biến chúng thành CSS variables và theme configurations sử dụng xuyên suốt ứng dụng. Theming system cho phép NyNus duy trì brand identity mạnh mẽ, đồng thời cung cấp tính linh hoạt để thích ứng với các ngữ cảnh khác nhau như dark mode, contrast cao cho accessibility, và thậm chí là white-labeling cho các đối tác. Được tích hợp với Tailwind CSS và dựa trên cơ chế CSS Variables hiện đại, hệ thống theme của NyNus đảm bảo hiệu suất tốt, khả năng bảo trì cao, và trải nghiệm nhất quán trên các devices, platforms và user preferences khác nhau.

## Loại

- **Design System Foundation** (cấu trúc thiết kế nền tảng cho toàn bộ ứng dụng)
- **Token-based Architecture** (dựa trên design tokens có cấu trúc phân cấp)
- **CSS Variables System** (sử dụng CSS custom properties)
- **Tailwind Integration** (mở rộng và tùy chỉnh Tailwind theme)
- **Runtime Theming** (khả năng thay đổi theme trong runtime)
- **Server & Client Components Compatible** (hoạt động với cả server và client components)
- **Context-aware** (thích ứng với ngữ cảnh như user preferences, device settings)
- **Responsive** (điều chỉnh theo viewport và device characteristics)

## Variants

### Theme Modes

- **Light Mode**: Theme mặc định, tối ưu cho điều kiện ánh sáng bình thường
- **Dark Mode**: Low-light theme tối ưu cho điều kiện ánh sáng thấp và sử dụng ban đêm
- **High Contrast**: Theme với contrast cao hơn cho accessibility
- **Print Mode**: Tối ưu hóa cho in ấn, thường đơn giản hóa và sử dụng ít màu sắc hơn

### Theme Categories

- **Core Theme**: Theme chính của NyNus, phản ánh brand identity
- **Contextual Themes**: Điều chỉnh dựa trên ngữ cảnh sử dụng (learning, assessment, social)
- **Seasonal Themes**: Thay đổi theo mùa hoặc sự kiện đặc biệt
- **Role-based Themes**: Điều chỉnh theo role của người dùng (student, teacher, admin)
- **White-label Themes**: Cho phép đối tác customize theo brand của họ

### Token Categories

- **Colors**: Palette colors, semantic colors, gradient colors
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Margin, padding, gaps, layout spacing
- **Sizing**: Component dimensions, icon sizes, touch targets
- **Borders**: Width, radius, style
- **Shadows**: Box shadows, text shadows, elevation levels
- **Animations**: Durations, easings, transitions
- **Z-indices**: Layer management
- **Opacities**: Transparency levels
- **Breakpoints**: Responsive design thresholds

## Prompt chi tiết

```
Thiết kế một hệ thống Theme và Theming toàn diện và có tính nhất quán cao cho nền tảng học tập NyNus. Hệ thống này sẽ là nền tảng cơ bản cho visual design language của toàn bộ platform, đảm bảo tính nhất quán, khả năng mở rộng, và maintainability dài hạn. System này cần cung cấp cơ chế để định nghĩa, quản lý và áp dụng design decisions một cách hệ thống trên toàn bộ ứng dụng, với performance và accessibility là ưu tiên hàng đầu.

1. Design Token Architecture:
   - Xây dựng hệ thống token phân cấp (primitive, semantic, component-specific)
   - Primitive tokens cho raw values (colors, sizes, spacings)
   - Semantic tokens để map primitives tới use cases (primary, secondary, danger)
   - Component tokens để map semantic tokens tới specific component parts
   - Consistent naming convention cho tất cả tokens
   - Source of truth cho tokens (JSON, TypeScript, hoặc design tool integration)
   - Version control và documentation cho token system
   - Token transformation pipeline để generate CSS variables
   - Type safety cho tokens trong TypeScript
   - Backwards compatibility considerations khi updating tokens

2. Color System:
   - Color palette với primary, secondary, và tertiary colors
   - Neutral palette cho backgrounds, text, và borders
   - Extended palette cho data visualization, charts, và specialized UI
   - Semantic color mapping (success, warning, error, info)
   - Color ramps cho mỗi hue (50-900 scale)
   - Accessible color combinations đáp ứng WCAG 2.1 AA (minimum)
   - Background/foreground combinations với đủ contrast
   - Multi-purpose color tokens (text, border, background, etc.)
   - Gradient definitions và tokens
   - Special color considerations cho interactive elements
   - Hover, focus, và active state color variations
   - Brand color integration

3. Dark Mode Implementation:
   - Tối ưu hóa cho reduced eye strain trong low-light conditions
   - Semantic color mapping logic giữa light và dark
   - Contrast preservation trong dark mode
   - Automated dark mode generation với manual tuning
   - Interaction và focus state adaptation
   - Handling của images và media trong dark mode
   - Background và foreground relationship trong dark mode
   - System preference detection and respect
   - Smooth transitions khi switching modes
   - Persistent user preference storage
   - Opt-in components cho dark mode exemption

4. Accessibility Theming:
   - High contrast mode cho visual impairments
   - Considerations cho color blindness
   - Reduced motion theme cho vestibular disorders
   - Adjustable text size support
   - Keyboard focus indicators enhancement
   - Touch target sizing accommodations
   - Screen reader optimizations
   - Support cho user browser/OS settings
   - Respect cho user's font size settings
   - Situational disabilities considerations
   - Testing framework cho accessibility compliance

5. CSS Variables Implementation:
   - Global CSS variables với semantic naming
   - Scoped variables cho component-specific theming
   - Variable fallbacks để đảm bảo backward compatibility
   - CSS variable nesting và composition
   - Runtime manipulation cho dynamic theming
   - Performance optimization cho CSS variables
   - Server-side vs client-side variable definition
   - Media query integration cho responsive values
   - Layering và inheritance model
   - Computation strategies để minimize redundancy

6. Typography System:
   - Font family selections (primary, secondary, mono)
   - Type scale với consistent progression (8-12 sizes)
   - Font weight system (light, regular, medium, semibold, bold)
   - Line height scale optimized cho readability
   - Letter spacing adjustments cho headings và text
   - Font feature settings (ligatures, numerals, etc.)
   - Responsive typography adjustments
   - Special case typography (code, quotes, captions)
   - Vertical rhythm maintenance
   - Type color hierarchy
   - Font loading strategy
   - Fallback font stacks

7. Spacing & Layout:
   - Spacing scale với consistent progression
   - Space application cho margins, paddings, và gaps
   - Layout grid system integration
   - Component spacing standards
   - Responsive spacing accommodations
   - Negative space tokens
   - Compound spacing với multipliers
   - Vertical rhythm spacing
   - Container và content width constraints
   - Special layout spacing (form fields, lists, etc.)
   - Fixed vs relative spacing considerations
   - Section và page-level spacing

8. Borders, Shadows & Effects:
   - Border width và style tokens
   - Border radius scale
   - Shadow elevation system (multiple levels)
   - Directional shadows
   - Inner/inset shadows
   - Blur và backdrop blur effects
   - Focus ring styling
   - Outline versus border strategies
   - Divider styling
   - Special effects (glow, etc.)
   - Accessible focus indicators
   - Border và shadow dark mode adaptation

9. Animation & Transitions:
   - Duration tokens (instant, quick, moderate, slow)
   - Easing functions và curves
   - Enter/exit animation patterns
   - Transition conventions cho interactive elements
   - Loading state animations
   - Progress indicators
   - Micro-interactions
   - Reduced motion alternatives
   - Animation composition
   - Page transition conventions
   - State change animations
   - Performant animation techniques

10. Tailwind CSS Integration:
    - Extension của Tailwind theme với custom tokens
    - Tailwind plugin development cho custom utilities
    - Custom Tailwind color scale integration
    - Component-friendly class patterns
    - Consistent prefix usage cho custom utilities
    - Server component optimizations
    - JIT mode configuration
    - SafeList management cho dynamic classes
    - Tree-shaking considerations
    - Style extraction optimizations
    - Type safety cho custom utilities
    - Custom variant generation

11. Theme Switching & Customization:
    - User preference controls
    - Theme switching mechanism
    - Persistent storage của theme preferences
    - Multiple theme support architecture
    - Real-time theme preview
    - Transition effects khi switching themes
    - Theme composition từ partials
    - Customization limits và guidelines
    - Role-based theme application
    - Context-specific theme overrides
    - White-labeling capability
    - Theme customization API

12. Tech Stack Integration:
    - NextJS App Router compatibility
    - Server-side theme rendering
    - Client-side hydration considerations
    - React Server Components integration
    - State management cho theme preferences
    - Build process optimization
    - Theme synchronization across tabs/windows
    - Static generation với theme variations
    - CSS-in-JS compatibility
    - Design tool integration
    - Automated testing của theme application
    - Documentation và developer tools

Theme system cho NyNus platform cần đạt được balance giữa flexibility, performance, và maintainability. Nó phải đủ robust để hỗ trợ complex use cases, nhưng vẫn đơn giản để designers và developers có thể work with nó một cách hiệu quả. Hệ thống cần cung cấp đủ constraints để đảm bảo brand consistency, trong khi vẫn cho phép creative flexibility và adaptation để đáp ứng evolving user needs và business requirements. Theme system nên là một living system, có thể evolve over time mà không breaking backwards compatibility hoặc requiring massive rewrites của existing code.
```

## API và Tích hợp

### ThemeProvider

```tsx
// Cung cấp theme context cho toàn bộ ứng dụng
import { ThemeProvider } from '@/components/theme-provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider defaultTheme="light" storageKey="nynus-theme-preference">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### useTheme Hook

```tsx
// Hook để access và control theme trong client components
import { useTheme } from '@/hooks/use-theme';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle theme: {theme}
    </button>
  );
}
```

### Theme Configuration (tailwind.config.js)

```js
// Cấu hình Tailwind CSS với theme tokens
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Semantic colors
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          // ...more shades
          900: 'var(--color-primary-900)',
        },
        // ...more color categories
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--color-text-primary)',
            '--tw-prose-headings': 'var(--color-text-heading)',
            // ...more typography variables
          },
        },
      },
      // ...other token categories
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Custom plugins
  ],
};
```

### CSS Variables

```css
/* Variables cơ bản cho theme */
:root {
  /* Primitive color tokens */
  --color-blue-50: 240 249 255;
  --color-blue-100: 224 242 254;
  /* ...more blue shades */
  --color-blue-900: 23 37 84;

  /* Semantic tokens - Light mode defaults */
  --color-primary-50: var(--color-blue-50);
  --color-primary-100: var(--color-blue-100);
  /* ...more primary shades */
  --color-primary-900: var(--color-blue-900);

  /* Functional tokens */
  --color-background-primary: var(--color-neutral-50);
  --color-text-primary: var(--color-neutral-900);
  --color-text-secondary: var(--color-neutral-700);
  /* ...more functional tokens */

  /* Component tokens */
  --button-primary-bg: var(--color-primary-600);
  --button-primary-text: var(--color-neutral-50);
  /* ...more component tokens */
}

/* Dark mode overrides */
.dark {
  --color-background-primary: var(--color-neutral-900);
  --color-text-primary: var(--color-neutral-50);
  --color-text-secondary: var(--color-neutral-300);
  /* ...more dark mode overrides */
}

/* High contrast overrides */
.high-contrast {
  --color-text-primary: var(--color-neutral-950);
  --color-text-secondary: var(--color-neutral-900);
  /* ...more high contrast overrides */
}

/* Print overrides */
@media print {
  :root {
    --color-background-primary: white;
    --color-text-primary: black;
    /* ...more print overrides */
  }
}
```

### Theme Tokens API

```tsx
// Typed theme tokens để sử dụng trong component code
import { tokens } from '@/lib/theme-tokens';

function Example() {
  return (
    <div
      style={{
        color: tokens.colors.text.primary,
        margin: tokens.spacing[4],
      }}
    >
      Using typed theme tokens
    </div>
  );
}
```

### Theme Utilities

```tsx
// Utilities để làm việc với theme
import { getThemeValue, resolveThemeToken, generateContrastColor } from '@/lib/theme-utils';

// Lấy giá trị của specific token
const primaryColor = getThemeValue('colors.primary.500');

// Resolve nested token references
const buttonColor = resolveThemeToken('button-primary-bg');

// Generate accessible text color dựa trên background
const textColor = generateContrastColor(backgroundColor, 4.5);
```

## Mô tả triển khai

### 1. Design Token Structure

NyNus sử dụng hệ thống token phân cấp 3 tầng:

- **Primitive Tokens**: Raw values như hex colors, pixel values, và font names.
- **Semantic Tokens**: Functional meaning cho primitive values như primary, danger, hoặc heading.
- **Component Tokens**: Specific application của semantic tokens cho component parts như button-primary-background.

Tokens được định nghĩa trong TypeScript source files và được transformed thành CSS variables trong build process. Mỗi token có type definition rõ ràng và documentation, đảm bảo type safety và một nền tảng vững chắc cho IDE auto-completion.

### 2. Color System

Color system dựa trên một primary palette (blue) và một secondary palette (purple), cùng với các neutral tones và semantic colors như success (green), warning (amber), error (red), và info (sky).

Mỗi color có scale 50-900 theo chuẩn Tailwind, với các shades được fine-tuned để đảm bảo WCAG AA compliance cho text khi kết hợp thích hợp. Light mode sử dụng light backgrounds (50-200) với dark text (700-900), trong khi dark mode invert pattern này.

Accessibility được optimized bằng cách manually test và adjust color pairs, đặc biệt là foreground/background combinations và interactive elements.

### 3. Theme Modes Implementation

Theme modes (light, dark, high contrast) được implemented thông qua CSS class trên `<html>` element, trigger các variable overrides. Default theme được set từ server dựa trên `localStorage` hoặc `prefers-color-scheme` media query để tránh flash of incorrect theme.

```tsx
// Server Component để detect initial theme
export function ThemeScript() {
  const script = `
    (function() {
      function getTheme() {
        try {
          return localStorage.getItem('nynus-theme-preference') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        } catch (e) {
          return 'light';
        }
      }
      document.documentElement.classList.add(getTheme());
    })()
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
```

Theme switching xảy ra trong client, thay đổi cả localStorage value và HTML class, triggering các CSS variable overrides.

### 4. Integration với Tailwind CSS

Tailwind được extended với custom theme configuration để map vào CSS variable system. Các token values được injected vào Tailwind theme, cho phép dùng standard Tailwind classes với NyNus token values.

```js
// Ví dụ: Sử dụng token-aware Tailwind classes
function Card() {
  return (
    <div className="bg-background-primary text-text-primary p-4 rounded-lg border border-border-primary">
      <h2 className="text-text-heading text-xl font-semibold">Card Title</h2>
    </div>
  );
}
```

### 5. Server & Client Component Compatibility

Theme system được thiết kế để hoạt động với cả Server và Client Components trong Next.js App Router. Server side sử dụng predefined CSS variables, trong khi client side có thể thay đổi them dynamically.

Với approach này, initial render luôn có định nghĩa theme, và client-side hydration chỉ enhance functionality (như theme switching) mà không gây layout shift.

### 6. Supporting Custom Themes

White-labeling và custom themes được hỗ trợ thông qua theme definition files và runtime CSS variable manipulation. Partners có thể define custom themes mà vẫn sử dụng NyNus's semantic token structure, thay đổi appearance mà không phải edit component code.

```js
// Custom theme definition
const partnerTheme = {
  name: 'partner-brand',
  colors: {
    primary: {
      // Partner brand color palette
      500: '#0055FF',
      // ...more shades
    },
    // ...more color definitions
  },
  // ...other token categories
};
```

## Lưu ý quan trọng

- **Performance**: CSS Variables là efficient nhưng nên được sử dụng có chọn lọc. Nên group related properties và tránh quá nhiều computation trong CSS.

- **Scalability**: Tokens should be fine-grained enough to be flexible, but not so granular that they become unmanageable. Group logically related tokens.

- **Backward Compatibility**: Luôn provide fallback values cho CSS variables để supporting older browsers và safe migration paths khi updating tokens.

- **Code Maintainability**: Use consistent naming patterns cho tokens và document design decisions. Avoid direct hex color references trong component code.

- **Theme Switching**: Tránh layout shift khi switching themes bằng cách đảm bảo space-taking elements (như borders, padding) không drastically change size.

- **Build Optimization**: Optimize theme generation trong build process để reduce runtime overhead. Consider static theme extraction.

- **Browser Support**: Modern browsers support CSS Variables well, nhưng test trong target browsers của bạn. Cân nhắc fallback strategies.

- **Developer Experience**: Provide strong TypeScript typing cho token system để improve autocomplete và type safety. Create theme documentation.

- **Semantic Design**: Design tokens nên reflect purpose (semantic), không chỉ values. E.g., use `--color-text-primary` instead of `--color-dark-gray`.

- **Consistency**: Đảm bảo tất cả components sử dụng theme tokens, tránh hardcoded values. Scan codebase định kỳ cho violations.

- **Future-proofing**: Consider future needs như animation themes, user-customization, seasonal variations khi designing token architecture.

- **Team Communication**: Theme changes có thể ảnh hưởng đến toàn bộ app. Establish clear processes cho theme updates.

- **Contextual Overrides**: Design systems có thể cần variations based on context (e.g., embedded widgets, specialized pages). Plan for context-aware theming.

- **Testing**: Implement visual testing cho theme changes và cross-browser compatibility. Create theme unit tests.

- **Accessibility Validation**: Verify rằng all theme combinations (especially color) meet accessibility standards. Implement automated accessibility testing.

- **Large Applications**: Trong large apps, consider namespacing tokens cho feature areas để avoid conflicts và enable more granular updates.

- **Dark Mode Strategy**: Choose giữa automated dark mode color generation hoặc manually designed dark mode. Automated approaches save time, manual gives better results.

- **Image và Media Handling**: Consider how themed UI interacts với non-themeable content như photos. Implement strategies like overlays hoặc border treatments.

- **Gradients và Complex Colors**: Đơn giản hóa công việc với gradients bằng cách tokenize gradient stops, không phải full gradient definitions.

- **Education**: Create guidelines cho team về cách sử dụng theme system để encourage adoption và consistency.

- **International Considerations**: Một số colors có different cultural meanings. Consider international implications của color choices, đặc biệt cho white-label solutions.
