import prismaClient from "../../prisma";

interface ItemRequest {
    amount: number;
    order_id: string;
    product_id: string;
}

class ItemService {
    async execute({ amount, order_id, product_id }: ItemRequest){
        if(!amount){
            throw new Error("Envie a quantidade")
        }else if(!order_id){
            throw new Error("Envie o id do pedido")
        }else if(!product_id){
            throw new Error("Envie o id do produto")
        }

        const item = await prismaClient.item.create({ 
            data: {
                amount,
                order_id,
                product_id
            }
         })
         return item
    }
}

export { ItemService }