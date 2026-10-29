-- CreateTable
CREATE TABLE "SaborInsumo" (
    "id" SERIAL NOT NULL,
    "saborId" TEXT NOT NULL,
    "insumoId" INTEGER NOT NULL,
    "quantidadeGasta" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "SaborInsumo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SaborInsumo" ADD CONSTRAINT "SaborInsumo_saborId_fkey" FOREIGN KEY ("saborId") REFERENCES "Sabor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SaborInsumo" ADD CONSTRAINT "SaborInsumo_insumoId_fkey" FOREIGN KEY ("insumoId") REFERENCES "Insumo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
