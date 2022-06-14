import { AddCircle, DeleteForever, RemoveCircle } from '@material-ui/icons'
import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Topbar from '../../Components/Topbar/Topbar'
import "./cart.css"

export default function Cart() {
  return (
    <>
        <Topbar/>
        <div className="cart">
            <div className="cartWrapper">
                <div className="cartLeft">
                    <div className="cartLeftWrapper">
                        <div className="cartLeftTop">
                            <h5>Cart(6)</h5>
                        </div>
                        <div className="cartLeftBottom">
                            <div className="cartLeftBottomRight">
                                <img src="./Images/boxer.jpg" alt="" />
                            </div>
                            <div className="cartLeftBottomMiddle">
                                <h5>Boxer Long Pant</h5>
                                <p>dmnjhgfjfbdhsdjkdjjfdhkldfhjfdhjkfdhfjkhjd
                                    dlklkjklfjdklfflfkjklfdjlfkjdflkjkldjfkljfdkf
                                    skdjdjksdjdkjdlsdlskdlsdkksd;lkjshjddjjhld
                                </p>
                                <DeleteForever htmlColor='red' size="20px" style={{cursor:"pointer"}}/>
                            </div>
                            <div className="cartLeftBottomLeft">
                                <h5>$20,000</h5>
                                <span>$40,000</span>
                                <div className="cartLeftBottomBut">
                                    <AddCircle className="cartLeftButton"/>
                                    <span>1</span>
                                    <RemoveCircle className="cartLeftButton"/>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="cartLeftBottom">
                            <div className="cartLeftBottomRight">
                                <img src="./Images/boxer.jpg" alt="" />
                            </div>
                            <div className="cartLeftBottomMiddle">
                                <h5>Boxer Long Pant</h5>
                                <p>dmnjhgfjfbdhsdjkdjjfdhkldfhjfdhjkfdhfjkhjd
                                    dlklkjklfjdklfflfkjklfdjlfkjdflkjkldjfkljfdkf
                                    skdjdjksdjdkjdlsdlskdlsdkksd;lkjshjddjjhld
                                </p>
                                <DeleteForever htmlColor='red' size="20px" style={{cursor:"pointer"}}/>
                            </div>
                            <div className="cartLeftBottomLeft">
                                <h5>$20,000</h5>
                                <span>$40,000</span>
                                <div className="cartLeftBottomBut">
                                    <AddCircle className="cartLeftButton"/>
                                    <span>1</span>
                                    <RemoveCircle className="cartLeftButton"/>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="cartLeftBottom">
                            <div className="cartLeftBottomRight">
                                <img src="./Images/boxer.jpg" alt="" />
                            </div>
                            <div className="cartLeftBottomMiddle">
                                <h5>Boxer Long Pant</h5>
                                <p>dmnjhgfjfbdhsdjkdjjfdhkldfhjfdhjkfdhfjkhjd
                                    dlklkjklfjdklfflfkjklfdjlfkjdflkjkldjfkljfdkf
                                    skdjdjksdjdkjdlsdlskdlsdkksd;lkjshjddjjhld
                                </p>
                                <DeleteForever htmlColor='red' size="20px" style={{cursor:"pointer"}}/>
                            </div>
                            <div className="cartLeftBottomLeft">
                                <h5>$20,000</h5>
                                <span>$40,000</span>
                                <div className="cartLeftBottomBut">
                                    <AddCircle className="cartLeftButton"/>
                                    <span>1</span>
                                    <RemoveCircle className="cartLeftButton"/>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="cartLeftBottom">
                            <div className="cartLeftBottomRight">
                                <img src="./Images/boxer.jpg" alt="" />
                            </div>
                            <div className="cartLeftBottomMiddle">
                                <h5>Boxer Long Pant</h5>
                                <p>dmnjhgfjfbdhsdjkdjjfdhkldfhjfdhjkfdhfjkhjd
                                    dlklkjklfjdklfflfkjklfdjlfkjdflkjkldjfkljfdkf
                                    skdjdjksdjdkjdlsdlskdlsdkksd;lkjshjddjjhld
                                </p>
                                <DeleteForever htmlColor='red' size="20px" style={{cursor:"pointer"}}/>
                            </div>
                            <div className="cartLeftBottomLeft">
                                <h5>$20,000</h5>
                                <span>$40,000</span>
                                <div className="cartLeftBottomBut">
                                    <AddCircle className="cartLeftButton"/>
                                    <span>1</span>
                                    <RemoveCircle className="cartLeftButton"/>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cartRight">
                    <div className="cartRightWrapper">
                        <h5>CART SUMMARY</h5>
                        <div className="cartRightLeft">
                            <span>Subtotal</span>
                            <h5>$20,000</h5>
                        </div>
                        <span>Delivery Fees not included</span>
                        <button>Proceed To CheckOut</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}
