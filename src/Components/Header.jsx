import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1>Atelier Andre Couture</h1>
      <nav>
        <Link to="/">Acasă</Link>
        <Link to="/about">Despre mine</Link>
        <Link to="/gallery">Galerie</Link>
      </nav>
    </header>
  );
}
