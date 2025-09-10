import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Filters from "../../Components/Filters/Filters";
import ProductForm from "../../Components/ProductForm/ProductForm";
import ProductList from "../../Components/ProductList/ProductList";

import kidsImg from "../../assets/Poze-site/Acasap/kids.jpeg";
import officeImg from "../../assets/Poze-site/Acasap/office.jpeg";
import searaImg from "../../assets/Poze-site/Acasap/seara.jpeg";
import varaImg from "../../assets/Poze-site/Acasap/vara.jpg";

import styles from "./GalleryPage.module.css";

export default function GalleryPage({ API_URL }) {
  const navigate = useNavigate();
  const [gallery, setGallery] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/gallery`)
      .then(res => res.json())
      .then(setGallery)
      .catch(console.error);

    
    fetch(`${API_URL}/produse`)
      .then(res => res.json())
      .then(setAllProducts)
      .catch(console.error);
  }, [API_URL]);

  const handleAddNew = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  
  const extraCollections = [
    { collectionId: 1, title: "Girls Couture", image: kidsImg, route: "/girls" },
    { collectionId: 2, title: "Colecția Office", image: officeImg, route: "/office" },
    { collectionId: 3, title: "Colecția de Seară", image: searaImg, route: "/night" },
    { collectionId: 4, title: "Colecția de Vară", image: varaImg, route: "/summer" },
  ];

  return (
    <section className={styles.gallery}>
      <h2>Galerie Produse</h2>

      
      <Filters allProducts={allProducts} />

      <button className={styles.btn} onClick={handleAddNew}>
        Adaugă produs nou
      </button>

      {showForm && (
        <ProductForm
          gallery={gallery}
          setGallery={setGallery}
          API_URL={API_URL}
          editingProduct={editingProduct}
          setEditingProduct={setEditingProduct}
          setShowForm={setShowForm}
        />
      )}

      <ProductList
        products={gallery}
        setProducts={setGallery}
        setEditingProduct={product => {
          setEditingProduct(product);
          setShowForm(true);
        }}
        API_URL={API_URL}
      />

      
      <h2 style={{ marginTop: "2.5rem" }}>Colecții Speciale</h2>
      <div className={styles.collectionsGrid}>
        {extraCollections.map(c => (
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
