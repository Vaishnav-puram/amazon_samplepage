import React from "react"
// import Header from "./Header"
// import Subheader from "./Subheader"
import Content from "./Content"
import Cart from "./Cart"
export default function Home({inputState}) {
    return (
        <>
            {/* <Header/>
            <Subheader/> */}
            <Cart/>
            <Content inputState={inputState}/>
        </>
    )
}
