import type { Meta, StoryObj } from '@storybook/react'
import { Paragraph, ParagraphProps } from '@ionext-ui/react'

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro reprehenderit est veniam? Rem recusandae sint perspiciatis debitis corrupti. Deserunt neque exercitationem illo voluptatum laudantium culpa suscipit accusantium blanditiis voluptas numquam.',
  },
  argTypes: {
    as: {
      type: 'string',
      description: 'Defina o texto que sera renderizado',
      name: 'Elemento renderizado',
      defaultValue: 'h1',
    },
    children: {
      type: 'string',
      description: 'Defina o texto que sera renderizado',
      name: 'Conteúdo interno',
    },
    size: {
      type: 'string',
      options: ['xxxs', 'xxs', 'xs', 'sm'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'sm',
      description: 'Defina o tamanho do texto',
      name: 'Tamanho',
    },
    color: {
      options: ['text', 'primary', 'secondary', 'warning', 'danger', 'success'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'text',
      description: 'Defina a cor do texto',
      name: 'Cor',
      type: 'string',
    },
    align: {
      options: ['left', 'right', 'center', 'default'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'inherit',
      description: 'Defina o alinhamento do texto',
      name: 'Alinhamento do texto',
    },
    textTransform: {
      options: ['uppercase', 'lowercase', 'capitalize', 'inherit'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'inherit',
      description: 'Defina como texto se transformara',
      name: 'Transformação de texto',
    },
    p: {
      options: ['xxs', 'xs', 'sm', 'lg', 'md', 'inherit'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'inherit',
      description: 'Defina o espaçamento interno do elemento',
      name: 'Espaçamento',
    },
    pl: {
      options: ['xxs', 'xs', 'sm', 'lg', 'md', 'inherit'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'inherit',
      description: 'Defina o espaçamento interno do elemento',
      name: 'Espaçamento a esquerda',
    },
    pr: {
      options: ['xxs', 'xs', 'sm', 'lg', 'md', 'inherit'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'inherit',
      description: 'Defina o espaçamento interno do elemento',
      name: 'Espaçamento a direita',
    },
    pt: {
      options: ['xxs', 'xs', 'sm', 'lg', 'md', 'inherit'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'inherit',
      description: 'Defina o espaçamento interno do elemento',
      name: 'Espaçamento acima',
    },
    pb: {
      options: ['xxs', 'xs', 'sm', 'lg', 'md', 'inherit'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'inherit',
      description: 'Defina o espaçamento interno do elemento',
      name: 'Espaçamento a baixo',
    },
    m: {
      name: 'Margem',
      options: ['xxs', 'xs', 'sm', 'lg', 'md', 'inherit'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'inherit',
      description: 'Defina o margin interno do elemento',
    },
    ml: {
      options: ['xxs', 'xs', 'sm', 'lg', 'md', 'inherit'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'inherit',
      description: 'Defina o margin a esquerda externa do elemento',
      name: 'Margin a esquerda',
    },
    mr: {
      options: ['xxs', 'xs', 'sm', 'lg', 'md', 'inherit'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'inherit',
      description: 'Defina o margin externa a direita do elemento',
      name: 'Margin a direita',
    },
    mt: {
      options: ['xxs', 'xs', 'sm', 'lg', 'md', 'inherit'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'inherit',
      description: 'Defina o Margem de cima externa do elemento',
      name: 'Margin top',
    },
    mb: {
      options: ['xxs', 'xs', 'sm', 'lg', 'md', 'inherit'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'inherit',
      description: 'Defina o Margem de baixo externo do elemento',
      name: 'Margin a abaixo',
    },
    border: {
      type: 'boolean',
      defaultValue: 'false',
      description: 'Defina se existe bordar ',
      name: 'Borda',
    },
    borderTop: {
      type: 'boolean',
      defaultValue: 'false',
      description: 'Defina se existe bordar em cima',
      name: 'Borda a cima',
    },
    borderBottom: {
      type: 'boolean',
      defaultValue: 'false',
      description: 'Defina se existe bordar em baixo',
      name: 'Borda a baixo',
    },
    borderLeft: {
      type: 'boolean',
      defaultValue: 'false',
      description: 'Defina se existe bordar a esquerda',
      name: 'Borda a esquerda',
    },
    borderRight: {
      type: 'boolean',
      defaultValue: 'false',
      description: 'Defina se existe bordar a direita',
      name: 'Borda a direita',
    },
  },
} as Meta<ParagraphProps>

export const Default: StoryObj<ParagraphProps> = {}
