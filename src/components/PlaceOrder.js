import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
  },
}));
export default function PlaceOrder() {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="subtitle1" color="primary">
          Hurray we have all the information we need to place your order{" "}
          <span role="img" description="aria-label">
            {" "}
            🎊🎊🎊🎊🎊🎊
          </span>
        </Typography>
        <Typography variant="subtitle2" color="secondary">
          <span role="img" description="aria-label">
            {" "}
            💵💵💵💵
          </span>{" "}
          Note payment will be collected on delivering your order
          <span role="img" description="aria-label">
            {" "}
            🎉🎉🎉🎉🎉🎉
          </span>
        </Typography>
      </Paper>
    </Container>
  );
}
