import Embed from "@editorjs/embed";

import Table from "@editorjs/table";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import Warning from "@editorjs/warning";
/* import Code from "@editorjs/code"; */
import CodeBox from "@bomdi/codebox";
import LinkTool from "@editorjs/link";

import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";

export const Tools = {
  table: {
    class: Table,
    inlineToolbar: true,
  },

  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  header: {
    class: Header,
    inlineToolbar: true,
  },
  embed: {
    class: Embed,
    inlineToolbar: true,
    config: {
      services: {
        youtube: true,
        coub: true,
        codepen: {
          regex: /https?:\/\/codepen.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
          embedUrl:
            "https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",
          html:
            "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
          height: 300,
          width: 600,
          id: (groups) => groups.join("/embed/"),
        },
      },
    },
  },
  list: List,
  warning: {
    class: Warning,
    inlineToolbar: true,
  },

  /*  code: Code, */
  codeBox: {
    class: CodeBox,
    /* config: {
        themeURL: 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/dracula.min.css', // Optional
        themeName: 'atom-one-dark', // Optional
        useDefaultTheme: 'light' // Optional. This also determines the background color of the language select drop-down
      } */
  },
  raw: Raw,
  linkTool: LinkTool,

  quote: {
    class: Quote,
    inlineToolbar: true,
  },

  marker: Marker,
  checkList: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
};
