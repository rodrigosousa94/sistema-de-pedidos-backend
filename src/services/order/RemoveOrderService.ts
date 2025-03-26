import prismaClient from "../../prisma";

interface OrderRequest {
    order_id: string;
}

class RemoveOrderService {
    async execute({ order_id }: OrderRequest){

        if(!order_id){
            throw new Error("Mesa não encontrada")
        }

        const orderToRemove = await prismaClient.order.delete({ where: { id: order_id } })

        return orderToRemove
    }

}

export { RemoveOrderService }