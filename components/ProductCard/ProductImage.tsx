import Image from "next/image";
import { ProductImageProps } from "@/types/productCard";

export default function ProductImage({ src, alt, category, outOfStock }: ProductImageProps) {
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
