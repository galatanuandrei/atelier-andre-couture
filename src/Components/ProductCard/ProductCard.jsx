import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product, onClick }) => {
  return (
    <div className={styles.card} onClick={() => onClick(product)}>
      <img
        src={
          (product.images && product.images[0]) ||
          product.image ||
          "https://via.placeholder.com/300x200"
        }
        alt={product.title}
        className={styles.cover}
      />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>{product.price} RON</p>
      <button className={styles.button}>Adaugă în coș</button>
    </div>
  );
};

export default ProductCard;
