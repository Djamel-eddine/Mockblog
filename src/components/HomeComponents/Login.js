import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "./resources/userContext";
import axios from "axios";
import { Link } from "react-router-dom";

/* useEffect(() => {
  const token = window.localStorage.getItem("user");
  axios
    .post("/login", {
      type: "check token",
      token,
    })
    .then((response) => {
      if (response.status === 200) {
        alert("logged in");
      }
    });
}, []); */

const Login = (props) => {
  /* states declaration */
  const [user, setuser] = useContext(UserContext);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [couldsubmit, setcouldsubmit] = useState(false);

  const submitted = (e) => {
    e.preventDefault();
    axios
      .post("/login", {
        check: "submit",
        username,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          setuser(response.data);
          window.localStorage.setItem("mockblogtoken", response.data["token"]);
        } else {
          alert("this account ain't exists");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={submitted} action="/login">
      <label htmlFor="username">
        username
        <input
          type="text"
          name="username"
          id="username"
          placeholder="User Name"
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
            username !== "" && password.length > 4
              ? setcouldsubmit(true)
              : setcouldsubmit(false);
          }}
        />
      </label>
      <br />
      <label htmlFor="username">
        username
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
            username !== "" && password.length > 4
              ? setcouldsubmit(true)
              : setcouldsubmit(false);
          }}
        />
      </label>
      <br />
      <Link to="/register">not a member yet!!</Link>
      <br />
      <input type="submit" value="login" disabled={!couldsubmit} />
    </form>
  );
};

export default Login;
