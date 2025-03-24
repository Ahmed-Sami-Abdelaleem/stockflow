import { prisma } from '../../utils/prismaClient';

export async function addOrder(items, userId) {
  
   

    // Validate input
    if (!Array.isArray(items) || items.length === 0) {
      return ;
    }

    // Start transaction
    const newOrder = await prisma.$transaction(async (tx) => {
      // 1. Calculate total amount and validate stock
      let totalAmount = 0;
      for (const item of items) {
        const product = await tx.product.findUnique({
          where: { id: item.productId },
        });

        if (!product || product.quantity < item.quantity) {
          throw new Error(`Product ${item.productId} is out of stock`);
        }

        totalAmount += product.sellPrice * item.quantity;
      }

      // 2. Create sale record
      const sale = await tx.sale.create({
        data: {
          totalAmount,
          userId, // Add this if you have user relationships
        },
      });

      // 3. Create sale items and update inventory
      const saleItems = [];
      for (const item of items) {
        // Update product quantity
        await tx.product.update({
          where: { id: item.productId },
          data: { quantity: { decrement: item.quantity } },
        });

        // Create sale item
        const saleItem = await tx.saleItem.create({
          data: {
            saleId: sale.id,
            productId: item.productId,
            quantity: item.quantity,
            price: item.price, // Or get from product.sellPrice
          },
        });
        saleItems.push(saleItem);
      }

      return { sale, saleItems };
    });

    return newOrder;
 
}