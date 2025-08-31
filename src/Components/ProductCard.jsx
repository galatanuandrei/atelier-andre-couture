import React from "react";

export default function ProductCard({ product, setProducts, setEditingProduct, API_URL }) {
  const handleDelete = () => {
    if (!confirm(`Ștergi "${product.name}"?`)) return;
    fetch(`${API_URL}/${product.id}`, { method: "DELETE" })
      .then(() => setProducts(prev => prev.filter(p => p.id !== product.id)));
  };

  return (
    <div className="card">
      <img src={product.image || "https://via.placeholder.com/300x200?text=Produs"} alt={product.name} className="cover" />
      <div className="content">
        <h3>{product.name}</h3>
        <p className="muted">{product.category || "Fără categorie"}</p>
        <p><strong>{Number(product.price).toFixed(2)} RON</strong></p>
        {product.description && <p>{product.description}</p>}
        <div className="row">
          <button className="btn" onClick={() => setEditingProduct(product)}>Editează</button>
          <button className="btn btn-danger" onClick={handleDelete}>Șterge</button>
        </div>
      </div>
    </div>
  );
}
