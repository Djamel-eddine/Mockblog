import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import CodeBox from "@bomdi/codebox"
import LinkTool from "@editorjs/link";

import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";

export const Tools = {
  embed: Embed,
  table: Table,
  paragraph: Paragraph,
  list: List,
  warning: Warning,
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
  
  header: Header,
  quote: Quote,
  marker: Marker,
  checkList: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
};
