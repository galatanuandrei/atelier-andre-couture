import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Filters from "../../Components/Filters/Filters";
import ProductList from "../../Components/ProductList/ProductList";
import ProductForm from "../../Components/ProductForm/ProductForm";
import styles from "./GalleryPage.module.css";

export default function GalleryPage({ gallery, setGallery, API_URL }) {
  const { collectionId } = useParams();
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [filters, setFilters] = useState({ search: "" });

  useEffect(() => {
    if (collectionId) {
      setProducts(
        gallery.filter(p => p.collectionId === parseInt(collectionId))
      );
    } else {
      setProducts(gallery);
    }
  }, [collectionId, gallery]);

  const filteredProducts = products.filter(
    p =>
      p.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      p.description.toLowerCase().includes(filters.search.toLowerCase())
  );

  const handleAddNew = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  return (
    <section className={styles.gallery}>
      <h2>Galerie Colecții</h2>
      <Filters filters={filters} setFilters={setFilters} />

      <button className={styles.btn} onClick={handleAddNew}>
        Adaugă produs nou
      </button>

      {showForm && (
        <ProductForm
          products={products}
          setProducts={setProducts}
          gallery={gallery}
          setGallery={setGallery}
          editingProduct={editingProduct}
          setEditingProduct={setEditingProduct}
          API_URL={API_URL}
        />
      )}

      <ProductList
        products={filteredProducts.map(p => ({
          ...p,
          price: p.price || (Math.random() * 300 + 100).toFixed(0),
        }))}
        setProducts={setProducts}
        setEditingProduct={setEditingProduct}
        API_URL={API_URL}
      />
    </section>
  );
}
