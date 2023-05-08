import { keyframes, styled } from '../../styles'
import { Base } from './styles/base'
import { variants } from './styles/variants'
import { primary } from './styles/primary'
import { secondary } from './styles/secondary'
import { danger } from './styles/danger'
import { success } from './styles/success'
import { icon } from './styles/icon'
import { tertiary } from './styles/tertiary'

export const scaleUp = keyframes({
  '0%': { opacity: '0.4', width: 0, height: 0 },
  '100%': { opacity: '0', width: '500px', height: '500px' },
})

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const Button = styled(Base, {
  ...variants,

  compoundVariants: [
    ...primary,
    ...secondary,
    ...danger,
    ...success,
    ...icon,
    ...tertiary,
    {
      isLoading: true,
      variant: 'contained',
      css: {
        color: 'transparent !important',
        '& svg': {
          color: 'white !important',
          '& path': {
            fill: 'transparent',
          },
        },
      },
    },
  ],

  defaultVariants: {
    size: 'medium',
    variant: 'contained',
    color: 'primary',
  },
})

export const WrappedLoading = styled('span', {
  position: 'absolute',
  display: 'flex',

  animation: `${spin} 1s linear infinite`,

  height: 'fit-content',
})
