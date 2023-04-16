import { styled } from '@/styles'

export const TableContainer = styled('div', {
  overflowX: 'auto !important',
  overflowY: 'hidden',
  width: '100%',

  background: '$white',

  borderCollapse: 'collapse',

  position: 'relative',
  borderWidth: '$default',
  borderColor: '$border',
  borderStyle: 'solid',
  borderRadius: '$1',

  padding: '$4',
  paddingTop: '$16',
})

export const TableWrapped = styled('table', {
  tableLayout: 'auto',

  minWidth: '100%',
  textAlign: 'left',

  width: '100%',
  overflowX: 'scroll',

  borderCollapse: 'collapse',
  color: '$secondary-normal',
})

export const Wrapped = styled('div', {
  maxHeight: '460px',
  overflowY: 'auto',
})
