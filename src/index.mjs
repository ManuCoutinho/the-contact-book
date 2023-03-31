import express from 'express'
import { routes } from './routes.mjs'
import 'express-async-errors'

const app = express()

app.use(express.json())
app.use(routes)
app.use((error, request, res, next) => {
  console.log('*******ERROR', error)
  res.sendStatus(500)
})

app.listen(3333, () => console.log('🥸 Server started at http://localhost:3333'))
