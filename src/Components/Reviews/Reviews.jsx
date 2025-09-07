import React, { useState, useEffect } from "react";
import styles from "./Reviews.module.css";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
  { id: 1, name: "Ana Popescu", rating: 5, comment: "Rochiile sunt absolut superbe și personalul extrem de amabil!" },
  { id: 2, name: "Maria Ionescu", rating: 4, comment: "Colecția de vară este elegantă și confortabilă. Recomand!" },
  { id: 3, name: "Elena Georgescu", rating: 5, comment: "Am primit rochia exact cum am vrut. Serviciu impecabil!" },
  { id: 4, name: "Ioana Marinescu", rating: 5, comment: "Serviciu rapid și foarte prietenos. Mulțumesc!" },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  // Slider automat
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevReview = () => setCurrent(prev => (prev - 1 + reviews.length) % reviews.length);
  const nextReview = () => setCurrent(prev => (prev + 1) % reviews.length);
  const goToReview = (index) => setCurrent(index);

  return (
    <section id="reviews" className={styles.reviewsSection}>
      <h2>Recenzii Google</h2>

      <div className={styles.slider}>
        {reviews.map((r, index) => (
          <div
            key={r.id}
            className={`${styles.card} ${index === current ? styles.active : styles.inactive}`}
          >
            <div className={styles.rating}>
              {Array.from({ length: r.rating }).map((_, i) => <FaStar key={i} className={styles.star} />)}
            </div>
            <p className={styles.comment}>"{r.comment}"</p>
            <p className={styles.name}>- {r.name}</p>
          </div>
        ))}

        {/* Butoane prev/next */}
        <button className={`${styles.navButton} ${styles.prev}`} onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <button className={`${styles.navButton} ${styles.next}`} onClick={nextReview}>
          <FaChevronRight />
        </button>

        {/* Buline indicator */}
        <div className={styles.indicators}>
          {reviews.map((_, i) => (
            <span
              key={i}
              className={`${styles.indicator} ${i === current ? styles.activeIndicator : ''}`}
              onClick={() => goToReview(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
