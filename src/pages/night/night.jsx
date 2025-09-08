import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import styles from "./Night.module.css";
import seara1Img from "../../assets/Poze-site/Acasap/seara1.jpeg";
import seara2Img from "../../assets/Poze-site/Acasap/seara2.jpeg";
import seara3Img from "../../assets/Poze-site/Acasap/seara3.jpeg";

export default function Night() {
  const { addToCart } = useContext(CartContext);

  const eveningDresses = [
    { id: 1, title: "Rochie Elegantă Albastră", image: seara1Img, price: 450 },
    { id: 2, title: "Rochie Cocktail Roșie", image: seara2Img, price: 380 },
    { id: 3, title: "Rochie Lungă Verde Smarald", image: seara3Img, price: 520 },
  ];

  return (
    <section className={styles.nightCollection}>
      <h2>Colecția de Seară</h2>
      <div className={styles.grid}>
        {eveningDresses.map(dress => (
          <div key={dress.id} className={styles.card}>
            <img src={dress.image} alt={dress.title} />
            <div className={styles.overlay}>
              <h3>{dress.title}</h3>
              <p>{dress.price} RON</p>
              <button
                className={styles.addBtn}
                onClick={() => addToCart(dress)}
              >
                Adaugă în coș
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
