import React, { useState, useEffect } from "react";
import './ThemeToggle.css';

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button className={`theme-toggle ${dark ? "dark" : "light"}`} onClick={() => setDark(d => !d)} aria-label="Toggle theme">
      {dark ? "Light" : "Dark"}
    </button>
  );
}
