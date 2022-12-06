import { Request, Response } from 'express'
import AuthenticateService from '../services/AuthenticateService'

class AuthenticateUserController {
    async handle ({ body }: Request, res: Response){
        const response = await AuthenticateService.handle(body)

        res.status(200).json(response)
    }
}

export default AuthenticateUserController