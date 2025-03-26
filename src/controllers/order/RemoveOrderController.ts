import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/RemoveOrderService";

const removeOrderService = new RemoveOrderService()

class RemoveOrderController {
    async handle(req: Request, res: Response){
        const order_id = req.query.order_id as string

        const order = await removeOrderService.execute({order_id})

        return res.status(200).json(order)
    }
}

export { RemoveOrderController }