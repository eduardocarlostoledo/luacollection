import React from "react";
import { Helmet } from 'react-helmet-async';
import "../styles/LocationSection.css";

export const LocationSection = () => {
  return (
    <section id="ubicacion" className="location-section">
      <Helmet>
        <title>Ubicación - Lúa Collection</title>
        <meta name="description" content="Encuentra nuestra tienda en el Circuito Comercial de Encarnación, Paraguay. Sigue nuestras indicaciones para llegar fácilmente desde la Aduana." />
        <meta property="og:title" content="Ubicación - Lúa Collection" />
        <meta property="og:description" content="Encuentra nuestra tienda en el Circuito Comercial de Encarnación, Paraguay. Sigue nuestras indicaciones para llegar fácilmente desde la Aduana." />
      </Helmet>
      
      <div className="location-container">
        <div className="location-header">
          <h2 className="location-title">Cómo Llegar</h2>
          <p className="location-description">
            Estamos ubicados en el Circuito Comercial de Encarnación, Paraguay. 
            Sigue estas indicaciones para encontrarnos fácilmente.
          </p>
        </div>

        <div className="location-grid">
          <div className="address-card">
            <div className="address-header">
              <span className="pin-icon">📍</span>
              <div className="address-title-container">
                <p className="address-title">Dirección</p>
                <p className="address-subtitle">Calle Abogada Serafina Dávalos, Encarnación, Paraguay</p>
              </div>
            </div>
            <hr className="divider" />
            <div className="address-body">
              <div className="directions-container">
                <h3 className="directions-title">
                  <span className="info-icon">ℹ️</span>
                  Indicaciones desde la Aduana
                </h3>
                <ol className="directions-list">
                  <li>Al salir de la aduana, incorpórate a la <span className="bold">Avenida Acceso Sur</span> (ruta PY01 o Avenida Roque González de Santa Cruz).</li>
                  <li>Mantente a la derecha. Pasarás por el centro comercial <span className="bold">Alaska</span>, uno de los puntos más conocidos del Circuito Comercial.</li>
                  <li>Cuando veas la tienda <span className="bold">Casa 2H&M</span>, gira a la derecha en dirección a la calle <span className="bold">Abogada Serafina Dávalos</span>.</li>
                  <li>A pocos metros, del lado derecho, encontrarás <span className="bold">Lúa Collection Circuito</span>.</li>
                </ol>
              </div>
              
              <div className="info-item">
                <span className="clock-icon">🕒</span>
                <div>
                  <p className="info-title">Horario de Atención</p>
                  <p className="info-text">Lunes a Sábado: 9:00 - 19:00</p>
                </div>
              </div>
              
              <div className="info-item">
                <span className="phone-icon">📞</span>
                <div>
                  <p className="info-title">Teléfono</p>
                  <p className="info-text">+595 984 366660</p>
                </div>
              </div>
              
              <div className="map-button-container">
                <a 
                  href="https://www.google.com/maps/place/LUA+COLLECTION+CIRCUITO/data=!4m2!3m1!1s0x0:0xe6b8c8cebd66e792" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="map-button"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </div>
          
          <div className="map-placeholder">
            <div className="map-content">
              <span className="map-icon">🗺️</span>
              <h3 className="map-title">Mapa Interactivo</h3>
              <p className="map-description">
                Aquí se mostraría un mapa interactivo con la ubicación exacta de la tienda.
              </p>
              <div className="coordinates-container">
                <p className="coordinates-text">
                  <span className="navigation-icon">🧭</span>
                  Coordenadas: -27.330557, -55.865093 (aproximadas)
                </p>
              </div>
              <div className="map-link-container">
                <a 
                  href="https://www.google.com/maps/place/LUA+COLLECTION+CIRCUITO/data=!4m2!3m1!1s0x0:0xe6b8c8cebd66e792" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
