import React, { ComponentProps, ReactNode } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import * as S from './styles'
import { CSS } from '@/types/css'

export type TooltipProps = ComponentProps<typeof S.TooltipRoot> & {
  trigger: ReactNode
  content: ReactNode
  sideOffset: number
  cssContent: CSS
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  trigger,
  sideOffset = 5,
  cssContent,
  delayDuration = 400,
  ...rest
}: TooltipProps) => {
  return (
    <TooltipPrimitive.Provider>
      <S.TooltipRoot delayDuration={delayDuration} {...rest}>
        <S.TooltipTrigger asChild>
          <div>{trigger}</div>
        </S.TooltipTrigger>
        <TooltipPrimitive.Portal>
          <S.TooltipContent css={cssContent} sideOffset={sideOffset}>
            {content}
            <S.TooltipArrow />
          </S.TooltipContent>
        </TooltipPrimitive.Portal>
      </S.TooltipRoot>
    </TooltipPrimitive.Provider>
  )
}
