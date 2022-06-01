import React from "react";
import Header from "./Header";
import Subheader from "./Subheader";
import Cart from "./Cart";
import Info from "./Info";
import object from "./Object"
export default function Matter (){
    let Arr = object.map((ele)=>{
        // console.log(ele)
        return(
          <>
         <Info ele={ele}/>  
          </>
        )
      })
    return(
        <div>
        <Header/>
        <Subheader/>
        <Cart/>
        <section className="lists">
        {Arr}
        </section>
        </div>
    )
}