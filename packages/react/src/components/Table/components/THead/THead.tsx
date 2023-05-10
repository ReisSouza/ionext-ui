import React from 'react'

import * as S from './styles'
import { CaretDown, CaretUp } from 'phosphor-react'
import { CheckedState } from '@radix-ui/react-checkbox'

export type ThreadProps = {
  cols: React.ReactNode[]
  hasIndeterminate: CheckedState | undefined
  onCheckedChange?: (value: boolean) => void
}

export const THead: React.FC<ThreadProps> = ({
  cols,
  hasIndeterminate,
  onCheckedChange,
}: ThreadProps) => {
  return (
    <S.ThreadContainer>
      <tr>
        <S.WrappedCheckbox scope="col">
          <div></div>
        </S.WrappedCheckbox>

        {cols?.map((col, index) => {
          return (
            <th scope="col" key={index}>
              <S.WrappedContentTh>
                {col}
                <S.WrappedAscAndDesc>
                  <CaretUp size={10} />
                  <CaretDown size={10} />
                </S.WrappedAscAndDesc>
              </S.WrappedContentTh>
            </th>
          )
        })}
        <S.Options>
          <div>Ações</div>
        </S.Options>
      </tr>
    </S.ThreadContainer>
  )
}
