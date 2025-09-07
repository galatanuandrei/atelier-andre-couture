import React from "react";
import styles from "./SocialCarusel.module.css";
import { FaInstagram } from "react-icons/fa";

// Import manual pozele
import insta1 from "../../assets/poze-site/instagram/insta1.jpg";
import insta2 from "../../assets/poze-site/instagram/insta2.jpg";
import insta3 from "../../assets/poze-site/instagram/insta3.jpg";

const SocialCarusel = () => {
  const data = [
    { image: insta1, link: "https://www.instagram.com/ralu.andre/" },
    { image: insta2, link: "https://www.instagram.com/ralu.andre/" },
    { image: insta3, link: "https://www.instagram.com/ralu.andre/" },
  ];

  return (
    <div className={styles.instagramSection}>
      {/* Titlu cu iconiță Instagram */}
      <div className={styles.header}>
        <FaInstagram className={styles.icon} />
        <h3>Instagram</h3>
      </div>

      {/* Cele 3 poze */}
      <div className={styles.imageGrid}>
        {data.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={item.image}
              alt={`Instagram ${index + 1}`}
              className={styles.image}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialCarusel;
