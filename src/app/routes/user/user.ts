import express from 'express'
import { userController } from '../../controllers'

export const router = express.Router({
  strict: true
})

router.post('/', userController.create.bind(userController))
router.get('/', userController.read.bind(userController))
router.patch('/', userController.update.bind(userController))
router.delete('/', userController.delete.bind(userController))
