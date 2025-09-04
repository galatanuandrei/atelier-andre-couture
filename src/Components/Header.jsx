import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import '../Styles/Header.css';
import '../Styles/Buttons.css';

export default function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <h1>Atelier Andre Couture</h1>
      <nav>
        <Link to="/">Acasă</Link>
        <Link to="/about">Despre mine</Link>
        <Link to="/gallery">Galerie</Link>
        <Link to="/cart">
          🛒 Coș {cart.length > 0 && <span>({cart.length})</span>}
        </Link>
      </nav>
    </header>
  );
}
