//@flow
import React, { useState, useEffect } from "react";
/* import { Link } from "react-router-dom"; */
import {} from "./style/login.css";
import axios from "axios";

//illustration and shapes
import reset_ill from "./resources/illustrations/reset_ill.svg";
import orange_Ellipse from "./resources/shapes/orange_Ellipse.svg";
import outline_rectangle from "./resources/shapes/outline_rectangle.svg";

const Reset2 = (props: any) => {
  const [password: string, setpassword: function] = useState("");
  const [pwmatches: Boolean, setpwmatches: function] = useState(false);
  const [stepCompleted: Boolean, setstepCompleted: function] = useState(true);
  /************* 
  here we send the token to the server to check the validity of it -the token is in the URL-
  *************/
  useEffect(() => {
    const token: string = props["token"];
    console.log(token);

    axios
      .get("/login", { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        if (response.status === 200) {
          setstepCompleted(true);
        } else {
          alert("the token is expired");
        }
      });
  }, []);

  const sendRegisterRequest = (e) => {
    e.preventDefault();
    axios
      .post("/api/v1/user/password/reset", {
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          props.history.push(`/confirm`);
          setTimeout(() => {
            props.history.push(`/login`);
          }, 2000);
        } else {
          alert("ther is a problem");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const checkpassword = (pw: string) => {
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

  const step2 = () => {
    return (
      <>
        <input
          type="password"
          name="new_password"
          id="new_password"
          placeholder="new password"
          onChange={checkpasswordMatch}
        />
        <input
          type="password"
          name="confirm_password"
          id="confirm_password"
          placeholder="Confirm password"
          onChange={checkpasswordConfirmation}
        />

        <input id="login" type="submit" value="Reset" disabled={!pwmatches} />
      </>
    );
  };
  const waitRespond = () => {
    return <h1>waiting for respond</h1>;
  };
  return (
    <div className="register-container login-container">
      <img className="shape shape1" src={outline_rectangle} alt="shape1" />
      <img className="shape shape2" src={outline_rectangle} alt="shape3" />
      <img className="shape shape3" src={orange_Ellipse} alt="shape2" />
      <div className="form-container">
        <form onSubmit={sendRegisterRequest} action="/login">
          <h2>Reset Password</h2>

          {stepCompleted ? step2() : waitRespond()}
        </form>
        <div className="image-container reset-img">
          <img src={reset_ill} alt="register" />
        </div>
      </div>
    </div>
  );
};

export default Reset2;
