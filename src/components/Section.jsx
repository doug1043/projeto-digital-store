import React from "react";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import { styled } from "@mui/system";

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.grayscale.darkGray2, // Cor darkGray2
  fontSize: "24px",
  fontWeight: "bold",
  titleAlign: "left",
}));

const StyledLink = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.primary.main, // Cor primary
  fontSize: "18px",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  width: "90%",
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(4),
  margin: "0 auto",
}));

const Header = styled(Box)(({ titleAlign }) => ({
  display: "flex",
  justifyContent: titleAlign === "center" ? "center" : "space-between",
  alignItems: "center",
  marginBottom: "16px",
}));

const Section = ({ title, link, children }) => {
  return (
    <SectionContainer>
      {/* Header para o título e link */}
      <Header>
        {/* Título da seção */}
        <Title>{title}</Title>

        {/* Link opcional */}
        {link && (
          <StyledLink
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.text}
          </StyledLink>
        )}
      </Header>

      {/* Conteúdo dinâmico passado via children */}
      <Box>{children}</Box>
    </SectionContainer>
  );
};

export default Section;
