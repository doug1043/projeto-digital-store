import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Componente do cabeçalho */}
      <Header />

      {/* Conteúdo dinâmico das páginas */}
      <Box component="main" flexGrow={1}>
        {children}
      </Box>

      {/* Componente do rodapé */}
      <Footer />
    </Box>
  );
};

export default Layout;
