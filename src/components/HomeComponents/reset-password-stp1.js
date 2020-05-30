import React, { useState } from "react";
import "./style/login.css";
import axios from "axios";

const Reset1 = (props) => {
  const [mailExist, setmailExist] = useState(false);
  const [email, setemail] = useState("");
  const [stepcomplete, setstepcomplete] = useState(false);

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
      alert("You have entered an invalid email address!");
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
        <form onSubmit={sendRegisterRequest} action="/login">
          {stepcomplete ? stepcompleted() : step1()}
        </form>
        <div className="image-container reset-img">
          <img src="resources\svgs\reset_ill.svg" alt="register" />
        </div>
      </div>
    </div>
  );
};

export default Reset1;
