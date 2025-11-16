/**
=========================================================
* Theme Wrapper Component
=========================================================
* Wraps the app with MUI ThemeProvider using custom theme
*/

import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "core/context";
import PropTypes from "prop-types";

function ThemeWrapper({ children }) {
  const { theme } = useTheme();

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeWrapper;
