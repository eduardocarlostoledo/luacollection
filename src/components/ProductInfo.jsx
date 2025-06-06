import React, { useState } from "react";
import { Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

export function ProductInfo({ name, price, description, rating, colors, sizes }) {
  const [selectedColor, setSelectedColor] = useState(colors?.[0]);
  const [selectedSize, setSelectedSize] = useState(sizes?.[0]);
  const [quantity, setQuantity] = useState(1);

  const formattedPrice =
    typeof price === "number" ? `Gs. ${price.toLocaleString("es-PY")}` : "Consultar";

  const handleWhatsAppClick = () => {
    const mensaje = `Hola! Estoy interesada en la prenda "${name}"\n- Talle: ${selectedSize}\n- Color: ${selectedColor}\n- Cantidad: ${quantity}\n\nLa encontré en: ${window.location.href}`;
    const url = `https://wa.me/595986123456?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold">{name}</h1>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                icon="solar:star-bold"
                className={i < rating ? "text-warning" : "text-default-300"}
              />
            ))}
          </div>
          <span className="text-default-500">({rating} / 5)</span>
        </div>
        <div className="mt-2 text-2xl font-semibold">{formattedPrice}</div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Descripción</h3>
        <p className="text-default-600">{description}</p>
      </div>

      {colors?.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Color</h3>
          <div className="flex gap-2">
            {colors.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedColor(c)}
                className={`w-8 h-8 rounded-full border-2 ${
                  selectedColor === c ? "border-primary" : "border-transparent"
                }`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>
      )}

      {sizes?.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Talle</h3>
          <div className="flex gap-2">
            {sizes.map((s) => (
              <Chip
                key={s}
                variant={selectedSize === s ? "solid" : "bordered"}
                onClick={() => setSelectedSize(s)}
              >
                {s}
              </Chip>
            ))}
          </div>
        </div>
      )}

      <div>
        <h3 className="text-lg font-semibold mb-2">Cantidad</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-default-300 rounded-md">
            <button
              className="px-3 py-1 text-lg border-r"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              -
            </button>
            <span className="px-4 py-1">{quantity}</span>
            <button
              className="px-3 py-1 text-lg border-l"
              onClick={() => setQuantity((q) => q + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <Button
        size="lg"
        color="success"
        onClick={handleWhatsAppClick}
        startContent={<Icon icon="ic:baseline-whatsapp" />}
      >
        Consultar por WhatsApp
      </Button>
    </div>
  );
}
