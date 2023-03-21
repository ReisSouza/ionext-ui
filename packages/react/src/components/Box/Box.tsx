import { ComponentProps } from '@stitches/react'
import React, { ElementType } from 'react'
import { CSS } from '../../types/css'

import * as S from './styles'

export type BoxProps = ComponentProps<typeof S.BoxRoot> & {
  children: React.ReactNode
  css: CSS
  as?: ElementType
}

export const Box: React.FC<BoxProps> = ({ children, ...rest }: BoxProps) => {
  return <S.BoxRoot {...rest}>{children}</S.BoxRoot>
}
