import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Styled components
const ProductCardWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "white",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  transition: "box-shadow 0.3s ease-in-out",
  "&:hover": {
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
}));

const DiscountBadge = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(3.5),
  left: theme.spacing(3.5),
  backgroundColor: "#FFE44D",
  color: theme.palette.primary.main,
  padding: "2px 8px",
  borderRadius: "999px",
  fontSize: "1.0rem",
  fontWeight: "bold",
  zIndex: 1,
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  paddingTop: "100%",
  marginBottom: theme.spacing(2),
  overflow: "hidden",
  "& img": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease-in-out",
  },
  "&:hover img": {
    transform: "scale(1.05)",
  },
}));

const ProductCardListening = ({ product }) => {
  const hasDiscount = product.priceDiscount !== undefined;
  const discount = hasDiscount
    ? Math.round(
        ((product.price - product.priceDiscount) / product.price) * 100
      )
    : 0;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/produtos/1"); // Redirecionar para a URL fixa
  };

  return (
    <ProductCardWrapper onClick={handleClick}>
      {hasDiscount && discount > 0 && (
        <DiscountBadge>{discount}% OFF</DiscountBadge>
      )}
      <ImageWrapper>
        <img src={product.image} alt={product.name} />
      </ImageWrapper>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ textTransform: "uppercase" }}
        >
          {product.category}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          {product.name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {hasDiscount && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textDecoration: "line-through" }}
            >
              ${product.price}
            </Typography>
          )}
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            ${hasDiscount ? product.priceDiscount : product.price}
          </Typography>
        </Box>
      </Box>
    </ProductCardWrapper>
  );
};

export default ProductCardListening;
