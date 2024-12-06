import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const OptionsContainer = styled(Box)(() => ({
  display: "flex",
  gap: "8px",
  flexWrap: "wrap",
}));

const Option = styled(Box)(
  ({ shape, radius, type, isSelected, option, theme }) => ({
    width: shape === "circle" ? "31px" : "46px",
    height: shape === "circle" ? "31px" : "46px",
    borderRadius: shape === "circle" ? "50%" : radius,
    border: isSelected
      ? `2px solid ${theme.palette.primary.main}`
      : "1px solid #E0E0E0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    backgroundColor:
      type === "color"
        ? option
        : isSelected
        ? theme.palette.primary.main
        : "transparent",
    color: isSelected ? theme.palette.common.white : theme.palette.text.primary,
    ...(type === "text" && {
      fontSize: "14px",
      fontWeight: "bold",
    }),
    ...(type === "color" && {
      boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
    }),
  })
);

const ProductOptions = ({
  options,
  radius = "4px",
  shape = "square",
  type = "text",
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <OptionsContainer>
      {options.map((option, index) => (
        <Option
          key={index}
          shape={shape}
          radius={radius}
          type={type}
          option={option}
          isSelected={selectedOption === index}
          onClick={() => setSelectedOption(index)}
        >
          {type === "text" ? option : null}
        </Option>
      ))}
    </OptionsContainer>
  );
};

export default ProductOptions;
