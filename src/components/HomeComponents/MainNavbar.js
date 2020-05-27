import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style/main_navbar.css";

/* import { faHome } from "@fortawesome/free-solid-svg-icons"; */
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; */

/* import "../../../node_modules/font-awesome/css/font-awesome.min.css"; */
export default class MainNavbar extends Component {
  render() {
    return (
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="resources/search.png" alt="logo" height="30px" />
          </Link>
        </div>

        <div className="search">
          <input
            type="search"
            /* placeholder="Search..." */
            name="search"
            id="search"
          />
          <label htmlFor="search">
            <img src="resources/search.png" alt="search-icon" height="25px" />
          </label>
        </div>
        <div className="navigation_menu">
          <Link className="nav-item" to="/">
            Home
          </Link>
          <Link className="nav-item" to="/about">
            About
          </Link>
          <Link className="nav-item" to="/contact">
            Contact-us
          </Link>
          <Link className="nav-item" to="/blog">
            Blog
          </Link>

          <Link to="/register">
            <button className="btn1">get started</button>
          </Link>
          <button className="btn2" id="trigger">
            disp
          </button>
        </div>
      </div>
    );
  }
}
