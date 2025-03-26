import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

const listByCategoryService = new ListByCategoryService()

class ListByCategoryController {
    async handle(req: Request, res: Response){
        const category_id = req.query.category_id as string

        const list = await listByCategoryService.execute({category_id})

        res.status(200).json(list)
    }
}

export { ListByCategoryController }