import React from "react";
import { IconButton, InputBase, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

// Styled Components
const HeaderContainer = styled(Box)(({ theme }) => ({
  width: "90%",
  backgroundColor: theme.palette.background.paper,
  margin: "0 auto",
  marginBottom: "10px",
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

const StyledInputBase = styled(InputBase)({
  width: "100%",
});

const StyledSearchIconButton = styled(IconButton)({
  padding: "8px",
});

const ActionsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const SignUpText = styled("span")(({ theme }) => ({
  cursor: "pointer",
  color: "darkgray",
  textDecoration: "underline",
  fontSize: "16px",
}));

const LoginButton = styled("button")(({ theme }) => ({
  width: "114px",
  height: "40px",
  borderRadius: "4px",
  fontWeight: "bold",
  fontSize: "14px",
  color: "white",
  backgroundColor: theme.palette.primary.main,
  border: "none",
  cursor: "pointer",
  padding: "8px 16px",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const CartButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const CartCount = styled("span")(({ theme }) => ({
  marginLeft: "5px",
}));

const NavigationRow = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1, 2.5),
}));

const NavLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(4),
}));

const StyledLink = styled(Link)(({ theme, isActive }) => ({
  textDecoration: "none",
  color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
  fontWeight: 500,
  position: "relative",
  padding: "6px 0",
  "&:hover": {
    color: theme.palette.primary.main,
  },
  "&:after": {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "2px",
    backgroundColor: theme.palette.primary.main,
    transform: isActive ? "scaleX(1)" : "scaleX(0)",
    transition: "transform 0.3s ease",
    transformOrigin: "center",
  },
  "&:hover:after": {
    transform: "scaleX(1)",
  },
}));

const Header = () => {
  const location = useLocation();

  const NavItem = ({ to, children }) => (
    <StyledLink to={to} isActive={location.pathname === to}>
      {children}
    </StyledLink>
  );

  return (
    <HeaderContainer>
      <TopRow>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <SearchContainer>
          <StyledInputBase
            placeholder="Pesquisar produto..."
            inputProps={{ "aria-label": "Pesquisar" }}
          />
          <StyledSearchIconButton type="submit" aria-label="search">
            <SearchIcon />
          </StyledSearchIconButton>
        </SearchContainer>

        <ActionsContainer>
          <SignUpText>Cadastre-se</SignUpText>
          <LoginButton>Entrar</LoginButton>
          <CartButton aria-label="carrinho de compras">
            <ShoppingCartIcon />
            <CartCount>2</CartCount>
          </CartButton>
        </ActionsContainer>
      </TopRow>

      <NavigationRow>
        <NavLinks>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/produtos">Produtos</NavItem>
          <NavItem to="/categorias">Categorias</NavItem>
          <NavItem to="/meus-pedidos">Meus Pedidos</NavItem>
        </NavLinks>
      </NavigationRow>
    </HeaderContainer>
  );
};

export default Header;
