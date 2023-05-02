import React, { ComponentProps, useEffect, useRef, useState } from 'react'

import * as S from './styles'
import { getYears } from '@/utils/getYears'
import dayjs from 'dayjs'

export type YearsProps = ComponentProps<typeof S.Container> & {
  onYearsChange: (year: string) => void
  isOpen: boolean
}

export const Years: React.FC<YearsProps> = ({
  onYearsChange,
  isOpen,
  ...rest
}: YearsProps) => {
  const [yearSelected, setYearSelected] = useState(
    String(dayjs(new Date()).year()),
  )

  const handleChangeYear = (year: string) => {
    onYearsChange(year)
    setYearSelected(year)
  }

  const yearRefs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    if (isOpen) {
      const index = getYears().findIndex((year) => year === yearSelected)
      if (index !== -1) {
        setTimeout(() => {
          yearRefs.current[index]?.focus()
        }, 300)
      }
    }
  }, [isOpen, yearSelected])

  return (
    <S.Container {...rest}>
      <S.YearsContainer>
        {getYears().map((year, index) => {
          return (
            <S.Year
              ref={(el) => (yearRefs.current[index] = el)}
              key={year}
              selected={year === yearSelected}
              onClick={() => {
                handleChangeYear(year)
              }}
            >
              {year}
            </S.Year>
          )
        })}
      </S.YearsContainer>
    </S.Container>
  )
}
