import {prisma } from  "../../utils/prismaClient";

export  async function editUser(user) {
 return prisma.user.update({
    where: {
      id: user.id,
    },
    data: user,
  });
}