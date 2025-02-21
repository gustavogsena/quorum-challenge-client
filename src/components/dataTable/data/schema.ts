import { z } from "zod"

export const sponsorSchema = z.object({ id: z.number(), name: z.string() })
export const legislatorBillSchema = z.object({ id: z.number(), title: z.string(), sponsorId: z.number(), sponsor: z.nullable(sponsorSchema) })
export const resultSchema = z.object({ support: z.number(), oppose: z.number() })

export const billsSchema = z.object({
  id: z.number(),
  sponsor: z.nullable(sponsorSchema),
  sponsorId: z.number(),
  title: z.string(),
  votesResult: z.array(z.object({ voteId: z.number(), result: resultSchema })),
})

export const legislatorSchema = z.object({
  id: z.number(),
  name: z.string(),
  votes: z.array(z.object({ voteId: z.number(), vote: z.number().refine((val) => val === 1 || val === 2), bill: legislatorBillSchema })),
  total: resultSchema
})

export type Bill = z.infer<typeof billsSchema>
export type Legislator = z.infer<typeof legislatorSchema>