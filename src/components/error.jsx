import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import error_image from "./resources/images/404.png";
import { UserContext } from "./resources/states/userContext";
import "./style/css/error.css";

const Error = () => {
  const { posts } = useContext(UserContext);
  const [Posts, setPosts] = posts;
  useEffect(() => {
    console.log("posts: ", Posts[0]);
  }, []);
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
