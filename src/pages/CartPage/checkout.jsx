import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./checkout.module.css";

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    payment: "card",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [loading, setLoading] = useState(false);

  if (cart.length === 0 && !orderPlaced) {
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>Coșul este gol 🛒</p>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newOrder = {
      ...formData,
      products: cart,
      total: cart.reduce((sum, item) => sum + (item.price || 0), 0),
      date: new Date().toISOString(),
      status: "în procesare",
    };

    try {
      const response = await fetch("http://localhost:3008/comenzi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOrder),
      });

      if (!response.ok) throw new Error("Eroare la trimiterea comenzii");

      clearCart();
      setOrderPlaced(true);
    } catch (error) {
      alert("A apărut o problemă: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (orderPlaced) {
    return (
      <section className={styles.checkout}>
        <h2>🎉 Comanda ta a fost plasată cu succes!</h2>
        <p>Mulțumim pentru cumpărături. Vei primi un email cu detaliile comenzii.</p>
      </section>
    );
  }

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <section className={styles.checkout}>
      <h2>Finalizează comanda</h2>

      <div className={styles.orderSummary}>
        <h3>Rezumat comandă</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.title || item.name} —{" "}
              {item.price ? `${item.price} RON` : "Preț nedefinit"}
            </li>
          ))}
        </ul>
        <h4>Total: {total} RON</h4>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Nume și prenume:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Adresă de livrare:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </label>

        <label>
          Metodă de plată:
          <select
            name="payment"
            value={formData.payment}
            onChange={handleChange}
          >
            <option value="card">Card</option>
            <option value="cash">Ramburs la livrare</option>
          </select>
        </label>

        <button type="submit" className={styles.btnPrimary} disabled={loading}>
          {loading ? "Se trimite..." : "🚀 Trimite comanda"}
        </button>
      </form>
    </section>
  );
}
