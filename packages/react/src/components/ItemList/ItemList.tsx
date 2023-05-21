import React from 'react'

import * as S from './styles'
import { VariantProps } from '@/styles'
import Paragraph from '../Typography/Paragraph/Paragraph'

export type ItemListProps = VariantProps<typeof S.ItemList> & {
  label: string
  href?: string
  onClick?: () => void
  isCollapsed?: boolean
  id?: string | undefined
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  target?: React.HTMLAttributeAnchorTarget | undefined
  'aria-selected'?: React.HtmlHTMLAttributes<'a'>['aria-selected']
}

const ItemList: React.FC<ItemListProps> = ({
  href,
  label,
  target,
  iconLeft,
  iconRight,
  id,
  ...rest
}: ItemListProps) => {
  if (href) {
    return (
      <a href={href} target={target}>
        <S.ItemList {...rest} id={id} role="option">
          {iconLeft && iconLeft}
          <Paragraph>{label}</Paragraph>
          {iconLeft && iconLeft}
        </S.ItemList>
      </a>
    )
  }

  return (
    <S.ItemList {...rest} id={id} role="option">
      {iconLeft && iconLeft}
      <Paragraph>{label}</Paragraph>
      {iconRight && iconRight}
    </S.ItemList>
  )
}

export default ItemList
