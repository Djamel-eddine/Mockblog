//@flow
import React, { useState } from "react";
import "./style/css/login.css";
import axios from "axios";

//illustration and shapes
import reset_ill from "./resources/illustrations/reset_ill.svg";
import orange_Ellipse from "./resources/shapes/orange_Ellipse.svg";
import outline_rectangle from "./resources/shapes/outline_rectangle.svg";

const Reset1 = (props: any) => {
  const [mailExist: Boolean, setmailExist: function] = useState(false);
  const [email: string, setemail: function] = useState("");
  const [stepcomplete: Boolean, setstepcomplete: function] = useState(false);

  const checkemail = (e) => {
    if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      axios
        .post(`/api/v1/reset?email=${email}`)
        .then((response) => {
          response.status === 200
            ? setmailExist(true)
            : alert("this email doesn't exists");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("You have entered an invalid form email address!");
    }
  };
  const sendRegisterRequest = (e) => {
    e.preventDefault();
    axios
      .post("/api/v1/user/password/reset", {
        email,
      })
      .then((response) => {
        if (response.status === 200) {
          setstepcomplete(true);
        } else {
          alert("there is a problem");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const stepcompleted = () => {
    return (
      <>
        <h1>check your email </h1>
      </>
    );
  };
  const step1 = () => {
    return (
      <>
        <h2>Reset Password</h2>
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

        <input id="login" type="submit" value="Send" disabled={!mailExist} />
      </>
    );
  };
  return (
    <div className="register-container login-container">
      <img className="shape shape1" src={outline_rectangle} alt="shape1" />
      <img className="shape shape2" src={outline_rectangle} alt="shape3" />
      <img className="shape shape3" src={orange_Ellipse} alt="shape2" />
      <div className="form-container">
        <form onSubmit={sendRegisterRequest} action="/login">
          {stepcomplete ? stepcompleted() : step1()}
        </form>
        <div className="image-container reset-img">
          <img src={reset_ill} alt="register" />
        </div>
      </div>
    </div>
  );
};

export default Reset1;
