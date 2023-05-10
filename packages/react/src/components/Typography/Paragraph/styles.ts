import { styled } from '@/styles'
import { base } from '../styles/base'

export const ParagraphContainer = styled('p', {
  fontFamily: '$default',
  variants: {
    ...base,
    size: {
      sm: { fontSize: '$sm', lineHeight: '34px' },
      xs: { fontSize: '$xs', lineHeight: '24px' },
      xxs: { fontSize: '$xxs', lineHeight: '20px' },
      xxxs: { fontSize: '$xxxs', lineHeight: '18px' },
    },
  },

  defaultVariants: {
    size: 'xxs',
  },
})
