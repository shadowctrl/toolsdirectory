/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `Tutorial` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Tutorial_url_key" ON "Tutorial"("url");
