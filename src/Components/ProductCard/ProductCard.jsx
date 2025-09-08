// src/Components/ProductCard/ProductCard.jsx
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import './ProductCard.css';

export default function ProductCard({ product, setEditingProduct, setProducts, API_URL }) {
  const handleDelete = () => {
    if (!window.confirm("Sigur vrei să ștergi produsul?")) return;

    fetch(`${API_URL}/gallery/${product.id}`, { method: "DELETE" })
      .then(res => {
        if (!res.ok) throw new Error("Eroare la ștergere");
        setProducts(prev => prev.filter(p => p.id !== product.id));
      })
      .catch(err => alert("Eroare: " + err.message));
  };

  return (
    <div className="card product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <div className="actions">
        <button className="btn btn-ghost" onClick={() => setEditingProduct(product)}>
          <FaEdit /> Edit
        </button>
        <button className="btn btn-error" onClick={handleDelete}>
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
}
