import "dotenv/config"
import { z } from "zod"

const envSchema = z.object({
  NODE_ENV: z.enum(["dev", "test", "production"]).default("dev"),
  PORT: z.coerce.number().default(3333),
  NAME: z.string(),
  PASSWORD: z.string(),
  COMPANY_ID: z.string(),
  USERS_API: z.string()
})

const response = envSchema.safeParse(process.env)

if (!response.success) {
  console.error("Invalid environment variables.", response.error.format())
  throw new Error("Invalid environment variables.")
}

export const env = response.data
