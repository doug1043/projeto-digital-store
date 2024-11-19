import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layout";
import Gallery from "../../components/Gallery";
import BuyBox from "../../components/BuyBox";
import ProductOptions from "../../components/ProductOptions";
import Section from "../../components/Section";
import ProductCardListening from "../../components/ProductCardListening";
import { Box, Container, Typography, Grid } from "@mui/material";

const ProductViewPage = () => {
  const { id } = useParams();

  const productImages = [
    { src: "/produc-image-1.jpeg" },
    { src: "/produc-image-2.jpeg" },
    { src: "/produc-image-3.jpeg" },
    { src: "/produc-image-4.jpeg" },
    { src: "/produc-image-5.jpeg" },
  ];

  const sizes = ["39", "40", "41", "42", "43"];
  const colors = ["#87CEEB", "#FF69B4", "#808080", "#4682B4"];

  const recommendedProducts = [
    {
      name: "K-Swiss V8 - Masculino",
      image: "/produc-image-1.jpeg",
      price: 200,
      priceDiscount: 100,
      category: "Tênis",
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "/produc-image-2.jpeg",
      price: 200,
      priceDiscount: 100,
      category: "Tênis",
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "/produc-image-3.jpeg",
      price: 200,
      priceDiscount: 100,
      category: "Tênis",
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "/produc-image-4.jpeg",
      price: 200,
      category: "Tênis",
    },
  ];

  return (
    <Layout>
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", gap: 4, mb: 4 }}>
          <Gallery
            images={productImages}
            showThumbs
            width="700px"
            height="570px"
            radius="4px"
          />

          <BuyBox
            name="Tênis Nike Revolution 6 Next Nature Masculino"
            reference="REF:25419711"
            stars={4.7}
            rating={100}
            price={219.0}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
          >
            <Box>
              <Typography variant="subtitle1">Tamanho</Typography>
              <ProductOptions
                options={sizes}
                radius="4px"
                shape="square"
                type="text"
              />
            </Box>
            <Box>
              <Typography variant="subtitle1">Cor</Typography>
              <ProductOptions options={colors} shape="circle" type="color" />
            </Box>
          </BuyBox>
        </Box>

        <Section
          title="Produtos recomendados"
          titleAlign="left"
          link={{ text: "Ver todos", href: "/produtos" }}
        >
          <Grid container spacing={3}>
            {recommendedProducts.map((product, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <ProductCardListening product={product} />
              </Grid>
            ))}
          </Grid>
        </Section>
      </Container>
    </Layout>
  );
};

export default ProductViewPage;
