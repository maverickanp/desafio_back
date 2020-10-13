import { UserController } from './user/userController'
import { AuthController } from './auth/authController'

const userController = new UserController()
const authController = new AuthController()

export {
  userController,
  authController
}
