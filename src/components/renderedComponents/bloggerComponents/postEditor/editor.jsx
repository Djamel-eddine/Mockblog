import React, { useState, useContext, useEffect } from "react";
import EditorJs from "react-editor-js";
import { UserContext } from "../../../resources/states/userContext";
import { Tools } from "./tools";
import axios from "axios";
import "./css/editor.css";
const Editor = (props) => {
  const { user, posts, token } = useContext(UserContext);
  const [Token, setToken] = token;
  const [Posts, setPosts] = posts;
  const [User, setUser] = user;
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const data = {};
  var editor = null;
  let outputData = [];
  const onTitleChange = (e) => {
    settitle(e.target.innerText);
  };
  const onDescChange = (e) => {
    setdesc(e.target.innerText);
  };
  const displayData = async () => {
    /* await editor.save();
    console.log(editor); */
    try {
      outputData = await editor.save();
      const output = [outputData];
      console.log("Article data: ", output);
      const new_posts_list = output.concat(Posts);
      setPosts(new_posts_list);
      props.history.push("/article/19");
      /*  axios
        .post(
          "https://mockblog-api.herokuapp.com/api/v1/posts",
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
          console.log(err);
          const area = document.getElementById("error-area");
          area.innerText = "there a problem";
          area.style.height = "50px";

          setTimeout(() => {
            props.history.push("/register");
          }, 2000);
        }); */
    } catch (e) {
      console.log("Saving failed: ", e);
    }
  };

  return (
    <div className="editor-container">
      <h1 onBlur={onTitleChange} contentEditable suppressContentEditableWarning>
        title
      </h1>
      <h3 onBlur={onDescChange} contentEditable suppressContentEditableWarning>
        caption here
      </h3>
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
