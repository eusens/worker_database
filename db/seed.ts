import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data';

const prisma = new PrismaClient();

async function main() {
  console.log("⏳ Seeding products...");

  for (const product of sampleData.products) {
    // check if product with same slug exists
    const existing = await prisma.product.findUnique({
      where: { slug: product.slug },
    });

    if (existing) {
      await prisma.product.update({
        where: { slug: product.slug },
        data: {
          name: product.name,
          category: product.category,
          description: product.description,
          details: product.details,
          brand: product.brand,
          price: product.price,
          stock: product.stock,
          isFeatured: product.isFeatured,
          banner: product.banner,
          rating: product.rating,
          numReviews: product.numReviews,
          conditions: product.conditions,
          images: product.images,
        },
      });
      console.log(`🔁 Updated: ${product.slug}`);
    } else {
      await prisma.product.create({ data: product });
      console.log(`✅ Created: ${product.slug}`);
    }
  }

  console.log("🎉 Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
