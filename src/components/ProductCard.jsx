import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Estilizando a imagem do produto
const ProductImage = styled("img")({
  width: "292px",
  height: "321px",
  borderRadius: "8px",
});

// Estilizando o container do card
const CardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  backgroundColor: theme.palette.grayscale.lightGray3, // Exemplo usando lightGray3
  marginBottom: theme.spacing(2),
}));

// Estilizando o preço original com linha cortada
const OriginalPrice = styled(Typography)(({ theme }) => ({
  color: theme.palette.grayscale.lightGray, // Cor lightGray
  fontSize: "24px",
  textDecoration: "line-through",
}));

// Estilizando o preço com desconto
const DiscountedPrice = styled(Typography)(({ theme }) => ({
  color: theme.palette.grayscale.darkGray, // Cor darkGray
  fontSize: "24px",
}));

// Estilizando o nome do produto
const ProductName = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  fontWeight: "bold",
  color: theme.palette.grayscale.darkGray, // Cor darkGray
  fontSize: "18px",
}));

const ProductCard = ({ image, name, price, priceDiscount }) => {
  return (
    <CardContainer>
      {/* Imagem do produto */}
      <ProductImage src={image} alt={name} />

      {/* Nome do produto */}
      <ProductName>{name}</ProductName>

      {/* Renderizando o preço */}
      {priceDiscount ? (
        <>
          <OriginalPrice>{price}</OriginalPrice>
          <DiscountedPrice>{priceDiscount}</DiscountedPrice>
        </>
      ) : (
        <DiscountedPrice>{price}</DiscountedPrice>
      )}
    </CardContainer>
  );
};

export default ProductCard;
