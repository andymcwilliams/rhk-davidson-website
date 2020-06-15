import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import InfoStrip from "./components/infoStrip";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { HashRouter, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <Container fluid style={{ borderRadius: "25px" }}>
      <Row>
        <InfoStrip colour="light" />
      </Row>
      <div className="App">
        <NavBar colour="dark" />
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
    </Container>
  );
}

export default App;
