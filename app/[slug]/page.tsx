export const runtime = "edge"; // ✅ tell Next.js + Cloudflare to use Edge runtime

import { notFound } from "next/navigation";
import Image from "next/image";
// import sampleData from "@/db/sample-data";
import Rating from "@/components/rating";
import { getProductBySlug } from "@/lib/product.actions";

interface PageProps {
  params: Promise<{ slug: string }>; // params are async in App Router
}

const EXCLUDED_SLUGS = ["about", "contact"];

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;

  // ❌ Exclude fixed pages (they have their own page.tsx)
  if (EXCLUDED_SLUGS.includes(slug)) {
    return notFound();
  }

  // Find product by slug
  // const product = sampleData.products.find((p) => p.slug === slug);
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  if (!product) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <p className="text-gray-600">We could not find a product with slug: {slug}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
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
        <div className="flex gap-2 mt-4">
          {product.images.slice(1).map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`${product.name} image ${idx + 2}`}
              width={100}
              height={100}
              className="rounded border"
            />
          ))}
        </div>
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

        {/* ✅ Render description as real HTML */}
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
      {/* ✅ Conditionally render details if available */}
      {product.details && (
        <div className="md:col-span-2 mt-12">
          <h2 className="text-2xl font-bold mb-4">Product Details</h2>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: product.details }}
          />
        </div>
      )}
      {product.conditions && (
        <div className="md:col-span-2 mt-12">
          <h5 className="text-2xl font-bold mb-4">Item condition</h5>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: product.conditions }}
          />
        </div>
      )}
    </div>
  );
}