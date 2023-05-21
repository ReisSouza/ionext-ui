import React, { ReactNode } from 'react'

import * as S from './styles'
import { DotsThreeVertical } from 'phosphor-react'
import Popover from '@/components/Popover/Popover'
import ItemList from '@/components/ItemList/ItemList'
import { Checkbox } from '@/components/Checkbox/Checkbox'

export type OptionsTableProps = {
  label: string
  icon: ReactNode
  onClick: (id: string) => void
}
export type RowsProps = {
  cols: ReactNode[]
  id: string
  options?: OptionsTableProps[]
}

export type TBodyProps = {
  rows: RowsProps[]
  handleClickRow?: (id: string) => void
  setItemsChecked?: React.Dispatch<React.SetStateAction<string[]>>
  itemsChecked?: string[]
  onItemsChecked?: (itemsChecked: string[]) => void
  onChecked?: (id: string | undefined) => void
  options?: OptionsTableProps[]
  canRenderCheckbox: boolean
  hasRounded?: boolean
}

export const TBody: React.FC<TBodyProps> = ({
  rows,
  handleClickRow,
  itemsChecked,
  setItemsChecked,
  onItemsChecked,
  onChecked,
  options,
  hasRounded,
  canRenderCheckbox,
}: TBodyProps) => {
  const handleOnCheckChanged = (id: string | undefined) => {
    if (setItemsChecked) {
      setItemsChecked((prevState) => {
        if (prevState.includes(`${id}`)) {
          const prevStateRemovedItem = prevState.filter(
            (prevItem) => prevItem !== id,
          )
          if (onItemsChecked) onItemsChecked(prevStateRemovedItem)
          return prevStateRemovedItem
        }
        if (onItemsChecked) onItemsChecked([...prevState, `${id}`])
        return [...prevState, `${id}`]
      })
    }
    if (onChecked) {
      onChecked(id)
    }
  }
  return (
    <S.TBodyContainer>
      {rows?.map((row, index) => {
        return (
          <S.Tr key={index} hasHandleClickRow={!!handleClickRow}>
            {canRenderCheckbox && (
              <S.WrappedCheckbox>
                <div>
                  <Checkbox
                    size="small"
                    value={row.id}
                    checked={itemsChecked?.includes(`${row.id}`)}
                    onCheckedChange={() => handleOnCheckChanged(row.id)}
                  />
                </div>
              </S.WrappedCheckbox>
            )}

            {row?.cols?.map((col, index) => {
              return (
                <S.Td
                  onClick={
                    !!handleClickRow && !!row.id
                      ? () => handleClickRow(row.id!)
                      : undefined
                  }
                  key={index}
                >
                  {col}
                </S.Td>
              )
            })}
            {options && (
              <S.Options>
                <Popover
                  align="end"
                  sideOffset={14}
                  trigger={<DotsThreeVertical size={24} />}
                  content={
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                      }}
                    >
                      {options?.map(({ icon, label, onClick }, index) => {
                        return (
                          <ItemList
                            key={index}
                            onClick={() => onClick(row.id)}
                            iconLeft={icon}
                            label={label}
                            isRounded={hasRounded}
                          />
                        )
                      })}
                    </div>
                  }
                />
              </S.Options>
            )}
          </S.Tr>
        )
      })}
    </S.TBodyContainer>
  )
}
