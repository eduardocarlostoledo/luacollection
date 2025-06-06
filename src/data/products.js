// src/data/products.js
import foto1 from "../images/1.jpg";
import foto2 from "../images/2.jpg";
import foto3 from "../images/3.jpg";
import foto4 from "../images/4.jpg";
import foto5 from "../images/5.jpg";
import foto6 from "../images/6.jpg";
import foto7 from "../images/7.jpg";
import foto8 from "../images/8.jpg";
import blusa from "../images/modelos/blusa.png";
import buzo from "../images/modelos/buzo.png";
import pollera from "../images/modelos/pollera.png";
import ropamodelos from "../images/modelos/ropamodelos.png";


export const products = [
  {
    id: "1",
    name: "Set Animal Print Taz",
    price: 160000,
    description: "Blusa con lazo + pantalón jogger animal print. Incluye remera oversize estampada de Taz.",
    images: [ropamodelos],
    colors: ["#D2B48C", "#000000"],
    sizes: ["S", "M", "L"],
    specifications: {
      Material: "Algodón y poliéster",
      Corte: "Oversize",
      Incluye: "3 piezas (blusa, jogger, remera)",
      Lavado: "Recomendado a mano",
      Origen: "Hecho en Paraguay"
    },
    rating: 4.8,
reviews: [
  {
    id: "r1",
    author: "Valentina Ruiz",
    rating: 5,
    comment: "La calidad de las prendas es excelente y el diseño es único. ¡Volveré a comprar sin dudas!",
    date: "2024-05-12"
  },
  {
    id: "r2",
    author: "Camila Ferreira",
    rating: 5,
    comment: "Me encantó el sweater que compré, es cómodo, suave y se nota que está bien confeccionado.",
    date: "2024-05-10"
  },
  {
    id: "r3",
    author: "Rocío Cardozo",
    rating: 4,
    comment: "Muy buena atención y el envío fue rápido. Las prendas son tal cual se ven en las fotos.",
    date: "2024-05-08"
  }
]

  },
  {
    id: "2",
    name: "Sweater Tricolor Escamas",
    price: null,
    description: "Tejido grueso con relieve escamado en tonos tierra. Estilo cómodo y abrigado.",
    images: [buzo],
    colors: ["#A0522D", "#8B4513", "#D2691E"],
    sizes: ["M", "L", "XL"],
    specifications: {
      Material: "Acrílico grueso",
      Estilo: "Casual",
      Temporada: "Otoño/Invierno",
      Origen: "Hecho en Paraguay"
    },
    rating: 4.4,
reviews: [
  {
    id: "r1",
    author: "Valentina Ruiz",
    rating: 5,
    comment: "La calidad de las prendas es excelente y el diseño es único. ¡Volveré a comprar sin dudas!",
    date: "2024-05-12"
  },
  {
    id: "r2",
    author: "Camila Ferreira",
    rating: 5,
    comment: "Me encantó el sweater que compré, es cómodo, suave y se nota que está bien confeccionado.",
    date: "2024-05-10"
  },
  {
    id: "r3",
    author: "Rocío Cardozo",
    rating: 4,
    comment: "Muy buena atención y el envío fue rápido. Las prendas son tal cual se ven en las fotos.",
    date: "2024-05-08"
  }
]

  },
  {
    id: "3",
    name: "Blusa Geométrica Minimal",
    price: null,
    description: "Diseño a bloques en beige, negro y terracota. Tela fresca, corte recto.",
    images: [blusa],
    colors: ["#F5F5DC", "#000000", "#E2725B"],
    sizes: ["S", "M", "L"],
    specifications: {
      Material: "Rayón y viscosa",
      Corte: "Recto",
      Estilo: "Minimalista",
      Origen: "Hecho en Paraguay"
    },
    rating: 4.2,
reviews: [
  {
    id: "r1",
    author: "Valentina Ruiz",
    rating: 5,
    comment: "La calidad de las prendas es excelente y el diseño es único. ¡Volveré a comprar sin dudas!",
    date: "2024-05-12"
  },
  {
    id: "r2",
    author: "Camila Ferreira",
    rating: 5,
    comment: "Me encantó el sweater que compré, es cómodo, suave y se nota que está bien confeccionado.",
    date: "2024-05-10"
  },
  {
    id: "r3",
    author: "Rocío Cardozo",
    rating: 4,
    comment: "Muy buena atención y el envío fue rápido. Las prendas son tal cual se ven en las fotos.",
    date: "2024-05-08"
  }
]

  },
  {
    id: "4",
    name: "Falda Plisada Mostaza",
    price: null,
    description: "Falda plisada con cinturón ancho, corte elegante y moderno.",
    images: [pollera],
    colors: ["#FFD700"],
    sizes: ["S", "M", "L"],
    specifications: {
      Material: "Poliéster plisado",
      Largo: "Por debajo de la rodilla",
      Incluye: "Cinturón ancho",
      Origen: "Hecho en Paraguay"
    },
    rating: 4.6,
reviews: [
  {
    id: "r1",
    author: "Valentina Ruiz",
    rating: 5,
    comment: "La calidad de las prendas es excelente y el diseño es único. ¡Volveré a comprar sin dudas!",
    date: "2024-05-12"
  },
  {
    id: "r2",
    author: "Camila Ferreira",
    rating: 5,
    comment: "Me encantó el sweater que compré, es cómodo, suave y se nota que está bien confeccionado.",
    date: "2024-05-10"
  },
  {
    id: "r3",
    author: "Rocío Cardozo",
    rating: 4,
    comment: "Muy buena atención y el envío fue rápido. Las prendas son tal cual se ven en las fotos.",
    date: "2024-05-08"
  }
]

  },
  {
    id: "5",
    name: "Sweater Cow Print",
    price: 129900,
    description: "Sweaters oversize estampados con patrón de vaca. Tacto suave, corte moderno.",
    images: [foto1],
    colors: ["#000000", "#FFFFFF"],
    sizes: ["S", "M", "L", "XL"],
    specifications: {
      Material: "Algodón suave",
      Corte: "Oversize",
      Estampado: "Animal print vaca",
      Origen: "Hecho en Paraguay"
    },
    rating: 4.5,
    reviews: [
      {
        id: "r1",
        author: "Camila Duarte",
        rating: 5,
        comment: "Me encantó, súper suave y combina con todo!",
        date: "2024-04-21"
      },
      {
        id: "r2",
        author: "Rocío Gómez",
        rating: 4,
        comment: "Buena calidad, aunque el talle es bien amplio.",
        date: "2024-04-19"
      }
    ]
  },
  {
    id: "6",
    name: "Remeras Cowgirl Western",
    price: null,
    description: "Remeras oversize con frases como 'Cow Spots', 'Boots are made to slay' y más. Estilo boho urbano.",
    images: [foto2],
    colors: ["#FFF5EE", "#8B4513"],
    sizes: ["S", "M", "L"],
    specifications: {
      Material: "Algodón 100%",
      Estilo: "Boho vaquero",
      Estampado: "Frases y gráficos western",
      Origen: "Hecho en Paraguay"
    },
    rating: 4.3,
reviews: [
  {
    id: "r1",
    author: "Valentina Ruiz",
    rating: 5,
    comment: "La calidad de las prendas es excelente y el diseño es único. ¡Volveré a comprar sin dudas!",
    date: "2024-05-12"
  },
  {
    id: "r2",
    author: "Camila Ferreira",
    rating: 5,
    comment: "Me encantó el sweater que compré, es cómodo, suave y se nota que está bien confeccionado.",
    date: "2024-05-10"
  },
  {
    id: "r3",
    author: "Rocío Cardozo",
    rating: 4,
    comment: "Muy buena atención y el envío fue rápido. Las prendas son tal cual se ven en las fotos.",
    date: "2024-05-08"
  }
]

  },
  {
    id: "7",
    name: "Remeras Boho Vibes / Coffee Lovers",
    price: null,
    description: "Diseños con corazón bohemio, texto bold o mandalas. Colores neutros y estilo relajado.",
    images: [foto3],
    colors: ["#D2B48C", "#A9A9A9"],
    sizes: ["S", "M", "L"],
    specifications: {
      Material: "Algodón peinado",
      Estilo: "Bohemio relajado",
      Detalles: "Mandala, texto bold",
      Origen: "Hecho en Paraguay"
    },
    rating: 4.1,
reviews: [
  {
    id: "r1",
    author: "Valentina Ruiz",
    rating: 5,
    comment: "La calidad de las prendas es excelente y el diseño es único. ¡Volveré a comprar sin dudas!",
    date: "2024-05-12"
  },
  {
    id: "r2",
    author: "Camila Ferreira",
    rating: 5,
    comment: "Me encantó el sweater que compré, es cómodo, suave y se nota que está bien confeccionado.",
    date: "2024-05-10"
  },
  {
    id: "r3",
    author: "Rocío Cardozo",
    rating: 4,
    comment: "Muy buena atención y el envío fue rápido. Las prendas son tal cual se ven en las fotos.",
    date: "2024-05-08"
  }
]

  },
  {
    id: "8",
    name: "Sweaters Animal Print oscuro",
    price: null,
    description: "Con estampado tipo manchas de vaca en negro y terracota. Corte amplio y cómodo.",
    images: [foto8],
    colors: ["#000000", "#E2725B"],
    sizes: ["M", "L", "XL"],
    specifications: {
      Material: "Tejido acrílico",
      Estilo: "Casual oversize",
      Estampado: "Manchas animal print",
      Origen: "Hecho en Paraguay"
    },
    rating: 4.4,
reviews: [
  {
    id: "r1",
    author: "Valentina Ruiz",
    rating: 5,
    comment: "La calidad de las prendas es excelente y el diseño es único. ¡Volveré a comprar sin dudas!",
    date: "2024-05-12"
  },
  {
    id: "r2",
    author: "Camila Ferreira",
    rating: 5,
    comment: "Me encantó el sweater que compré, es cómodo, suave y se nota que está bien confeccionado.",
    date: "2024-05-10"
  },
  {
    id: "r3",
    author: "Rocío Cardozo",
    rating: 4,
    comment: "Muy buena atención y el envío fue rápido. Las prendas son tal cual se ven en las fotos.",
    date: "2024-05-08"
  }
]

  },
  {
    id: "9",
    name: "Remeras Texas Western",
    price: null,
    description: "Inspiración vaquera y desert texano. Colores tierra y gráficos con cactus y botas.",
    images: [foto5],
    colors: ["#A0522D", "#C19A6B"],
    sizes: ["S", "M", "L"],
    specifications: {
      Material: "Algodón",
      Estilo: "Western urbano",
      Gráficos: "Cactus y botas",
      Origen: "Hecho en Paraguay"
    },
    rating: 4.2,
reviews: [
  {
    id: "r1",
    author: "Valentina Ruiz",
    rating: 5,
    comment: "La calidad de las prendas es excelente y el diseño es único. ¡Volveré a comprar sin dudas!",
    date: "2024-05-12"
  },
  {
    id: "r2",
    author: "Camila Ferreira",
    rating: 5,
    comment: "Me encantó el sweater que compré, es cómodo, suave y se nota que está bien confeccionado.",
    date: "2024-05-10"
  },
  {
    id: "r3",
    author: "Rocío Cardozo",
    rating: 4,
    comment: "Muy buena atención y el envío fue rápido. Las prendas son tal cual se ven en las fotos.",
    date: "2024-05-08"
  }
]

  },
  {
    id: "10",
    name: "Crop Floreado & Cow Print",
    price: null,
    description: "Estampas florales otoñales y cowprint blanco y negro. Mangas anchas y corte crop.",
    images: [foto6],
    colors: ["#FFFFFF", "#000000", "#8B0000"],
    sizes: ["S", "M"],
    specifications: {
      Material: "Poliéster",
      Estilo: "Crop boho",
      Estampado: "Florales y cowprint",
      Origen: "Hecho en Paraguay"
    },
    rating: 4.3,
reviews: [
  {
    id: "r1",
    author: "Valentina Ruiz",
    rating: 5,
    comment: "La calidad de las prendas es excelente y el diseño es único. ¡Volveré a comprar sin dudas!",
    date: "2024-05-12"
  },
  {
    id: "r2",
    author: "Camila Ferreira",
    rating: 5,
    comment: "Me encantó el sweater que compré, es cómodo, suave y se nota que está bien confeccionado.",
    date: "2024-05-10"
  },
  {
    id: "r3",
    author: "Rocío Cardozo",
    rating: 4,
    comment: "Muy buena atención y el envío fue rápido. Las prendas son tal cual se ven en las fotos.",
    date: "2024-05-08"
  }
]

  },
  {
    id: "11",
    name: "Remeras Dodgers 22",
    price: null,
    description: "Estilo deportivo americano. Corte amplio con número frontal y letras en contraste.",
    images: [foto7],
    colors: ["#000080", "#FFFFFF"],
    sizes: ["M", "L", "XL"],
    specifications: {
      Material: "Algodón jersey",
      Estilo: "Sport americano",
      Gráfico: "Números y letras",
      Origen: "Hecho en Paraguay"
    },
    rating: 4.0,
reviews: [
  {
    id: "r1",
    author: "Valentina Ruiz",
    rating: 5,
    comment: "La calidad de las prendas es excelente y el diseño es único. ¡Volveré a comprar sin dudas!",
    date: "2024-05-12"
  },
  {
    id: "r2",
    author: "Camila Ferreira",
    rating: 5,
    comment: "Me encantó el sweater que compré, es cómodo, suave y se nota que está bien confeccionado.",
    date: "2024-05-10"
  },
  {
    id: "r3",
    author: "Rocío Cardozo",
    rating: 4,
    comment: "Muy buena atención y el envío fue rápido. Las prendas son tal cual se ven en las fotos.",
    date: "2024-05-08"
  }
]

  },
  {
    id: "12",
    name: "Wild West Cowgirl",
    price: null,
    description: "Remera estilo western con gráfico de vaquera. Disponible en blanco y negro.",
    images: [foto4],
    colors: ["#FFFFFF", "#000000"],
    sizes: ["S", "M", "L"],
    specifications: {
      Material: "Algodón",
      Estilo: "Western femenino",
      Detalles: "Gráfico vaquera",
      Origen: "Hecho en Paraguay"
    },
    rating: 4.3,
reviews: [
  {
    id: "r1",
    author: "Valentina Ruiz",
    rating: 5,
    comment: "La calidad de las prendas es excelente y el diseño es único. ¡Volveré a comprar sin dudas!",
    date: "2024-05-12"
  },
  {
    id: "r2",
    author: "Camila Ferreira",
    rating: 5,
    comment: "Me encantó el sweater que compré, es cómodo, suave y se nota que está bien confeccionado.",
    date: "2024-05-10"
  },
  {
    id: "r3",
    author: "Rocío Cardozo",
    rating: 4,
    comment: "Muy buena atención y el envío fue rápido. Las prendas son tal cual se ven en las fotos.",
    date: "2024-05-08"
  }
]

  }
];





