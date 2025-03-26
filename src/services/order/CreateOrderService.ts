import prismaClient from "../../prisma";

interface OrderRequest {
    table: number;
    name?: string;
}

class CreateOrderService {
    async execute({ table, name }: OrderRequest) {
        if (!table) {
            throw new Error("Insira o número da mesa");
        }

        const alreadyOrder = await prismaClient.order.findFirst({
            where: { 
                table: table, 
                status: true  
            },
        });

        if (alreadyOrder) {
            
            await prismaClient.item.deleteMany({
                where: { order_id: alreadyOrder.id },
            });

            
            await prismaClient.order.delete({
                where: { id: alreadyOrder.id },
            });
        }

        
        const createOrder = await prismaClient.order.create({
            data: {
                table,
                name,
                draft: true,  
                status: false, 
            },
        });

        return createOrder;
    }
}

export { CreateOrderService };

