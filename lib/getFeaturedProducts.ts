// lib/getFeaturedProducts.ts
import { prisma } from '@/lib/prisma';
import { Product } from '@prisma/client';

type FeaturedProduct = Omit<Product, 'price' | 'rating'> & {
  price: string;
  rating: string;
};

export async function getFeaturedProducts(): Promise<FeaturedProduct[]> {
  const featuredProducts = await prisma.product.findMany({
    where: {
      isFeatured: true,
    },
    take: 2,
  });

  return featuredProducts as FeaturedProduct[];
}