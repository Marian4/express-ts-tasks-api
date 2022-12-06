import {Request, Response} from "express"

function testMiddleware (req: Request, res: Response, next: any) {
    if (req.body.value !== "1"){
        res.status(400).send("pode entrar n")
    }
    next()
}

export default testMiddleware