import express from 'express';
import cors from 'cors';
import { empresaRoutes } from './routes/empresaRoute'; // O arquivo que você criou
import { estoqueRoutes } from './routes/estoqueRoute';
import { produtoRoutes } from './routes/produtoRoute';
import {pedidoRoutes} from './routes/pedidoRoute';
import { whatsappRoutes } from './routes/whatsappRoutes';
import { whatsappConfigRoutes } from './routes/whatsappConfigRoute';
import { saborRoutes } from './routes/saborRoute';
const app = express();

app.use(cors());
app.use(express.json());

app.use('/empresa', empresaRoutes);
app.use('/empresa/estoque', estoqueRoutes);
app.use('/empresa/cardapio', produtoRoutes);
app.use('/empresa/pedido', pedidoRoutes);
app.use('/whatsapp', whatsappRoutes);
app.use('/api/whatsapp', whatsappConfigRoutes);
app.use('/sabores', saborRoutes);

export default app;