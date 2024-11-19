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
      gap={2}
      padding={2}
    >
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          name={product.name}
          price={`R$ ${product.price.toFixed(2)}`}
          priceDiscount={
            product.priceDiscount
              ? `R$ ${product.priceDiscount.toFixed(2)}`
              : undefined
          }
        />
      ))}
    </Box>
  );
};

export default ProductListing;
