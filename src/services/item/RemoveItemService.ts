import prismaClient from "../../prisma";

interface ItemRequest {
    item_id: string;
}

class RemoveItemService {
    async execute({ item_id }: ItemRequest){
        if(!item_id){
            throw new Error("Item não encontrado")
        }

        const itemToDelete = await prismaClient.item.delete({ where: {id: item_id} })

        return itemToDelete
    }
}

export { RemoveItemService }