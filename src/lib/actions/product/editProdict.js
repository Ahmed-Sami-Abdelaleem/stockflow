 import { prisma } from '../../utils/prismaClient';


 export async function editProduct(id, product) {
  try {
    // Ensure id and product are valid
    if (!id || !product) {
      throw new Error("ID and updated product data are required");
    }

    // Update the product in the database
    const result = await prisma.product.update({
      where: {
        id: id, // Ensure this matches the type of your ID (e.g., String or Int)
      },
      data: product, // Pass the updated product data as an object
    });

    return result;
  } catch (e) {
    throw new Error(`Failed to update product: ${e.message}`);
  }
}