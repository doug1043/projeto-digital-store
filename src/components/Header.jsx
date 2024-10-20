import React from "react";
import { Box, Typography, Button, InputBase, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const HeaderContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0 4px 2px -2px gray",
}));

const TopRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 20px",
}));

const LogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "120px",
});

const SearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.palette.grey[100],
  padding: "5px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  margin: "0 24px",
}));

const ActionsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const NavigationRow = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1, 2.5),
}));

const NavLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(4),
  "& a": {
    textDecoration: "none",
    color: theme.palette.text.primary,
    fontWeight: 500,
    position: "relative",
    padding: "6px 0",
    "&:hover": {
      color: theme.palette.primary.main,
    },
    "&.active": {
      color: theme.palette.primary.main,
      "&:after": {
        transform: "scaleX(1)",
      },
    },
    "&:after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: "2px",
      backgroundColor: theme.palette.primary.main,
      transform: "scaleX(0)",
      transition: "transform 0.3s ease",
      transformOrigin: "center",
    },
  },
}));

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <TopRow>
        {/* Logo */}
        <LogoContainer>
          <Logo />
        </LogoContainer>

        {/* Search Bar */}
        <SearchContainer>
          <InputBase
            placeholder="Pesquisar produto..."
            fullWidth
            inputProps={{ "aria-label": "Pesquisar" }}
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </SearchContainer>

        {/* Actions */}
        <ActionsContainer>
          <Typography
            variant="body2"
            sx={{
              cursor: "pointer",
              color: "darkgray",
              textDecoration: "underline",
              fontSize: "16px",
            }}
          >
            Cadastre-se
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "114px",
              height: "40px",
              borderRadius: "4px",
              fontWeight: "bold",
              fontSize: "14px",
              color: "white",
            }}
          >
            Entrar
          </Button>
          <IconButton aria-label="carrinho de compras" color="primary">
            <ShoppingCartIcon />
            <Typography variant="body2" sx={{ marginLeft: "5px" }}>
              2
            </Typography>
          </IconButton>
        </ActionsContainer>
      </TopRow>

      {/* Navigation */}
      <NavigationRow>
        <NavLinks>
          <Link
            to="/home"
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </Link>
          <Link
            to="/produtos"
            className={location.pathname === "/produtos" ? "active" : ""}
          >
            Produtos
          </Link>
          <Link
            to="/categorias"
            className={location.pathname === "/categorias" ? "active" : ""}
          >
            Categorias
          </Link>
          <Link
            to="/meus-pedidos"
            className={location.pathname === "/meus-pedidos" ? "active" : ""}
          >
            Meus Pedidos
          </Link>
        </NavLinks>
      </NavigationRow>
    </HeaderContainer>
  );
};

export default Header;
