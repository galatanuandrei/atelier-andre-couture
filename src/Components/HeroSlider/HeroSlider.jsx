import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './HeroSlider.css';

import carusel1 from "../../assets/poze-site/carusel/carusel1.png";
import carusel2 from "../../assets/poze-site/carusel/carusel2.png";
import carusel3 from "../../assets/poze-site/carusel/carusel3.png";

const slides = [carusel1, carusel2, carusel3];

export default function HeroSlider() {
  const settings = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 4000, arrows: false };

  return (
    <section className="hero-slider">
      <Slider {...settings}>
        {slides.map((img, i) => (
          <div key={i}>
            <div className="hero-overlay"></div>
            <img src={img} alt={`Slide ${i+1}`} className="hero-image" />
          </div>
        ))}
      </Slider>
    </section>
  );
}
