import { keyframes, styled } from '../../styles'

export const scaleUp = keyframes({
  '0%': { opacity: '0.4', width: 0, height: 0 },
  '100%': { opacity: '0', width: '500px', height: '500px' },
})

export const Button = styled('button', {
  all: 'unset',
  border: 'none',
  position: 'relative',
  boxSizing: 'border-box',
  outline: 'none',
  transition: 'all 250ms linear',

  display: 'flex',
  width: 'fit-content',
  minWidth: '120px',
  alignItems: 'center',
  justifyContent: 'center',

  flexDirection: 'row',

  fontWeight: '$medium',
  fontFamily: '$default',

  overflow: 'hidden',

  variants: {
    variant: {
      contained: {
        '& svg': {
          fill: '$white',
          '& path': {
            fill: '$white',
          },
        },
      },
      text: {
        background: 'transparent !important',
      },
      outlined: {
        borderWidth: 'thin',
        borderStyle: 'solid',
        borderColor: 'inherit',
        background: 'transparent !important',
        '&:not(:disabled):not(:active):hover': {
          background: 'transparent',
        },
        '&:active': {
          background: 'rgba(255, 255, 255, 0.16) !important',
        },
      },
    },
    size: {
      small: {
        height: '$8',

        padding: '$2 $4',

        lineHeight: '$base',

        fontSize: '$3',

        borderRadius: '$1',
      },
      medium: {
        padding: '$3 $6',
        height: '$10',
        borderRadius: '$1',

        fontSize: '$4',
      },
      large: {
        padding: '$4 $8',
        height: '$12',
        borderRadius: '$2',

        fontSize: '$5',
      },
    },
    hasIcon: {
      true: {
        gap: '$2',
      },
    },
    color: {
      primary: {
        color: '$white',
        background: '$primary-normal',
        '&:hover': {
          background: '$primary-hover',
        },
        '&:active': {
          background: '$primary-active',
          '&:hover': {
            background: '$primary-active',
          },
        },
      },
      secondary: {
        color: '$white',
        background: '$secondary-normal',
        '&:hover': {
          background: '$secondary-hover',
        },
        '&:active': {
          background: '$secondary-active',
        },
      },
      danger: {
        color: '$white',
        background: '$feedback-error-normal',
        '&:hover': {
          background: '$feedback-error-hover',
        },
        '&:active': {
          background: '$feedback-error-active',
        },
        '& svg': {
          fill: '$white',
          '& path': {
            fill: '$white',
          },
        },
      },
      success: {
        color: '$white',
        background: '$feedback-success-normal',
        '&:hover': {
          background: '$feedback-success-hover',
        },
        '&:active': {
          background: '$feedback-success-active',
        },
      },
    },
    isLoading: {
      true: {
        color: 'transparent !important',
        '& svg': {
          color: 'white !important',
          '& path': {
            fill: 'transparent',
          },
        },
      },
    },
  },
  compoundVariants: [
    {
      isLoading: 'true',
      variant: 'contained',
      css: {
        color: 'transparent !important',
        '& svg': {
          color: 'white !important',
          '& path': {
            fill: 'transparent',
          },
        },
      },
    },
    {
      color: 'primary',
      variant: 'outlined',
      css: {
        '& svg': {
          fill: '$primary-normal',
          '& path': {
            fill: '$primary-normal',
          },
        },
        '&:hover': {
          background: 'rgba(10, 143, 220, 0.06) !important',
        },
        color: '$primary-normal',
        '&:not(:disabled):not(:active):hover': {
          color: '$primary-hover',
          '& svg': {
            fill: '$primary-hover',
          },
        },
        '&:active': {
          color: '$primary-active',
          '& svg': {
            fill: '$primary-active',
            '& path': {
              fill: '$primary-active',
            },
          },
        },
      },
    },
    {
      color: 'secondary',
      variant: 'outlined',
      css: {
        '&:hover': {
          background: 'rgba(70, 111, 135, 0.08) !important',
        },
        '& svg': {
          fill: '$secondary-normal',
        },
        color: '$secondary-normal',
        '&:not(:disabled):not(:active):hover': {
          color: '$secondary-hover',
          '& svg': {
            fill: '$secondary-hover',
          },
        },
        '&:active': {
          color: '$secondary-dark-active',
          '& svg': {
            fill: '$secondary-active',
          },
        },
      },
    },
    {
      color: 'primary',
      variant: 'text',
      css: {
        color: '$primary-normal',
        '& svg': {
          fill: '$primary-normal',
          '& path': {
            fill: '$primary-normal',
          },
        },
        '&:not(:disabled):not(:active):hover': {
          color: '$primary-hover',
          background: 'rgba(10, 143, 220, 0.06) !important',
          '& svg': {
            fill: '$primary-hover',
            '& path': {
              fill: '$primary-hover',
            },
          },
        },
        '&:active': {
          color: '$primary-dark-active',
          background: 'rgba(255, 255, 255, 0.16) !important',
          '& svg': {
            fill: '$primary-active',
          },
        },
      },
    },
    {
      color: 'secondary',
      variant: 'text',
      css: {
        '&:hover': {
          background: 'rgba(70, 111, 135, 0.08) !important',
        },
        '& svg': {
          fill: '$secondary-normal',
          '& path': {
            fill: '$secondary-normal',
          },
        },
        color: '$secondary-normal',
        '&:not(:disabled):not(:active):hover': {
          color: '$secondary-hover',
          '& svg': {
            fill: '$secondary-hover',
            '& path': {
              fill: '$secondary-hover',
            },
          },
        },
        '&:active': {
          color: '$secondary-dark-active',
          background: 'rgba(255, 255, 255, 0.16) !important',
          '& svg': {
            fill: '$secondary-dark-active',
            '& path': {
              fill: '$secondary-dark-active',
            },
          },
        },
      },
    },
    {
      color: 'danger',
      variant: 'text',
      css: {
        '& svg': {
          fill: '$feedback-error-normal !important',
          '& path': {
            fill: '$feedback-error-normal !important',
          },
        },
        color: '$feedback-error-normal',

        '&:hover': {
          background: 'rgba(204, 57, 46, 0.08) !important',
        },
        '&:not(:disabled):not(:active):hover': {
          color: '$feedback-error-hover',
          '& svg': {
            fill: '$feedback-error-normal !important',
            '& path': {
              fill: '$feedback-error-normal !important',
            },
          },
        },
        '&:active': {
          background: 'rgba(255, 255, 255, 0.16) !important',
        },
      },
    },
    {
      color: 'danger',
      variant: 'outlined',
      css: {
        '& svg': {
          fill: '$feedback-error-normal !important',
          '& path': {
            fill: '$feedback-error-normal !important',
          },
        },
        color: '$feedback-error-normal',

        '&:hover': {
          background: 'rgba(204, 57, 46, 0.08) !important',
        },

        '&:not(:disabled):not(:active):hover': {
          color: '$feedback-error-hover',
          '& svg': {
            fill: '$feedback-error-normal !important',
            '& path': {
              fill: '$feedback-error-normal !important',
            },
          },
        },
        '&:active': {
          color: '$feedback-error-active',
          '& svg': {
            fill: '$feedback-error-active',
          },
        },
      },
    },
    {
      color: 'success',
      variant: 'outlined',
      css: {
        '& svg': {
          fill: '$feedback-success-normal',
          '& path': {
            fill: '$feedback-success-normal',
          },
        },
        color: '$feedback-success-normal',
        '&:not(:disabled):not(:active):hover': {
          color: '$feedback-success-hover',
          '& svg': {
            fill: '$feedback-success-hover',
            '& path': {
              fill: '$feedback-success-hover',
            },
          },
        },
        '&:active': {
          color: '$feedback-success-active',
          '& svg': {
            fill: '$feedback-success-active',
            '& path': {
              fill: '$feedback-success-active',
            },
          },
        },
      },
    },
    {
      color: 'success',
      variant: 'text',
      css: {
        color: '$feedback-success-normal',
        '& svg': {
          fill: '$feedback-success-normal',
        },
        '&:not(:disabled):not(:active):hover': {
          color: '$feedback-success-hover',
          '& svg': {
            fill: '$feedback-success-hover',
          },
        },
        '&:active': {
          background: 'rgba(255, 255, 255, 0.16) !important',
        },
      },
    },
    {
      isLoading: 'true',
      variant: 'outlined',
      color: 'primary',
      css: {
        '& svg': {
          color: '$primary-normal !important',
          '& path': {
            fill: 'transparent !important',
          },
        },
      },
    },
    {
      isLoading: 'true',
      variant: 'outlined',
      color: 'secondary',
      css: {
        '& svg': {
          color: '$secondary-normal !important',
          '& path': {
            fill: 'transparent !important',
          },
        },
      },
    },
    {
      isLoading: 'true',
      variant: 'outlined',
      color: 'danger',
      css: {
        '& svg': {
          color: '$feedback-error-normal !important',
          '& path': {
            fill: 'transparent !important',
          },
        },
      },
    },
    {
      isLoading: 'true',
      variant: 'outlined',
      color: 'success',
      css: {
        '& svg': {
          color: '$feedback-success-normal !important',
          '& path': {
            fill: 'transparent !important',
          },
        },
      },
    },
    {
      isLoading: 'true',
      variant: 'outlined',
      color: 'success',
      css: {
        '& svg': {
          color: '$feedback-success-normal !important',
          '& path': {
            fill: 'transparent !important',
          },
        },
      },
    },
    {
      variant: 'text',
      color: 'danger',
      css: {
        color: 'transparent !important',
        '& svg': {
          color: '$feedback-error-normal !important',
          '& path': {
            fill: 'transparent !important',
          },
        },
      },
    },
    {
      variant: 'text',
      color: 'success',
      css: {
        color: 'transparent !important',
        '& svg': {
          color: '$feedback-success-normal !important',
          '& path': {
            fill: 'transparent !important',
          },
        },
      },
    },
    {
      variant: 'text',
      color: 'secondary',
      css: {
        color: 'transparent !important',
        '& svg': {
          color: '$secondary-normal !important',
          '& path': {
            fill: 'transparent !important',
          },
        },
      },
    },
    {
      variant: 'text',
      color: 'primary',
      css: {
        color: 'transparent !important',
        '& svg': {
          color: '$primary-normal !important',
          '& path': {
            fill: 'transparent !important',
          },
        },
      },
    },
  ],
  defaultVariants: {
    size: 'medium',
    variant: 'contained',
    color: 'primary',
  },
})

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const WrappedLoading = styled('span', {
  position: 'absolute',
  display: 'flex',

  animation: `${spin} 1s linear infinite`,

  height: 'fit-content',
})
