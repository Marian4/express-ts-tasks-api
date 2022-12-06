import { Request, Response } from 'express'
import UserService from '../services/UserService'

class UserController {

    async create (req: Request, res: Response){
        const user = await UserService.create(req.body)

        res.status(201).json(user)
    }

    async show (req: Request, res: Response){
        const user = await UserService.show({ id: req.params.id })

        res.status(200).json(user)
    }
}

export default new UserController()