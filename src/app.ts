import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { healthCheckRoute } from './routes/health-check'
import { transactionsRoutes } from './routes/transactions'

export const app = fastify()

app.register(cookie)
app.register(healthCheckRoute)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})
