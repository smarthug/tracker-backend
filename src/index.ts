import { Hono } from 'hono'
import { poweredBy } from 'hono/powered-by'

const app = new Hono()

app.use('*', poweredBy())

app.get('/', (c) => {
  console.log(c)
  console.log(c.req.cf)
  return c.json(c.req.cf)
})

app.get('/ip', (c) => {
  console.log('ip')
  console.log(c.req.cf)
  return c.json(c.req.cf)
})

export default app
