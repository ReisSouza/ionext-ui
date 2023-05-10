import { VariantProps } from '@stitches/react'
import React, { ElementType } from 'react'
import { CSS } from '../../types/css'

import * as S from './styles'

export type BoxProps = VariantProps<typeof S.BoxRoot> & {
  children: React.ReactNode
  css?: CSS
  as?: ElementType
}

export const Box: React.FC<BoxProps> = ({
  children,
  as,
  css,
  ...rest
}: BoxProps) => {
  return (
    <S.BoxRoot as={as} css={css} variant="primary" {...rest}>
      {children}
    </S.BoxRoot>
  )
}
