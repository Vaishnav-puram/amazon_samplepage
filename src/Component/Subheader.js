import React from "react"
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { useState } from "react";
export default function Subheader() {
 const [isHovering,setIsHovering]=React.useState(false);
 const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
    return (
        <div>
            <ul className="Items">
                <li>All</li>
                <Link to="/cart" className="link"><li>Best sellers</li></Link>
                <li>Mobiles</li>
                <li>Custom Service</li>
                <li>Deal of the day</li>
                <li>Fashion</li>
                <li>Electronics</li>
                <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Prime <MdArrowDropDown /></li>
                <li>Home & Kitchen</li>
                <li>Amazon pay</li>
                <li>New releases</li>
                <li>Computers</li>
                <li>Books</li>
            </ul>

            {isHovering &&<div className="hide">
                <div className="perksOfPrime">
                    <span>welcome to prime</span>
                    <span>enjoy unlimited benifits all year</span>
                    <span>Free fast delivery</span>
                    <span>Latest movies & TV Shows</span>
                    <span>AD Free Music</span>
                </div>
                </div>}
        </div>
    )
}