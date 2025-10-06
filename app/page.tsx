// import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/product.actions";
import ProductList from "@/components/product-list";
// import ProductCarousel from "@/components/product-carousel";
// import {
//   // getLatestProducts,
//   getFeaturedProducts,
// } from '@/lib/getFeaturedProducts';

const Homepage = async () => {
  // const featuredProducts = await getFeaturedProducts();
  const latestProducts = await getLatestProducts();
  return (
    <>
    {/* <div>
         {featuredProducts.length > 0 && (
           <ProductCarousel data={featuredProducts} />
         )}
      </div> */}
      {/* Company Introduction */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          About Our Company
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Our company is a quality driven industrial automation and system
          integration company. Our core strength is our dedicated team of
          Professional Automation Experts and unique partnership models, with
          this we are positioned to deliver outcome-based solutions across the
          industry that meets and exceeds your business needs.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Our Promise!
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          We are close to our customers, to ensure the quality and distinctive
          excellence of our solutions. We like to leave a mark. A guarantee for
          those who invest in our expertise and professionalism.
        </p>
      </section>
      

      {/* Product List */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Product List
        </h2>
        <ProductList
          data={latestProducts}
          // title="Newest Arrivals"
          limit={4}
        />
      </section>
    </>
  );
};

export default Homepage;