import prismaClient from "../../prisma";

interface ProductRequest {
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;
}

class CreateProductService{
    async execute({name, price, description, banner, category_id}: ProductRequest){
        if(!name){
            throw new Error("Por favor insira o nome do produto")
        }else if(!price){
            throw new Error("Por favor insira o preço do produto")
        }else if(!description){
            throw new Error("Por favor insira a descrição do produto")
        }else if(!banner){
            throw new Error("Por favor insira a imagem do produto")
        }else if(!category_id){
            throw new Error("Por favor insira a categoria do produto")
        }

        const alreadyProduct = await prismaClient.product.findFirst({ where: { name: name } })

        if(alreadyProduct){
            throw new Error("Esse produto já existe")
        }

        const createProduct = await prismaClient.product.create({
            data: {
                name,
                price,
                description,
                banner,
                category_id
            },
            select: {
                id: true,
                name: true,
                price: true,
                description: true,
                banner: true,
                category_id: true
            }
        })

        return createProduct
    }
}

export { CreateProductService }