"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const empresaRoute_1 = require("./routes/empresaRoute"); // O arquivo que você criou
const estoqueRoute_1 = require("./routes/estoqueRoute");
const produtoRoute_1 = require("./routes/produtoRoute");
const pedidoRoute_1 = require("./routes/pedidoRoute");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/empresa', empresaRoute_1.empresaRoutes);
app.use('/empresa/estoque', estoqueRoute_1.estoqueRoutes);
app.use('/empresa/cardapio', produtoRoute_1.produtoRoutes);
app.use('/empresa/pedido', pedidoRoute_1.pedidoRoutes);
exports.default = app;
