import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#1A2027",
  color: "#fff",
  padding: theme.spacing(4, 0),
}));

const FooterContent = styled(Box)({
  width: "80%",
  maxWidth: "100%",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "2rem",
});

const FooterColumn = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  wordBreak: "break-word",
  overflowWrap: "break-word",
});

const FooterTitle = styled(Typography)({
  fontWeight: "bold",
  marginBottom: "1rem",
  color: "#fff",
});

const SocialIcons = styled(Box)({
  display: "flex",
  gap: "1rem",
  marginTop: "1rem",
  "& svg": {
    color: "#fff",
  },
});

const StyledLink = styled(Link)({
  color: "#fff",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});

const Copyright = styled(Typography)({
  marginTop: "2rem",
  paddingTop: "1rem",
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  textAlign: "center",
  color: "#fff",
});

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            Digital Store
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </Typography>
          <SocialIcons>
            <StyledLink href="#" aria-label="Facebook">
              <FacebookIcon />
            </StyledLink>
            <StyledLink href="#" aria-label="Instagram">
              <InstagramIcon />
            </StyledLink>
            <StyledLink href="#" aria-label="Twitter">
              <TwitterIcon />
            </StyledLink>
          </SocialIcons>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle variant="subtitle1">Information</FooterTitle>
          <StyledLink href="#">About Drip Store</StyledLink>
          <StyledLink href="#">Security</StyledLink>
          <StyledLink href="#">Wishlist</StyledLink>
          <StyledLink href="#">Blog</StyledLink>
          <StyledLink href="#">Work with Us</StyledLink>
          <StyledLink href="#">My Orders</StyledLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle variant="subtitle1">Categories</FooterTitle>
          <StyledLink href="#">T-shirts</StyledLink>
          <StyledLink href="#">Pants</StyledLink>
          <StyledLink href="#">Hats</StyledLink>
          <StyledLink href="#">Headphones</StyledLink>
          <StyledLink href="#">Sneakers</StyledLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle variant="subtitle1">Contact</FooterTitle>
          <Typography variant="body2">
            Av. Santos Dumont, 1510 - 1 andar
            <br />
            Aldeota, Fortaleza - CE, 60150-161
            <br />
            (85) 3051-3411
          </Typography>
        </FooterColumn>
      </FooterContent>

      <Copyright>© 2024 Digital College</Copyright>
    </FooterContainer>
  );
}

export default Footer;
