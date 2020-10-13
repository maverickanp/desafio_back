/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import { Request, Response } from 'express'

export const checkJwt = (req: Request, res: Response): void => {
  try {
    if (req.headers.authorization == null) {
      res.status(401).json({ msg: 'not authorized' })
    }
  } catch (error) {
    res.status(401).json({ msg: 'not authorized' })
  }
}
