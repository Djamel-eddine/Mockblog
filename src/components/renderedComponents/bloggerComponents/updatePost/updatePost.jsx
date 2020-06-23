import React, { useState, useContext, useEffect } from "react";
import EditorJs from "react-editor-js";
import { UserContext } from "../../../resources/states/userContext";
import { Tools } from "../postEditor/tools";
import "../postEditor/editor.scss";
import axios from "axios";
import TagEditor from "react-tageditor";

const UpdatePost = (props) => {
  const { token, user, target } = useContext(UserContext);
  const [Token] = token;
  const [User] = user;
  const [editor, seteditor] = useState("");
  const id = props.id;
  let outputData = [];
  const [Target] = target;
  const [desc, setdesc] = useState("description");
  const [title, settitle] = useState(Target.title);
  const [tags, settags] = useState(Target.tags);

  const onDescChange = (e) => {
    setdesc(e.target.value);
    const desc = document.getElementById("description");
    desc.style.height = desc.scrollHeight + "px";
  };
  const onTitleChange = (e) => {
    settitle(e.target.value);
    console.log(e.target.style);
  };
  const sendPost = async (published) => {
    try {
      outputData = await editor.save();
      const data = {
        title: title,
        description: desc,
        body: JSON.stringify(outputData),
        tags: ["tags"],
        is_published: published,
        /* category: null, */
      };
      console.log(data);
      const url = `http://localhost:5000/api/v1/${User["username"]}/posts/${id}`;

      let req = {
        url,
        method: "PUT",
        data: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
          authorization: `Bearer ${Token}`,
        },
      };
      axios(req).then((response) => {
        if (response.status === 200) {
          props.history.push("/confirm");
          setTimeout(() => {
            props.history.push(`/profile/user=${User["username"]}`);
          }, 1000);
        } else {
          console.log("not saver status: ", response.status);
        }
      });

      /* const putMethod = {
        method: "PUT", // Method itself
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
          authorization: `Bearer ${Token}`,
        },
        body: JSON.stringify(data), // We send data in JSON format
      };

      const res = await fetch(
        `http://localhost:5000/api/v1/${User["username"]}/posts/${target["post_id"]}`,
        putMethod
      );
      console.log(res); */

      /* .then((response) => console.log(response.json()))
        .then((data) => console.log("data here: ", data))
        .catch((err) => console.log(err)); // Do something with the error */

      /* const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${Token}`,
        },
        body: JSON.stringify(data),
      };
      fetch(
        `http://localhost:5000/api/v1/${User["username"]}/posts/${target["post_id"]}`,
        requestOptions
      ).then((response) => {
        /* if (response.status === 201) {
          props.history.push("/consirm");
          setTimeout(() => {
            props.history.push(`/profile/user=${User["username"]}`);
          }, 1000);
        } else {
          console.log("not saver status: ", response.status);
        } 
        console.log(response);
        console.log("here");
      }); */
    } catch (e) {
      console.log("Saving failed: ");
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
        placeholder={Target.title}
      />

      <textarea
        onInput={onDescChange}
        name="description"
        id="description"
        cols="30"
        rows="10"
        placeholder={desc}
      ></textarea>
      <EditorJs
        data={JSON.parse(Target.body)}
        tools={Tools}
        autofocus={true}
        instanceRef={async (editorInstance) => {
          // invoked once the editorInstance is ready
          //still some work here must execute

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

export default UpdatePost;
