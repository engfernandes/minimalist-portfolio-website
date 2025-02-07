/*
  Warnings:

  - You are about to drop the column `company` on the `experiences` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "experiences_company_idx";

-- AlterTable
ALTER TABLE "experiences" DROP COLUMN "company",
ADD COLUMN     "companyId" INTEGER;

-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "companyId" INTEGER;

-- CreateTable
CREATE TABLE "companies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "logoUrl" TEXT,
    "area" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "companies_name_idx" ON "companies"("name");

-- CreateIndex
CREATE INDEX "experiences_companyId_idx" ON "experiences"("companyId");

-- CreateIndex
CREATE INDEX "projects_companyId_idx" ON "projects"("companyId");

-- AddForeignKey
ALTER TABLE "experiences" ADD CONSTRAINT "experiences_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
