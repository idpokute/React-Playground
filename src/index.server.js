import React from "react";
import ReactDOMServer from "react-dom/server";

const html = ReactDOMServer.renderToString(<div>Hello SSR!</div>);

console.log(html);
