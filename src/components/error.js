import React from "react";
import { Link } from "react-router-dom";
import error_image from "./resources/images/404.png";
import "./style/error.css";

const Error = () => {
  return (
    <div className="error-container">
      <div>
        <img src={error_image} alt="" />
        <Link to="/">
          <button className="btn1">back home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
