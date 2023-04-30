import { styled, keyframes } from '@ionext-ui/react'

const slideDownAndFadeOpen = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})
const slideDownAndFadeClosed = keyframes({
  '0%': { opacity: 1, transform: 'translateY(0)' },
  '100%': { opacity: 0, transform: 'translateY(-2px)' },
})

export const CalendarContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  padding: '$4',
  marginTop: '$2',

  borderRadius: '$2',
  position: 'absolute',
  width: '100%',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',

  background: '$white',
  boxShadow: '$emphasis',

  variants: {
    isOpen: {
      true: {
        opacity: 1,
        display: 'block',
        animationName: `${slideDownAndFadeOpen}`,
      },
      false: {
        animationName: `${slideDownAndFadeClosed}`,
        opacity: 0,
        display: 'none',
      },
    },
  },
})

export const Container = styled('div', {
  width: '100%',
  position: 'relative',
  zIndex: 2,
  maxWidth: '300px',
})

export const CalendarBody = styled('table', {
  width: '100%',
  fontFamily: '$default',
  borderSpacing: '0.25rem',
  tableLayout: 'fixed',
})

export const Input = styled('input', {
  '&:focus': {
    outline: 'none',
  },

  '&[type="date"]::-webkit-calendar-picker-indicator': {
    display: 'none',
    '-webkit-appearance': 'none',
    backgroundImage: 'none',
  },

  appearance: 'none',
  height: '$10',

  padding: '$2 $4',
  borderRadius: '$1',

  fontSize: '$4',
  width: '100%',
  alignItems: 'center',
  boxSizing: 'border-box',

  borderWidth: 'thin',
  borderStyle: 'solid',
  borderColor: '$secondary-light-active',

  display: 'flex',
  gap: '$2',

  '& input:autofill': {
    '-webkit-transition-delay': '9999s',
    transitionDelay: '9999s',
  },

  '& svg': {
    fill: '$secondary-light-active',
    '& path': {
      fill: '$secondary-light-active',
    },
  },

  '&:hover': {
    borderColor: '$secondary-normal',
    '& svg': {
      fill: '$secondary-normal',
      '& path': {
        fill: '$secondary-normal',
      },
    },
  },
  '&:has(input:focus)': {
    borderColor: '$secondary-hover',
    '& svg': {
      fill: '$secondary-hover',
      '& path': {
        fill: '$secondary-hover',
      },
    },
  },
  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})
