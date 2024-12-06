import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const BuyBoxContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const ProductName = styled(Typography)({
  fontSize: "32px",
  color: "#333",
});

const Reference = styled(Typography)({
  fontSize: "12px",
  color: "#666",
});

const RatingContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

const Stars = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "4px 8px",
  borderRadius: "4px",
  backgroundColor: theme.palette.warning.main,
  color: "white",
}));

const PriceContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

const BuyButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.warning.main,
  color: "white",
  padding: "12px 24px",
  "&:hover": {
    backgroundColor: theme.palette.warning.dark,
  },
}));

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) => {
  return (
    <BuyBoxContainer>
      <ProductName>{name}</ProductName>
      <Reference>REF: {reference}</Reference>

      <RatingContainer>
        <Stars>
          {stars} <StarIcon sx={{ ml: 1 }} />
        </Stars>
        <Typography variant="body2">({rating} avaliações)</Typography>
      </RatingContainer>

      <PriceContainer>
        {priceDiscount ? (
          <>
            <Typography
              sx={{
                textDecoration: "line-through",
                color: "text.secondary",
                fontSize: "16px",
              }}
            >
              R$ {price.toFixed(2)}
            </Typography>
            <Typography variant="h5">R$ {priceDiscount.toFixed(2)}</Typography>
          </>
        ) : (
          <Typography variant="h5">R$ {price.toFixed(2)}</Typography>
        )}
      </PriceContainer>

      <Typography variant="body2">{description}</Typography>

      {children}

      <BuyButton fullWidth variant="contained">
        COMPRAR
      </BuyButton>
    </BuyBoxContainer>
  );
};

export default BuyBox;
