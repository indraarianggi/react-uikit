import { render, screen } from '@testing-library/react'
import { Label } from '../src/components/ui/label'

describe('Label', () => {
  it('renders correctly', () => {
    render(<Label>Test Label</Label>)
    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })

  it('applies correct default classes', () => {
    render(<Label data-testid="label">Label Text</Label>)
    const label = screen.getByTestId('label')
    expect(label).toHaveClass(
      'text-sm',
      'font-medium',
      'leading-none',
      'peer-disabled:cursor-not-allowed',
      'peer-disabled:opacity-70'
    )
  })

  it('accepts custom className', () => {
    render(
      <Label className="custom-class" data-testid="label">
        Label
      </Label>
    )
    expect(screen.getByTestId('label')).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = jest.fn()
    render(<Label ref={ref}>Label</Label>)
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLLabelElement))
  })

  it('handles htmlFor prop correctly', () => {
    render(
      <Label htmlFor="input-id" data-testid="label">
        Label for input
      </Label>
    )
    expect(screen.getByTestId('label')).toHaveAttribute('for', 'input-id')
  })

  it('can be associated with an input', () => {
    render(
      <div>
        <Label htmlFor="test-input">Email</Label>
        <input id="test-input" type="email" />
      </div>
    )

    const label = screen.getByText('Email')
    const input = screen.getByRole('textbox')

    expect(label).toHaveAttribute('for', 'test-input')
    expect(input).toHaveAttribute('id', 'test-input')
  })

  it('supports all standard label props', () => {
    const handleClick = jest.fn()

    render(
      <Label onClick={handleClick} title="Label title" data-testid="label">
        Clickable Label
      </Label>
    )

    const label = screen.getByTestId('label')
    expect(label).toHaveAttribute('title', 'Label title')

    label.click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders as a label element', () => {
    render(<Label data-testid="label">Test</Label>)
    const label = screen.getByTestId('label')
    expect(label.tagName).toBe('LABEL')
  })
})
