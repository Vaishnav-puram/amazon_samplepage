import React from 'react'
import Logo from "./images/amazonLogo.PNG"
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="empty">
    <div className='parent'>
    <img src={Logo} className="sign"/>
    <div className='sign'>
    <Link to="/signin" className="link"><button className="signinButton">Sign in to your account</button></Link>
    <Link to="/createaccount"><button className="signUpButton">SignUp</button></Link>
    </div>
    </div>
  </div>
  )
}
