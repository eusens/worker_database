export const runtime = "edge"; // ✅ tell Next.js + Cloudflare to use Edge runtime

import { notFound } from "next/navigation";
import Image from "next/image";
import Rating from "@/components/rating";
import ProductCard from "@/components/product-card";
import { getProductBySlug, getRelatedProducts } from "@/lib/product.actions";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const EXCLUDED_SLUGS = ["about", "contact"];

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;

  if (EXCLUDED_SLUGS.includes(slug)) {
    return notFound();
  }

  // 🟢 Fetch product
  const product = await getProductBySlug(slug);
  if (!product) return notFound();

  // 🟢 Fetch related products (same category)
  const relatedProducts = await getRelatedProducts(product.category, slug);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* ✅ Product Details Layout */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg shadow-md"
            priority
          />
          {product.images.length > 1 && (
            <div className="flex gap-2 mt-4">
              {product.images.slice(1).map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={`${product.name} image ${idx + 2}`}
                  width={100}
                  height={100}
                  className="rounded border object-cover"
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.category}</p>

          <Rating value={Number(product.rating)} />
          <p className="text-gray-500 mb-6">{product.numReviews} reviews</p>

          <p className="text-2xl font-semibold mb-4">${Number(product.price)}</p>
          {product.stock > 0 ? (
            <p className="text-green-600 font-medium mb-4">In Stock</p>
          ) : (
            <p className="text-red-600 font-medium mb-4">Out of Stock</p>
          )}

          {/* ✅ Render HTML Description */}
          <div
            className="mb-6 prose"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />

          <button
            disabled={product.stock === 0}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 disabled:bg-gray-400"
          >
            Contact us
          </button>
        </div>
      </div>

      {/* ✅ Product Details Section */}
      {product.details && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Product Details</h2>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: product.details }}
          />
        </div>
      )}

      {/* ✅ Item Condition */}
      {product.conditions && (
        <div className="mt-12">
          <h5 className="text-2xl font-bold mb-4">Item condition</h5>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: product.conditions }}
          />
        </div>
      )}

      {/* ✅ Related Products */}
      {relatedProducts?.length > 0 && (
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6">Related Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
