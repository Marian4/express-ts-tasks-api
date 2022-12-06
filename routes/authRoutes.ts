import express from "express"
import AuthenticateUserController from "../controllers/AuthenticateUserController"

const authRouter = express.Router()
const authenticateUserController = new AuthenticateUserController()

authRouter.post('/authenticate', authenticateUserController.handle)

export default authRouter