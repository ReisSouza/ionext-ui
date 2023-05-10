import React from 'react'
import { useRouter } from 'next/router'
import * as S from './styles'
import { Button, Heading, TextField, ButtonLink } from '@ionext-ui/react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CredentialsFormData, CredentialsSchema } from './validation'

export type LoginProps = {}

export const Login: React.FC<LoginProps> = ({ ...rest }: LoginProps) => {
  const { push } = useRouter()

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CredentialsFormData>({
    resolver: zodResolver(CredentialsSchema),
  })

  const handleForgotPassword = () => {
    push('/auth/forgot-password')
  }

  return (
    <S.LoginContainer onSubmit={handleSubmit(() => {})}>
      <Heading color="secondary" align="center">
        Entra na plataforma
      </Heading>
      <S.WrappedInputs>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField {...field} hint={errors.email?.message} label="Email" />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              hint={errors.password?.message}
              label="Password"
            />
          )}
        />

        <ButtonLink onClick={() => push('/auth/create')}>
          Criar conta
        </ButtonLink>
      </S.WrappedInputs>
      <Button
        type="button"
        color="secondary"
        variant="outlined"
        fullWidth
        onClick={handleForgotPassword}
      >
        recuperar senha
      </Button>
      <Button type="submit" fullWidth>
        Entrar
      </Button>
    </S.LoginContainer>
  )
}
