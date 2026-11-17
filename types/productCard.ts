export type ProductCardProps = {
  product: import("./product").Product;
};

export type ProductImageProps = {
  src: string;
  alt: string;
  category: string;
  outOfStock: boolean;
};

export type ProductInfoProps = {
  name: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  outOfStock: boolean;
};
