import React, { useEffect, useState } from 'react'

import * as S from './styles'
import { CaretDown, CaretUp } from 'phosphor-react'
import { CheckedState } from '@radix-ui/react-checkbox'
import { Checkbox } from '@/components/Checkbox/Checkbox'
import { OptionsTableProps } from '../TBody/TBody'

export type ThreadProps = {
  cols: string[]
  hasIndeterminate: CheckedState
  onCheckedChange?: (value: boolean) => void
  options?: OptionsTableProps[]
  canRenderCheckbox: boolean
  onSort?: ({
    column,
    sort,
  }: {
    column: string
    sort: 'asc' | 'desc' | 'default'
  }) => void
}

export const THead: React.FC<ThreadProps> = ({
  cols,
  hasIndeterminate,
  onCheckedChange,
  options,
  canRenderCheckbox,
  onSort,
}: ThreadProps) => {
  const [sortType, setSortType] = useState<'default' | 'asc' | 'desc'>(
    'default',
  )
  const [selectedColumn, setSelectedColumn] = useState<string>('')

  const handleSortToggle = (col: string) => {
    if (selectedColumn === col) {
      if (sortType === 'asc') {
        setSortType('desc')
      } else {
        setSortType('asc')
      }
    } else {
      setSelectedColumn(col)
      setSortType('asc')
    }
  }

  useEffect(() => {
    onSort && onSort({ column: selectedColumn, sort: sortType })
  }, [selectedColumn, sortType, onSort])
  return (
    <S.ThreadContainer>
      <tr>
        {canRenderCheckbox && (
          <S.WrappedCheckbox scope="col">
            <div>
              <Checkbox
                size="small"
                onCheckedChange={onCheckedChange}
                checked={hasIndeterminate}
              />
            </div>
          </S.WrappedCheckbox>
        )}

        {cols?.map((col, index) => {
          return (
            <S.Th
              hasSort={!!onSort}
              active={col === selectedColumn}
              scope="col"
              key={index}
              onClick={() => (onSort ? handleSortToggle(col) : {})}
            >
              <S.WrappedContentTh>
                {col}
                {onSort && selectedColumn === col && sortType === 'asc' && (
                  <CaretUp size={10} weight="fill" />
                )}
                {onSort && selectedColumn === col && sortType === 'desc' && (
                  <CaretDown size={10} weight="fill" />
                )}
              </S.WrappedContentTh>
            </S.Th>
          )
        })}
        {options && (
          <S.Options>
            <div>Ações</div>
          </S.Options>
        )}
      </tr>
    </S.ThreadContainer>
  )
}
