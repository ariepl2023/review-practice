import Image from "next/image";
import { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

type ProductImageProps = {
  src: string;
  alt: string;
  category: string;
  outOfStock: boolean;
};

type ProductInfoProps = {
  name: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  outOfStock: boolean;
};

function ProductImage({ src, alt, category, outOfStock }: ProductImageProps) {
  return (
    <div className="relative aspect-square bg-gray-50">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      {outOfStock && (
        <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
          <span className="text-sm font-semibold text-gray-500 tracking-wide uppercase">Out of stock</span>
        </div>
      )}
      <span className="absolute top-3 left-3 bg-white text-xs font-medium text-gray-600 px-2 py-1 rounded-full shadow-sm">
        {category}
      </span>
    </div>
  );
}

function ProductInfo({ name, description, price, rating, stock, outOfStock }: ProductInfoProps) {
  return (
    <div className="flex flex-col flex-1 p-4 gap-2">
      <h2 className="font-semibold text-gray-900 text-sm leading-snug line-clamp-2">{name}</h2>
      <p className="text-xs text-gray-500 line-clamp-2 flex-1">{description}</p>

      <div className="flex items-center gap-1 mt-1">
        <span className="text-yellow-400 text-sm">★</span>
        <span className="text-xs text-gray-600 font-medium">{rating.toFixed(1)}</span>
        {stock > 0 && stock <= 10 && (
          <span className="ml-auto text-xs text-orange-500 font-medium">Only {stock} left</span>
        )}
      </div>

      <div className="flex items-center justify-between mt-2">
        <span className="text-lg font-bold text-gray-900">${price.toFixed(2)}</span>
        <button
          disabled={outOfStock}
          className="text-sm font-medium px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default function ProductCard({ product }: ProductCardProps) {
  const outOfStock = product.stock === 0;

  return (
    <div className="group flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <ProductImage
        src={product.image}
        alt={product.name}
        category={product.category}
        outOfStock={outOfStock}
      />
      <ProductInfo
        name={product.name}
        description={product.description}
        price={product.price}
        rating={product.rating}
        stock={product.stock}
        outOfStock={outOfStock}
      />
    </div>
  );
}
