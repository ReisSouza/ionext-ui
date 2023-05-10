import React from 'react'

import * as S from './styles'
import { CalendarWeeks } from '../../Calendar'
import dayjs from 'dayjs'

export type TbodyProps = {
  calendarWeeks: CalendarWeeks
  onDateSelected: (date: Date) => void
  selectedDate: Date | null
}

export const Tbody: React.FC<TbodyProps> = ({
  calendarWeeks,
  onDateSelected,
  selectedDate,
}: TbodyProps) => {
  return (
    <S.TbodyContainer>
      {calendarWeeks.map(({ days, week }, indexRow) => {
        return (
          <tr key={week}>
            {days.map(({ date, disabled, isCurrentMonth }, index) => {
              return (
                <td key={date.toString()}>
                  <S.CalendarDay
                    type="button"
                    isCurrentMonth={isCurrentMonth}
                    selected={
                      dayjs(selectedDate).format('DD/MM/YYYY') ===
                      dayjs(date.toDate()).format('DD/MM/YYYY')
                    }
                    disabled={disabled}
                    onClick={() => {
                      onDateSelected(date.toDate())
                    }}
                  >
                    {date.get('date')}
                  </S.CalendarDay>
                </td>
              )
            })}
          </tr>
        )
      })}
    </S.TbodyContainer>
  )
}
