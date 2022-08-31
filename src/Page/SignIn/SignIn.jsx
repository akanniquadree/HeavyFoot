import { CircularProgress } from '@mui/material'
import React, { useState, useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../../ApiCall'
import Footer from '../../Components/Footer/Footer'
import Topbar from '../../Components/Topbar/Topbar'
import { AuthContext } from '../../Context/AuthContext'
import "./signin.css"

export default function SignIn(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {user, isFetching, error, dispatch} = useContext(AuthContext)
  const redirect = window.location.search ? window.location.search.split("=")[1] : "/"
  useEffect(()=>{
    if(user){    
      window.location.replace(redirect)
    }
    return () =>{
      //
    }
  },[redirect, user])
  const loginHandle = (e) =>{
    e.preventDefault()
    Login({email, password}, dispatch, redirect)
  }
  return (
    <>
        <Topbar/>
        <div className="signin">
            <form action="" className='signinForm' onSubmit={loginHandle}>
                <h4>LOGIN</h4>
                <div className="signinTop"> 
                 <input type="email" placeholder='Enter your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>   
                </div>
                <div className="signinTop">
                 <input type="password" placeholder='Enter your Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required />  
                </div>
                <div className="signinTop2">
                 <button type='submit' disabled={isFetching}>{isFetching ? <CircularProgress size="12px" style={{color:"white"}}/> : "LOGIN"}</button>
                </div>
                <p style={{color:"red"}}>{error}</p>
                 <p>Dont Have an Account</p>
                 <Link to={redirect === "/" ? "/signup" : "/signup?redirect=" +redirect}>Create an Account</Link>
            </form>
        </div>
        <Footer/>
    </>
  )
}
