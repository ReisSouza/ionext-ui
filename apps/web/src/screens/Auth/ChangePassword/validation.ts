import { validationPassword } from '@/utils/validationPassword'
import { z } from 'zod'

export const ChangePasswordSchema = z
  .object({
    password: z
      .string({ required_error: 'Senha é obrigatório' })
      .min(1, { message: 'Senha é obrigatório' })
      .refine((password) => validationPassword(password), {
        message:
          'Sua senha deve ter pelo menos 8 caracteres, letra maiúscula, letra minúscula, caractere especial e número',
      }),
    confirmPassword: z
      .string({ required_error: 'Confirmação de password e obrigatório' })
      .nonempty({ message: 'Confirmação de password e obrigatório' })
      .min(1, { message: 'Senha é obrigatório' }),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Senhas não confere',
    path: ['confirmPassword'],
  })

export type ChangePasswordType = z.infer<typeof ChangePasswordSchema>
