/* eslint-disable jsx-a11y/alt-text */
import React ,{useState,useEffect}from 'react'
import Logo from "./images/amazonLogo.PNG"
export default function SignIn() {
    const [credentials,setCredentials]=React.useState({
        email:""
    });

    const [formError,setFormError]=React.useState({});
    const [isSubmit,setIsSubmit]=React.useState(false);
    const [record,setRecord]=React.useState([]);

    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setCredentials({...credentials,[name]:value})
        console.log(value)
    }
    const handleSubmit=(e=>{
        e.preventDefault();
        const newRecord={...credentials,id:new Date().getDate().toString()}
        setRecord(newRecord)
        setCredentials({
            email:""
        })
       setFormError(validate(credentials));
       setIsSubmit(true)
    })

    useEffect(()=>{
        console.log(formError)
        if(Object.keys(formError).length===0&&isSubmit){
          console.log(credentials)
        }
      },[formError])

    const validate=(value)=>{
        const error={}
        if(!value.email){
            error.email="please enter your email / number!!"
        }
        return error;

    }
    return (
        <div >
            {Object.keys(formError).length===0&&isSubmit?
            (<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>signed in as {record.email}</div>)
            :(<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>please enter your email/phone number</div>)}
            <img src={Logo} className="sign"/>
            <div className="signIn">
                <form onSubmit={handleSubmit}>
                <h2>Sign-In</h2>
                <span style={{ fontWeight: "bolder" ,marginTop:"3px" , fontSize:"small"}}>Email or mobile phone number <span style={{color:"red",fontSize:"small"}}> *</span></span>
                <input type="text" name="email" id='email' value={credentials.email} onChange={handleInput} style={{marginTop:"3px",width:"330px"}}/>
                <span style={{color:"red",fontSize:"small"}}>{formError.email}</span>
                <button className='button' style={{ backgroundColor: "#F4D27E", borderStyle:"groove",borderWidth:"1px" ,marginTop:"10px" ,width:"330px",cursor:'pointer',marginLeft:"auto",marginRight:"auto" }}><span>Continue</span></button>
                </form>
            </div>
        </div>
    )
}
