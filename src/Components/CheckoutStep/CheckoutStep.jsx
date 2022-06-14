import React from 'react'
import "./checkoutStep.css"

export default function CheckoutStep(props) {
  return (
    <div className="checkoutStep">
        <div className={`${props.step1 ? "active" : ""}`}>SignIn</div>
        <div className={`${props.step2 ? "active" : ""}`}>Shipping Address</div>
        <div className={`${props.step3 ? "active" : ""}`}>Checkout</div>
        <div className={`${props.step4 ? "active" : ""}`}>Payment</div>
        <div className={`${props.step5 ? "active" : ""}`}>Reciept</div>
    </div>
  )
}
