import type { Meta, StoryObj } from '@storybook/react'
import { Box, TextField, TextFieldProps } from '@ionext-ui/react'

import { MagnifyingGlass } from '@phosphor-icons/react'

export default {
  title: 'Form/Text Field',
  component: TextField,
  args: {
    label: 'Email',
    placeholder: 'user@user.com',
    size: 'medium',
    type: 'email',
  },

  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
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
  decorators: [
    (Story) => {
      return (
        <Box
          variant="primary"
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

export const Error: StoryObj<TextFieldProps> = {
  args: {
    placeholder: 'With error',
    hint: 'error',
  },
}

export const WithIconLeft: StoryObj<TextFieldProps> = {
  args: {
    placeholder: 'Pesquise pelo nome ou cpf',
    label: 'Pesquisar',
    iconLeft: <MagnifyingGlass size={20} />,
  },
}
