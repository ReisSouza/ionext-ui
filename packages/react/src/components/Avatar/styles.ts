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

  borderRadius: '999px',

  textAlign: 'center',
  fontWeight: '500',

  //
  '& .ripple-effect': {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
    width: '5px',
    height: '5px',
    pointerEvents: 'none',
    zIndex: 5,
    animation: `${scaleUp} 0.7s linear infinite`,
  },

  variants: {
    size: {
      extraSmall: {
        width: '$7',
        height: '7',
        fontSize: '$sm',
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
        fontSize: '$xl',
        lineHeight: '$list',
      },
      extraLarge: {
        width: '$20',
        height: '$20',
        fontSize: '$xl',
        lineHeight: '$list',
      },
    },
    variants: {
      primary: {
        color: '$white',
        background: '$primary-normal',
        '&:not(:disabled):hover': {
          background: '$primary-hover',
        },
        '&:not(:disabled):active': {
          background: '$primary-active',
        },

        '&:disabled': {
          backgroundColor: '$border',
        },
      },
      secondary: {
        color: '$white',
        background: '$secondary-normal',
        '&:not(:disabled):hover': {
          background: '$secondary-hover',
        },
        '&:not(:disabled):active': {
          background: '$secondary-active',
        },

        '&:disabled': {
          backgroundColor: '$border',
        },
      },
    },
    hasImage: {
      true: {},
    },
  },
  compoundVariants: [
    {
      variants: 'invert',
      hasImage: true,
      css: {
        border: 'none',
      },
    },
  ],
})

export const ImageAvatar = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
})

export const fallbackAvatar = styled(AvatarPrimitive.Fallback, {})
