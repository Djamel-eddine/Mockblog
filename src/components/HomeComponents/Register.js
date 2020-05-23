import React, { /* useContext,  */ useState, useEffect } from "react";
/* import { UserContext } from "./resources/userContext"; */
import axios from "axios";
import { Link } from "react-router-dom";

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
      .post("/register", {
        check: "username",
        username,
      })
      .then((response) => {
        response.status === 404
          ? setnewusername(true)
          : alert("this username is already exists");
      });
  };
  const checkemail = (e) => {
    if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      axios
        .post("/register", {
          check: "email",
          email,
        })
        .then((response) => {
          response.status === 404
            ? setnewemail(true)
            : alert("this email is already exists");
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
      .post("/register", {
        check: "submit",
        username,
        email,
        password,
      })
      .then((response) => {
        response.status === 200
          ? alert("this email is already exists")
          : alert("registered");
      });
  };

  return (
    <form onSubmit={sendRegisterRequest}>
      <label htmlFor="username">
        User Name:
        <input
          type="text"
          name="username"
          placeholder="User Name"
          id="username"
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
          onBlur={checkusename}
        />
      </label>
      <br />
      <label htmlFor="email">
        Email:
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
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          placeholder="Password"
          id="password"
          onChange={checkpasswordMatch}
          /* onBlur={checkpasswordMatch} */
        />
      </label>
      <br />
      <label htmlFor="passwordConfirmation">
        Confirm Password:
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="confirm Password"
          id="passwordConfirmation"
          onChange={checkpasswordConfirmation}
        />
      </label>
      <br />
      <Link to="/login">you're a blogger already!!</Link>
      <br />
      <input type="submit" value="register" disabled={!couldsubmit} />
    </form>
  );
};
export default Register;
