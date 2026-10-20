import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { empresaRoutes } from './routes/empresaRoute'; // O arquivo que você criou
import { estoqueRoutes } from './routes/estoqueRoute';
import { produtoRoutes } from './routes/produtoRoute';
import {pedidoRoutes} from './routes/pedidoRoute';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Registramos as rotas da empresa com o prefixo '/empresa'
// Logo, a rota final será POST /empresa/login
app.use('/empresa', empresaRoutes);
app.use('/empresa/estoque', estoqueRoutes);
app.use('/empresa/cardapio', produtoRoutes);
app.use('/empresa/pedido', pedidoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});