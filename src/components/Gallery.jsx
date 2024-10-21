import React, { useState, useEffect, useCallback } from "react";
import { styled } from "@mui/material/styles";
import ArrowRightIcon from "@mui/icons-material/ArrowForward";
import ArrowLeftIcon from "@mui/icons-material/ArrowBack";

const GalleryContainer = styled("div")({
  position: "relative",
  width: "100%",
  height: "100%",
});

const ImageContainer = styled("div")(({ width, height }) => ({
  width: width || "100%",
  height: height || "100%",
  overflow: "hidden",
  position: "relative",
}));

const MainImage = styled("img")(({ radius }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: radius || "0",
  transition: "transform 0.5s ease-in-out",
}));

const NavigationButton = styled("button")(({ theme, position }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  [position]: theme.spacing(2),
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  border: "none",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "background-color 0.2s",
  zIndex: 2,
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  "& svg": {
    fontSize: "24px",
    color: theme.palette.grey[800],
  },
}));

const ThumbnailContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(1),
  gap: theme.spacing(0.5),
}));

const Thumbnail = styled("img")(({ theme, isSelected }) => ({
  width: "117px",
  height: "95px",
  borderRadius: theme.spacing(1),
  border: isSelected ? `2px solid ${theme.palette.primary.main}` : "none",
  cursor: "pointer",
  transition: "border-color 0.3s ease-in-out",
  opacity: isSelected ? 1 : 0.7,
  "&:hover": {
    opacity: 1,
  },
}));

const Gallery = ({
  images,
  width,
  height,
  radius,
  showThumbs = false,
  className,
  currentIndex: controlledIndex,
  onSlideChange,
  autoPlay = false,
  interval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(controlledIndex || 0);

  const updateIndex = useCallback(
    (newIndex) => {
      const index =
        newIndex < 0
          ? images.length - 1
          : newIndex >= images.length
          ? 0
          : newIndex;

      setCurrentIndex(index);
      if (onSlideChange) {
        onSlideChange(index);
      }
    },
    [images.length, onSlideChange]
  );

  // Autoplay functionality
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      updateIndex(currentIndex + 1);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, currentIndex, updateIndex]);

  // Sync with controlled index
  useEffect(() => {
    if (controlledIndex !== undefined && controlledIndex !== currentIndex) {
      setCurrentIndex(controlledIndex);
    }
  }, [controlledIndex]);

  const handleNext = useCallback(() => {
    updateIndex(currentIndex + 1);
  }, [currentIndex, updateIndex]);

  const handlePrevious = useCallback(() => {
    updateIndex(currentIndex - 1);
  }, [currentIndex, updateIndex]);

  const handleThumbnailClick = useCallback(
    (index) => {
      updateIndex(index);
    },
    [updateIndex]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrevious();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrevious]);

  if (!images?.length) {
    return null;
  }

  return (
    <GalleryContainer className={className}>
      <ImageContainer width={width} height={height}>
        <NavigationButton
          onClick={handlePrevious}
          position="left"
          aria-label="Previous image"
        >
          <ArrowLeftIcon />
        </NavigationButton>

        <MainImage
          src={images[currentIndex]?.src}
          alt={images[currentIndex]?.title || `Image ${currentIndex + 1}`}
          radius={radius}
        />

        <NavigationButton
          onClick={handleNext}
          position="right"
          aria-label="Next image"
        >
          <ArrowRightIcon />
        </NavigationButton>
      </ImageContainer>

      {showThumbs && (
        <ThumbnailContainer>
          {images.map((image, index) => (
            <Thumbnail
              key={index}
              src={image.src}
              alt={image.title || `Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(index)}
              isSelected={currentIndex === index}
            />
          ))}
        </ThumbnailContainer>
      )}
    </GalleryContainer>
  );
};

export default Gallery;
