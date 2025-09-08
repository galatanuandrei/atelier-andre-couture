// src/pages/GalleryPage/GalleryPage.jsx
import React, { useState, useMemo } from "react";
import ProductForm from "../../Components/ProductForm/ProductForm";
import ProductList from "../../Components/ProductList/ProductList";
import Filters from "../../Components/Filters/Filters";
import './GalleryPage.css';

export default function GalleryPage({ gallery, setGallery, API_URL }) {
  const [editingProduct, setEditingProduct] = useState(null);
  const [filters, setFilters] = useState({ search: "", category: "Toate", sort: "newest" });

  const filtered = useMemo(() => {
    if (!gallery) return [];
    return gallery.filter(p => {
      const title = (p.title || "").toLowerCase();
      const matchSearch = title.includes((filters.search || "").toLowerCase());
      return matchSearch;
    });
  }, [gallery, filters]);

  return (
    <section className="gallery-page">
      <h2>Galerie Colecții</h2>
      <Filters filters={filters} setFilters={setFilters} products={gallery} />
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
