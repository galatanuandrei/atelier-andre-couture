import React from "react";
import './Services.css';

export default function Services({ services }) {
  return (
    <section id="services">
      <h2>Servicii</h2>
      <div className="grid">
        {services.map(service => (
          <div key={service.id} className="card">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
