import React from "react";
import Marquee from "react-fast-marquee";
import { Card, CardContent } from "@/components/ui/card";

const SocialCarusel = () => {
  // Acum imaginile vin direct din public/
  const defaultData = [
    {
      image: "/poze-site/instagram/insta1.jpg",
      link: "https://www.instagram.com/ralu.andre/",
    },
    {
      image: "/poze-site/instagram/insta2.jpg",
      link: "https://www.instagram.com/ralu.andre/",
    },
    {
      image: "/poze-site/instagram/insta3.jpg",
      link: "https://www.instagram.com/ralu.andre/",
    },
    {
      image: "/poze-site/instagram/insta4.jpg",
      link: "https://www.instagram.com/ralu.andre/",
    },
    {
      image: "/poze-site/instagram/insta5.jpg",
      link: "https://www.instagram.com/ralu.andre/",
    },
    {
      image: "/poze-site/instagram/insta6.jpg",
      link: "https://www.instagram.com/ralu.andre/",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-2">
          Urmărește-ne pe Instagram
        </h2>
        <p className="text-lg text-gray-600">
          Descoperă cele mai noi creații și inspirații din atelier.
        </p>
      </div>

      {/* Carusel */}
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        <div className="flex space-x-6">
          {defaultData.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <CardContent className="p-0">
                  <img
                    src={item.image}
                    alt={`Instagram ${index + 1}`}
                    className="w-64 h-64 object-cover"
                  />
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default SocialCarusel;
