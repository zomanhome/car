import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Menu from "../menu";
import Cars from "../cars";
import Info from "../info";
import About from "../about";
import Footer from "../footer";
import "./app.scss";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Menu />
          <Switch>
            <Route exact path="/" component={Cars} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/about" component={About} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
