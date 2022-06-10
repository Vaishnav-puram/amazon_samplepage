/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "../index.css"
import { IoMdCheckmark } from "react-icons/io";
import { BiRupee } from "react-icons/bi";
import { MdOutlineStarHalf } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useState } from "react";
export default function ElectronicsComp({data}) {
    // console.log(props)
    let badge;
    if (data.best === "true") {
        badge = "Best seller"
    }

    const [isHovering, setIsHovering] = React.useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    }
    const handleMouseOut = () => {
        setIsHovering(false);
    }
    return (
        <>
            {
                data.map((ele) => {
                    return (
                        <div className="Grid">
                            <div className="main">
                                {badge && <div className="best">{badge}</div>}
                                <img src={ele.img} className="logos" />
                                <div className="obj">
                                    <div className="d">{ele.name}</div>
                                    <div className="price"><BiRupee className="rupee" />{ele.price} </div>
                                    {ele.deal === "Limited time deal" && <div className="deal">{ele.deal} </div>}
                                    {ele.coupon > 1 && <div className="mainCoupon"><div className="coupon">Save <BiRupee />{ele.coupon}</div><div className="textCoupon">with coupon</div></div>}
                                    {ele.rating > 4 && <div className="reviews"><div className="stars" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarHalf /></div><div className="rating"> {ele.reviews}</div></div>}
                                    {ele.rating < 3 && <div className="reviews"><div className="stars" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarHalf /></div><div className="rating"> {ele.reviews}</div></div>}
                                    {ele.rating === 3 && <div className="reviews"><div className="stars" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /></div><div className="rating"> {ele.reviews}</div></div>}
                                    {isHovering && <div style={{ fontWeight: "bolder" }}>
                                        {ele.rating} out of 5
                                    </div>}
                                    <div className="save">{ele.save}</div>
                                    <div className="deli"><b>{ele.deli}</b></div>
                                    <div className="primeAvailable">
                                        {ele.prime === "prime" && <div className="prime"><IoMdCheckmark className="check" />{ele.prime}</div>}
                                        {ele.prime === "prime" && <div className="tom">Get it by Tomorrow , {ele.date}</div>}
                                    </div>
                                    {ele.prime === "prime" && <div className="free">Free delivery by Amazon</div>}
                                    <button className="toCart">Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
