import React, { useId, useState } from 'react'
import { CaretDown, Check, WarningCircle } from 'phosphor-react'
import { ComponentProps } from '@stitches/react'
import * as SelectPrimitive from '@radix-ui/react-select'

import * as S from './styles'

export type SelectItemProps = {
  label: string
  value: string
  disabled?: boolean
  labelGroup?: string
  group?: {
    disabled?: boolean
    label: string
    value: string
  }[]
}
export type AlignProps = 'start' | 'center' | 'end'
export type SizeProps = 'small' | 'medium' | 'large'
export type SideProps = 'top' | 'right' | 'bottom' | 'left'

export type SelectProps = ComponentProps<typeof SelectPrimitive.Root> & {
  options: SelectItemProps[]
  size?: SizeProps
  placeholder?: string
  side?: SideProps
  sideOffset?: number
  align?: AlignProps
  alignOffset?: number
  avoidCollisions?: boolean
  collisionPadding?: number | Partial<Record<SideProps, number>>
  arrowPadding?: number
  hasIconHint?: boolean
  hint?: string
  complementLabel?: string
  label?: string
  htmlFor?: string
  isRequired?: boolean
}

export type ItemProps = SelectPrimitive.SelectItemProps & {
  selected?: boolean
}

export const SelectItem = React.forwardRef(
  (
    { children, selected, disabled, ...props }: ItemProps,
    forwardedRef: React.Ref<HTMLDivElement> | undefined,
  ) => {
    return (
      <S.SelectItem
        disabled={disabled}
        selected={selected}
        {...props}
        ref={forwardedRef}
      >
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        <S.SelectItemIndicator>
          <Check size={16} />
        </S.SelectItemIndicator>
      </S.SelectItem>
    )
  },
)

SelectItem.displayName = 'SelectItem'

export const Select = ({
  options,
  placeholder = 'selecione',
  label,
  htmlFor,
  size,
  disabled,
  hint,
  complementLabel,
  hasIconHint,
  isRequired,
  ...rest
}: SelectProps) => {
  const [valueSelected, setValueSelected] = useState<string | undefined>()
  const id = useId()
  return (
    <S.Container>
      <SelectPrimitive.Root
        {...rest}
        disabled={disabled}
        onValueChange={(v) => {
          setValueSelected(v)
          if (rest.onValueChange) {
            rest.onValueChange(v)
          }
        }}
      >
        {label && (
          <S.Label disabled={disabled} size={size} htmlFor={htmlFor || id}>
            {label} <span>{complementLabel}</span>{' '}
            {isRequired && <span className="isRequired">*</span>}
          </S.Label>
        )}
        <S.SelectTrigger size={size}>
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon>
            <CaretDown size={16} />
          </SelectPrimitive.Icon>
        </S.SelectTrigger>

        <SelectPrimitive.Portal>
          <S.SelectContent
            side={rest.side}
            align={rest.align}
            alignOffset={rest.alignOffset}
            sideOffset={rest.sideOffset}
            avoidCollisions={rest.avoidCollisions}
            collisionPadding={rest.collisionPadding}
          >
            <S.SelectScrollUpButton />
            <S.SelectViewport>
              {options?.map((option, index) => {
                if (option.group) {
                  return (
                    <>
                      <S.SelectSeparator />
                      <SelectPrimitive.Group key={index}>
                        <S.SelectLabel>{option.labelGroup}</S.SelectLabel>
                        {option.group.map((optionGroup, index) => {
                          return (
                            <SelectItem
                              selected={optionGroup.value === valueSelected}
                              key={index}
                              value={optionGroup.value}
                            >
                              {optionGroup.label}
                            </SelectItem>
                          )
                        })}
                      </SelectPrimitive.Group>
                    </>
                  )
                }
                return (
                  <SelectItem
                    key={index}
                    value={option.value}
                    selected={option.value === valueSelected}
                  >
                    {option.label}
                  </SelectItem>
                )
              })}

              <SelectPrimitive.Separator />
            </S.SelectViewport>
            <S.SelectScrollDownButton>
              <CaretDown size={16} />
            </S.SelectScrollDownButton>
            <SelectPrimitive.Arrow />
          </S.SelectContent>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
      {hint && (
        <S.Hint>
          {hasIconHint && <WarningCircle size={24} />}
          {hint}
        </S.Hint>
      )}
    </S.Container>
  )
}
