import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Filters from "../../Components/Filters/Filters";
import ProductList from "../../Components/ProductList/ProductList";
import ProductForm from "../../Components/ProductForm/ProductForm";
import kidsImg from "../../assets/Poze-site/Acasap/kids.jpeg";
import officeImg from "../../assets/Poze-site/Acasap/office.jpeg";
import searaImg from "../../assets/Poze-site/Acasap/seara.jpeg";
import varaImg from "../../assets/Poze-site/Acasap/vara.jpg";
import styles from "./GalleryPage.module.css";

export default function GalleryPage({ gallery = [], setGallery, API_URL }) {
  const { collectionId } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [filters, setFilters] = useState({ search: "" });

  // Extra collections for homepage/cards navigation
  const extraCollections = [
    { collectionId: 1, title: "Girls Couture", image: kidsImg, route: "/girls" },
    { collectionId: 2, title: "Colecția Office", image: officeImg, route: "/office" },
    { collectionId: 3, title: "Colecția de Seară", image: searaImg, route: "/night" },
    { collectionId: 4, title: "Colecția de Vară", image: varaImg, route: "/summer" },
  ];

  useEffect(() => {
    if (collectionId) {
      setProducts(
        gallery.filter(p => p.collectionId === Number(collectionId))
      );
    } else {
      setProducts(gallery);
    }
  }, [collectionId, gallery]);

  const q = (filters.search || "").trim().toLowerCase();

  const filteredProducts = products.filter(p => {
    const title = (p.title || "").toLowerCase();
    const desc = (p.description || "").toLowerCase();
    return !q || title.includes(q) || desc.includes(q);
  });

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

      <h2 style={{ marginTop: "2.5rem" }}>Colecții Speciale</h2>
      <div className={styles.collectionsGrid}>
        {extraCollections.map((c) => (
          <div
            key={c.collectionId}
            className={styles.collectionCard}
            onClick={() => navigate(c.route)}
            role="button"
            tabIndex={0}
          >
            <img src={c.image} alt={c.title} />
            <div className={styles.collectionOverlay}>
              <h3>{c.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
