import React from "react";
import { styled } from "@mui/system";

// Styled components permanecem os mesmos
const Container = styled("div")({
  padding: "20px 0",
  maxWidth: "1200px",
  margin: "0 auto",
});

const Title = styled("h2")({
  textAlign: "center",
  color: "#333",
  marginBottom: "40px",
  fontSize: "24px",
  fontWeight: "bold",
});

const IconsContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  gap: "40px",
  flexWrap: "wrap",
});

const IconWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
});

const IconCircle = styled("div")(({ theme }) => ({
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    transform: "translateY(-5px)",
  },
}));

const IconImage = styled("img")({
  width: "80px",
  height: "80px",
});

const IconLabel = styled("span")({
  fontSize: "14px",
  color: "#666",
});

const FeaturedCollections = () => {
  const collections = [
    {
      icon: "/shirt.svg",
      label: "Camisetas",
    },
    {
      icon: "/pants.svg",
      label: "Calças",
    },
    {
      icon: "/hat.svg",
      label: "Bonés",
    },
    {
      icon: "/headphones.svg",
      label: "Headphones",
    },
    {
      icon: "/shoes.svg",
      label: "Tênis",
    },
  ];

  return (
    <Container>
      <Title>Coleções em destaque</Title>
      <IconsContainer>
        {collections.map((item, index) => (
          <IconWrapper key={index}>
            <IconCircle>
              <IconImage src={item.icon} alt={item.label} />
            </IconCircle>
            <IconLabel>{item.label}</IconLabel>
          </IconWrapper>
        ))}
      </IconsContainer>
    </Container>
  );
};

export default FeaturedCollections;
