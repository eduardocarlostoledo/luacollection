import React from "react";
import { Helmet } from 'react-helmet-async';
import "../styles/Hero.css";
import prod22 from "../images/prod22.jpg"
export const Hero = () => {
  return (
    <section className="hero-section">
      <Helmet>
        <meta name="description" content="Descubre la exclusiva colección de moda femenina de Lúa Collection con diseños únicos de estilo western y animal print a precios mayoristas." />
        <meta property="og:title" content="Lúa Collection - Moda Femenina con Estilo" />
        <meta property="og:description" content="Descubre nuestra exclusiva colección de moda femenina con diseños únicos de estilo western y animal print a precios mayoristas." />
      </Helmet>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Lua Collection Circuito</h1>
            <p className="hero-description">
              Descubre nuestra exclusiva colección de moda femenina casual con diseños únicos de estilo western y animal print a precios mayoristas.
            </p>
            <div className="hero-buttons">
              <a href="#productos" className="primary-button">Ver catálogo</a>
              <a 
                href="https://www.google.com/maps/place/LUA+COLLECTION+CIRCUITO/data=!4m2!3m1!1s0x0:0xe6b8c8cebd66e792" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="secondary-button"
              >
                Cómo llegar
                <span className="icon">→</span>
              </a>
            </div>
            <div className="shipping-info">
              <p className="shipping-text">Envíos a toda Argentina</p>
              <span className="truck-icon">🚚</span>
            </div>
          </div>
          <div className="hero-image-container">
            <img
              alt="Lúa Collection Moda Femenina"
              className="hero-image"
              src={prod22}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
