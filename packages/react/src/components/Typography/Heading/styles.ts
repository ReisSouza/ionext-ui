import { styled } from '@/styles'
import { base } from '../styles/base'

export const HeadingContainer = styled('h2', {
  fontFamily: '$default',
  fontWeight: '$bold',

  variants: {
    ...base,
    size: {
      xxl: { fontSize: '$xxl', lineHeight: '76.8px' },
      xl: { fontSize: '$xl', lineHeight: '57.6px' },
      lg: { fontSize: '$lg', lineHeight: '38.4px' },
      md: { fontSize: '$md', lineHeight: '28.8px' },
      sm: { fontSize: '$sm', lineHeight: '24px' },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
})
