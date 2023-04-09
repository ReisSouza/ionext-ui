import { Button, ButtonProps } from '@ionext-ui/react'
import { Plus, SignIn } from '@phosphor-icons/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Buttons/Primary',
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
    onClick: () => console.log('Clicked on button'),
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
    iconLeft: {
      control: {
        type: 'string',
      },
    },
    iconRight: {
      control: {
        type: 'string',
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
