import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const BoxLayout = styled("Box")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
}));

const Layout = ({ children }) => {
  return (
    <BoxLayout>
      {/* Componente do cabeçalho */}
      <Header />

      {/* Conteúdo dinâmico das páginas */}
      <Box component="main" flexGrow={1}>
        {children}
      </Box>

      {/* Componente do rodapé */}
      <Footer />
    </BoxLayout>
  );
};

export default Layout;
