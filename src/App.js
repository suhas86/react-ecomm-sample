import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import { purple, amber } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Home from "./pages/Home";

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
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:category">
            <p>This is list of Product page</p>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