export const relatedProducts = [
  {
    id: "related-1",
    name: "Classic Running Shoes",
    price: 99.99,
    images: ["https://img.heroui.chat/image/shoes?w=800&h=800&u=5"],
    description: "Lightweight running shoes with excellent support.",
    colors: ["#000000", "#FFFFFF"],
    sizes: ["US 8", "US 9", "US 10"],
    specifications: {},
    rating: 4.2,
reviews: [
  {
    id: "r1",
    author: "Valentina Ruiz",
    rating: 5,
    comment: "La calidad de las prendas es excelente y el diseño es único. ¡Volveré a comprar sin dudas!",
    date: "2024-05-12"
  },
  {
    id: "r2",
    author: "Camila Ferreira",
    rating: 5,
    comment: "Me encantó el sweater que compré, es cómodo, suave y se nota que está bien confeccionado.",
    date: "2024-05-10"
  },
  {
    id: "r3",
    author: "Rocío Cardozo",
    rating: 4,
    comment: "Muy buena atención y el envío fue rápido. Las prendas son tal cual se ven en las fotos.",
    date: "2024-05-08"
  }
]

  },
  {
    id: "related-2",
    name: "Sport Hiking Boots",
    price: 109.99,
    images: ["https://img.heroui.chat/image/shoes?w=800&h=800&u=6"],
    description: "Durable hiking boots for all terrains.",
    colors: ["#654321", "#006400"],
    sizes: ["US 7", "US 8", "US 9"],
    specifications: {},
    rating: 4.7,
reviews: [
  {
    id: "r1",
    author: "Valentina Ruiz",
    rating: 5,
    comment: "La calidad de las prendas es excelente y el diseño es único. ¡Volveré a comprar sin dudas!",
    date: "2024-05-12"
  },
  {
    id: "r2",
    author: "Camila Ferreira",
    rating: 5,
    comment: "Me encantó el sweater que compré, es cómodo, suave y se nota que está bien confeccionado.",
    date: "2024-05-10"
  },
  {
    id: "r3",
    author: "Rocío Cardozo",
    rating: 4,
    comment: "Muy buena atención y el envío fue rápido. Las prendas son tal cual se ven en las fotos.",
    date: "2024-05-08"
  }
]

  },
  {
    id: "related-3",
    name: "Casual Canvas Shoes",
    price: 79.99,
    images: ["https://img.heroui.chat/image/shoes?w=800&h=800&u=7"],
    description: "Comfortable everyday canvas shoes.",
    colors: ["#000000", "#0000FF"],
    sizes: ["US 8", "US 9", "US 10"],
    specifications: {},
    rating: 4.0,
reviews: [
  {
    id: "r1",
    author: "Valentina Ruiz",
    rating: 5,
    comment: "La calidad de las prendas es excelente y el diseño es único. ¡Volveré a comprar sin dudas!",
    date: "2024-05-12"
  },
  {
    id: "r2",
    author: "Camila Ferreira",
    rating: 5,
    comment: "Me encantó el sweater que compré, es cómodo, suave y se nota que está bien confeccionado.",
    date: "2024-05-10"
  },
  {
    id: "r3",
    author: "Rocío Cardozo",
    rating: 4,
    comment: "Muy buena atención y el envío fue rápido. Las prendas son tal cual se ven en las fotos.",
    date: "2024-05-08"
  }
]

  },
  {
    id: "related-4",
    name: "Leather Dress Shoes",
    price: 149.99,
    images: ["https://img.heroui.chat/image/shoes?w=800&h=800&u=8"],
    description: "Elegant leather shoes for formal occasions.",
    colors: ["#000000", "#654321"],
    sizes: ["US 8", "US 9", "US 10", "US 11"],
    specifications: {},
    rating: 4.8,
reviews: [
  {
    id: "r1",
    author: "Valentina Ruiz",
    rating: 5,
    comment: "La calidad de las prendas es excelente y el diseño es único. ¡Volveré a comprar sin dudas!",
    date: "2024-05-12"
  },
  {
    id: "r2",
    author: "Camila Ferreira",
    rating: 5,
    comment: "Me encantó el sweater que compré, es cómodo, suave y se nota que está bien confeccionado.",
    date: "2024-05-10"
  },
  {
    id: "r3",
    author: "Rocío Cardozo",
    rating: 4,
    comment: "Muy buena atención y el envío fue rápido. Las prendas son tal cual se ven en las fotos.",
    date: "2024-05-08"
  }
]

  }
];


