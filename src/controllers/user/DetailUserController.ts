import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

const userService = new DetailUserService()

class DetailUserController {
    async handle(req: Request, res: Response){
        const user_id = req.user_id
        
        const user = await userService.execute(user_id)

        return res.status(200).json(user)
    }
}

export {DetailUserController}