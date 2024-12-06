import React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const CardWrapper = styled("div")(({ theme }) => ({
  width: "450px",
  backgroundColor: "#F8F8F8",
  borderRadius: theme.spacing(1),
  position: "relative",
  overflow: "hidden",
}));

const DiscountTag = styled("span")(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(3),
  left: theme.spacing(3),
  backgroundColor: "#C1FF72",
  padding: "4px 12px",
  borderRadius: "100px",
  fontSize: "18px",
  color: theme.palette.tertiary.main,
  fontWeight: "bold",
}));

const ProductImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: theme.spacing(1.5),
  marginBottom: theme.spacing(2),
}));

const BuyButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.grayscale.whitec,
  position: "absolute",
  top: theme.spacing(25),
  left: theme.spacing(3),
  color: theme.palette.primary.main,
  padding: "0.6em 3em",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "background-color 0.2s",
  "&:hover": {
    backgroundColor: theme.palette.grayscale.lightGray2,
  },
}));

const ProductCard = ({ title, image, discount }) => {
  return (
    <CardWrapper>
      {discount && <DiscountTag>{discount} OFF</DiscountTag>}
      <ProductImage src={image} alt={title} loading="lazy" />
      <BuyButton>Comprar</BuyButton>
    </CardWrapper>
  );
};

export default ProductCard;
