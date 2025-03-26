import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({ name, email, password }: UserRequest){

        if(!name){
            throw new Error("Por favor insira o nome do usuário!")
        }else if(!email){
            throw new Error("Por favor insira o email do usuário!")
        }else if(!password){
            throw new Error("Por favor insira a senha do usuário!")
        }

        const alreadyEmail = await prismaClient.user.findFirst({ where: { email: email } })

        if(alreadyEmail){
            throw new Error("Esse email já está sendo utilizado por outro usuário")
        }

        const passwordHash = await hash(password, 8)

        const createUser = await prismaClient.user.create({
            data: {
                name,
                email,
                password: passwordHash
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return createUser
    }
}

export { CreateUserService }