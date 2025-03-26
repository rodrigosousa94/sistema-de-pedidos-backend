import { Request, Response } from "express";
import { CreateUserService } from '../../services/user/CreateUserService'

const userService  = new CreateUserService()

class CreateUserController {
    async handle(req: Request, res: Response){
        const {name, email, password} = req.body
        const user = await userService.execute({name, email, password})

        return res.status(201).json(user)
        
    }
}

export {CreateUserController}