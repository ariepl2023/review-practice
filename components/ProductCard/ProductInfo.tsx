import { ProductInfoProps } from "@/types/productCard";

export default function ProductInfo({ name, description, price, rating, stock, outOfStock }: ProductInfoProps) {
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
