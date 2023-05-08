import React, { ElementType } from 'react'

import { VariantProps } from '@stitches/react'

import * as S from './styles'
import { CSS } from '@/types/css'

export interface DisplayProps extends VariantProps<typeof S.DisplayContainer> {
  as?: ElementType
  css?: CSS
  children?: React.ReactNode
}

export const Display: React.FC<DisplayProps> = ({
  children,
  ...rest
}: DisplayProps) => {
  return <S.DisplayContainer {...rest}>{children}</S.DisplayContainer>
}

Display.displayName = 'Display'
