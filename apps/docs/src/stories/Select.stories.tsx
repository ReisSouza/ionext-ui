import type { Meta, StoryObj } from '@storybook/react'
import { Box, Select, SelectProps } from '@ionext-ui/react'

export default {
  title: 'Form/Select',
  component: Select,
  args: {
    options: [
      {
        label: 'Trigo',
        value: 'trigo',
      },
      {
        label: 'Soja',
        value: 'soja',
      },
      {
        label: 'Milho',
        value: 'milho',
      },
      {
        labelGroup: 'Frutas',
        group: [
          {
            label: 'Limão',
            value: 'limão',
          },
          {
            label: 'Laranja',
            value: 'laranja',
          },
          {
            label: 'Mexerica',
            value: 'mexerica',
          },
        ],
      },
    ],
    disabled: false,
    placeholder: 'Dr Alexandre paiva',
    label: 'Selecione um medico',
  },

  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
    side: {
      options: ['top', 'bottom', 'left', 'right'],
      control: {
        type: 'inline-radio',
      },
    },
    sideOffset: {
      control: {
        type: 'number',
      },
    },
    align: {
      options: ['left', 'center', 'top'],
      control: {
        type: 'inline-radio',
      },
    },
    alignOffset: {
      control: {
        type: 'number',
      },
    },
    avoidCollisions: {
      control: {
        type: 'boolean',
      },
    },
    collisionPadding: {
      control: {
        type: 'number',
      },
    },
    arrowPadding: {
      control: {
        type: 'number',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          // variant="primary"
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<SelectProps>

export const Default: StoryObj<SelectProps> = {
  args: {},
}

export const Disabled: StoryObj<SelectProps> = {
  args: {
    disabled: true,
  },
}
