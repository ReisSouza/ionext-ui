import React from 'react'

import * as S from './styles'

import {
  FunnelSimple,
  MagnifyingGlass,
  Plus,
  TrashSimple,
} from 'phosphor-react'
import { Button } from '@/components/Button/Button'
import { TextField } from '@/components/TextField/TextField'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FilterFormData, filterSchema } from './validation'

export type HeaderProps = {
  itemsChecked?: string[]
  onItemsRemove?: (items: string[]) => void
  onAdd?: () => void
  disabledOnAdd?: boolean
  labelButtonAdd?: string
  iconButtonAdd?: React.ReactNode
  onFilter?: (data: FilterFormData) => void
  onOpenFilterAside?: () => void
  hasRounded?: boolean
}

export const Header: React.FC<HeaderProps> = ({
  itemsChecked,
  onItemsRemove,
  labelButtonAdd,
  iconButtonAdd,
  disabledOnAdd,
  onOpenFilterAside,
  hasRounded,
  onFilter,
  onAdd,
}: HeaderProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FilterFormData>({
    resolver: zodResolver(filterSchema),
  })
  return (
    <S.HeaderContainer>
      <S.HeaderWrappedFilter>
        {itemsChecked && itemsChecked?.length > 0 && !!onItemsRemove && (
          <Button
            size="small"
            color="danger"
            iconButton={<TrashSimple size={20} />}
            onClick={() => onItemsRemove(itemsChecked)}
          />
        )}
        {onFilter && (
          <S.WrappedSearch onSubmit={handleSubmit(onFilter)}>
            <Controller
              name="filter"
              control={control}
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    size="small"
                    hint={errors.filter?.message}
                  />
                )
              }}
            />
            <Button
              type="submit"
              size="small"
              iconButton={<MagnifyingGlass size={20} />}
            />
          </S.WrappedSearch>
        )}
        {onOpenFilterAside && (
          <Button
            variant="text"
            size="small"
            iconButton={<FunnelSimple size={20} />}
            onClick={onOpenFilterAside}
          />
        )}
      </S.HeaderWrappedFilter>
      {labelButtonAdd && onAdd && (
        <Button
          size="small"
          onClick={onAdd}
          hasRounded={hasRounded}
          disabled={disabledOnAdd}
          iconRight={iconButtonAdd || <Plus size={20} />}
        >
          {labelButtonAdd}
        </Button>
      )}
    </S.HeaderContainer>
  )
}
