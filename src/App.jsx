import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import HeroSlider from "./Components/HeroSlider/HeroSlider";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";
import { CartProvider } from "./context/CartContext";

import About from "./pages/About/About";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import CartPage from "./pages/CartPage/CartPage";

const API_URL = "http://localhost:3008";

export default function App() {
  const [services, setServices] = useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/services`)
      .then(res => res.json())
      .then(setServices)
      .catch(err => console.error("Eroare la fetch services:", err));

    fetch(`${API_URL}/gallery`)
      .then(res => res.json())
      .then(setGallery)
      .catch(err => console.error("Eroare la fetch gallery:", err));
  }, []);

  return (
    <CartProvider>
      <Router>
        <Header />
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
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}
