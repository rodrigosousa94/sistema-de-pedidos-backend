import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";
const orderService = new CreateOrderService()

class CreateOrderController {
    async handle(req: Request, res: Response){
        const {table, name} = req.body
        const order = await orderService.execute({table, name})

        res.status(201).json(order)
    }
}

export { CreateOrderController }