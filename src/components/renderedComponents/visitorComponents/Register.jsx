//@flow
import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../resources/states/userContext";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style/css/register.css";

//illustration and shapes
import register_ill from "./resources/illustrations/register_ill.svg";
import orange_Ellipse from "./resources/shapes/orange_Ellipse.svg";
import outline_rectangle from "./resources/shapes/outline_rectangle.svg";

type Info = {
  id: number,
  username: string,
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

const Register = (props: any) => {
  /* states declaration */
  const { user, islogged } = useContext(UserContext);
  // eslint-disable-next-line no-unused-vars
  const [userInfo: Info, setuserInfo: function] = user;
  // eslint-disable-next-line no-unused-vars
  const [logged: Boolean, setlogged: function] = islogged;
  const [username: string, setusername: function] = useState("");
  const [email: string, setemail: function] = useState("");
  const [password: string, setpassword: function] = useState("");
  const [pwmatches: Boolean, setpwmatches: function] = useState(false);
  const [newusername: Boolean, setnewusername: function] = useState(false);
  const [newemail: Boolean, setnewemail: function] = useState(false);
  const [couldsubmit: Boolean, setcouldsubmit: function] = useState(false);

  useEffect(() => {
    if (newemail && newusername && pwmatches === true) {
      setcouldsubmit(true);
    }
  }, [newemail, newusername, pwmatches]);
  /* methods declaration */
  const checkusename = (e) => {
    const target = e.target;
    axios
      .get(`http://localhost:5000/api/v1/register?username=${username}`)
      .then((response) => {
        if (response.status === 200) {
          setnewusername(true);
          target.style.borderColor = "#3dff3d";
        } else {
          alert("this username is already exists");
        }
      })
      .catch((err) => {
        /* e.target.style.borderColor = "red" */
        target.style.borderColor = "red";
        const area = document.getElementById("error-area");
        area.innerText = "this user name is already exists";
        area.style.height = "50px";
        setTimeout(() => {
          area.style.height = "0px";
          area.innerText = "";
        }, 2000);
      });
    /*  axios({
      method: "get",
      url: `http://localhost:5000/api/v1/register?username=${username}`,
    }); */
  };
  const checkemail = (e) => {
    const target = e.target;
    if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      axios
        .get(`http://localhost:5000/api/v1/register?email=${email}`)
        .then((response) => {
          if (response.status === 200) {
            setnewemail(true);
            target.style.borderColor = "#3dff3d";
          } else {
            alert("ther is a problem");
          }
        })
        .catch((err) => {
          /* console.log(err); */
          target.style.borderColor = "red";
          const area = document.getElementById("error-area");
          area.innerText = "this email is already exists";
          area.style.height = "50px";
          setTimeout(() => {
            area.style.height = "0px";
            area.innerText = "";
          }, 2000);
        });
    } else {
      if (target.value.length > 0) {
        target.style.borderColor = "red";
      }
    }
  };

  /*----- for password  */
  const checkpassword = (pw: string) => {
    // eslint-disable-next-line no-unused-vars
    var strength: number = 0;
    if (pw.match(/[a-z]+/)) {
      strength += 1;
    }
    if (pw.match(/[A-Z]+/)) {
      strength += 1;
    }
    if (pw.match(/[0-9]+/)) {
      strength += 1;
    }
    if (pw.match(/[$@#&!]+/)) {
      strength += 1;
    }

    if (pw.length < 6) {
      /* display.innerHTML = "minimum number of characters is 6"; */
      console.log("minimum number of characters is 6");
    }

    if (pw.length > 12) {
      /* display.innerHTML = "maximum number of characters is 12"; */
      console.log("maximum number of characters is 12");
    }

    /*     switch (strength) {
      case 0:
        strengthbar.value = 0;
        break;

      case 1:
        strengthbar.value = 25;
        break;

      case 2:
        strengthbar.value = 50;
        break;

      case 3:
        strengthbar.value = 75;
        break;

      case 4:
        strengthbar.value = 100;
        break;
    } */
  };
  const checkpasswordMatch = (e) => {
    setpassword(e.target.value);
    checkpassword(password);
  };

  const checkpasswordConfirmation = (e) => {
    const Confpassword = e.target.value;
    const index = password.indexOf(Confpassword);
    index === -1
      ? (e.target.style.borderColor = "red")
      : (e.target.style.borderColor = "#3dff3d");
    Confpassword === password ? setpwmatches(true) : setpwmatches(false);
  };
  const sendRegisterRequest = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/register", {
        username,
        email,
        password,
      })
      .then((response) => {
        if (response.status === 201) {
          setuserInfo(response.data);
          window.localStorage.setItem("mockblogtoken", response.data["token"]);
          props.history.push(`/confirm`);
          setTimeout(() => {
            setlogged(true);
            props.history.push(`/login`);
            console.log(response.data);
          }, 2000);
        } else {
          alert(/* response.data.msgs.msg */);
        }
      })
      .catch((err) => {
        /* console.log(err); */
        const area = document.getElementById("error-area");
        area.innerText = "there a problem";
        area.style.height = "50px";

        setTimeout(() => {
          props.history.push("/register");
        }, 2000);
      });
  };

  return (
    <div className="register-container">
      <img className="shape shape1" src={outline_rectangle} alt="shape1" />
      <img className="shape shape2" src={outline_rectangle} alt="shape3" />
      <img className="shape shape3" src={orange_Ellipse} alt="shape2" />
      <div className="form-container">
        <form onSubmit={sendRegisterRequest} action="/register">
          <div id="error-area"></div>
          <h2>Register</h2>
          <input
            type="text"
            name="username"
            placeholder="User name"
            id="username"
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
            onBlur={checkusename}
          />

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
            onBlur={checkemail}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            onChange={checkpasswordMatch}
            /* onBlur={checkpasswordMatch} */
          />

          <input
            type="password"
            name="passwordConfirmation"
            placeholder="confirm Password"
            id="passwordConfirmation"
            onChange={checkpasswordConfirmation}
          />

          <Link className="tologin" to="/login">
            have an account?
          </Link>

          <input
            className="btn1"
            type="submit"
            value="register"
            disabled={!couldsubmit}
          />
        </form>
        <div className="image-container">
          <img src={register_ill} alt="register" width="500px" />
        </div>
      </div>
    </div>
  );
};
export default Register;
