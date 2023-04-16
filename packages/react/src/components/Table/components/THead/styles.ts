import { styled } from '@/styles'

export const ThreadContainer = styled('thead', {
  borderBottomColor: '$border',
  borderBottomWidth: '$default',
  borderBottomStyle: 'solid',
  '& tr ': {
    borderCollapse: 'collapse',
  },
  '& th': {
    borderCollapse: 'collapse',
  },
})

export const WrappedContentTh = styled('div', {
  display: 'flex',
  gap: '$2',
})

export const WrappedAscAndDesc = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const WrappedCheckbox = styled('th', {
  width: '40px !important',

  '& div': {
    padding: '$4',
    display: 'flex',
    justifyContent: 'center',
  },
})

export const Options = styled('th', {
  width: '$20',
  '& div': {
    padding: '0 $4',

    display: 'flex',
    justifyContent: 'center',
  },
})
