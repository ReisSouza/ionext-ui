import type { Meta, StoryObj } from '@storybook/react'
import { Box, Checkbox, CheckboxProps } from '@ionext-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    label: 'Aceitar termos de serviço',
  },
  argTypes: {
    onCheckedChange: {
      type: 'function',
      defaultValue: undefined,
      description:
        'Função de callback que retorna o estado atual do checkbox, apos uma ação!',
    },
    value: {
      type: 'boolean',
      defaultValue: false,
      description: 'Defina se obrigatório selecionar o campo',
    },
    checked: {
      type: 'boolean',
      defaultValue: false,
      description: 'Defina se o checkbox esta ativo ou não',
    },
    defaultChecked: {
      type: 'boolean',
      defaultValue: false,
      description: 'Defina se o checkbox começa como ativo ou não',
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
      description: 'Defina se o checkbox esta desabilitado ou não',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'medium',
      type: 'string',
      description: 'Defina o tamanho do Checkbox',
    },
    color: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'medium',
      type: 'string',
      description: 'Defina o estilo do checkbox',
    },

    name: {
      type: 'string',
      defaultValue: undefined,
      description: 'Defina o nome do elemento para vincula lo a um formulário',
    },

    required: {
      type: 'boolean',
      defaultValue: false,
      description: 'Defina se obrigatório selecionar o campo',
    },
  },
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}

export const Secondary: StoryObj<CheckboxProps> = {
  args: {
    color: 'secondary',
  },
}

export const Tertiary: StoryObj<CheckboxProps> = {
  args: {
    color: 'tertiary',
  },
}

export const Small: StoryObj<CheckboxProps> = {
  args: {
    size: 'small',
  },
}
export const Medium: StoryObj<CheckboxProps> = {
  args: {
    size: 'medium',
  },
}

export const Large: StoryObj<CheckboxProps> = {
  args: {
    size: 'large',
  },
}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}
