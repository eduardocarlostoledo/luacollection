// src/components/products-section.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/ProductsSection.css";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products";

export const ProductsSection = () => {
  const navigate = useNavigate();

  const handleViewDetail = (id) => {
    navigate(`/productos/${id}`);
  };

  const handleViewCatalog = () => {
    navigate("/productos");
  };

  return (
    <section id="productos" className="products-section">
      <Helmet>
        <title>Productos - Lúa Collection</title>
        <meta
          name="description"
          content="Explora nuestra selección de productos destacados con diseños exclusivos y precios mayoristas."
        />
        <meta property="og:title" content="Productos - Lúa Collection" />
        <meta
          property="og:description"
          content="Explora nuestra selección de productos destacados con diseños exclusivos y precios mayoristas."
        />
      </Helmet>

      <div className="products-container">
        <div className="products-header">
          <h2 className="products-title">Nuestros Productos</h2>
          <p className="products-description">
            Descubre nuestra selección de prendas de alta calidad con diseños
            exclusivos. Ofrecemos precios mayoristas y las últimas tendencias en
            moda femenina.
          </p>
        </div>

        <div className="products-grid">
          {products.slice(0, 10).map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img
                  alt={product.name}
                  className="product-image"
                  src={product.images?.[0]}
                  loading="lazy"
                />
              </div>
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">
                  {typeof product.price === "number"
                    ? `Gs. ${product.price.toLocaleString("es-PY")}`
                    : "Consultar"}
                </p>
                <button
                  className="product-button"
                  onClick={() => handleViewDetail(product.id)}
                >
                  Ver detalles <span className="bag-icon">🛍️</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="catalog-button-container">
          <button className="catalog-button" onClick={handleViewCatalog}>
            Ver catálogo completo <span className="arrow-icon">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
