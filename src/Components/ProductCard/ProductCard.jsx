import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product, setProducts, setEditingProduct, API_URL }) {
  const { addToCart } = useContext(CartContext);

  const handleDelete = () => {
    if (!window.confirm(`Ștergi "${product.title}"?`)) return;
    fetch(`${API_URL}/gallery/${product.id}`, { method: "DELETE" })
      .then(() => setProducts(prev => prev.filter(p => p.id !== product.id)));
  };

  return (
    <div className={styles.card}>
      <img
        src={product.image || "https://via.placeholder.com/300x200"}
        alt={product.title}
        className={styles.cover}
      />
      <h3>{product.title}</h3>
      <p className={styles.price}>Preț: {product.price} RON</p>
      <div className={styles.row}>
        <button className={styles.btn} onClick={() => setEditingProduct(product)}>Editează</button>
        <button className={`${styles.btn} ${styles.btnDanger}`} onClick={handleDelete}>Șterge</button>
        <button className={styles.btn} onClick={() => addToCart(product)}>Adaugă în coș</button>
      </div>
    </div>
  );
}
