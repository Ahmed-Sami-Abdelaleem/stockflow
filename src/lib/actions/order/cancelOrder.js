import { prisma } from "../../utils/prismaClient";

export  async function cancelOrder(orderId) {
  const order = await prisma.order.delete({
    where: {
      id: orderId,
    },
  });
}