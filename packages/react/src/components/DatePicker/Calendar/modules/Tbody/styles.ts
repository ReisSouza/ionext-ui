import { styled } from '@/styles'

export const TbodyContainer = styled('tbody', {
  boxSizing: 'border-box',
  '&:before': {
    content: '.',
    lineHeight: '0.75rem',
    display: 'block',
    color: 'transparent',
  },
  td: {
    boxSizing: 'border-box',
  },
})
export const CalendarDay = styled('button', {
  all: 'unset',
  width: '100%',
  aspectRatio: '1 / 1',
  background: '$background',
  textAlign: 'center',
  cursor: 'pointer',

  borderRadius: '$1',

  color: '$secondary-normal',

  fontWeight: '$bold',

  transition: 'all 250ms ease-in-out',

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$secondary-light-active',
  },

  '&:disabled': {
    background: 'none',
    cursor: 'default',
    opacity: 0.4,
  },

  '&:not(:disabled):hover': {
    background: '#E9EBF8',
  },
  variants: {
    selected: {
      true: {
        background: '#EBF0F6',
      },
    },
    isCurrentMonth: {
      false: {
        // background: '#FAFAFD',
      },
    },
  },
})
