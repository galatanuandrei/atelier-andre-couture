import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Filters.module.css";

export default function Filters({ allProducts = [] }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const normalize = (str) =>
    str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, " ");

  useEffect(() => {
    if (!search) {
      setResults([]);
      return;
    }
    const query = normalize(search);
    const filtered = allProducts.filter((p) => {
      const title = normalize(p.title || "");
      const desc = normalize(p.description || "");
      return title.includes(query) || desc.includes(query);
    });
    setResults(filtered);
  }, [search, allProducts]);

  const handleClick = (product) => {
    navigate(`/${product.collection}`);
    setSearch("");
    setResults([]);
  };

  return (
    <div className={styles.filtersCard}>
      <input
        type="text"
        placeholder="Caută produse..."
        className={styles.searchInput}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {results.length > 0 && (
        <div className={styles.dropdown}>
          {results.map((p) => (
            <div key={p.id} className={styles.dropdownItem} onClick={() => handleClick(p)}>
              <img src={p.image} alt={p.title} />
              <div className={styles.info}>
                <span className={styles.title}>{p.title}</span>
                <span className={styles.collection}>{p.collection}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
