import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { InputWithLabel } from '../src/components/custom/input-with-label'

const meta: Meta<typeof InputWithLabel> = {
  title: 'Custom/InputWithLabel',
  component: InputWithLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
  },
  args: { onChange: fn() },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
  },
}

export const Required: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    required: true,
  },
}

export const WithHint: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    hint: 'Must be at least 8 characters long',
  },
}

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    value: 'invalid-email',
    error: 'Please enter a valid email address',
  },
}

export const RequiredWithError: Story = {
  args: {
    label: 'Username',
    placeholder: 'Choose a username',
    required: true,
    value: '',
    error: 'Username is required',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Read Only Field',
    value: 'This field is disabled',
    disabled: true,
  },
}

export const Number: Story = {
  args: {
    label: 'Age',
    placeholder: 'Enter your age',
    type: 'number',
    min: 0,
    max: 120,
  },
} 