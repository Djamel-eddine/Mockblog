import React, { useContext } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faEye,
  faPen,
  faBookmark,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./style/Post.scss";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../resources/states/userContext";

const Post = (props) => {
  const { PostId, title, desc } = props;
  const { user } = useContext(UserContext);
  const [User] = user;
  const token = User.token;
  const onDelete = async (e) => {
    axios
      .delete(
        `http://localhost:5000/api/v1/${User["username"]}/posts/:${PostId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          window.location.reload();
        } else if (response.status === 400) {
          alert("there is a problem");
        } else if (response.status === 401) {
          alert("there is an unauth problem");
        } else if (response.status === 500) {
          alert("there is a problem in the server");
        }
      })
      .catch((e) => {
        console.log("---------- you've got a 404 problem -----------");
      });
    console.log("-------------------- post deleted -------------------");
    props.history.push("/seepost");
  };
  const onBookmark = (e) => {
    console.log("------------------ bookmark here -------------------");
    props.history.push("/here");
  };

  return (
    <div className="post-container">
      <div className="post-description">
        <Link to={`/post/post_id=${PostId}`}>
          <h1 className="post-title">{title}</h1>
        </Link>
        <small className="posted-date">Apr 12 - 19</small>
        <p>{desc}</p>
        <div className="post-interactions">
          <div className="likes">
            {" "}
            <Icon className="icon" icon={faHeart} color="gray" /> 2,113
          </div>
          <div className="comments">
            <Icon className="icon" icon={faComment} color="gray" />
            2,113
          </div>
          <div className="watched">
            <Icon className="icon" icon={faEye} color="gray" />
            2,113
          </div>
        </div>
      </div>
      <div className="post-properties">
        <Link to={`/update_post/id=${PostId}`} className="edit">
          <Icon icon={faPen} color="gray" />
        </Link>
        <button onClick={onDelete} className="delete">
          <Icon icon={faTrash} color="gray" />
        </button>
        <button onClick={onBookmark} className="bookmark">
          <Icon icon={faBookmark} color="gray" />
        </button>
      </div>
    </div>
  );
};

export default Post;
