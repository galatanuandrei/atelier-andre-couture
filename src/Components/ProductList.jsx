import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products, setProducts, setEditingProduct, API_URL }) {
  if (!products.length) return <p className="muted">Nu există produse. Adaugă unul!</p>;

  return (
    <div className="grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} setProducts={setProducts} setEditingProduct={setEditingProduct} API_URL={API_URL} />
      ))}
    </div>
  );
}
