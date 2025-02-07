/*
  Warnings:

  - Made the column `companyId` on table `experiences` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "experiences" DROP CONSTRAINT "experiences_companyId_fkey";

-- AlterTable
ALTER TABLE "experiences" ALTER COLUMN "companyId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "experiences" ADD CONSTRAINT "experiences_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
