import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionsRoutes } from './routes/transactions'

export const app = fastify()

app.get('/', async (request, reply) => {
  return reply.status(200).send()
})

app.register(cookie)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})
