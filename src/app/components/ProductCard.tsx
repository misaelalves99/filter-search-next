// app/components/ProductCard.tsx

"use client";

import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ IMPORTAÇÃO AQUI
import { Product } from "../types/product";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
  onBuyNow?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onBuyNow }) => {
  const router = useRouter(); // ✅ INSTANCIAR O ROUTER

  const goToProduct = () => {
    router.push(`/products/${product.id}`); // ✅ NAVEGAR PARA /products/[id]
  };

  return (
    <div className={styles.card}>
      <div className={styles.favoriteIcon}>
        <FaHeart size={18} color="#ff4d4f" title="Adicionar aos favoritos" />
      </div>

      <div className={styles.imageWrapper} onClick={goToProduct} style={{ cursor: "pointer" }}>
        <Image
          src={product.imageUrl || "/images/product-placeholder.png"}
          alt={product.name}
          width={300}
          height={300}
          className={styles.productImage}
        />
      </div>

      <div className={styles.details}>
        <h3 className={styles.productName} onClick={goToProduct} style={{ cursor: "pointer" }}>
          {product.name}
        </h3>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productPrice}>R$ {product.price.toFixed(2)}</p>

        <div className={styles.buttonGroup}>
          <button className={styles.cartButton} title="Adicionar ao carrinho">
            <FaCartPlus size={20} />
          </button>
          <button className={styles.buyButton} onClick={() => onBuyNow?.(product)}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


// 01-Estruturas e Tratamento -
// 02-Funções e Métodos -
// 03-Arrays -
// 05-Formulários e Eventos -
// 06-Hooks -
// 07-Props e Router -