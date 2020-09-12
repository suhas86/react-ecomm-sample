import React from "react";
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
    height: 300,
    // maxWidth: 300,
    width: 300,
    // maxHeight: 300,
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  title: {
    padding: theme.spacing(1),
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  price: {
    color: theme.palette.secondary.main,
    position: "relative",
    top: theme.spacing(2)
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function GridItem({ product }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <img className={classes.media} src={product.image} title={product.title} alt={product.title} />
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
