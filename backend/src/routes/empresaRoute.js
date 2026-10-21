"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.empresaRoutes = void 0;
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_1 = require("../lib/prisma"); // Ajuste o caminho se necessário para o seu arquivo prisma.ts
dotenv_1.default.config();
exports.empresaRoutes = (0, express_1.Router)();
const JWT_SECRET = process.env.JWT_SECRET || 'chave_secreta_padrao';
// Rota de Cadastro Real no Banco
exports.empresaRoutes.post('/cadastro', async (req, res) => {
    const { nome, telefone, email, senha, endereco } = req.body;
    try {
        // 1. Verifica se já existe uma empresa com esse e-mail
        const empresaExistente = await prisma_1.prisma.empresa.findUnique({
            where: { email }
        });
        if (empresaExistente) {
            return res.status(400).json({ erro: 'E-mail já cadastrado.' });
        }
        // 2. Criptografa a senha antes de salvar
        const senhaHash = await bcrypt_1.default.hash(senha, 10);
        // 3. Salva a nova empresa no PostgreSQL
        // Nota: Se no seu schema atual você não tiver "telefone" ou "endereco", 
        // certifique-se de adicioná-los no model Empresa do Prisma.
        const novaEmpresa = await prisma_1.prisma.empresa.create({
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
        const token = jsonwebtoken_1.default.sign({ id: novaEmpresa.id, email: novaEmpresa.email }, JWT_SECRET, { expiresIn: '7d' });
        return res.status(201).json({
            mensagem: 'Empresa cadastrada com sucesso!',
            token,
            empresa: {
                id: novaEmpresa.id,
                nome: novaEmpresa.nome,
                email: novaEmpresa.email
            }
        });
    }
    catch (error) {
        console.error("Erro no cadastro:", error);
        return res.status(500).json({ erro: 'Erro interno ao cadastrar empresa.' });
    }
});
// Rota de Login Real no Banco
exports.empresaRoutes.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    try {
        // 1. Busca a empresa pelo e-mail no banco
        const empresa = await prisma_1.prisma.empresa.findUnique({
            where: { email }
        });
        if (!empresa) {
            return res.status(401).json({ erro: 'E-mail ou senha inválidos.' });
        }
        // 2. Compara a senha digitada com o hash salvo no banco
        const senhaValida = await bcrypt_1.default.compare(senha, empresa.senha);
        if (!senhaValida) {
            return res.status(401).json({ erro: 'E-mail ou senha inválidos.' });
        }
        // 3. Gera o Token JWT com o ID real da empresa
        const token = jsonwebtoken_1.default.sign({ id: empresa.id, email: empresa.email }, JWT_SECRET, { expiresIn: '7d' });
        return res.json({
            mensagem: 'Login realizado com sucesso!',
            token,
            empresa: {
                id: empresa.id,
                nome: empresa.nome,
                email: empresa.email
            }
        });
    }
    catch (error) {
        console.error("Erro no login:", error);
        return res.status(500).json({ erro: 'Erro interno ao realizar login.' });
    }
});
