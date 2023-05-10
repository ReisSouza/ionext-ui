import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as S from './styles'

import { ChangePasswordSchema, ChangePasswordType } from './validation'
import { Button, Heading, TextField } from '@ionext-ui/react'
import { useRouter } from 'next/router'

export const ChangePassword = () => {
  const { push } = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ChangePasswordType>({
    resolver: zodResolver(ChangePasswordSchema),
  })

  const canSubmit =
    watch('password') !== undefined && watch('confirmPassword') !== undefined

  return (
    <S.ContainerFormChangePassword>
      <Heading align="center" color="secondary">
        Redefina sua senha
      </Heading>
      <S.FormChangePassword onSubmit={handleSubmit(() => {})}>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Crie uma senha"
              type="password"
              hint={errors.password?.message}
              status={errors.password?.message ? 'error' : 'default'}
            />
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Confirme uma senha"
              type="password"
              hint={errors.confirmPassword?.message}
              status={errors.confirmPassword?.message ? 'error' : 'default'}
            />
          )}
        />
        <Button
          fullWidth
          type="button"
          variant="outlined"
          css={{ marginTop: '$4' }}
          onClick={() => push('/auth/login')}
        >
          Voltar
        </Button>
        <Button disabled={!canSubmit} fullWidth type="submit">
          Continuar
        </Button>
      </S.FormChangePassword>
    </S.ContainerFormChangePassword>
  )
}
