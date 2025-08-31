import React, { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button className="btn" onClick={() => setDark(d => !d)}>
      {dark ? "Light" : "Dark"} Mode
    </button>
  );
}
