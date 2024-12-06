import React from "react";
import Section from "./Section";
import ProductGrid from "./ProductGrid";

const FeaturedProducts = () => {
  const products = [
    {
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      image: "/produc-image-1.jpeg",
      price: 200,
      priceDiscount: 100,
    },
    {
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      image: "/produc-image-2.jpeg",
      price: 200,
      priceDiscount: 100,
    },
    {
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      image: "/produc-image-3.jpeg",
      price: 200,
      priceDiscount: 100,
    },
    {
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      image: "/produc-image-4.jpeg",
      price: 200,
      priceDiscount: 100,
    },
    {
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      image: "/produc-image-1.jpeg",
      price: 200,
      priceDiscount: 100,
    },
    {
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      image: "/produc-image-2.jpeg",
      price: 200,
      priceDiscount: 100,
    },
    {
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      image: "/produc-image-3.jpeg",
      price: 200,
      priceDiscount: 100,
    },
    {
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      image: "/produc-image-4.jpeg",
      price: 200,
      priceDiscount: 100,
    },
  ];

  return (
    <Section
      title="Produtos em alta"
      titleAlign="left"
      link={{
        text: "Ver todos →",
        href: "#",
      }}
    >
      <ProductGrid products={products} />
    </Section>
  );
};

export default FeaturedProducts;
