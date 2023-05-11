/*
  Warnings:

  - You are about to drop the `_PostToTags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PostToTags" DROP CONSTRAINT "_PostToTags_A_fkey";

-- DropForeignKey
ALTER TABLE "_PostToTags" DROP CONSTRAINT "_PostToTags_B_fkey";

-- DropTable
DROP TABLE "_PostToTags";

-- CreateTable
CREATE TABLE "TagsPosts" (
    "postId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "TagsPosts_pkey" PRIMARY KEY ("postId","tagId")
);

-- AddForeignKey
ALTER TABLE "TagsPosts" ADD CONSTRAINT "TagsPosts_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsPosts" ADD CONSTRAINT "TagsPosts_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
