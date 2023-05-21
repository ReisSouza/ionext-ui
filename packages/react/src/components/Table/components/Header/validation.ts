import { z } from 'zod'

export const filterSchema = z.object({
  filter: z.string({ required_error: 'Digite algo para buscar!' }),
})

export type FilterFormData = z.infer<typeof filterSchema>
