import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'
import path from 'path'


import { router } from './routes'
import fileUpload from 'express-fileupload'

const app = express()
app.use(express.json())
app.use(cors())
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024} // 50 megas
}))

app.use(router)


//link para acessar as imagens na pasta tmp
app.use(
    '/files',
    express.static(path.resolve(__dirname, "..", "tmp"))
)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error){
        //se for uma instancia do tipo Error
        return res.status(400).json({ error: err.message })
    }

    return res.status(500).json({ 
        status: 'error',
        message: 'Internal server error.'
     })
})

app.listen(process.env.PORT, () => console.log("rodando"))