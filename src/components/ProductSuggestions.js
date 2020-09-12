import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "./GridItem";
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: "flex",
    overflowX: "auto",
    overflowY: "hidden",
  },
}));

export default function ProductSuggestions({ products }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {products.map((product) => (
        <Grid key={product.id} container item xs={4} spacing={1}>
          <GridItem product={product} />
        </Grid>
      ))}
    </div>
  );
}
