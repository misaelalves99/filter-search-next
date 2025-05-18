// app/products/page.tsx

'use client';

import React from 'react';
import ProductListFilter from '../components/ProductListFilter';
import PageHeader from '../components/PageHeader';
import styles from './FilterPage.module.css';

const FilterPage = () => {
  return (
    <main className={styles.container}>
      <PageHeader
        title="Catálogo de Produtos"
        subtitle="Explore nossa coleção completa de produtos disponíveis."
      />

      <ProductListFilter enableFilterUI enableBuyNow title="Catálogo de Produtos" />
    </main>
  );
};

export default FilterPage;
