import React from "react";

import "./styles.css";

export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  category: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product?.images[0]}
        alt={product.title}
        className="card-image"
      />
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
