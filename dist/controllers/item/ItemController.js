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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemController = void 0;
const ItemService_1 = require("../../services/item/ItemService");
const itemService = new ItemService_1.ItemService();
class ItemController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { amount, order_id, product_id } = req.body;
            const item = yield itemService.execute({ amount, order_id, product_id });
            return res.status(201).json(item);
        });
    }
}
exports.ItemController = ItemController;
