import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product, setProducts, setEditingProduct, API_URL }) {
  const { addToCart } = useContext(CartContext);

  const handleDelete = () => {
    if (!window.confirm(`Ștergi "${product.name}"?`)) return;
    fetch(`${API_URL}/gallery/${product.id}`, { method: "DELETE" })
      .then(() => setProducts(prev => prev.filter(p => p.id !== product.id)));
  };

  return (
    <div className="card">
      <img
        src={product.image || "https://via.placeholder.com/300x200?text=Produs"}
        alt={product.name}
        className="cover"
      />
      <h3>{product.name}</h3>
      {product.description && <p>{product.description}</p>}
      <div className="row">
        <button className="btn" onClick={() => setEditingProduct(product)}>Editează</button>
        <button className="btn btn-danger" onClick={handleDelete}>Șterge</button>
        <button className="btn" onClick={() => addToCart(product)}>Adaugă în coș</button>
      </div>
    </div>
  );
}
