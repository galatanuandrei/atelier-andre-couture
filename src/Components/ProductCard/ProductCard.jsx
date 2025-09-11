import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product, setEditingProduct, setProducts, products, API_URL }) => {

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));

    fetch(`${API_URL}/gallery/${id}`, { method: "DELETE" })
      .catch(console.error);
  };

  return (
    <div className={styles.card}>
      <div>
        <img
          src={(product.images && product.images[0]) || product.image || "https://via.placeholder.com/300x200"}
          alt={product.title}
          className={styles.cover}
        />
        <h3>{product.title}</h3>

        
        {product.description && (
          <p className={styles.description}>{product.description}</p>
        )}

        <p className={styles.price}>{product.price} RON</p>
      </div>

      <div className={styles.row}>
        <button className={styles.btn} onClick={() => setEditingProduct(product)}>Editează</button>
        <button className={styles.btnDanger} onClick={() => handleDelete(product.id)}>Șterge</button>
        <button className={styles.btn} onClick={() => alert("Adaugă în coș")}>Adaugă în coș</button>
      </div>
    </div>
  );
};

export default ProductCard;
