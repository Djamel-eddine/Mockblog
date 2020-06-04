import React, { useContext } from "react";
import { UserContext } from "./resources/states/userContext";
import { Link } from "react-router-dom";
/* import { withRouter } from "react-router"; */
import { library } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
/* import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"; */
import { faAngellist } from "@fortawesome/free-brands-svg-icons";
import "./style/css/main_navbar.css";

//imporat icons and images
import searchicon from "./resources/images/search.png";
import userImg from "./resources/images/profile.png";

library.add(faAngellist);

const MainNavbar = (props) => {
  const { user, islogged, token } = useContext(UserContext);
  const [userInf] = user;
  const [logged, setlogged] = islogged;
  const [Token] = token;

  //use it when the user isn't logged in
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

  //use it when the user isn logged in
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
            <img src={userImg} alt="profile" height="30px" />
            {/* <Icon icon={faAngellist} size="1x" /> */}
          </span>
          <div className="props">
            <Link
              className="prop-list-item"
              to={`/profile/user=${userInf["username"]}`}
              onClick={dispList}
            >
              profile
            </Link>
            <div></div>
            <Link
              className="prop-list-item"
              to={`/edit_profile/user=${userInf["username"]}`}
              onClick={dispList}
            >
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
  /* logout methode */
  const logout = (e) => {
    axios
      .post("api/v1/logout", {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setlogged("false");
        }
      });
    /* setlogged(!logged); */

    const propnav = document.getElementsByClassName("props");
    propnav[0].classList.toggle("prop-list");
  };
  /* document.querySelector("body").click(function (event) {
    const target = event.target;
    if (
      !target.closest("#prop-list").length &&
      document.getElementById("#prop-list").is(":visible")
    ) {
      document.getElementById("#prop-list").hide();
    }
  }); */

  //
  const dispList = (e) => {
    const propnav = document.getElementsByClassName("props");
    propnav[0].classList.toggle("prop-list");
  };

  return (
    <div className="container">
      <div className="logo">
        <Link to="/">
          <img src={searchicon} alt="logo" height="30px" />
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
          <img src={searchicon} alt="search-icon" height="25px" />
        </label>
      </div>
      {logged ? blogger() : visitor()}
    </div>
  );
};
export default MainNavbar;
