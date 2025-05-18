// app/components/ProductList.tsx

'use client';

import React, { useEffect } from "react";
import { Product } from "../types/product";
import ProductCard from "./ProductCard";
import { useProduct } from "../context/ProductContext";
import styles from "./ProductList.module.css";

interface ProductListProps {
  overrideProducts?: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ overrideProducts = [] }) => {
  const { setProducts, products } = useProduct();

  useEffect(() => {
    if (overrideProducts.length > 0) {
      setProducts(overrideProducts);
    }
  }, [overrideProducts]);

  if (!products.length) {
    return <p className={styles.noProductsMessage}>Nenhum produto encontrado.</p>;
  }

  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
