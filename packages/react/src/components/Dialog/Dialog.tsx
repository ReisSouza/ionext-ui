import React from 'react'
import { X } from 'phosphor-react'
import { ComponentProps } from '@stitches/react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import * as S from './styles'
import { CSS } from '@/types/css'

type DialogCloseProps = DialogPrimitive.DialogCloseProps

export const DialogCLose = ({ ...rest }: DialogCloseProps) => {
  return (
    <DialogPrimitive.Close {...rest}>{rest.children}</DialogPrimitive.Close>
  )
}

export type DialogProps = ComponentProps<typeof DialogPrimitive.Root> & {
  trigger: React.ReactNode
  description: string
  title: string
  cssOverlay: CSS
  cssContent: CSS
  cssFooter: CSS
  footer: React.ReactElement[]
  content: React.ReactNode
}

export const Dialog: React.FC<DialogProps> = ({
  title,
  footer,
  trigger,
  content,
  cssFooter,
  cssContent,
  cssOverlay,
  description,
  ...rest
}: DialogProps) => {
  return (
    <DialogPrimitive.Root {...rest}>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <S.DialogOverlay css={cssOverlay} />
        <S.DialogContent css={cssContent}>
          <S.DialogTitle>{title}</S.DialogTitle>
          <S.DialogDescription>{description}</S.DialogDescription>
          {content}
          <S.Flex css={cssFooter}>
            {footer.map((itemFooter) => {
              return itemFooter
            })}
          </S.Flex>
          <DialogPrimitive.Close asChild>
            <S.IconButton aria-label="Close">
              <X size={32} />
            </S.IconButton>
          </DialogPrimitive.Close>
        </S.DialogContent>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

export default Dialog
