import React, { ElementType } from 'react'

import { VariantProps } from '@stitches/react'

import * as S from './styles'
import { CSS } from '@/types/css'

export interface ParagraphProps
  extends VariantProps<typeof S.ParagraphContainer> {
  as?: ElementType
  css?: CSS
  children?: React.ReactNode
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  ...rest
}: ParagraphProps) => {
  return <S.ParagraphContainer {...rest}>{children}</S.ParagraphContainer>
}

export default Paragraph

Paragraph.displayName = 'Paragraph'
