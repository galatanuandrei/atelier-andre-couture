import React, { useState, useEffect } from "react";
import ProductList from "./ProductList/ProductList";
import ProductForm from "./ProductForm/ProductForm";
import './Gallery.css';

export default function Gallery({ gallery, API_URL }) {
  const [products, setProducts] = useState(gallery);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // 🔄 sincronizare dacă prop-ul gallery se schimbă
  useEffect(() => {
    setProducts(gallery);
  }, [gallery]);

  const handleAddNew = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  return (
    <section id="gallery">
      <h2>Galerie Produse</h2>
      <button className="btn" onClick={handleAddNew}>
        Adaugă produs nou
      </button>

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
