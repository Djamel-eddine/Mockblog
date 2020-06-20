import React, { useState, useContext, useEffect } from "react";
import EditorJs from "react-editor-js";
import { UserContext } from "../../../resources/states/userContext";
import { Tools } from "./tools";
import axios from "axios";
import "./editor.scss";
import TagEditor from "react-tageditor";

/* import Taggle from "taggle";
var text = document.getElementById("example-event");

// Make sure to return true or false in onBeforeTagAdd and onBeforeTagRemove
new Taggle("example", {
  onBeforeTagAdd: function (event, tag) {
    return window.confirm("You really wanna add " + tag + "?");
  },
  onTagAdd: function (event, tag) {
    text.innerHTML = "You just added " + tag;
  },
  onBeforeTagRemove: function (event, tag) {
    return window.confirm("You really wanna remove " + tag + "?");
  },
  onTagRemove: function (event, tag) {
    text.innerHTML = "You just removed " + tag;
  },
}); */

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
  const data = {};

  const onTitleChange = (e) => {
    settitle(e.target.value);
    console.log(e.target.style);
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
      /* outputData.title = title;
      outputData.desc = desc; */
      /* const output = [outputData];

      console.log("Article data: ", output);
      const new_posts_list = output.concat(Posts);
      setPosts(new_posts_list);
      props.history.push(`/profile/user=:${User["username"]}`); */
      axios
        .post(
          `http://localhost:5000/api/v1/${User["username"]}/posts`,
          {
            title: title,
            /* desc: desc, */
            body: outputData,
            tags: tags,
            is_published: published,
            /* category: null, */
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
        /* data={data} */
        autofocus={true}
        tools={Tools}
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
      {/* <TagEditor tags={[]} delimiters={[]} placeholder="tags" /> */}
      <TagEditor
        tags={tags}
        delimiters={[13, ","]}
        placeholder="add tags..."
        onChange={handleTagsChange}
      />
      {/* <div className="output">Tags output: {tags.join(", ")}</div> */}

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
