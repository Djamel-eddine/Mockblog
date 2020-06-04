import React, { useState, useContext, useEffect } from "react";
import EditorJs from "react-editor-js";
import { UserContext } from "../../../resources/states/userContext";
import { Tools } from "../postEditor/tools";

const UpdatePost = (props) => {
  const { posts } = useContext(UserContext);
  const [Posts, setPosts] = posts;
  var editor = null;
  let outputData = [];
  useEffect(() => {
    console.log("posts: ", Posts[0]);
  }, []);
  const onSave = async () => {
    /* await editor.save();
    console.log(editor); */
    try {
      outputData = await editor.save();
      const data = [outputData];
      console.log("Article data: ", data);
      const new_posts_list = [...Posts];
      new_posts_list[0] = data;
      setPosts(new_posts_list);

      props.history.push("/,lkjlk");
    } catch (e) {
      console.log("Saving failed: ", e);
    }
  };

  return (
    <div className="editor-container">
      <EditorJs
        data={Posts[0]}
        tools={Tools}
        instanceRef={(editorInstance) => {
          // invoked once the editorInstance is ready
          editor = editorInstance;
        }}
      />
      <button onClick={onSave}> save </button>
    </div>
  );
};

export default UpdatePost;
