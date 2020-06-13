import React, { useState, useEffect } from "react";

import Output from "editorjs-react-renderer";
import Axios from "axios";

function Article(props) {
  const [body, setbody] = useState({});
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const postId = props["id"];
  useEffect(() => {
    Axios.get(`/api/v1/posts/${postId}`)
      .then((response) => {
        if (response.status === 200) {
          setbody(response.post.body);
          settitle(response.post.title);
          setdesc(response.post.desc);
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
      <div className="blocksContainer">
        <div className="postBlocks">
          <Output data={body} />
        </div>
      </div>
    </div>
  );
}

export default Article;
