import React from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faMailchimp,
} from "@fortawesome/free-brands-svg-icons";
import "./style/footer.css";

library.add(faFacebookF, faInstagram, faYoutube, faMailchimp);
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="subscription">
          <Link className="nav-item" to="/">
            <img src="resources/search.png" alt="logo" />
          </Link>
          <Link className="nav-item" to="/register">
            Get started
          </Link>
          <Link className="nav-item" to="/subscribe">
            Subscribe
          </Link>
          <span>
            Have an account?
            <Link className="nav-item" to="/login">
              Sign in
            </Link>
          </span>
        </div>
        <div className="navigation">
          <Link className="nav-item" to="/">
            home
          </Link>
          <Link className="nav-item" to="/about">
            about
          </Link>
          <Link className="nav-item" to="/contact">
            Contact-us
          </Link>
          <Link className="nav-item" to="/blog">
            blog
          </Link>
        </div>
        <div className="social_media">
          <a href="https://facebook.com">
            <Icon color="white" icon={faFacebookF} size="2x" />
          </a>

          <a href="https://instagram.com">
            <Icon color="white" icon={faInstagram} size="2x" />
          </a>

          <a href="https://youtube.com">
            <Icon color="white" icon={faYoutube} size="2x" />
          </a>

          <a href="https://gmail.com">
            {/* <Icon color="white" icon={faMailchimp} size="2x" /> */}
            <img src="resources\gmail.png" alt="gmail" height="33px" />
          </a>

          <small>&copy; Soft Brew copyright 2020</small>
        </div>
      </div>
    </div>
  );
};
export default Footer;
