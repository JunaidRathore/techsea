import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "rgba(86, 59, 219, 1)",
      black: "rgba(16, 20, 25, 1)",
      sidebarBg: "rgba(249, 249, 249, 1)",
      background: "rgba(235, 240, 255, 1)",
      grayscale10: "rgba(224, 225, 226, 1)",
      grayscale50: "rgba(128, 130, 136, 1)",
      red: "rgba(239, 23, 23, 1)",
      tableline: "rgba(229, 231, 235, 1)",
      textbody: "rgba(111, 128, 159, 1)",
      textheading: "rgba(16, 36, 79, 1)",
      typebody: "rgba(81, 102, 145, 1)",
    },
  },
  fonts: {
    body: "Geist, system-ui, sans-serif",
    heading: "Geist, system-ui, sans-serif",
  },
});

export default theme;
