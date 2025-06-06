// src/App.jsx
import React from "react";
import "./styles/App.css";
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";

import { Hero } from "./components/hero";
import { ProductsSection } from "./components/products-section";
import { ProductsAll } from "./components/ProductsAll";
import { ProductDetail } from "./components/ProductDetail";
import { LocationSection } from "./components/location-section";
import { Footer } from "./components/footer";
import { SecondaryHero } from "./components/secondary-hero";
import AboutUs from "./components/AboutUs";
import BrandsSection from "./components/BrandsSection";
import logo from "../src/images/logo.png";


function ScrollAwareNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const goHome = (e) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={goHome} style={{ cursor: 'pointer' }}>
        <div className="logo-container">
          <img
            alt="Lúa Collection Logo"
            className="logo-image"
            src={logo}
          />
        </div>
        <p className="brand-name">LUA</p>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          {isHome && (
            <>
              <li className="nav-item">
                <a href="#productos" className="nav-link">Productos</a>
              </li>
              <li className="nav-item">
                <a href="#ubicacion" className="nav-link">Ubicación</a>
              </li>
              <li className="nav-item">
                <a href="#contacto" className="nav-link">Contacto</a>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {isHome && (
          <a href="#contacto" className="contact-button">Contáctanos</a>
        )}
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Helmet>
          <title>Lua Collection Circuito - Moda Femenina en Encarnación - Ropa Casual Femenina - Mayorista - Minorista</title>
          <meta name="description" content="Tienda de moda femenina en Encarnación, Paraguay. Descubre nuestra exclusiva colección de ropa con diseños únicos de estilo western y animal print a precios mayoristas." />
          <link rel="canonical" href="https://luacollection.com" />
        </Helmet>

        <ScrollAwareNav />

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ProductsSection />
              <SecondaryHero />
              {/* <TerceryHero /> */}
              <BrandsSection />
              <AboutUs />
              <LocationSection />

              <section id="contacto" className="contact-section">
                <h2 className="section-title">Contacto</h2>
                <div className="contact-card">
                  <div className="contact-info">
                    <p className="contact-name">Lúa Collection Circuito</p>
                    <p>Calle Abogada Serafina Dávalos</p>
                    <p>Encarnación, Paraguay</p>
                  </div>
                  <hr className="divider" />
                  <div className="contact-details">
                    <p><span className="bold">Teléfono:</span> +595 984 366660</p>
                    <p><span className="bold">Email:</span> info@luacollection.com</p>
                    <p><span className="bold">Horario:</span> Lunes a Sábado de 9:00 a 19:00</p>
                  </div>
                  <div className="button-container">
                    <a 
                      href="http://wa.me/595984366660" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="primary-button large-button"
                    >
                      Enviar mensaje por WhatsApp
                    </a>
                  </div>
                </div>
              </section>

              
            </>
          } />

          <Route path="/productos" element={<ProductsAll />} />
          <Route path="/productos/:id" element={<ProductDetail />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}