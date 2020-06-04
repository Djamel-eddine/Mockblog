import React from "react";
import "./style/css/about.css";

//illustrations an shapes
import about_ill from "./resources/illustrations/about_ill.svg";
import orange_triangle from "./resources/shapes/orange_triangle.svg";
import blue_triangle from "./resources/shapes/blue_triangle.svg";
import orange_Ellipse from "./resources/shapes/orange_Ellipse.svg";
import outline_rectangle from "./resources/shapes/outline_rectangle.svg";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookF, faInstagram, faYoutube);

const About = () => {
  return (
    <div className="about-container">
      <div className="about-sub-container">
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
        <div className="pt1">
          <img src={about_ill} alt="illustration" />
          <div className="story">
            <h1>our story</h1>
            <div className="line line1"></div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              ratione provident at a enim voluptatibus recusandae fuga beatae
              veritatis ducimus, explicabo necessitatibus inventore quam aliquid
              veniam quasi, adipisci quidem. Neque!
            </p>
          </div>

          <div className="line line2"></div>
          <img className="fig-back1" src={orange_triangle} alt="illustration" />
        </div>
        <div className="pt2">
          <div className="something">
            <img className="fig-back1" src={blue_triangle} alt="illustration" />
            <h1>Something</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              culpa tempore asperiores porro aliquam animi ut, doloribus
              deserunt? Voluptas dolor accusantium, consequatur tenetur aliquam
              repellat velit nihil aliquid in vero hic quam porro quisquam id
              officia, eius perferendis ducimus exercitationem?
            </p>
          </div>
          <div className="line line3"></div>
        </div>
        <div className="pt3">
          <div className="else">
            <img
              className="fig-back1 eclipse"
              src={orange_Ellipse}
              alt="illustration"
            />
            <img
              className="fig-back1 triangle"
              src={outline_rectangle}
              alt="illustration"
            />
            <h1>else</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              culpa tempore asperiores porro aliquam animi ut, doloribus
              deserunt? Voluptas dolor accusantium, consequatur tenetur aliquam
              repellat velit nihil aliquid in vero hic quam porro quisquam id
              officia, eius perferendis ducimus exercitationem?
            </p>
            <img
              className="fig-back1"
              src={outline_rectangle}
              alt="illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
