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

// Material Kit 2 PRO React components
import MKBox from "components/base/MKBox";
import MKTypography from "components/base/MKTypography";
import MKButton from "components/base/MKButton";

function Analytics() {
  return (
    <Container maxWidth={false} sx={{ px: 0 }}>
      {/* Header Section */}
      <MKBox mb={6}>
        <MKTypography variant="h4" fontWeight="bold" mb={2}>
          Analytics Dashboard
        </MKTypography>
        <MKTypography variant="body1" color="text">
          Comprehensive analytics and insights for your data. Track performance and make informed
          decisions.
        </MKTypography>
      </MKBox>

      {/* Analytics Cards */}
      <Grid container spacing={4} sx={{ px: 3 }}>
        <Grid item xs={12} lg={8}>
          <Card
            sx={{
              p: 4,
              height: "100%",
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <MKTypography variant="h5" fontWeight="bold" mb={3}>
              Performance Metrics
            </MKTypography>
            <MKBox
              sx={{
                height: 300,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0,0,0,0.02)",
                borderRadius: 2,
                border: "2px dashed rgba(0,0,0,0.1)",
              }}
            >
              <MKTypography variant="body1" color="text.secondary">
                Chart visualization would go here
              </MKTypography>
            </MKBox>
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
            }}
          >
            <MKTypography variant="h5" fontWeight="bold" mb={3}>
              Key Insights
            </MKTypography>
            <MKBox mb={3}>
              <MKTypography variant="body2" color="text.secondary" mb={1}>
                Conversion Rate
              </MKTypography>
              <MKTypography variant="h4" fontWeight="bold" color="success.main">
                24.5%
              </MKTypography>
            </MKBox>
            <MKBox mb={3}>
              <MKTypography variant="body2" color="text.secondary" mb={1}>
                Page Views
              </MKTypography>
              <MKTypography variant="h4" fontWeight="bold" color="info.main">
                12.3K
              </MKTypography>
            </MKBox>
            <MKBox mb={3}>
              <MKTypography variant="body2" color="text.secondary" mb={1}>
                Bounce Rate
              </MKTypography>
              <MKTypography variant="h4" fontWeight="bold" color="warning.main">
                18.2%
              </MKTypography>
            </MKBox>
          </Card>
        </Grid>
      </Grid>

      {/* Additional Analytics */}
      <Grid container spacing={4} sx={{ px: 3, mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              p: 4,
              height: "100%",
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <MKTypography variant="h5" fontWeight="bold" mb={2}>
              Traffic Sources
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              Understand where your traffic is coming from.
            </MKTypography>
            <MKButton variant="gradient" color="info" size="large" fullWidth>
              View Details
            </MKButton>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              p: 4,
              height: "100%",
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <MKTypography variant="h5" fontWeight="bold" mb={2}>
              User Behavior
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              Analyze user interactions and engagement patterns.
            </MKTypography>
            <MKButton variant="gradient" color="success" size="large" fullWidth>
              Analyze
            </MKButton>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Analytics;
