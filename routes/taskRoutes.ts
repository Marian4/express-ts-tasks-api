import express, {Request, Response} from "express"
import authMiddleware from "../middlewares/authMiddleware"
const router = express.Router()

router.use(authMiddleware)

router.post('/create', (req: Request, res: Response) => {
    res.status(201).json({ message: "create task" })
})
router.delete('/:id', (req: Request, res: Response) => {
    res.status(202).json({ message: "delete task" })
})
router.put('/:id', (req: Request, res: Response) => {
    res.status(200).json({ message: "update task" })
})
router.get('/:id', (req: Request, res: Response) => {
    res.status(200).json({ message: "get task" })
})
router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: "all tasks" })
})

export default router