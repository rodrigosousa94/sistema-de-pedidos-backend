import { Request, Response } from "express";
import { ListOrdersService } from "../../services/order/ListOrdersService";

const listOrdersService = new ListOrdersService()

class ListOrdersController {
    async handle(req: Request, res: Response){
        const orders = await listOrdersService.execute()

        return res.status(200).json(orders)
    }
}

export { ListOrdersController }