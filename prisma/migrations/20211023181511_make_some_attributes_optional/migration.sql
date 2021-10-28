-- CreateTable
CREATE TABLE "Books" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "cover" TEXT,
    "author_id" INTEGER NOT NULL,
    "publisher_id" INTEGER,
    "published_at" DATETIME,
    "registered_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "num_pages" INTEGER,
    CONSTRAINT "Books_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Authors" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Books_publisher_id_fkey" FOREIGN KEY ("publisher_id") REFERENCES "Publishers" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Authors" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "profile" TEXT,
    "about" TEXT,
    "contact" TEXT,
    "registered_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Publishers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "homepage" TEXT,
    "origin" TEXT,
    "logo" TEXT,
    "registered_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Tags" (
    "name" TEXT NOT NULL,
    "book_id" INTEGER NOT NULL,

    PRIMARY KEY ("name", "book_id"),
    CONSTRAINT "Tags_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Books" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
