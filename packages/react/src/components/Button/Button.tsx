import React, { ComponentProps, ElementType, ReactNode } from 'react'

import * as S from './styles'
import { CircleNotch } from 'phosphor-react'

export type ButtonProps = ComponentProps<typeof S.Button> & {
  children?: ReactNode
  iconLeft?: ReactNode
  iconRight?: ReactNode
  iconButton?: ReactNode
  isLoading?: boolean
  disabled?: boolean
  as?: ElementType
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
      isLoading={rest.isLoading && !disabled}
      icon={!!iconButton}
      disabled={disabled}
      size={size}
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
