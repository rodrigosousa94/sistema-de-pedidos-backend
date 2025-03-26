import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

const userService = new AuthUserService()

class AuthUserController {
    async handle(req: Request, res: Response){
        const { email, password } = req.body
        const auth = await userService.execute({email, password})

        return res.status(200).json(auth)
    }
}

export { AuthUserController }