import * as React from 'react'
import { Input, type InputProps } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/utils/cn'

export interface InputWithLabelProps extends InputProps {
  label: string
  error?: string
  hint?: string
  required?: boolean
}

const InputWithLabel = React.forwardRef<HTMLInputElement, InputWithLabelProps>(
  ({ label, error, hint, required, className, id, ...props }, ref) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inputId = id || React.useId()
    const errorId = error ? `${inputId}-error` : undefined
    const hintId = hint ? `${inputId}-hint` : undefined

    return (
      <div className="space-y-2">
        <Label
          htmlFor={inputId}
          className={cn(
            required &&
              'after:ml-0.5 after:text-destructive after:content-["*"]'
          )}
        >
          {label}
        </Label>
        <Input
          ref={ref}
          id={inputId}
          className={cn(
            error && 'border-destructive focus-visible:ring-destructive',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            cn(error && errorId, hint && hintId)
              .split(' ')
              .filter(Boolean)
              .join(' ') || undefined
          }
          {...props}
        />
        {hint && !error && (
          <p id={hintId} className="text-sm text-muted-foreground">
            {hint}
          </p>
        )}
        {error && (
          <p id={errorId} className="text-sm text-destructive">
            {error}
          </p>
        )}
      </div>
    )
  }
)

InputWithLabel.displayName = 'InputWithLabel'

export { InputWithLabel }
