import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grayscale.darkGray,
  color: theme.palette.grayscale.white,
  padding: "2em 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const FooterContent = styled(Grid)(({ theme }) => ({
  width: "80%",
  maxWidth: "1200px",
  margin: "0 auto",
}));

const FooterColumn = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "0.8em",
});

const FooterTitle = styled(Typography)({
  fontWeight: "bold",
  marginBottom: "1em",
});

const SocialIcons = styled(Box)({
  display: "flex",
  gap: "1em",
  marginTop: "1em",
});

const Copyright = styled(Typography)(({ theme }) => ({
  marginTop: "2em",
  fontSize: "0.9em",
  borderTop: `1px solid ${theme.palette.grayscale.lightGray3}`,
  paddingTop: "1em",
}));

function Footer() {
  return (
    <FooterContainer>
      <FooterContent container spacing={4}>
        <Grid item xs={12} sm={3}>
          <FooterColumn>
            <Typography variant="h6" component="div">
              <strong>Digital Store</strong>
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </Typography>
            <SocialIcons>
              <Link href="#" color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </Link>
              <Link href="#" color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </Link>
              <Link href="#" color="inherit" aria-label="Twitter">
                <TwitterIcon />
              </Link>
            </SocialIcons>
          </FooterColumn>
        </Grid>

        <Grid item xs={12} sm={3}>
          <FooterColumn>
            <FooterTitle variant="subtitle1">Informação</FooterTitle>
            <Link href="#" color="inherit">
              Sobre Drip Store
            </Link>
            <Link href="#" color="inherit">
              Segurança
            </Link>
            <Link href="#" color="inherit">
              Wishlist
            </Link>
            <Link href="#" color="inherit">
              Blog
            </Link>
            <Link href="#" color="inherit">
              Trabalhe conosco
            </Link>
            <Link href="#" color="inherit">
              Meus Pedidos
            </Link>
          </FooterColumn>
        </Grid>

        <Grid item xs={12} sm={3}>
          <FooterColumn>
            <FooterTitle variant="subtitle1">Categorias</FooterTitle>
            <Link href="#" color="inherit">
              Camisetas
            </Link>
            <Link href="#" color="inherit">
              Calças
            </Link>
            <Link href="#" color="inherit">
              Bonés
            </Link>
            <Link href="#" color="inherit">
              Headphones
            </Link>
            <Link href="#" color="inherit">
              Tênis
            </Link>
          </FooterColumn>
        </Grid>

        <Grid item xs={12} sm={3}>
          <FooterColumn>
            <FooterTitle variant="subtitle1">Contato</FooterTitle>
            <Typography variant="body2">
              Av. Santos Dumont, 1510 - 1 andar
              <br />
              Aldeota, Fortaleza - CE, 60150-161
              <br />
              (85) 3051-3411
            </Typography>
          </FooterColumn>
        </Grid>
      </FooterContent>

      <Copyright>@ 2022 Digital College</Copyright>
    </FooterContainer>
  );
}

export default Footer;
