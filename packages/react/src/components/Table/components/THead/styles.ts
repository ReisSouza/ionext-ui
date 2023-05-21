import { styled } from '@/styles'

export const ThreadContainer = styled('thead', {
  borderBottomColor: '$border',
  borderBottomWidth: '$thin',
  borderBottomStyle: 'solid',
  '& tr ': {
    borderCollapse: 'collapse',
  },
  '& th': {},
})

export const WrappedContentTh = styled('div', {
  display: 'flex',
  gap: '$2',
  alignItems: 'center',
})

export const WrappedAscAndDesc = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const WrappedCheckbox = styled('th', {
  width: '40px !important',

  '& > div': {
    padding: '$4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const Th = styled('th', {
  padding: '$2 $4',
  borderCollapse: 'collapse',

  variants: {
    hasSort: {
      true: {
        cursor: 'pointer',
        '&:hover': {
          color: '$secondary-hover',
        },
      },
    },
    active: {
      true: {
        color: '$secondary-active',
      },
    },
  },
  defaultVariants: {
    hasSort: true,
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
