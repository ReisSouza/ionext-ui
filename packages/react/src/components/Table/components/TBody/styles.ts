import { styled } from '@/styles'

export const TBodyContainer = styled('tbody', {})

export const Tr = styled('tr', {
  '& + &': {
    borderTopColor: '$border',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
  },
  '&:hover': {
    background: '$primary-light-normal',
  },
  variants: {
    hasHandleClickRow: {
      true: {},
    },
  },
})

export const Td = styled('td', {
  whiteSpace: 'nowrap',
  padding: '$2 $4',
})

export const Options = styled('td', {
  width: '$16',
  padding: '$2 $4',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const WrappedCheckbox = styled('td', {
  '& > div': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
