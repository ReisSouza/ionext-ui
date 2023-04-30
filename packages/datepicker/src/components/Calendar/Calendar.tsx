import dayjs from 'dayjs'
import { TextField } from '@ionext-ui/react'
import { CalendarPlus } from 'phosphor-react'
import React, { useEffect, useMemo, useRef, useState } from 'react'

import * as S from './styles'
import { Tbody } from './modules/Tbody/Tbody'
import { THead } from './modules/THead/THead'
import { Header } from './modules/Header/Header'

interface CalendarWeek {
  week: number
  days: Array<{
    date: dayjs.Dayjs
    disabled: boolean
    isCurrentMonth: boolean
  }>
}

export type CalendarWeeks = CalendarWeek[]

export interface CalendarProps {
  selectedDate?: Date | null
  defaultValue?: Date | null
  onDateSelected: (date: Date | null) => void
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
  open?: boolean
  defaultOpen?: boolean
}

export const Calendar: React.FC<CalendarProps> = ({
  defaultValue,
  defaultOpen,
  open,
  setOpen,
  onDateSelected,
}: CalendarProps) => {
  const [_open, _setOpen] = useState(defaultOpen || false)

  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set('date', 1)
  })

  const [selectedDate, setSelectedDate] = useState<Date>(
    defaultValue || new Date(),
  )

  const calendarWeeks = useMemo(() => {
    const daysInMonthArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, i) => {
      return currentDate.set('date', i + 1) // Date is day
    })

    const firstWeekDay = currentDate.get('day') // Day of week

    const previousMonthFillArray = Array.from({
      length: firstWeekDay,
    })
      .map((_, i) => {
        return currentDate.subtract(i + 1, 'day')
      })
      .reverse()
    const lastDayInCurrentMonth = currentDate.set(
      'date',
      currentDate.daysInMonth(),
    )
    const lastWeedDay = lastDayInCurrentMonth.get('day')

    const nextMouthFillArray = Array.from({
      length: 7 - (lastWeedDay + 1),
    }).map((_, i) => {
      return lastDayInCurrentMonth.add(i + 1, 'day') // Date is day
    })

    const calendarDays = [
      ...previousMonthFillArray.map((date) => {
        return { date, disabled: false, isCurrentMonth: false }
      }),
      ...daysInMonthArray.map((date) => {
        return { date, disabled: false, isCurrentMonth: true }
      }),
      ...nextMouthFillArray.map((date) => {
        return { date, disabled: false, isCurrentMonth: false }
      }),
    ]

    const calendarWeeks2 = calendarDays.reduce<CalendarWeeks>(
      (weeks, _, i, original) => {
        const isNewWeek = i % 7 === 0
        if (isNewWeek) {
          weeks.push({
            week: i / 7 + 1,
            days: original.slice(i, i + 7),
          })
        }
        return weeks
      },
      [],
    )

    return calendarWeeks2
  }, [currentDate])

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  function handleClick(event: any) {
    if (!event.target.closest('.meu-elemento')) {
      setOpen ? setOpen(false) : _setOpen(false)
    }
  }

  const handleDateSelected = (date: Date) => {
    setSelectedDate(date)
    setOpen ? setOpen(false) : _setOpen(false)
    onDateSelected(date)
  }

  return (
    <S.Container className="meu-elemento">
      <TextField
        iconRight={
          <CalendarPlus
            weight="bold"
            size={20}
            onClick={() => (setOpen ? setOpen(true) : _setOpen(true))}
          />
        }
        ref={inputRef}
        type="date"
        value={dayjs(selectedDate).format('YYYY-MM-DD')}
        onChange={(v) => {
          setSelectedDate(dayjs(v.target.value).toDate())
          console.log({ date: dayjs(v.target.value).toDate() })
        }}
        onFocus={() => (setOpen ? setOpen(true) : _setOpen(true))}
      />
      <S.CalendarContainer isOpen={open || _open}>
        <Header currentDate={currentDate} setCurrentDate={setCurrentDate} />
        <S.CalendarBody>
          <THead />
          <Tbody
            selectedDate={selectedDate}
            calendarWeeks={calendarWeeks}
            onDateSelected={handleDateSelected}
          />
        </S.CalendarBody>
      </S.CalendarContainer>
    </S.Container>
  )
}
