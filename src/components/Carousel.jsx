import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Gallery from "./Gallery"; // Ajuste o caminho conforme necessário

// Estilização usando styled
const InfoBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 16,
  left: 16,
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "white",
  padding: "0.6em 1.2em",
  borderRadius: "8px",
  marginTop: theme.spacing(2),
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

const slides = [
  { src: "/home-slide-1.jpeg" },
  { src: "/home-slide-2.jpeg" },
  { src: "/home-slide-3.jpeg" },
];

const Carousel = () => {
  return (
    <Box sx={{ position: "relative", width: "100%", height: "681px" }}>
      <Gallery images={slides} width="1440px" height="681px" />
      <InfoBox>
        <Typography
          variant="h5"
          style={{ color: "white", textDecoration: "none" }}
        >
          Título do Slide
        </Typography>
        <StyledButton>Ver Mais</StyledButton>
      </InfoBox>
    </Box>
  );
};

export default Carousel;
