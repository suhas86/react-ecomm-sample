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
        value={!location.state ? false : location.state.category}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="Menu"
      >
        <Tab
          label="men clothing"
          value="men clothing"
          component={Link}
          to={{ pathname: "/men clothing", state: { category: "men clothing" } }}
        />
        <Tab
          label="jewelery"
          value="jewelery"
          component={Link}
          to={{ pathname: "/jewelery", state: { category: "jewelery" } }}
        />
        <Tab
          label="electronics"
          value="electronics"
          component={Link}
          to={{ pathname: "/electronics", state: { category: "electronics" } }}
        />
        <Tab
          label="women clothing"
          value="women clothing"
          component={Link}
          to={{ pathname: "/women clothing", state: { category: "women clothing" } }}
        />
      </Tabs>
    </Paper>
  );
}
