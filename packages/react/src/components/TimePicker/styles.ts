import { styled } from '@/styles'

export const TimePickerContainer = styled('div', {
  display: 'inline-block',
  position: 'relative',

  input: {
    appearance: 'none',
    '&::-webkit-calendar-picker-indicator': {
      display: 'none',
    },
  },
})

export const DateTimeInput = styled('input', {
  padding: '8px',
  marginRight: '8px',
  fontSize: '14px',
})

export const Button = styled('button', {
  padding: '8px',
  marginRight: '8px',
  fontSize: '14px',
  background: '$primary-light-normal',

  '&:focus': {
    border: '1px solid red',
  },

  variants: {
    isActive: {
      true: {
        background: 'black',
      },
    },
  },
})

export const DropdownContainer = styled('div', {
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  marginTop: '4px',
  minWidth: '200px',
  maxWidth: '200px',
  padding: '8px',
  backgroundColor: '#fff',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  height: '300px',
})

export const WrappedHour = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  overflowY: 'auto',
})

export const WrappedMinutes = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  overflowY: 'auto',
})
