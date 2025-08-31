import React, { useState } from "react";

export default function ContactForm({ API_URL }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Mesaj trimis de ${form.name}`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form id="contact" className="card form" onSubmit={handleSubmit}>
      <h2>Contact</h2>
      <input placeholder="Nume" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
      <textarea placeholder="Mesaj" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
      <button type="submit" className="btn">Trimite</button>
    </form>
  );
}
