import React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'

import * as S from './styles'

export type SelectProps = {}

export const Select: React.FC<SelectProps> = ({}: SelectProps) => {
  return (
    <S.SelectRoot>
      <SelectPrimitive.Trigger>
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon />
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content>
          <SelectPrimitive.ScrollUpButton />
          <SelectPrimitive.Viewport>
            <SelectPrimitive.Item>
              <SelectPrimitive.ItemText />
              <SelectPrimitive.ItemIndicator />
            </SelectPrimitive.Item>
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton />
          <SelectPrimitive.Arrow />
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </S.SelectRoot>
  )
}
