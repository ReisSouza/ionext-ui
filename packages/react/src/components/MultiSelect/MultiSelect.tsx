import React, { useState, useRef, useEffect } from 'react'
import * as S from './styles'
interface Option {
  label: string
  value: string
}

interface CustomSelectProps {
  options: Option[]
  multiple: boolean
  onChange: (selected: string[]) => void
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  multiple,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const selectButtonRef = useRef<HTMLButtonElement>(null)

  const handleSelectToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleDropdownItemClick = (value: string) => {
    if (multiple) {
      const isSelected = selectedOptions.includes(value)
      const updatedOptions = isSelected
        ? selectedOptions.filter((option) => option !== value)
        : [...selectedOptions, value]
      setSelectedOptions(updatedOptions)
      onChange(updatedOptions)
    } else {
      setSelectedOptions([value])
      onChange([value])
      setIsOpen(false)
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectButtonRef.current &&
      !selectButtonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault()
      const currentIndex = options.findIndex(
        (option) => option.value === selectedOptions[0],
      )
      if (currentIndex !== -1) {
        const nextIndex =
          event.key === 'ArrowUp' ? currentIndex - 1 : currentIndex + 1
        const length = options.length
        const newIndex =
          nextIndex < 0 ? length - 1 : nextIndex >= length ? 0 : nextIndex
        const newValue = options[newIndex].value
        setSelectedOptions([newValue])
      }
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleDropdownItemClick(selectedOptions[0])
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <S.SelectContainer>
      <S.SelectButton ref={selectButtonRef} onClick={handleSelectToggle}>
        {multiple
          ? 'Selecionar opções'
          : options.find((option) => option.value === selectedOptions[0])
              ?.label}
      </S.SelectButton>
      {isOpen && (
        <S.Dropdown>
          {options.map((option) => (
            <S.DropdownItem
              key={option.value}
              className={
                selectedOptions.includes(option.value) ? 'selected' : ''
              }
              onClick={() => handleDropdownItemClick(option.value)}
            >
              {option.label}
            </S.DropdownItem>
          ))}
        </S.Dropdown>
      )}
    </S.SelectContainer>
  )
}
