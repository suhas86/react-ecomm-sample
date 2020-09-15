import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { purple, amber } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CartProvider } from "./context/cart";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[900],
    },
    secondary: {
      main: amber[900],
    },
  },
});

function App() {
  const [cart, setCart] = React.useState([]);
  let tempCart = [...cart];
  const addItem = (productId) => {
    const checkProduct = cart.find(({ id }) => id === productId);
    if (checkProduct) {
      tempCart = tempCart.map((item) => {
        const a = productId === item.id ? { ...item, quantity: item.quantity + 1 } : item;
        return a;
      });
      setCart(tempCart);
    } else {
      tempCart.push({ id: productId, quantity: 1 });
      setCart(tempCart);
    }
  };
  const clearAll = () => {
    setCart([]);
  };
  const value = React.useMemo(
    () => ({
      cart,
      addItem,
      clearAll,
    }),
    [cart]
  );
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={theme}>
          <CartProvider value={value}>
            <Navbar />
            <Menu />
            <Switch>
              <Route exact path="/checkout">
                <Checkout />
              </Route>
              <Route path="/:category/:productId">
                <Product />
              </Route>
              <Route exact path="/:category">
                <Products />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
