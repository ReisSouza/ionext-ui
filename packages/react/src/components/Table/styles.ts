import { styled } from '@/styles'

export const TableContainer = styled('div', {
  overflowX: 'auto !important',
  overflowY: 'hidden',
  width: '100%',
  maxWidth: 'stretch',

  background: '$white',

  display: 'flex',
  flexDirection: 'column',

  borderCollapse: 'collapse',
  height: '100%',
  position: 'relative',
  borderWidth: '$thin',
  borderColor: '$border',
  borderStyle: 'solid',
  borderRadius: '$1',

  padding: '$4',
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
  height: '100%',
  width: 'stretch',
  overflowY: 'auto',
})
