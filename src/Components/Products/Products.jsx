import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Products.module.css";

import kidsImg from "../../assets/Poze-site/Acasap/kids.jpeg";
import officeImg from "../../assets/Poze-site/Acasap/office.jpeg";
import searaImg from "../../assets/Poze-site/Acasap/seara.jpeg";
import varaImg from "../../assets/Poze-site/Acasap/vara.jpg";

const collections = [
  { id: 1, title: "Girls Couture", image: kidsImg, route: "/girls" },
  { id: 2, title: "Colecția Office", image: officeImg, route: "/office" },
  { id: 3, title: "Colecția de Seară", image: searaImg, route: "/night" },
  { id: 4, title: "Colecția de Vară", image: varaImg, route: "/summer" },
];

export default function Products() {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <section className={styles.productsSection}>
      <h2>Produse</h2>
      <div className={styles.grid}>
        {collections.map((c) => (
          <div
            key={c.id}
            className={styles.card}
            onClick={() => handleNavigate(c.route)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === "Enter" && handleNavigate(c.route)}
          >
            <img src={c.image} alt={c.title} className={styles.image} />
            <div className={styles.overlay}>
              <h3>{c.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
