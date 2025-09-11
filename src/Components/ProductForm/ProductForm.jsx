import React, { useState, useEffect } from "react";
import "./ProductForm.css";


export default function ProductForm({
  products,
  setProducts,
  gallery,
  setGallery,
  editingProduct,
  setEditingProduct,
  API_URL,
  setShowForm, 
}) {
  const emptyForm = {
    title: "",
    description: "",
    image: "",      
    price: "",      
    collectionId: 3,
  };

  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);


  const api = API_URL || process.env.REACT_APP_API_URL || "http://localhost:3008";

  useEffect(() => {
    if (editingProduct) {
      setForm({
        title: editingProduct.title || "",
        description: editingProduct.description || "",
        image: editingProduct.image || (editingProduct.images && editingProduct.images[0]) || "",
        price: editingProduct.price !== undefined ? String(editingProduct.price) : "",
        collectionId: editingProduct.collectionId || 3,
      });
    } else {
      setForm(emptyForm);
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  
  const preparePayload = () => {
    const payload = {
      title: form.title.trim(),
      description: form.description || "",
      collectionId: form.collectionId,
      
      ...(form.price !== "" && { price: Number(form.price) }),
      
      ...(form.image && { image: form.image, images: [form.image] }),
    };

    
    if (editingProduct && editingProduct.id !== undefined) {
      payload.id = editingProduct.id;
    }

    return payload;
  };

  const showErrorFromResponse = async (res) => {
    
    let text;
    try {
      text = await res.text();
      
      try { const j = JSON.parse(text); return JSON.stringify(j); } catch { return text; }
    } catch (err) {
      return `Status ${res.status} ${res.statusText}`;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      alert("Titlul este obligatoriu.");
      return;
    }

    setLoading(true);

    try {
      const payload = preparePayload();

      let res;
      let data;

      if (editingProduct) {
        
        res = await fetch(`${api}/gallery/${editingProduct.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const body = await showErrorFromResponse(res);
          throw new Error(`Server error: ${res.status} - ${body}`);
        }

        data = await res.json();

        
        if (typeof setProducts === "function") {
          setProducts(prev => prev.map(p => (p.id === data.id ? data : p)));
        }
        if (typeof setGallery === "function") {
          setGallery(prev => prev.map(p => (p.id === data.id ? data : p)));
        }
      } else {
        
        if (payload.id) delete payload.id;

        res = await fetch(`${api}/gallery`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const body = await showErrorFromResponse(res);
          throw new Error(`Server error: ${res.status} - ${body}`);
        }

        data = await res.json();

        if (typeof setProducts === "function") {
          setProducts(prev => [...prev, data]);
        }
        if (typeof setGallery === "function") {
          setGallery(prev => [...prev, data]);
        }
      }

      
      setForm(emptyForm);
      setEditingProduct && setEditingProduct(null);
      if (typeof setShowForm === "function") setShowForm(false);

    } catch (err) {
      console.error("Eroare la salvare:", err);
      alert("Eroare la salvare: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h2>{editingProduct ? "Editează produs" : "Adaugă produs"}</h2>

      <input
        name="title"
        placeholder="Titlu produs *"
        value={form.title}
        onChange={handleChange}
        required
      />

      <input
        name="image"
        placeholder="URL imagine (prima imagine)"
        value={form.image}
        onChange={handleChange}
      />

      <input
        name="price"
        placeholder="Preț (ex: 199)"
        value={form.price}
        onChange={handleChange}
        type="number"
        step="0.01"
      />

      <textarea
        name="description"
        placeholder="Descriere produs"
        value={form.description}
        onChange={handleChange}
        rows={3}
      />

      <div className="row">
        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Se salvează..." : (editingProduct ? "Salvează" : "Adaugă")}
        </button>

        {editingProduct && (
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => { setEditingProduct(null); setForm(emptyForm); }}
          >
            Anulează
          </button>
        )}
      </div>
    </form>
  );
}
