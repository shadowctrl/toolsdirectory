-- AlterTable
ALTER TABLE "Tool" ALTER COLUMN "hasFreePrice" DROP NOT NULL,
ALTER COLUMN "hasPaidPrice" DROP NOT NULL,
ALTER COLUMN "paidPrice" DROP NOT NULL;
