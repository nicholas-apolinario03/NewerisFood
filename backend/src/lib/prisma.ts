import { PrismaClient } from '../generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Cria a pool de conexões nativa do Postgres
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Inicializa o adaptador do Prisma para PostgreSQL
const adapter = new PrismaPg(pool);

// Passa o adapter para o construtor do PrismaClient
export const prisma = new PrismaClient({ adapter });