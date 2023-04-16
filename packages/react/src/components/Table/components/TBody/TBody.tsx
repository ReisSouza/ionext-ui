import React, { ReactNode } from 'react'

import * as S from './styles'
import { Checkbox } from '@/components/Checkbox/Checkbox'
import { DotsThreeVertical } from 'phosphor-react'

export type OptionsTableProps = {
  label: ReactNode
  iconName: string
  onClick: () => void
}
export type RowsProps = {
  cols: ReactNode[]
  id?: string | number
  options?: OptionsTableProps[]
}

export type TBodyProps = {
  rows: RowsProps[]
  handleClickRow?: (id: string | number) => void
  setItemsChecked?: React.Dispatch<React.SetStateAction<string[]>>
  itemsChecked?: string[]
  onItemsChecked?: (itemsChecked: string[]) => void
  onChecked?: (id: string | number | undefined) => void
}

export const TBody: React.FC<TBodyProps> = ({
  rows,
  handleClickRow,
  itemsChecked,
  setItemsChecked,
  onItemsChecked,
  onChecked,
}: TBodyProps) => {
  const handleOnCheckChanged = (id: string | number | undefined) => {
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
            <S.WrappedCheckbox>
              <div>
                <Checkbox
                  isSmall
                  checked={itemsChecked?.includes(`${row.id}`)}
                  value={row.id}
                  onCheckedChange={() => handleOnCheckChanged(row.id)}
                />
              </div>
            </S.WrappedCheckbox>

            {row.cols.map((col, index) => {
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
            {!!row?.options && (
              <S.Options>
                <div>
                  <DotsThreeVertical size={24} />
                </div>
              </S.Options>
            )}
          </S.Tr>
        )
      })}
    </S.TBodyContainer>
  )
}
