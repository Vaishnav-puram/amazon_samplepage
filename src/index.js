import React from "react";
import ReactDOM from "react-dom/client";
// import Content from "./Component/Content";
import Cart from "./Component/Cart";
import Home from "./Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
function Result() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/cart" element={ <Cart />}/>
      </Routes>
    </BrowserRouter>
    
     
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Result />
  </React.StrictMode>
);