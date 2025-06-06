// src/components/ProductDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Tabs, Tab } from "@heroui/react";
import { products } from "../data/products";
import { ImageGallery } from "./ImageGallery";
import { ProductInfo } from "./ProductInfo";
import { ProductSpecs } from "./ProductSpecs";
import { ProductReviews } from "./ProductReviews";
import { RelatedProducts } from "./RelatedProducts";

export const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-600">Producto no encontrado.</p>
        <Link to="/productos" className="text-primary underline">
          ← Volver a productos
        </Link>
      </div>
    );
  }

  const otherProducts = products.filter((p) => p.id !== id).slice(0, 4); // 4 relacionados

  return (
  <div key={id} className="container mx-auto px-4 py-8">

      <Link to="/productos" className="text-sm text-primary underline block mb-4">
        ← Volver a productos
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <ImageGallery images={product.images} />
        <ProductInfo
          name={product.name}
          price={
            typeof product.price === "number"
              ? `Gs. ${product.price.toLocaleString("es-PY")}`
              : "Consultar"
          }
          description={product.description}
          rating={product.rating}
          colors={product.colors}
          sizes={product.sizes}
        />
      </div>

      <Tabs aria-label="Detalles del producto" className="mb-8">
        <Tab key="specs" title="Especificaciones">
          <div className="py-4">
            <ProductSpecs specifications={product.specifications} />
          </div>
        </Tab>
        <Tab key="reviews" title="Reseñas">
          <div className="py-4">
            <ProductReviews reviews={product.reviews} />
          </div>
        </Tab>
      </Tabs>

      <h2 className="text-xl font-semibold mb-4">También puede interesarte</h2>
      <RelatedProducts products={otherProducts} />
    </div>
  );
};
