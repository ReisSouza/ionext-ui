import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { keyframes } from '@stitches/react'
import { styled } from '../../styles'

export const scaleUp = keyframes({
  '0%': { opacity: '0.4', width: 0, height: 0 },
  '100%': { opacity: '0', width: '500px', height: '500px' },
})

export const ContainerAvatar = styled(AvatarPrimitive.Root, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  overflow: 'hidden',

  position: 'relative',

  textAlign: 'center',
  fontWeight: '500',

  variants: {
    size: {
      extraSmall: {
        width: '$7',
        height: '$7',
        fontSize: '$xxs',
        lineHeight: '$default',
      },
      small: {
        width: '$9',
        height: '$9',
        fontSize: '$sm',
        lineHeight: '$default',
      },
      medium: {
        width: '$12',
        height: '$12',
        fontSize: '$sm',
        lineHeight: '$list',
      },
      large: {
        width: '$16',
        height: '$16',
        fontSize: '$md',
        lineHeight: '$list',
      },
      extraLarge: {
        width: '$20',
        height: '$20',
        fontSize: '$lg',
        lineHeight: '$list',
      },
      bigLarge: {
        width: '$24',
        height: '$24',
        fontSize: '$xl',
        lineHeight: '$list',
      },
      masterLarge: {
        width: '$32',
        height: '$32',
        fontSize: '$xl',
        lineHeight: '$list',
      },
    },
    color: {
      primary: {
        color: '$white',
        background: '$primary-normal',
        '&:not(&[data-disabledHover=true], :disabled):hover': {
          background: '$primary-hover',
        },
        '&:not(&[data-disabledHover=true], :disabled):active': {
          background: '$primary-active',
        },

        '&:disabled': {
          backgroundColor: '$border',
        },
      },
      secondary: {
        color: '$white',
        background: '$secondary-normal',
        '&:not(&[data-disabledHover=true], :disabled):hover': {
          background: '$secondary-hover',
        },
        '&:not(&[data-disabledHover=true], :disabled):active': {
          background: '$secondary-active',
        },

        '&:disabled': {
          backgroundColor: '$border',
        },
      },
      tertiary: {
        color: '$white',
        background: '$tertiary-normal',
        '&:not(&[data-disabledHover=true], :disabled):hover': {
          background: '$tertiary-hover',
        },
        '&:not(&[data-disabledHover=true], :disabled):active': {
          background: '$tertiary-active',
        },

        '&:disabled': {
          backgroundColor: '$border',
        },
      },
      success: {
        color: '$white',
        background: '$feedback-success-normal',
        '&:not(&[data-disabledHover=true], :disabled):hover': {
          background: '$feedback-success-hover',
        },
        '&:not(&[data-disabledHover=true], :disabled):active': {
          background: '$feedback-success-active',
        },

        '&:disabled': {
          backgroundColor: '$border',
        },
      },
      danger: {
        color: '$white',
        background: '$feedback-error-normal',
        '&:not(&[data-disabledHover=true], :disabled):hover': {
          background: '$feedback-error-hover',
        },
        '&:not(&[data-disabledHover=true], :disabled):active': {
          background: '$feedback-error-active',
        },

        '&:disabled': {
          backgroundColor: '$border',
        },
      },
    },
    hasImage: {
      true: {},
    },
    isCursorPoint: {
      true: {
        cursor: 'pointer',
      },
    },
    variants: {
      squared: {
        borderRadius: '$2',
      },
      rounded: {
        borderRadius: '$full',
      },
    },
  },
  compoundVariants: [
    {
      variants: '',
      hasImage: true,
      css: {
        border: 'none',
      },
    },
  ],

  defaultVariants: {
    size: 'medium',
    color: 'primary',
    variants: 'rounded',
  },
})

export const ImageAvatar = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
})

export const fallbackAvatar = styled(AvatarPrimitive.Fallback, {
  variants: {
    size: {
      extraSmall: {
        svg: {
          width: '$3',
          height: '$3',
        },
      },
      small: {
        svg: {
          width: '$4',
          height: '$4',
        },
      },
      medium: {
        width: '$6',
        height: '$6',
      },
      large: {
        width: '$6',
        height: '$6',
      },
      extraLarge: {
        width: '$10',
        height: '$10',
      },
      bigLarge: {
        width: '$12',
        height: '$12',
      },
      masterLarge: {
        width: '$14',
        height: '$14',
      },
    },
  },
})
