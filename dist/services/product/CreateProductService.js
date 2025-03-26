"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateProductService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ name, price, description, banner, category_id }) {
            if (!name) {
                throw new Error("Por favor insira o nome do produto");
            }
            else if (!price) {
                throw new Error("Por favor insira o preço do produto");
            }
            else if (!description) {
                throw new Error("Por favor insira a descrição do produto");
            }
            else if (!banner) {
                throw new Error("Por favor insira a imagem do produto");
            }
            else if (!category_id) {
                throw new Error("Por favor insira a categoria do produto");
            }
            const alreadyProduct = yield prisma_1.default.product.findFirst({ where: { name: name } });
            if (alreadyProduct) {
                throw new Error("Esse produto já existe");
            }
            const createProduct = yield prisma_1.default.product.create({
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
            });
            return createProduct;
        });
    }
}
exports.CreateProductService = CreateProductService;
