import bcrypt from 'bcryptjs'
import UserRepository from '../repositories/UserRepository'

interface ICreateUser {
    name: string;
    email: string;
    password: string;
}

interface IGetUser {
    name: string;
    email: string;
    password?: string;
}

interface IShowUser {
    id?: number | string;
    email?: string;
}

class UserService {
    private _repository

    constructor (){
        this._repository = new UserRepository()
    }

    async create ( { name, email, password } : ICreateUser) : Promise<IGetUser>{
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)
        const user = await this._repository.create({ name, email, password: hashedPassword })
        
        return user
    }

    async show ( {id, email} : IShowUser ) : Promise<IGetUser>{
        return await this._repository.show( { id, email })
    }
}

export default new UserService()