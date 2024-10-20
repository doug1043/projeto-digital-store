import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { minWidth, styled } from "@mui/system";
import Carousel from "../../components/Carousel";
import Layout from "../../layout";
import ProductListing from "../../components/ProductListening";
import oferta from "../../assets/oferta.png";

// Estilizando o componente da imagem
const StyledImage = styled("img")(({ theme }) => ({
  height: "auto",
  borderRadius: "8px",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "750px",
  },
}));

// Estilizando o texto "Oferta especial"
const SpecialOffer = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: "bold",
  fontSize: "1.2em",
}));

// Estilizando o botão "Ver Oferta"
const OfferButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "white",
  padding: "10px 20px",
  borderRadius: "8px",
  fontWeight: "bold",
  marginTop: theme.spacing(2),
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

const HomePage = () => {
  const products = [
    {
      name: "Nome do produto 1",
      image: "https://url.imagem/do/produto1.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      name: "Nome do produto 2",
      image: "https://url.imagem/do/produto2.png",
      price: 49.9,
    },
  ];

  return (
    <Layout>
      {/* Primeiro Box para o Carousel */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          padding: 4,
          backgroundColor: "#f9f9f9",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          marginBottom: 4,
        }}
      >
        <Carousel />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          padding: 4,
          backgroundColor: "#f9f9f9",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          marginBottom: 4,
        }}
      >
        <ProductListing products={products} />
      </Box>

      {/* Segundo Box para o conteúdo do produto */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          padding: 4,
          backgroundColor: "#f9f9f9",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <StyledImage src={oferta} alt="Air Jordan edição de colecionador" />

        <Box
          sx={{
            marginLeft: { xs: 0, sm: 4 },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <SpecialOffer>Oferta especial</SpecialOffer>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Air Jordan edição de colecionador
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </Typography>
          <OfferButton>Ver Oferta</OfferButton>
        </Box>
      </Box>
    </Layout>
  );
};

export default HomePage;
