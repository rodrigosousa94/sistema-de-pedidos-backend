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
exports.CreateCategoryService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateCategoryService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ name }) {
            if (!name || name === "") {
                throw new Error("Informe o nome da categoria a ser criada");
            }
            const alreadyCategoriy = yield prisma_1.default.category.findFirst({ where: { name: name } });
            if (alreadyCategoriy) {
                throw new Error("Essa categoria já existe");
            }
            const createCategory = yield prisma_1.default.category.create({
                data: {
                    name
                },
                select: {
                    id: true,
                    name: true
                }
            });
            return createCategory;
        });
    }
}
exports.CreateCategoryService = CreateCategoryService;
