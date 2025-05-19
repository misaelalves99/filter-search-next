// app/components/ProductList.tsx

'use client';

import React, { useState, useEffect } from 'react';
import { getProducts } from '../lib/api/products';
import { useProduct } from '../context/ProductContext';
import { Product } from '../types/product';

import ProductCard from './ProductCard';
import CategoryList from './CategoryList';

import styles from './ProductListFilter.module.css';

interface ProductListFilterProps {
  enableFilterUI?: boolean;
  enableBuyNow?: boolean;
  title?: string;
}

const ProductList: React.FC<ProductListFilterProps> = ({
  enableFilterUI = true,
}) => {
  const { products, setProducts } = useProduct();

  const [categoryFilter, setCategoryFilter] = useState('');
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetched = await getProducts();
        setProducts(fetched);

        const allCategories = Array.from(
          new Set(fetched.map((product: Product) => product.category))
        );
        setCategories(allCategories);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchData();
  }, [setProducts]);

  const handleCategoryChange = (selectedCategory: string) => {
    setCategoryFilter(selectedCategory === 'todos' ? '' : selectedCategory);
  };

  const filtered = products
    .filter((product) =>
      categoryFilter ? product.category === categoryFilter : true
    )

  return (
    <div className={styles.pageWrapper}>
      {enableFilterUI && (
        <>
          <div className={styles.categoryWrapper}>
            <CategoryList
              categories={['todos', ...categories]}
              onCategorySelect={handleCategoryChange}
            />
          </div>
        </>
      )}

      <div className={styles.productGrid}>
        {filtered.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
