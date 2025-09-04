import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  // ✅ citim starea din localStorage la inițializare
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      console.error("Eroare la citirea coșului din localStorage:", err);
      return [];
    }
  });

  // ✅ sincronizăm cart-ul în localStorage la fiecare modificare
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (err) {
      console.error("Eroare la salvarea coșului în localStorage:", err);
    }
  }, [cart]);

  // ➕ adăugăm produs în coș
  const addToCart = product => {
    setCart(prev => {
      // prevenim duplicate (aceeași id)
      if (prev.some(item => item.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  // ➖ eliminăm produs după id
  const removeFromCart = id => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // 🗑 golim coșul
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
