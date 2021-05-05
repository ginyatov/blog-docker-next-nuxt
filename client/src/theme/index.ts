import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { colors } from "@theme/colors";
import components from "@theme/Components";

const breakpoints = createBreakpoints({
  sm: "560px",
  md: "768px",
  lg: "960px",
  xl: "1100px",
  xll: "1400px",
});

const fonts = {
  fonts: {
    body: "Polymer, sans-serif",
    heading: "PolymerDi, sans-serif",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
  },
  lineHeights: {
    xs: "20px",
    sm: "22px",
    md: "24px",
    lg: "26px",
    xl: "28px",
  },
};

const sizes = {
  xl: "1290px",
};

export const themeChackra = extendTheme({
  breakpoints,
  sizes,
  colors,
  components,
  ...fonts,
});
