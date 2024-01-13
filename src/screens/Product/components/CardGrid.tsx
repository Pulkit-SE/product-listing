// ProductGrid.tsx
import React from "react";

import ProductCard, { Product } from "./Card";
import "./styles.css";

interface ProductGridProps {
  products: Product[];
  currentPage: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, currentPage }) => {
  const displayCount = products.length - (products.length % 2);

  return (
    <div className="grid-parent">
      <p>Showing page {currentPage}</p>
      <div className="product-grid">
        {products.slice(0, displayCount).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {!products?.length && (
        <div className="center-div">
          <h1>No data found</h1>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
