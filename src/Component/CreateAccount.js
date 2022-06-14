import React from 'react'
import Logo from "./images/amazonLogo.PNG"
import { Link } from "react-router-dom";
import { BsInfo } from "react-icons/bs";
export default function CreateAccount() {
  return (
    <div >
            <img src={Logo} className="sign"/>
            <div className="signup">
               <h2 className='ca'>Create Account</h2>
               <span>Your name</span>
               <input type="text" style={{width:"333px"}}/>
               <span>Mobile number</span>
               <div className='mobilenum'>
               <input type="number" style={{width:"45px"}}/> 
               <input type="text" style={{width:"285px"}}/>
               </div>
               <span>Email(optional)</span>
               <input type="email" style={{width:"333px"}}/>
               <span>Password</span>
               <input type="password" style={{width:"333px"}}/>
               <span style={{fontSize:"13px"}}><BsInfo/>password must haveat least 6 characters</span>
               <button style={{backgroundColor:"#F2C962"}} className="continue">Continue</button>
            </div>
            <div className='ahc'>Already have an account?<Link to="/signin" className="link"><button className='signinButton'>Sign in</button></Link></div>
        </div>
  )
}
