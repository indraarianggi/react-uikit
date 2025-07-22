# UI Kit Design System

A modern, reusable Design System built with React, TypeScript, TailwindCSS, and Shadcn UI.

## 🚀 Features

- ⚡ **Modern Stack**: Built with Vite, React 18, and TypeScript
- 🎨 **Design Tokens**: Comprehensive token system for colors, spacing, typography, and more
- 🧩 **Component Library**: Built on Shadcn UI primitives with custom extensions
- 📖 **Storybook**: Interactive component documentation and testing
- 🧪 **Testing**: Comprehensive unit tests with Jest and React Testing Library (100% component coverage)
- 🔧 **Developer Experience**: ESLint, Prettier, and Stylelint configuration
- 📦 **Package Ready**: Configured for npm publishing with tree-shaking support
- 🌗 **Dark Mode**: Full dark mode support with CSS variables
- ♿ **Accessibility**: WCAG compliant components with proper ARIA attributes

## 📁 Project Structure

```
ui-kit/
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn UI base components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── label.tsx
│   │   └── custom/          # Custom composite components
│   │       └── input-with-label.tsx
│   ├── tokens/              # Design tokens
│   │   └── index.ts
│   ├── utils/               # Utility functions
│   │   └── cn.ts
│   ├── styles/              # Global styles
│   │   └── globals.css
│   └── index.ts             # Main export file
├── stories/                 # Storybook stories
├── __tests__/              # Unit tests (100% component coverage)
│   ├── Button.test.tsx
│   ├── Card.test.tsx
│   ├── Input.test.tsx
│   ├── Label.test.tsx
│   └── InputWithLabel.test.tsx
├── .storybook/             # Storybook configuration
└── dist/                   # Build output
```

## 🛠 Installation

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Setup

1. **Clone and install dependencies:**

```bash
git clone <repository-url>
cd ui-kit
pnpm install
```

2. **Start development:**

```bash
# Start Storybook for component development
pnpm dev

# Or run specific commands
pnpm storybook    # Start Storybook
pnpm build        # Build the library
pnpm test         # Run tests
```

## 🎯 Development Commands

| Command                | Description                               |
| ---------------------- | ----------------------------------------- |
| `pnpm dev`             | Start Storybook development server        |
| `pnpm build`           | Build the library for production          |
| `pnpm test`            | Run unit tests (53 tests across 5 suites) |
| `pnpm test:watch`      | Run tests in watch mode                   |
| `pnpm test:coverage`   | Generate test coverage report             |
| `pnpm lint`            | Run ESLint                                |
| `pnpm lint:fix`        | Fix ESLint errors                         |
| `pnpm format`          | Format code with Prettier                 |
| `pnpm format:check`    | Check code formatting                     |
| `pnpm stylelint`       | Run Stylelint for CSS                     |
| `pnpm type-check`      | Run TypeScript type checking              |
| `pnpm build:storybook` | Build Storybook for deployment            |

## 🎨 Design Tokens

The design system uses a comprehensive token system defined in `src/tokens/index.ts`:

### Colors

- **Brand Colors**: Primary brand palette
- **Semantic Colors**: Success, warning, error states
- **Neutral Colors**: Grayscale palette

### Typography

- **Font Families**: Sans-serif and monospace stacks
- **Font Sizes**: Responsive size scale
- **Font Weights**: Complete weight range
- **Line Heights**: Optimized for readability

### Spacing

- **Consistent Scale**: Based on 4px grid system
- **Responsive**: Works across all screen sizes

### Usage in Components

```tsx
import { designTokens } from '@your-org/ui-kit'

// In CSS-in-JS
const styles = {
  color: designTokens.colors.brand[500],
  padding: designTokens.spacing[4],
  borderRadius: designTokens.radius.md,
}

// In Tailwind (automatically available)
<div className="bg-brand-500 p-4 rounded-md" />
```

## 🧩 Components

### UI Components (Shadcn Primitives)

#### Button

```tsx
import { Button } from '@your-org/ui-kit'
;<Button variant="primary" size="lg">
  Click me
</Button>
```

**Variants**: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
**Sizes**: `default`, `sm`, `lg`, `icon`

#### Card

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@your-org/ui-kit'
;<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>Card content goes here.</CardContent>
</Card>
```

#### Input & Label

```tsx
import { Input, Label } from '@your-org/ui-kit'
;<div>
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Enter your email" />
</div>
```

### Custom Components

#### InputWithLabel

```tsx
import { InputWithLabel } from '@your-org/ui-kit'
;<InputWithLabel
  label="Email"
  type="email"
  required
  hint="We'll never share your email"
  error="Please enter a valid email"
