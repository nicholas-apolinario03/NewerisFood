"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ erro: "Token de autenticação não fornecido." });
    }
    // O header vem no formato: "Bearer <token>"
    const [, token] = authHeader.split(' ');
    try {
        const segredo = process.env.JWT_SECRET || "segredo_super_secreto";
        const decodificado = jsonwebtoken_1.default.verify(token, segredo);
        // Injeta o ID da empresa decodificado direto na requisição
        req.empresaId = decodificado.id;
        next(); // Prossegue para a rota
    }
    catch (error) {
        return res.status(401).json({ erro: "Token inválido ou expirado." });
    }
}
