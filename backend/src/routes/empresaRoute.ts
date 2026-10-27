import { Router } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { prisma } from '../lib/prisma'; // Ajuste o caminho se necessário para o seu arquivo prisma.ts

dotenv.config();

export const empresaRoutes = Router();

const JWT_SECRET = process.env.JWT_SECRET || 'chave_secreta_padrao';

// Rota de Cadastro Real no Banco
empresaRoutes.post('/cadastro', async (req, res) => {
    const { nome, telefone, email, senha, endereco } = req.body;

    try {
        // 1. Verifica se já existe uma empresa com esse e-mail
        const empresaExistente = await prisma.empresa.findUnique({
            where: { email }
        });

        if (empresaExistente) {
            return res.status(400).json({ erro: 'E-mail já cadastrado.' });
        }

        // 2. Criptografa a senha antes de salvar
        const senhaHash = await bcrypt.hash(senha, 10);

        // 3. Salva a nova empresa no PostgreSQL
        // Nota: Se no seu schema atual você não tiver "telefone" ou "endereco", 
        // certifique-se de adicioná-los no model Empresa do Prisma.
        const novaEmpresa = await prisma.empresa.create({
            data: {
                nome,
                email,
                senha: senhaHash,
                // Se adicionou telefone/endereco no schema, inclua aqui:
                // telefone,
                // endereco
            }
        });

        // 4. Gera o Token JWT usando o ID real gerado pelo banco
        const token = jwt.sign({ id: novaEmpresa.id, email: novaEmpresa.email }, JWT_SECRET, { expiresIn: '7d' });

        return res.status(201).json({
            mensagem: 'Empresa cadastrada com sucesso!',
            token,
            empresa: {
                id: novaEmpresa.id,
                nome: novaEmpresa.nome,
                email: novaEmpresa.email
            }
        });

    } catch (error) {
        console.error("Erro no cadastro:", error);
        return res.status(500).json({ erro: 'Erro interno ao cadastrar empresa.' });
    }
});

// Rota de Login Real no Banco
empresaRoutes.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    try {
        // 1. Busca a empresa pelo e-mail no banco
        const empresa = await prisma.empresa.findUnique({
            where: { email }
        });

        if (!empresa) {
            return res.status(401).json({ erro: 'E-mail ou senha inválidos.' });
        }

        // 2. Compara a senha digitada com o hash salvo no banco
        const senhaValida = await bcrypt.compare(senha, empresa.senha);

        if (!senhaValida) {
            return res.status(401).json({ erro: 'E-mail ou senha inválidos.' });
        }

        // 3. Gera o Token JWT com o ID real da empresa
        const token = jwt.sign({ id: empresa.id, email: empresa.email }, JWT_SECRET, { expiresIn: '7d' });

        return res.json({
            mensagem: 'Login realizado com sucesso!',
            token,
            empresa: {
                id: empresa.id,
                nome: empresa.nome,
                email: empresa.email
            }
        });

    } catch (error) {
        console.error("Erro no login:", error);
        return res.status(500).json({ erro: 'Erro interno ao realizar login.' });
    }
});
empresaRoutes.get('/perfil', async (req, res) => {
    try {
        // Alinhado com o token gerado no login/cadastro que usa 'id'
        const empresaId = Number((req as any).id);

        if (!empresaId || isNaN(empresaId)) {
            return res.status(400).json({ erro: 'ID da empresa não encontrado no token.' });
        }

        const empresa = await prisma.empresa.findFirst({
            where: { id: empresaId },
        });

        if (!empresa) {
            return res.status(404).json({ erro: 'Empresa não encontrada.' });
        }

        return res.status(200).json(empresa);
    } catch (error) {
        console.error('Erro ao mostrar empresa:', error);
        return res.status(500).json({ erro: 'Erro interno ao buscar perfil.' });
    }
});