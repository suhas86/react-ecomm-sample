import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CheckIcon from "@material-ui/icons/Check";

import CartContext from "../context/cart";
import { useSelectedProducts } from "../hooks/useProducts";

import Loading from "./Loading";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
  },
  media: {
    height: 200,
    width: 200,
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  button: {
    marginTop: theme.spacing(1),
  },
}));

function CartItem({ product }) {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={4}>
        <img className={classes.media} src={product.image} alt={product.name} />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Typography gutterBottom variant="h6">
          {product.title}
        </Typography>
        <Typography gutterBottom variant="subtitle1" color="secondary">
          $ {product.price}
        </Typography>
        <Typography gutterBottom variant="subtitle1" color="secondary">
          Quantity: {product.quantity}
        </Typography>
      </Grid>
    </Grid>
  );
}

function CartList({ products, cart, handleClose }) {
  const classes = useStyles();
  const history = useHistory();
  if (products.length === 0)
    return <Typography variant="h6">Your cart is empty!!! Start adding products 😀</Typography>;
  const updatedProducts = products.map((product) => {
    const item = cart.find((item) => item.id === product.id);
    product.quantity = item.quantity;
    product.total = item.quantity * product.price;
    return product;
  });
  const total = updatedProducts.map((item) => item.total).reduce((prev, next) => prev + next);
  const checkout = () => {
    handleClose();
    history.push("/checkout");
  };
  return (
    <Container maxWidth="lg">
      <Typography color="secondary" variant="h6">
        ITEMS IN CART {updatedProducts.length}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Paper elevation={3} className={classes.paper}>
            {updatedProducts.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} className={classes.paper}>
            <Typography gutterBottom variant="subtitle1" color="primary">
              TOTAL: $ {total}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={checkout}
              className={classes.button}
              startIcon={<CheckIcon />}
            >
              Checkout
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default function Cart({ open, handleClose }) {
  const classes = useStyles();
  const { cart } = React.useContext(CartContext);
  const { response: products, loading } = useSelectedProducts(cart);
  return (
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Cart
          </Typography>
        </Toolbar>
      </AppBar>
      {loading ? (
        <Loading text={"Loading your cart"} />
      ) : (
        <CartList products={products} cart={cart} handleClose={handleClose} />
      )}
    </Dialog>
  );
}
