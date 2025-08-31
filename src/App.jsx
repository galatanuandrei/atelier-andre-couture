// src/App.jsx
import React, { useEffect, useState, useMemo } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductForm from "./components/ProductForm";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";

const API_URL = "http://localhost:3001/products";

export default function App() {
  const [products, setProducts] = useState([]);          // lista produselor din server
  const [editingProduct, setEditingProduct] = useState(null); // produsul curent pentru edit
  const [filters, setFilters] = useState({ search: "", category: "Toate", sort: "newest" });

  // Fetch initial - aduce produsele de la mock server la prima randare
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(() => console.warn("Pornește json-server: npm run server"));
  }, []);

  // Filtrare + sortare memorată cu useMemo (performanță)
  const visibleProducts = useMemo(() => {
    let list = [...products];

    if (filters.search.trim()) {
      const q = filters.search.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        (p.description || "").toLowerCase().includes(q) ||
        (p.category || "").toLowerCase().includes(q)
      );
    }

    if (filters.category !== "Toate") {
      list = list.filter(p => (p.category || "").toLowerCase() === filters.category.toLowerCase());
    }

    if (filters.sort === "price-asc") list.sort((a,b) => Number(a.price) - Number(b.price));
    if (filters.sort === "price-desc") list.sort((a,b) => Number(b.price) - Number(a.price));
    if (filters.sort === "newest") list.sort((a,b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));

    return list;
  }, [products, filters]);

  return (
    <div className="container">
      <Header />
      <main>
        <ProductForm
          products={products}
          setProducts={setProducts}
          editingProduct={editingProduct}
          setEditingProduct={setEditingProduct}
          API_URL={API_URL}
        />
        <Filters filters={filters} setFilters={setFilters} products={products} />
        <ProductList
          products={visibleProducts}
          setProducts={setProducts}
          setEditingProduct={setEditingProduct}
          API_URL={API_URL}
        />
      </main>
      <Footer />
    </div>
  );
}
