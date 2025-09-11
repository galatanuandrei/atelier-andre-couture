
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";


import nightImg from "../../assets/poze-site/colectiiseara/Produs1/1.jpg";
import girlsImg from "../../assets/poze-site/kids/Produs1/1.png";
import officeImg from "../../assets/poze-site/office/Produs1/1.jpeg";
import summerImg from "../../assets/poze-site/summer/Produs1/1.jpeg";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  if (!cart || cart.length === 0) {
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>Coșul este gol 🛒</p>;
  }

  const getImage = (item) => {
   
    if (item.image) return item.image;

    
    switch (item.collection) {
      case "night": return nightImg;
      case "girls": return girlsImg;
      case "office": return officeImg;
      case "summer": return summerImg;
      default: return "https://via.placeholder.com/300x200?text=Produs";
    }
  };

  return (
    <section className="cart-page">
      <h2>Coșul tău</h2>

      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <button className="btn btn-danger" onClick={clearCart}>🗑 Golește coșul</button>
      </div>

      <div className="grid">
        {cart.map((item) => (
          <div key={item.id} className="card">
            <img
              src={getImage(item)}
              alt={item.name || item.title || "Produs"}
              className="cover"
            />
            <h3>{item.title || item.name || "Produs fără nume"}</h3>
            {item.description && <p>{item.description}</p>}
            <p>Preț: {item.price ? `${item.price} RON` : "Preț nedefinit"}</p>

            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Elimină din coș</button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button className="btn btn-primary" onClick={() => navigate("/checkout")}>✅ Finalizează comanda</button>
      </div>
    </section>
  );
}
