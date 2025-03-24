import { prisma } from '../../utils/prismaClient'

export  async function getAllProducts() {
    
    const products = await prisma.product.findMany();
    return products;
}