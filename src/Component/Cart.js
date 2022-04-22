/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo1 from "./images/Screenshot (49).png";
import logo2 from "./images/Screenshot (46).png";
import logo3 from "./images/Screenshot (47).png";
import logo4 from "./images/Screenshot (48).png";
import logo5 from "./images/Screenshot (50).png";
export default function Cart(){
    return(
        <div>
            <div className="top">
            <img src={logo1} className="img1" />
            </div>
            <div className="others">
            <img src={logo2} className="img2"/>
            <img src={logo3} className="img3"/>
            <img src={logo4} className="img4"/>
            <img src={logo5} className="img5"/>
            </div>
        </div>
    )
}