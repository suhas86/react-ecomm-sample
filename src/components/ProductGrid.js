import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Fab from "@material-ui/core/Fab";
const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    margin: theme.spacing(2),
    // flexGrow: 1,
  },
  media: {
    height: "auto",
    maxWidth: 300,
    width: "auto",
    maxHeight: 300,
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  container: {
    flex: 1,
    display: "flex",
    overflowX: "auto",
    overflowY: "hidden",
  },
  title: {
    padding: theme.spacing(1),
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  price: {
    color: theme.palette.secondary.main,
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

function GridItem({ product }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <img className={classes.media} src={product.image} title="Contemplative Reptile" />
      <CardContent>
        <Typography className={classes.title} variant="subtitle1">
          {product.title}
        </Typography>
        <div className={classes.footer}>
          <Typography gutterBottom variant="h6" className={classes.price}>
            $ {product.price}
          </Typography>
          <Fab color="secondary" aria-label="edit">
            <ShoppingCartIcon />
          </Fab>
        </div>
      </CardContent>
    </Card>
  );
}
export default function ProductGrid({ products }) {
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
