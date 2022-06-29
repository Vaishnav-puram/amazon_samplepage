import React from "react";
import Logo from "./images/Amazon.png";
import { Link } from "react-router-dom";
import { IoIosPin } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import {MdOutlineAccountCircle} from "react-icons/md"
export default function Header({ setInputState }) {
    function manageInput(e) {
        let { value } = e.target
        setInputState.setInputState(value)
    }
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
                <input type="text" placeholder="search here..." className="search" onChange={manageInput} />
                <ul className="list">
                    {/* <li><i class="fa fa-search" style="font-size:24px"></i></li> */}
                    <li className="dropdown"><Link to="/signup" className="link" style={{ position:"relative",display:"inline-block",fontSize:"medium"}}><MdOutlineAccountCircle/></Link>
                    <div class="dropdown-content">
                        <p>SignIn</p>
                    </div>
                    </li>
                    
                    <li>returns & orders</li>
                    <li className="CART">
                        <Link to="/cart1" className="link"><BsCart className="cart" /></Link>
                        cart
                        <div className="num">{setInputState.cart.length}</div>
                    </li>

                </ul>
            </nav>
        </div>
    )
}