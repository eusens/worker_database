import { getAllProducts } from '@/lib/product.actions';
import ProductList from '@/components/product-list';
import Pagination from "@/components/Pagination";

const PAGE_SIZE = 12;

export const runtime = 'edge';

const Products = async ({ searchParams }: { searchParams: Promise<{ page?: string }> }) => {
  const params = await searchParams;
  const currentPage = Number(params?.page) || 1;

  // ✅ Fetch products using your helper
  const { data: products, totalPages } = await getAllProducts({
    page: currentPage,
    limit: PAGE_SIZE,
  });

  const hasNextPage = currentPage < totalPages;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ProductList data={products} title="Product List" />
      <div className="mt-8 flex justify-center">
        <Pagination page={currentPage} isNext={hasNextPage} />
      </div>
    </div>
  );
};

export default Products;
