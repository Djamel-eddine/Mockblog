import React, { useContext, useState } from "react";
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
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../resources/states/userContext";

const Post = (props) => {
  const { id, title, desc } = props;
  const { user, token, target } = useContext(UserContext);
  const [User, setUser] = user;
  const [Token, setToken] = token;
  const [Target, setTarget] = target;
  const onDelete = async (e) => {
    axios
      .delete(`http://localhost:5000/api/v1/${User["username"]}/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          props.history.push(`/profile/user=${User["username"]}`);
        } else if (response.status === 400) {
          alert("there is a problem");
        } else if (response.status === 401) {
          alert("there is an unauth problem");
        } else if (response.status === 500) {
          alert("there is a problem in the server");
        }
      });
  };
  const onBookmark = (e) => {
    console.log("------------------ bookmark here -------------------");
    props.history.push("/here");
  };
  const loadPost = async () => {
    await axios
      .get(`http://localhost:5000/api/v1/${User["username"]}/posts/${id}`, {
        headers: { Authorization: `Bearer ${Token}` },
      })
      .then(async (response) => {
        if (response.status === 200) {
          const post = {
            body: response.data.msgs.post.body,
            title: response.data.msgs.post.title,
            tags: response.data.msgs.post.tags,
            /* desc: response.data.msgs.post.desc, */
          };
          setTarget(post);
        } else {
          console.log("---error in loading---");
        }
      })
      .catch((e) => {
        console.log("problem occure when try retrieving the post");
      });
  };
  const toUpdate = async () => {
    await loadPost();

    props.history.push(`/update_post/id=${id}`);
  };
  const toArticle = async () => {
    await loadPost();

    props.history.push(`/post/post_id=${id}`);
  };
  return (
    <div className="post-container">
      <div className="post-description">
        <h2 onClick={toArticle} className="post-title">
          {title}
        </h2>

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
        <button onClick={toUpdate}>
          <Icon icon={faPen} color="gray" />
        </button>

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
