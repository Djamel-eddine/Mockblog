import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MainNavbar extends Component {
  render() {
    return (
      <div>
        <img src="./resources/logo.png" alt="logo" height="50px" />
        <Link to="/register">register</Link>
        <Link to="/login">login</Link>
      </div>
    );
  }
}
