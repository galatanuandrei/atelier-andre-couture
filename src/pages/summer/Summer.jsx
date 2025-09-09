import React, { useState } from "react";
import styles from "./Summer.module.css";
import Buton from "../../Components/Buton/Buton";

import s1_1 from "../../assets/poze-site/summer/Produs1/1.jpeg";
import s1_2 from "../../assets/poze-site/summer/Produs1/2.jpeg";
import s1_3 from "../../assets/poze-site/summer/Produs1/3.jpeg";
import s1_4 from "../../assets/poze-site/summer/Produs1/4.jpeg";
import s1_5 from "../../assets/poze-site/summer/Produs1/5.jpeg";
import s2_1 from "../../assets/poze-site/summer/Produs2/6.jpeg";
import s2_2 from "../../assets/poze-site/summer/Produs2/7.jpeg";
import s2_3 from "../../assets/poze-site/summer/Produs2/8.jpeg";
import s2_4 from "../../assets/poze-site/summer/Produs2/9.jpeg";
import s2_5 from "../../assets/poze-site/summer/Produs2/10.jpeg";
import s2_6 from "../../assets/poze-site/summer/Produs2/11.jpeg";
import s2_7 from "../../assets/poze-site/summer/Produs2/12.jpeg";
import s3_1 from "../../assets/poze-site/summer/Produs3/13.jpeg";
import s3_2 from "../../assets/poze-site/summer/Produs3/14.jpeg";
import s4_1 from "../../assets/poze-site/summer/Produs4/15.jpeg";
import s4_2 from "../../assets/poze-site/summer/Produs4/16.jpeg";
import s4_3 from "../../assets/poze-site/summer/Produs4/17.jpeg";

const summerProducts = [
  { id: 1, title: "Rochie Vară galbenă", description: "Rochie ușoară, perfectă pentru zilele calde de vară.", images: [s1_1,s1_2,s1_3,s1_4,s1_5], price: 180 },
  { id: 2, title: "Rochie Vară galbenă", description: "Rochie ușoară, perfectă pentru zilele calde de vară.", images: [s2_1,s2_2,s2_3,s2_4,s2_5,s2_6,s2_7], price: 180 },
  { id: 3, title: "Rochie Vară galbenă", description: "Rochie ușoară, perfectă pentru zilele calde de vară.", images: [s3_1,s3_2], price: 180 },
  { id: 4, title: "Rochie Vară galbenă", description: "Rochie ușoară, perfectă pentru zilele calde de vară.", images: [s4_1,s4_2,s4_3], price: 180 }
];

export default function Summer() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openPopup = (product) => { setSelectedProduct(product); setSelectedImageIndex(0); };
  const closePopup = () => setSelectedProduct(null);
  const prevImage = () => setSelectedImageIndex(prev => prev === 0 ? selectedProduct.images.length - 1 : prev - 1);
  const nextImage = () => setSelectedImageIndex(prev => prev === selectedProduct.images.length - 1 ? 0 : prev + 1);
  const handleAddToCart = (product) => alert(`Produsul "${product.title}" a fost adăugat în coș!`);

  return (
    <section className={styles.gallery}>
     <div style={{ marginBottom: "1rem" }}>
        <Buton targetRoute="/gallery" />
      </div>
      <h2>Colecția de Vară</h2>
      <div className={styles.grid}>
        {summerProducts.map(product => (
          <div key={product.id} className={styles.card}>
            <img src={product.images[0]} alt={product.title} onClick={() => openPopup(product)} />
            <h3>{product.title}</h3>
            <p>Preț: {product.price} €</p>
            <button onClick={() => handleAddToCart(product)}>Adaugă în coș</button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div className={styles.popupContent} onClick={e => e.stopPropagation()}>
            <img src={selectedProduct.images[selectedImageIndex]} alt={selectedProduct.title} className={styles.popupImage} />
            {selectedProduct.images.length > 1 && (
              <div className={styles.imageNav}>
                <button onClick={prevImage}>&lt;</button>
                <button onClick={nextImage}>&gt;</button>
              </div>
            )}
            <h3>{selectedProduct.title}</h3>
            <p>{selectedProduct.description}</p>
            <p>Preț: {selectedProduct.price} €</p>
            <button className={styles.closeBtn} onClick={closePopup}>Închide</button>
          </div>
        </div>
      )}
    </section>
  );
}
