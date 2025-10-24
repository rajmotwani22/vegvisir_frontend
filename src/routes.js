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
import Icon from "@mui/material/Icon";

// Dashboard routes for sidebar navigation
export const dashboardRoutes = [
  {
    name: "Home",
    icon: <Icon>home</Icon>,
    route: "/home",
  },
  {
    name: "Dashboard",
    icon: <Icon>dashboard</Icon>,
    route: "/dashboard",
  },
  {
    name: "Analytics",
    icon: <Icon>analytics</Icon>,
    route: "/analytics",
  },
  {
    name: "Users",
    icon: <Icon>people</Icon>,
    route: "/users",
  },
  {
    name: "Settings",
    icon: <Icon>settings</Icon>,
    route: "/settings",
  },
];

// Legacy routes (kept for compatibility)
const routes = [
  {
    name: "home",
    icon: <Icon>home</Icon>,
    route: "/home",
  },
  {
    name: "login",
    icon: <Icon>login</Icon>,
    route: "/login",
  },
  {
    name: "register",
    icon: <Icon>person_add</Icon>,
    route: "/register",
  },
  {
    name: "reset-password",
    icon: <Icon>lock_reset</Icon>,
    route: "/reset-password",
  },
];

export default routes;
