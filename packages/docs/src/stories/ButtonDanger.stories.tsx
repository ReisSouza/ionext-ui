import { Button, ButtonProps } from '@ionext-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

import { iconList } from 'icomoon-react'
import iconSet from '../../src/assets/icons.json'

const icons = iconList(iconSet)

export default {
  title: 'Buttons/Danger',
  component: Button,
  args: {
    children: 'Enviar',
    size: 'medium',
    variant: 'contained',
    color: 'danger',
    isLoading: false,
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
    iconLeft: {
      options: icons,
      control: {
        type: 'select',
      },
    },
    iconRight: {
      options: icons,
      control: {
        type: 'select',
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
    iconLeft: 'files',
  },
}

export const WithIconRight: StoryObj<ButtonProps> = {
  args: {
    iconRight: 'files',
  },
}

export const WithIcons: StoryObj<ButtonProps> = {
  args: {
    iconLeft: 'files',
    iconRight: 'files',
  },
}
