// src/Components/ProductForm/ProductForm.jsx
import React, { useEffect, useState } from "react";
import './ProductForm.css';

export default function ProductForm({ products, setProducts, editingProduct, setEditingProduct, API_URL }) {
  const [form, setForm] = useState({ title: "", description: "", image: "" });

  useEffect(() => {
    if (editingProduct) {
      setForm({
        title: editingProduct.title || "",
        description: editingProduct.description || "",
        image: editingProduct.image || ""
      });
    } else {
      setForm({ title: "", description: "", image: "" });
    }
  }, [editingProduct]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.title.trim()) return alert("Titlul este obligatoriu.");

    if (editingProduct && editingProduct.id) {
      fetch(`${API_URL}/gallery/${editingProduct.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...editingProduct, ...form, id: editingProduct.id })
      })
        .then(res => {
          if (!res.ok) throw new Error("Eroare la actualizare");
          return res.json();
        })
        .then(updated => {
          setProducts(prev => prev.map(p => p.id === updated.id ? updated : p));
          setEditingProduct(null);
          setForm({ title: "", description: "", image: "" });
        })
        .catch(err => alert("Eroare: " + err.message));
    } else {
      const payload = { ...form, id: Date.now() };
      fetch(`${API_URL}/gallery`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
        .then(res => {
          if (!res.ok) throw new Error("Eroare la creare");
          return res.json();
        })
        .then(newProduct => {
          setProducts(prev => [...prev, newProduct]);
          setForm({ title: "", description: "", image: "" });
        })
        .catch(err => alert("Eroare: " + err.message));
    }
  };

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h2>{editingProduct ? "Editează produs" : "Adaugă produs"}</h2>
      <input
        placeholder="Titlu produs *"
        value={form.title}
        onChange={e => setForm(prev => ({ ...prev, title: e.target.value }))}
      />
      <input
        placeholder="URL imagine"
        value={form.image}
        onChange={e => setForm(prev => ({ ...prev, image: e.target.value }))}
      />
      <textarea
        placeholder="Descriere"
        value={form.description}
        onChange={e => setForm(prev => ({ ...prev, description: e.target.value }))}
      />
      <div className="row">
        <button className="btn" type="submit">{editingProduct ? "Salvează" : "Adaugă"}</button>
        {editingProduct && (
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => { setEditingProduct(null); setForm({ title: "", description: "", image: "" }); }}
          >
            Anulează
          </button>
        )}
      </div>
    </form>
  );
}
