import {prisma } from  "../../utils/prismaClient";

export  async function getAllUsers() {
    return prisma.user.findMany();
}