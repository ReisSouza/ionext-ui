import React, { ComponentProps } from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import * as S from './styles'
import { Icon } from '../Icon/Icon'

export type ToastProps = ComponentProps<typeof S.Root> & {
  title: string
  description: string
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
          <Icon icon="Error-Circle" size={36} />
          <S.WrappedContent>
            {title && <S.Title>{title}</S.Title>}
            {description && <S.Description>{description}</S.Description>}
          </S.WrappedContent>
        </S.Section>
        <S.Close>
          <Icon icon="Dismiss" size={24} />
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
