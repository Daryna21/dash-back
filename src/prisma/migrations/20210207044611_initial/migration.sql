-- CreateTable
CREATE TABLE "Brand" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "avgTimeStory" DECIMAL DEFAULT 0,
    "avgAllTimeStory" DECIMAL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Author" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isPublished" BOOLEAN DEFAULT false,
    "created" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "edited" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "published" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "avgTimeStory" DECIMAL DEFAULT 0,
    "avgAllTimeStory" DECIMAL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Editor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "edited" INTEGER DEFAULT 0,
    "editedPercent" DECIMAL DEFAULT 0,
    "published" INTEGER DEFAULT 0,
    "publishedPercent" DECIMAL DEFAULT 0,
    "rejected" INTEGER DEFAULT 0,
    "rejectedPercent" DECIMAL DEFAULT 0,
    "created" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME DEFAULT CURRENT_TIMESTAMP
);
