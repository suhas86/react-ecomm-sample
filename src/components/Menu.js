import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link, useLocation } from "react-router-dom";

export default function Menu() {
  const location = useLocation();
  return (
    <Paper square>
      <Tabs
        value={location.pathname === "/" ? false : location.pathname}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="disabled tabs example"
      >
        <Tab label="men clothing" value="/men clothing" component={Link} to="/men clothing" />
        <Tab label="jewelery" value="/jewelery" component={Link} to="/jewelery" />
        <Tab label="electronics" value="/electronics" component={Link} to="/electronics" />
        <Tab label="women clothing" value="/women clothing" component={Link} to="/women clothing" />
      </Tabs>
    </Paper>
  );
}
