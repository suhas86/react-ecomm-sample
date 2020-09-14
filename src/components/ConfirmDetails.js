import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
  },
  text: {
    marginLeft: theme.spacing(1),
  },
}));
export default function ConfirmDetails({ state }) {
  const { firstName, lastName, email, address, city, pincode } = state;
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6">Personal Details</Typography>
            <div>
              <Typography variant="subtitle1" color="primary" display="inline">
                First Name:
              </Typography>
              <Typography variant="subtitle1" color="secondary" display="inline" className={classes.text}>
                {firstName}
              </Typography>
            </div>
            <div>
              <Typography variant="subtitle1" color="primary" display="inline">
                Last Name:
              </Typography>
              <Typography variant="subtitle1" color="secondary" display="inline" className={classes.text}>
                {lastName ? lastName : "-NA-"}
              </Typography>
            </div>
            <div>
              <Typography variant="subtitle1" color="primary" display="inline">
                Email
              </Typography>
              <Typography variant="subtitle1" color="secondary" display="inline" className={classes.text}>
                {email}
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6">Shipping Address</Typography>
            <div>
              <Typography variant="subtitle1" color="primary" display="inline">
                Address:
              </Typography>
              <Typography variant="subtitle1" color="secondary" display="inline" className={classes.text}>
                {address}
              </Typography>
            </div>
            <div>
              <Typography variant="subtitle1" color="primary" display="inline">
                City:
              </Typography>
              <Typography variant="subtitle1" color="secondary" display="inline" className={classes.text}>
                {city}
              </Typography>
            </div>
            <div>
              <Typography variant="subtitle1" color="primary" display="inline">
                Pincode:
              </Typography>
              <Typography variant="subtitle1" color="secondary" display="inline" className={classes.text}>
                {pincode}
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
