import React, { useState, useContext, useEffect } from "react";
import EditorJs from "react-editor-js";
import { UserContext } from "../../../resources/states/userContext";
import { Tools } from "./tools";
import "./editor.scss";
import TagEditor from "react-tageditor";

const Editor = (props) => {
  const { user, posts, token } = useContext(UserContext);
  const [Token, setToken] = token;
  const [Posts, setPosts] = posts;
  const [User, setUser] = user;
  const [title, settitle] = useState("No title");
  const [desc, setdesc] = useState("No description");
  const [tags, settags] = useState([]);

  /* var editor; */
  const [editor, seteditor] = useState("");

  let outputData;

  const onTitleChange = () => {
    const input = document.getElementById("title");
    settitle(input.value);
  };
  const onDescChange = (e) => {
    setdesc(e.target.value);
    /* e.targer.style.height = e.targer.scrollHeight + "px"; */
    const desc = document.getElementById("description");
    desc.style.height = desc.scrollHeight + "px";
    /* console.log(e.target.style.height); */
  };

  const sendPost = async (published) => {
    try {
      outputData = await editor.save();

      const data = {
        title: title,
        description: desc,
        body: JSON.stringify(outputData),
        tags: tags,
        is_published: published,
        /* category: null, */
      };

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${Token}`,
        },
        body: JSON.stringify(data),
      };
      fetch(
        `http://localhost:5000/api/v1/${User["username"]}/posts`,
        requestOptions
      ).then((response) => {
        if (response.status === 201) {
          props.history.push("/confirm");
          setTimeout(() => {
            props.history.push(`/profile/user=${User["username"]}`);
          }, 1000);
        } else {
          console.log("not saver status: ", response.status);
        }
      });
    } catch (err) {
      console.log("Saving failed: ", err);
    }
  };

  const onSave = async () => {
    sendPost(true);
  };
  const saveDraft = async () => {
    sendPost(false);
  };
  const handleTagsChange = async (tagsChanged, allTags, action) => {
    settags(await allTags);
  };
  return (
    <div className="editor-container">
      <input
        onChange={onTitleChange}
        type="text"
        name="title"
        id="title"
        placeholder="Title"
      />
      <textarea
        onInput={onDescChange}
        name="description"
        id="description"
        cols="30"
        rows="10"
        placeholder="description"
      ></textarea>
      <EditorJs
        autofocus={true}
        tools={Tools}
        instanceRef={async (editorInstance) => {
          // invoked once the editorInstance is ready

          try {
            seteditor(editorInstance);
            outputData = await editor.save();
          } catch (error) {
            console.log("here we have an error of .save() shit");
          }
        }}
      />

      <TagEditor
        tags={tags}
        delimiters={[13, ","]}
        placeholder="add tags..."
        onChange={handleTagsChange}
      />

      <div className="save">
        <button className="draft" onClick={saveDraft}>
          save as draft
        </button>
        <button className="btn1" onClick={onSave}>
          PUBLISH
        </button>
      </div>
    </div>
  );
};

export default Editor;
