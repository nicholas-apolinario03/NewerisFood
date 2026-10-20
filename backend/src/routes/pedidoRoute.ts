import { Router } from "express";
import { atualizarStatusPedido, criarPedido, listarPedidos } from "../controller/pedidoController"
import { authMiddleware } from "../services/middleware"; // Garante o req.empresaId

export const pedidoRoutes = Router();
pedidoRoutes.use(authMiddleware)
pedidoRoutes.post("/cadastro", criarPedido);
pedidoRoutes.get("/lista",  listarPedidos);
pedidoRoutes.patch("/:id/status", atualizarStatusPedido);

