// src/components/RelatedProducts.jsx
import React from "react";
import { Card, CardBody, CardFooter } from "@heroui/react";
import { useNavigate } from "react-router-dom";

export function RelatedProducts({ products }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/productos/${id}`);
    window.scrollTo(0, 0); // para asegurar que suba al inicio
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold">Productos Relacionados</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => {
          const formattedPrice =
            typeof product.price === "number"
              ? `Gs. ${product.price.toLocaleString("es-PY")}`
              : "Consultar";

          return (
            <Card key={product.id} isPressable onClick={() => handleClick(product.id)}>
              <CardBody className="p-0">
                <img
                  src={product.images?.[0]}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                  loading="lazy"
                />
              </CardBody>
              <CardFooter className="flex flex-col items-start">
                <h4 className="font-semibold">{product.name}</h4>
                <p className="text-default-500">{formattedPrice}</p>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
