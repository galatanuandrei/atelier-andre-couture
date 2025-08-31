import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { id: 1, image: "https://via.placeholder.com/1200x500?text=Rochii+de+Mireasa", caption: "Rochii de vis pentru ziua ta specială" },
  { id: 2, image: "https://via.placeholder.com/1200x500?text=Accesorii+Unice", caption: "Accesorii elegante pentru ziua cea mare" },
  { id: 3, image: "https://via.placeholder.com/1200x500?text=Consultanta+Personalizata", caption: "Consultanță personalizată pentru tine" }
];

export default function HeroSlider() {
  const settings = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 4000, arrows: false };
  return (
    <section className="hero-slider">
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id} className="slide">
            <img src={slide.image} alt={slide.caption} className="hero-image" />
            <div className="hero-text"><h2>{slide.caption}</h2></div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
