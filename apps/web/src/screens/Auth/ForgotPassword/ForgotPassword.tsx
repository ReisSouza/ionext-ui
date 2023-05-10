import React from 'react'
import { useRouter } from 'next/router'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as S from './styles'

import { Button, Heading, Paragraph, TextField } from '@ionext-ui/react'
import { ForgotPasswordFormType, ForgotPasswordSchema } from './validation'

export const ForgotPassword = () => {
  const { push, back } = useRouter()
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormType>({
    resolver: zodResolver(ForgotPasswordSchema),
  })

  const handleForgotPassword = async (data: ForgotPasswordFormType) => {
    try {
      await push('/')
    } catch (error) {}
  }

  return (
    <S.Container onSubmit={handleSubmit(handleForgotPassword)}>
      <div>
        <Heading align="center" color="secondary">
          Esqueci a senha
        </Heading>
        <Paragraph color="secondary" css={{ fontWeight: 300 }}>
          Confirme seu e-mail, e através dele realize a recuperação de senha.
        </Paragraph>
      </div>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Faça login"
            hint={errors.email?.message}
            placeholder="Login com email"
            status={errors.email?.message !== undefined ? 'error' : 'default'}
          />
        )}
      />
      <Button
        type="button"
        isLoading={isSubmitting}
        fullWidth
        variant="outlined"
        onClick={() => back()}
      >
        Voltar
      </Button>
      <Button
        type="submit"
        isLoading={isSubmitting}
        disabled={!watch('email')}
        fullWidth
        css={{ marginTop: '$space-4' }}
      >
        Recuperar senha
      </Button>
    </S.Container>
  )
}
