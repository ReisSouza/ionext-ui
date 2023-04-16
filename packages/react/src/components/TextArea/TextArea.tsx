import { VariantProps } from '@stitches/react'
import { WarningCircle } from 'phosphor-react'
import { ComponentProps, forwardRef, ElementRef, useId } from 'react'

import * as S from './styles'

export type TextAreaProps = Omit<ComponentProps<typeof S.Input>, 'size'> &
  VariantProps<typeof S.WrappedInput> & {
    hint?: string
    label?: string
    htmlFor?: string
    isRequired?: boolean
    hasIconHint?: boolean
    complementLabel?: string
    onPressIcon?: () => void
    size?: 'small' | 'medium' | 'large'
    status?: 'default' | 'error' | 'warning' | 'success' | 'info'
  }

export const TextArea = forwardRef<ElementRef<typeof S.Input>, TextAreaProps>(
  (
    {
      size = 'medium',
      label,
      hint,
      hasIconHint,
      complementLabel,
      isRequired = false,
      htmlFor,
      status,
      ...props
    }: TextAreaProps,
    ref,
  ) => {
    const id = useId()
    return (
      <S.ContainedTextArea>
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
          <S.Input {...props} size={size} id={htmlFor || id} ref={ref} />
        </S.WrappedInput>
        {hint && (
          <S.Hint>
            {hasIconHint && <WarningCircle size={24} />}
            {hint}
          </S.Hint>
        )}
      </S.ContainedTextArea>
    )
  },
)

TextArea.displayName = 'TextArea'
