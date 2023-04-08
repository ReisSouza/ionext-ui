import React, { ComponentProps, ElementType, ReactNode } from 'react'

import * as S from "./styles" 
import { CircleNotch } from 'phosphor-react'

export type ButtonProps = ComponentProps<typeof S.Button> & {
  children: ReactNode
  iconLeft?: ReactNode
  iconRight?: ReactNode
  isLoading?: boolean
  disabled?: boolean
  as?: ElementType
}  

export const Button: React.FC<ButtonProps> = ({
  children,
  iconLeft,
  iconRight,
  disabled = false,
  size,
  ...rest
}: ButtonProps) => {
  return (
    <S.Button
      {...rest}
      disabled={disabled}
      size={size}
      hasIcon={!!iconLeft || !!iconRight}
    >
      {rest.isLoading && (
        <S.WrappedLoading>
          <CircleNotch size={24} />
        </S.WrappedLoading>
      )}
      {iconLeft && iconLeft}
      {children}
      {iconRight && iconRight}
    </S.Button>
  )
}

Button.displayName = 'Button'
