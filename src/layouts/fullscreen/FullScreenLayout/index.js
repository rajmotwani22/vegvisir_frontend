/**
=========================================================
* FullScreen Layout
=========================================================
* FullScreen layout for chat interface (no navbar/sidebar)
*/

import PropTypes from "prop-types";

// @mui material components
import Box from "@mui/material/Box";

function FullScreenLayout({ children }) {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        margin: 0,
        padding: 0,
        backgroundColor: ({ palette: { grey } }) => grey[50],
        position: "relative",
      }}
    >
      {/* Main content */}
      {children}
    </Box>
  );
}

FullScreenLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FullScreenLayout;
