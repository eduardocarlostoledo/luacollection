import React from "react";
import { Helmet } from 'react-helmet-async';
import { Icon } from "@iconify/react";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Helmet>
        <meta name="description" content="Contacta con Lúa Collection, tienda de moda femenina en Encarnación, Paraguay. Envíos a toda Argentina." />
      </Helmet>
      
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="footer-title">Lúa Collection</h3>
            <p className="footer-description">
              Moda femenina con estilo y calidad. Precios mayoristas y envíos a toda Argentina.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/luacollection_circuito/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <Icon icon="lucide:instagram" className="social-icon" />
              </a>
              <a href="https://www.tiktok.com/@modatotaltienda" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok">
                <Icon icon="lucide:video" className="social-icon" />
              </a>
              <a href="https://wa.me/595984366660" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                <Icon icon="lucide:message-circle" className="social-icon" />
              </a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-subtitle">Enlaces</h3>
            <ul className="footer-links">
              <li className="footer-link-item">
                <a href="#" className="footer-link">Inicio</a>
              </li>
              <li className="footer-link-item">
                <a href="#productos" className="footer-link">Productos</a>
              </li>
              <li className="footer-link-item">
                <a href="#ubicacion" className="footer-link">Ubicación</a>
              </li>
              <li className="footer-link-item">
                <a href="#contacto" className="footer-link">Contacto</a>
              </li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-subtitle">Contacto</h3>
            <ul className="contact-list">
              <li className="contact-item">
                <Icon icon="lucide:map-pin" className="contact-icon" />
                <span className="contact-text">
                  Calle Abogada Serafina Dávalos, Encarnación, Paraguay
                </span>
              </li>
              <li className="contact-item">
                <Icon icon="lucide:phone" className="contact-icon" />
                <span className="contact-text">+595 984 366660</span>
              </li>
              <li className="contact-item">
                <Icon icon="lucide:mail" className="contact-icon" />
                <span className="contact-text">info@luacollection.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="footer-divider" />
        
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Lúa Collection. Todos los derechos reservados.
          </p>
          <div className="legal-links">
            <a href="https://www.toledoconsultora.com" className="legal-link">Designed by Toledo Consultora</a>
            {/* <a href="#" className="legal-link">Términos y Condiciones</a>
            <a href="#" className="legal-link">Política de Privacidad</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
