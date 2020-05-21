import React, { Component } from "react";
import Navbar from "./HomeComponents/MainNavbar";
import Login from "./HomeComponents/Login";
import Register from "./HomeComponents/Register";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    );
  }
}
