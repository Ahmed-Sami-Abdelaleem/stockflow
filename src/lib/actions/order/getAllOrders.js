import {prisma} from "../../utils/prismaClient"

export  async function getAllOrders() {
    try {
      const orders = await prisma.sale.findMany({
        include: {
          items: {
            include: { product: true }
          }
        },
        orderBy: { createdAt: 'desc' }
      });
      return orders;
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw error;
    }
  }