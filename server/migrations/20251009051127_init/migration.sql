-- CreateEnum
CREATE TYPE "Role" AS ENUM ('member', 'leader');

-- CreateEnum
CREATE TYPE "PropType" AS ENUM ('hat', 'hair', 'shirt', 'background', 'handProp');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password_hash" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "householdId" INTEGER NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'member',
    "difficulty" INTEGER NOT NULL,
    "totalPoints" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Household" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Household_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chore" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "estimatedTime" INTEGER NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "repeat" BOOLEAN NOT NULL,
    "householdId" INTEGER NOT NULL,
    "assigneeId" INTEGER NOT NULL,

    CONSTRAINT "Chore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avatar" (
    "ownerId" INTEGER NOT NULL,
    "hatId" INTEGER NOT NULL,
    "hairId" INTEGER NOT NULL,
    "shirtId" INTEGER NOT NULL,
    "backgroundId" INTEGER NOT NULL,
    "handPropId" INTEGER NOT NULL,

    CONSTRAINT "Avatar_pkey" PRIMARY KEY ("ownerId")
);

-- CreateTable
CREATE TABLE "UserAvatarProps" (
    "userId" INTEGER NOT NULL,
    "propId" INTEGER NOT NULL,

    CONSTRAINT "UserAvatarProps_pkey" PRIMARY KEY ("userId","propId")
);

-- CreateTable
CREATE TABLE "AvatarProp" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "PropType" NOT NULL,
    "cost" INTEGER NOT NULL,

    CONSTRAINT "AvatarProp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AvatarProp_name_key" ON "AvatarProp"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_householdId_fkey" FOREIGN KEY ("householdId") REFERENCES "Household"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chore" ADD CONSTRAINT "Chore_householdId_fkey" FOREIGN KEY ("householdId") REFERENCES "Household"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chore" ADD CONSTRAINT "Chore_assigneeId_fkey" FOREIGN KEY ("assigneeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avatar" ADD CONSTRAINT "Avatar_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avatar" ADD CONSTRAINT "Avatar_hatId_fkey" FOREIGN KEY ("hatId") REFERENCES "AvatarProp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avatar" ADD CONSTRAINT "Avatar_hairId_fkey" FOREIGN KEY ("hairId") REFERENCES "AvatarProp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avatar" ADD CONSTRAINT "Avatar_shirtId_fkey" FOREIGN KEY ("shirtId") REFERENCES "AvatarProp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avatar" ADD CONSTRAINT "Avatar_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "AvatarProp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avatar" ADD CONSTRAINT "Avatar_handPropId_fkey" FOREIGN KEY ("handPropId") REFERENCES "AvatarProp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAvatarProps" ADD CONSTRAINT "UserAvatarProps_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAvatarProps" ADD CONSTRAINT "UserAvatarProps_propId_fkey" FOREIGN KEY ("propId") REFERENCES "AvatarProp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
