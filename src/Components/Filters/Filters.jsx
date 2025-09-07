import React, { useMemo } from "react";
import './Filters.module.css';

export default function Filters({ filters, setFilters, gallery }) {
  return (
    <div className="card filters">
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
