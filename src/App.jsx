import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import HeroSlider from "./Components/HeroSlider";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import ThemeToggle from "./Components/ThemeToggle";

import About from "./pages/About";
import GalleryPage from "./pages/GalleryPage";

const API_URL = "http://localhost:3001";

export default function App() {
  const [services, setServices] = useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/services`).then(res => res.json()).then(setServices);
    fetch(`${API_URL}/gallery`).then(res => res.json()).then(setGallery);
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <ThemeToggle />

        <Routes>
          <Route path="/" element={
            <>
              <HeroSlider />
              <Services services={services} />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<GalleryPage gallery={gallery} setGallery={setGallery} API_URL={API_URL} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
