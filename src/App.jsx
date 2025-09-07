import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import HeroSlider from "./Components/HeroSlider/HeroSlider";
import Products from "./Components/Products/Products";
import Reviews from "./Components/Reviews/Reviews";
import Footer from "./Components/Footer/Footer";
import { CartProvider } from "./context/CartContext";

import About from "./pages/About/About";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import CartPage from "./pages/CartPage/CartPage";
import ContactPage from "./pages/ContactPage/ContactPage";

const API_URL = "http://localhost:3008";

export default function App() {
  const [products, setProducts] = useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/products`).then(res => res.json()).then(setProducts).catch(console.error);
    fetch(`${API_URL}/gallery`).then(res => res.json()).then(setGallery).catch(console.error);
  }, []);

  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSlider />
              <Products products={products} />
              <Reviews /> {/* Aici adăugăm recenziile */}
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<GalleryPage gallery={gallery} setGallery={setGallery} API_URL={API_URL} />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage API_URL={API_URL} />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}
