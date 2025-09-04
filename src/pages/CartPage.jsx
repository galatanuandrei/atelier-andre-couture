import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import '../Styles/CartPage.css';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <p style={{ textAlign: "center", marginTop: "2rem" }}>
        Coșul este gol 🛒
      </p>
    );
  }

  return (
    <section style={{ padding: "1rem" }}>
      <h2 style={{ textAlign: "center" }}>Coșul tău</h2>

      {/* Buton pentru golirea coșului */}
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <button className="btn btn-danger" onClick={clearCart}>
          🗑 Golește coșul
        </button>
      </div>

      <div className="grid">
        {cart.map(item => (
          <div key={item.id} className="card">
            <img
              src={item.image || "https://via.placeholder.com/300x200?text=Produs"}
              alt={item.name}
              className="cover"
            />
            <h3>{item.name}</h3>
            {item.description && <p>{item.description}</p>}
            <button
              className="btn btn-danger"
              onClick={() => removeFromCart(item.id)}
            >
              Elimină din coș
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
