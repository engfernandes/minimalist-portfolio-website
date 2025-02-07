/*
  Warnings:

  - Made the column `companyId` on table `projects` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_companyId_fkey";

-- AlterTable
ALTER TABLE "projects" ALTER COLUMN "companyId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
