/*
  Warnings:

  - You are about to drop the `Record` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `createdBy` to the `Base` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Record" DROP CONSTRAINT "Record_tableId_fkey";

-- AlterTable
ALTER TABLE "public"."Base" ADD COLUMN     "createdBy" TEXT NOT NULL,
ADD COLUMN     "lastOpened" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "public"."Record";

-- CreateTable
CREATE TABLE "public"."Cell" (
    "id" TEXT NOT NULL,
    "row" INTEGER NOT NULL,
    "fieldId" TEXT NOT NULL,
    "value" TEXT,

    CONSTRAINT "Cell_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cell_row_fieldId_key" ON "public"."Cell"("row", "fieldId");

-- AddForeignKey
ALTER TABLE "public"."Cell" ADD CONSTRAINT "Cell_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "public"."Field"("id") ON DELETE CASCADE ON UPDATE CASCADE;
