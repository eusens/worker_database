import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const revalidate = 86400; // ✅ Regenerate once per day (24 hours)

// 👇 Use Edge runtime for better performance on Cloudflare Pages
export const runtime = "edge";

export async function GET() {
  // ✅ Fetch product slugs and updated dates from your database using Prisma Accelerate
  const products = await prisma.product.findMany({
    select: {
      slug: true,
      createdAt : true,
    },
    cacheStrategy: {
      ttl: 3600, // cache 1 hour in Prisma Accelerate
      swr: 86400, // stale while revalidating for 1 day
    },
  });

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://panasonicservomotor.com";

  // ✅ Generate XML for each product URL
  const urls = products
    .map(
      (p) => `
        <url>
          <loc>${baseUrl}/${p.slug}</loc>
          <lastmod>${new Date(p.createdAt).toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>`
    )
    .join("");

  // ✅ Construct the sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  >
    ${urls}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
