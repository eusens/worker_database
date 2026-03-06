// lib/getFeaturedProducts.ts
import { prisma } from '@/lib/prisma';

export async function getFeaturedProducts() {
  const featuredProducts = await prisma.product.findMany({
    where: {
      isFeatured: true,
    },
    take: 2,
  });

  return featuredProducts;
}