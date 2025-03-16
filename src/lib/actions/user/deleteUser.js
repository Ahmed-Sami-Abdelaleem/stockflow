import {prisma } from  "../../utils/prismaClient";
export  async function deleteUser(id) {
    return prisma.user.delete({
      where: {
        id: id,
      },
    });
}