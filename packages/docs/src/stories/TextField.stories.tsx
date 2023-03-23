import type { Meta, StoryObj } from '@storybook/react'
import { Box, TextField, TextFieldProps } from '@ionext-ui/react'
import { iconList } from 'icomoon-react'
import iconSet from '../../src/assets/icons.json'

const icons = iconList(iconSet)

export default {
  title: 'Form/Text Field',
  component: TextField,
  args: {
    label: 'Email',
    placeholder: 'user@user.com',
    size: 'medium',
  },

  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
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
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextFieldProps>

export const Primary: StoryObj<TextFieldProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextFieldProps> = {
  args: {
    disabled: true,
  },
}

export const WithIconLeft: StoryObj<TextFieldProps> = {
  args: {
    placeholder: 'Adicionar arquivo',
    iconLeft: 'files',
  },
}
