// 01 - Importações essenciais e hooks
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  // 06 - Pathname atual para renderização condicional
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (pathname) {
      setCurrentPath(pathname);
    }
  }, [pathname]);

  return (
    <nav className={styles.navbar}>
      {/* 01 - Logo e navegação */}
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          E-Commerce
        </Link>

        <div className={styles.navLinks}>
          <Link
            href="/"
            className={`${styles.link} ${currentPath === "/" ? styles.active : ""}`}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={`${styles.link} ${currentPath === "/products" ? styles.active : ""}`}
          >
            Produtos
          </Link>
          <Link
            href="/search"
            className={`${styles.link} ${currentPath === "/search" ? styles.active : ""}`}
          >
            Busca
          </Link>
          <Link
            href="/filter"
            className={`${styles.link} ${currentPath === "/filter" ? styles.active : ""}`}
          >
            Filtro
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
