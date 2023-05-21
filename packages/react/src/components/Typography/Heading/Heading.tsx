import React, { ElementType } from 'react'

import { VariantProps } from '@stitches/react'

import * as S from './styles'
import { CSS } from '@/types/css'

export interface HeadingProps extends VariantProps<typeof S.HeadingContainer> {
  as?: ElementType
  css?: CSS
  children?: React.ReactNode
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  ...rest
}: HeadingProps) => {
  return <S.HeadingContainer {...rest}>{children}</S.HeadingContainer>
}

export default Heading

Heading.displayName = 'Heading'
