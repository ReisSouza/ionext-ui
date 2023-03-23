import { ComponentProps } from 'react'
import { Icon } from '../Icon/Icon'
import { CheckboxContainer, CheckboxIndicator } from './styles'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <span>
          <Icon icon="Check" size={16} color="$white" />
        </span>
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
