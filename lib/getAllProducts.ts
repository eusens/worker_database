// lib/getAllProducts.ts
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

const PAGE_SIZE = 12;

export async function getAllProducts({
  query,
  limit = PAGE_SIZE,
  page = 1,
  category,
  price,
  rating,
  sort,
}: {
  query?: string;
  limit?: number;
  page?: number;
  category?: string;
  price?: string;
  rating?: string;
  sort?: string;
}) {
  // 构建 where 条件
  const where: Prisma.ProductWhereInput = {};

  if (query && query !== 'all') {
    where.name = {
      contains: query,
      mode: 'insensitive',
    };
  }

  if (category && category !== 'all') {
    where.category = category;
  }

  if (price && price !== 'all') {
    const [min, max] = price.split('-').map(Number);
    where.price = {
      gte: min,
      lte: max,
    };
  }

  if (rating && rating !== 'all') {
    where.rating = {
      gte: Number(rating),
    };
  }

  // 排序
  let orderBy: Prisma.ProductOrderByWithRelationInput = {};
  switch (sort) {
    case 'lowest':
      orderBy = { price: 'asc' };
      break;
    case 'highest':
      orderBy = { price: 'desc' };
      break;
    case 'rating':
      orderBy = { rating: 'desc' };
      break;
    default:
      orderBy = { createdAt: 'desc' };
  }

  // 查询总数
  const totalProducts = await prisma.product.count({ where });

  // 查询数据
  const data = await prisma.product.findMany({
    where,
    orderBy,
    skip: (page - 1) * limit,
    take: limit,
  });

  return {
    data,
    totalPages: Math.ceil(totalProducts / limit),
    totalProducts,
    currentPage: page,
  };
}