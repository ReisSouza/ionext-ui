import { styled } from '@/styles'

export const ButtonLink = styled('a', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: 'fit-content',
  color: '$primary-dark-normal',
  justifyContent: 'center',
  cursor: 'pointer',

  '&:hover': {
    transitionDuration: '150ms',
    cursor: 'pointer',
    color: '$primary-dark-normal',
    '&::before': {
      transform: 'scaleX(100%)',
      background: '$primary-dark-normal',
    },
  },

  '&:focus': {
    '&::before': {
      transform: 'scaleX(100%)',
      background: '$primary-dark-normal',
    },
  },

  '&::before': {
    content: '" "',
    bottom: '-2px',
    position: 'absolute',
    height: '2px',
    width: '100%',
    background: '$primary-dark-normal',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transitionDuration: '150ms',
    transitionProperty: 'transform',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
})
