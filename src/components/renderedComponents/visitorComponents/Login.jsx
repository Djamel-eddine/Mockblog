//@flow
import React, { useContext, useState } from "react";
import { UserContext } from "../../resources/states/userContext";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style/css/login.css";

//illustration and shapes
import login_ill from "./resources/illustrations/login_ill.svg";
import orange_Ellipse from "./resources/shapes/orange_Ellipse.svg";
import outline_rectangle from "./resources/shapes/outline_rectangle.svg";

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

type Info = {
  id: number,
  username: string,
  nickname: string, //added
  email: string,
  password: string,
  is_active: Boolean,
  is_blogger: Boolean,
  profile: {
    firstname: string,
    lastname: string,
    date_of_birth: string,
    bio: string,
    followers: any,
    follows: any, //added
    posts: any,
    specializations: any,
  },
  created_at: string,
  updated_at: string,
  token: string, //added
};

const Login = (props: any) => {
  /* states declaration */
  const { user, islogged, token } = useContext(UserContext);
  const [userInfo: Info, setuserInfo: Function] = user;
  const [logged: Boolean, setlogged: Function] = islogged;
  const [Token, setToken] = token;
  const [username: string, setusername] = useState("");
  const [password: string, setpassword] = useState("");
  const [couldsubmit: Boolean, setcouldsubmit] = useState(false);

  const submitted = async (e) => {
    e.preventDefault();
    /* const response = await axios.post("http://localhost:5000/api/v1/login", {
      username,
      password,
    }); */

    /* axios({
      method: "post",
      url: "http://localhost:5000/api/v1/login",
      headers: {},
      data: {
        username: username,
        password: password,
      },
    }).then((response) => {
      console.log("hello");

      if (response.status === 200) {
        setuserInfo(response.data);
        window.localStorage.setItem("mockblogtoken", response.data["token"]);
        props.history.push(`/profile/user=:${userInfo["username"]}`);
      } else {
        alert("this account ain't exists");
      }
    });
    /* .catch((err) => {
        console.log(err);
      }); */

    axios
      .post("http://localhost:5000/api/v1/login", {
        username: username,
        password: password,
      })
      .then(async (response) => {
        if (response.status === 200) {
          console.log(response);

          await setuserInfo(response.data.msgs.user);
          await setToken(response.data.msgs["token"]);

          window.localStorage.setItem(
            "mockblogtoken",
            response.data.msgs["token"]
          );

          setlogged(true);
          props.history.push(
            `/profile/user=:${response.data.msgs.user["username"]}`
          );
        } else if (response.status === 404) {
          alert("this account ain't exists");
        }
      })
      .catch((err) => {
        /* alert("this account ain't exists"); */

        const area = document.getElementById("error-area");
        area.innerText = "user name or password incorrect";
        area.style.height = "50px";

        setTimeout(() => {
          area.style.height = "0px";
          area.innerText = "";
        }, 2000);
      });
  };

  return (
    <div className="register-container login-container">
      <img className="shape shape1" src={outline_rectangle} alt="shape1" />
      <img className="shape shape2" src={outline_rectangle} alt="shape3" />
      <img className="shape shape3" src={orange_Ellipse} alt="shape2" />
      <div className="form-container">
        <form onSubmit={submitted} action="/login">
          <div id="error-area"></div>
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
          <div className="toreset-container">
            <Link className="toreset" to="/reset-password">
              forget password!
            </Link>
          </div>

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
          <img src={login_ill} alt="register" />
        </div>
      </div>
    </div>
  );
};

export default Login;
