import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./GirlsCouture.module.css";
import Buton from "../../Components/Buton/Buton";


import g1_1 from "../../assets/poze-site/kids/Produs1/1.png";
import g1_2 from "../../assets/poze-site/kids/Produs1/2.png";
import g2_1 from "../../assets/poze-site/kids/Produs2/3.png";
import g2_2 from "../../assets/poze-site/kids/Produs2/4.png";
import g2_3 from "../../assets/poze-site/kids/Produs2/5.png";
import g3_1 from "../../assets/poze-site/kids/Produs3/6.png";
import g3_2 from "../../assets/poze-site/kids/Produs3/7.png";
import g4_1 from "../../assets/poze-site/kids/Produs4/8.png";
import g4_2 from "../../assets/poze-site/kids/Produs4/9.png";
import g5_1 from "../../assets/poze-site/kids/Produs5/10.png";
import g5_2 from "../../assets/poze-site/kids/Produs5/11.png";
import g5_3 from "../../assets/poze-site/kids/Produs5/12.png";
import g6_1 from "../../assets/poze-site/kids/Produs6/13.png";
import g6_2 from "../../assets/poze-site/kids/Produs6/14.png";
import g7_1 from "../../assets/poze-site/kids/Produs7/15.png";
import g7_2 from "../../assets/poze-site/kids/Produs7/16.png";
import g7_3 from "../../assets/poze-site/kids/Produs7/17.png";
import g8_1 from "../../assets/poze-site/kids/Produs8/18.png";
import g8_2 from "../../assets/poze-site/kids/Produs8/19.png";
import g8_3 from "../../assets/poze-site/kids/Produs8/20.png";


const girlsProducts = [
  { id: 1, title: "Rochie elegantă mov", description: "Rochie din matase naturala, croiala eleganta.", images: [g1_1, g1_2], price: 210 },
  { id: 2, title: "Rochie midi roz", description: "Rochie midi cu bust corset și fusta plisata.", images: [g2_1, g2_2, g2_3], price: 180 },
  { id: 3, title: "Rochie midi roz", description: "Rochie midi cu bust corset și fusta plisata.", images: [g3_1, g3_2], price: 180 },
  { id: 4, title: "Rochie midi roz", description: "Rochie midi cu bust corset și fusta plisata.", images: [g4_1, g4_2], price: 180 },
  { id: 5, title: "Rochie midi roz", description: "Rochie midi cu bust corset și fusta plisata.", images: [g5_1, g5_2, g5_3], price: 180 },
  { id: 6, title: "Rochie midi roz", description: "Rochie midi cu bust corset și fusta plisata.", images: [g6_1, g6_2], price: 180 },
  { id: 7, title: "Rochie midi roz", description: "Rochie midi cu bust corset și fusta plisata.", images: [g7_1, g7_2, g7_3], price: 180 },
  { id: 8, title: "Rochie midi roz", description: "Rochie midi cu bust corset și fusta plisata.", images: [g8_1, g8_2, g8_3], price: 180 }
];

export default function GirlsCouture() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const { addToCart } = useContext(CartContext);

  const openPopup = (product) => { setSelectedProduct(product); setSelectedImageIndex(0); };
  const closePopup = () => setSelectedProduct(null);
  const prevImage = () => setSelectedImageIndex(prev => prev === 0 ? selectedProduct.images.length - 1 : prev - 1);
  const nextImage = () => setSelectedImageIndex(prev => prev === selectedProduct.images.length - 1 ? 0 : prev + 1);
  const handleAddToCart = (product) => {
    addToCart(product);
    fetch("http://localhost:3008/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    }).catch(console.error);};

  return (
    <section className={styles.gallery}>
      <div style={{ marginBottom: "1rem" }}>
        <Buton targetRoute="/gallery" />
      </div>
      <h2>Girls Couture</h2>
      <div className={styles.grid}>
        {girlsProducts.map(product => (
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
