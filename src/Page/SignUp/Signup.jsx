import React, { useContext, useState }from 'react'
import { Link } from 'react-router-dom'
import { register } from '../../ApiCall'
import Footer from '../../Components/Footer/Footer'
import Topbar from '../../Components/Topbar/Topbar'
import { AuthContext } from '../../Context/AuthContext'
import "./signup.css"

export default function Signup() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState(0)
  const [password, setPassword] = useState("")
  const [password_confirmation, setPasswordConfirm] = useState("")
  const {isFetching, error, dispatch} = useContext(AuthContext)
  const redirect = window.location.search ? window.location.search.split("=")[1] : "/"
  const RegisterHandle = (e) =>{
    e.preventDefault()
    register({firstName,lastName, userName, email, phone, password,password_confirmation}, dispatch, redirect)
  }
  return (
    <>
        <Topbar/>
        <div className="signup">
            <form onSubmit={RegisterHandle} className='signupForm'>
                <h4>Create Account with us</h4>
                <div className="signupTop">
                 <input type="text" placeholder='Enter your First Name' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}  required/>   
                 <input type="text" placeholder='Enter your Last Name' value={lastName} onChange={(e)=>{setLastName(e.target.value)}} required/>   
                </div>
                <div className="signupTop">
                 <input type="text" placeholder='Enter your Username' value={userName} onChange={(e)=>{setUserName(e.target.value)}} required />   
                 <input type="email" placeholder='Enter your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}  required/>   
                </div>
                <div className="signupTop">
                 <input type="password" placeholder='Enter your Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required />   
                 <input type="password" placeholder='Re:Enter your Password' value={password_confirmation} onChange={(e)=>{setPasswordConfirm(e.target.value)}} required/>   
                </div>
                <div className="signupTop">
                 <input type="number" placeholder='Enter your Phone Number (Optional)' value={phone} onChange={(e)=>{setPhone(e.target.value)}} required/>   
                </div>
                <div className="signupTop2">
                 <input type="checkbox"required />
                 <span>I accept the <Link to="">Terms And Conditions</Link>Privacy and Cookies Notice</span>
                </div>
                <div className="signupTop2">
                 <button type='submit'>Create Account</button>
                </div>
            
                 <p>Already Have an Account</p>
                 <Link to={redirect === "/" ? "/login" : "/login?redirect=" +redirect}>LOGIN</Link>
          
                
            </form>
        </div>
        <Footer/>
    </>
  )
}
