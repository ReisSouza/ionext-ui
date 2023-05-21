import { styled } from '@/styles'

export const ItemList = styled('li', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: ' center',

  color: '$secondary-normal',
  fontFamily: '$default',

  gap: '$2',

  padding: '0 $4',

  height: '32px',

  cursor: 'pointer',

  borderRadius: '$1',

  '&:hover': {
    background: '$primary-light-hover',
  },

  '&:active': {
    background: '$primary-light-active',
  },

  svg: {},

  variants: {
    active: {
      true: {
        background: '$primary-light-active',
        '&:hover': {
          background: '$primary-light-hover',
        },
      },
    },
    isRounded: {
      true: {
        borderRadius: '$pill',
      },
    },
  },

  defaultVariants: {},
})
