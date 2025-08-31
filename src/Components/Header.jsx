import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="header">
      <h1>Atelier Andre Couture</h1>
      <div>
        <ThemeToggle />
      </div>
    </header>
  );
}
