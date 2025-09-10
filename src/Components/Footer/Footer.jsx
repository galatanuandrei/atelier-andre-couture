import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram, FaFacebookF, FaTiktok, FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
       
        <div className={styles.footerCol}>
          <h4>Despre</h4>
          <ul>
            <li><a href="/about">Despre noi</a></li>
            <li><a href="/stores">Magazine</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">Întrebări frecvente</a></li>
          </ul>
        </div>

       
        <div className={styles.footerCol}>
          <h4>Contul meu</h4>
          <ul>
            <li><a href="/account">Profilul meu</a></li>
            <li><a href="/orders">Comenzile mele</a></li>
            <li><a href="/payment">Metode de plată</a></li>
            <li><a href="/shipping">Opțiuni de livrare</a></li>
            <li><a href="/returns">Retururi & Schimburi</a></li>
            <li><a href="/size">Ghid de mărimi</a></li>
          </ul>
        </div>

        
        <div className={styles.footerCol}>
          <h4>Legal</h4>
          <ul>
            <li><a href="/privacy">Politica de confidențialitate</a></li>
            <li><a href="/terms">Termeni și condiții</a></li>
            <li><a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer">
              Soluționarea online a litigiilor
            </a></li>
            <li><a href="https://anpc.ro" target="_blank" rel="noreferrer">
              Soluționarea alternativă a litigiilor
            </a></li>
          </ul>
        </div>

        
        <div className={styles.footerCol}>
          <h4>Newsletter</h4>
          <p>Abonează-te pentru a primi noutăți despre colecții, produse și evenimente.</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Adresa de email" required />
            <button type="submit">Abonare</button>
          </form>
          <div className={styles.socialIcons}>
            <a href="#"><FaInstagram className={styles.instagram} /></a>
            <a href="#"><FaFacebookF className={styles.facebook} /></a>
            <a href="#"><FaTiktok className={styles.tiktok} /></a>
          </div>
        </div>
      </div>

      
      <div className={styles.paymentRow}>
        <span>Metode de plată:</span>
        <FaCcVisa className={styles.visa} />
        <FaCcMastercard className={styles.mastercard} />
        <FaCcPaypal className={styles.paypal} />
      </div>

     
      <div className={styles.footerBottom}>
        © {new Date().getFullYear()} Atelier Andre Couture. Toate drepturile rezervate – realizare de Andrei Galatanu
      </div>
    </footer>
  );
}
