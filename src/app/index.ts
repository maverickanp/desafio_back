/* eslint-disable @typescript-eslint/restrict-template-expressions */
import express from 'express'
import { userRouter, authRouter } from './routes'
import 'dotenv/config'

import { checkJwt } from './middlewares'

const PORT: any = process.env

const app = express()
app.use(express.json())

app.use('/users', [checkJwt], userRouter)

app.use('/login', authRouter)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
