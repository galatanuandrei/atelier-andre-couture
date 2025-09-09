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
          setEditingProduct={setEditingProduct}
          setProducts={setProducts}
          products={products}
          API_URL={API_URL}
        />
      ))}
    </div>
  );
}
