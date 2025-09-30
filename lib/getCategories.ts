import sampleData from "@/db/sample-data";

// Group products by category
export function getAllCategories() {
  const categoryMap: Record<string, number> = {};

  sampleData.products.forEach((product) => {
    if (!categoryMap[product.category]) {
      categoryMap[product.category] = 0;
    }
    categoryMap[product.category] += 1;
  });

  // Convert to array like Prisma’s groupBy
  return Object.entries(categoryMap).map(([category, count]) => ({
    category,
    _count: count,
  }));
}
