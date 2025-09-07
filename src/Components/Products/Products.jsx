import React from "react";
import styles from "./Products.module.css";

import kidsImg from "../../assets/Poze-site/Acasap/kids.jpeg";
import officeImg from "../../assets/Poze-site/Acasap/office.jpeg";
import searaImg from "../../assets/Poze-site/Acasap/seara.jpeg";
import varaImg from "../../assets/Poze-site/Acasap/vara.jpg";

export default function Products() {
  const products = [
    { id: 1, title: "Girls Couture", image: kidsImg },
    { id: 2, title: "Colecția Office", image: officeImg },
    { id: 3, title: "Colecția de Seară", image: searaImg },
    { id: 4, title: "Colecția de Vară", image: varaImg },
  ];

  return (
    <section id="products" className={styles.productsSection}>
      <h2>Produse</h2>
      <div className={styles.grid}>
        {products.map(p => (
          <div key={p.id} className={styles.card}>
            <img src={p.image} alt={p.title} />
            <div className={styles.overlay}><h3>{p.title}</h3></div>
          </div>
        ))}
      </div>
    </section>
  );
}
