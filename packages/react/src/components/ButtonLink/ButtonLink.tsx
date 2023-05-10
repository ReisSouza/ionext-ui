import React from 'react'
import { VariantProps } from '@stitches/react'

import * as S from './styles'

type LinkProps = VariantProps<typeof S.ButtonLink> & {
  children: string
  href?: string
  target?: React.HTMLAttributeAnchorTarget | undefined
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined
}

export const ButtonLink: React.FC<LinkProps> = ({
  children,
  ...rest
}: LinkProps) => {
  return <S.ButtonLink {...rest}>{children}</S.ButtonLink>
}
