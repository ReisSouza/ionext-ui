import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ionext-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {},
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
      type: 'string',
      name: 'src',
      description: 'Caminho de origem da imagem',
      defaultValue: undefined,
    },
    size: {
      options: [
        'extraSmall',
        'small',
        'medium',
        'large',
        'extraLarge',
        'bigLarge',
        'masterLarge',
      ],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'medium',
      type: 'string',
      name: 'Tamanho',
      description: 'Defina o tamanho do avatar',
    },
    isCursorPoint: {
      defaultValue: false,

      type: 'boolean',
      name: 'IsCursorPoint',
      description: 'Se o cursor point está ativo',
    },
    disabledHover: {
      defaultValue: false,

      type: 'boolean',
      name: 'disabledHoover',
      description: 'Desabilita estilo hover',
    },
    icon: {
      defaultValue: undefined,
      type: 'symbol',
      name: 'IsCursorPoint',
      description: 'Icone renderizado no avatar',
    },
    fallbackName: {
      defaultValue: undefined,
      type: 'string',
      name: 'Nome do usuário',
      description: 'Nome de usuário, caso a imagem não seja carregada',
    },
    color: {
      options: ['primary', 'secondary', 'tertiary', 'success', 'danger'],
      control: {
        type: 'inline-radio',
      },
      type: 'string',
      name: 'Cor',
      description: 'Cor de fundo',
    },
    variants: {
      options: ['rounded', 'squared'],
      control: {
        type: 'inline-radio',
      },
      type: 'string',
      name: 'Variants',
      description: 'Variação de estilo',
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const Secondary: StoryObj<AvatarProps> = {
  args: {
    color: 'secondary',
    src: undefined,
  },
}

export const Tertiary: StoryObj<AvatarProps> = {
  args: {
    color: 'tertiary',
    src: undefined,
  },
}

export const Success: StoryObj<AvatarProps> = {
  args: {
    color: 'success',
    src: undefined,
  },
}
export const Danger: StoryObj<AvatarProps> = {
  args: {
    color: 'danger',
    src: undefined,
  },
}

export const ExtraSmall: StoryObj<AvatarProps> = {
  args: {
    size: 'extraSmall',
  },
}
export const Small: StoryObj<AvatarProps> = {
  args: {
    size: 'small',
  },
}
export const Medium: StoryObj<AvatarProps> = {
  args: {
    size: 'medium',
  },
}
export const Large: StoryObj<AvatarProps> = {
  args: {
    size: 'large',
  },
}
export const ExtraLarge: StoryObj<AvatarProps> = {
  args: {
    size: 'extraLarge',
  },
}
export const BigLarge: StoryObj<AvatarProps> = {
  args: {
    size: 'bigLarge',
  },
}
export const MasterLarge: StoryObj<AvatarProps> = {
  args: {
    size: 'masterLarge',
  },
}

export const WithImage: StoryObj<AvatarProps> = {
  args: {
    src: 'https://github.com/ReisSouza.png',
  },
}
