import { styled } from '@/styles'
import { base } from '../styles/base'

export const DisplayContainer = styled('span', {
  fontFamily: '$default',
  fontWeight: '$bold',
  display: 'block',

  variants: {
    ...base,
    size: {
      display: { fontSize: '$display', lineHeight: '115.2px' },
      giant: { fontSize: '$giant', lineHeight: '96px' },
      xxxl: { fontSize: '$xxxl', lineHeight: '64px' },
      xxl: { fontSize: '$xxl', lineHeight: '57.6px' },
      xl: { fontSize: '$xl', lineHeight: '48px' },
    },
  },

  defaultVariants: {
    size: 'xl',
  },
})
