import express from 'express'
import { authController } from '../../controllers'

const app = express()

app.use(express.json())

export const router = express.Router({
  strict: true
})

console.log('login')

router.post('/', authController.login.bind(authController))
// router.delete('/logout', authController.revoke.bind(authController))
