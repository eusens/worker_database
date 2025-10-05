import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Rating from "./rating";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="w-full max-s-sm">
      <CardHeader className="p-0 relative aspect-square bg-gray-50 flex items-center justify-center">

        <Link href={`/${product.slug}`}>
        <Image
            src={product.images?.[0] || "/placeholder.png"}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover hover:scale-105 transition-transform duration-300"
            priority
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product.brand}</div>
        <Link href={`/${product.slug}`}>
          <h2 className="text-sm font-medium">{product.name}</h2>
        </Link>
        <div className="flex-between gap-4">
          <Rating value={Number(product.rating)} />
          {product.stock > 0 ? (
            <p className="font-bold">${product.price}</p>
          ) : (
            <p className="font-bold text-red-500">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
