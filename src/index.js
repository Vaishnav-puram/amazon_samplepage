import React ,{useState}from "react";
import ReactDOM from "react-dom/client";
// import Content from "./Component/Content";
import Header from "./Component/Header";
import Subheader from "./Component/Subheader";
import Cart from "./Component/Cart";
import Home from "./Component/Home";
import SignIn from "./Component/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Mobile from "./Component/Mobile";
import Electronics from "./Component/Electronics";
import Error from "./Component/Error";
function Result() {
  let [inputState,setInputState]=React.useState('sample');
  return (
    <>
    <BrowserRouter>
    <Header setInputState={setInputState}/>
    <Subheader/>
      <Routes>
        <Route path="/" element={ <Home inputState={inputState}/>}/>
        <Route path="/cart" element={ <Cart />}/>
        <Route path="/signin" element={ <SignIn />}/>
        <Route path="/mobile" element={ <Mobile />}/>
        <Route path="/electronics" element={ <Electronics />}/>
        <Route path="*" element={ <Error />}/> {/*to display error page we use path as "*" */} 
      </Routes>
      <Routes>
        
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