/* eslint-disable no-case-declarations */
import React, { useState } from 'react'
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
  const [inputValue, setInputValue] = useState<string | undefined>(
    dayjs().format('HH:mm'),
  )
  const [isOpen, setIsOpen] = useState(false)
  const hours = Array.from(Array(24).keys())
  const minutes = Array.from(Array(60).keys())

  return (
    <S.TimePickerContainer>
      <TextField
        type="time"
        value={inputValue}
        onChange={(v: string | undefined) => setInputValue(v)}
        iconRight={<Clock size={24} onClick={() => setIsOpen(true)} />}
      />
      {isOpen && (
        <S.DropdownContainer>
          <S.WrappedHour>
            {hours.map((hour, index) => (
              <S.Button
                key={hour}
                data-value={hour}
                isActive
                data-index={index}
              >
                {hour.toString().padStart(2, '0')}
              </S.Button>
            ))}
          </S.WrappedHour>
          <S.WrappedMinutes>
            {minutes.map((minute, index) => (
              <S.Button
                key={minute}
                data-value={minute}
                isActive
                data-index={index}
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
