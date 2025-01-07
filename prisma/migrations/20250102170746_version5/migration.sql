-- DropForeignKey
ALTER TABLE "SavingsUsers" DROP CONSTRAINT "SavingsUsers_saving_history_id_fkey";

-- AddForeignKey
ALTER TABLE "SavingsUsers" ADD CONSTRAINT "SavingsUsers_saving_history_id_fkey" FOREIGN KEY ("saving_history_id") REFERENCES "SavingsHistory"("saving_history_id") ON DELETE CASCADE ON UPDATE CASCADE;
