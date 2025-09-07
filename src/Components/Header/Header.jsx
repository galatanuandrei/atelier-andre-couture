import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from './Header.module.css';
import logo from '../../assets/poze-site/logo/logohead.png';

export default function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Atelier Andre Couture" className={styles.logo} />
      </div>

      <nav className={styles.nav}>
        <Link to="/">ACASĂ</Link>
        <Link to="/gallery">COLECȚII</Link>
        <Link to="/about">DESPRE NOI</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/cart">
          🛒 COȘ {cart.length > 0 && <span className={styles.cartBadge}>({cart.length})</span>}
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
