import React from 'react'
import "./shippingAddress.css"
import Footer from '../../Components/Footer/Footer'
import Topbar from '../../Components/Topbar/Topbar'
import CheckoutStep from '../../Components/CheckoutStep/CheckoutStep'

function ShippingAddress() {
  return (
    <>
      <Topbar/>
      <div className="shipping">
        <div className="shippingWrapper">
          <CheckoutStep step1/>
          <form action="">
            <label htmlFor="">Name:</label>
            <input type="text"  placeholder='Enter your Full Name'/>
            <label htmlFor="">Phone No:</label>
            <input type="text"  placeholder='Enter your Phone Number'/>
            <label htmlFor="">Shipping Address</label>
            <input type="text"  placeholder='Enter your Mailing Address'/>
            <label htmlFor="">State:</label>
            <input type="text"  placeholder='Enter State/Region'/>
            <label htmlFor="">City:</label>
            <input type="text"  placeholder='Enter your City'/>
            <label htmlFor="">L/G:</label>
            <input type="text"  placeholder='Enter your Local Government'/>
            <button>Continue</button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default ShippingAddress