import React from 'react'
import { Check, WarningCircle } from 'phosphor-react'
import { VariantProps } from '@stitches/react'

import * as S from './styles'
import { CheckedState } from '@radix-ui/react-checkbox'

export type CheckboxProps = VariantProps<typeof S.CheckboxContainer> & {
  defaultChecked?: boolean
  checked?: CheckedState
  onCheckedChange?: (checked: boolean) => void
  hasIconHint?: boolean
  disabled?: boolean
  required?: boolean
  name?: string
  value?: string
  color?: 'primary' | 'secondary' | 'tertiary'
  id?: string
  htmlFor?: string
  label?: string
  complementLabel?: string
  hint?: string
}

export const Checkbox = ({
  required,
  hint,
  label,
  id,
  htmlFor,
  hasIconHint,
  complementLabel,
  ...props
}: CheckboxProps) => {
  return (
    <S.Container>
      <S.WrappedCheckbox>
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
      </S.WrappedCheckbox>
      {hint && (
        <S.Hint>
          {hasIconHint && <WarningCircle size={24} />}
          {hint}
        </S.Hint>
      )}
    </S.Container>
  )
}

Checkbox.displayName = 'Checkbox'
