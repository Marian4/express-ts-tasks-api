import {Request, Response} from "express"
import { verify } from 'jsonwebtoken'

async function authMiddleware (req: Request, res: Response, next) {
    const token = req.headers.authorization.split(" ")[1]
    const privateKey = "386845cd0a1f047bb0fd22536546e4f9"
    verify (token, privateKey, (err) => {
        if (err){
            res.status(403).json({error: "Access Denied"})
        }
        next()
    })
}

export default authMiddleware