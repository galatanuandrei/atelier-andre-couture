import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
const API_URL = "http://localhost:3008/cart";

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load initial cart from server
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`Server responded ${res.status}`);
        const data = await res.json();
        if (mounted) setCart(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("CartContext: could not load cart", err);
        if (mounted) setCart([]);
      }
    })();
    return () => { mounted = false; };
  }, []);

  // Add product to cart (server-persisted)
  const addToCart = async (product) => {
    try {
      if (!product) throw new Error("Produs invalid");
      // Use productId to identify the original product (so duplicates from same product aren't added)
      const productId = String(product.id ?? product.productId ?? "");
      if (!productId) {
        console.warn("addToCart: produs fără id original, se va folosi timestamp");
      }

      // Prevent duplicate based on original productId
      if (cart.some(item => String(item.productId) === productId)) {
        console.info("Produsul este deja în coș (productId).");
        return;
      }

      // Build payload WITHOUT `id` so json-server will generate a unique id
      const payload = {
        productId, // original product id from catalogue
        title: product.title ?? product.name ?? "Produs",
        price: Number(product.price ?? product.preț ?? 0),
        image: product.image ?? null,
        collection: product.collection ?? null,
        description: product.description ?? ""
      };

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        throw new Error(`POST ${API_URL} => ${res.status} ${txt}`);
      }

      const saved = await res.json();
      // saved will have server-generated id
      setCart(prev => [...prev, saved]);
      console.log("addToCart: produs salvat", saved);
    } catch (err) {
      console.error("addToCart error:", err);
      // handled error so no unhandled promise rejection — show user-friendly message
      alert("Nu am putut adăuga produsul în coș: " + err.message);
    }
  };

  // Remove by server-generated id
  const removeFromCart = async (serverId) => {
    try {
      if (!serverId) {
        console.warn("removeFromCart: id invalid", serverId);
        setCart(prev => prev.filter(p => p.id !== serverId));
        return;
      }

      const res = await fetch(`${API_URL}/${serverId}`, { method: "DELETE" });
      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        throw new Error(`DELETE ${API_URL}/${serverId} => ${res.status} ${txt}`);
      }

      setCart(prev => prev.filter(item => item.id !== serverId));
      console.log("removeFromCart: șters", serverId);
    } catch (err) {
      console.error("removeFromCart error:", err);
      alert("Nu am putut elimina produsul: " + err.message);
    }
  };

  // Clear cart (delete each server-side)
  const clearCart = async () => {
    try {
      // copy current cart (so if setCart([]) happens, we still have items to delete)
      const items = [...cart];
      await Promise.all(items.map(i => 
        fetch(`${API_URL}/${i.id}`, { method: "DELETE" })
          .then(r => {
            if (!r.ok) console.warn("clearCart warning: delete", i.id, r.status);
          })
      ));
      setCart([]);
      console.log("clearCart: coș golit");
    } catch (err) {
      console.error("clearCart error:", err);
      alert("Eroare la golirea coșului: " + err.message);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
