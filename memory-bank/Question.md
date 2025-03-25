# Tài liệu về Câu hỏi (Question) trong dự án NyNus

## Mục lục

1. [Cấu trúc của một câu hỏi](#cấu-trúc-của-một-câu-hỏi)
2. [Models câu hỏi](#models-câu-hỏi)
3. [Cách parser trích xuất câu hỏi](#cách-parser-trích-xuất-câu-hỏi)
4. [QuestionID](#questionid)
5. [Các loại form câu hỏi và cách xử lý](#các-loại-form-câu-hỏi-và-cách-xử-lý)
6. [Quản lý phiên bản và trạng thái câu hỏi](#quản-lý-phiên-bản-và-trạng-thái-câu-hỏi)
7. [Tổ chức câu hỏi trong Exam](#tổ-chức-câu-hỏi-trong-exam)
8. [Hệ thống Feedback câu hỏi](#hệ-thống-feedback-câu-hỏi)
9. [Các mẫu tìm kiếm câu hỏi](#các-mẫu-tìm-kiếm-câu-hỏi)
10. [Các vấn đề thường gặp](#các-vấn-đề-thường-gặp)
11. [Cách dự án hiểu cấu trúc của QuestionID](#cách-dự-án-hiểu-cấu-trúc-của-questionid)
12. [Kết luận](#kết-luận)

## Cấu trúc câu hỏi

Câu hỏi trong hệ thống NyNus có cấu trúc được định nghĩa bởi schema MongoDB với các thành phần chính sau:

### Thành phần cơ bản

- **raw_content**: Nội dung gốc của câu hỏi (định dạng LaTeX)
- **Subcount**: Mã phụ của câu hỏi (prefix và số thứ tự)
- **QuestionID**: Định danh duy nhất của câu hỏi
- **form**: Loại câu hỏi (MultipleChoice, TrueFalse, ShortAnswer, Essay, Matching)
- **content**: Nội dung câu hỏi sau khi đã được xử lý
- **correctAnswer**: Đáp án đúng
- **solutions**: Danh sách các lời giải khác nhau cho câu hỏi. Mỗi câu hỏi có thể có nhiều lời giải khác nhau.
- **sources**: Danh sách các nguồn gốc câu hỏi. Mỗi câu hỏi có thể được lấy từ nhiều nguồn khác nhau.

### Ví dụ về cấu trúc câu hỏi

Dưới đây là một ví dụ về câu hỏi trắc nghiệm trong định dạng LaTeX:

```latex
\begin{ex}[Nguồn: "Đề thi thử THPT QG 2023"][1P1V1-6]
Một vật dao động điều hòa với phương trình x = 5cos(2πt + π/3) (cm). Tốc độ của vật tại thời điểm t = 1/12 (s) là
\choice
{25π cm/s}
{5π cm/s}
{10π cm/s}
{\True 5\sqrt{3}π cm/s}
\loigiai{
Ta có: x = 5cos(2πt + π/3) (cm)
Vận tốc: v = -5.2π.sin(2πt + π/3) = -10π.sin(2πt + π/3) (cm/s)
Tại t = 1/12 (s): v = -10π.sin(2π.1/12 + π/3) = -10π.sin(π/6 + π/3) = -10π.sin(π/2) = -10π (cm/s)
Tốc độ: |v| = 10π (cm/s)
}
\end{ex}
```

Sau khi được xử lý, câu hỏi sẽ có cấu trúc sau trong MongoDB:

```javascript
{
  raw_content: "\\begin{ex}[Nguồn: \"Đề thi thử THPT QG 2023\"][1P1V1-6]...",

  // Thông tin Subcount
  Subcount: {
    prefix: "TL",
    number: "001",
    fullId: "TL.001"
  },

  // Thông tin QuestionID
  QuestionID: {
    format: "ID6",
    fullId: "[1P1V1-6]",
    grade: {
      value: "1",
      description: "Lớp 11"
    },
    subject: {
      value: "P",
      description: "Vật lý"
    },
    chapter: {
      value: "1",
      description: "Dao động cơ"
    },
    level: {
      value: "V",
      description: "Vận dụng"
    },
    lesson: {
      value: "1",
      description: "Dao động điều hòa"
    },
    type: {
      value: "6",
      description: "Tính toán dao động điều hòa"
    }
  },

  form: "MultipleChoice",
  content: "Một vật dao động điều hòa với phương trình x = 5cos(2πt + π/3) (cm). Tốc độ của vật tại thời điểm t = 1/12 (s) là",

  // Đáp án
  correctAnswer: "D",

  // Danh sách lời giải
  solutions: [
    "Ta có: x = 5cos(2πt + π/3) (cm)...",
    "Cách giải khác: Từ phương trình dao động điều hòa..."
  ],

  // Danh sách nguồn
  sources: [
    "Đề thi thử THPT QG 2023",
    "Sách bài tập Vật lý 11 trang 45"
  ],

  // Danh sách các đáp án
  answers: [
    {
      id: "A",
      content: "25π cm/s",
      isCorrect: false
    },
    {
      id: "B",
      content: "5π cm/s",
      isCorrect: false
    },
    {
      id: "C",
      content: "10π cm/s",
      isCorrect: false
    },
    {
      id: "D",
      content: "5\\sqrt{3}π cm/s",
      isCorrect: true
    }
  ],

  // Thông tin hình ảnh
  images: {
    questionImage: null,
    solutionImage: null
  },

  // Tags
  tags: ["dao động điều hòa", "vật lý 11"],

  // Số lần sử dụng
  usageCount: 2,

  // Thông tin người tạo
  creator: {
    id: "user123",
    name: "Nguyễn Văn A"
  },

  // Trạng thái
  status: {
    code: "active",
    lastUpdated: "2023-10-15T08:30:00Z"
  },

  // Lịch sử sử dụng
  usageHistory: [
    {
      examId: "exam001",
      examName: "Đề kiểm tra 15 phút",
      date: "2023-09-10T10:00:00Z",
      questionPosition: 5
    }
  ]
}
```

## Models câu hỏi

### Schema MongoDB

```javascript
const QuestionSchema = new Schema(
  {
    raw_content: { type: String, required: true },
    Subcount: { type: SubcountSchema, required: true },
    QuestionID: { type: QuestionIDSchema, required: true },
    form: { type: String, required: true },
    content: { type: String, required: true },
    correctAnswer: { type: Schema.Types.Mixed, required: true },
    solutions: [{ type: String }], // Danh sách các lời giải
    sources: [{ type: String }], // Danh sách các nguồn
    answers: [QuestionAnswerSchema],
    images: { type: QuestionImagesSchema, default: {} },
    tags: [{ type: String }],
    usageCount: { type: Number, default: 0 },
    creator: { type: QuestionCreatorSchema, default: {} },
    status: { type: QuestionStatusSchema, default: {} },
    examRefs: [{ type: Schema.Types.Mixed }],
    usageHistory: [QuestionUsageHistorySchema],
    feedback: { type: QuestionFeedbackSchema, default: {} },
  },
  { timestamps: true }
);
```

### Schema con

#### SubcountSchema

```javascript
const SubcountSchema = new Schema({
  prefix: { type: String, required: true },
  number: { type: String, required: true },
  fullId: { type: String, required: true, unique: true },
});
```

#### QuestionIDSchema

```javascript
const QuestionIDSchema = new Schema({
  format: { type: String, required: true },
  fullId: { type: String, required: true },
  grade: {
    value: { type: String, required: true },
    description: { type: String },
  },
  subject: {
    value: { type: String, required: true },
    description: { type: String },
  },
  chapter: {
    value: { type: String },
    description: { type: String },
  },
  level: {
    value: { type: String, required: true },
    description: { type: String },
  },
  lesson: {
    value: { type: String },
    description: { type: String },
  },
  type: {
    value: { type: String, required: true },
    description: { type: String },
  },
});
```

#### QuestionAnswerSchema

```javascript
const QuestionAnswerSchema = new Schema({
  id: { type: Schema.Types.Mixed, required: true },
  content: { type: String, required: true },
  isCorrect: { type: Boolean, default: false },
});
```

#### QuestionImagesSchema

```javascript
const QuestionImagesSchema = new Schema({
  questionImage: { type: String, default: null },
  solutionImage: { type: String, default: null },
});
```

## Cách parser trích xuất câu hỏi

Hệ thống sử dụng LaTeXParser để trích xuất thông tin từ nội dung câu hỏi dạng LaTeX. Dưới đây là quy trình xử lý:

### Các bước trích xuất

1. **Tìm các câu hỏi từ nội dung LaTeX** - Sử dụng regex để tìm các câu hỏi trong môi trường `\begin{ex}...\end{ex}`
2. **Phân tích ID và nguồn** - Trích xuất QuestionID và thông tin nguồn
3. **Xử lý hình ảnh và môi trường đặc biệt** - Thay thế các môi trường hình ảnh
4. **Phân loại câu hỏi và trích xuất đáp án** - Xác định loại câu hỏi và lấy đáp án
5. **Trích xuất lời giải** - Lấy nội dung từ môi trường `\loigiai`
6. **Làm sạch nội dung câu hỏi** - Loại bỏ các thẻ LaTeX không cần thiết

### Module trích xuất dấu ngoặc

Một trong những thách thức lớn khi xử lý cú pháp LaTeX là trích xuất chính xác nội dung bên trong các cặp dấu ngoặc. Module `BracketExtractor` được phát triển đặc biệt để giải quyết vấn đề này:

```typescript
class BracketExtractor {
  /**
   * Trích xuất nội dung bên trong cặp ngoặc nhọn đầu tiên từ một chuỗi
   * @param content Chuỗi cần trích xuất
   * @param startIndex Vị trí bắt đầu tìm kiếm (mặc định là 0)
   * @returns Object chứa nội dung trích xuất và vị trí kết thúc, hoặc null nếu không tìm thấy
   */
  static extractFirstCurlyBrackets(
    content: string,
    startIndex = 0
  ): { content: string; endIndex: number } | null {
    // Tìm vị trí mở ngoặc đầu tiên
    const openIndex = content.indexOf('{', startIndex);
    if (openIndex === -1) return null;

    let nestedLevel = 1;
    let currentIndex = openIndex + 1;

    // Duyệt qua chuỗi để tìm ngoặc đóng tương ứng
    while (currentIndex < content.length && nestedLevel > 0) {
      const char = content[currentIndex];

      if (char === '{') {
        nestedLevel++;
      } else if (char === '}') {
        nestedLevel--;
      }

      currentIndex++;
    }

    // Kiểm tra xem đã tìm thấy ngoặc đóng chưa
    if (nestedLevel !== 0) {
      console.warn('Không tìm thấy ngoặc đóng tương ứng');
      return null;
    }

    // Trích xuất nội dung (không bao gồm dấu ngoặc)
    const extractedContent = content.substring(openIndex + 1, currentIndex - 1);

    return {
      content: extractedContent,
      endIndex: currentIndex,
    };
  }

  /**
   * Trích xuất tất cả nội dung bên trong các cặp ngoặc nhọn từ một chuỗi
   * @param content Chuỗi cần trích xuất
   * @returns Mảng các chuỗi đã trích xuất
   */
  static extractAllCurlyBrackets(content: string): string[] {
    const results: string[] = [];
    let currentIndex = 0;
    let extraction = this.extractFirstCurlyBrackets(content, currentIndex);

    while (extraction !== null) {
      results.push(extraction.content);
      currentIndex = extraction.endIndex;
      extraction = this.extractFirstCurlyBrackets(content, currentIndex);
    }

    return results;
  }

  /**
   * Trích xuất nội dung bên trong cặp ngoặc vuông đầu tiên
   * @param content Chuỗi cần trích xuất
   * @param startIndex Vị trí bắt đầu tìm kiếm (mặc định là 0)
   * @returns Object chứa nội dung trích xuất và vị trí kết thúc, hoặc null nếu không tìm thấy
   */
  static extractFirstSquareBrackets(
    content: string,
    startIndex = 0
  ): { content: string; endIndex: number } | null {
    const openIndex = content.indexOf('[', startIndex);
    if (openIndex === -1) return null;

    let nestedLevel = 1;
    let currentIndex = openIndex + 1;

    while (currentIndex < content.length && nestedLevel > 0) {
      const char = content[currentIndex];

      if (char === '[') {
        nestedLevel++;
      } else if (char === ']') {
        nestedLevel--;
      }

      currentIndex++;
    }

    if (nestedLevel !== 0) {
      console.warn('Không tìm thấy ngoặc vuông đóng tương ứng');
      return null;
    }

    const extractedContent = content.substring(openIndex + 1, currentIndex - 1);

    return {
      content: extractedContent,
      endIndex: currentIndex,
    };
  }

  /**
   * Trích xuất nội dung bên trong cặp dấu ngoặc tròn đầu tiên
   * @param content Chuỗi cần trích xuất
   * @param startIndex Vị trí bắt đầu tìm kiếm (mặc định là 0)
   * @returns Object chứa nội dung trích xuất và vị trí kết thúc, hoặc null nếu không tìm thấy
   */
  static extractFirstParentheses(
    content: string,
    startIndex = 0
  ): { content: string; endIndex: number } | null {
    const openIndex = content.indexOf('(', startIndex);
    if (openIndex === -1) return null;

    let nestedLevel = 1;
    let currentIndex = openIndex + 1;

    while (currentIndex < content.length && nestedLevel > 0) {
      const char = content[currentIndex];

      if (char === '(') {
        nestedLevel++;
      } else if (char === ')') {
        nestedLevel--;
      }

      currentIndex++;
    }

    if (nestedLevel !== 0) {
      console.warn('Không tìm thấy ngoặc tròn đóng tương ứng');
      return null;
    }

    const extractedContent = content.substring(openIndex + 1, currentIndex - 1);

    return {
      content: extractedContent,
      endIndex: currentIndex,
    };
  }

  /**
   * Trích xuất nội dung bên trong cặp dấu ngoặc cho một môi trường LaTeX cụ thể
   * @param content Chuỗi cần trích xuất
   * @param environment Tên môi trường LaTeX
   * @returns Nội dung đã trích xuất hoặc null nếu không tìm thấy
   */
  static extractEnvironmentContent(content: string, environment: string): string | null {
    const startTag = `\\begin{${environment}}`;
    const endTag = `\\end{${environment}}`;

    const startPos = content.indexOf(startTag);
    if (startPos === -1) return null;

    const startContentPos = startPos + startTag.length;
    const endPos = content.indexOf(endTag, startContentPos);
    if (endPos === -1) return null;

    return content.substring(startContentPos, endPos).trim();
  }
}
```

Module này được sử dụng rộng rãi trong parser để:

1. **Trích xuất nội dung trong môi trường `ex`**:

   ```typescript
   const exContent = BracketExtractor.extractEnvironmentContent(rawContent, 'ex');
   ```

2. **Trích xuất đáp án trong môi trường `choice`**:

   ```typescript
   const answers = BracketExtractor.extractAllCurlyBrackets(choiceContent);
   ```

3. **Trích xuất QuestionID**:

   ```typescript
   const idMatch = raw_content.match(/\[(.*?)\]/);
   if (idMatch) {
     const questionId = idMatch[1];
     // Xử lý tiếp...
   }
   ```

4. **Trích xuất lời giải**:
   ```typescript
   const solutionContent = BracketExtractor.extractFirstCurlyBrackets(content, solutionStartPos);
   ```

Việc sử dụng module này đảm bảo rằng nội dung được trích xuất chính xác ngay cả khi có các cấu trúc lồng nhau phức tạp trong LaTeX, điều rất phổ biến trong các câu hỏi toán học với nhiều công thức và biểu thức.

### Code trích xuất câu hỏi

```typescript
static parseQuestion(raw_content: string): Question | null {
  try {
    // Bước 1: Phân tích ID và nguồn
    const idMatch = raw_content.match(ID_PATTERN);
    const sourceMatches = Array.from(raw_content.matchAll(SOURCE_PATTERN));

    // Trích xuất QuestionID
    let questionId = null;
    if (idMatch && idMatch[1]) {
      questionId = this.parseQuestionId(idMatch[1]);
    }

    // Trích xuất Subcount
    let subcount = null;
    for (const pattern of SUBCOUNT_PATTERNS) {
      const subcountMatch = raw_content.match(pattern);
      if (subcountMatch && subcountMatch[1] && subcountMatch[2]) {
        subcount = {
          prefix: subcountMatch[1],
          number: subcountMatch[2],
          fullId: `${subcountMatch[1]}.${subcountMatch[2]}`
        };
        break;
      }
    }

    // Trích xuất danh sách nguồn
    const sources = [];
    if (sourceMatches.length > 0) {
      for (const match of sourceMatches) {
        if (match[1] || match[2]) {
          sources.push(match[1] || match[2]);
        }
      }
    }

    // Bước 2: Xử lý nội dung - Tìm nội dung bên trong \begin{ex}...\end{ex}
    const startTag = '\\begin{ex}';
    const endTag = '\\end{ex}';

    const startPos = raw_content.indexOf(startTag) + startTag.length;
    const endPos = raw_content.lastIndexOf(endTag);

    if (startPos === -1 || endPos === -1 || startPos >= endPos) {
      console.error('Invalid question format');
      return null;
    }

    const innerContent = raw_content.substring(startPos, endPos).trim();

    // Bước 3: Xử lý hình ảnh và loại bỏ môi trường đặc biệt
    let contentWithoutImages = innerContent;

    // Loại bỏ các môi trường hình ảnh
    for (const pattern of IMAGE_ENVIRONMENTS) {
      contentWithoutImages = contentWithoutImages.replace(new RegExp(pattern, 'g'), '');
    }

    // Tìm tất cả các lời giải
    const solutionMatches = Array.from(contentWithoutImages.matchAll(new RegExp(SOLUTION_PATTERN, 'g')));
    const solutions = [];

    let contentWithoutSolution = contentWithoutImages;

    if (solutionMatches.length > 0) {
      // Trích xuất tất cả lời giải
      for (const match of solutionMatches) {
        const solution = this.extractSolution(match[0]);
        if (solution) {
          solutions.push(solution);
        }
      }

      // Loại bỏ tất cả lời giải khỏi nội dung
      contentWithoutSolution = contentWithoutImages;
      for (const match of solutionMatches) {
        contentWithoutSolution = contentWithoutSolution.replace(match[0], '');
      }
    }

    // Bước 4: Trích xuất đáp án từ nội dung đã xử lý
    const choiceMatch = contentWithoutSolution.match(/\\choice(?:\[[0-9]\])?|\\choiceTF(?:\[[t]\])?|\\shortans(?:\[[a-z]+\])?/);
    const choicePos = choiceMatch && choiceMatch.index !== undefined ? choiceMatch.index : -1;

    let questionContent = contentWithoutSolution;
    let answerContent = '';

    if (choicePos !== -1) {
      questionContent = contentWithoutSolution.substring(0, choicePos).trim();
      answerContent = contentWithoutSolution.substring(choicePos);
    }

    // Phân loại câu hỏi và trích xuất đáp án
    const [questionType, answers, correctAnswers] = this.identifyQuestionType(contentWithoutSolution);

    // Làm sạch nội dung câu hỏi
    const finalContent = questionContent
      .replace(/\s+/g, ' ')
      .trim();

    // Tạo đối tượng Question
    const mappedType = questionType as keyof typeof QUESTION_TYPE_MAP;
    const question: Question = {
      raw_content,
      type: QUESTION_TYPE_MAP[mappedType] as any,
      content: finalContent,
      correct_answer: correctAnswers,
    }

    if (questionId) {
      question.question_id = questionId
    }

    if (subcount) {
      question.subcount = subcount
    }

    if (sources.length > 0) {
      question.sources = sources
    }

    if (solutions.length > 0) {
      question.solutions = solutions
    }

    if (answers && answers.length > 0) {
      question.answers = answers
    }

    return question

  } catch (error) {
    console.error("Error parsing question:", error)
    return null
  }
}
```

### Ví dụ trích xuất

```javascript
// Phân tích nội dung câu hỏi
const rawQuestionContent = `\\begin{ex}[Nguồn: \"Đề thi thử THPT QG 2023\"][1P1V1-6]
Một vật dao động điều hòa với phương trình x = 5cos(2πt + π/3) (cm). Tốc độ của vật tại thời điểm t = 1/12 (s) là
\\choice
{25π cm/s}
{5π cm/s}
{10π cm/s}
{\\True 5\\sqrt{3}π cm/s}
\\loigiai{
Ta có: x = 5cos(2πt + π/3) (cm)
Vận tốc: v = -5.2π.sin(2πt + π/3) = -10π.sin(2πt + π/3) (cm/s)
Tại t = 1/12 (s): v = -10π.sin(2π.1/12 + π/3) = -10π.sin(π/6 + π/3) = -10π.sin(π/2) = -10π (cm/s)
Tốc độ: |v| = 10π (cm/s)
}
\\end{ex}`;

// Trích xuất câu hỏi
const questionData = LaTeXParser.parseQuestion(rawQuestionContent);

console.log(questionData);
// Output sẽ trả về đối tượng Question với đầy đủ thông tin
```

## QuestionID

### Cấu trúc QuestionID

QuestionID là định danh duy nhất cho mỗi câu hỏi, được xây dựng theo một trong hai định dạng:

1. **ID5**: `[grade subject chapter level lesson]`
2. **ID6**: `[grade subject chapter level lesson - type]`

**Lưu ý quan trọng:** QuestionID không yêu cầu phải có dấu `%` đứng trước. Cú pháp chấp nhận cả hai dạng `[1P1V1-6]` và `%[1P1V1-6]`.

Với:

- **grade**: Khối lớp (0 = Lớp 10, 1 = Lớp 11, 2 = Lớp 12, 3 = Đại học)
- **subject**: Môn học (P = Vật lý, M = Toán, C = Hóa học, ...)
- **chapter**: Chương học
- **level**: Mức độ (N = Nhận biết, H = Hiểu, V = Vận dụng, C = Vận dụng cao)
- **lesson**: Bài học trong chương
- **type**: Dạng bài (chỉ có trong ID6)

### Cách xác định QuestionID

Hệ thống cung cấp các hàm để tạo và phân tích QuestionID:

#### Tạo QuestionID

```typescript
function createQuestionID(params: QuestionIDParams): string {
  const { grade, subject, chapter, level, lesson, type } = params;

  // Kiểm tra tính hợp lệ của các tham số
  if (!grade || !subject || !chapter || !level || !lesson) {
    throw new Error('Missing required parameters');
  }

  // ID5: %[grade subject chapter level lesson]
  if (!type) {
    return `%[${grade} ${subject} ${chapter} ${level} ${lesson}]`;
  }

  // ID6: %[grade subject chapter level lesson - type]
  return `%[${grade} ${subject} ${chapter} ${level} ${lesson} - ${type}]`;
}
```

#### Phân tích QuestionID

```typescript
function parseQuestionID(id: string): { format: string; params: QuestionIDParams } | null {
  // Regex cho ID5: %[grade subject chapter level lesson]
  const id5Pattern = /%\[([0-9]) ([A-Z]) ([0-9A-Z]+) ([A-Z]) ([0-9A-Z]+)\]/;

  // Regex cho ID6: %[grade subject chapter level lesson - type]
  const id6Pattern = /%\[([0-9]) ([A-Z]) ([0-9A-Z]+) ([A-Z]) ([0-9A-Z]+) - ([0-9A-Z]+)\]/;

  // Kiểm tra ID6 trước vì nó cụ thể hơn
  const id6Match = id.match(id6Pattern);
  if (id6Match) {
    return {
      format: 'ID6',
      params: {
        grade: id6Match[1],
        subject: id6Match[2],
        chapter: id6Match[3],
        level: id6Match[4],
        lesson: id6Match[5],
        type: id6Match[6],
      },
    };
  }

  // Kiểm tra ID5
  const id5Match = id.match(id5Pattern);
  if (id5Match) {
    return {
      format: 'ID5',
      params: {
        grade: id5Match[1],
        subject: id5Match[2],
        chapter: id5Match[3],
        level: id5Match[4],
        lesson: id5Match[5],
      },
    };
  }

  return null;
}
```

### Ví dụ về tạo và phân tích QuestionID

```javascript
// Tạo ID5
const id5 = createQuestionID({
  grade: '0', // Lớp 10
  subject: 'P', // Vật lý
  chapter: '1', // Chương 1
  level: 'N', // Nhận biết
  lesson: '1', // Bài 1
});
console.log('ID5:', id5); // [0 P 1 N 1]

// Tạo ID6
const id6 = createQuestionID({
  grade: '0', // Lớp 10
  subject: 'P', // Vật lý
  chapter: '1', // Chương 1
  level: 'N', // Nhận biết
  lesson: '1', // Bài 1
  type: '2', // Dạng 2
});
console.log('ID6:', id6); // [0 P 1 N 1 - 2]

// Phân tích QuestionID (có hoặc không có dấu %)
const id = '[1 P 1 V 1 - 6]';
const parsedID = parseQuestionID(id);
console.log('Parsed ID:', parsedID);
// Output:
// {
//   format: 'ID6',
//   params: {
//     grade: '1',
//     subject: 'P',
//     chapter: '1',
//     level: 'V',
//     lesson: '1',
//     type: '6'
//   }
// }

// Tạo QuestionID object cho model
const questionIDObject = createQuestionIDObject(parsedID.params, {
  grade: 'Lớp 11',
  subject: 'Vật lý',
  chapter: 'Dao động cơ',
  level: 'Vận dụng',
  lesson: 'Dao động điều hòa',
  type: 'Tính toán dao động điều hòa',
});

console.log('QuestionID object:', questionIDObject);
// Output:
// {
//   "format": "ID6",
//   "fullId": "[1 P 1 V 1 - 6]",
//   "grade": {
//     "value": "1",
//     "description": "Lớp 11"
//   },
//   "subject": {
//     "value": "P",
//     "description": "Vật lý"
//   },
//   "chapter": {
//     "value": "1",
//     "description": "Dao động cơ"
//   },
//   "level": {
//     "value": "V",
//     "description": "Vận dụng"
//   },
//   "lesson": {
//     "value": "1",
//     "description": "Dao động điều hòa"
//   },
//   "type": {
//     "value": "6",
//     "description": "Tính toán dao động điều hòa"
//   }
// }
```

### Cách tham chiếu QuestionID

QuestionID được tham chiếu trong nhiều thành phần của hệ thống:

1. **Trong câu hỏi LaTeX**: Sử dụng cú pháp `[grade subject chapter level lesson - type]` (không bắt buộc phải có dấu `%` đứng trước)
2. **Trong database**: Được lưu trữ dưới dạng đối tượng QuestionID với các trường con
3. **Trong API**: Được sử dụng như một tham số để tìm kiếm và lọc câu hỏi
4. **Trong giao diện người dùng**: Hiển thị thông tin đầy đủ với các mô tả

QuestionID là cách để hệ thống phân loại và tổ chức câu hỏi theo cấu trúc phân cấp, giúp dễ dàng tìm kiếm và quản lý ngân hàng câu hỏi.

## Các mẫu tìm kiếm câu hỏi

NyNus cung cấp nhiều cách để tìm kiếm và lọc câu hỏi từ ngân hàng dữ liệu. Dưới đây là các mẫu tìm kiếm phổ biến:

### Tìm kiếm theo QuestionID

```javascript
// Tìm câu hỏi theo QuestionID.fullId cụ thể
const questions = await Question.find({ 'QuestionID.fullId': '1M01C01A1L01' });

// Tìm câu hỏi theo cấp độ
const questions = await Question.find({ 'QuestionID.level': 'A1' });

// Tìm câu hỏi theo môn học và chương
const questions = await Question.find({
  'QuestionID.subject': 'M01',
  'QuestionID.chapter': 'C01',
});
```

### Tìm kiếm theo nội dung

```javascript
// Tìm câu hỏi theo từ khóa trong nội dung
const questions = await Question.find({
  $or: [
    { content: { $regex: 'định lý Pytago', $options: 'i' } },
    { raw_content: { $regex: 'định lý Pytago', $options: 'i' } },
  ],
});

// Tìm câu hỏi chứa hình ảnh
const questions = await Question.find({
  'images.0': { $exists: true },
});
```

### Tìm kiếm theo tags

```javascript
// Tìm câu hỏi có tag cụ thể
const questions = await Question.find({
  tags: 'Hình học',
});

// Tìm câu hỏi có nhiều tag
const questions = await Question.find({
  tags: { $all: ['Hình học', 'Nâng cao'] },
});
```

### Tìm kiếm theo loại câu hỏi

```javascript
// Tìm câu hỏi trắc nghiệm
const questions = await Question.find({
  form: 'MultipleChoice',
});

// Tìm câu hỏi đúng/sai
const questions = await Question.find({
  form: 'TrueFalse',
});
```

### Tìm kiếm theo trạng thái và thời gian

```javascript
// Tìm câu hỏi đang hoạt động
const questions = await Question.find({
  status: 'Active',
});

// Tìm câu hỏi được tạo trong tuần trước
const oneWeekAgo = new Date();
oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

const questions = await Question.find({
  createdAt: { $gte: oneWeekAgo },
});
```

### Tìm kiếm kết hợp

```javascript
// Tìm câu hỏi trắc nghiệm về Toán học, có độ khó A2, đang hoạt động
const questions = await Question.find({
  form: 'MultipleChoice',
  'QuestionID.subject': 'M01',
  'QuestionID.level': 'A2',
  status: 'Active',
});

// Tìm câu hỏi chưa được sử dụng hoặc sử dụng ít hơn 3 lần
const questions = await Question.find({
  $or: [{ usageCount: { $exists: false } }, { usageCount: { $lt: 3 } }],
});
```

### Tìm kiếm nâng cao với aggregation

```javascript
// Tìm câu hỏi và nhóm theo chương
const questions = await Question.aggregate([
  { $match: { 'QuestionID.subject': 'M01' } },
  {
    $group: {
      _id: '$QuestionID.chapter',
      count: { $sum: 1 },
      questions: { $push: '$$ROOT' },
    },
  },
  { $sort: { _id: 1 } },
]);

// Tìm câu hỏi có phản hồi tốt nhất
const questions = await Question.aggregate([
  {
    $lookup: {
      from: 'questionfeedbacks',
      localField: '_id',
      foreignField: 'questionId',
      as: 'feedbacks',
    },
  },
  {
    $addFields: {
      averageRating: { $avg: '$feedbacks.rating' },
    },
  },
  { $match: { averageRating: { $gte: 4 } } },
  { $sort: { averageRating: -1 } },
]);
```

## Các vấn đề thường gặp

Trong quá trình xử lý câu hỏi, có một số vấn đề thường gặp và cách giải quyết:

### 1. Vấn đề với định dạng LaTeX

**Vấn đề**: Người dùng nhập LaTeX không chuẩn hoặc thiếu các thẻ bắt buộc.

**Giải pháp**:

- Kiểm tra tính hợp lệ của LaTeX trước khi xử lý
- Tự động sửa lỗi cú pháp phổ biến
- Thông báo lỗi cụ thể cho người dùng

```javascript
function validateLatex(latexString) {
  // Kiểm tra các thẻ bắt buộc
  const requiredTags = ['\\begin{ex}', '\\end{ex}'];
  for (const tag of requiredTags) {
    if (!latexString.includes(tag)) {
      throw new Error(`Thiếu thẻ bắt buộc: ${tag}`);
    }
  }

  // Kiểm tra cặp ngoặc
  let braceCount = 0;
  for (const char of latexString) {
    if (char === '{') braceCount++;
    if (char === '}') braceCount--;
    if (braceCount < 0) {
      throw new Error('Lỗi cặp ngoặc: có ngoặc đóng dư');
    }
  }

  if (braceCount !== 0) {
    throw new Error('Lỗi cặp ngoặc: thiếu ngoặc đóng');
  }

  return true;
}
```

### 2. Xử lý QuestionID không hợp lệ

**Vấn đề**: QuestionID không đúng định dạng hoặc không tồn tại trong Map ID.

**Giải pháp**:

- Kiểm tra định dạng với regex
- Xác thực mã tham chiếu với Map ID
- Tạo ID tạm thời nếu cần thiết

```javascript
function validateQuestionID(id, mapID) {
  // Kiểm tra định dạng
  const formatValid =
    /^%\[([0-9]) ([A-Z]) ([0-9A-Z]+) ([A-Z]) ([0-9A-Z]+)( - ([0-9A-Z]+))?\]$/.test(id);
  if (!formatValid) {
    return {
      valid: false,
      error: 'Định dạng ID không hợp lệ',
    };
  }

  // Parse ID
  const parsedID = parseQuestionID(id);
  if (!parsedID) {
    return {
      valid: false,
      error: 'Không thể phân tích ID',
    };
  }

  // Xác thực với Map ID
  const params = parsedID.params;
  for (const [key, value] of Object.entries(params)) {
    if (!isValidInMap(key, value, mapID)) {
      return {
        valid: false,
        error: `Mã ${key}: ${value} không tồn tại trong Map ID`,
      };
    }
  }

  return { valid: true };
}
```

### 3. Xử lý hình ảnh trong câu hỏi

**Vấn đề**: Hình ảnh không hiển thị, sai định dạng hoặc quá lớn.

**Giải pháp**:

- Xác thực hình ảnh trước khi lưu
- Tối ưu hóa kích thước và định dạng
- Lưu trữ dự phòng (fallback) cho hình ảnh

```javascript
async function processQuestionImages(question) {
  if (!question.images || question.images.length === 0) {
    return question;
  }

  const processedImages = [];

  for (const image of question.images) {
    try {
      // Kiểm tra và tối ưu hóa hình ảnh
      const optimizedImage = await optimizeImage(image.url, {
        maxWidth: 800,
        maxHeight: 600,
        quality: 85,
        format: 'webp',
      });

      processedImages.push({
        ...image,
        optimizedUrl: optimizedImage.url,
        width: optimizedImage.width,
        height: optimizedImage.height,
        size: optimizedImage.size,
      });
    } catch (error) {
      console.error(`Lỗi xử lý hình ảnh: ${error.message}`);
      // Thêm hình ảnh gốc với cờ báo lỗi
      processedImages.push({
        ...image,
        processingError: error.message,
      });
    }
  }

  question.images = processedImages;
  return question;
}
```

### 4. Xử lý đáp án không rõ ràng

**Vấn đề**: Đáp án không được đánh dấu rõ ràng hoặc có nhiều đáp án đúng.

**Giải pháp**:

- Kiểm tra và xác thực đáp án
- Hỗ trợ nhiều cách đánh dấu đáp án
- Cảnh báo khi phát hiện vấn đề

```javascript
function validateAnswers(question) {
  const { form, answers } = question;

  // Kiểm tra số lượng đáp án
  if (!answers || answers.length === 0) {
    return {
      valid: false,
      error: 'Câu hỏi không có đáp án',
    };
  }

  // Kiểm tra đáp án dựa trên form
  switch (form) {
    case 'MultipleChoice':
      // Đảm bảo có đúng một đáp án đúng
      const correctCount = answers.filter(a => a.isCorrect).length;
      if (correctCount !== 1) {
        return {
          valid: false,
          error: `Câu hỏi trắc nghiệm phải có đúng 1 đáp án đúng, hiện có ${correctCount}`,
        };
      }
      break;

    case 'TrueFalse':
      // Đảm bảo mỗi đáp án đều có trạng thái đúng/sai
      for (const answer of answers) {
        if (answer.isCorrect === undefined) {
          return {
            valid: false,
            error: 'Câu hỏi Đúng/Sai phải xác định rõ trạng thái cho mỗi đáp án',
          };
        }
      }
      break;

    case 'ShortAnswer':
      // Đảm bảo có đáp án đúng
      if (!question.correctAnswer) {
        return {
          valid: false,
          error: 'Câu hỏi trả lời ngắn phải có đáp án đúng',
        };
      }
      break;

    // Các trường hợp khác...
  }

  return { valid: true };
}
```

### 5. Xử lý nội dung Markdown/HTML trong câu hỏi

**Vấn đề**: LaTeX chứa Markdown hoặc HTML không an toàn.

**Giải pháp**:

- Quét và làm sạch nội dung
- Chuyển đổi an toàn giữa các định dạng
- Xác thực nội dung trước khi hiển thị

```javascript
function sanitizeQuestionContent(content) {
  // Loại bỏ các script và các thẻ nguy hiểm
  let sanitized = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  // Loại bỏ các thuộc tính nguy hiểm (onclick, onerror, ...)
  sanitized = sanitized.replace(/\s+on\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]*)/gi, '');

  // Xử lý các thẻ iframe, object, embed
  sanitized = sanitized.replace(/<(iframe|object|embed)\b[^>]*>/gi, '');

  return sanitized;
}
```

### 6. Hiệu suất với dữ liệu lớn

**Vấn đề**: Xử lý chậm khi có nhiều câu hỏi hoặc câu hỏi phức tạp.

**Giải pháp**:

- Phân trang và tải dần
- Lập chỉ mục MongoDB hiệu quả
- Cache kết quả tìm kiếm phổ biến

**Ví dụ chỉ mục MongoDB**:

```javascript
// Tạo chỉ mục cho các trường tìm kiếm phổ biến
db.questions.createIndex({ 'QuestionID.fullId': 1 });
db.questions.createIndex({ 'QuestionID.subject': 1, 'QuestionID.chapter': 1 });
db.questions.createIndex({ form: 1 });
db.questions.createIndex({ 'status.code': 1 });
db.questions.createIndex({ tags: 1 });
db.questions.createIndex({ createdAt: 1 });

// Chỉ mục văn bản cho tìm kiếm nội dung
db.questions.createIndex(
  {
    content: 'text',
    raw_content: 'text',
  },
  {
    weights: {
      content: 10,
      raw_content: 5,
    },
    name: 'content_text_index',
  }
);
```

## Kết luận

Tài liệu này đã mô tả chi tiết về câu hỏi trong dự án NyNus, bao gồm:

1. **Cấu trúc câu hỏi**: Schema đầy đủ với các trường chính như QuestionID, content, form, và answers.

2. **Loại câu hỏi**: Năm loại form câu hỏi (MultipleChoice, TrueFalse, ShortAnswer, Essay, Matching) với cách xử lý và lưu trữ riêng biệt.

3. **Quản lý trạng thái**: Vòng đời câu hỏi từ Draft, Review, Active, đến Archived và Deleted.

4. **Tích hợp với đề thi**: Cơ chế tham chiếu và theo dõi việc sử dụng câu hỏi trong đề thi.

5. **Feedback**: Hệ thống thu thập và xử lý phản hồi để cải thiện chất lượng câu hỏi.

6. **Tìm kiếm**: Các mẫu tìm kiếm câu hỏi đa dạng theo nhiều tiêu chí.

7. **Xử lý vấn đề**: Các vấn đề thường gặp khi xử lý câu hỏi và giải pháp tương ứng.

8. **Hiểu QuestionID**: Cách dự án giải mã và hiểu cấu trúc phức tạp của QuestionID.

Tài liệu này sẽ được cập nhật định kỳ khi có thay đổi về cấu trúc hoặc quy trình xử lý câu hỏi trong dự án.

## Cách dự án hiểu cấu trúc của QuestionID

Dự án hiện tại đã xây dựng một hệ thống phức tạp để hiểu và xử lý QuestionID thông qua việc kết hợp nhiều cơ chế:

### 1. File Map ID.tex

Hệ thống sử dụng file `Map ID.tex` làm nguồn dữ liệu chính để giải mã ý nghĩa của các giá trị trong QuestionID. File này chứa thông tin phân cấp đầy đủ về:

- Các mã lớp (grade)
- Mã môn học (subject)
- Mã chương (chapter)
- Mã mức độ (level)
- Mã bài học (lesson)
- Mã dạng bài (type)

File `Map ID.tex` được tổ chức theo cấu trúc phân cấp với định dạng cụ thể:

```
-[0] Lớp 10
----[P] 10-NGÂN HÀNG CHÍNH
-------[1] Mệnh đề và tập hợp
----------[1] Mệnh đề
-------------[1] Xác định mệnh đề, mệnh đề chứa biến
```

Trong ví dụ trên:

- `-[0]` - Lớp 10 (cấp độ 1, grade)
- `----[P]` - Môn NGÂN HÀNG CHÍNH (cấp độ 4, subject)
- `-------[1]` - Chương Mệnh đề và tập hợp (cấp độ 7, chapter)
- `----------[1]` - Bài Mệnh đề (cấp độ 10, lesson)
- `-------------[1]` - Dạng Xác định mệnh đề, mệnh đề chứa biến (cấp độ 13, type)

### 2. Module parse-map-id

Dự án có module chuyên biệt `parse-map-id.js` để đọc và xử lý file `Map ID.tex`:

```typescript
function parseMapIDFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    // Khởi tạo các mapping rỗng
    const mapping = {
      grade: [],
      subject: [],
      chapter: [],
      level: [],
      lesson: [],
      type: [],
    };

    // Lấy mapping cho level (mức độ)
    const levelLines = lines.filter(line => line.match(/^\[.\] .+/) && !line.startsWith('%'));
    mapping.level = levelLines.map(line => {
      const match = line.match(/\[(.)]\s+(.+)/);
      if (match) {
        const [, code, description] = match;
        return { code, description, level: 0 };
      }
      return { code: '?', description: 'Unknown', level: 0 };
    });

    // Parse các phần khác của file
    let currentSection = null;
    let stackItems = [];

    lines.forEach(line => {
      // Xử lý các cấp độ header
      // Nhận diện tùy theo độ dài của dấu gạch ngang
      const levelMatch = line.match(/^(-+)\[(.+?)\]\s*(.*?)$/);

      if (levelMatch && currentSection) {
        const [, dashes, code, description] = levelMatch;
        const level = dashes.length;
        const newItem = {
          code,
          description,
          level,
          children: [],
        };

        // Xây dựng cấu trúc phân cấp dựa trên mức độ
        // Thuật toán này duy trì cấu trúc cây
        // để mỗi phần tử đều được gắn vào parent phù hợp

        // Kết quả cuối cùng là mapping object với cấu trúc phân cấp đầy đủ
      }
    });

    return mapping;
  } catch (error) {
    console.error('Error parsing Map ID.tex:', error);
    return {};
  }
}
```

### 3. Cách xác định và giải mã QuestionID

Khi một QuestionID (ví dụ: `[1 P 1 V 1 - 2]`) được nhận, hệ thống sẽ:

1. **Parse thành các thành phần**

```typescript
function parseQuestionID(id: string) {
  // Xóa dấu % nếu có
  const cleanId = id.startsWith('%') ? id.substring(1) : id;

  // Regex cho ID5: [grade subject chapter level lesson]
  const id5Pattern = /\[([0-9]) ([A-Z]) ([0-9A-Z]+) ([A-Z]) ([0-9A-Z]+)\]/;

  // Regex cho ID6: [grade subject chapter level lesson - type]
  const id6Pattern = /\[([0-9]) ([A-Z]) ([0-9A-Z]+) ([A-Z]) ([0-9A-Z]+) - ([0-9A-Z]+)\]/;

  // Kiểm tra ID6 trước vì nó cụ thể hơn
  const id6Match = cleanId.match(id6Pattern);
  if (id6Match) {
    return {
      format: 'ID6',
      params: {
        grade: id6Match[1],
        subject: id6Match[2],
        chapter: id6Match[3],
        level: id6Match[4],
        lesson: id6Match[5],
        type: id6Match[6],
      },
    };
  }

  // Kiểm tra ID5
  const id5Match = cleanId.match(id5Pattern);
  if (id5Match) {
    return {
      format: 'ID5',
      params: {
        grade: id5Match[1],
        subject: id5Match[2],
        chapter: id5Match[3],
        level: id5Match[4],
        lesson: id5Match[5],
      },
    };
  }

  return null;
}
```

2. **Tìm mô tả từ mapping**

```typescript
function getDescriptionsFromMapping(params, mapping) {
  const result = {};

  const findDescription = (items, code) => {
    if (!items) return undefined;
    for (const item of items) {
      if (item.code === code) {
        return item.description;
      }
      if (item.children) {
        const found = findDescription(item.children, code);
        if (found) return found;
      }
    }
    return undefined;
  };

  // Lấy descriptions cho từng tham số
  if (mapping.grade) {
    result.grade = findDescription(mapping.grade, params.grade) || 'Lớp';
  }
  if (mapping.subject) {
    result.subject = findDescription(mapping.subject, params.subject) || 'Môn';
  }
  // Tiếp tục với các tham số khác...

  return result;
}
```

3. **Tạo đối tượng QuestionID đầy đủ**

```typescript
function createQuestionIDObject(params, descriptions = {}) {
  const { grade, subject, chapter, level, lesson, type } = params;
  const fullId = createQuestionID(params);
  const format = type ? 'ID6' : 'ID5';

  return {
    format,
    fullId,
    grade: {
      value: grade,
      description: descriptions.grade || 'Lớp',
    },
    subject: {
      value: subject,
      description: descriptions.subject || 'Môn',
    },
    // Các trường còn lại...
  };
}
```

### 4. Hiển thị QuestionID cho người dùng

Để người dùng dễ hiểu, dự án cung cấp hàm `formatQuestionID` để hiển thị ID với mô tả đầy đủ:

```typescript
export function formatQuestionID(
  mapID: MapIDMap | null,
  questionID: {
    grade?: { value: string };
    subject?: { value: string };
    // Các trường khác...
  }
): string {
  if (!mapID) return '';

  const parts = [];

  if (questionID.grade?.value) {
    parts.push(`Lớp: ${getDescriptionFromMapID(mapID, 'grade', questionID.grade.value)}`);
  }

  if (questionID.subject?.value) {
    parts.push(`Môn: ${getDescriptionFromMapID(mapID, 'subject', questionID.subject.value)}`);
  }

  // Thêm các thành phần khác...

  return parts.join(' | ');
}
```

### 5. Ví dụ giải mã QuestionID

Khi gặp QuestionID `[1 P 1 V 1 - 2]`, hệ thống sẽ giải mã thành:

```javascript
{
  "format": "ID6",
  "fullId": "[1 P 1 V 1 - 2]",
  "grade": {
    "value": "1",
    "description": "Lớp 11"
  },
  "subject": {
    "value": "P",
    "description": "Vật lý"
  },
  "chapter": {
    "value": "1",
    "description": "Dao động cơ"
  },
  "level": {
    "value": "V",
    "description": "Vận dụng"
  },
  "lesson": {
    "value": "1",
    "description": "Dao động điều hòa"
  },
  "type": {
    "value": "2",
    "description": "Dao động tắt dần, dao động cưỡng bức"
  }
}
```

Khi hiển thị cho người dùng, nó sẽ trở thành:

```
Lớp: Lớp 11 | Môn: Vật lý | Chương: Dao động cơ | Mức độ: Vận dụng | Bài: Dao động điều hòa | Dạng: Dao động tắt dần, dao động cưỡng bức
```

Cơ chế này cho phép hệ thống hiểu rõ về cấu trúc của từng câu hỏi, giúp phân loại, tìm kiếm và hiển thị thông tin câu hỏi một cách thông minh và đầy đủ.

## Các Pattern của câu hỏi

Dưới đây là các pattern được sử dụng để định nghĩa và xử lý câu hỏi trong hệ thống NyNus:

### Pattern cho QuestionID

```javascript
// Pattern cho ID5: [grade subject chapter level lesson]
const ID5_PATTERN = /\[([0-9]) ([A-Z]) ([0-9A-Z]+) ([A-Z]) ([0-9A-Z]+)\]/;

// Pattern cho ID6: [grade subject chapter level lesson - type]
const ID6_PATTERN = /\[([0-9]) ([A-Z]) ([0-9A-Z]+) ([A-Z]) ([0-9A-Z]+) - ([0-9A-Z]+)\]/;

// Pattern cũng hỗ trợ có dấu % ở đầu
const ID5_PATTERN_WITH_PERCENT = /%\[([0-9]) ([A-Z]) ([0-9A-Z]+) ([A-Z]) ([0-9A-Z]+)\]/;
const ID6_PATTERN_WITH_PERCENT =
  /%\[([0-9]) ([A-Z]) ([0-9A-Z]+) ([A-Z]) ([0-9A-Z]+) - ([0-9A-Z]+)\]/;

// Pattern tổng hợp
const ID_PATTERN = /(?:%?)(\[[0-9] [A-Z] [0-9A-Z]+ [A-Z] [0-9A-Z]+(?:(?: - )(?:[0-9A-Z]+))?\])/;
```

### Pattern cho Subcount

```javascript
// Pattern cho Subcount
const SUBCOUNT_PATTERNS = [
  // Mẫu không có dấu %: [TL.001]
  /\[([A-Z]+)\.([0-9]+)\]/,

  // Mẫu có dấu %: %[TL.001]
  /%\[([A-Z]+)\.([0-9]+)\]/,
];
```

### Pattern cho nguồn

```javascript
// Pattern cho nguồn
const SOURCE_PATTERN = /\[Nguồn: "(.*?)"\]|\\source\{(.*?)\}/g;
```

### Pattern cho môi trường câu hỏi

```javascript
// Pattern cho môi trường câu hỏi
const EX_START_PATTERN = /\\begin\{ex\}/;
const EX_END_PATTERN = /\\end\{ex\}/;

// Pattern cho các loại câu hỏi
const CHOICE_PATTERN = /\\choice(?:\[[0-9]\])?/;
const CHOICE_TF_PATTERN = /\\choiceTF(?:\[[t]\])?/;
const SHORT_ANSWER_PATTERN = /\\shortans(?:\[[a-z]+\])?/;
```

### Pattern cho đáp án

```javascript
// Pattern cho đáp án đúng
const TRUE_ANSWER_PATTERN = /\\True\s+(.*?)(?:\}|$)/;

// Pattern cho đáp án
const ANSWER_PATTERN = /\{(.*?)\}/g;
```

### Pattern cho lời giải

```javascript
// Pattern cho lời giải
const SOLUTION_PATTERN = /\\loigiai\{([\s\S]*?)\}/g;
```

### Pattern cho hình ảnh

```javascript
// Pattern cho môi trường hình ảnh
const IMAGE_ENVIRONMENTS = [
  /\\begin\{figure\}[\s\S]*?\\end\{figure\}/g,
  /\\includegraphics(?:\[.*?\])?\{.*?\}/g,
  /\\begin\{tikzpicture\}[\s\S]*?\\end\{tikzpicture\}/g,
];
```

### Các loại câu hỏi và mã định danh

```javascript
// Mapping loại câu hỏi
const QUESTION_TYPE_MAP = {
  MultipleChoice: 'MC',
  TrueFalse: 'TF',
  ShortAnswer: 'SA',
  Essay: 'ES',
  Matching: 'MA',
};

// Mapping ngược
const QUESTION_TYPE_MAP_REVERSE = {
  MC: 'MultipleChoice',
  TF: 'TrueFalse',
  SA: 'ShortAnswer',
  ES: 'Essay',
  MA: 'Matching',
};
```

### Ví dụ về việc sử dụng các pattern

#### 1. Trích xuất QuestionID

```javascript
function extractQuestionID(raw_content) {
  const match = raw_content.match(ID_PATTERN);
  if (match && match[1]) {
    // Xóa dấu % nếu có
    const id = match[1].startsWith('%') ? match[1].substring(1) : match[1];
    return id;
  }
  return null;
}

// Ví dụ:
// extractQuestionID("\\begin{ex}[1P1V1-6]") => "[1P1V1-6]"
// extractQuestionID("\\begin{ex}%[1P1V1-6]") => "[1P1V1-6]"
```

#### 2. Trích xuất danh sách nguồn

```javascript
function extractSources(raw_content) {
  const sources = [];
  const matches = Array.from(raw_content.matchAll(SOURCE_PATTERN));

  if (matches.length > 0) {
    for (const match of matches) {
      if (match[1] || match[2]) {
        sources.push(match[1] || match[2]);
      }
    }
  }

  return sources;
}

// Ví dụ:
// extractSources("\\begin{ex}[Nguồn: \"Đề thi thử THPT QG 2023\"][1P1V1-6]") => ["Đề thi thử THPT QG 2023"]
// extractSources("\\begin{ex}\\source{Đề thi thử THPT QG 2023}[1P1V1-6]") => ["Đề thi thử THPT QG 2023"]
```

#### 3. Trích xuất các lời giải

```javascript
function extractSolutions(content) {
  const solutions = [];
  const matches = Array.from(content.matchAll(SOLUTION_PATTERN));

  if (matches.length > 0) {
    for (const match of matches) {
      if (match[1]) {
        solutions.push(match[1].trim());
      }
    }
  }

  return solutions;
}

// Ví dụ:
// extractSolutions("\\loigiai{Giải 1}\\loigiai{Giải 2}") => ["Giải 1", "Giải 2"]
```

#### 4. Trích xuất các đáp án

```javascript
function extractAnswers(content) {
  const answers = [];
  const matches = Array.from(content.matchAll(ANSWER_PATTERN));

  if (matches.length > 0) {
    let id = 'A';
    for (const match of matches) {
      const isCorrect = match[1].includes('\\True');
      const answerContent = match[1].replace('\\True', '').trim();

      answers.push({
        id: id,
        content: answerContent,
        isCorrect: isCorrect,
      });

      id = String.fromCharCode(id.charCodeAt(0) + 1);
    }
  }

  return answers;
}

// Ví dụ:
// extractAnswers("\\choice{A}{\\True B}{C}") => [
//   {id: "A", content: "A", isCorrect: false},
//   {id: "B", content: "B", isCorrect: true},
//   {id: "C", content: "C", isCorrect: false}
// ]
```

### Cách nhận diện loại câu hỏi

```javascript
function identifyQuestionType(content) {
  if (content.includes('\\choice')) {
    return 'MultipleChoice';
  } else if (content.includes('\\choiceTF')) {
    return 'TrueFalse';
  } else if (content.includes('\\shortans')) {
    return 'ShortAnswer';
  } else if (content.includes('\\begin{matching}')) {
    return 'Matching';
  } else {
    return 'Essay';
  }
}

// Ví dụ:
// identifyQuestionType("\\choice{A}{B}{C}") => "MultipleChoice"
// identifyQuestionType("\\choiceTF") => "TrueFalse"
```

### Ví dụ về câu hỏi trọn vẹn

#### Câu hỏi trắc nghiệm

```latex
\begin{ex}[Nguồn: "Đề thi thử THPT QG 2023"][1P1V1-6]
Một vật dao động điều hòa với phương trình x = 5cos(2πt + π/3) (cm). Tốc độ của vật tại thời điểm t = 1/12 (s) là
\choice
{25π cm/s}
{5π cm/s}
{10π cm/s}
{\True 5\sqrt{3}π cm/s}
\loigiai{
Ta có: x = 5cos(2πt + π/3) (cm)
Vận tốc: v = -5.2π.sin(2πt + π/3) = -10π.sin(2πt + π/3) (cm/s)
Tại t = 1/12 (s): v = -10π.sin(2π.1/12 + π/3) = -10π.sin(π/6 + π/3) = -10π.sin(π/2) = -10π (cm/s)
Tốc độ: |v| = 10π (cm/s)
}
\end{ex}
```

#### Câu hỏi đúng/sai

```latex
\begin{ex}[Nguồn: "Bộ đề luyện thi THPT QG 2024"][2P2H3-1]
Một vật dao động điều hòa thì li độ và vận tốc của vật luôn biến thiên cùng pha nhau.
\choiceTF
{25π cm/s}
{\True 5π cm/s}
{10π cm/s}
{\True 5\sqrt{3}π cm/s}
\loigiai{
Vận tốc của vật dao động điều hòa luôn sớm pha π/2 so với li độ.
Vì vậy, li độ và vận tốc biến thiên lệch pha nhau, không cùng pha.
}
\end{ex}
```

#### Câu hỏi trả lời ngắn

```latex
\begin{ex}[Nguồn: "Sgk Vật lý 11"][1P1V2-3]
Một vật dao động điều hòa với phương trình x = 5cos(2πt + π/3) (cm). Tính biên độ dao động.
\shortans[5]
\loigiai{
Biên độ dao động chính là hệ số của hàm cos: A = 5 (cm)
}
\end{ex}
```

## Kết luận

Tài liệu này đã mô tả chi tiết về câu hỏi trong dự án NyNus, bao gồm:

1. **Cấu trúc câu hỏi**: Schema đầy đủ với các trường chính như QuestionID, content, form, và answers.

2. **Loại câu hỏi**: Năm loại form câu hỏi (MultipleChoice, TrueFalse, ShortAnswer, Essay, Matching) với cách xử lý và lưu trữ riêng biệt.

3. **Quản lý trạng thái**: Vòng đời câu hỏi từ Draft, Review, Active, đến Archived và Deleted.

4. **Tích hợp với đề thi**: Cơ chế tham chiếu và theo dõi việc sử dụng câu hỏi trong đề thi.

5. **Feedback**: Hệ thống thu thập và xử lý phản hồi để cải thiện chất lượng câu hỏi.

6. **Tìm kiếm**: Các mẫu tìm kiếm câu hỏi đa dạng theo nhiều tiêu chí.

7. **Xử lý vấn đề**: Các vấn đề thường gặp khi xử lý câu hỏi và giải pháp tương ứng.

8. **Hiểu QuestionID**: Cách dự án giải mã và hiểu cấu trúc phức tạp của QuestionID.

Tài liệu này sẽ được cập nhật định kỳ khi có thay đổi về cấu trúc hoặc quy trình xử lý câu hỏi trong dự án.

## Cách dự án hiểu cấu trúc của QuestionID

Dự án hiện tại đã xây dựng một hệ thống phức tạp để hiểu và xử lý QuestionID thông qua việc kết hợp nhiều cơ chế:

### 1. File Map ID.tex

Hệ thống sử dụng file `Map ID.tex` làm nguồn dữ liệu chính để giải mã ý nghĩa của các giá trị trong QuestionID. File này chứa thông tin phân cấp đầy đủ về:

- Các mã lớp (grade)
- Mã môn học (subject)
- Mã chương (chapter)
- Mã mức độ (level)
- Mã bài học (lesson)
- Mã dạng bài (type)

File `Map ID.tex` được tổ chức theo cấu trúc phân cấp với định dạng cụ thể:

```
-[0] Lớp 10
----[P] 10-NGÂN HÀNG CHÍNH
-------[1] Mệnh đề và tập hợp
----------[1] Mệnh đề
-------------[1] Xác định mệnh đề, mệnh đề chứa biến
```

Trong ví dụ trên:

- `-[0]` - Lớp 10 (cấp độ 1, grade)
- `----[P]` - Môn NGÂN HÀNG CHÍNH (cấp độ 4, subject)
- `-------[1]` - Chương Mệnh đề và tập hợp (cấp độ 7, chapter)
- `----------[1]` - Bài Mệnh đề (cấp độ 10, lesson)
- `-------------[1]` - Dạng Xác định mệnh đề, mệnh đề chứa biến (cấp độ 13, type)

### 2. Module parse-map-id

Dự án có module chuyên biệt `parse-map-id.js` để đọc và xử lý file `Map ID.tex`:

```typescript
function parseMapIDFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    // Khởi tạo các mapping rỗng
    const mapping = {
      grade: [],
      subject: [],
      chapter: [],
      level: [],
      lesson: [],
      type: [],
    };

    // Lấy mapping cho level (mức độ)
    const levelLines = lines.filter(line => line.match(/^\[.\] .+/) && !line.startsWith('%'));
    mapping.level = levelLines.map(line => {
      const match = line.match(/\[(.)]\s+(.+)/);
      if (match) {
        const [, code, description] = match;
        return { code, description, level: 0 };
      }
      return { code: '?', description: 'Unknown', level: 0 };
    });

    // Parse các phần khác của file
    let currentSection = null;
    let stackItems = [];

    lines.forEach(line => {
      // Xử lý các cấp độ header
      // Nhận diện tùy theo độ dài của dấu gạch ngang
      const levelMatch = line.match(/^(-+)\[(.+?)\]\s*(.*?)$/);

      if (levelMatch && currentSection) {
        const [, dashes, code, description] = levelMatch;
        const level = dashes.length;
        const newItem = {
          code,
          description,
          level,
          children: [],
        };

        // Xây dựng cấu trúc phân cấp dựa trên mức độ
        // Thuật toán này duy trì cấu trúc cây
        // để mỗi phần tử đều được gắn vào parent phù hợp

        // Kết quả cuối cùng là mapping object với cấu trúc phân cấp đầy đủ
      }
    });

    return mapping;
  } catch (error) {
    console.error('Error parsing Map ID.tex:', error);
    return {};
  }
}
```

### 3. Cách xác định và giải mã QuestionID

Khi một QuestionID (ví dụ: `[1 P 1 V 1 - 2]`) được nhận, hệ thống sẽ:

1. **Parse thành các thành phần**

```typescript
function parseQuestionID(id: string) {
  // Xóa dấu % nếu có
  const cleanId = id.startsWith('%') ? id.substring(1) : id;

  // Regex cho ID5: [grade subject chapter level lesson]
  const id5Pattern = /\[([0-9]) ([A-Z]) ([0-9A-Z]+) ([A-Z]) ([0-9A-Z]+)\]/;

  // Regex cho ID6: [grade subject chapter level lesson - type]
  const id6Pattern = /\[([0-9]) ([A-Z]) ([0-9A-Z]+) ([A-Z]) ([0-9A-Z]+) - ([0-9A-Z]+)\]/;

  // Kiểm tra ID6 trước vì nó cụ thể hơn
  const id6Match = cleanId.match(id6Pattern);
  if (id6Match) {
    return {
      format: 'ID6',
      params: {
        grade: id6Match[1],
        subject: id6Match[2],
        chapter: id6Match[3],
        level: id6Match[4],
        lesson: id6Match[5],
        type: id6Match[6],
      },
    };
  }

  // Kiểm tra ID5
  const id5Match = cleanId.match(id5Pattern);
  if (id5Match) {
    return {
      format: 'ID5',
      params: {
        grade: id5Match[1],
        subject: id5Match[2],
        chapter: id5Match[3],
        level: id5Match[4],
        lesson: id5Match[5],
      },
    };
  }

  return null;
}
```

2. **Tìm mô tả từ mapping**

```typescript
function getDescriptionsFromMapping(params, mapping) {
  const result = {};

  const findDescription = (items, code) => {
    if (!items) return undefined;
    for (const item of items) {
      if (item.code === code) {
        return item.description;
      }
      if (item.children) {
        const found = findDescription(item.children, code);
        if (found) return found;
      }
    }
    return undefined;
  };

  // Lấy descriptions cho từng tham số
  if (mapping.grade) {
    result.grade = findDescription(mapping.grade, params.grade) || 'Lớp';
  }
  if (mapping.subject) {
    result.subject = findDescription(mapping.subject, params.subject) || 'Môn';
  }
  // Tiếp tục với các tham số khác...

  return result;
}
```

3. **Tạo đối tượng QuestionID đầy đủ**

```typescript
function createQuestionIDObject(params, descriptions = {}) {
  const { grade, subject, chapter, level, lesson, type } = params;
  const fullId = createQuestionID(params);
  const format = type ? 'ID6' : 'ID5';

  return {
    format,
    fullId,
    grade: {
      value: grade,
      description: descriptions.grade || 'Lớp',
    },
    subject: {
      value: subject,
      description: descriptions.subject || 'Môn',
    },
    // Các trường còn lại...
  };
}
```

### 4. Hiển thị QuestionID cho người dùng

Để người dùng dễ hiểu, dự án cung cấp hàm `formatQuestionID` để hiển thị ID với mô tả đầy đủ:

```typescript
export function formatQuestionID(
  mapID: MapIDMap | null,
  questionID: {
    grade?: { value: string };
    subject?: { value: string };
    // Các trường khác...
  }
): string {
  if (!mapID) return '';

  const parts = [];

  if (questionID.grade?.value) {
    parts.push(`Lớp: ${getDescriptionFromMapID(mapID, 'grade', questionID.grade.value)}`);
  }

  if (questionID.subject?.value) {
    parts.push(`Môn: ${getDescriptionFromMapID(mapID, 'subject', questionID.subject.value)}`);
  }

  // Thêm các thành phần khác...

  return parts.join(' | ');
}
```

### 5. Ví dụ giải mã QuestionID

Khi gặp QuestionID `[1 P 1 V 1 - 2]`, hệ thống sẽ giải mã thành:

```javascript
{
  "format": "ID6",
  "fullId": "[1 P 1 V 1 - 2]",
  "grade": {
    "value": "1",
    "description": "Lớp 11"
  },
  "subject": {
    "value": "P",
    "description": "Vật lý"
  },
  "chapter": {
    "value": "1",
    "description": "Dao động cơ"
  },
  "level": {
    "value": "V",
    "description": "Vận dụng"
  },
  "lesson": {
    "value": "1",
    "description": "Dao động điều hòa"
  },
  "type": {
    "value": "2",
    "description": "Dao động tắt dần, dao động cưỡng bức"
  }
}
```

Khi hiển thị cho người dùng, nó sẽ trở thành:

```
Lớp: Lớp 11 | Môn: Vật lý | Chương: Dao động cơ | Mức độ: Vận dụng | Bài: Dao động điều hòa | Dạng: Dao động tắt dần, dao động cưỡng bức
```

Cơ chế này cho phép hệ thống hiểu rõ về cấu trúc của từng câu hỏi, giúp phân loại, tìm kiếm và hiển thị thông tin câu hỏi một cách thông minh và đầy đủ.

## Module trích xuất câu hỏi với kiểm tra dấu ngoặc

// ... existing code ...

### Cài đặt trong dự án NyNus

Trong dự án NyNus, module trích xuất câu hỏi dựa trên kiểm tra dấu ngoặc được tích hợp vào quá trình xử lý câu hỏi. Lớp `BracketExtractor` đóng vai trò cốt lõi trong quá trình này và làm việc cùng với `QuestionExtractor` để phân tích nội dung LaTeX một cách chính xác.

Việc cài đặt cả hai module này giúp hệ thống đạt được cả hai mục tiêu:

1. Tốc độ xử lý nhanh với các pattern đơn giản thông qua regex
2. Độ chính xác cao với các cấu trúc phức tạp thông qua parser kiểm tra dấu ngoặc

Điều này đảm bảo rằng hệ thống có thể xử lý chính xác tất cả các loại câu hỏi, từ đơn giản đến phức tạp, mà vẫn duy trì hiệu suất tốt.

## Một số trường hợp đặc biệt cần lưu ý

Khi làm việc với hệ thống câu hỏi NyNus, có một số trường hợp đặc biệt cần được xử lý với sự chú ý:

### 1. Câu hỏi có công thức toán học phức tạp

Câu hỏi chứa công thức toán học phức tạp có thể gây ra vấn đề khi trích xuất do cấu trúc lồng nhau nhiều tầng:

```latex
\begin{ex}[1M1V2-3]
Tính giá trị của biểu thức $\frac{\sqrt{a^2 + b^2} + \sqrt{c^2 + d^2}}{\sqrt[3]{\frac{x^3 + y^3}{z^3}}}$ khi $a=3$, $b=4$, $c=5$, $d=12$, $x=2$, $y=3$, $z=5$.
\choice
{$\frac{17}{5}$}
{\True $\frac{17\sqrt[3]{125}}{5}$}
{$\frac{13\sqrt[3]{125}}{5}$}
{$\frac{13}{5}$}
\loigiai{
Ta có: $\sqrt{a^2 + b^2} = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$
$\sqrt{c^2 + d^2} = \sqrt{5^2 + 12^2} = \sqrt{25 + 144} = \sqrt{169} = 13$
$\frac{x^3 + y^3}{z^3} = \frac{2^3 + 3^3}{5^3} = \frac{8 + 27}{125} = \frac{35}{125}$
$\sqrt[3]{\frac{x^3 + y^3}{z^3}} = \sqrt[3]{\frac{35}{125}} = \frac{\sqrt[3]{35}}{\sqrt[3]{125}}$

Vậy giá trị của biểu thức:
$\frac{\sqrt{a^2 + b^2} + \sqrt{c^2 + d^2}}{\sqrt[3]{\frac{x^3 + y^3}{z^3}}} = \frac{5 + 13}{\frac{\sqrt[3]{35}}{\sqrt[3]{125}}} = \frac{18 \cdot \sqrt[3]{125}}{\sqrt[3]{35}} = \frac{18 \cdot 5}{\sqrt[3]{35}} = \frac{90}{\sqrt[3]{35}}$

Biểu thức cuối cùng: $\frac{17\sqrt[3]{125}}{5}$
}
\end{ex}
```

**Xử lý**:

- Sử dụng module `BracketExtractor` để quét toàn bộ cặp dấu ngoặc, theo dõi cấp độ lồng nhau
- Thêm metadata cho công thức để dễ dàng hiển thị khi render câu hỏi
- Sử dụng KaTeX hoặc MathJax để hiển thị công thức sau khi trích xuất

### 2. Câu hỏi có hình ảnh và tham chiếu

Câu hỏi có hình ảnh và tham chiếu đến các phần trong hình:

```latex
\begin{ex}[2P3N2-1]
Cho đoạn mạch như hình vẽ:
\begin{figure}
\includegraphics{circuit1.png}
\caption{Mạch điện RLC nối tiếp}
\end{figure}
Các phần tử R, L, C có các thông số nào được ghi trên hình? Tính tổng trở của mạch điện.
\choice
{Z = 100 $\Omega$}
{Z = 50 $\Omega$}
{\True Z = $\sqrt{R^2 + (X_L - X_C)^2} = \sqrt{30^2 + (40 - 10)^2} = \sqrt{900 + 900} = \sqrt{1800} = 30\sqrt{2}$ $\Omega$}
{Z = 60 $\Omega$}
\loigiai{
Từ hình vẽ, ta thấy: R = 30 $\Omega$, X_L = 40 $\Omega$, X_C = 10 $\Omega$
Tổng trở của mạch điện RLC nối tiếp được tính bằng công thức:
Z = $\sqrt{R^2 + (X_L - X_C)^2}$
= $\sqrt{30^2 + (40 - 10)^2}$
= $\sqrt{900 + 900}$
= $\sqrt{1800}$
= $30\sqrt{2}$ $\Omega$
}
\end{ex}
```

**Xử lý**:

- Trích xuất và lưu trữ đường dẫn hình ảnh
- Duy trì mối quan hệ giữa hình ảnh và câu hỏi
- Hỗ trợ hiển thị caption của hình

### 3. Câu hỏi có nhiều nguồn và nhiều lời giải từ các tác giả khác nhau

```latex
\begin{ex}[Nguồn: "Đề thi thử THPT QG 2023"][Nguồn: "Tài liệu ôn thi ĐHCQ"][1P1V1-6]
Một vật dao động điều hòa với biên độ 5 cm, chu kỳ 2 s. Vận tốc cực đại của vật là
\choice
{5 cm/s}
{10 cm/s}
{\True 5π cm/s}
{10π cm/s}
\loigiai{
(Giải pháp 1 - GV Nguyễn Văn A)
Vận tốc cực đại: $v_{max} = \omega \cdot A = \frac{2\pi}{T} \cdot A = \frac{2\pi}{2} \cdot 5 = 5\pi$ (cm/s)
}
\loigiai{
(Giải pháp 2 - GV Trần Thị B)
Ta có: $v_{max} = A \cdot \omega = A \cdot 2\pi f = 5 \cdot 2\pi \cdot \frac{1}{2} = 5\pi$ (cm/s)
}
\end{ex}
```

**Xử lý**:

- Trích xuất tất cả các nguồn bằng cách duyệt qua tất cả các pattern nguồn
- Lưu trữ nhiều lời giải dưới dạng mảng trong cơ sở dữ liệu
- Cho phép hiển thị các lời giải thay thế trong giao diện người dùng

### 4. Câu hỏi có cấu trúc lồng nhau phức tạp

```latex
\begin{ex}[1P2V3-9]
Xét mạch dao động điện từ LC lý tưởng. Biết điện tích cực đại trên tụ điện là $Q_0$ và cường độ dòng điện cực đại trong mạch là $I_0$. Điện tích trên tụ điện và cường độ dòng điện trong mạch biến thiên theo thời gian lần lượt là:
\choice
{$q = Q_0\cos(\omega t)$ và $i = I_0\sin(\omega t)$}
{$q = Q_0\sin(\omega t)$ và $i = I_0\cos(\omega t)$}
{\True $q = Q_0\cos(\omega t)$ và $i = -I_0\sin(\omega t)$}
{$q = Q_0\sin(\omega t)$ và $i = -I_0\cos(\omega t)$}
\loigiai{
Trong mạch dao động LC lý tưởng, điện tích q trên tụ điện biến thiên điều hòa theo thời gian:
$q = Q_0\cos(\omega t + \varphi)$

Khi $t = 0$, nếu điện tích trên tụ điện đạt cực đại $Q_0$ thì $\varphi = 0$. Do đó:
$q = Q_0\cos(\omega t)$

Cường độ dòng điện trong mạch:
$i = \frac{dq}{dt} = -Q_0\omega\sin(\omega t)$

Xét cường độ dòng điện cực đại $I_0 = Q_0\omega$, ta có:
$i = -I_0\sin(\omega t)$

Vậy đáp án đúng là $q = Q_0\cos(\omega t)$ và $i = -I_0\sin(\omega t)$
}
\end{ex>
```

**Vấn đề**: Câu hỏi có lỗi - thẻ đóng `\end{ex}` bị viết sai thành `\end{ex>`.

**Xử lý**:

- Phát hiện lỗi về thẻ đóng không khớp
- Cung cấp hàm sửa lỗi tự động cho các trường hợp phổ biến
- Hiển thị cảnh báo và đề xuất sửa chữa

### 5. Xử lý trường hợp QuestionID và Subcount không được định nghĩa

Có những trường hợp người dùng nhập câu hỏi không có QuestionID hoặc Subcount:

```latex
\begin{ex}
Một vật chuyển động thẳng đều từ điểm A đến điểm B với vận tốc 5 m/s. Biết AB = 100 m. Thời gian vật đi từ A đến B là:
\choice
{5 s}
{10 s}
{\True 20 s}
{25 s}
\loigiai{
Thời gian di chuyển:
t = \frac{s}{v} = \frac{100}{5} = 20 (s)
}
\end{ex}
```

**Xử lý**:

- Phát hiện thiếu thông tin quan trọng
- Tạo ID tạm thời hoặc gán subcount tự động
- Yêu cầu người dùng bổ sung thông tin này khi lưu

## Hướng dẫn sử dụng thư viện trích xuất câu hỏi

Đoạn mã sau minh họa cách sử dụng các module trích xuất câu hỏi trong NyNus:

```typescript
import { QuestionExtractor, BracketExtractor } from '@nynus/question-parser';

// Xử lý nội dung LaTeX từ tệp hoặc input người dùng
async function processLaTeXContent(rawContent: string) {
  try {
    // 1. Trích xuất thông tin câu hỏi
    const questionData = QuestionExtractor.extract(rawContent);
    if (!questionData) {
      console.error('Không thể trích xuất câu hỏi từ nội dung LaTeX');
      return null;
    }

    // 2. Xác thực thông tin câu hỏi
    const validationResult = validateQuestion(questionData);
    if (!validationResult.valid) {
      console.warn('Cảnh báo khi xác thực câu hỏi:', validationResult.errors);
      // Tiếp tục xử lý với cảnh báo
    }

    // 3. Xử lý hình ảnh (nếu có)
    if (questionData.images && questionData.images.length > 0) {
      await processImages(questionData.images);
    }

    // 4. Lưu câu hỏi vào cơ sở dữ liệu
    const savedQuestion = await saveQuestion(questionData);

    // 5. Trả về kết quả
    return {
      success: true,
      question: savedQuestion,
      warnings: validationResult.warnings || [],
    };
  } catch (error) {
    console.error('Lỗi khi xử lý nội dung LaTeX:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}

// Hàm xác thực thông tin câu hỏi
function validateQuestion(question) {
  const errors = [];
  const warnings = [];

  // Kiểm tra QuestionID
  if (!question.question_id) {
    errors.push('Thiếu QuestionID');
  }

  // Kiểm tra nội dung câu hỏi
  if (!question.content || question.content.trim() === '') {
    errors.push('Thiếu nội dung câu hỏi');
  }

  // Kiểm tra đáp án
  if (question.type === 'MultipleChoice' && (!question.answers || question.answers.length < 2)) {
    errors.push('Câu hỏi trắc nghiệm phải có ít nhất 2 đáp án');
  }

  // Kiểm tra đáp án đúng
  if (!question.correct_answer) {
    errors.push('Thiếu đáp án đúng');
  }

  // Cảnh báo
  if (!question.solutions || question.solutions.length === 0) {
    warnings.push('Câu hỏi không có lời giải');
  }

  if (!question.sources || question.sources.length === 0) {
    warnings.push('Câu hỏi không có nguồn');
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

// Ví dụ sử dụng
async function main() {
  const laTeXContent = `\\begin{ex}[1P1V1-6]
  Một vật dao động điều hòa với biên độ 5 cm, chu kỳ 2 s. Vận tốc cực đại của vật là
  \\choice
  {5 cm/s}
  {10 cm/s}
  {\\True 5π cm/s}
  {10π cm/s}
  \\loigiai{
  Vận tốc cực đại: $v_{max} = \\omega \\cdot A = \\frac{2\\pi}{T} \\cdot A = \\frac{2\\pi}{2} \\cdot 5 = 5\\pi$ (cm/s)
  }
  \\end{ex}`;

  const result = await processLaTeXContent(laTeXContent);
  console.log('Kết quả xử lý:', result);
}

main();
```

## Kết nối với hệ thống đề thi

Hệ thống câu hỏi NyNus tích hợp chặt chẽ với hệ thống đề thi, cho phép:

1. **Tìm kiếm thông minh**: Dựa trên mức độ, chương, bài học để tạo đề thi
2. **Theo dõi sử dụng**: Ghi lại lịch sử sử dụng câu hỏi trong các đề thi
3. **Phân tích dữ liệu**: Xác định tỷ lệ đúng/sai của học sinh cho từng câu hỏi

```typescript
// Ví dụ về tìm kiếm câu hỏi để tạo đề thi
async function findQuestionsForExam({ grade, subject, chapters, levels, count }) {
  // Tạo điều kiện tìm kiếm
  const conditions = {
    'QuestionID.grade.value': grade,
    'QuestionID.subject.value': subject,
  };

  if (chapters && chapters.length > 0) {
    conditions['QuestionID.chapter.value'] = { $in: chapters };
  }

  if (levels && levels.length > 0) {
    conditions['QuestionID.level.value'] = { $in: levels };
  }

  // Tìm câu hỏi phù hợp
  const questions = await Question.find(conditions)
    .sort({ usageCount: 1 }) // Ưu tiên câu hỏi ít được sử dụng
    .limit(count);

  // Trả về danh sách câu hỏi
  return questions;
}
```

## Thống kê và phân tích câu hỏi

Để đánh giá chất lượng câu hỏi và cải thiện hệ thống, NyNus cung cấp các công cụ thống kê và phân tích:

### Phân tích độ khó

```typescript
async function analyzeQuestionDifficulty(questionId) {
  // Lấy thông tin câu hỏi
  const question = await Question.findById(questionId);
  if (!question) return null;

  // Lấy kết quả trả lời từ học sinh
  const answers = await StudentAnswer.find({ questionId });

  // Tính toán độ khó
  const totalAnswers = answers.length;
  const correctAnswers = answers.filter(a => a.isCorrect).length;

  const difficulty = 1 - correctAnswers / totalAnswers;

  // Phân loại độ khó
  let difficultyLevel;
  if (difficulty < 0.3) {
    difficultyLevel = 'Dễ';
  } else if (difficulty < 0.7) {
    difficultyLevel = 'Trung bình';
  } else {
    difficultyLevel = 'Khó';
  }

  // Cập nhật thông tin câu hỏi
  await Question.findByIdAndUpdate(questionId, {
    $set: {
      analyzedDifficulty: {
        value: difficulty,
        level: difficultyLevel,
        sampleSize: totalAnswers,
        lastUpdated: new Date(),
      },
    },
  });

  return {
    difficulty,
    difficultyLevel,
    totalAnswers,
    correctAnswers,
  };
}
```

### Phân tích tính phân biệt

```typescript
async function analyzeQuestionDiscrimination(questionId) {
  // Lấy kết quả trả lời của học sinh
  const answers = await StudentAnswer.find({ questionId }).populate('studentId', 'totalScore');

  if (answers.length < 10) {
    return { discrimination: null, message: 'Không đủ dữ liệu để phân tích' };
  }

  // Sắp xếp học sinh theo điểm số
  const sortedStudents = answers.sort((a, b) => b.studentId.totalScore - a.studentId.totalScore);

  // Lấy 27% học sinh có điểm cao nhất và thấp nhất
  const n = Math.floor(sortedStudents.length * 0.27);
  const highGroup = sortedStudents.slice(0, n);
  const lowGroup = sortedStudents.slice(sortedStudents.length - n);

  // Tính tỷ lệ trả lời đúng trong mỗi nhóm
  const highCorrect = highGroup.filter(a => a.isCorrect).length / n;
  const lowCorrect = lowGroup.filter(a => a.isCorrect).length / n;

  // Tính độ phân biệt
  const discrimination = highCorrect - lowCorrect;

  // Phân loại độ phân biệt
  let discriminationLevel;
  if (discrimination < 0.2) {
    discriminationLevel = 'Kém';
  } else if (discrimination < 0.4) {
    discriminationLevel = 'Chấp nhận được';
  } else {
    discriminationLevel = 'Tốt';
  }

  // Cập nhật thông tin câu hỏi
  await Question.findByIdAndUpdate(questionId, {
    $set: {
      discrimination: {
        value: discrimination,
        level: discriminationLevel,
        lastUpdated: new Date(),
      },
    },
  });

  return {
    discrimination,
    discriminationLevel,
    highCorrect,
    lowCorrect,
  };
}
```

### Phân tích phân bố đáp án

```typescript
async function analyzeAnswerDistribution(questionId) {
  // Lấy câu hỏi
  const question = await Question.findById(questionId);
  if (!question || question.form !== 'MultipleChoice') {
    return null;
  }

  // Lấy kết quả trả lời
  const answers = await StudentAnswer.find({ questionId });
  if (answers.length === 0) {
    return null;
  }

  // Tạo map phân bố
  const distribution = {};
  question.answers.forEach(ans => {
    distribution[ans.id] = 0;
  });

  // Đếm số lần chọn mỗi đáp án
  answers.forEach(answer => {
    if (distribution[answer.selectedAnswer]) {
      distribution[answer.selectedAnswer]++;
    }
  });

  // Tính tỷ lệ phần trăm
  const totalAnswers = answers.length;
  for (const key in distribution) {
    distribution[key] = {
      count: distribution[key],
      percentage: ((distribution[key] / totalAnswers) * 100).toFixed(2),
    };
  }

  return {
    totalAnswers,
    distribution,
  };
}
```

## Mở rộng và tùy chỉnh hệ thống câu hỏi

Hệ thống NyNus được thiết kế để dễ dàng mở rộng với các loại câu hỏi mới:

### Thêm loại câu hỏi mới

```typescript
// Định nghĩa processor cho loại câu hỏi mới
class DragAndDropQuestionProcessor extends QuestionProcessor {
  static canProcess(content) {
    return content.includes('\\dragdrop');
  }

  static process(content) {
    // Trích xuất các phần tử có thể kéo thả
    const draggables = BracketExtractor.extractAllCurlyBrackets(
      content.match(/\\draggables\{([\s\S]*?)\}/)[1]
    );

    // Trích xuất các khu vực thả
    const dropzones = BracketExtractor.extractAllCurlyBrackets(
      content.match(/\\dropzones\{([\s\S]*?)\}/)[1]
    );

    // Trích xuất ánh xạ đúng
    const mappingMatches = content.match(/\\mapping\{([\s\S]*?)\}/);
    const mapping = {};

    if (mappingMatches) {
      const mappingContent = mappingMatches[1];
      const pairs = mappingContent.split(',');
      pairs.forEach(pair => {
        const [drag, drop] = pair.split(':').map(s => s.trim());
        mapping[drag] = drop;
      });
    }

    return {
      type: 'DragAndDrop',
      draggables,
      dropzones,
      mapping,
    };
  }
}

// Đăng ký processor mới
QuestionExtractor.registerProcessor(DragAndDropQuestionProcessor);
```

### Tùy chỉnh hiển thị câu hỏi

```tsx
// Component React để hiển thị câu hỏi tùy thuộc vào loại
function QuestionRenderer({ question }) {
  // Chọn component hiển thị tùy thuộc vào loại câu hỏi
  const renderQuestion = () => {
    switch (question.type) {
      case 'MultipleChoice':
        return <MultipleChoiceQuestion question={question} />;
      case 'TrueFalse':
        return <TrueFalseQuestion question={question} />;
      case 'ShortAnswer':
        return <ShortAnswerQuestion question={question} />;
      case 'Essay':
        return <EssayQuestion question={question} />;
      case 'Matching':
        return <MatchingQuestion question={question} />;
      case 'DragAndDrop':
        return <DragAndDropQuestion question={question} />;
      default:
        return <DefaultQuestion question={question} />;
    }
  };

  return (
    <div className="question-container">
      <div className="question-header">
        <QuestionID id={question.QuestionID} />
        <QuestionSource sources={question.sources} />
      </div>
      <div className="question-content">
        <MathRenderer content={question.content} />
      </div>
      <div className="question-answer">{renderQuestion()}</div>
      {question.images && question.images.length > 0 && (
        <div className="question-images">
          <QuestionImages images={question.images} />
        </div>
      )}
    </div>
  );
}
```

// ... existing code ...

## Tối ưu hiệu suất khi xử lý câu hỏi số lượng lớn

Khi hệ thống cần xử lý hàng nghìn câu hỏi cùng lúc, hiệu suất trở thành vấn đề quan trọng. Dưới đây là một số kỹ thuật tối ưu được áp dụng trong NyNus:

### 1. Xử lý bất đồng bộ và song song

```typescript
interface ProcessResult {
  success?: boolean;
  error?: string;
  content?: string;
  question?: any;
}

async function processQuestionBatch(questions: string[]): Promise<ProcessResult[]> {
  // Chia câu hỏi thành các lô nhỏ hơn
  const batchSize = 50;
  const batches: string[][] = [];

  for (let i = 0; i < questions.length; i += batchSize) {
    batches.push(questions.slice(i, i + batchSize));
  }

  // Xử lý từng lô một cách song song
  const results = await Promise.all(
    batches.map(async batch => {
      return await Promise.all(
        batch.map(async (questionContent: string) => {
          try {
            return await processLaTeXContent(questionContent);
          } catch (error) {
            return {
              error: error instanceof Error ? error.message : String(error),
              content: questionContent,
            };
          }
        })
      );
    })
  );

  // Làm phẳng kết quả
  return results.flat();
}
```

### 2. Tối ưu trích xuất bằng caching

```typescript
// Cache cho các kết quả trích xuất để tránh xử lý lặp lại
const extractionCache = new Map<string, any>();

function getFromCache(content: string, type: string): any {
  const key = `${type}:${hashString(content)}`;
  return extractionCache.get(key);
}

function setToCache(content: string, type: string, result: any): any {
  const key = `${type}:${hashString(content)}`;
  extractionCache.set(key, result);
  return result;
}

// Hàm băm đơn giản cho chuỗi
function hashString(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash.toString(16);
}

// Phiên bản có cache của extractCurlyBrackets
function extractCurlyBracketsWithCache(content: string): string | null {
  const cached = getFromCache(content, 'curlyBrackets');
  if (cached) return cached;

  const result = BracketExtractor.extractFirstCurlyBrackets(content);
  return setToCache(content, 'curlyBrackets', result);
}
```

### 3. Sử dụng Worker Threads cho xử lý nền

```typescript
// worker.ts
import { parentPort } from 'worker_threads';
import { QuestionExtractor } from '../extractors/QuestionExtractor';

// Nhận thông điệp từ thread chính
parentPort?.on('message', (data: { content: string }) => {
  try {
    const result = QuestionExtractor.extract(data.content);
    parentPort?.postMessage({ success: true, result });
  } catch (error) {
    parentPort?.postMessage({
      success: false,
      error: error instanceof Error ? error.message : String(error),
    });
  }
});

// main.ts
import { Worker } from 'worker_threads';
import * as path from 'path';

// Định nghĩa các interfaces
interface WorkerTask {
  content: string;
}

interface WorkerQueueItem {
  task: WorkerTask;
  resolve: (value: any) => void;
  reject: (reason: Error) => void;
}

interface WorkerResult {
  success: boolean;
  result?: any;
  error?: string;
}

// Tạo worker pool
class WorkerPool {
  private workers: Worker[] = [];
  private queue: WorkerQueueItem[] = [];
  private activeWorkers = 0;
  private readonly maxWorkers: number;

  constructor(maxWorkers = 4) {
    this.maxWorkers = maxWorkers;
  }

  runTask(task: WorkerTask): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.queue.push({ task, resolve, reject });
      this.processQueue();
    });
  }

  private processQueue(): void {
    if (this.queue.length === 0) return;

    if (this.activeWorkers < this.maxWorkers) {
      const queueItem = this.queue.shift();
      if (!queueItem) return;

      const { task, resolve, reject } = queueItem;

      const worker = new Worker(path.join(__dirname, 'worker.js'));
      this.workers.push(worker);
      this.activeWorkers++;

      worker.on('message', (result: WorkerResult) => {
        this.activeWorkers--;
        this.workers = this.workers.filter(w => w !== worker);
        worker.terminate();
        this.processQueue();

        if (result.success) {
          resolve(result.result);
        } else {
          reject(new Error(result.error || 'Unknown error'));
        }
      });

      worker.on('error', (err: Error) => {
        this.activeWorkers--;
        this.workers = this.workers.filter(w => w !== worker);
        worker.terminate();
        this.processQueue();
        reject(err);
      });

      worker.postMessage({ content: task.content });
    }
  }

  terminate(): void {
    this.workers.forEach(worker => worker.terminate());
    this.workers = [];
  }
}

// Sử dụng WorkerPool
const pool = new WorkerPool();

async function processQuestionsWithWorkers(questions: string[]): Promise<any[]> {
  try {
    const promises = questions.map(question => pool.runTask({ content: question }));
    const results = await Promise.all(promises);
    return results;
  } finally {
    pool.terminate();
  }
}
```

### 4. Sử dụng streaming cho việc lưu trữ

Thay vì đợi xử lý tất cả các câu hỏi trước khi lưu, sử dụng stream để xử lý và lưu từng câu một:

```typescript
import { Readable, Transform } from 'stream';
import { QuestionExtractor } from './extractors/QuestionExtractor';
import { Question, IQuestion } from './models/Question';

interface ProcessingResult {
  success: boolean;
  id?: string;
  error?: string;
  raw?: string;
  data?: IQuestion;
}

async function streamProcessQuestions(questions: string[]): Promise<ProcessingResult[]> {
  return new Promise<ProcessingResult[]>((resolve, reject) => {
    // Tạo stream đầu vào
    const inputStream = new Readable({
      objectMode: true,
      read() {
        if (questions.length === 0) {
          this.push(null);
          return;
        }

        const question = questions.shift();
        this.push(question);
      },
    });

    // Tạo transform stream để xử lý câu hỏi
    const processStream = new Transform({
      objectMode: true,
      transform(chunk: string, encoding: string, callback: Function) {
        try {
          const result = QuestionExtractor.extract(chunk);
          callback(null, result);
        } catch (error) {
          callback(null, {
            error: error instanceof Error ? error.message : String(error),
            raw: chunk,
          });
        }
      },
    });

    // Tạo transform stream để lưu vào DB
    const saveStream = new Transform({
      objectMode: true,
      async transform(
        chunk: IQuestion | { error: string; raw: string },
        encoding: string,
        callback: Function
      ) {
        try {
          if ('error' in chunk) {
            callback(null, chunk);
            return;
          }

          const question = new Question(chunk);
          const saved = await question.save();
          callback(null, { success: true, id: saved._id.toString() });
        } catch (error) {
          callback(null, {
            error: error instanceof Error ? error.message : String(error),
            data: chunk,
          });
        }
      },
    });

    // Kết quả xử lý
    const results: ProcessingResult[] = [];

    // Kết nối các stream
    inputStream
      .pipe(processStream)
      .pipe(saveStream)
      .on('data', (data: ProcessingResult) => {
        results.push(data);
      })
      .on('end', () => {
        resolve(results);
      })
      .on('error', (err: Error) => {
        reject(err);
      });
  });
}
```

### 5. Tối ưu truy vấn MongoDB

```typescript
import { Collection, IndexOptions } from 'mongodb';

// Tạo indexes thích hợp cho collection Question
async function createOptimalIndexes(): Promise<void> {
  await Question.collection.createIndex({ 'QuestionID.id': 1 }, { unique: true } as IndexOptions);
  await Question.collection.createIndex({ 'QuestionID.grade.value': 1 });
  await Question.collection.createIndex({ 'QuestionID.subject.value': 1 });
  await Question.collection.createIndex({ 'QuestionID.chapter.value': 1 });
  await Question.collection.createIndex({ 'QuestionID.level.value': 1 });
  await Question.collection.createIndex({ 'sources.name': 1 });
  await Question.collection.createIndex({ type: 1 });
  await Question.collection.createIndex({ createdAt: 1 });

  // Index phức hợp cho tìm kiếm phổ biến
  await Question.collection.createIndex({
    'QuestionID.grade.value': 1,
    'QuestionID.subject.value': 1,
    'QuestionID.chapter.value': 1,
  });
}

interface QueryOptions {
  grade: string;
  subject: string;
  chapters?: string[];
  count: number;
  fields?: string[];
}

// Sử dụng projection để giới hạn dữ liệu trả về
async function findQuestionsOptimized({
  grade,
  subject,
  chapters,
  count,
  fields = ['_id', 'QuestionID', 'content', 'type', 'answers'],
}: QueryOptions): Promise<IQuestion[]> {
  const projection: Record<string, number> = {};

  // Chỉ lấy các trường cần thiết
  fields.forEach(field => {
    projection[field] = 1;
  });

  const filter: Record<string, any> = {
    'QuestionID.grade.value': grade,
    'QuestionID.subject.value': subject,
  };

  if (chapters && chapters.length) {
    filter['QuestionID.chapter.value'] = { $in: chapters };
  }

  const questions = await Question.find(filter).select(projection).limit(count);

  return questions;
}
```

### 6. Sử dụng Redis để cache câu hỏi thường dùng

```typescript
import Redis from 'ioredis';
import { Question, IQuestion } from './models/Question';
import { Types } from 'mongoose';

interface RedisConfig {
  host: string;
  port: number;
}

class QuestionCache {
  private redis: Redis;
  private readonly CACHE_TTL = 60 * 60; // 1 giờ

  constructor(config?: RedisConfig) {
    this.redis = new Redis({
      host: config?.host || process.env.REDIS_HOST || 'localhost',
      port: config?.port || parseInt(process.env.REDIS_PORT || '6379'),
    });
  }

  // Lấy câu hỏi với cache
  async getQuestionById(id: string): Promise<IQuestion | null> {
    // Kiểm tra cache
    const cacheKey = `question:${id}`;
    const cachedQuestion = await this.redis.get(cacheKey);

    if (cachedQuestion) {
      return JSON.parse(cachedQuestion);
    }

    // Nếu không có trong cache, truy vấn DB
    const question = await Question.findById(id);

    if (question) {
      // Lưu vào cache
      await this.redis.set(cacheKey, JSON.stringify(question), 'EX', this.CACHE_TTL);
    }

    return question;
  }

  // Invalidate cache khi cập nhật câu hỏi
  async updateQuestion(id: string, data: Partial<IQuestion>): Promise<IQuestion | null> {
    const question = await Question.findByIdAndUpdate(id, data, { new: true });

    if (question) {
      // Cập nhật cache
      const cacheKey = `question:${id}`;
      await this.redis.set(cacheKey, JSON.stringify(question), 'EX', this.CACHE_TTL);
    }

    return question;
  }

  // Cache kết quả tìm kiếm câu hỏi
  async findQuestionsCached(query: Record<string, any>): Promise<IQuestion[]> {
    // Tạo key dựa trên query
    const cacheKey = `questions:${JSON.stringify(query)}`;

    // Kiểm tra cache
    const cachedResult = await this.redis.get(cacheKey);
    if (cachedResult) {
      return JSON.parse(cachedResult);
    }

    // Truy vấn DB
    const questions = await Question.find(query).limit(100);

    // Lưu cache với thời gian ngắn hơn (15 phút)
    await this.redis.set(cacheKey, JSON.stringify(questions), 'EX', 15 * 60);

    return questions;
  }

  // Đóng kết nối Redis
  async close(): Promise<void> {
    await this.redis.quit();
  }
}
```

### 7. Phép đo hiệu suất và giám sát

```typescript
import { performance } from 'perf_hooks';

interface ProcessingMetrics {
  time: number;
  questionType?: string;
  contentLength: number;
  success: boolean;
  error?: string;
}

// Ghi lại thời gian xử lý mỗi câu hỏi
async function monitorQuestionProcessing(content: string): Promise<any> {
  const start = performance.now();

  try {
    const result = await processLaTeXContent(content);
    const end = performance.now();

    // Ghi lại metrics
    const processingTime = end - start;
    await recordProcessingMetrics({
      time: processingTime,
      questionType: result.question?.type || 'unknown',
      contentLength: content.length,
      success: result.success,
    });

    return result;
  } catch (error) {
    const end = performance.now();

    // Ghi lại lỗi
    await recordProcessingMetrics({
      time: end - start,
      error: error instanceof Error ? error.message : String(error),
      contentLength: content.length,
      success: false,
    });

    throw error;
  }
}

// Lưu metrics
async function recordProcessingMetrics(metrics: ProcessingMetrics): Promise<void> {
  // Lưu vào DB hoặc gửi tới dịch vụ giám sát
  console.log('Processing metrics:', metrics);
}
```

Việc áp dụng các kỹ thuật tối ưu hiệu suất này giúp NyNus có thể xử lý hàng nghìn câu hỏi một cách hiệu quả, ngay cả khi chúng có cấu trúc phức tạp với nhiều công thức toán học và hình ảnh.

// ... existing code ...
