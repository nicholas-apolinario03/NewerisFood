import express from 'express';
import cors from 'cors';
import { empresaRoutes } from './routes/empresaRoute'; // O arquivo que você criou
import { estoqueRoutes } from './routes/estoqueRoute';
import { produtoRoutes } from './routes/produtoRoute';
import {pedidoRoutes} from './routes/pedidoRoute';
const app = express();

app.use(cors());
app.use(express.json());

app.use('/empresa', empresaRoutes);
app.use('/empresa/estoque', estoqueRoutes);
app.use('/empresa/cardapio', produtoRoutes);
app.use('/empresa/pedido', pedidoRoutes);
export default app;