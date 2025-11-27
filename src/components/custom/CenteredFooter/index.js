/**
=========================================================
* Material Kit 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MKBox from "components/base/MKBox";
import MKTypography from "components/base/MKTypography";

// Core
import { useTheme } from "core/context";

function CenteredFooter({
  company = { href: "https://www.creative-tim.com/", name: "Creative Tim" },
  links = [
    { href: "https://www.creative-tim.com/", name: "Company" },
    { href: "https://www.creative-tim.com/presentation", name: "About Us" },
    { href: "https://www.creative-tim.com/presentation", name: "Team" },
    { href: "https://www.creative-tim.com/templates/react", name: "Products" },
    { href: "https://www.creative-tim.com/blog", name: "Blog" },
    { href: "https://www.creative-tim.com/license", name: "License" },
  ],
  light = false,
}) {
  const { mode } = useTheme();

  const renderLinks = links.map((link) => (
    <MKTypography
      key={link.name}
      component={Link}
      href={link.href}
      variant="body2"
      sx={{
        color: ({ palette: { mode, text } }) =>
          mode === "dark" ? text.main : text.secondary || "#7b809a",
        fontWeight: "regular",
        "&:hover": {
          color: ({ palette: { primary } }) => primary.main,
        },
      }}
    >
      {link.name}
    </MKTypography>
  ));

  return (
    <MKBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            spacing={{ xs: 2, lg: 3, xl: 6 }}
            mb={3}
          >
            {renderLinks}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <MKTypography
            variant="body2"
            sx={{
              color: ({ palette: { mode, text } }) =>
                mode === "dark" ? text.main : text.secondary || "#7b809a",
            }}
          >
            Copyright 2025 Project by Vegvisir Team
          </MKTypography>
        </Grid>
      </Grid>
    </MKBox>
  );
}

// Typechecking props for the CenteredFooter
CenteredFooter.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  light: PropTypes.bool,
};

export default CenteredFooter;
