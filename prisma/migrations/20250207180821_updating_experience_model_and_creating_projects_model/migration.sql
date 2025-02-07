-- AlterTable
ALTER TABLE "experiences" ADD COLUMN     "companyLogoUrl" TEXT;

-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "published" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "projects_title_key" ON "projects"("title");

-- CreateIndex
CREATE INDEX "projects_title_idx" ON "projects"("title");

-- CreateIndex
CREATE INDEX "projects_startDate_idx" ON "projects"("startDate");

-- CreateIndex
CREATE INDEX "projects_endDate_idx" ON "projects"("endDate");
