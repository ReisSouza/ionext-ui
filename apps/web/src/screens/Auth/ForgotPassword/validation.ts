import { z } from 'zod'

export const ForgotPasswordSchema = z.object({
  email: z
    .string({ required_error: 'Email e obrigatório' })
    .email({ message: 'Email invalido' }),
})

export type ForgotPasswordFormType = z.infer<typeof ForgotPasswordSchema>
