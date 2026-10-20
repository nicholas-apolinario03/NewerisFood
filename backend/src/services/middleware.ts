import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Estende a tipagem do Express para reconhecer a propriedade empresaId nas rotas protegidas
export interface AuthRequest extends Request {
    empresaId?: number;
}

export function authMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ erro: "Token de autenticação não fornecido." });
    }

    // O header vem no formato: "Bearer <token>"
    const [, token] = authHeader.split(' ');

    try {
        const segredo = process.env.JWT_SECRET || "segredo_super_secreto";
        const decodificado = jwt.verify(token, segredo) as { id: number };

        // Injeta o ID da empresa decodificado direto na requisição
        req.empresaId = decodificado.id;
        
        next(); // Prossegue para a rota
    } catch (error) {
        return res.status(401).json({ erro: "Token inválido ou expirado." });
    }
}