import prismaClient from "../../prisma";

interface OrderRequest {
    order_id: string;
}

class FinishOrderService {
    async execute({ order_id }: OrderRequest){

        await prismaClient.item.deleteMany({ where: { order_id: order_id } })

        const order = await prismaClient.order.update({
            where: {
                id: order_id
            },
            data: {
                status: true
            }
        })

        return order
    }
}

export { FinishOrderService }