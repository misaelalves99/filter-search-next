// app/products/page.tsx

'use client';

import React, { useEffect } from 'react';
import ProductList from '../components/ProductList';
import PageHeader from '../components/PageHeader';
import styles from './ProductsPage.module.css';
import { useProduct } from '../context/ProductContext';

const ProductsPage = () => {
  const { products, fetchProducts } = useProduct();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <main className={styles.container}>
      <PageHeader
        title="Catálogo de Produtos"
        subtitle="Explore nossa coleção completa de produtos disponíveis."
      />
      <ProductList products={products} />
    </main>
  );
};

export default ProductsPage;
