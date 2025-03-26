import { Request, Response } from "express";
import { FinishOrderService } from "../../services/order/FinishOrderService";

const orderService = new FinishOrderService()

class FinishOrderController { 
    async handle(req: Request, res: Response){
        const { order_id } = req.body

        const order = await orderService.execute({ order_id })

        return res.status(200).json(order)
    }
}

export { FinishOrderController }