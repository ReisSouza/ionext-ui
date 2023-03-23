import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ionext-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    alt: 'Reis Souza',
    size: 'medium',
    variants: 'primary',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
    size: {
      options: ['extraSmall', 'small', 'medium', 'large', 'extraLarge'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const Secondary: StoryObj<AvatarProps> = {
  args: {
    variants: 'secondary',
    src: undefined,
  },
}

export const WithImage: StoryObj<AvatarProps> = {
  args: {
    src: 'https://github.com/ReisSouza.png',
  },
}
