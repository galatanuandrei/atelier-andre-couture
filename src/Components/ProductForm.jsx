import React, { useEffect, useState } from "react";

export default function ProductForm({ products, setProducts, editingProduct, setEditingProduct, API_URL }) {
  const [form, setForm] = useState({ name: "", description: "", price: "", category: "", image: "" });

  useEffect(() => {
    if (editingProduct) setForm(editingProduct);
  }, [editingProduct]);

  function validate() {
    if (!form.name.trim()) return "Titlul este obligatoriu.";
    if (form.price === "" || Number(form.price) < 0) return "Prețul trebuie >= 0.";
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) { alert(err); return; }

    if (editingProduct) {
      fetch(`${API_URL}/${editingProduct.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
      .then(res => res.json())
      .then(updated => {
        setProducts(products.map(p => p.id === updated.id ? updated : p));
        setEditingProduct(null);
        setForm({ name: "", description: "", price: "", category: "", image: "" });
      });
    } else {
      const payload = { ...form, createdAt: new Date().toISOString() };
      fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
      .then(res => res.json())
      .then(newProduct => {
        setProducts([...products, newProduct]);
        setForm({ name: "", description: "", price: "", category: "", image: "" });
      });
    }
  };

  const handleCancel = () => {
    setEditingProduct(null);
    setForm({ name: "", description: "", price: "", category: "", image: "" });
  };

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h2>{editingProduct ? "Editează produs" : "Adaugă produs"}</h2>
      <input type="text" placeholder="Nume produs *" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      <input type="number" placeholder="Preț *" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
      <input type="text" placeholder="Categorie" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
      <input type="text" placeholder="URL imagine" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} />
      <textarea placeholder="Descriere" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
      <div className="row">
        <button className="btn" type="submit">{editingProduct ? "Salvează" : "Adaugă"}</button>
        {editingProduct && <button type="button" className="btn btn-ghost" onClick={handleCancel}>Anulează</button>}
      </div>
    </form>
  );
}
