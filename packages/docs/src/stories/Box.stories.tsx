import { Box, BoxProps, Text } from '@ionext-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando o elemento Box</Text>
      </>
    ),
    variant: 'secondary',
    hasBorder: true,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'inline-radio',
      },
    },
    hasBorder: { control: { type: 'boolean' } },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  args: {
    variant: 'primary',
  },
}
export const Secondary: StoryObj<BoxProps> = {
  args: {
    variant: 'secondary',
  },
}
