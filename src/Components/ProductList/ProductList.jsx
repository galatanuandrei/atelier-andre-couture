import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";

export default function ProductList({ products, setProducts, setEditingProduct, API_URL }) {
  if (!products.length) return <p className={styles.muted}>Nu există produse.</p>;

  return (
    <div className={styles.grid}>
      {products.map(p => (
        <ProductCard
          key={p.id}
          product={p}
          setProducts={setProducts}
          setEditingProduct={setEditingProduct}
          API_URL={API_URL}
        />
      ))}
    </div>
  );
}
