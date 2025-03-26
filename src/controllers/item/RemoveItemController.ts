import { Request, Response } from "express";
import { RemoveItemService } from "../../services/item/RemoveItemService";

const removeItemService = new RemoveItemService()

class RemoveItemController {
    async handle(req: Request, res: Response){
        const item_id = req.query.item_id as string

        if(!item_id){
            throw new Error("Item nao encontrado")
        }

        const item = await removeItemService.execute({item_id})

        res.status(200).json(item)

    }
}

export { RemoveItemController }