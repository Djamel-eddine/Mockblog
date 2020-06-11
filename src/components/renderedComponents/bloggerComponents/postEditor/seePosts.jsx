import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../resources/states/userContext";
import Output from "editorjs-react-renderer";

const SeePosts = (props) => {
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
          <Output
            data={
              post
            } /* style = {{codeBox :{
              fontFamily: "Monaco, monospace",
              fontSize: "14px",
              lineHeight: "100%",
              backgroundColor: "#eee",
              padding: "0.2em",
              letterSpacing: "-0.05em",
              wordBreak: "normal",
              backgroundColor : "black",
   
            }}
            
          } */
          />
        </div>
      ))}
    </div>
  );
};

export default SeePosts;
