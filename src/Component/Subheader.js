import React from "react"
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { useState } from "react";
export default function Subheader() {
    function primemembership() {
        window.open("https://www.amazon.in/amazonprime?ref=in-pr-tryprime-unrec-multi-benefit")
    }
    const [isHovering, setIsHovering] = React.useState(false);
    const handleMouseOver = () => {
        setIsHovering(hovering=>!hovering);
    };
    //   const handleMouseOut = () => {
    //     setIsHovering(false);
    //   };
    const [clicked, setClicked] = React.useState(false);

    function mouseClicked() {
        setClicked(prevClicked => !prevClicked);
        //   console.log("clicked")
    }
    function close(){
        document.getElementById("hide").style.display="none";
    }

    return (
        <div>
            <ul className="Items">
                <i class="fa fa-bars"></i>
                <li>All</li>
                <Link to="/cart" className="link"><li>Best sellers</li></Link>
                <Link to="/mobile" className="link"><li>Mobiles</li></Link>
                <li>Custom Service</li>
                <li>Deal of the day</li>
                <li>Fashion</li>
                <Link to="/electronics" className="link"><li>Electronics</li></Link>
                <li onMouseOver={()=>handleMouseOver()} >Prime <MdArrowDropDown /></li>
                <li>Home & Kitchen</li>
                <li>Amazon pay</li>
                <li>New releases</li>
                <li>Computers</li>
                <li>Books</li>
            </ul>
            <div className="HIDE">
            {isHovering&&<div className="hide">
                <div className="perksOfPrime">
                    <span className="cross" onClick={close} >X</span>
                    <span>WELCOME TO PRIME</span>
                    <span>Enjoy unlimited benifits all year</span>
                    <span>Free fast delivery</span>
                    <span>Latest movies & TV Shows</span>
                    <span>AD Free Music</span>
                    <button className="join" onClick={() => { primemembership();}}>Join Prime</button>
                </div>
            </div>}

            </div>
        </div>
    )
}