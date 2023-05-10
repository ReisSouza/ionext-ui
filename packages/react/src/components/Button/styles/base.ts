import { styled } from '@/styles'

export const Base = styled('button', {
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

  fontWeight: '$bold',
  fontFamily: '$default',

  overflow: 'hidden',
  borderRadius: '$1',

  '&:disabled': {
    background: '$border !important',
    color: '$white',
    cursor: 'not-allowed',
    borderColor: '$border !important',

    '&:hover': {
      background: '$border !important',
      color: '$white !important',
    },
    '&:active': {
      background: '$border !important',
      color: '$white !important',
    },
    '& svg': {
      color: 'white !important',
      '& path': {
        fill: 'white',
      },
    },
  },
})
