import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Topbar from '../../Components/Topbar/Topbar'
import "./signin.css"

export default function SignIn() {
  return (
    <>
        <Topbar/>
        <div className="signin">
            <form action="" className='signinForm'>
                <h4>LOGIN</h4>
                <div className="signinTop"> 
                 <input type="email" placeholder='Enter your Email'  required/>   
                </div>
                <div className="signinTop">
                 <input type="password" placeholder='Enter your Password' required />  
                </div>
                <div className="signinTop2">
                 <button>LOGIN</button>
                </div>
                 <p>Dont Have an Account</p>
                 <Link to="/signup">Create an Account</Link>
            </form>
        </div>
        <Footer/>
    </>
  )
}
