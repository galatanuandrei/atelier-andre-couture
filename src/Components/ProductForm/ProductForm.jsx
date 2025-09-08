import React, { useState, useEffect } from "react";
import './ProductForm.css';

export default function ProductForm({ products, setProducts, gallery, setGallery, editingProduct, setEditingProduct, API_URL }) {
  const [form, setForm] = useState({ title: "", description: "", image: "", collectionId: 3 });

  useEffect(() => {
    if (editingProduct) setForm(editingProduct);
  }, [editingProduct]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.title.trim()) return alert("Titlul este obligatoriu.");

    if (editingProduct) {
      fetch(`${API_URL}/gallery/${editingProduct.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
        .then(res => res.json())
        .then(updated => {
          setProducts(products.map(p => p.id === updated.id ? updated : p));
          setGallery(gallery.map(p => p.id === updated.id ? updated : p));
          setEditingProduct(null);
          setForm({ title: "", description: "", image: "", collectionId: 3 });
        });
    } else {
      const payload = { ...form, id: Date.now() };
      fetch(`${API_URL}/gallery`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
        .then(res => res.json())
        .then(newProduct => {
          setProducts([...products, newProduct]);
          setGallery([...gallery, newProduct]);
          setForm({ title: "", description: "", image: "", collectionId: 3 });
        });
    }
  };

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h2>{editingProduct ? "Editează produs" : "Adaugă produs"}</h2>
      <input placeholder="Titlu produs *" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
      <input placeholder="URL imagine" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} />
      <textarea placeholder="Descriere" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
      <div className="row">
        <button className="btn" type="submit">{editingProduct ? "Salvează" : "Adaugă"}</button>
        {editingProduct && <button type="button" className="btn btn-ghost" onClick={() => { setEditingProduct(null); setForm({ title: "", description: "", image: "", collectionId: 3 }); }}>Anulează</button>}
      </div>
    </form>
  );
}
