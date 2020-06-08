import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../resources/states/userContext";
import Output from "editorjs-react-renderer";

const Article = (props) => {
  const { posts } = useContext(UserContext);
  const [Posts, setPosts] = posts;

  useEffect(() => {
    Posts.map((item, i) => console.log("item:", i, " --- ", item));
  }, []);

  return (
    <div className="post-container">
      {Posts.map((post, i) => (
        <div key={i}>
          <h1>post: {i}</h1>
          <Output data={post} />
        </div>
      ))}
    </div>
  );
};

export default Article;
