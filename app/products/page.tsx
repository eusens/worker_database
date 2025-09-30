// import Image from "next/image";
import sampleData from '@/db/sample-data'; 
import ProductList from '@/components/product-list';
import Pagination from "@/components/Pagination";

const PAGE_SIZE = 12;

export const runtime = 'edge';

// Make the component async and await searchParams
const Products = async ({ searchParams }: { searchParams: Promise<{ page?: string }> }) => {
  // Await the searchParams promise
  const params = await searchParams;
  const currentPage = Number(params?.page) || 1;
  const totalProducts = sampleData.products.length;
  
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedProducts = sampleData.products.slice(startIndex, endIndex);
  
  const hasNextPage = endIndex < totalProducts;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ProductList data={paginatedProducts} title="Product List" />
      <div className="mt-8 flex justify-center">
        <Pagination page={currentPage} isNext={hasNextPage} />
      </div>
    </div>
  );
};

export default Products;