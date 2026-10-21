"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedidoRoutes = void 0;
const express_1 = require("express");
const pedidoController_1 = require("../controller/pedidoController");
const middleware_1 = require("../services/middleware"); // Garante o req.empresaId
exports.pedidoRoutes = (0, express_1.Router)();
exports.pedidoRoutes.use(middleware_1.authMiddleware);
exports.pedidoRoutes.post("/cadastro", pedidoController_1.criarPedido);
exports.pedidoRoutes.get("/lista", pedidoController_1.listarPedidos);
exports.pedidoRoutes.patch("/:id/status", pedidoController_1.atualizarStatusPedido);
