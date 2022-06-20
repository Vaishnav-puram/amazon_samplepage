import React from 'react'
import Logo from "./images/amazonLogo.PNG"
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="empty">
    <div className='parent'>
    <img src={Logo} className="sign"/>
    <div className='sign'>
    <Link to="/signin" className="link"><button className="signinButton" style={{cursor:'pointer'}}>Sign in to your account</button></Link>
    <Link to="/createaccount"><button className="signUpButton" style={{cursor:'pointer'}}>SignUp</button></Link>
    </div>
    <Link to="/" className="link"><button style={{border:"none",marginTop:"10px",height:"30px",borderRadius:"4px",cursor:'pointer'}}>Home</button></Link>
    </div>
  </div>
  )
}
