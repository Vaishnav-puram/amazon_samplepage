import React from "react";
// import Header from "./Header";
// import Subheader from "./Subheader";
// import Cart from "./Cart";
import Info from "./Info";
// import object from "./Object"
export default function Content({inputState}) {
  return (
    <div>
      {/* <Header />
      <Subheader />
      <Cart /> */}
      <section className="lists">
      <Info ele={{inputState}} />
      </section>
    </div>
  )
}