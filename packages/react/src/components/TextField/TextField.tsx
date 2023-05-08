import { WarningCircle } from 'phosphor-react'
import React, {
  ComponentProps,
  forwardRef,
  ElementRef,
  useId,
  ReactNode,
  useState,
} from 'react'

import { formatString, FormatStringType } from '@format-string/core'

import * as S from './styles'
import { VariantProps } from '@stitches/react'

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
    formatStringType?: FormatStringType
    defaultValue?: string
    onPressIcon?: () => void
    onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: string
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
      value,
      formatStringType,
      onInputChange,
      defaultValue,
      ...props
    }: TextFieldProps,
    ref,
  ) => {
    const [_value, setValue] = useState<string | undefined>(defaultValue || '')

    const id = useId()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let finalValue: string | undefined = ''

      if (formatStringType) {
        finalValue = formatString({
          type: formatStringType,
          value: e.target.value,
        })
      } else {
        finalValue = e.target.value
      }

      setValue(finalValue)
      console.log(finalValue)
      onInputChange && onInputChange(e)
    }
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
          <S.Input
            onInput={(e) => {}}
            {...props}
            value={value || _value}
            onChange={handleChange}
            size={size}
            id={htmlFor || id}
            ref={ref}
          />
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
