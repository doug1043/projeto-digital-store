import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowForward"; // Altere para o caminho correto do ícone
import ArrowLeftIcon from "@mui/icons-material/ArrowBack"; // Altere para o caminho correto do ícone
import { styled } from "@mui/material/styles";

const ImageContainer = styled(Box)(({ width, height }) => ({
  width: width,
  height: height,
  overflow: "hidden",
  position: "relative",
}));

const MainImage = styled("img")(({ radius }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: radius,
  transition: "transform 0.5s ease-in-out",
}));

const ThumbnailContainer = styled(Box)(({ radius }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
  gap: "5px",
}));

const Thumbnail = styled("img")(({ isSelected, radius }) => ({
  width: "117px",
  height: "95px",
  borderRadius: radius,
  border: isSelected ? "2px solid" : "none",
  borderColor: "primary.main",
  cursor: "pointer",
  transition: "border 0.3s ease-in-out",
}));

const Gallery = ({ images, width, height, radius, showThumbs, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Box className={className}>
      <ImageContainer width={width} height={height}>
        {currentIndex > 0 && (
          <IconButton
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            sx={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <ArrowLeftIcon />
          </IconButton>
        )}

        <MainImage
          src={images[currentIndex]?.src}
          alt={`Image ${currentIndex + 1}`}
          radius={radius}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        />

        {currentIndex < images.length - 1 && (
          <IconButton
            onClick={handleNext}
            disabled={currentIndex === images.length - 1}
            sx={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <ArrowRightIcon />
          </IconButton>
        )}
      </ImageContainer>

      {showThumbs && (
        <ThumbnailContainer radius={radius}>
          {images.map((image, index) => (
            <Thumbnail
              key={index}
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(index)}
              isSelected={currentIndex === index}
              radius={radius}
            />
          ))}
        </ThumbnailContainer>
      )}
    </Box>
  );
};

export default Gallery;
