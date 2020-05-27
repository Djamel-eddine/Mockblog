import React from "react";
import { Link } from "react-router-dom";
import {} from "./style/login.css";

const Reset = () => {
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
        <form /* onSubmit={submitted} */ action="/login">
          <h2>Reset Password</h2>
          <input
            type="password"
            name="old_password"
            id="old_password"
            placeholder="Password"
            /* value={password}
            onChange={(e) => {
              setpassword(e.target.value);
              username !== "" && password.length > 4
                ? setcouldsubmit(true)
                : setcouldsubmit(false);
            }} */
          />
          <input
            type="password"
            name="new_password"
            id="new_password"
            placeholder="new password"
            /* value={password}
            onChange={(e) => {
              setpassword(e.target.value);
              username !== "" && password.length > 4
                ? setcouldsubmit(true)
                : setcouldsubmit(false);
            }} */
          />
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm password"
            /* value={password}
            onChange={(e) => {
              setpassword(e.target.value);
              username !== "" && password.length > 4
                ? setcouldsubmit(true)
                : setcouldsubmit(false);
            }} */
          />

          <input
            id="login"
            type="submit"
            value="Reset"
            /* disabled={!couldsubmit} */
          />
        </form>
        <div className="image-container">
          <img src="resources\svgs\reset_ill.svg" alt="register" />
        </div>
      </div>
    </div>
  );
};

export default Reset;
