// types.ts (place this in your project root or inside /src)
export interface Product {
    id?: string; // optional if you're not generating IDs
    name: string;
    slug: string;
    category: string;
    description: string;
    images: string[];
    price: number;
    brand: string;
    rating: number;
    numReviews: number;
    stock: number;
    isFeatured: boolean;
    banner?: string | null;
    details?: string | null;
    conditions?: string | null;
  }
  