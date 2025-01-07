-- CreateTable
CREATE TABLE "SavingsHistory" (
    "saving_history_id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "eduardo" BOOLEAN NOT NULL,
    "oscar" BOOLEAN NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "SavingsHistory_pkey" PRIMARY KEY ("saving_history_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SavingsHistory_date_key" ON "SavingsHistory"("date");
