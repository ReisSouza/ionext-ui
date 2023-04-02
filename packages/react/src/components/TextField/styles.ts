import { styled } from '../../styles'

import * as LabelPrimitive from '@radix-ui/react-label'

export const ContainedTextField = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
})

export const WrappedInput = styled('div', {
  alignItems: 'center',
  boxSizing: 'border-box',

  borderWidth: 'thin',
  borderStyle: 'solid',
  borderColor: '$border',

  display: 'flex',
  gap: '$2',

  '& svg': {
    fill: '$secondary-light-active',
    '& path': {
      fill: '$secondary-light-active',
    },
  },
  variants: {
    size: {
      small: {
        height: '$8',

        padding: '$2 $4',

        lineHeight: '$base',

        fontSize: '$3',

        borderRadius: '$1',
      },
      medium: {
        height: '$10',

        padding: '$2 $4',
        borderRadius: '$1',

        fontSize: '$4',
      },
      large: {
        height: '$12',
        padding: '$3 $4',
        borderRadius: '$2',

        fontSize: '$5',
      },
    },
    variant: {
      primary: {
        borderColor: '$secondary-light-active',
        '& input::placeholder': {
          color: '$secondary-light-active',
        },
        '& input': {
          color: '$secondary-normal',
        },
        '&:not(input:focus):hover': {
          borderColor: '$secondary-normal',
          color: '$secondary-normal',

          '& input::placeholder': {
            color: '$secondary-normal',
          },

          '& svg': {
            fill: '$secondary-hover !important',
            '& path': {
              fill: '$secondary-hover !important',
            },
          },
        },

        '&:has(input:focus)': {
          borderColor: '$secondary-active',
          '& svg': {
            fill: '$secondary-active !important',
          },
          '&:hover': {
            borderColor: '$secondary-active !important',
            '& svg': {
              fill: '$secondary-active !important',
              '& path': {
                fill: '$secondary-active !important',
              },
            },
          },
        },
      },
    },
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },
})

export const Input = styled('input', {
  fontFamily: '$default',
  color: '$secondary-light-active',
  // fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',
  height: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },
  '-webkit-box-shadow': '0 0 0px 1000px #FFF inset',

  '&::placeholder': {
    color: '$border',
    '&:hover': {
      color: '$secondary-light-hover',
    },
  },

  variants: {
    size: {
      small: {
        fontSize: '$sm',
      },
      medium: {
        fontSize: '$md',
      },
      large: {
        fontSize: '$lg',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

export const Hint = styled('span', {
  alignSelf: 'end',
})

export const Label = styled(LabelPrimitive.Root, {
  color: '$secondary-normal',
  variants: {
    size: {
      small: {
        fontSize: '$sm',
      },
      medium: {
        fontSize: '$md',
      },
      large: {
        fontSize: '$lg',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
  },
})
