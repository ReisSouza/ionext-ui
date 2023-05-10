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
    onChange: {
      defaultValue: undefined,
      description:
        'Função de callback que retorna event do input; (value:string) => void',
      type: 'function',
    },
    onInputChange: {
      defaultValue: undefined,
      description:
        'Função de callback que retorna event do input; (value:string) => void',
      type: 'function',
    },
    type: {
      options: ['email', 'text', 'password', 'tel'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'medium',
      description: 'Defina o tamanho do input',
      type: 'string',
    },
    formatStringType: {
      options: [
        'number',
        'cnpj',
        'cpf',
        'phone',
        'postalCode',
        'cpfOurCnpj',
        'currency',
        'rg',
        'credCard',
        'obscureEmail',
        'telephone',
        'cardExpirationDate',
        'phoneOrTelephone',
      ],
      control: {
        type: 'select',
      },
      defaultValue: 'medium',
      description: 'Defina o tamanho do input',
      type: 'string',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'medium',
      description: 'Defina o tamanho do input',
      type: 'string',
    },
    iconLeft: {
      control: {
        type: 'string',
      },
      defaultValue: undefined,
      description: 'Defina o ícone que vai ser renderizado a esquerda',
      type: 'symbol',
    },
    iconRight: {
      control: {
        type: 'string',
      },
      defaultValue: undefined,
      description: 'Defina o ícone que vai ser renderizado a direita',
      type: 'symbol',
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

export const WithIconLeft: StoryObj<TextFieldProps> = {
  args: {
    placeholder: 'Pesquise pelo nome ou cpf',
    label: 'Pesquisar',
    iconLeft: <MagnifyingGlass size={20} />,
  },
}

export const WithIconRight: StoryObj<TextFieldProps> = {
  args: {
    label: 'Pesquisar',
    placeholder: 'Pesquise pelo nome ou cpf',
    iconRight: <MagnifyingGlass size={20} />,
  },
}

export const isRequired: StoryObj<TextFieldProps> = {
  args: {
    label: 'Email',
    isRequired: true,
    placeholder: 'user@user.com',
  },
}
export const complementLabel: StoryObj<TextFieldProps> = {
  args: {
    isRequired: true,
    label: 'Senha',
    placeholder: 'Digite sua senha',
    complementLabel: 'Senha deve ter 6 caracteres',
  },
}

export const Error: StoryObj<TextFieldProps> = {
  args: {
    hint: 'error',
    placeholder: 'With error',
  },
}

export const Disabled: StoryObj<TextFieldProps> = {
  args: {
    disabled: true,
  },
}
