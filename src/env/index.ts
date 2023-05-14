import { config } from 'dotenv'
import { z } from 'zod'

let envToRead

if (process.env.NODE_ENV === 'test') {
  envToRead = config({ path: '.env.test' })
} else {
  envToRead = config()
}

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_CLIENT: z.enum(['sqlite', 'pg']),
  DATABASE_URL: z.string(),
  PORT: z.coerce.number().default(3333),
})

const _env = envSchema.safeParse(envToRead.parsed)

if (_env.success === false) {
  console.error('Invalid environment variables!', _env.error.format())

  throw new Error('Invalid environment variables')
}

export const env = _env.data
