import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../resources/states/userContext";
import Output from "editorjs-react-renderer";
import Axios from "axios";

const Article = (props) => {
  const { posts } = useContext(UserContext);
  const [Posts, setPosts] = posts;
  let body = null;
  let title = "";
  let desc = ""
  useEffect(() => {
    const postId = props["id"];
    Axios.get(`/api/v1/posts/${postId}`)
      .then((response) => {
        if (response.status === 200) {
          body = response.data.msgs.post.body;
          title =response.data.msgs.post.title;
          desc =response.data.msgs.post.desc;
        } else {
          console.log("there is a problem");
        }
      })
      .catch((e) => {
        props.history.push("/page not found");
      });
  }, []);

  return (
    <div className="post-container">
      <h1>`${title}`</h1>
      <h3>`${desc}`</h3>
      <Output data={body} />
      
    </div>
  );
};

export default Article;
