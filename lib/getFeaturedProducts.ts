import { Product } from "../types";

import sampleData from "@/db/sample-data";

export async function getFeaturedProducts(): Promise<Product[]> {
  // simulate filtering JSON
  return sampleData.products.filter((p) => p.isFeatured).slice(0, 2);
}
