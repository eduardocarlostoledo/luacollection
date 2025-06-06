// ImageGallery.jsx
import React, { useState } from "react";

export function ImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full aspect-square rounded-large overflow-hidden">
        <img src={selectedImage} alt="Product" className="w-full h-full object-cover" />
      </div>
      <div className="flex gap-2 overflow-x-auto">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelectedImage(img)}
            className={`w-20 h-20 rounded-large overflow-hidden border-2 ${selectedImage === img ? "border-primary" : "border-transparent"}`}
          >
            <img src={img} alt={`Thumbnail ${i}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
