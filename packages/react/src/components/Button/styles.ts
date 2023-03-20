import { keyframes, styled } from '../../styles'

export const scaleUp = keyframes({
  '0%': { opacity: '0.4', width: 0, height: 0 },
  '100%': { opacity: '0', width: '500px', height: '500px' },
})

export const Button = styled('button', {
  border: 'none',
  position: 'relative',

  outline: 'none',
  transition: 'all 250ms linear',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  flexDirection: 'row',

  fontWeight: '$medium',
  fontFamily: '$default',

  overflow: 'hidden',

  '& span': {
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
    variant: {
      primary: {
        color: '$neutral-light',
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

        '& svg': {
          fill: '$neutral-light',
        },
      },
      secondary: {
        color: '$neutral-light',
        background: '$secondary-normal',
        '&:hover': {
          background: '$secondary-hover',
        },
        '&:active': {
          background: '$secondary-active',
        },
      },
      text: {
        background: 'transparent',
        color: '$primary-normal',

        '&:hover': {
          textDecoration: 'underline',
          textUnderlineOffset: '2px',
          color: '$primary-hover',
        },

        '&:active': {
          '&:hover': {
            textDecoration: 'underline',
            textUnderlineOffset: '2px',
            color: '$primary-active',
          },
        },
      },
      outlined: {
        background: 'none',

        color: '$primary-normal',
        borderWidth: 'thin',
        borderStyle: 'solid',
        borderColor: 'inherit',

        '&:hover': {
          color: '$primary-hover',
          background: '$primary-light',
        },

        '&:active': {
          color: '$primary-active',
          background: '$primary-light-hover',
          '&:hover': {
            color: '$primary-active',
          },
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
  },
  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },
})
