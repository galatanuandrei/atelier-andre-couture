import React from "react";
import styles from "./Filters.module.css";

export default function Filters({ filters, setFilters }) {
  return (
    <div className={styles.filtersCard}>
      <input
        type="text"
        placeholder="Caută produs..."
        value={filters.search}
        onChange={(e) =>
          setFilters(f => ({ ...f, search: e.target.value }))
        }
        className={styles.searchInput}
      />
    </div>
  );
}
