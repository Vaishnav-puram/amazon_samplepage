/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "../index.css"
import { IoMdCheckmark } from "react-icons/io";
import { BiRupee } from "react-icons/bi";
import { MdOutlineStarHalf } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useState } from "react";
export default function MobileComp(props) {
    console.log(props)
    let badge;
    if (props.ele.best === "true") {
        badge = "Best seller"
    }

    const [isHovering, setIsHovering] = React.useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    };
    const handleMouseOut = () => {
        setIsHovering(false);
    };
  return (
    <div className="Grid">
    <div className="main">
        {badge && <div className="best">{badge}</div>}
        <img src={props.ele.img} className="logos" />
        <div className="obj">
            <div className="d">{props.ele.name}</div>
            <div className="price"><BiRupee className="rupee" />{props.ele.price} </div>
            {props.ele.deal === "Limited time deal" && <div className="deal">{props.ele.deal} </div>}
            {props.ele.coupon > 1 && <div className="mainCoupon"><div className="coupon">Save <BiRupee />{props.ele.coupon}</div><div className="textCoupon">with coupon</div></div>}
            {props.ele.rating > 4 && <div className="reviews"><div className="stars" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarHalf /></div><div className="rating"> {props.ele.reviews}</div></div>}
            {props.ele.rating < 3 && <div className="reviews"><div className="stars" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarHalf /></div><div className="rating"> {props.ele.reviews}</div></div>}
            {props.ele.rating === 3 && <div className="reviews"><div className="stars" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /></div><div className="rating"> {props.ele.reviews}</div></div>}
            {isHovering && <div style={{fontWeight:"bolder"}}>
                {props.ele.rating} out of 5
            </div>}
            <div className="save">{props.ele.save}</div>
            <div className="deli"><b>{props.ele.deli}</b></div>
            <div className="primeAvailable">
                {props.ele.prime === "prime" && <div className="prime"><IoMdCheckmark className="check" />{props.ele.prime}</div>}
                {props.ele.prime === "prime" && <div className="tom">Get it by Tomorrow , {props.ele.date}</div>}
            </div>
            {props.ele.prime === "prime" && <div className="free">Free delivery by Amazon</div>}
        </div>
    </div>


</div>
  )
}
