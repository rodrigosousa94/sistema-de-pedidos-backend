import { Request, Response } from "express";
import { DetailOrderService } from "../../services/order/DetailOrderService";

const orderService = new DetailOrderService()

class DetailOrderController {
    async handle(req: Request, res: Response){
        const order_id = req.query.order_id as string

        const orders = await orderService.execute({order_id})

        return res.status(200).json(orders)
    }
}

export { DetailOrderController }
