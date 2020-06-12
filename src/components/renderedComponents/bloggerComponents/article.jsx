import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../resources/states/userContext";
import Output from "editorjs-react-renderer";
import Axios from "axios";
import { withRouter } from "react-router-dom";

function Article(props) {
  const { posts } = useContext(UserContext);
  const [Posts, setPosts] = posts;
  let body = null;
  let title = "";
  let desc = "";
  const postId = props["id"];
  useEffect(() => {
    Axios.get(`/api/v1/posts/${postId}`)
      .then((response) => {
        if (response.status === 200) {
          body = response.post.body;
          title = response.post.title;
          desc = response.post.desc;
        } else {
          console.log("there is a problem");
        }
      })
      .catch((e) => {
        props.history.push(`/page not found`);
      });
  }, []);

  return (
    <div className="post-container">
      <h1>{`${title}`}</h1>
      <h3>{`${desc}`}</h3>
      <Output data={body} />
    </div>
  );
}

export default Article;
