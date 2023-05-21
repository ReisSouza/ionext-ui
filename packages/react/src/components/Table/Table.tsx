import React, { useState } from 'react'

import * as S from './styles'
import {
  Header,
  HeaderProps,
  TBody,
  TBodyProps,
  THead,
  ThreadProps,
} from './components'
import { CheckedState } from '@radix-ui/react-checkbox'

export type TableProps = Omit<
  ThreadProps,
  'onCheckedChange' | 'canRenderCheckbox' | 'hasIndeterminate'
> &
  Omit<
    HeaderProps,
    'hasIndeterminate' | 'itemsChecked' | 'canRenderCheckbox' | 'onItemsRemove'
  > &
  Omit<
    TBodyProps,
    'canRenderCheckbox' | 'itemsChecked' | 'setItemsChecked' | 'onItemsChecked'
  > & {
    onItemsSelected?: (items: string[]) => void
    onItemsRemove?: (items: string[]) => Promise<void>
  }

export const Table: React.FC<TableProps> = ({
  rows,
  handleClickRow,
  cols,
  onItemsSelected,
  onItemsRemove,
  iconButtonAdd,
  labelButtonAdd,
  disabledOnAdd,
  onFilter,
  onOpenFilterAside,
  options,
  onChecked,
  hasRounded,
  onSort,
  onAdd,
}: TableProps) => {
  const [itemsChecked, setItemsChecked] = useState<string[]>([])
  const [hasIndeterminate, setHasIndeterminate] = useState<CheckedState>(false)

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

  const handleRemove = (items: string[]) => {
    if (onItemsRemove) {
      onItemsRemove(items).then(() => {
        setItemsChecked([])
        setHasIndeterminate(false)
      })
    }
  }

  return (
    <S.TableContainer>
      {(onAdd || onFilter || onOpenFilterAside) && (
        <Header
          hasRounded={hasRounded}
          disabledOnAdd={disabledOnAdd}
          itemsChecked={itemsChecked}
          iconButtonAdd={iconButtonAdd}
          labelButtonAdd={labelButtonAdd}
          onAdd={onAdd}
          onFilter={onFilter}
          onItemsRemove={handleRemove}
          onOpenFilterAside={onOpenFilterAside}
        />
      )}
      <S.Wrapped>
        <S.TableWrapped>
          <THead
            canRenderCheckbox={!!onItemsSelected}
            cols={cols}
            hasIndeterminate={hasIndeterminate}
            onCheckedChange={handleOnCheckChangedAll}
            options={options}
            onSort={onSort}
          />
          <TBody
            hasRounded={hasRounded}
            options={options}
            rows={rows}
            onChecked={onChecked}
            itemsChecked={itemsChecked}
            handleClickRow={handleClickRow}
            setItemsChecked={setItemsChecked}
            canRenderCheckbox={!!onItemsSelected}
            onItemsChecked={handleOnItemsSelected}
          />
        </S.TableWrapped>
      </S.Wrapped>
    </S.TableContainer>
  )
}
