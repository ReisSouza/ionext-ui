import { WarningCircle, X } from 'phosphor-react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import React, { ComponentProps, ReactNode } from 'react'

import * as S from './styles'

export type ToastCSSType = ComponentProps<typeof S.Root>

export type ToastProps = Omit<ToastCSSType, 'title'> & {
  title: ReactNode
  description: ReactNode
}

export const Toast: React.FC<ToastProps> = ({
  title,
  description,
  ...rest
}: ToastProps) => {
  return (
    <>
      <S.Root {...rest}>
        <S.Section variant={rest.variant}>
          <WarningCircle size={36} />
          <S.WrappedContent>
            {title && <S.Title>{title}</S.Title>}
            {description && <S.Description>{description}</S.Description>}
          </S.WrappedContent>
        </S.Section>
        <S.Close>
          <X size={24} />
        </S.Close>
      </S.Root>
    </>
  )
}

export const ToastProvider: React.FC<ToastPrimitive.ToastProviderProps> = ({
  children,
  ...rest
}) => {
  return (
    <ToastPrimitive.ToastProvider {...rest}>
      {children}
      <S.Viewport />
    </ToastPrimitive.ToastProvider>
  )
}
