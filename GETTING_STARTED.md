# Getting Started

## Quick Setup

1. **Install dependencies:**

```bash
npm install
# or
pnpm install
```

> 🔧 **Git hooks are automatically set up** during installation via the `prepare` script

2. **Start development:**

```bash
npm run dev
# or
pnpm dev
```

This will start Storybook on `http://localhost:6006`

## First Steps

### 1. Explore Components

- Open Storybook to see all available components
- Try different variants and props in the controls panel
- Switch between light and dark themes

### 2. Run Tests

```bash
npm test
# or
pnpm test
```

**Test Results You'll See:**

- ✅ **5 test suites** covering all components
- ✅ **53 comprehensive tests**
- ✅ **100% component coverage**

### 3. Check Test Coverage

```bash
npm run test:coverage
# or
pnpm run test:coverage
```

### 4. Build the Library

```bash
npm run build
# or
pnpm build
```

### 5. Customize Design Tokens

Edit `src/tokens/index.ts` to customize:

- Colors
- Typography scale
- Spacing system
- Border radius values

### 6. Add New Components

1. Create component in `src/components/ui/` or `src/components/custom/`
2. Export it from `src/components/index.ts`
3. **Write comprehensive tests** in `__tests__/ComponentName.test.tsx`
4. Create stories in `stories/ComponentName.stories.tsx`
5. Run tests to ensure 100% coverage: `npm test`

## Available Commands

| Command                 | Action                   | Notes                             |
| ----------------------- | ------------------------ | --------------------------------- |
| `npm run dev`           | Start Storybook          | Development environment           |
| `npm run build`         | Build library            | Production-ready bundle           |
| `npm test`              | Run tests                | 53 tests, 100% component coverage |
| `npm run test:watch`    | Run tests in watch mode  | Auto-rerun on changes             |
| `npm run test:coverage` | Generate coverage report | Detailed coverage metrics         |
| `npm run lint`          | Check code quality       | ESLint + TypeScript checking      |
| `npm run lint:fix`      | Fix linting issues       | Auto-fix ESLint problems          |
| `npm run format`        | Format code              | Prettier with Tailwind sorting    |
| `npm run type-check`    | Check TypeScript         | Verify type correctness           |
| `npm run lint-staged`   | Run staged file checks   | Used by pre-commit hook           |

## 🔒 Automated Quality Checks

This project includes **pre-commit hooks** that automatically maintain code quality:

### What Happens on Every Commit

```bash
git add .
git commit -m "your message"

# 🚀 Automatic checks run:
# ✅ Lint-staged checks only changed files
# ✅ ESLint fixes issues automatically
# ✅ Prettier formats your code
# ✅ Stylelint fixes CSS issues
# ✅ TypeScript type checking runs
# ✅ Commit succeeds if all checks pass
```

### Pre-commit Hook Benefits

- **🚀 Fast feedback**: Only staged files are checked
- **🔧 Auto-fixes**: Many issues resolved automatically
- **🛡️ Quality gates**: Prevents broken code from being committed
- **📏 Consistency**: Same standards for all team members
- **⚡ Zero setup**: Works immediately after `npm install`

### Files Affected by Lint-staged

- **TypeScript/JavaScript** (`*.ts`, `*.tsx`, `*.js`, `*.jsx`): ESLint + Prettier
- **Stylesheets** (`*.css`, `*.scss`): Stylelint + Prettier
- **Documentation** (`*.json`, `*.md`): Prettier formatting

### If Pre-commit Checks Fail

```bash
# Example: Type error prevents commit
git commit -m "add feature"
# ❌ TypeScript error found
# ❌ Commit blocked

# Fix the issue and try again
# Edit your files to fix the error
git add .
git commit -m "add feature"
# ✅ All checks pass
# ✅ Commit successful
```

## Testing Philosophy

Our design system follows **comprehensive testing practices**:

### 🎯 **What We Test**

- ✅ Component rendering and basic functionality
- ✅ Props and variants behavior
- ✅ User interactions (clicks, typing, focus)
- ✅ Accessibility (ARIA attributes, keyboard navigation)
- ✅ Error states and edge cases
- ✅ Ref forwarding and DOM integration

### 📊 **Test Coverage Standards**

- **100% component coverage** (all UI and custom components tested)
- **100% branch coverage** (all code paths tested)
- **71%+ overall line coverage** (high-quality test coverage)

### 🧪 **Test Examples**

**Component Rendering:**

```tsx
it('renders correctly', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByRole('button')).toBeInTheDocument()
})
```

**User Interactions:**

```tsx
it('handles click events', async () => {
  const handleClick = jest.fn()
  const user = userEvent.setup()

  render(<Button onClick={handleClick}>Click me</Button>)
  await user.click(screen.getByRole('button'))

  expect(handleClick).toHaveBeenCalledTimes(1)
})
```

**Props and Variants:**

```tsx
it('applies variant styles correctly', () => {
  render(<Button variant="destructive">Delete</Button>)
  expect(screen.getByRole('button')).toHaveClass('bg-destructive')
})
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # Base Shadcn components (100% tested)
│   │   ├── button.tsx   # Button with all variants
│   │   ├── card.tsx     # Modular card components
│   │   ├── input.tsx    # Form input component
│   │   └── label.tsx    # Accessible label component
│   └── custom/          # Custom composite components (100% tested)
│       └── input-with-label.tsx # Input + Label + validation
├── tokens/              # Design tokens
├── utils/               # Utilities (cn function)
├── styles/              # Global CSS
└── __tests__/           # Comprehensive test suite
    ├── Button.test.tsx       # 8 tests
    ├── Card.test.tsx         # 14 tests
    ├── Input.test.tsx        # 12 tests
    ├── Label.test.tsx        # 8 tests
    └── InputWithLabel.test.tsx # 11 tests
```

## Quality Assurance

### ✅ **Code Quality Checks**

```bash
# Run all quality checks
npm run lint        # ESLint + TypeScript
npm run format      # Prettier formatting
npm run type-check  # TypeScript compilation
npm test            # 53 comprehensive tests
```

### 🚀 **Development Checklist**

**Automated (happens on every commit):**

- ✅ Code formatting (Prettier)
- ✅ Linting fixes (ESLint)
- ✅ CSS linting (Stylelint)
- ✅ Type checking (TypeScript)

**Manual checks before pushing:**

- [ ] All tests pass (`npm test`)
- [ ] Build succeeds (`npm run build`)
- [ ] New components have tests + stories
- [ ] Test coverage remains at 100% for components

## Next Steps

- Read the full [README.md](README.md) for detailed documentation
- Explore [Storybook documentation](https://storybook.js.org/docs)
- Check out [Shadcn UI](https://ui.shadcn.com/) for more components
- Review our [Jest testing examples](https://jestjs.io/docs/getting-started)
- Learn about [React Testing Library best practices](https://testing-library.com/docs/react-testing-library/intro)
