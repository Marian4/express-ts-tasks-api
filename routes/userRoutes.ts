import express from "express"
import UserController from '../controllers/UserController'
const router = express.Router()

router.post('/create', UserController.create)
//router.put('/update/:id', UserController.update)
router.get('/:id', UserController.show)
//router.delete('/:id', UserController.destroy)
//router.get('/', UserController.listAll)

export default router