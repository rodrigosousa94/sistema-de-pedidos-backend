import { Router, Request, Response } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController"
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { AuthMiddleware } from "./middlewares/AuthMiddleware";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { ItemController } from "./controllers/item/ItemController";
import { RemoveItemController } from "./controllers/item/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrdersController } from "./controllers/order/ListOrdersController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";

import uploadConfig from './config/multer'


const router = Router()

const upload = multer(uploadConfig.upload("./tmp"))

// ROTAS DE CRIAÇÃO, LOGIN E DETALHES DE USUARIO
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', AuthMiddleware, new DetailUserController().handle)

// ROTAS DE CATEGORIAS
router.post('/category', AuthMiddleware, new CreateCategoryController().handle)
router.get('/category', AuthMiddleware, new ListCategoryController().handle)

// ROTAS DE PRODUTOS
//router.post('/product', AuthMiddleware, upload.single('file'), new CreateProductController().handle)
router.post('/product', AuthMiddleware, new CreateProductController().handle)
router.get('/category/product', AuthMiddleware, new ListByCategoryController().handle)

//ROTAS DE ORDENS (Abrir / deletar Mesa)
router.post('/order', AuthMiddleware, new CreateOrderController().handle)
router.delete('/order', AuthMiddleware, new RemoveOrderController().handle)

// Rotas de adicionar e deletar ITENS a mesa
router.post('/order/add', AuthMiddleware, new ItemController().handle)
router.delete('/order/remove', AuthMiddleware, new RemoveItemController().handle)

// ROTA PARA ALTERAR PEDIDO DE RASCUNHO PARA FALSE 
router.put('/order/send', AuthMiddleware, new SendOrderController().handle)

//ROTA PARA CAPTURAR TODAS AS ORDENS COM DRAFT FALSE E STATUS FALSE (JA FOI ENVIADA PARA A COZINHA POREM A AINDA NAO ESTA PRONTO)
router.get('/orders', AuthMiddleware, new ListOrdersController().handle)

//ROTA DETALHES DO PEDIDO DE TAL MESA
router.get('/orders/detail', AuthMiddleware, new DetailOrderController().handle)

//ROTA PARA FINALIZAR O PEDIDO COLOCANDO STATUS PARA TRUE
router.put('/order/finish', AuthMiddleware, new FinishOrderController().handle)

export { router };
