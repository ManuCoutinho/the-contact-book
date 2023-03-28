import express from 'express'
import { router } from './routes.mjs'

const app = express()

app.use(express.json())

app.use(router)
app.listen(3333, () => console.log('🥸 Server started at http://localhost:3333'))
