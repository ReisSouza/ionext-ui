import { ComponentProps, forwardRef, ElementRef, useId } from 'react'
import { VariantProps } from '@stitches/react'

import { Icon } from '@/components/Icon/Icon'
import * as S from './styles'

export type TextFieldProps = Omit<ComponentProps<typeof S.Input>, 'size'> &
  VariantProps<typeof S.WrappedInput> & {
    hint?: string
    label?: string
    iconLeft?: string
    iconRight?: string
    onPressIcon?: () => void
    size?: 'small' | 'medium' | 'large'
    status?: 'default' | 'error' | 'warning' | 'success' | 'info'
    hasIconHint?: boolean
    iconHintName?: string
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
      iconHintName,
      variant,
      status,
      ...props
    }: TextFieldProps,
    ref,
  ) => {
    const id = useId()
    return (
      <S.ContainedTextField>
        {label && (
          <S.Label disabled={props.disabled} size={size} htmlFor={id}>
            {label}
          </S.Label>
        )}
        <S.WrappedInput variant={variant} size={size}>
          {iconLeft && <Icon icon={iconLeft} size={24} />}
          <S.Input size={size} id={id} ref={ref} {...props} />
          {iconRight && <Icon icon={iconRight} size={24} />}
        </S.WrappedInput>
        {hint && (
          <S.Hint>
            {iconHintName || status !== 'default'}
            <Icon size={24} icon={iconHintName || 'info'} />
            {hint}
          </S.Hint>
        )}
      </S.ContainedTextField>
    )
  },
)

TextField.displayName = 'TextField'
