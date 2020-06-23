import React, { useState, useEffect, useContext } from "react";

import Output from "editorjs-react-renderer";
import axios from "axios";
import { UserContext } from "../../resources/states/userContext";
import "./style/article.scss";

function Article(props) {
  const { user, target } = useContext(UserContext);
  const [User, setUser] = user;

  const [Target, setTarget] = target;
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("description");
  const id = props["id"];
  const Token = window.localStorage.getItem("mockblogtoken");

  const data = {
    time: 1564767102436,
    blocks: [
      {
        type: "header",
        data: {
          level: 4,
          text: "Editor.js React Renderer",
        },
      },
      {
        type: "image",
        data: {
          file: {
            url:
              "https://cdn1.imggmi.com/uploads/2019/8/24/fdbf3465641e401ebe0ec58d278656d1-full.jpg",
          },
          caption: "Test Caption",
          withBorder: false,
          stretched: false,
          withBackground: false,
        },
      },
      {
        type: "embed",
        data: {
          service: "coub",
          source: "https://coub.com/view/1czcdf",
          embed: "https://coub.com/embed/1czcdf",
          width: 580,
          height: 320,
          caption: "My Life",
        },
      },
      {
        type: "paragraph",
        data: {
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusantium veritatis dolorum cum amet! Ipsa ullam nisi, dolor explicabo ut nobis repudiandae saepe illo error facilis consectetur, quisquam assumenda dolorum.",
        },
      },
      {
        type: "quote",
        data: {
          text:
            '&nbsp;<b>Lorem</b>&nbsp; ipsum dolor sit amet <mark class="cdx-marker">consectetur</mark> adipisicing elit. Doloremque accusantium veritatis dolorum cum amet! Ipsa ullam nisi, dolor explicabo ut nobis repudiandae saepe illo error facilis consectetur, quisquam assumenda dolorum.',
          caption: "Anonymous",
          alignment: "left",
        },
      },
      {
        type: "table",
        data: {
          content: [
            ["Name", "Age", "Position", "SSN"],
            [
              "Jack&nbsp;",
              "<strong>51</strong>",
              "All trades",
              "654654414131333",
            ],
            [
              "John Doe",
              "<strong>32</strong>",
              "Senior Consultant",
              "0002145465145641",
            ],
          ],
        },
      },
      {
        type: "warning",
        data: {
          message: "This is a warning!",
        },
      },
      {
        type: "list",
        data: {
          items: ["<i>Item one</i>", "Another item", "<strong>Item 3</strong>"],
          style: "ordered",
        },
      },
      {
        type: "checklist",
        data: {
          items: [
            {
              text: "Gather requirements",
              checked: true,
            },
            {
              text: "Develop API",
              checked: true,
            },
            {
              text: "Notify stakeholders",
              checked: false,
            },
          ],
        },
      },
      {
        type: "delimiter",
        data: {},
      },
    ],
    version: "2.14.0",
  };

  return (
    <div className="seepost-container">
      <h1>{`${Target.title}`}</h1>
      <h3>{`${desc}`}</h3>
      <div className="blocksContainer">
        <div className="postBlocks">
          <Output data={JSON.parse(Target.body)} />
        </div>
      </div>
    </div>
  );
}

export default Article;
