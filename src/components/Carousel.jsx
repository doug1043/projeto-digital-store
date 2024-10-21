import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Gallery from "./Gallery";

const CarouselContainer = styled("div")({
  position: "relative",
  width: "100%",
  height: "620px",
});

const InfoBox = styled("div")(({ theme }) => ({
  position: "absolute",
  color: theme.palette.grayscale.darkGrayc,
  top: "20%",
  left: "10%",
  zIndex: 1,
  maxWidth: "600px",
}));

const Title = styled("h2")(({ theme }) => ({
  color: "black",
  fontWeight: "bold",
  fontSize: "4rem",
  marginBottom: theme.spacing(2),
  textShadow: "2px 2px 4px rgba(255, 255, 255, 0.7)",
}));

const Description = styled("p")(({ theme }) => ({
  color: theme.palette.grayscale.darkGrayc,
  marginBottom: theme.spacing(3),
  fontSize: "1.5rem",
  lineHeight: 1.5,
  textShadow: "1px 1px 3px rgba(255, 255, 255, 0.5)",
}));

const StyledButton = styled("button")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  padding: "0.6em 3em",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: 500,
  transition: "background-color 0.2s",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const slides = [
  { src: "/home-slide-1.jpeg", title: "Queima de estoque Nike 🔥" },
  { src: "/home-slide-2.jpeg", title: "Queima de estoque Nike 🔥" },
  { src: "/home-slide-3.jpeg", title: "Queima de estoque Nike 🔥" },
  { src: "/home-slide-4.jpeg", title: "Queima de estoque Nike 🔥" },
  { src: "/home-slide-5.jpeg", title: "Queima de estoque Nike 🔥" },
  { src: "/home-slide-6.jpeg", title: "Queima de estoque Nike 🔥" },
  { src: "/home-slide-7.jpeg", title: "Queima de estoque Nike 🔥" },
  { src: "/home-slide-8.jpeg", title: "Queima de estoque Nike 🔥" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <CarouselContainer>
      <Gallery
        images={slides}
        width="100%"
        height="600px"
        showThumbs={false}
        currentIndex={currentIndex}
        onSlideChange={setCurrentIndex}
        autoPlay={true}
        interval={5000}
      />
      <InfoBox>
        <Title>{slides[currentIndex].title}</Title>
        <Description>
          Consequat culpa exercitation mollit nisi excepteur do do tempor
          laboris eiusmod irure consectetur.
        </Description>
        <StyledButton>Ver Ofertas</StyledButton>
      </InfoBox>
    </CarouselContainer>
  );
};

export default Carousel;
