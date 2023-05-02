import React from 'react'
import dayjs from 'dayjs'

import * as S from './styles'
import { CaretDown, CaretLeft, CaretRight } from '@phosphor-icons/react'

export type HeaderProps = {
  currentDate: dayjs.Dayjs
  setCurrentDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>
  onSelectYear?: () => void | undefined
  onChangeMonth: (month: number) => void
}

export const Header: React.FC<HeaderProps> = ({
  currentDate,
  setCurrentDate,
  onSelectYear,
  onChangeMonth,
}: HeaderProps) => {
  const currentMonth = currentDate.format('MMMM')
  const currentYear = currentDate.format('YYYY')

  function handlePreviousMonth() {
    const newCurrentDate = currentDate.subtract(1, 'months')
    const previousMonthDate = newCurrentDate
    setCurrentDate(previousMonthDate)
    onChangeMonth(newCurrentDate.get('month'))
  }

  function handleNextMonth() {
    const newCurrentDate = currentDate.add(1, 'months')
    const previousMonthDate = newCurrentDate
    setCurrentDate(previousMonthDate)
    onChangeMonth(newCurrentDate.get('month'))
  }

  return (
    <S.HeaderContainer>
      <time>
        <S.CalendarTitle>
          {currentMonth}
          <button onClick={onSelectYear}>
            {currentYear} <CaretDown />
          </button>
        </S.CalendarTitle>
      </time>
      <S.CalendarActions>
        <button
          type="button"
          onClick={handlePreviousMonth}
          title="Previous month"
        >
          <CaretLeft />
        </button>
        <button type="button" onClick={handleNextMonth} title="Next month">
          <CaretRight />
        </button>
      </S.CalendarActions>
    </S.HeaderContainer>
  )
}
