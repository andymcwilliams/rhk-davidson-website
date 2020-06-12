import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { HashRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
