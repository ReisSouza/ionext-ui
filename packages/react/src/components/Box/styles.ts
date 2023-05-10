import { styled } from '../../styles'

export const BoxRoot = styled('div', {
  borderRadius: '$4',

  padding: '$4',

  borderStyle: 'solid',
  borderWidth: 'thin',

  variants: {
    variant: {
      primary: {
        background: '$white',
      },
      secondary: {
        background: '$background !important',
      },
    },
    hasBorder: {
      true: {
        borderColor: '$border',
      },
    },
    elevation: {
      hover: {
        boxShadow: '$button-hover',
      },
      emphases: {
        boxShadow: '$emphasis',
      },
      'level-1': {
        boxShadow: '$level-1',
      },
      'level-2': {
        boxShadow: '$level-2',
      },
      'level-3': {
        boxShadow: '$level-3',
      },
    },
  },

  compoundVariants: [
    {
      hasBorder: false,
      variant: 'primary',
      css: {
        borderColor: '$white',
      },
    },
    {
      hasBorder: false,
      variant: 'secondary',
      css: {
        borderColor: '$background',
      },
    },
  ],

  defaultVariants: {
    variant: 'secondary',
    hasBorder: true,
  },
})
