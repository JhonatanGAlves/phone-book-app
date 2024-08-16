-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "phone_number" VARCHAR(15) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
