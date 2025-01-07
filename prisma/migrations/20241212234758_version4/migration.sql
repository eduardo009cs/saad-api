/*
  Warnings:

  - You are about to drop the column `status` on the `SavingsHistory` table. All the data in the column will be lost.
  - Added the required column `status` to the `SavingsUsers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SavingsHistory" DROP COLUMN "status";

-- AlterTable
ALTER TABLE "SavingsUsers" ADD COLUMN     "status" BOOLEAN NOT NULL;
