import React from "react"
export default function Header(){
    return(
        <div>
            <nav className="nav_bar">
                <h5 className="logo">AMAZON.in</h5>
                <h6>Select your address</h6>
                <input type="text" placeholder="search here..." className="search"/>
                {/* <i className="fas fa-search"/> */}
                {/* <input type="text" placeholder="Search">
                <i class="fa fa-search" aria-hidden="true"></i>
                </input> */}
            <ul className="list">
                {/* <li><i class="fa fa-search" style="font-size:24px"></i></li> */}
                <li>sign in</li>
                <li>returns & orders</li>
                <li>cart</li>
                    
            </ul>
            </nav>
        </div>
    )
}