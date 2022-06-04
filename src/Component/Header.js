import React from "react";
import Logo from "./images/Amazon.png";
import { Link } from "react-router-dom";
import { IoIosPin } from "react-icons/io";
import { BsCart } from "react-icons/bs";
export default function Header() {
    return (
        <div>
            <nav className="nav_bar">
                <Link to="/"><img src={Logo} className="logo" /></Link>
                {/* <img src={Logo} className="logo" /> */}
                {/* <img src=/images/Amazon.png className="logo" /> */}
                {/* above one if image is in public folder */}
                <IoIosPin />
                <h6>Select your address</h6>
                <select className="navoptions">
                  <option>All Categories</option>
                    <option>Alexa Skills</option>
                    <option>Amazon Fresh</option>
                    <option>Beauty</option>
                    <option>Clothing & Accessories</option>
                    <option>Deals</option>
                    <option>Electronics</option>
                    <option>Furniture</option>
                    <option>Music</option>
                    <option>Kindle Store</option>
                    <option>Prime Video</option>
                    <option>Shoes & Handbags</option>

                </select>
                <input type="text" placeholder="search here..." className="search" />
                <ul className="list">
                    {/* <li><i class="fa fa-search" style="font-size:24px"></i></li> */}
                    <li>sign in</li>
                    <li>returns & orders</li>
                    <li><BsCart className="cart" />cart</li>

                </ul>
            </nav>
        </div>
    )
}