/*
  Warnings:

  - You are about to drop the `TagsPosts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TagsPosts" DROP CONSTRAINT "TagsPosts_postId_fkey";

-- DropForeignKey
ALTER TABLE "TagsPosts" DROP CONSTRAINT "TagsPosts_tagId_fkey";

-- DropTable
DROP TABLE "TagsPosts";

-- CreateTable
CREATE TABLE "_PostToTags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PostToTags_AB_unique" ON "_PostToTags"("A", "B");

-- CreateIndex
CREATE INDEX "_PostToTags_B_index" ON "_PostToTags"("B");

-- AddForeignKey
ALTER TABLE "_PostToTags" ADD CONSTRAINT "_PostToTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToTags" ADD CONSTRAINT "_PostToTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
