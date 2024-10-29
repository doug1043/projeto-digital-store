import React from "react";
import { styled } from "@mui/material/styles";
import Layout from "../../layout";
import oferta from "../../assets/oferta.png";
import Section from "../../components/Section";
import Carousel from "../../components/Carousel";
import ProductCard from "../../components/ProductCard";

const ProductSection = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
  alignItems: "center",
  width: "100%",
}));

const ProductImage = styled("img")(({ theme }) => ({
  height: "auto",
  width: "100%",
  maxWidth: "100%",
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.up("sm")]: {
    maxWidth: "550px",
    marginBottom: 0,
  },
}));

const ProductContent = styled("div")(({ theme }) => ({
  textAlign: "center",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    textAlign: "left",
    marginLeft: theme.spacing(4),
    maxWidth: "30%",
  },
}));

const SpecialOfferTag = styled("span")(({ theme }) => ({
  display: "inline-block",
  color: theme.palette.primary.main,
  fontWeight: 700,
  fontSize: "1.2em",
  marginBottom: theme.spacing(2),
}));

const ProductTitle = styled("h2")(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
}));

const ProductDescription = styled("p")(({ theme }) => ({
  fontSize: "1rem",
  lineHeight: 1.6,
  marginBottom: theme.spacing(3),
  color: theme.palette.text.secondary,
}));

const OfferButton = styled("button")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  padding: "12px 24px",
  borderRadius: theme.spacing(1),
  border: "none",
  fontWeight: 700,
  fontSize: "1rem",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
    transform: "translateY(-2px)",
  },
  "&:active": {
    transform: "translateY(0)",
  },
}));

const CollectionCards = styled("div")(({ theme }) => ({
  padding: "16px 0",
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
}));

const HomePage = () => {
  const products = [
    {
      name: "Novo drop supreme",
      image: "/collection-1.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      name: "Coleção Adidas",
      image: "/collection-2.png",
      price: 49.9,
    },
    {
      name: "Novo beats bass",
      image: "/collection-3.png",
      price: 49.9,
    },
  ];

  return (
    <Layout>
      {/* Carousel */}
      <Carousel />

      {/* Coleções em destaque */}
      <Section title="Coleções em destaque">
        <CollectionCards>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.name}
              image={product.image}
              discount="30%"
            />
          ))}
        </CollectionCards>
      </Section>

      {/* <Section title="Oferta Especial" link={{ text: "Ver Mais", href: "#" }}></Section> */}

      <ProductSection>
        <ProductImage
          src={oferta}
          alt="Air Jordan edição de colecionador"
          loading="lazy"
        />

        <ProductContent>
          <SpecialOfferTag>Oferta especial</SpecialOfferTag>
          <ProductTitle>Air Jordan edição de colecionador</ProductTitle>
          <ProductDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </ProductDescription>
          <OfferButton>Ver Oferta</OfferButton>
        </ProductContent>
      </ProductSection>
    </Layout>
  );
};

export default HomePage;
