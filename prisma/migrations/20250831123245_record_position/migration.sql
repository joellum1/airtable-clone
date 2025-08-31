/*
  Warnings:

  - Added the required column `position` to the `Record` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Record" ADD COLUMN     "position" INTEGER NOT NULL;
