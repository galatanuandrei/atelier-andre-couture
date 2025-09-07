import React from "react";
import styles from './About.module.css';
import designerImage from '../../assets/poze-site/designer/designer.jpeg';

export default function About() {
  return (
    <section className={styles.aboutCard}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImage}>
          <img src={designerImage} alt="Designer Atelier Andre Couture" />
        </div>
        <div className={styles.aboutText}>
          <h2>Despre Atelier Andre Couture</h2>
          <p>
            Atelier Andre Couture este un univers al eleganței rafinate și al exclusivității, 
            unde fiecare creație devine o adevărată artă vestimentară.
          </p>
          <p>
            Ca designer vestimentar, pun pasiune și măiestrie în fiecare detaliu, folosind tehnici couture 
            precum plisarea manuală a voalurilor de mătase și broderia manuală, ce adaugă un farmec aparte 
            dar și unicitate fiecărei piese.
          </p>
          <p>
            Fie că este vorba despre rochii de seară, creații pentru ocazii speciale sau rochii de mireasă, 
            toate sunt realizate cu grijă și atenție la cele mai fine detalii.
          </p>
        </div>
      </div>

      <div className={styles.aboutTextFull}>
        <p>
          Materialele naturale, precum mătasea, sunt alegerea mea de suflet, fiind simbolul luxului și al naturii, 
          ce conferă fiecărei piese o eleganță timeless.
        </p>
        <p>
          Motto-ul nostru, “Creat din pasiune pentru tine", reflectă dedicarea noastră de a transforma fiecare clientă 
          într-o prezență de neuitat, plină de farmec și încredere.
        </p>
        <p>
          La Atelier Andre Couture vestimentația devine o expresie a personalității tale, 
          o artă făcută pentru a te face să te simți specială în cele mai importante momente ale vieții tale.
        </p>
      </div>
    </section>
  );
}
