// src/components/ProductsAll.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductsAll.css";
import { products } from "../data/products"; // Importación correcta

export const ProductsAll = () => (
  <div className="products-all-container">
    <h1>Todos los Productos</h1>
    <div className="products-grid">
      {products.map((p) => (
        <div className="product-card" key={p.id}>
          <img
            src={p.images?.[0]}
            alt={p.name}
            className="product-image"
            loading="lazy"
          />
          <h3 className="product-name">{p.name}</h3>
          <p className="product-price">
            {typeof p.price === "number" ? `Gs. ${p.price.toLocaleString("es-PY")}` : "Consultar"}
          </p>
          <Link to={`/productos/${p.id}`} className="product-link">
            Ver detalle →
          </Link>
        </div>
      ))}
    </div>
  </div>
);
