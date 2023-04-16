import { styled } from '@/styles'

export const TBodyContainer = styled('tbody', {})

export const Tr = styled('tr', {
  '& + &': {
    borderTopColor: '$border',
    borderTopWidth: '$default',
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
})

export const Options = styled('td', {
  width: '$20',
  '& div': {
    padding: '0 $4',
    display: 'flex',
    justifyContent: 'center',
  },
})

export const WrappedCheckbox = styled('th', {
  width: '40px !important',

  '& div': {
    padding: '$4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