// export const products = [
//   {
//     id: 1,
//     name: "Set Animal Print Taz",
//     description: "Blusa con lazo + pantalón jogger animal print. Incluye remera oversize estampada de Taz.",
//     price: "Gs. 160.000",
//     image: ropamodelos
//   },
//   {
//     id: 2,
//     name: "Sweater Tricolor Escamas",
//     description: "Tejido grueso con relieve escamado en tonos tierra. Estilo cómodo y abrigado.",
//     price: "Consultar",
//     image: buzo
//   },
//   {
//     id: 3,
//     name: "Blusa Geométrica Minimal",
//     description: "Diseño a bloques en beige, negro y terracota. Tela fresca, corte recto.",
//     price: "Consultar",
//     image: blusa
//   },
//   {
//     id: 4,
//     name: "Falda Plisada Mostaza",
//     description: "Falda plisada con cinturón ancho, corte elegante y moderno.",
//     price: "Consultar",
//     image: pollera
//   },
//   {
//     id: 5,
//     name: "Sweater Cow Print",
//     description: "Sweaters oversize estampados con patrón de vaca. Tacto suave, corte moderno.",
//     price: "Consultar",
//     image: foto1
//   },
//   {
//     id: 6,
//     name: "Remeras Cowgirl Western",
//     description: "Remeras oversize con frases como 'Cow Spots', 'Boots are made to slay' y más. Estilo boho urbano.",
//     price: "Consultar",
//     image: foto2
//   },
//   {
//     id: 7,
//     name: "Remeras Boho Vibes / Coffee Lovers",
//     description: "Diseños con corazón bohemio, texto bold o mandalas. Colores neutros y estilo relajado.",
//     price: "Consultar",
//     image: foto3
//   },
//   {
//     id: 8,
//     name: "Sweaters Animal Print oscuro",
//     description: "Con estampado tipo manchas de vaca en negro y terracota. Corte amplio y cómodo.",
//     price: "Consultar",
//     image: foto8
//   },
//   {
//     id: 9,
//     name: "Remeras Texas Western",
//     description: "Inspiración vaquera y desert texano. Colores tierra y gráficos con cactus y botas.",
//     price: "Consultar",
//     image: foto5
//   },
//   {
//     id: 10,
//     name: "Crop Floreado & Cow Print",
//     description: "Estampas florales otoñales y cowprint blanco y negro. Mangas anchas y corte crop.",
//     price: "Consultar",
//     image: foto6
//   },
//   {
//     id: 11,
//     name: "Remeras Dodgers 22",
//     description: "Estilo deportivo americano. Corte amplio con número frontal y letras en contraste.",
//     price: "Consultar",
//     image: foto7
//   },
//   {
//     id: 12,
//     name: "Wild West Cowgirl",
//     description: "Remera estilo western con gráfico de vaquera. Disponible en blanco y negro.",
//     price: "Consultar",
//     image: foto4
//   }
// ];



// export const products = [{
//   id: "1",
//   name: "Sweater Cow Print",
//   price: 129.99,
//   description: "Sweaters oversize estampados con patrón de vaca. Tacto suave, corte moderno.",
//   images: [
//     foto1,    
//   ],
//   colors: ["#000000", "#FFFFFF", "#FF0000", "#0000FF"],
//   sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
//   specifications: {
//     "Material": "Premium Mesh and Synthetic",
//     "Sole": "Rubber",
//     "Closure": "Lace-up",
//     "Weight": "280g (Size US 9)",
//     "Origin": "Made in Vietnam"
//   },
//   rating: 4.5,
//   reviews: [
//     {
//       id: "r1",
//       author: "John Doe",
//       rating: 5,
//       comment: "Best sneakers I've ever owned! Super comfortable and stylish.",
//       date: "2024-03-15"
//     },
//     {
//       id: "r2",
//       author: "Jane Smith",
//       rating: 4,
//       comment: "Great shoes, but took a few days to break in.",
//       date: "2024-03-10"
//     }
//   ]
// }];