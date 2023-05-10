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
    as: undefined,
    onMouseDown: undefined,
    onClick: undefined,
    onMouseEnter: undefined,
    onMouseLeave: undefined,
    onMouseUp: undefined,
    isLoading: undefined,
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'medium',
      description: 'Defina o tamanho do botão',
    },
    color: {
      options: ['primary', 'secondary', 'danger', 'success', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'primary',
      description: 'Defina o a cor de fundo e a cor do texto do botão',
    },
    variant: {
      options: ['contained', 'text', 'outlined'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'contained',
      description:
        'Defina o estilo do botão, sendo contained, com fundo preenchido, outlined somente borda e texto, text somente texto',
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
      description: 'Defina se o botão vai ocupar todo o espaço possível',
      defaultValue: false,
    },
    onClick: {
      type: 'function',
      defaultValue: undefined,
      description: 'Função de evento quando o botão e clicado',
    },
    onMouseDown: {
      type: 'function',
      defaultValue: undefined,
      description: 'Função de evento quando o mouse esta pressionado',
    },
    onMouseEnter: {
      type: 'function',
      defaultValue: undefined,
      description: 'Função de evento quando o mouse e entra no botão',
    },
    onMouseLeave: {
      type: 'function',
      defaultValue: undefined,
      description: 'Função de evento quando o mouse e sai de cima do botão',
    },
    onMouseUp: {
      type: 'function',
      defaultValue: undefined,
      description: 'Função de evento quando o mouse e liberado',
    },
    form: {
      type: 'string',
      defaultValue: undefined,
      description: 'Vincule o botão a um formulário',
    },
    ariaLabel: {
      type: 'string',
      defaultValue: undefined,
      description: 'Defina um nome de acessibilidade',
    },
    title: {
      type: 'string',
      defaultValue: undefined,
      description:
        'Defina um nome para o botão em casos aonde não tenha conteúdo escrito',
    },
    type: {
      options: ['reset', 'submit', 'button'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'button',
      description: 'Defina qual tipo de ação o botão vai executar',
    },
    as: {
      type: 'string',
      defaultValue: 'button',
      description: 'Defina o elemento html que será revernizado',
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
      description: 'Defina se o botão está ativo para ação ou não',
    },
    autoCapitalize: {
      options: ['on', 'off', 'words', 'characters'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'off',
      description: 'Defina se o botão vai ter capitalização',
    },
    children: {
      type: 'symbol',
      defaultValue: undefined,
      description: 'Conteúdo interno do botão',
    },

    iconButton: {
      defaultValue: undefined,
      description: 'Apenas ícone no botão',
      type: 'symbol',
    },
    iconLeft: {
      defaultValue: undefined,
      description: 'Ícone a esquerda',
      type: 'symbol',
    },
    iconRight: {
      defaultValue: undefined,
      description: 'Ícone a direita',
      type: 'symbol',
    },
    isLoading: {
      defaultValue: false,
      description: 'Defina se o botão esta em estado de carregamento',
      type: 'boolean',
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
