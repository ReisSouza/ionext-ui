import React from 'react'

import * as S from './styles'
import { TextField, Button } from '@/components'
import {
  FunnelSimple,
  MagnifyingGlass,
  Plus,
  TrashSimple,
} from 'phosphor-react'

export type HeaderProps = {
  itemsChecked: string[]
  onItemsRemove?: (items: string[]) => void
  onAdd?: () => void
  labelButtonAdd?: string
  iconButtonAdd?: React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({
  itemsChecked,
  onItemsRemove,
  labelButtonAdd,
  iconButtonAdd,
  onAdd,
  ...rest
}: HeaderProps) => {
  return (
    <S.HeaderContainer>
      <S.HeaderWrappedFilter>
        {itemsChecked.length > 0 && !!onItemsRemove && (
          <S.WrappedTrashIcon onClick={() => onItemsRemove(itemsChecked)}>
            <TrashSimple size={20} />
          </S.WrappedTrashIcon>
        )}
        <TextField size="small" />
        <Button size={'small'} iconButton={<MagnifyingGlass size={16} />} />
        <Button
          variant="text"
          size={'small'}
          iconButton={<FunnelSimple size={16} />}
        />
      </S.HeaderWrappedFilter>
      <Button
        size="small"
        iconRight={iconButtonAdd || <Plus size={20} />}
        onClick={onAdd}
      >
        {labelButtonAdd || 'Adicionar'}
      </Button>
    </S.HeaderContainer>
  )
}
