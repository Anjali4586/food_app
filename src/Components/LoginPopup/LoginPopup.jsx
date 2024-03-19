import React ,{useState}from 'react'
import cross_icon from '../assets/assets/cross_icon.png'
import './LoginPopup.css'


const LoginPopup = ({setShowLogin}) => {

    const[currentState,setCurrentState] = useState("Login")

  return (
    <div className='login-pop-up'>
        <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img src={cross_icon} alt="cross" onClick={()=>setShowLogin(false)}/>
            </div>
            <div className="login-pop-up-inputs">
                {currentState==="Login"?<></>:
                <input type="text" placeholder='your name ' required/>}
                <input type="email" placeholder='your email ' required/>
                <input type="password" placeholder='your password ' required/>
            </div>
            <br/>
            <button>{currentState==="Sign Up"?"CreateAccount":"LogIn"}</button>
            <div className="login-popup-condition">
                <input type='checkbox' required/>
                <p>By Continuing,i agree to terms of privacy and policy</p>
            </div>
            {currentState==="Login" 
            ?<p>create a new account?<span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
            :<p>Already have an account?<span onClick={()=>setCurrentState("Login")}>Login here</span></p>
  }
        </form>

    </div>
  )
}

export default LoginPopup