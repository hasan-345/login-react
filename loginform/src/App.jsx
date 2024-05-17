import { useState,useRef } from 'react'
import './App.css'

function App() {
  const [errors,setErrors] = useState("")
  const Email = useRef()
  const Password = useRef();
  const validateEmail = ()=>{

      if(Email.current.value.length == 0 ){
        setErrors("Please enter Email");
        return false
      }
       if(!Email.current.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) ) {
        setErrors("Please enter valid Email");
        return false
      }
      
        setErrors(true);
        return true;
      
  }
 
  const [passw,setPassw] = useState(false)
  const [upperLo,setUpperLo] = useState(false);
  const [abovez,setAboveZ] = useState(false);
  const [lower,setLo] = useState(false);
  const [symb,setSymbo] = useState(false); // these are all indicators
  const [numbers,setNumbers] = useState(false)
  const validatePassword = ()=>{

    if(action === "Login"){
      ultag.classList.remove("allul")// it means when login page is enabled
       // then it will close all indicators
  }
  
  if(action === "Sign Up") {
  
    if(Password.current.value.length >=0){
      ultag.classList.add("allul")
    }
     if(Password.current == ""){
      ultag.classList.remove("allul")
    }      
  }
    setAboveZ(Password.current.value.length > 0);
    setPassw(Password.current.value.length >= 8);
    setUpperLo(/[A-Z]/.test(Password.current.value));
    setLo(/[a-z]/.test(Password.current.value));
    setSymbo(/[^a-zA-Z0-9\s]/.test(Password.current.value));//regex for symbols
    setNumbers(Password.current.value.match(/\d{2,}/) !== null);
    
   
  }

 


  const ultag = document.getElementById("ulTag");

      const icon = document.getElementById("ic")
  const changeType = ()=>{
     if(Password.current.type === "password"){
      Password.current.type = "text";
      icon.classList.remove("bxs-lock-alt");
      icon.classList.add("bx-lock-open-alt"); 

     }else{
      Password.current.type = "password"
      icon.classList.add("bxs-lock-alt");
      icon.classList.remove("bx-lock-open-alt");
     }
  }
  const [nameError,setNer] = useState()
  const [action,setAction] = useState("Login");
 const nameA = useRef();
  const validateName = ()=>{
    if(nameA.current.value.length == 0){
       setNer("Enter name");
       return false;   //it is validation of name
    }
    if(nameA.current.value == ""){
      setNer(false);
      return false;
    }
     
    setNer(true);
    return true
  }
    


 const SignU = ()=>{    
  if(action === "Login"){
    setAction("Sign Up");
    ultag.classList.add("allul");  
  }
  if(action === "Sign Up"){
    setAction("Login")
    ultag.classList.remove("allul")
  }

 }


  return ( 
    <div className="container">
    <form className="loginForm" onSubmit={(e)=>{e.preventDefault()}} >
      <h1> {action} </h1>  {/*It is name shown as heading*/}


    {/* Show error for name indicator. it is valid only in Sign up form  */}
   {action === "Login"?<div></div>:  <div style={{color: "white"}} >  {nameError}   </div>}  
   
    {/* This is nameField which is valid in Sign up and not valid in login   */}
   {action === "Login"? <div> <input type="text" hidden  ref={nameA} placeholder='Name' onKeyUp={validateName} /></div> :  <div className="input">   <input type="text"  ref={nameA} placeholder='Name' onKeyUp={validateName} /> <div className='double-icons'>  {nameError === true? <i className='bx bx-check-double'></i>: <i></i> }   <i className='bx icon bxs-user'></i></div></div> }
  
  
   {/* Show error for email indicator*/}
   <div style={{color: "white"}} >  {errors}   </div>
   {/* This is emailField   */}
   <div className="input">   <input type="email"  ref={Email}   placeholder='Email' onChange={validateEmail} /> <div className='double-icons'>  { action === "Login"? <i></i>: (errors === true? <i class='bx bx-check-double'></i>: <i></i>) }   <i className='bx bxs-envelope'></i></div></div>
  
  
   {/* Show error for password indicator*/}
   <div style={{color: "white"}} >  {passw}   </div>
   {/* This is passwordField   */}
   <div className="input"> <input type="password" ref={Password}  placeholder='Password' onChange={validatePassword}/>  <div className='double-icons'>  { action === "Login"?  <i></i> :  (abovez && upperLo && lower && passw && symb ? <i className='bx bx-check-double'></i>: <i></i>) }   <i className="bx bxs-lock-alt"  id='ic' onClick={changeType} ></i></div></div>
    
      
       <ul id='ulTag' >
     <li>  {abovez == true?<i className='bx wh bx-check-double'></i>:<i className='bx bxs-error-circle'></i>  }   Enter password </li>
      <li>{upperLo == true?<i className='bx wh bx-check-double'></i>:<i className='bx bxs-error-circle'></i>  } Upper Case letters </li>
    <li>{symb == true?<i className='bx wh bx-check-double'></i>:<i className='bx bxs-error-circle'></i>  } Symbols</li>
      <li>{passw == true?<i className='bx wh bx-check-double'></i>:<i className='bx bxs-error-circle'></i>  }  Atleast 8 charactors</li>
     <li>{lower == true?<i className='bx wh bx-check-double'></i>:<i className='bx bxs-error-circle'></i>  } Lower Case letters </li>
     <li>{numbers == true?<i className='bx wh bx-check-double'></i>:<i className='bx bxs-error-circle'></i>  } Numbers </li>
     </ul>        
   
    
    <div className="text">
      <div className="rem">
      <label htmlFor="check">
      <input type="checkbox" name="" id="check" />
      Remember me
      </label></div>
      <div className="forgot">
        Forgot password?
      </div>
    </div>                                                                      {/*this below section is for validation in login page of password if you don't agree you can remove it and set '<></>'*/}                                       
    <div className="btn"><button id='btnLo' disabled={ action === "Login"? (abovez && upperLo && lower && passw && symb && errors === true ? false:true):(abovez && upperLo && lower && passw && symb && errors === true && nameError === true ? false:true)   }  > {action} </button>  </div>
      <div className="dont">Don't have an account? <span style={{cursor:"pointer"}}  onClick={SignU} > {action === "Login"? "Sign Up":"Login"} </span></div>
      <div className="icons"><i className='bx bxl-google'></i><i className='bx bxl-facebook-circle'></i><i className='bx bxl-twitter'></i><i className='bx bxl-linkedin-square'></i><i className='bx bxl-whatsapp'></i></div>
    </form>
</div>

  )
}

export default App
