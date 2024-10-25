/*
  Warnings:

  - You are about to drop the column `teamID` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_teamID_fkey";

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "endDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "teamID",
ADD COLUMN     "teamId" INTEGER;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
