import { Button, ButtonProps } from '@ionext-ui/react'
import { Plus, SignIn } from '@phosphor-icons/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Buttons/Button',
  component: Button,
  args: {
    children: 'Enviar',
    size: 'medium',
    variant: 'contained',
    color: 'primary',
    isLoading: false,
    disabled: false,
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'inline-radio',
      },
    },
    color: {
      options: ['primary', 'secondary', 'danger', 'success'],
      control: {
        type: 'inline-radio',
      },
    },
    variant: {
      options: ['contained', 'text', 'outlined'],
      control: {
        type: 'inline-radio',
      },
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<ButtonProps>

export const Contained: StoryObj<ButtonProps> = {}

export const Outlined: StoryObj<ButtonProps> = {
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

export const WithIconLeft: StoryObj<ButtonProps> = {
  args: {
    iconLeft: <Plus size={20} />,
  },
}

export const WithIconRight: StoryObj<ButtonProps> = {
  args: {
    iconRight: <SignIn size={20} />,
  },
}

export const WithIcons: StoryObj<ButtonProps> = {
  args: {
    iconLeft: <Plus size={20} />,
    iconRight: <Plus size={20} />,
  },
}

export const IconButton: StoryObj<ButtonProps> = {
  args: {
    iconButton: <Plus size={20} />,
  },
}

export const Danger: StoryObj<ButtonProps> = {
  args: {
    color: 'danger',
  },
}

export const Success: StoryObj<ButtonProps> = {
  args: {
    color: 'success',
  },
}

export const Primary: StoryObj<ButtonProps> = {
  args: {
    color: 'primary',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    color: 'secondary',
  },
}
