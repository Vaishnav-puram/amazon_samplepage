import React, { useState ,useEffect} from 'react'
import Logo from "./images/amazonLogo.PNG"
import { Link } from "react-router-dom";
import { BsInfo } from "react-icons/bs";
export default function CreateAccount() {
  const [regestration, setRegestration] = React.useState({
    name: "",
    number: "",
    email: "",
    password: ""
  });
  const [record, setRecord] = React.useState([])

  const [formError,setFormErrors]=React.useState({})

  const [isSubmit,setIsSubmit]=React.useState(false)

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value)
    setRegestration({ ...regestration, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("refresh is prevented!!")
    const newRecord = { ...regestration, id: new Date().getTime().toString() }
    setRecord([...record, newRecord])
    console.log(record)
    setRegestration({
      name: "",
      number: "",
      email: "",
      password: ""
    })
    setFormErrors(validate(regestration));
    setIsSubmit(true);

  }
  useEffect(()=>{
    console.log(formError)
    if(Object.keys(formError).length===0&&isSubmit){
      console.log(regestration)
    }
  },[formError])

  const validate=(values)=>{
     const error={}
      if(!values.name){
        error.name="name is required!!"
      }
      if(!values.email){
        error.email="email is required!!"
      }
      if(!values.number){
        error.number="phone number is required!!"
      }
      if(!values.password){
        error.password="password is required!!"
      }else if(values.password.length<6){
        error.password="password length must be more than six!!"
      }
      return error;
  }

  return (
    <div >
      {Object.keys(formError).length===0&&isSubmit?
      (<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>SignIn Successful</div>):
      (<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>please don't leave fields with *</div>)}
      <img src={Logo} className="sign" />
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <h2 className='ca'>Create Account</h2>

          <span>Your name <span style={{color:"red",fontSize:"small"}}> *</span></span>
          <input type="text" name="name" id="name"
            value={regestration.name}
            onChange={handleInput}
            style={{ width: "333px" }} />
          <p style={{color:"red",fontSize:"small"}}>{formError.name}</p>
          <span>Mobile number <span style={{color:"red",fontSize:"small"}}> *</span></span>
          <div className='mobilenum'>
            <input type="number"
              style={{ width: "45px" }} />
            <input type="text" name='number'
              value={regestration.number}
              onChange={handleInput}
              style={{ width: "285px" }} />
          </div>
          <p style={{color:"red",fontSize:"small"}}>{formError.number}</p>
          <span>Email<span style={{color:"red",fontSize:"small"}}> *</span></span>
          <input type="email" name='email' id='email'
            value={regestration.email}
            onChange={handleInput}
            style={{ width: "333px" }} />
          <p style={{color:"red",fontSize:"small"}}>{formError.email}</p>
          <span>Password<span style={{color:"red",fontSize:"small"}}> *</span></span>
          <input type="password" name='password' id='password'
            value={regestration.password}
            onChange={handleInput}
            style={{ width: "333px" }} />
          <p style={{color:"red",fontSize:"small"}}>{formError.password}</p>  
          <span style={{ fontSize: "13px" ,marginTop:"2px"}}><BsInfo />password must haveat least 6 characters</span>
          <button style={{ backgroundColor: "#F2C962" , marginBottom:"9px",marginTop:"9px"}} className="continue" type='submit' value="submit">Continue</button>
        </form>
      </div>
      <div className='ahc'>Already have an account?<Link to="/signin" className="link"><button className=' '>Sign in</button></Link></div>
      {/* <div>
      {
        record.map((ele)=>{
          return(
            <>
            <span>{ele.name}</span>
            <span>{ele.number}</span>
            <span>{ele.email}</span>
            <span>{ele.password}</span>
            </>

          )
        })
      }
    </div> */}
    </div>
  )
}