/>
```

**Props**:

- `label`: Label text
- `required`: Shows required indicator
- `hint`: Helper text
- `error`: Error message (hides hint when present)
- All standard input props

## 🧪 Testing

### Test Coverage

Our design system has **comprehensive test coverage**:

- **53 tests** across **5 test suites**
- **100% component coverage** for all UI and custom components
- **71.76% overall line coverage**
- **100% branch coverage**

### Test Results

```
Test Suites: 5 passed, 5 total
Tests:       53 passed, 53 total

File Coverage:
┌─────────────────────┬─────────┬──────────┬─────────┬─────────┐
│ File                │ % Stmts │ % Branch │ % Funcs │ % Lines │
├─────────────────────┼─────────┼──────────┼─────────┼─────────┤
│ components/ui/      │   100   │   100    │   100   │   100   │
│ components/custom/  │   100   │   100    │   100   │   100   │
└─────────────────────┴─────────┴──────────┴─────────┴─────────┘
```

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Generate coverage report
pnpm test:coverage
```

### Test Structure

Tests are located in `__tests__/` and follow these conventions:

- **Unit Tests**: Test individual component behavior
- **Accessibility**: Test ARIA attributes and keyboard navigation
- **User Interactions**: Test click, focus, and input events
- **Props**: Test all component variants and props
- **Integration**: Test composite components like InputWithLabel

### Test Configuration

Our Jest configuration includes:

- **Module Path Mapping**: Resolves `@/` aliases correctly
- **TypeScript Support**: Full TS support with ts-jest
- **JSX Support**: React Testing Library integration
- **Coverage**: Comprehensive coverage reporting
- **Setup**: Global test environment with jsdom

### Example Test

```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '../src/components/ui/button'

describe('Button', () => {
  it('handles click events', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()

    render(<Button onClick={handleClick}>Click me</Button>)

    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

## 🔧 Linting & Formatting

### ESLint Configuration

The project uses a comprehensive ESLint setup:

- **React Rules**: React and React Hooks best practices
- **TypeScript Rules**: Strict TypeScript checking
- **Accessibility**: ESLint accessibility rules
- **Storybook**: Storybook-specific rules

### Prettier Configuration

Code formatting with:

- 2-space indentation
- Single quotes
- No semicolons
- Tailwind CSS class sorting

### Stylelint Configuration

CSS linting with:

- Standard CSS rules
- Tailwind CSS directive support
- CSS-in-JS compatibility

## 📦 Building & Publishing

### Build Process

The library uses TSup for building:

```bash
pnpm build
```

This generates:

- **ESM Bundle**: `dist/index.mjs`
- **CommonJS Bundle**: `dist/index.js`
- **Type Definitions**: `dist/index.d.ts`
- **CSS Bundle**: `dist/index.css`

### Package Configuration

The package is configured for modern publishing:

```json
{
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./styles": "./dist/index.css"
  }
}
```

### Publishing to NPM

1. **Update version:**

```bash
npm version patch|minor|major
```

2. **Build and publish:**

```bash
pnpm build
npm publish
```

### Installing in Projects

```bash
# Install the package
npm install @your-org/ui-kit

# Install peer dependencies
npm install react react-dom
```

```tsx
// Import components
import { Button, Card, InputWithLabel } from '@your-org/ui-kit'

// Import styles (required)
import '@your-org/ui-kit/styles'

// Use components
function App() {
  return (
    <Card>
      <InputWithLabel label="Name" required />
      <Button>Submit</Button>
    </Card>
  )
}
```

## 🎭 Storybook

### Development

```bash
pnpm storybook
```

Storybook runs on `http://localhost:6006` with:

- **Component playground**: Interactive props
- **Documentation**: Auto-generated docs
- **Dark mode**: Theme switching
- **Accessibility**: A11y addon
- **Controls**: Dynamic prop editing

### Building Storybook

```bash
pnpm build:storybook
```

This creates a static build in `storybook-static/` for deployment.

### Story Structure

Stories follow this pattern:

```tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../src/components/ui/button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}
```

## 🚀 Continuous Integration

### Recommended CI/CD Pipeline

```yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'

      - run: pnpm install
      - run: pnpm type-check
      - run: pnpm lint
      - run: pnpm test
      - run: pnpm build

      # Deploy Storybook to GitHub Pages
      - run: pnpm build:storybook
      - uses: peaceiris/actions-gh-pages@v3
        if: github.ref == 'refs/heads/main'
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./storybook-static
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-component`
3. **Write tests** for your changes
4. **Ensure all checks pass**: `pnpm lint && pnpm test && pnpm build`
5. **Submit a pull request**

### Adding New Components

1. **Create the component** in `src/components/ui/` or `src/components/custom/`
2. **Add exports** to `src/components/index.ts`
3. **Write comprehensive tests** in `__tests__/`
4. **Write stories** in `stories/`
5. **Update documentation**

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [Storybook Documentation](https://your-storybook-url.com)
- **Issues**: [GitHub Issues](https://github.com/your-org/ui-kit/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-org/ui-kit/discussions)
