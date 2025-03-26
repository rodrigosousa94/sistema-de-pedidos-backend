"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const AuthMiddleware_1 = require("./middlewares/AuthMiddleware");
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const ListCategoryController_1 = require("./controllers/category/ListCategoryController");
const CreateProductController_1 = require("./controllers/product/CreateProductController");
const ListByCategoryController_1 = require("./controllers/product/ListByCategoryController");
const CreateOrderController_1 = require("./controllers/order/CreateOrderController");
const RemoveOrderController_1 = require("./controllers/order/RemoveOrderController");
const ItemController_1 = require("./controllers/item/ItemController");
const RemoveItemController_1 = require("./controllers/item/RemoveItemController");
const SendOrderController_1 = require("./controllers/order/SendOrderController");
const ListOrdersController_1 = require("./controllers/order/ListOrdersController");
const DetailOrderController_1 = require("./controllers/order/DetailOrderController");
const FinishOrderController_1 = require("./controllers/order/FinishOrderController");
const multer_2 = __importDefault(require("./config/multer"));
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp"));
// ROTAS DE CRIAÇÃO, LOGIN E DETALHES DE USUARIO
router.post('/users', new CreateUserController_1.CreateUserController().handle);
router.post('/session', new AuthUserController_1.AuthUserController().handle);
router.get('/me', AuthMiddleware_1.AuthMiddleware, new DetailUserController_1.DetailUserController().handle);
// ROTAS DE CATEGORIAS
router.post('/category', AuthMiddleware_1.AuthMiddleware, new CreateCategoryController_1.CreateCategoryController().handle);
router.get('/category', AuthMiddleware_1.AuthMiddleware, new ListCategoryController_1.ListCategoryController().handle);
// ROTAS DE PRODUTOS
//router.post('/product', AuthMiddleware, upload.single('file'), new CreateProductController().handle)
router.post('/product', AuthMiddleware_1.AuthMiddleware, new CreateProductController_1.CreateProductController().handle);
router.get('/category/product', AuthMiddleware_1.AuthMiddleware, new ListByCategoryController_1.ListByCategoryController().handle);
//ROTAS DE ORDENS (Abrir / deletar Mesa)
router.post('/order', AuthMiddleware_1.AuthMiddleware, new CreateOrderController_1.CreateOrderController().handle);
router.delete('/order', AuthMiddleware_1.AuthMiddleware, new RemoveOrderController_1.RemoveOrderController().handle);
// Rotas de adicionar e deletar ITENS a mesa
router.post('/order/add', AuthMiddleware_1.AuthMiddleware, new ItemController_1.ItemController().handle);
router.delete('/order/remove', AuthMiddleware_1.AuthMiddleware, new RemoveItemController_1.RemoveItemController().handle);
// ROTA PARA ALTERAR PEDIDO DE RASCUNHO PARA FALSE 
router.put('/order/send', AuthMiddleware_1.AuthMiddleware, new SendOrderController_1.SendOrderController().handle);
//ROTA PARA CAPTURAR TODAS AS ORDENS COM DRAFT FALSE E STATUS FALSE (JA FOI ENVIADA PARA A COZINHA POREM A AINDA NAO ESTA PRONTO)
router.get('/orders', AuthMiddleware_1.AuthMiddleware, new ListOrdersController_1.ListOrdersController().handle);
//ROTA DETALHES DO PEDIDO DE TAL MESA
router.get('/orders/detail', AuthMiddleware_1.AuthMiddleware, new DetailOrderController_1.DetailOrderController().handle);
//ROTA PARA FINALIZAR O PEDIDO COLOCANDO STATUS PARA TRUE
router.put('/order/finish', AuthMiddleware_1.AuthMiddleware, new FinishOrderController_1.FinishOrderController().handle);
