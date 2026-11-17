import { cn } from "@/lib/cn";
import { ProductInfoProps } from "@/types/productCard";

export default function ProductInfo({ product }: ProductInfoProps) {
  const outOfStock = product.stock === 0;
  const lowStock = product.stock > 0 && product.stock <= 10;

  return (
    <div className="flex flex-col flex-1 p-4 gap-2">
      <h2 className="font-semibold text-gray-900 text-sm leading-snug line-clamp-2">{product.name}</h2>
      <p className="text-xs text-gray-500 line-clamp-2 flex-1">{product.description}</p>

      <div className="flex items-center gap-1 mt-1">
        <span className="text-yellow-400 text-sm">★</span>
        <span className="text-xs text-gray-600 font-medium">{product.rating.toFixed(1)}</span>
        {lowStock && (
          <span className="ml-auto text-xs text-orange-500 font-medium">Only {product.stock} left</span>
        )}
      </div>

      <div className="flex items-center justify-between mt-2">
        <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
        <button
          disabled={outOfStock}
          className={cn(
            "text-sm font-medium px-4 py-2 rounded-xl bg-gray-900 text-white transition-colors",
            outOfStock ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-700"
          )}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
