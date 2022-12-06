import { sign } from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import UserService from './UserService'

interface ISignIn {
    email: string;
    password: string;
}

interface IAuthenticationInfo {
    token: string;
    user: {
        name: string;
        email: string;
    }
}

class AuthenticateService{
    async handle({ email, password } : ISignIn) : Promise<IAuthenticationInfo> {
        const user = await UserService.show({ email })
        if (!user) throw new Error ('Email or password incorrect')

        const passwordMatch = bcrypt.compare(password, user.password)

        if(!passwordMatch) throw new Error ('Email or password incorrect')

        const token = sign({}, "386845cd0a1f047bb0fd22536546e4f9", {
            subject: "1",
            expiresIn: "1d"
        })

        const response = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return response
    }
}
export default new AuthenticateService()