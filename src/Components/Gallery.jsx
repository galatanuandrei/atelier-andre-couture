import React, { useState } from "react";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";

export default function Gallery({ gallery, API_URL }) {
  const [products, setProducts] = useState(gallery);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddNew = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  return (
    <section id="gallery">
      <h2>Galerie</h2>
      <button className="btn" onClick={handleAddNew}>Adaugă produs nou</button>
      {showForm && (
        <ProductForm
          products={products}
          setProducts={setProducts}
          editingProduct={editingProduct}
          setEditingProduct={setEditingProduct}
          API_URL={API_URL}
        />
      )}
      <ProductList
        products={products}
        setProducts={setProducts}
        setEditingProduct={setEditingProduct}
        API_URL={API_URL}
      />
    </section>
  );
}
