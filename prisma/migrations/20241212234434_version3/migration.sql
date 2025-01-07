/*
  Warnings:

  - You are about to drop the column `eduardo` on the `SavingsHistory` table. All the data in the column will be lost.
  - You are about to drop the column `oscar` on the `SavingsHistory` table. All the data in the column will be lost.
  - Added the required column `status` to the `SavingsHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SavingsHistory" DROP COLUMN "eduardo",
DROP COLUMN "oscar",
ADD COLUMN     "status" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "Users" (
    "user_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "SavingsUsers" (
    "savings_users_id" SERIAL NOT NULL,
    "saving_history_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "SavingsUsers_pkey" PRIMARY KEY ("savings_users_id")
);

-- AddForeignKey
ALTER TABLE "SavingsUsers" ADD CONSTRAINT "SavingsUsers_saving_history_id_fkey" FOREIGN KEY ("saving_history_id") REFERENCES "SavingsHistory"("saving_history_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavingsUsers" ADD CONSTRAINT "SavingsUsers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
