/* eslint-disable no-case-declarations */
import React, { KeyboardEvent, useEffect, useRef, useState } from 'react'
import * as S from './styles'
import { TextField } from '../TextField/TextField'
import dayjs from 'dayjs'
import { Clock } from 'phosphor-react'

export type TimePickerProps = {
  onTimeChange: (time: string) => void
}

const TimePicker: React.FC<TimePickerProps> = ({
  onTimeChange = (value) => console.log(value),
  ...rest
}: TimePickerProps) => {
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [time, setTime] = useState(dayjs())
  const [inputValue, setInputValue] = useState(time.format('HH:mm'))
  const [isOpen, setIsOpen] = useState(false)
  const [activeSelection, setActiveSelection] = useState<'hour' | 'minute'>(
    'hour',
  )
  const containerRef = useRef<HTMLDivElement>(null)
  const hourButtonsRef = useRef<Array<HTMLButtonElement | null>>(
    Array.from(Array(24)).map(() => null),
  )
  const minuteButtonsRef = useRef<Array<HTMLButtonElement | null>>(
    Array.from(Array(60)).map(() => null),
  )

  const hours = Array.from(Array(24).keys())
  const minutes = Array.from(Array(60).keys())

  const handleHourClick = (hour: number) => {
    const newTime = dayjs(time).hour(hour)
    setTime(newTime)
    setInputValue(newTime.format('HH:mm'))
    onTimeChange(newTime.format('HH:mm'))
  }

  const handleMinuteClick = (minute: number) => {
    const newTime = dayjs(time).minute(minute)
    setTime(newTime)
    setInputValue(newTime.format('HH:mm'))
    onTimeChange(newTime.format('HH:mm'))
    setIsOpen(false)
  }

  const handleDateTimeInputChange = (value: string | undefined) => {
    setInputValue(value || '')
  }

  const handleInputClick = () => {
    setIsOpen(true)
    setActiveSelection('hour')
  }

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (isOpen) {
      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault()
          handlePrevious(event.currentTarget)
          break
        case 'ArrowDown':
          event.preventDefault()
          handleNext(event.currentTarget)
          break
        case 'ArrowLeft':
          event.preventDefault()
          setActiveSelection(activeSelection === 'hour' ? 'minute' : 'hour')
          break
        case 'ArrowRight':
          event.preventDefault()
          if (isInputFocused) {
            setIsOpen(true)
          }
          setActiveSelection(activeSelection === 'hour' ? 'minute' : 'hour')
          break
        case 'Enter':
          event.preventDefault()
          const value = parseInt(
            event.currentTarget.getAttribute('data-value') || '0',
          )
          updateInputValue(value)
          if (activeSelection === 'hour') {
            setActiveSelection('minute')
          } else {
            setIsOpen(false)
          }
          break
        default:
          break
      }
    }
  }

  const handleKeyDownInput = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setIsOpen(true)
    }
  }

  const handleInputFocus = () => {
    setIsInputFocused(true)
  }
  const handleInputBlur = () => {
    setIsInputFocused(false)
  }

  const handlePrevious = (currentButton: HTMLButtonElement) => {
    const index = parseInt(currentButton.getAttribute('data-index') || '0')
    const buttonsRef =
      activeSelection === 'hour' ? hourButtonsRef : minuteButtonsRef

    if (buttonsRef.current) {
      const previousIndex =
        index === 0 ? buttonsRef.current.length - 1 : index - 1
      buttonsRef.current[previousIndex]?.focus()
      const value = parseInt(
        buttonsRef.current[previousIndex]?.getAttribute('data-value') || '0',
      )
      updateInputValue(value)
    }
  }

  const handleNext = (currentButton: HTMLButtonElement) => {
    const index = parseInt(currentButton.getAttribute('data-index') || '0')
    const buttonsRef =
      activeSelection === 'hour' ? hourButtonsRef : minuteButtonsRef

    if (buttonsRef.current) {
      const nextIndex = index === buttonsRef.current.length - 1 ? 0 : index + 1
      buttonsRef.current[nextIndex]?.focus()
      const value = parseInt(
        buttonsRef.current[nextIndex]?.getAttribute('data-value') || '0',
      )
      updateInputValue(value)
    }
  }

  const updateInputValue = (value: number) => {
    const newTime =
      activeSelection === 'hour'
        ? dayjs(time).hour(value)
        : dayjs(time).minute(value)
    setTime(newTime)
    setInputValue(newTime.format('HH:mm'))
    onTimeChange(newTime.format('HH:mm'))
  }

  const focusButtonByValue = (
    value: number,
    buttonsRef: React.RefObject<Array<HTMLButtonElement | null>>,
  ) => {
    if (buttonsRef.current) {
      const index = buttonsRef.current.findIndex(
        (button) =>
          parseInt(button?.getAttribute('data-value') || '0') === value,
      )
      buttonsRef.current[index]?.focus()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      if (activeSelection === 'hour') {
        focusButtonByValue(time.hour(), hourButtonsRef)
      } else {
        focusButtonByValue(time.minute(), minuteButtonsRef)
      }
    }
  }, [isOpen, activeSelection])

  useEffect(() => {
    const newTime = dayjs(inputValue, 'HH:mm')
    if (newTime.isValid() && newTime.format('HH:mm') !== time.format('HH:mm')) {
      setTime(newTime)
      onTimeChange(newTime.format('HH:mm'))
    }
  }, [inputValue])

  useEffect(() => {
    if (isOpen && activeSelection === 'hour') {
      focusButtonByValue(time.hour(), hourButtonsRef)
    }
  }, [isOpen, activeSelection, time])

  useEffect(() => {
    if (isOpen && activeSelection === 'minute') {
      focusButtonByValue(time.minute(), minuteButtonsRef)
    }
  }, [isOpen, activeSelection, time])

  return (
    <S.TimePickerContainer ref={containerRef}>
      <TextField
        type="time"
        value={inputValue}
        onChange={handleDateTimeInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onKeyDown={handleKeyDownInput}
        iconRight={<Clock size={24} onClick={handleInputClick} />}
      />
      {isOpen && (
        <S.DropdownContainer>
          <S.WrappedHour>
            {hours.map((hour, index) => (
              <S.Button
                key={hour}
                ref={(el) => (hourButtonsRef.current[index] = el)}
                className={`hour-button ${
                  activeSelection === 'hour' && hour === time.hour()
                    ? 'active'
                    : ''
                }`}
                data-value={hour}
                data-index={index}
                onClick={() => handleHourClick(hour)}
                onKeyDown={handleKeyDown}
              >
                {hour.toString().padStart(2, '0')}
              </S.Button>
            ))}
          </S.WrappedHour>
          <S.WrappedMinutes>
            {minutes.map((minute, index) => (
              <S.Button
                key={minute}
                ref={(el) => (minuteButtonsRef.current[index] = el)}
                className={`minute-button ${
                  activeSelection === 'minute' && minute === time.minute()
                    ? 'active'
                    : ''
                }`}
                data-value={minute}
                data-index={index}
                onClick={() => handleMinuteClick(minute)}
                onKeyDown={handleKeyDown}
              >
                {minute.toString().padStart(2, '0')}
              </S.Button>
            ))}
          </S.WrappedMinutes>
        </S.DropdownContainer>
      )}
    </S.TimePickerContainer>
  )
}

export default TimePicker
