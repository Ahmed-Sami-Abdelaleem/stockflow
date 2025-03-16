// src/lib/actions/user/userExisting.js
import { prisma } from "@/lib/utils/prismaClient"

export async function userExisting(phone) {
    const existingUser = await prisma.user.findUnique({
        where: {
            phone: phone,
        },
    });

    return existingUser; // Return null if user doesn't exist
}