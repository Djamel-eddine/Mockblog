import React, { useState, useContext, useEffect } from "react";
import EditorJs from "react-editor-js";
import { UserContext } from "../../../resources/states/userContext";
import { Tools } from "../postEditor/tools";
import "../postEditor/css/editor.css";
import axios from "axios";

const UpdatePost = (props) => {
  const { posts, token, user } = useContext(UserContext);
  const [Posts, setPosts] = posts;
  const [Token, setToken] = token;
  const [User, setUser] = user;
  const [editor, seteditor] = useState("");
  const id = props.id;
  let outputData = [];
  const [target, settarget] = useState({});
  const [desc, setdesc] = useState(target.desc);
  const [title, settitle] = useState(target.title);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/${User["username"]}/posts/${id}`)
      .then((response) => {
        settarget(response.msgs.Post);
      })
      .catch((e) => {
        console.log("problem occure when try retrieving the post");
      });
  }, []);

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
      outputData.title = title;
      outputData.desc = desc;
      /* const output = [outputData];

      console.log("Article data: ", output);
      const new_posts_list = output.concat(Posts);
      setPosts(new_posts_list);
      props.history.push(`/profile/user=:${User["username"]}`); */
      axios
        .put(
          `http://localhost:5000/api/v1/${User["username"]}/posts/${target["post_id"]}`,
          {
            Title: title,
            Desc: desc,
            Body: outputData,
            Tags: target.tags,
            Published: published,
          },
          {
            headers: { Authorization: `Bearer ${Token}` },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            props.history.push(`/confirm`);
            setTimeout(() => {
              props.history.push(`/profile/user=:${User["username"]}`);
            }, 1600);
          } else {
            alert("there is problem here ");
          }
        })
        .catch((err) => {
          console.log("404 error shit ");
        });
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
  return (
    <div className="editor-container">
      <input
        onChange={onTitleChange}
        type="text"
        name="title"
        id="title"
        placeholder={title}
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
        data={target}
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
      <button className="draft" onClick={saveDraft}>
        save as draft
      </button>
      <button className="btn1" onClick={onSave}>
        PUBLISH
      </button>
    </div>
  );
};

export default UpdatePost;
