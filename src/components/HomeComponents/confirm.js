import React from "react";
/* import "./style/register.css"; */
import "./style/confirm.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";

function Confirm() {
  return (
    <div className="confirm-container">
      {/* <img
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
      /> */}
      <div className="confirm-sub-container">
        <div className="sub-sub">
          <h1>Confirmed</h1>
          <img src="./resources/svgs/confirm.svg" alt="icon" />
        </div>
      </div>
    </div>
  );
}

export default Confirm;
