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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

// @mui icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleIcon from "@mui/icons-material/People";
import AssessmentIcon from "@mui/icons-material/Assessment";

// Material Kit 2 PRO React components
import MKBox from "components/base/MKBox";
import MKTypography from "components/base/MKTypography";
import MKButton from "components/base/MKButton";

// Material Kit 2 PRO React examples

// Images
import bgImage from "assets/images/bg-presentation.jpg";

function Home() {
  return (
    <Container maxWidth={false} sx={{ px: 0 }}>
      {/* Hero Section */}
      <MKBox
        mb={6}
        sx={{
          background: `linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 3,
          p: { xs: 4, md: 6 },
          mx: 3,
          color: "white",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.2) 100%)",
            zIndex: 1,
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Chip
            label="Welcome Back"
            color="primary"
            sx={{
              mb: 2,
              backgroundColor: "rgba(255,255,255,0.2)",
              color: "white",
              fontWeight: 500,
            }}
          />
          <MKTypography
            variant="h1"
            fontWeight="bold"
            mb={2}
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
              [breakpoints.down("sm")]: {
                fontSize: size["2xl"],
              },
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            })}
          >
            Dashboard
          </MKTypography>
          <MKTypography
            variant="h6"
            mb={4}
            sx={{
              opacity: 0.95,
              maxWidth: "600px",
              mx: "auto",
              fontWeight: 300,
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            Manage your data, track performance, and make informed decisions with our comprehensive
            dashboard.
          </MKTypography>
        </Box>
      </MKBox>

      {/* Quick Stats */}
      <Grid container spacing={3} mb={6} sx={{ px: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              p: 3,
              textAlign: "center",
              height: "100%",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              borderRadius: 2,
              boxShadow: "0 8px 32px rgba(102, 126, 234, 0.3)",
            }}
          >
            <TrendingUpIcon sx={{ fontSize: 40, mb: 1 }} />
            <MKTypography variant="h4" fontWeight="bold" mb={1}>
              1,234
            </MKTypography>
            <MKTypography variant="body2" sx={{ opacity: 0.9 }}>
              Total Users
            </MKTypography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              p: 3,
              textAlign: "center",
              height: "100%",
              background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              color: "white",
              borderRadius: 2,
              boxShadow: "0 8px 32px rgba(240, 147, 251, 0.3)",
            }}
          >
            <AnalyticsIcon sx={{ fontSize: 40, mb: 1 }} />
            <MKTypography variant="h4" fontWeight="bold" mb={1}>
              98.5%
            </MKTypography>
            <MKTypography variant="body2" sx={{ opacity: 0.9 }}>
              Uptime
            </MKTypography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              p: 3,
              textAlign: "center",
              height: "100%",
              background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
              color: "white",
              borderRadius: 2,
              boxShadow: "0 8px 32px rgba(79, 172, 254, 0.3)",
            }}
          >
            <AssessmentIcon sx={{ fontSize: 40, mb: 1 }} />
            <MKTypography variant="h4" fontWeight="bold" mb={1}>
              567
            </MKTypography>
            <MKTypography variant="body2" sx={{ opacity: 0.9 }}>
              Reports
            </MKTypography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              p: 3,
              textAlign: "center",
              height: "100%",
              background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
              color: "white",
              borderRadius: 2,
              boxShadow: "0 8px 32px rgba(67, 233, 123, 0.3)",
            }}
          >
            <PeopleIcon sx={{ fontSize: 40, mb: 1 }} />
            <MKTypography variant="h4" fontWeight="bold" mb={1}>
              89
            </MKTypography>
            <MKTypography variant="body2" sx={{ opacity: 0.9 }}>
              Active Teams
            </MKTypography>
          </Card>
        </Grid>
      </Grid>

      {/* Feature Cards */}
      <Grid container spacing={4} sx={{ px: 3 }}>
        <Grid item xs={12} lg={4}>
          <Card
            sx={{
              p: 4,
              height: "100%",
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.05)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
              },
            }}
          >
            <MKBox textAlign="center" mb={3}>
              <MKBox
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <DashboardIcon sx={{ fontSize: 32, color: "white" }} />
              </MKBox>
              <MKTypography variant="h5" fontWeight="bold" mb={2}>
                Dashboard Overview
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={3} sx={{ lineHeight: 1.6 }}>
                Get comprehensive insights into your data with our intuitive dashboard interface.
              </MKTypography>
            </MKBox>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              fullWidth
              sx={{ borderRadius: 2 }}
            >
              Get Started
            </MKButton>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card
            sx={{
              p: 4,
              height: "100%",
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.05)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
              },
            }}
          >
            <MKBox textAlign="center" mb={3}>
              <MKBox
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <AnalyticsIcon sx={{ fontSize: 32, color: "white" }} />
              </MKBox>
              <MKTypography variant="h5" fontWeight="bold" mb={2}>
                Analytics
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={3} sx={{ lineHeight: 1.6 }}>
                Track performance metrics and generate detailed reports for better decision making.
              </MKTypography>
            </MKBox>
            <MKButton
              variant="gradient"
              color="success"
              size="large"
              fullWidth
              sx={{ borderRadius: 2 }}
            >
              View Analytics
            </MKButton>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card
            sx={{
              p: 4,
              height: "100%",
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.05)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
              },
            }}
          >
            <MKBox textAlign="center" mb={3}>
              <MKBox
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <SettingsIcon sx={{ fontSize: 32, color: "white" }} />
              </MKBox>
              <MKTypography variant="h5" fontWeight="bold" mb={2}>
                Settings
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={3} sx={{ lineHeight: 1.6 }}>
                Customize your experience with our flexible and intuitive settings panel.
              </MKTypography>
            </MKBox>
            <MKButton
              variant="gradient"
              color="warning"
              size="large"
              fullWidth
              sx={{ borderRadius: 2 }}
            >
              Configure
            </MKButton>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
