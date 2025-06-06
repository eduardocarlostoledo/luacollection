// src/routes/ProductosRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProductsAll } from "../components/ProductsAll";
import { ProductDetail } from "../components/ProductDetail";

export const ProductosRoutes = () => (
  <Routes>
    <Route path="/productos" element={<ProductsAll />} />
    <Route path="/productos/:id" element={<ProductDetail />} />
  </Routes>
);
