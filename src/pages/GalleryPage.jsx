import React, { useState } from "react";
import ProductList from "../Components/ProductList";
import ProductForm from "../Components/ProductForm";

export default function GalleryPage({ gallery, setGallery, API_URL }) {
  const [editingProduct, setEditingProduct] = useState(null);

  return (
    <section>
      <h2 style={{ textAlign: "center", marginTop: "1rem" }}>Galerie Produse</h2>
      <ProductForm products={gallery} setProducts={setGallery} editingProduct={editingProduct} setEditingProduct={setEditingProduct} API_URL={API_URL} />
      <ProductList products={gallery} setProducts={setGallery} setEditingProduct={setEditingProduct} API_URL={API_URL} />
    </section>
  );
}

