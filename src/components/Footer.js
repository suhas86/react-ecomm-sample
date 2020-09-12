import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    color: theme.palette.secondary.light,
    position: "absolute",
    left: 0,
    bottom: "-190px",
    width: "100%",
    height: 80,
  },
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Typography variant="subtitle1">
        <p style={{ float: "right" }}>&copy; Copyright 2020. All Rights Reserved.</p>
      </Typography>
    </footer>
  );
}
