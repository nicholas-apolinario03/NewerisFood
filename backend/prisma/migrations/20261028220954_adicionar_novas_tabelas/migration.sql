/*
  Warnings:

  - You are about to drop the column `criadoEm` on the `Pedido` table. All the data in the column will be lost.
  - You are about to drop the column `pedido` on the `Pedido` table. All the data in the column will be lost.
  - The primary key for the `Produto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `categoria` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `disponivel` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `preco` on the `Produto` table. All the data in the column will be lost.
  - Added the required column `endereco` to the `Empresa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone` to the `Empresa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precoBase` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProdutoInsumo" DROP CONSTRAINT "ProdutoInsumo_produtoId_fkey";

-- DropIndex
DROP INDEX "Produto_empresaId_nome_key";

-- AlterTable
ALTER TABLE "Empresa" ADD COLUMN     "endereco" TEXT NOT NULL,
ADD COLUMN     "telefone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Pedido" DROP COLUMN "criadoEm",
DROP COLUMN "pedido",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_pkey",
DROP COLUMN "categoria",
DROP COLUMN "descricao",
DROP COLUMN "disponivel",
DROP COLUMN "preco",
ADD COLUMN     "maxFracoes" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "permiteFracionamento" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "precoBase" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Produto_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Produto_id_seq";

-- AlterTable
ALTER TABLE "ProdutoInsumo" ALTER COLUMN "produtoId" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "Sabor" (
    "id" TEXT NOT NULL,
    "empresaId" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "disponivel" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Sabor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemPedido" (
    "id" TEXT NOT NULL,
    "pedidoId" INTEGER NOT NULL,
    "produtoId" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "saboresFracoes" JSONB NOT NULL,
    "precoCalculado" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ItemPedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_whatsapp" (
    "id" SERIAL NOT NULL,
    "empresa_id" INTEGER NOT NULL,
    "phone_number_id" TEXT NOT NULL,
    "waba_id" TEXT NOT NULL,
    "access_token" TEXT NOT NULL,
    "verify_token" TEXT,
    "status" TEXT NOT NULL DEFAULT 'ativo',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "business_whatsapp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "business_whatsapp_empresa_id_key" ON "business_whatsapp"("empresa_id");

-- CreateIndex
CREATE UNIQUE INDEX "business_whatsapp_phone_number_id_key" ON "business_whatsapp"("phone_number_id");

-- AddForeignKey
ALTER TABLE "Sabor" ADD CONSTRAINT "Sabor_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemPedido" ADD CONSTRAINT "ItemPedido_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemPedido" ADD CONSTRAINT "ItemPedido_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProdutoInsumo" ADD CONSTRAINT "ProdutoInsumo_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_whatsapp" ADD CONSTRAINT "business_whatsapp_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "Empresa"("id") ON DELETE CASCADE ON UPDATE CASCADE;
