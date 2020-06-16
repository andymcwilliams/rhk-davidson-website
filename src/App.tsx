import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import InfoStrip from "./components/infoStrip";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { HashRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <InfoStrip />
      <NavBar />
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/services" component={Services} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
