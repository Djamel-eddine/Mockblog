import React, { useState, useContext, useEffect } from "react";
import EditorJs from "react-editor-js";
import { UserContext } from "../../../resources/states/userContext";
import { Tools } from "../postEditor/tools";
import axios from "axios";

const UpdatePost = (props) => {
  const { posts, token } = useContext(UserContext);
  const [Posts, setPosts] = posts;
  const [Token, setToken] = token;
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
      axios
        .put(
          "https://mockblog-api.herokuapp.com/api/v1/posts/post",
          {
            user_id: UserContext["_id"],
            title: "",
            desc: "",
            body: outputData,
            tags: [],
            published: true,
          },
          {
            headers: { Authorization: `Bearer ${Token}` },
          }
        )
        .then((response) => {
          if (response.status === 201) {
            props.history.push(`/confirm`);
          } else {
            alert("there is problem here ");
          }
        })
        .catch((err) => {
          /* console.log(err); 
          const area = document.getElementById("error-area");
          area.innerText = "there a problem";
          area.style.height = "50px";

          setTimeout(() => {
            props.history.push("/register");
          }, 2000);*/
        });
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