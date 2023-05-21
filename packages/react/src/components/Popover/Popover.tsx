import React from 'react'
import { XCircle } from 'phosphor-react'
import { VariantProps } from '@stitches/react'
import * as PopoverPrimitive from '@radix-ui/react-popover'

import * as S from './styles'
import Paragraph from '../Typography/Paragraph/Paragraph'

export type PopoverProps = VariantProps<typeof S.PopoverContainer> &
  Pick<
    PopoverPrimitive.PopoverContentTypeProps,
    | 'align'
    | 'alignOffset'
    | 'sideOffset'
    | 'onEscapeKeyDown'
    | 'onCloseAutoFocus'
    | 'onFocusOutside'
    | 'avoidCollisions'
    | 'collisionPadding'
  > & {
    trigger: React.ReactNode
    content: React.ReactNode
    title?: React.ReactNode
    hasButtonClose?: boolean
  }

const Popover: React.FC<PopoverProps> = ({
  title,
  content,
  trigger,
  hasButtonClose,
  align,
  alignOffset,
  avoidCollisions,
  collisionPadding,
  onCloseAutoFocus,
  onEscapeKeyDown,
  onFocusOutside,
  sideOffset,
  ...rest
}: PopoverProps) => {
  return (
    <S.PopoverContainer {...rest}>
      <S.PopoverTrigger>{trigger}</S.PopoverTrigger>
      <PopoverPrimitive.Anchor />
      <PopoverPrimitive.Portal>
        <S.PopoverContent
          align={align}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          onFocusOutside={onFocusOutside}
          onEscapeKeyDown={onEscapeKeyDown}
          avoidCollisions={avoidCollisions}
          onCloseAutoFocus={onCloseAutoFocus}
          collisionPadding={collisionPadding}
        >
          {(title || hasButtonClose) && (
            <S.PopoverHeader>
              <Paragraph
                size="xs"
                css={{ fontWeight: '$bold' }}
                color="secondary"
              >
                {title}
              </Paragraph>
              <S.PopoverClose>
                <XCircle size={24} weight="fill" />
              </S.PopoverClose>
            </S.PopoverHeader>
          )}
          <S.PopoverArrow />
          {content}
        </S.PopoverContent>
      </PopoverPrimitive.Portal>
    </S.PopoverContainer>
  )
}

Popover.displayName = 'Popover'

export default Popover
