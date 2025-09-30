// lib/getAllProducts.ts
import sampleData from '@/db/sample-data';

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
  let filtered = [...sampleData.products];

  // 🔍 Query filter
  if (query && query !== 'all') {
    filtered = filtered.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  // 🏷️ Category filter
  if (category && category !== 'all') {
    filtered = filtered.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  // 💲 Price filter
  if (price && price !== 'all') {
    const [min, max] = price.split('-').map(Number);
    filtered = filtered.filter((p) => p.price >= min && p.price <= max);
  }

  // ⭐ Rating filter
  if (rating && rating !== 'all') {
    filtered = filtered.filter((p) => p.rating >= Number(rating));
  }

  // ↕️ Sorting
  switch (sort) {
    case 'lowest':
      filtered = filtered.sort((a, b) => a.price - b.price);
      break;
    case 'highest':
      filtered = filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered = filtered.sort((a, b) => b.rating - a.rating);
      break;
    default: // newest (simulate with stock or order in array)
      filtered = filtered.sort((a, b) => b.stock - a.stock);
      break;
  }

  // 📦 Pagination
  const start = (page - 1) * limit;
  const end = start + limit;
  const data = filtered.slice(start, end);

  return {
    data,
    totalPages: Math.ceil(filtered.length / limit),
    totalProducts: filtered.length,
    currentPage: page,
  };
}
