import { ProductCardProps } from "@/types/productCard";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

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
