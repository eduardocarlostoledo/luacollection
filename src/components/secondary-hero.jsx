import React from "react";
import { Helmet } from 'react-helmet-async';
import "../styles/SecondaryHero.css";
import foto1 from "../images/1.jpg"
import foto2 from "../images/2.jpg"
import foto3 from "../images/3.jpg"
import foto8 from "../images/8.jpg"










export const SecondaryHero = () => {
  return (
    <section className="secondary-hero-section">
      <Helmet>
        <meta name="description" content="Descubre nuestra colección de moda casual femenina Femenina en Lúa Collection. Diseños exclusivos y las últimas tendencias." />
        <meta property="og:title" content="Moda Casual Femenina - Lúa Collection" />
        <meta property="og:description" content="Descubre nuestra colección de moda casual femenina Femenina en Lúa Collection. Diseños exclusivos y las últimas tendencias." />
      </Helmet>
      
      <div className="secondary-hero-container">
        <div className="secondary-hero-text">
          <h2 className="secondary-hero-title">Sumate a la tendencia que conquista las calles</h2>
          <p className="secondary-hero-description">
            Estilo Western Reloaded 🐄✨- La tendencia cowprint y los gráficos del lejano oeste llegan con fuerza a Lúa Collection.
Remeras con mensajes icónicos, botas tejanas ilustradas y estampados de vaca en tonos tierra, negro y blanco: una colección que combina actitud rebelde y estilo casual chic.

🖤 Texturas cómodas. Colores versátiles. Looks que marcan huella.
Combiná estas prendas con jeans, faldas o tus cow boots favoritas y llevá el espíritu del oeste al asfalto.
          </p>
          <a href="#productos" className="secondary-hero-button">
            Ver colección
          </a>
        </div>
        
        <div className="secondary-hero-images">
          <div className="image-grid">
            <div className="image-item">
              <img 
                src={foto1} 
                alt="Moda casual Femenina 1" 
                className="grid-image"
              />
            </div>
            <div className="image-item">
              <img 
                src={foto2}
                alt="Moda casual Femenina 2" 
                className="grid-image"
              />
            </div>
            <div className="image-item">
              <img 
                src={foto3} 
                alt="Moda casual Femenina 3" 
                className="grid-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
