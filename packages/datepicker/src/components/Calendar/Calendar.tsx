import dayjs from 'dayjs'
import { TextField } from '@ionext-ui/react'
import { CalendarPlus } from 'phosphor-react'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import '@/utils/dayjs'

import * as S from './styles'
import { Tbody } from './modules/Tbody/Tbody'
import { THead } from './modules/THead/THead'
import { Header } from './modules/Header/Header'
import { Years } from '../Years/Years'

interface CalendarWeek {
  week: number
  days: Array<{
    date: dayjs.Dayjs
    disabled: boolean
    isCurrentMonth: boolean
  }>
}

export type CalendarWeeks = CalendarWeek[]

export interface DatepickerProps {
  defaultValue?: string | null
  value?: string
  onChangeValue: (date: string | null) => void
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
  open?: boolean
  defaultOpen?: boolean
}

export const Datepicker: React.FC<DatepickerProps> = ({
  defaultValue,
  defaultOpen,
  open,
  setOpen,
  value,
  onChangeValue,
}: DatepickerProps) => {
  const [_open, _setOpen] = useState<boolean>(defaultOpen || false)
  const [openSelectYear, setOpenSelectYear] = useState<boolean>(false)
  const [dateInvalid, setDateInvalid] = useState(false)
  const [onKeyPressed, setOnKeyPressed] = useState<
    'ArrowDown' | 'ArrowUp' | undefined
  >(undefined)
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set('date', 1)
  })

  const [selectedDate, setSelectedDate] = useState<Date>(
    dayjs(defaultValue).toDate() || new Date(),
  )

  const calendarWeeks = useMemo(() => {
    const daysInMonthArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, i) => {
      return currentDate.set('date', i + 1)
    })

    const firstWeekDay = currentDate.get('day')

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

  const useClickBody = useCallback(
    (event: any) => {
      if (!event.target.closest('.meu-elemento')) {
        setOpen ? setOpen(false) : _setOpen(false)
        setOpenSelectYear(false)
      }
    },
    [setOpen],
  )

  useEffect(() => {
    document.addEventListener('click', useClickBody)

    return () => {
      document.removeEventListener('click', useClickBody)
    }
  }, [useClickBody])

  const handleDateSelected = (date: Date) => {
    setSelectedDate(date)
    setOpen ? setOpen(false) : _setOpen(false)
    onChangeValue(dayjs(date).format('YYYY-MM-DD'))
  }

  const handleDateChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const key = event.key
    const isArrowUp = key === 'ArrowUp'
    const isArrowDown = key === 'ArrowDown'
    if (dateInvalid) {
      if (dateInvalid) {
        if (isArrowUp) return setOnKeyPressed('ArrowUp')
        if (isArrowDown) return setOnKeyPressed('ArrowDown')
      }
    }
  }

  const handleUpdatedArrowDown = () => {
    const daysInMonth = dayjs(selectedDate).subtract(1, 'month').daysInMonth()

    const newCurrentMonth = dayjs(selectedDate)
      .subtract(1, 'month')
      .get('month')
    const newCurrentDate = dayjs(currentDate)
      .set('date', daysInMonth)
      .set('month', newCurrentMonth)
      .toDate()
    setCurrentDate(
      dayjs(currentDate).set('date', 1).set('month', newCurrentMonth),
    )
    setSelectedDate(newCurrentDate)
    onChangeValue(dayjs(newCurrentDate).format('YYYY-MM-DD'))
  }

  const handleUpdatedArrowUp = () => {
    const daysInMonth = dayjs(selectedDate).add(1, 'month').daysInMonth()
    const newCurrentMonth = dayjs(selectedDate).add(1, 'month').get('month')
    const newCurrentDate = dayjs(currentDate)
      .set('date', daysInMonth)
      .set('month', newCurrentMonth)
      .toDate()
    setCurrentDate(
      dayjs(currentDate).set('date', 1).set('month', newCurrentMonth),
    )
    setSelectedDate(newCurrentDate)
    onChangeValue(dayjs(newCurrentDate).format('YYYY-MM-DD'))
  }

  useEffect(() => {
    if (dateInvalid && onKeyPressed === 'ArrowDown')
      return handleUpdatedArrowDown()
    if (dateInvalid && onKeyPressed === 'ArrowUp') return handleUpdatedArrowUp()
  }, [dateInvalid, onKeyPressed])

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
        value={value || dayjs(selectedDate).format('YYYY-MM-DD')}
        onChange={(v) => {
          const newDate = dayjs(v.target.value)
          setDateInvalid(!newDate.isValid())
          if (!newDate.isValid()) {
            return setCurrentDate(dayjs().set('date', 1))
          }
          onChangeValue(newDate.format('YYYY-MM-DD'))
          setSelectedDate(newDate.toDate())
          setCurrentDate(newDate.set('date', 1))
        }}
        onKeyDown={(e) => handleDateChange(e)}
        onFocus={() => (setOpen ? setOpen(true) : _setOpen(true))}
      />

      <S.CalendarContainer isOpen={open || _open}>
        <Years
          isOpen={openSelectYear}
          onYearsChange={(year) => {
            const newDate = dayjs(selectedDate).year(Number(year)).toDate()
            setCurrentDate((prevState) => prevState.year(Number(year)))
            setSelectedDate(newDate)
            onChangeValue(dayjs(newDate).format('YYYY-MM-DD'))
            setOpenSelectYear(false)
          }}
          open={openSelectYear}
        />

        <Header
          onChangeMonth={(month) => {
            const newDate = dayjs(selectedDate).set('month', month).toDate()
            onChangeValue(dayjs(newDate).format('YYYY-MM-DD'))
            setSelectedDate(newDate)
          }}
          onSelectYear={() => {
            setOpenSelectYear(true)
          }}
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
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
