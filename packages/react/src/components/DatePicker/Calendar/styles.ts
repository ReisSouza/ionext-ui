import { keyframes, styled } from '@/styles'

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
  overflow: 'hidden',
  maxWidth: '300px',

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
  // position: 'relative',
  // flex: 1,
})

export const CalendarBody = styled('table', {
  width: '100%',
  fontFamily: '$default',
  borderSpacing: '0.25rem',
  tableLayout: 'fixed',
})
