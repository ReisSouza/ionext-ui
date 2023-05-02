import { styled } from '@/styles'
export const Container = styled('div', {
  transition: 'all 250ms ease-in-out',

  position: 'absolute',
  background: '$white',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflowY: 'auto',
  height: '100%',
  width: '100%',
  scrollBehavior: 'smooth',

  '&::-webkit-scrollbar': {
    width: '12px',
  },

  '&::-webkit-scrollbar-track': {
    backgroundColor: '$background',
    width: '12px',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$secondary-light-active',
    borderRadius: '$pill',
    borderTopStyle: 'solid',
    borderTopWidth: '4px',
    borderTopColor: '$background',
    borderBottomStyle: 'solid',
    borderBottomWidth: '4px',
    borderBottomColor: '$background',
  },

  variants: {
    open: {
      true: {
        transform: 'translateY(0%)',
        display: 'block',
      },
      false: {
        transform: 'translateY(-130%)',
        display: 'none',
      },
    },
  },
})

export const YearsContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  padding: '$4',

  gap: '$1',
})

export const Year = styled('button', {
  all: 'unset',
  textAlign: 'center',
  background: '$background',
  borderRadius: '$2',
  padding: '$4',

  '&:not(:disabled):hover': {
    background: '#E9EBF8',
  },

  variants: {
    selected: {
      true: {
        background: '#EBF0F6',
      },
    },
  },
})
