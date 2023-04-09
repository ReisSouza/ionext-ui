import { VariantProps } from '@stitches/react'
import { WarningCircle } from 'phosphor-react'
import { ComponentProps, forwardRef, ElementRef, useId, ReactNode } from 'react'

import * as S from './styles'

export type TextFieldProps = Omit<ComponentProps<typeof S.Input>, 'size'> &
  VariantProps<typeof S.WrappedInput> & {
    hint?: string
    label?: string
    htmlFor?: string
    iconLeft?: ReactNode
    isRequired?: boolean
    iconRight?: ReactNode
    hasIconHint?: boolean
    complementLabel?: string
    onPressIcon?: () => void
    size?: 'small' | 'medium' | 'large'
    status?: 'default' | 'error' | 'warning' | 'success' | 'info'
  }

export const TextField = forwardRef<ElementRef<typeof S.Input>, TextFieldProps>(
  (
    {
      iconLeft,
      iconRight,
      size = 'medium',
      label,
      hint,
      hasIconHint,
      complementLabel,
      isRequired = false,
      htmlFor,
      status,
      ...props
    }: TextFieldProps,
    ref,
  ) => {
    const id = useId()
    return (
      <S.ContainedTextField>
        {label && (
          <S.Label
            disabled={props.disabled}
            size={size}
            htmlFor={htmlFor || id}
          >
            {label} <span>{complementLabel}</span>{' '}
            {isRequired && <span className="isRequired">*</span>}
          </S.Label>
        )}
        <S.WrappedInput size={size}>
          {iconLeft && iconLeft}
          <S.Input size={size} id={htmlFor || id} ref={ref} {...props} />
          {iconRight && iconRight}
        </S.WrappedInput>
        {hint && (
          <S.Hint>
            {hasIconHint && <WarningCircle size={24} />}
            {hint}
          </S.Hint>
        )}
      </S.ContainedTextField>
    )
  },
)

TextField.displayName = 'TextField'
