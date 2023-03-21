import { Button, ButtonProps } from '@ionext-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
    size: 'medium',
    variant: 'primary',
    isLoading: false,
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    variant: {
      options: ['primary', 'secondary', 'text', 'outlined'],
      control: { type: 'select' },
    },
    iconLeft: {
      type: 'string',
    },
    iconRight: {
      type: 'string',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Outline: StoryObj<ButtonProps> = {
  args: {
    variant: 'outlined',
  },
}

export const Text: StoryObj<ButtonProps> = {
  args: {
    variant: 'text',
  },
}
export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}

export const Medium: StoryObj<ButtonProps> = {
  args: {
    size: 'medium',
  },
}

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
  },
}
