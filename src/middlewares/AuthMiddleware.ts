import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
    sub: string;
}

export function AuthMiddleware(req: Request, res: Response, next: NextFunction){
    const authToken = req.headers.authorization

    if(!authToken){
        return res.status(401).end()
    }

    try {
        const { sub } = verify(authToken, process.env.JWT_SECRET) as Payload

        //recuperar o id do token e colocar dentro dessa variavel dentro do request
        req.user_id = sub

        return next()
        
    }catch {
        res.status(401).end()
    }
    
   
}