import React from "react";
import { Box } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductListing = ({ products }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={2} // Espaçamento entre os cards
      padding={2}
    >
      {products.map((product, index) => (
        <ProductCard
          key={index} // Utilize um identificador único se disponível
          image={product.image}
          name={product.name}
          price={`R$ ${product.price.toFixed(2)}`} // Formatação do preço
          priceDiscount={
            product.priceDiscount
              ? `R$ ${product.priceDiscount.toFixed(2)}`
              : undefined
          } // Condicional para desconto
        />
      ))}
    </Box>
  );
};

export default ProductListing;
