'use server';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';
// import { withAccelerate } from '@prisma/extension-accelerate';
import { convertToPlainObject } from './utils';


// Get latest products
export async function getLatestProducts() {
    const data = await prisma.product.findMany({
      take: 4,
      orderBy: { createdAt: 'desc' },
    });

    return convertToPlainObject(data);
    }
  
// Get all products
export async function getAllProducts({
  query,
  limit = 12,
  page,
  category,
  price,
  rating,
  sort,
}: {
  query?: string;
  limit?: number;
  page: number;
  category?: string;
  price?: string;
  rating?: string;
  sort?: string;
}) {
  // Query filter
  const queryFilter: Prisma.ProductWhereInput =
    query && query !== 'all'
      ? {
          name: {
            contains: query,
            mode: 'insensitive',
          } as Prisma.StringFilter,
        }
      : {};

  // Category filter
  const categoryFilter = category && category !== 'all' ? { category } : {};

  // Price filter
  const priceFilter: Prisma.ProductWhereInput =
    price && price !== 'all'
      ? {
          price: {
            gte: Number(price.split('-')[0]),
            lte: Number(price.split('-')[1]),
          },
        }
      : {};

  // Rating filter
  const ratingFilter =
    rating && rating !== 'all'
      ? {
          rating: {
            gte: Number(rating),
          },
        }
      : {};

  const data = await prisma.product.findMany({
    where: {
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
      ...ratingFilter,
    },
    orderBy:
      sort === 'lowest'
        ? { price: 'asc' }
        : sort === 'highest'
        ? { price: 'desc' }
        : sort === 'rating'
        ? { rating: 'desc' }
        : { createdAt: 'desc' },
    skip: (page - 1) * limit,
    take: limit,
  });

  const dataCount = await prisma.product.count();

  return {
    data: convertToPlainObject(data),
    totalPages: Math.ceil(dataCount / limit),
  };
}

// Get single product by it's slug
export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug },
  });
}

// Get all categories
type CategoryCount = {
  category: string;
  _count: {
    category: number;
  };
};

export async function getAllCategories() {
  const data = (await prisma.product.groupBy({
    by: ["category"],
    _count: {
      category: true,
    },
  })) as CategoryCount[];

  return data.map((item) => ({
    category: item.category,
    count: item._count.category,
  }));
}
