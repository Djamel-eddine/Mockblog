import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../resources/states/userContext";
import Output from "editorjs-react-renderer";
import "../style/article.scss";

const SeePosts = (props) => {
  const { posts } = useContext(UserContext);
  const [Posts, setPosts] = posts;
  const title = Posts[0].title;
  const desc = Posts[0].desc;

  useEffect(() => {
    Posts.map((item, i) => console.log("item:", i, " --- ", item));
  }, []);

  return (
    <div className="seepost-container">
      <h1>{`${title}`}</h1>
      <h3>{`${desc}`}</h3>
      <div className="blocksContainer">
        <div className="postBlocks">
          <Output
            data={
              Posts[0]
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
      </div>
    </div>
  );
};

export default SeePosts;
