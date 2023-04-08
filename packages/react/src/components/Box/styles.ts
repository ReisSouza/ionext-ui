import { styled } from '../../styles'

export const BoxRoot = styled('div', {
  borderRadius: '$2',

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
