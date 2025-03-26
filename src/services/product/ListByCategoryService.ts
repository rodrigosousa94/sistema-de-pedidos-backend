import prismaClient from "../../prisma";

interface ProductRequest {
    category_id: string;
}

class ListByCategoryService{
    async execute({ category_id }: ProductRequest){

        const listProducts = await prismaClient.product.findMany({
            where: {
                category_id: category_id
            }
        })

        return listProducts
    }
}

export { ListByCategoryService }