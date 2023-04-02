import { styled } from '../../styles'

export const BoxRoot = styled('div', {
  borderRadius: '$2',

  padding: '$4',

  borderStyle: 'solid',
  borderWidth: 'thin',
  borderColor: '$border',

  variants: {
    variant: {
      primary: {
        background: '$white',
      },
      secondary: {
        backgroundColor: '$background',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})
