import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from '../src/components/ui/input'

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input data-testid="input" />)
    expect(screen.getByTestId('input')).toBeInTheDocument()
  })

  it('applies correct default classes', () => {
    render(<Input data-testid="input" />)
    const input = screen.getByTestId('input')
    expect(input).toHaveClass(
      'flex',
      'h-10',
      'w-full',
      'rounded-md',
      'border',
      'border-input',
      'bg-background',
      'px-3',
      'py-2',
      'text-sm'
    )
  })

  it('accepts custom className', () => {
    render(<Input className="custom-class" data-testid="input" />)
    expect(screen.getByTestId('input')).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = jest.fn()
    render(<Input ref={ref} />)
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement))
  })

  it('handles different input types', () => {
    const { rerender } = render(<Input type="email" data-testid="input" />)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'email')

    rerender(<Input type="password" data-testid="input" />)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'password')

    rerender(<Input type="number" data-testid="input" />)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'number')
  })

  it('handles placeholder correctly', () => {
    render(<Input placeholder="Enter text here" data-testid="input" />)
    expect(screen.getByTestId('input')).toHaveAttribute(
      'placeholder',
      'Enter text here'
    )
  })

  it('handles user input correctly', async () => {
    const handleChange = jest.fn()
    const user = userEvent.setup()

    render(<Input onChange={handleChange} data-testid="input" />)

    const input = screen.getByTestId('input')
    await user.type(input, 'Hello World')

    expect(handleChange).toHaveBeenCalled()
    expect(input).toHaveValue('Hello World')
  })

  it('is disabled when disabled prop is true', () => {
    render(<Input disabled data-testid="input" />)
    expect(screen.getByTestId('input')).toBeDisabled()
  })

  it('is required when required prop is true', () => {
    render(<Input required data-testid="input" />)
    expect(screen.getByTestId('input')).toBeRequired()
  })

  it('handles focus and blur events', async () => {
    const handleFocus = jest.fn()
    const handleBlur = jest.fn()
    const user = userEvent.setup()

    render(
      <Input onFocus={handleFocus} onBlur={handleBlur} data-testid="input" />
    )

    const input = screen.getByTestId('input')

    await user.click(input)
    expect(handleFocus).toHaveBeenCalledTimes(1)

    await user.tab()
    expect(handleBlur).toHaveBeenCalledTimes(1)
  })

  it('handles value prop', () => {
    render(<Input value="controlled value" data-testid="input" readOnly />)
    expect(screen.getByTestId('input')).toHaveValue('controlled value')
  })

  it('handles defaultValue prop', () => {
    render(<Input defaultValue="default value" data-testid="input" />)
    expect(screen.getByTestId('input')).toHaveValue('default value')
  })
})
