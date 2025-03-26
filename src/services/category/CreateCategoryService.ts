import prismaClient from "../../prisma";

interface CategoryRequest {
    name: string;
}

class CreateCategoryService {
    async execute({name}: CategoryRequest){
         if(!name || name === ""){
            throw new Error("Informe o nome da categoria a ser criada")
        }
        
        const alreadyCategoriy = await prismaClient.category.findFirst( {where: {name: name}})

        if(alreadyCategoriy){
            throw new Error("Essa categoria já existe")
        }

        const createCategory = await prismaClient.category.create({
            data: {
                name
            },
            select: {
                id: true,
                name: true
            }
        })

        return createCategory
    }
}

export { CreateCategoryService }