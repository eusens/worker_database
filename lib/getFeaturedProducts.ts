// lib/getFeaturedProducts.ts
import { prisma } from '@/lib/prisma';
import { Product } from '@prisma/client';

export async function getFeaturedProducts(): Promise<Product[]> {
  // 从数据库查询 featured 产品
  const featuredProducts = await prisma.product.findMany({
    where: {
      isFeatured: true,
    },
    take: 2, // 只取前2个
  });

  return featuredProducts;
}