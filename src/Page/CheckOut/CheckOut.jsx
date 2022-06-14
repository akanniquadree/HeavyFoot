import React from 'react'
import { Link } from 'react-router-dom'
import CheckoutStep from '../../Components/CheckoutStep/CheckoutStep'
import Footer from '../../Components/Footer/Footer'
import Topbar from '../../Components/Topbar/Topbar'
import "./checkout.css"
export default function CheckOut() {
  return (
      <>
        <Topbar/>
        <div className="checkout">
            <div className="checkoutWrapper">
             <div className="checkoutLeft">
                 
                 <div className="checkoutLeftTop">
                     <CheckoutStep step1 step2/>
                     <div className="checkoutLeftTopH5">
                       <h5>Shipping Address</h5>
                       <Link to="/shipping"><span>Change</span> </Link> 
                     </div>
                    <div className="checkoutLeftAdd">
                        <h5>Akanni Quadree</h5>
                        <p>kdmklnfjkldk kdnlffjfldjk kdljfjfkldl kldlfjfdlk djlfndf
                             d;lfokjdflfd;kfdf;kfl;dk';fld;'lf';fl'dkf'dfk;lokf;flk'd;op 
                            lknjhkfhdkdkljfkklfdfjkdfdjkl
                        </p>
                    </div>
                 </div>
                 <div className="checkoutLeftBottom">
                    <div className="checkoutLeftTopH5">
                       <h5>Shipping Details</h5>
                       
                    </div>
                    <div className="checkoutLeftBottoms">
                        <p style={{borderBottom:" 1px solid rgb(182, 179, 179)", color:"black", textAlign:"center"}}>Shipment 1 of 1</p>
                       <p><span style={{marginRight:"6px"}}>1x-      </span>4-Burner Gas Cooker C K-5400 NG - Inox</p>
                       <p><span style={{marginRight:"6px"}}>1x-      </span>4-Burner Gas Cooker C K-5400 NG - Inox</p>
                       <p><span style={{marginRight:"6px"}}>1x-      </span>4-Burner Gas Cooker C K-5400 NG - Inox</p>
                       <p>Delivered by <b style={{color:"black"}}>Wednesday 15 Jun</b></p>
                    </div>
                    <div className="checkoutLeftSub">
                        <h5>Subtotal</h5>
                        <span>$20,000</span>
                    </div>
                    <div className="checkoutLeftSub" style={{borderBottom:" 1px solid rgb(182, 179, 179)"}}>
                        <h5>Delivery Fees</h5>
                        <span>$20,000</span>
                    </div>
                    <div className="checkoutLeftSub" style={{borderBottom:" 1px solid rgb(182, 179, 179)"}}>
                        <h5>Total</h5>
                        <span>$40,000</span>
                    </div>
                    <button className='botton'>Proceed To Payment</button>
                 </div>
             </div>
            <div className="checkoutRight">
                <div className="checkoutRightWrapper">
                    <div className="checkoutLeftTopH5">
                        <h5 style={{marginLeft:"10px"}}>Your Order(2)</h5> 
                    </div>
                    <div className="checkoutRightTop">
                        <div className="checkoutRightTopImg">
                            <img src="/Images/boxer.jpg" alt="" />
                        </div>
                        <div className="checkoutRightTopDetail">
                            <h5>4-Burner Gas Cooker C K-5400 NG - Inox</h5>
                            <span>$20,000</span>
                            <p>Qty: 2</p>
                        </div>
                    </div>   
                    <div className="checkoutRightTop">
                        <div className="checkoutRightTopImg">
                            <img src="/Images/boxer.jpg" alt="" />
                        </div>
                        <div className="checkoutRightTopDetail">
                            <h5>4-Burner Gas Cooker C K-5400 NG - Inox</h5>
                            <span>$20,000</span>
                            <p>Qty: 2</p>
                        </div>
                    </div>   
                    <div className="checkoutRightTop">
                        <div className="checkoutRightTopImg">
                            <img src="/Images/boxer.jpg" alt="" />
                        </div>
                        <div className="checkoutRightTopDetail">
                            <h5>4-Burner Gas Cooker C K-5400 NG - Inox</h5>
                            <span>$20,000</span>
                            <p>Qty: 2</p>
                        </div>
                    </div> 
                    <div className="checkoutLeftSub" style={{marginLeft:"10px"}}>
                        <h5>Subtotal</h5>
                        <span>$20,000</span>
                    </div>
                    <div className="checkoutLeftSub" style={{marginLeft:"10px",borderBottom:" 1px solid rgb(182, 179, 179)"}}>
                        <h5>Delivery Fees</h5>
                        <span>$20,000</span>
                    </div>
                    <div className="checkoutLeftSub" style={{marginLeft:"10px"}}>
                        <h5>Total</h5>
                        <span>$40,000</span>
                    </div>
                    <Link to="/cart"> 
                    <button className='botton'>Modify Cart</button>
                     </Link>
                </div>
               
            </div>   
            </div>
            
        </div>
        <Footer/>
      </>
   
  )
}
