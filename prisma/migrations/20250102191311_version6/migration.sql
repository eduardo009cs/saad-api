/*
  Warnings:

  - You are about to drop the column `amount` on the `SavingsHistory` table. All the data in the column will be lost.
  - Added the required column `group` to the `SavingsHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `SavingsHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SavingsHistory" DROP COLUMN "amount",
ADD COLUMN     "group" INTEGER NOT NULL,
ADD COLUMN     "number" INTEGER NOT NULL;
