import React, { ElementType, ReactNode } from 'react'

import * as S from './styles'
import { CircleNotch } from 'phosphor-react'
import { VariantProps } from '@stitches/react'
import { CSS } from '@/types/css'

export type ButtonProps = VariantProps<typeof S.Button> & {
  children?: ReactNode
  iconLeft?: ReactNode
  iconRight?: ReactNode
  iconButton?: ReactNode
  isLoading?: boolean
  disabled?: boolean
  as?: ElementType
  form?: string | undefined
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  onMouseDown?: React.MouseEventHandler<HTMLButtonElement> | undefined
  onMouseUp?: React.MouseEventHandler<HTMLButtonElement> | undefined
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement> | undefined
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement> | undefined
  ariaLabel?: string
  title?: string
  autoCapitalize?: string | undefined
  type?: 'button' | 'reset' | 'submit' | undefined
  css?: CSS
}

export const Button: React.FC<ButtonProps> = ({
  children,
  iconLeft,
  iconRight,
  disabled = false,
  iconButton,
  icon,
  size,
  ...rest
}: ButtonProps) => {
  return (
    <S.Button
      {...rest}
      size={size}
      disabled={disabled}
      isLoading={rest.isLoading && !disabled}
      icon={!!iconButton}
      hasIcon={!!iconLeft || !!iconRight}
    >
      {rest.isLoading && !disabled && (
        <S.WrappedLoading>
          <CircleNotch size={24} />
        </S.WrappedLoading>
      )}
      {iconButton && iconButton}
      {iconLeft && !iconButton && iconLeft}
      {!iconButton && children}
      {iconRight && !iconButton && iconRight}
    </S.Button>
  )
}

Button.displayName = 'Button'
