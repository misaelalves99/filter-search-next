// app/products/page.tsx

'use client';

import React from 'react';
import ProductList from '../components/ProductList';
import PageHeader from '../components/PageHeader';
import styles from './ProductsPage.module.css';

const ProductsPage = () => {
  return (
    <main className={styles.container}>
      <PageHeader
        title="Catálogo de Produtos"
        subtitle="Explore nossa coleção completa de produtos disponíveis."
      />

      <ProductList />
    </main>
  );
};

export default ProductsPage;
