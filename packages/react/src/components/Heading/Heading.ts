import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,

  variants: {
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$4xl' },
      '2xl': { fontSize: '$5xl' },
      '3xl': { fontSize: '$6xl' },
      '4xl': { fontSize: '$7xl' },
      '5xl': { fontSize: '$8xl' },
      '6xl': { fontSize: '$9xl' },
    },
    align: {
      left: {
        textAlign: 'left',
      },
      right: {
        textAlign: 'right',
      },
      center: {
        textAlign: 'center',
      },
    },
    color: {
      text: {
        color: '$text',
      },
      primary: {
        color: '$primary-normal',
      },
      secondary: {
        color: '$secondary-normal',
      },
      danger: {
        color: '$feedback-error-normal',
      },
      success: {
        color: '$feedback-success-normal',
      },
      warning: {
        color: '$feedback-help-normal',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}

Heading.displayName = 'Heading'
