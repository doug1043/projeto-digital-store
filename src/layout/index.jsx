import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const BoxLayout = styled("div")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  width: "100%",
  backgroundColor: theme.palette.background.default,
}));

const MainContent = styled(Container)(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(3),
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4),
  },
}));

const HeaderWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.background.paper,
}));

const FooterWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.background.paper,
}));

const Layout = ({ children }) => {
  return (
    <BoxLayout>
      <HeaderWrapper>
        <Container maxWidth="xl" disableGutters>
          <Header />
        </Container>
      </HeaderWrapper>

      <MainContent component="main" maxWidth="xl">
        {children}
      </MainContent>

      <FooterWrapper>
        <Container maxWidth="xl" disableGutters>
          <Footer />
        </Container>
      </FooterWrapper>
    </BoxLayout>
  );
};

export default Layout;
