 import {prisma} from '../../utils/prismaClient';

export  async function addProduct(product) {
  
    const newProduct = await prisma.product.create({
        data: product,
      });

      return newProduct;

}