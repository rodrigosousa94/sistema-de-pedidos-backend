import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

const categoryService = new ListCategoryService()

class ListCategoryController {
    async handle(req: Request, res: Response){

        const listCategory = await categoryService.execute()

        return res.status(200).json(listCategory)
    }
}

export { ListCategoryController }