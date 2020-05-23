import React, { Component } from "react";
import Navbar from "./HomeComponents/MainNavbar";
import Login from "./HomeComponents/Login";
import Register from "./HomeComponents/Register";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./HomeComponents/resources/userContext";

export default class Home extends Component {
  render() {
    return (
      <UserProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
      </UserProvider>
    );
  }
}
