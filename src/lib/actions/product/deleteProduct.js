import {prisma} from '../../utils/prismaClient';

export  async function deleteProduct(id) {
    const deletedProduct = await prisma.product.delete({
        where: {
          id: id,
        },
      }); 

      return deletedProduct;
}