import React from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#C92071",
    },
    secondary: {
      main: "#B5B6F2",
    },
    tertiary: {
      main: "#991956",
    },
    error: {
      main: "#EE4266",
    },
    success: {
      main: "#52CA76",
    },
    warning: {
      main: "#F6AA1C",
    },
    grayscale: {
      darkGrayc: "#1F1F1F",
      darkGray2: "#474747",
      darkGray3: "#666666",
      lightGrayc: "#8F8F8F",
      lightGray2: "#CCCCCC",
      lightGray3: "#F5F5F5",
      whitec: "#FFFFFF",
    },
  },
});

export const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);
