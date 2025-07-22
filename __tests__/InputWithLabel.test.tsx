import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { InputWithLabel } from '../src/components/custom/input-with-label'

describe('InputWithLabel', () => {
  it('renders label and input correctly', () => {
    render(<InputWithLabel label="Email" placeholder="Enter email" />)
    
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/enter email/i)).toBeInTheDocument()
  })

  it('shows required indicator when required prop is true', () => {
    render(<InputWithLabel label="Name" required />)
    
    const label = screen.getByText(/name/i)
    expect(label).toHaveClass('after:content-["*"]')
  })

  it('displays hint text when provided', () => {
    render(
      <InputWithLabel
        label="Password"
        hint="Must be at least 8 characters"
      />
    )
    
    expect(screen.getByText(/must be at least 8 characters/i)).toBeInTheDocument()
  })

  it('displays error message and hides hint when error is provided', () => {
    render(
      <InputWithLabel
        label="Email"
        hint="Enter a valid email"
        error="Invalid email format"
      />
    )
    
    expect(screen.getByText(/invalid email format/i)).toBeInTheDocument()
    expect(screen.queryByText(/enter a valid email/i)).not.toBeInTheDocument()
  })

  it('applies error styles to input when error is provided', () => {
    render(<InputWithLabel label="Email" error="Invalid email" />)
    
    const input = screen.getByLabelText(/email/i)
    expect(input).toHaveClass('border-destructive')
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('associates input with error message via aria-describedby', () => {
    render(<InputWithLabel label="Email" error="Invalid email" />)
    
    const input = screen.getByLabelText(/email/i)
    const errorMessage = screen.getByText(/invalid email/i)
    
    expect(input).toHaveAttribute('aria-describedby', errorMessage.id)
  })

  it('associates input with hint via aria-describedby when no error', () => {
    render(<InputWithLabel label="Password" hint="Must be strong" />)
    
    const input = screen.getByLabelText(/password/i)
    const hint = screen.getByText(/must be strong/i)
    
    expect(input).toHaveAttribute('aria-describedby', hint.id)
  })

  it('handles user input correctly', async () => {
    const handleChange = jest.fn()
    const user = userEvent.setup()
    
    render(<InputWithLabel label="Name" onChange={handleChange} />)
    
    const input = screen.getByLabelText(/name/i)
    await user.type(input, 'John Doe')
    
    expect(handleChange).toHaveBeenCalled()
    expect(input).toHaveValue('John Doe')
  })

  it('forwards ref correctly', () => {
    const ref = jest.fn()
    
    render(<InputWithLabel label="Test" ref={ref} />)
    
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement))
  })

  it('uses provided id or generates one', () => {
    const { rerender } = render(<InputWithLabel label="Test" id="custom-id" />)
    
    expect(screen.getByLabelText(/test/i)).toHaveAttribute('id', 'custom-id')
    
    rerender(<InputWithLabel label="Test" />)
    
    expect(screen.getByLabelText(/test/i)).toHaveAttribute('id')
  })
}) 