import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

const categoryService = new CreateCategoryService()

class CreateCategoryController {
    async handle(req: Request, res: Response){
        const { name } = req.body
        const category = await categoryService.execute({name})

        return res.status(201).json(category)
    }
}

export { CreateCategoryController }