import { styled } from '../../styles'
import { Text } from '@/components'

export const MultiStepContainer = styled('div', {})

export const Label = styled(Text, {
  color: '$secondary-normal',

  defaultVariants: {
    size: 'xs',
  },
})

export const Steps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
  marginTop: '$1',
})

export const Step = styled('div', {
  height: '$1',
  borderRadius: '$1',
  backgroundColor: '$primary-normal',

  variants: {
    active: {
      true: {
        backgroundColor: '$primary-active',
      },
    },
  },
})
