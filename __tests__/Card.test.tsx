import { render, screen } from '@testing-library/react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../src/components/ui/card'

describe('Card Components', () => {
  describe('Card', () => {
    it('renders correctly', () => {
      render(<Card data-testid="card">Card content</Card>)
      expect(screen.getByTestId('card')).toBeInTheDocument()
    })

    it('applies custom className', () => {
      render(
        <Card className="custom-class" data-testid="card">
          Content
        </Card>
      )
      expect(screen.getByTestId('card')).toHaveClass('custom-class')
    })

    it('forwards ref correctly', () => {
      const ref = jest.fn()
      render(<Card ref={ref}>Content</Card>)
      expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement))
    })
  })

  describe('CardHeader', () => {
    it('renders correctly', () => {
      render(<CardHeader data-testid="card-header">Header content</CardHeader>)
      expect(screen.getByTestId('card-header')).toBeInTheDocument()
    })

    it('applies correct default classes', () => {
      render(<CardHeader data-testid="card-header">Header</CardHeader>)
      expect(screen.getByTestId('card-header')).toHaveClass(
        'flex',
        'flex-col',
        'space-y-1.5',
        'p-6'
      )
    })
  })

  describe('CardTitle', () => {
    it('renders as h3 element', () => {
      render(<CardTitle>Card Title</CardTitle>)
      const title = screen.getByRole('heading', { level: 3 })
      expect(title).toBeInTheDocument()
      expect(title).toHaveTextContent('Card Title')
    })

    it('applies correct default classes', () => {
      render(<CardTitle data-testid="card-title">Title</CardTitle>)
      expect(screen.getByTestId('card-title')).toHaveClass(
        'text-2xl',
        'font-semibold',
        'leading-none',
        'tracking-tight'
      )
    })
  })

  describe('CardDescription', () => {
    it('renders as paragraph element', () => {
      render(<CardDescription>Card description</CardDescription>)
      const description = screen.getByText('Card description')
      expect(description.tagName).toBe('P')
    })

    it('applies correct default classes', () => {
      render(
        <CardDescription data-testid="card-desc">Description</CardDescription>
      )
      expect(screen.getByTestId('card-desc')).toHaveClass(
        'text-sm',
        'text-muted-foreground'
      )
    })
  })

  describe('CardContent', () => {
    it('renders correctly', () => {
      render(<CardContent data-testid="card-content">Content here</CardContent>)
      expect(screen.getByTestId('card-content')).toBeInTheDocument()
    })

    it('applies correct default classes', () => {
      render(<CardContent data-testid="card-content">Content</CardContent>)
      expect(screen.getByTestId('card-content')).toHaveClass('p-6', 'pt-0')
    })
  })

  describe('CardFooter', () => {
    it('renders correctly', () => {
      render(<CardFooter data-testid="card-footer">Footer content</CardFooter>)
      expect(screen.getByTestId('card-footer')).toBeInTheDocument()
    })

    it('applies correct default classes', () => {
      render(<CardFooter data-testid="card-footer">Footer</CardFooter>)
      expect(screen.getByTestId('card-footer')).toHaveClass(
        'flex',
        'items-center',
        'p-6',
        'pt-0'
      )
    })
  })

  describe('Complete Card', () => {
    it('renders complete card structure correctly', () => {
      render(
        <Card data-testid="complete-card">
          <CardHeader>
            <CardTitle>Test Title</CardTitle>
            <CardDescription>Test description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Test content</p>
          </CardContent>
          <CardFooter>
            <button>Action</button>
          </CardFooter>
        </Card>
      )

      expect(screen.getByTestId('complete-card')).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
        'Test Title'
      )
      expect(screen.getByText('Test description')).toBeInTheDocument()
      expect(screen.getByText('Test content')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument()
    })

    it('maintains proper semantic structure', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Title</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent>Content</CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
      )

      const card = screen.getByText('Title').closest('[class*="rounded-lg"]')
      expect(card).toBeInTheDocument()
    })
  })
})
