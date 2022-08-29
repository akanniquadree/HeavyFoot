import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Topbar from '../../Components/Topbar/Topbar'
import "./notfound.css"

export default function NotFound() {
  return (
    <>
        <Topbar/>

        <div className='notfoundWrapper'>
            <div className='notfoundContainer'>
                <div className="nofoundLeft">
                    <h1>Page 404</h1>
                    <h3>Not Found</h3>
                    <p>Oops!!! The Page you are looking for does not exist</p>
                    <p>Please go back to the<Link to="/" style={{color:"blue"}}> Home Page</Link></p>
                </div>
                <div className="nofoundRight">
                    <img src="/Images/404.gif" alt="" />
                </div>
            </div>
        </div>

        <Footer/>
    </>
  )
}
