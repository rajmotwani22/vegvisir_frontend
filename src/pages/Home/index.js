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

// Custom components
import RutgersWalletCardFinal from "components/custom/RutgersWalletCardFinal";

function Home() {
  return (
    <Container maxWidth={false} sx={{ px: 0 }}>
      {/* Wallet Card Section */}
      <RutgersWalletCardFinal />

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
              borderRadius: ({ borders: { borderRadius } }) => borderRadius.xl,
              boxShadow: ({ boxShadows: { md } }) => md,
              border: ({ borders: { borderWidth }, palette: { black }, functions: { rgba } }) =>
                `${borderWidth[0]} solid ${rgba(black.main, 0.125)}`,
              overflow: "visible",
              transition: "all 200ms ease-out",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: ({ boxShadows: { lg } }) => lg,
              },
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
              borderRadius: ({ borders: { borderRadius } }) => borderRadius.xl,
              boxShadow: ({ boxShadows: { md } }) => md,
              border: ({ borders: { borderWidth }, palette: { black }, functions: { rgba } }) =>
                `${borderWidth[0]} solid ${rgba(black.main, 0.125)}`,
              overflow: "visible",
              transition: "all 200ms ease-out",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: ({ boxShadows: { lg } }) => lg,
              },
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
              borderRadius: ({ borders: { borderRadius } }) => borderRadius.xl,
              boxShadow: ({ boxShadows: { md } }) => md,
              border: ({ borders: { borderWidth }, palette: { black }, functions: { rgba } }) =>
                `${borderWidth[0]} solid ${rgba(black.main, 0.125)}`,
              overflow: "visible",
              transition: "all 200ms ease-out",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: ({ boxShadows: { lg } }) => lg,
              },
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
              borderRadius: ({ borders: { borderRadius } }) => borderRadius.xl,
              boxShadow: ({ boxShadows: { md } }) => md,
              border: ({ borders: { borderWidth }, palette: { black }, functions: { rgba } }) =>
                `${borderWidth[0]} solid ${rgba(black.main, 0.125)}`,
              overflow: "visible",
              transition: "all 200ms ease-out",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: ({ boxShadows: { lg } }) => lg,
              },
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
              backgroundColor: ({ palette: { white } }) => white.main,
              borderRadius: ({ borders: { borderRadius } }) => borderRadius.xl,
              boxShadow: ({ boxShadows: { md } }) => md,
              border: ({ borders: { borderWidth }, palette: { black }, functions: { rgba } }) =>
                `${borderWidth[0]} solid ${rgba(black.main, 0.125)}`,
              overflow: "visible",
              transition: "all 200ms ease-out",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: ({ boxShadows: { lg } }) => lg,
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
              backgroundColor: ({ palette: { white } }) => white.main,
              borderRadius: ({ borders: { borderRadius } }) => borderRadius.xl,
              boxShadow: ({ boxShadows: { md } }) => md,
              border: ({ borders: { borderWidth }, palette: { black }, functions: { rgba } }) =>
                `${borderWidth[0]} solid ${rgba(black.main, 0.125)}`,
              overflow: "visible",
              transition: "all 200ms ease-out",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: ({ boxShadows: { lg } }) => lg,
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
              backgroundColor: ({ palette: { white } }) => white.main,
              borderRadius: ({ borders: { borderRadius } }) => borderRadius.xl,
              boxShadow: ({ boxShadows: { md } }) => md,
              border: ({ borders: { borderWidth }, palette: { black }, functions: { rgba } }) =>
                `${borderWidth[0]} solid ${rgba(black.main, 0.125)}`,
              overflow: "visible",
              transition: "all 200ms ease-out",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: ({ boxShadows: { lg } }) => lg,
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
