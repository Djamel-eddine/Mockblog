import React, { /* useContext,  */ useState, useEffect } from "react";
/* import { UserContext } from "./resources/userContext"; */
import axios from "axios";
import { Link } from "react-router-dom";
import register from "./style/register.css";

const Register = (props) => {
  /* states declaration */
  /* const [user, setUser] = useContext(UserContext); */
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [pwmatches, setpwmatches] = useState(false);
  const [newusername, setnewusername] = useState(false);
  const [newemail, setnewemail] = useState(false);
  const [couldsubmit, setcouldsubmit] = useState(false);

  useEffect(() => {
    if (newemail && newusername && pwmatches === true) {
      setcouldsubmit(true);
    }
  }, [newemail, newusername, pwmatches]);

  /* methods declaration */
  const checkusename = (e) => {
    axios
      .post(`/api/v1/register?username=${username}`)
      .then((response) => {
        response.status === 200
          ? setnewusername(true)
          : alert("this username is already exists");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const checkemail = (e) => {
    if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      axios
        .post(`/api/v1/register?username=${email}`)
        .then((response) => {
          response.status === 200
            ? setnewemail(true)
            : alert("this email is already exists");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("You have entered an invalid email address!");
    }
  };

  /*----- for password  */
  const checkpassword = (pw) => {
    var strength = 0;
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
    index === -1 ? console.log(false) : console.log(true);
    Confpassword !== password ? setpwmatches(false) : setpwmatches(true);
  };
  const sendRegisterRequest = (e) => {
    e.preventDefault();
    axios
      .post("api/v1/register", {
        username,
        email,
        password,
      })
      .then((response) => {
        response.status === 201
          ? alert("this email is already exists")
          : alert("registered");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  /* 201 created 
409 conflict
400 bad request */
  return (
    <div className="register-container">
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
        <form onSubmit={sendRegisterRequest} action="/register">
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
            you're a blogger already!!
          </Link>

          <input
            className="btn1"
            type="submit"
            value="register"
            disabled={!couldsubmit}
          />
        </form>
        <div className="image-container">
          <img
            src="resources\svgs\register_ill.svg"
            alt="register"
            width="500px"
          />
        </div>
      </div>
    </div>
  );
};
export default Register;
