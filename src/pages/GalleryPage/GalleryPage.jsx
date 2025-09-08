import React, { useState, useMemo } from "react";
import ProductForm from "../../Components/ProductForm/ProductForm";
import ProductList from "../../Components/ProductList/ProductList";
import "./GalleryPage.css";

export default function GalleryPage({ gallery, setGallery, API_URL }) {
  const [editingProduct, setEditingProduct] = useState(null);

  const filtered = useMemo(() => {
    if (!gallery) return [];
    return gallery; // poți adăuga filtre mai târziu
  }, [gallery]);

  return (
    <section className="gallery-page">
      <h2>Galerie Colecții</h2>

      <ProductForm
        products={gallery}
        setProducts={setGallery}
        editingProduct={editingProduct}
        setEditingProduct={setEditingProduct}
        API_URL={API_URL}
      />

      <ProductList
        products={filtered}
        setProducts={setGallery}
        setEditingProduct={setEditingProduct}
        API_URL={API_URL}
      />
    </section>
  );
}
