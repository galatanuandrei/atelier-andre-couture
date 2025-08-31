import React, { useMemo } from "react";

export default function Filters({ filters, setFilters, products }) {
  const categories = useMemo(() => {
    const set = new Set(products.map(p => (p.category || "").trim()).filter(Boolean));
    return ["Toate", ...Array.from(set)];
  }, [products]);

  return (
    <div className="card filters">
      <div className="row">
        <input type="text" placeholder="Caută..." value={filters.search} onChange={e => setFilters(f => ({ ...f, search: e.target.value }))} />
        <select value={filters.category} onChange={e => setFilters(f => ({ ...f, category: e.target.value }))}>
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
        <select value={filters.sort} onChange={e => setFilters(f => ({ ...f, sort: e.target.value }))}>
          <option value="newest">Cele mai noi</option>
          <option value="price-asc">Preț ↑</option>
          <option value="price-desc">Preț ↓</option>
        </select>
      </div>
    </div>
  );
}
