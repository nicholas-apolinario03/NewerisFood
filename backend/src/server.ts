import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { empresaRoutes } from './routes/empresaRoute'; // O arquivo que você criou
import { estoqueRoutes } from './routes/estoqueRoute';
import { produtoRoutes } from './routes/produtoRoute';
import {pedidoRoutes} from './routes/pedidoRoute';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*', // Ou coloque array com os domínios permitidos: ['https://neweris-food.vercel.app']
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.get('/', (req, res) => {
  res.send('🚀 Backend do NewerisFood rodando perfeitamente!');
})
// Registramos as rotas da empresa com o prefixo '/empresa'
// Logo, a rota final será POST /empresa/login
app.use('/empresa', empresaRoutes);
app.use('/empresa/estoque', estoqueRoutes);
app.use('/empresa/cardapio', produtoRoutes);
app.use('/empresa/pedido', pedidoRoutes);

const PORT = process.env.PORT || 3000;

// Em ambiente de desenvolvimento local ele escuta a porta
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
  });
}

// 👈 Export para a Vercel/Serverless
export default app;