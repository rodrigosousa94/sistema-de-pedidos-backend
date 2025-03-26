import { Request, Response } from "express";
import { ItemService } from "../../services/item/ItemService";

const itemService = new ItemService()

class ItemController {
    async handle(req: Request, res: Response){
        const { amount, order_id, product_id } = req.body

        const item = await itemService.execute({amount, order_id, product_id})

        return res.status(201).json(item)

    }
}

export { ItemController }