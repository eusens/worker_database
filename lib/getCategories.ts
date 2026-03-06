// lib/getCategories.ts
import { prisma } from '@/lib/prisma';

export async function getAllCategories() {
  // 从数据库获取所有分类及计数
  const categories = await prisma.product.groupBy({
    by: ['category'],
    _count: {
      category: true,
    },
  });

  // 转换为需要的格式
  return categories.map((item) => ({
    category: item.category,
    _count: item._count.category,
  }));
}