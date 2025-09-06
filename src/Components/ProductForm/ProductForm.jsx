import React, { useEffect, useState } from "react";
import './ProductForm.css';

export default function ProductForm({ products, setProducts, editingProduct, setEditingProduct, API_URL }) {
  const [form, setForm] = useState({ name: "", description: "", image: "" });

  useEffect(() => { if (editingProduct) setForm(editingProduct); }, [editingProduct]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name.trim()) return alert("Titlul este obligatoriu.");

    if (editingProduct) {
      fetch(`${API_URL}/gallery/${editingProduct.id}`, {
        method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form)
      })
        .then(res => res.json())
        .then(updated => {
          setProducts(products.map(p => p.id === updated.id ? updated : p));
          setEditingProduct(null);
          setForm({ name: "", description: "", image: "" });
        });
    } else {
      const payload = { ...form, id: Date.now() };
      fetch(`${API_URL}/gallery`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
        .then(res => res.json())
        .then(newProduct => { setProducts([...products, newProduct]); setForm({ name: "", description: "", image: "" }); });
    }
  };

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h2>{editingProduct ? "Editează produs" : "Adaugă produs"}</h2>
      <input placeholder="Nume produs *" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="URL imagine" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} />
      <textarea placeholder="Descriere" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
      <div className="row">
        <button className="btn" type="submit">{editingProduct ? "Salvează" : "Adaugă"}</button>
        {editingProduct && <button type="button" className="btn btn-ghost" onClick={() => { setEditingProduct(null); setForm({ name: "", description: "", image: "" }); }}>Anulează</button>}
      </div>
    </form>
  );
}
