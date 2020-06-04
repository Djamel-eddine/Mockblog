import React from "react";
/* import "./style/register.css"; */
import "./style/css/confirm.css";
import "./style/css/login.css";

//illustration and shapes
import confirmIcon from "./resources/illustrations/confirm.svg";
import orange_Ellipse from "./resources/shapes/orange_Ellipse.svg";
import outline_rectangle from "./resources/shapes/outline_rectangle.svg";

function Confirm() {
  return (
    <div className="confirm-container">
      <img className="shape shape1" src={outline_rectangle} alt="shape1" />
      <img className="shape shape2" src={outline_rectangle} alt="shape3" />
      <img className="shape shape3" src={orange_Ellipse} alt="shape2" />
      <div className="confirm-sub-container">
        <div className="sub-sub">
          <h1>Confirmed</h1>
          <img src={confirmIcon} alt="icon" />
        </div>
      </div>
    </div>
  );
}

export default Confirm;
