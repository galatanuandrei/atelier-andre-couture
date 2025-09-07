import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './HeroSlider.css';

const slides = [
  { id: 1, image: "https://via.placeholder.com/1200x500?text=Rochii+de+Mireasa" },
  { id: 2, image: "https://via.placeholder.com/1200x500?text=Accesorii+Unice" },
  { id: 3, image: "https://via.placeholder.com/1200x500?text=Consultanta+Personalizata" }
];

export default function HeroSlider() {
  const settings = { 
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 4000, 
    arrows: false 
  };

  return (
    <section className="hero-slider">
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id} className="slide">
            <img src={slide.image} alt={`slide-${slide.id}`} className="hero-image" />
          </div>
        ))}
      </Slider>
    </section>
  );
}
