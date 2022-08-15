import React, { useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../Components/Footer/Footer'
import Topbar from '../../../Components/Topbar/Topbar'
// import { AuthContext } from '../../Context/AuthContext'
import "./signup.css"

export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const {user, isFetching, error, dispatch} = useContext(AuthContext)
  const loginHandle = (e) =>{
    e.preventDefault()
    // Logi({email, password}, dispatch)
  }
  return (
    <>
        <div className="adminsignin">
            <form action="" className='adminsigninForm' onSubmit={loginHandle}>
                <h4>LOGIN</h4>
                <div className="adminsigninTop"> 
                 <input type="email" placeholder='Enter your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>   
                </div>
                <div className="adminsigninTop">
                 <input type="password" placeholder='Enter your Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required />  
                </div>
                <div className="adminsigninTop2">
                 <button type='submit'>LOGIN</button>
                </div>
                {/* <p>{error}</p> */}
            </form>
        </div>
    </>
  )
}
