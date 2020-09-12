import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Divider from "@material-ui/core/Divider";

import { useParams } from "react-router-dom";
import { useProduct, useProductsWithCategory } from "../hooks/useProducts";
import Loading from "../components/Loading";
import ProductSuggestions from "../components/ProductSuggestions";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
  },
  media: {
    height: "auto",
    width: 400,
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  price: {
    color: theme.palette.secondary.dark,
  },
  condition: {
    fontSize: "8px",
  },
  title: {
    marginTop: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  releated: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: theme.spacing(1),
  },
}));
function useProductData(productId, category) {
  const { response: product, loading: productLoading } = useProduct(productId);
  const { response: products, loading: productsLoading } = useProductsWithCategory(category);

  return {
    product,
    products,
    loading: productsLoading || productLoading,
  };
}
export default function Product() {
  const { productId, category } = useParams();
  const { product, products, loading } = useProductData(productId, category);
  const classes = useStyles();
  if (loading) {
    return <Loading text={`Fetching your product`} />;
  }
  return (
    <Container maxWidth={false}>
      <Paper elevation={3} className={classes.paper}>
        <Grid container>
          <Grid item xs={6}>
            <img className={classes.media} src={product.image} alt={product.name} />
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom variant="h5" className={classes.title}>
              {product.title}
            </Typography>
            <Typography gutterBottom variant="h6" className={classes.price}>
              $ {product.price} <span className={classes.condition}>(Incuding all taxes)</span>
            </Typography>
            <Button variant="contained" color="secondary" className={classes.button} startIcon={<ShoppingCartIcon />}>
              Add to cart
            </Button>
            <Divider variant="middle" className={classes.divider} />
            <Typography gutterBottom variant="h6" className={classes.title}>
              Product description
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Typography variant="h5" className={classes.releated}>
        Related products
      </Typography>
      <Container maxWidth={false}>
        <ProductSuggestions products={ products.filter(({ id }) => id !== product.id)} />
      </Container>
    </Container>
  );
}
