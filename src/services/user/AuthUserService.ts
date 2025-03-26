import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({email, password}: AuthRequest){
        if(!email){
            throw new Error("Por favor insira o email do usuário")
        }else if(!password){
            throw new Error("Por favor insira a senha do usuário")
        }

        const user = await prismaClient.user.findFirst({ where: {email: email} })

        if(!user){
            throw new Error("Email ou senha inválidos")
        }

        const passwordDecoded = await compare(password, user.password)

        if(!passwordDecoded){
            throw new Error("Email ou senha inválidos")
        }

        //Gerando token para login
        const token = sign(
            {
             name: user.name,
             email: user.email   
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
        
    }
}

export { AuthUserService }