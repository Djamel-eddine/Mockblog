import React, { useContext } from "react";
import { UserContext } from "./resources/userContext";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faAngellist } from "@fortawesome/free-brands-svg-icons";
import "./style/main_navbar.css";
library.add(faAngellist);

/* import { faHome } from "@fortawesome/free-solid-svg-icons"; */
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; */

/* import "../../../node_modules/font-awesome/css/font-awesome.min.css"; */
const MainNavbar = (props) => {
  const { user, islogged } = useContext(UserContext);
  const [userInf, setuserInf] = user;
  const [logged, setlogged] = islogged;
  const visitor = () => {
    return (
      <div>
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
        </div>
        <button className="btn2" id="trigger">
          disp
        </button>
      </div>
    );
  };
  const blogger = () => {
    return (
      <div>
        <div className="navigation_menu">
          <Link className="nav-item" to="/">
            Home
          </Link>
          <Link className="nav-item" to="/blog">
            Blog
          </Link>
          <span className="nav-item profile-nav" onClick={dispList}>
            <img src="./resources/profile.png" alt="profile" height="30px" />
            {/* <Icon icon={faAngellist} size="1x" /> */}
          </span>
          <div className="props">
            <Link className="prop-list-item" to="">
              Edit profile
            </Link>
            <div></div>
            <Link to="/" className="prop-list-item" onClick={logout}>
              logout
            </Link>
          </div>
        </div>
        <button className="btn2" id="trigger">
          disp
        </button>
      </div>
    );
  };
  const dispList = (e) => {
    const propnav = document.getElementsByClassName("props");
    propnav[0].classList.toggle("prop-list");
  };
  const logout = (e) => {
    axios
      .post("api/v1/logout", {
        headers: { Authorization: `Bearer ${userInf["token"]}` },
      })
      .then((response) => {
        if (response.status === 200) {
          setlogged("false");
        }
      });
    setlogged(!logged);
    const propnav = document.getElementsByClassName("props");
    propnav[0].classList.toggle("prop-list");
  };
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
      {logged ? blogger() : visitor()}
    </div>
  );
};
export default MainNavbar;
