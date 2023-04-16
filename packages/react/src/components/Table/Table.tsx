import React, { useState } from 'react'

import * as S from './styles'
import { Header, RowsProps, TBody, THead } from './components'
import { CheckedState } from '@radix-ui/react-checkbox'

export type TableProps = {
  rows: RowsProps[]
  handleClickRow?: (id: string | number) => void
  cols: React.ReactNode[]
  onItemsSelected?: (items: string[]) => void
  onItemsRemove?: (items: string[]) => void
  onAdd?: () => void
  labelButtonAdd?: string
  iconButtonAdd?: React.ReactNode
}

export const Table: React.FC<TableProps> = ({
  rows,
  handleClickRow,
  cols,
  onItemsSelected = (v) => console.log(v),
  onItemsRemove = (v) => console.log(v),
  iconButtonAdd,
  labelButtonAdd = 'Nova consulta',
  onAdd,
  ...rest
}: TableProps) => {
  const [itemsChecked, setItemsChecked] = useState<string[]>([])
  const [hasIndeterminate, setHasIndeterminate] = useState<CheckedState>()

  const handleOnItemsSelected = (itemsChecked: string[]) => {
    if (onItemsSelected) {
      onItemsSelected(itemsChecked)
    }
    if (itemsChecked.length && itemsChecked.length !== rows.length) {
      setHasIndeterminate('indeterminate')
    }
    if (itemsChecked.length === rows.length) {
      setHasIndeterminate(true)
    }
    if (itemsChecked.length === 0) {
      setHasIndeterminate(false)
    }
  }
  const handleOnCheckChangedAll = (v: boolean) => {
    if (v) {
      const itemsForId = rows.map((row) => `${row.id}`) || []
      setItemsChecked(itemsForId)
      if (onItemsSelected) {
        onItemsSelected(itemsForId)
      }
    } else {
      setItemsChecked([])
      if (onItemsSelected) {
        onItemsSelected([])
      }
    }
    setHasIndeterminate(v)
  }

  return (
    <S.TableContainer>
      <Header
        onAdd={onAdd}
        itemsChecked={itemsChecked}
        onItemsRemove={onItemsRemove}
        iconButtonAdd={iconButtonAdd}
        labelButtonAdd={labelButtonAdd}
      />
      <S.Wrapped>
        <S.TableWrapped>
          <THead
            cols={cols}
            hasIndeterminate={hasIndeterminate}
            onCheckedChange={handleOnCheckChangedAll}
          />
          <TBody
            rows={rows}
            itemsChecked={itemsChecked}
            handleClickRow={handleClickRow}
            setItemsChecked={setItemsChecked}
            onItemsChecked={handleOnItemsSelected}
          />
        </S.TableWrapped>
      </S.Wrapped>
    </S.TableContainer>
  )
}
