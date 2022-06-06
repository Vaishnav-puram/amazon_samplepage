/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Logo from "./images/amazonLogo.PNG"
export default function SignIn() {
    return (
        <div >
            <img src={Logo} className="sign"/>
            <div className="signIn">
                <h2>Sign-In</h2>
                <span style={{ fontWeight: "bolder" ,marginTop:"3px" , fontSize:"small"}}>Email or mobile phone number</span>
                <input type="text" style={{marginTop:"3px",width:"330px"}}/>
                <button className='continue' style={{ backgroundColor: "#F4D27E", borderStyle:"groove",borderWidth:"1px" ,marginTop:"10px" ,width:"330px" }}>Continue</button>
            </div>
        </div>
    )
}
