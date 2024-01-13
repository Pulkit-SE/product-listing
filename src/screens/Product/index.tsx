// ProductListingPage.tsx

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductCard, { Product } from "./components/Card";
import FilterBar from "./components/Filter";
import {
  ApiRequestParams,
  fetchCategories,
  fetchListingProducts,
} from "../../services/api/product";

import "./styles.css";
import ProductGrid from "./components/CardGrid";
import BottomButtons from "./components/BottomButtons";

const PRODUCTS_PER_PAGE = 12;

const ProductListingPage: React.FC = () => {
  const [products, setProducts] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [categories, setCategories] = useState<any>([]);
  const [filters, setFilters] = useState<any>({
    offset: 0,
    priceRange: [0, 2000],
    selectedCategory: "",
    limit: 12,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await fetchListingProducts(filters);
        console.log("fetchedProducts", fetchedProducts);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, [filters]);

  useEffect(() => {
    const fetcAllCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        console.log("fetchedCategories", fetchedCategories);
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    fetcAllCategories();
  }, []);

  const handleFilterChange = (filter: any) => {
    console.log("filter", filter);
    setFilters({ ...filters, ...filter });
  };

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
    setFilters({ ...filters, offset: filters?.offset - 10 });
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
    setFilters({ ...filters, offset: filters?.offset + 10 });
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="product-list">
        <div className="product-content">
          <FilterBar
            categories={categories}
            onFilterChange={handleFilterChange}
            filters={filters}
          />
          <ProductGrid currentPage={currentPage} products={products} />
        </div>
        {!!products?.length && (
          <BottomButtons
            productLength={products?.length}
            currentoffset={filters?.offset}
            handlePrevClick={handlePrevClick}
            handleNextClick={handleNextClick}
          />
        )}
      </div>
    </div>
  );
};

export default ProductListingPage;
