import React from "react";
import ReactDOM from "react-dom/client";
import Mobile from "./Component/Mobile";
// import Content from "./Component/Content";
import Header from "./Component/Header";
import Subheader from "./Component/Subheader";
import Cart from "./Component/Cart";
import Home from "./Component/Home";
import SignIn from "./Component/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Electronics from "./Component/Electronics";
function Result() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Subheader/>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/cart" element={ <Cart />}/>
        <Route path="/signin" element={ <SignIn />}/>
        <Route path="/mobile" element={ <Mobile />}/>
        <Route path="/electronics" element={ <Electronics />}/>
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