import {prisma } from  "../../utils/prismaClient";

export  async function addUser(user) {
    // I wanna ckeck if the user already exists
    const existingUser = await prisma.user.findUnique({
        where: {
            phone: user.phone,
        },
    });

    if (existingUser) {
        throw new Error("User already exists");
    }
    return prisma.user.create({
        data: user,
    });
}