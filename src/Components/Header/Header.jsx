import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import './Header.css';

export default function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <h1>Atelier Andre Couture</h1>
      <nav>
        <Link to="/">ACASĂ</Link>
        <Link to="/gallery">COLECȚII</Link>
        <Link to="/about">DESPRE NOI</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/cart">🛒 COȘ {cart.length > 0 && <span>({cart.length})</span>}</Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
