import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import HeroSlider from "./Components/HeroSlider";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import ThemeToggle from "./Components/ThemeToggle";
import { CartProvider } from "./context/CartContext";

import About from "./pages/About";
import GalleryPage from "./pages/GalleryPage";
import CartPage from "./pages/CartPage"; // ✅ import nou

// schimbăm portul mock server -> 3008
const API_URL = "http://localhost:3008";

export default function App() {
  const [services, setServices] = useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    // Fetch servicii
    fetch(`${API_URL}/services`)
      .then(res => res.json())
      .then(setServices)
      .catch(err => console.error("Eroare la fetch services:", err));

    // Fetch galerie produse
    fetch(`${API_URL}/gallery`)
      .then(res => res.json())
      .then(setGallery)
      .catch(err => console.error("Eroare la fetch gallery:", err));
  }, []);

  return (
    <CartProvider>
      <Router>
        <div>
          <Header />
          <ThemeToggle />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSlider />
                  <Services services={services} />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/gallery"
              element={
                <GalleryPage
                  gallery={gallery}
                  setGallery={setGallery}
                  API_URL={API_URL}
                />
              }
            />
            <Route path="/cart" element={<CartPage />} /> {/* ✅ ruta nouă */}
          </Routes>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
