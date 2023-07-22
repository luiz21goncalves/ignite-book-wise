import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const ENV = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    GITHUB_ID: z.string().min(1),
    GITHUB_SECRET: z.string().min(1),
    GOOGLE_ID: z.string().min(1),
    GOOGLE_SECRET: z.string().min(1),
    NEXTAUTH_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string().min(1),
  },
  runtimeEnv: process.env,
})
