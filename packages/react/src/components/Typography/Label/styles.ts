import { styled } from '@/styles'
import { base } from '../styles/base'

export const DisplayContainer = styled('label', {
  fontFamily: '$default',
  fontWeight: '$bold',

  variants: {
    ...base,
    size: {
      xxxs: { fontSize: '$xxxs', lineHeight: '26.6px' },
      xxs: { fontSize: '$xxs', lineHeight: '21.8px' },
      xs: { fontSize: '$xs', lineHeight: '18.62px' },
      sm: { fontSize: '$sm', lineHeight: '15.96' },
    },
  },

  defaultVariants: {
    size: 'xxs',
    color: 'secondary',
  },
})
