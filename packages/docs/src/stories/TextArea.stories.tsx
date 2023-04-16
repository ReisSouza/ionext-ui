import type { Meta, StoryObj } from '@storybook/react'
import { Box, TextArea, TextAreaProps } from '@ionext-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {
    label: 'Descrição',
    placeholder: 'Digite uma descrição para a consulta',
    size: 'medium',
    htmlFor: 'teste',
  },

  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          variant="primary"
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
            height: '220px',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {},
}

export const isRequired: StoryObj<TextAreaProps> = {
  args: {
    label: 'Email',
    isRequired: true,
  },
}
export const complementLabel: StoryObj<TextAreaProps> = {
  args: {
    isRequired: true,
    label: 'Senha',
  },
}

export const Error: StoryObj<TextAreaProps> = {
  args: {
    hint: 'error',
    placeholder: 'With error',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
