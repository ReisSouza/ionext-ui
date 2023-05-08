import React from 'react'
import { Check } from 'phosphor-react'
import { VariantProps } from '@stitches/react'

import * as S from './styles'
import { CheckedState } from '@radix-ui/react-checkbox'

export type CheckboxProps = VariantProps<typeof S.CheckboxContainer> & {
  defaultChecked?: boolean
  checked?: boolean
  onCheckedChange?: (checked: CheckedState) => void
  disabled?: boolean
  required?: boolean
  name?: string
  value?: string
  color?: 'primary' | 'secondary' | 'tertiary'
  id?: string
  htmlFor?: string
  label?: string
  complementLabel?: string
}

export const Checkbox = ({
  required,
  label,
  id,
  htmlFor,
  complementLabel,
  ...props
}: CheckboxProps) => {
  return (
    <S.Container>
      <S.CheckboxContainer {...props}>
        <S.CheckboxIndicator>
          <Check size={16} />
        </S.CheckboxIndicator>
      </S.CheckboxContainer>
      {label && (
        <S.Label
          disabled={props.disabled}
          size={props.size}
          htmlFor={htmlFor || id}
        >
          {label} <span>{complementLabel}</span>{' '}
          {required && <span className="isRequired">*</span>}
        </S.Label>
      )}
    </S.Container>
  )
}

Checkbox.displayName = 'Checkbox'
