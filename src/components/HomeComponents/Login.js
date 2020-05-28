import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "./resources/userContext";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style/login.css";

/* useEffect(() => {
  const token = window.localStorage.getItem("user");
  axios
    .post("/login", { headers: {"Authorization" : `Bearer ${token}`} })
    .then((response) => {
      if (response.status === 200) {
        alert("logged in");
      }
    });
}, []); */

/*  token in the header  */

const Login = (props) => {
  /* states declaration */
  const { user, islogged } = useContext(UserContext);
  const [userInfo, setuserInfo] = user;
  const [logged, setlogged] = islogged;
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [couldsubmit, setcouldsubmit] = useState(false);

  const submitted = (e) => {
    e.preventDefault();
    axios
      .post("api/v1/login", {
        username,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          setuserInfo(response.data);
          window.localStorage.setItem("mockblogtoken", response.data["token"]);
          props.history.push(`/profile/user=:${userInfo["username"]}`);
        } else {
          alert("this account ain't exists");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="register-container login-container">
      <img
        className="shape shape1"
        src="resources/svgs/outline_rectangle.svg"
        alt="shape1"
      />
      <img
        className="shape shape2"
        src="resources/svgs/outline_rectangle.svg"
        alt="shape3"
      />
      <img
        className="shape shape3"
        src="resources/svgs/orange_Ellipse.svg"
        alt="shape2"
      />
      <div className="form-container">
        <form onSubmit={submitted} action="/login">
          <h2>Login</h2>
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
          <Link className="toreset" to="/reset_password">
            forget password!!
          </Link>
          <div className="login">
            <div className="reminder">
              <input type="checkbox" name="reminder" id="reminder" />
              <label htmlFor="reminder">Remember me</label>
            </div>

            <input
              id="login"
              type="submit"
              value="login"
              disabled={!couldsubmit}
            />
          </div>

          <div className="separation"></div>
          <div className="tologin-container">
            Don't have an account?
            <Link className="toregister" to="/register">
              Register now
            </Link>
          </div>
        </form>
        <div className="image-container">
          <img src="resources\svgs\login_ill.svg" alt="register" />
        </div>
      </div>
    </div>
  );
};

export default Login;
