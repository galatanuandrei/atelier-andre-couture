import React, { useState } from "react";
import styles from "./Office.module.css";
import Buton from "../../Components/Buton/Buton";

import o1_1 from "../../assets/poze-site/office/Produs1/1.jpeg";
import o1_2 from "../../assets/poze-site/office/Produs1/2.jpeg";
import o1_3 from "../../assets/poze-site/office/Produs1/3.jpeg";
import o2_1 from "../../assets/poze-site/office/Produs2/4.jpeg";
import o3_1 from "../../assets/poze-site/office/Produs3/5.jpg";
import o3_2 from "../../assets/poze-site/office/Produs3/6.jpeg";
import o3_3 from "../../assets/poze-site/office/Produs3/7.jpeg";
import o3_4 from "../../assets/poze-site/office/Produs3/8.jpeg";
import o4_1 from "../../assets/poze-site/office/Produs4/9.jpeg";
import o4_2 from "../../assets/poze-site/office/Produs4/10.jpeg";
import o5_1 from "../../assets/poze-site/office/Produs5/11.jpeg";
import o5_2 from "../../assets/poze-site/office/Produs5/12.jpeg";

const officeProducts = [
  { id: 1, title: "Rochie Office albastră", description: "Rochie office cu croială modernă și elegantă.", images: [o1_1,o1_2,o1_3], price: 200 },
  { id: 2, title: "Rochie Office albastră", description: "Rochie office cu croială modernă și elegantă.", images: [o2_1], price: 200 },
  { id: 3, title: "Rochie Office albastră", description: "Rochie office cu croială modernă și elegantă.", images: [o3_1,o3_2,o3_3,o3_4], price: 200 },
  { id: 4, title: "Rochie Office albastră", description: "Rochie office cu croială modernă și elegantă.", images: [o4_1,o4_2], price: 200 },
  { id: 5, title: "Rochie Office albastră", description: "Rochie office cu croială modernă și elegantă.", images: [o5_1,o5_2], price: 200 }
];

export default function Office() {
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
      <h2>Colecția Office</h2>
      <div className={styles.grid}>
        {officeProducts.map(product => (
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
