import React, { useState, useContext, useEffect } from "react";
import EditorJs from "react-editor-js";
import { UserContext } from "../../../resources/states/userContext";
import { Tools } from "./tools";
import "./css/editor.css";
const Editor = (props) => {
  const { posts } = useContext(UserContext);
  const [Posts, setPosts] = posts;
  const data = {};
  var editor = null;
  let outputData = [];

  const displayData = async () => {
    /* await editor.save();
    console.log(editor); */
    try {
      outputData = await editor.save();
      const blocks = [outputData];
      console.log("Article data: ", blocks);
      const new_posts_list = blocks.concat(Posts);
      setPosts(new_posts_list);

      props.history.push("/update_post");
    } catch (e) {
      console.log("Saving failed: ", e);
    }
  };

  return (
    <div className="editor-container">
      <EditorJs
        data={data}
        tools={Tools}
        instanceRef={(editorInstance) => {
          // invoked once the editorInstance is ready
          editor = editorInstance;
        }}
      />
      <button onClick={displayData}>display</button>
    </div>
  );
};

export default Editor;
