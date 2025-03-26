import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/SendOrderService";

const sendOrderService = new SendOrderService()

class SendOrderController {
    async handle(req: Request, res: Response){
        const {order_id} = req.body

        const order = await sendOrderService.execute({order_id})

        return res.status(200).json(order)
    }
}

export { SendOrderController }