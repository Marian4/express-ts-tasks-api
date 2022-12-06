import express, {Request, Response} from "express"
import userRoutes from '../routes/userRoutes'
import taskRoutes from '../routes/taskRoutes'
import authRoutes from '../routes/authRoutes'

const mongoose = require('../db/conn')

const app = express()

app.use(express.json())
app.use('/users', userRoutes)
app.use('/tasks', taskRoutes)
app.use(authRoutes)

app.get('/', async (req: Request, res: Response) => {
    res.json({message: "Hello App"})
})

app.listen(3000, () => {
    console.log('application running')
})