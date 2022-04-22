import React from "react";
import ReactDOM from "react-dom/client";
import Content from "./Component/Content";
import "./index.css"
function Result(){
    return(
        <>
        <Content/>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Result />
  </React.StrictMode>
);