import React from "react";
import { Link } from "react-router-dom";
import "./style/main.css";
import PostsMostRead from "./PostsMostRead";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookF, faInstagram, faYoutube);

function Main() {
  return (
    <div className="main-container">
      <div className="header">
        <div className="pt1">
          <h1>Get smarter about what matters to you</h1>
          <h4>Thinking outside the box</h4>
          <Link className="btn-container" to="/register">
            <button className="btn1">get started</button>
          </Link>
        </div>
        <div className="pt2">
          <img
            src="./resources/svgs/home_ill.svg"
            alt="home-ill"
            width="100%"
          />
        </div>
        <div className="pt3">
          <div className="social-contact">
            <button className="btn1">
              <Icon color="white" icon={faFacebookF} size="1x" />
            </button>
            <button className="btn1">
              <Icon color="white" icon={faInstagram} size="1x" />
            </button>
            <button className="btn1">
              <Icon color="white" icon={faYoutube} size="1x" />
            </button>
          </div>
          <Icon
            className="cursor-icon"
            color="gray"
            icon={faYoutube}
            size="2x"
          />
        </div>
      </div>
      <div className="aboutus">
        <h1>About us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sed
          sapiente voluptatibus ratione eaque sequi temporibus quos! Asperiores,
          ad a delectus obcaecati nisi enim, minus officia quos dolorem
          consectetur odio quibusdam autem eum ipsa voluptatum nam ipsum!
          Voluptas ipsum quas facere officiis ullam, fugiat omnis distinctio
          quia, laudantium, natus voluptate!
        </p>
        <Link to="/about">
          <button className="btn1"> Read more {`  `} ---></button>
        </Link>
      </div>
      <div className="lastposts">
        <h1>Lastest posts</h1>
        <div className="lastpost-container">
          <img src="post-editor-image" alt="post-img" />
          <div>
            <h3>blagger name</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
              dolor voluptatem at est quasi! Commodi!
            </p>
          </div>
        </div>
        <img
          className="apostroph"
          src="./resources/svgs/apostrophe.svg"
          alt="apostroph"
          height="80px"
        />
        <img
          className="apostroph"
          src="./resources/svgs/apostrophe.svg"
          alt="apostroph"
          height="80px"
        />
      </div>
      <div className="mostread">
        <h1>Most Read</h1>
        <div className="separation"></div>

        <div className="lastpost-core">
          <h1>no post yet</h1>
          {/*  mapping through the list and pass the values as props */}
          <PostsMostRead />
        </div>
      </div>
      <div className="expandshit">
        <h1>Expand your readings</h1>
        <h1>Expand your mind</h1>
        <button className="btn1">Get started</button>
      </div>
    </div>
  );
}

export default Main;
