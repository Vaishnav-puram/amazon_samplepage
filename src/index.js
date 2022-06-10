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
import Cart1 from "./Component/Cart1";
function Result() {
  let [inputState, setInputState] = useState('sample');
  // step :1 => for add to cart
  const [cart, setCart] = useState([]); 
  // we are making this state here so that we can use it on any of the other child component

  // function add to cart
  // step :2 => making logic for add to cart 
  function addToCart(product) {
    console.log("clicked on cart",product);
   
    // now using Find method to check whether the product exit in cart or not.
    const productinCart = cart.find((ele) => ele.id === product.id);
    // for empty cart array this find method will not work.

    if (productinCart) {
      // if product exists in cart we map the product and set porduct in cart quatity to increment and otherwise just add new item.
      setCart(cart.map((ele) => ele.id === product.id ? { ...productinCart, quantity: productinCart.quantity + 1 } : ele))
    }
    else {
      // spread opertor
      
      // [...cart]
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }
  return (
    <>
    <BrowserRouter>
    <Header setInputState={{setInputState,cart}}/>
    <Subheader/>
      <Routes>
        <Route path="/" element={ <Home inputState={{inputState,addToCart}}/>}/>
        <Route path="/cart" element={ <Cart />}/>
        <Route path="/signin" element={ <SignIn />}/>
        <Route path="/mobile" element={ <Mobile />}/>
        <Route path="/electronics" element={ <Electronics />}/>
        <Route path="*" element={ <Error />}/> {/*to display error page we use path as "*" */} 
        <Route path="/cart1" element={ <Cart1 cart={{cart,addToCart}} />}/>
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