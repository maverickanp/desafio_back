/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import { UserEntity } from '../../entities/users.entity'
import 'dotenv/config'

const { ACCESS_TOKEN_SECRET }: any = process.env

export class AuthController {
  public login (req: Request, res: Response): void {
    // check email and password
    // retrieve user object from database
    // jwt sign with access token
    // respond with user and token
    try {
      const user: UserEntity = req.body.user
      const accessToken = jwt.sign(user, ACCESS_TOKEN_SECRET)
      console.log(user)
      res.json({ user, accessToken: accessToken })
    } catch (error) {
      res.send(400).json({ message: error.message })
    }
  }
}
