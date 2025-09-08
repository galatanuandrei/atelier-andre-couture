// src/Components/Filters/Filters.jsx
import React from "react";
import styles from "./Filters.module.css";

export default function Filters({ filters, setFilters, products = [] }) {
  return (
    <div className={styles.card || "card filters"}>
      <div className="row">
        <input
          type="text"
          placeholder="Caută..."
          value={filters.search}
          onChange={e => setFilters(f => ({ ...f, search: e.target.value }))}
        />
      </div>
    </div>
  );
}
