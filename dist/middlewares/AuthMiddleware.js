"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = AuthMiddleware;
const jsonwebtoken_1 = require("jsonwebtoken");
function AuthMiddleware(req, res, next) {
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).end();
    }
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(authToken, process.env.JWT_SECRET);
        //recuperar o id do token e colocar dentro dessa variavel dentro do request
        req.user_id = sub;
        return next();
    }
    catch (_a) {
        res.status(401).end();
    }
}
