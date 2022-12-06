import User from '../models/User'

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
    id?: number
    email?: string
}

class UserRepository {
    async create ( user: ICreateUser) : Promise<IGetUser>{
        const model = await User.create(user)

        return {name: model.name, email: model.email}
    }

    async show ({ id, email }: IShowUser) : Promise<IGetUser> {
        const model = id ? await User.findOne({_id: id}) : await User.findOne({email})

        return model
    }
}

export default UserRepository