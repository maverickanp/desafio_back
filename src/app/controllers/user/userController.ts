import { Request, Response } from 'express'
import { CrudController } from '../crudController'

export class UserController extends CrudController {
  public create (req: Request, res: Response): void {
    res.json({ message: 'POST /user CREATE request received' })
  }

  public read (req: Request, res: Response): void {
    // Get users from database
    res.json({ message: 'POST /user READ request received' })
  }

  public update (req: Request, res: Response): void {
    throw new Error('Method not implemented.')
  }

  public delete (req: Request, res: Response): void {
    throw new Error('Method not implemented.')
  }
}
