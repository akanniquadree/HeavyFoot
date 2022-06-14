import React from 'react'
import MiddleDisplay from './MiddleDisplay'
import "./singleProductDisplay.css"


export default function TopDisplay() {
  return (
    <div className="topDisplay">
        <div className="topDisplayWrapper">
            <div className="topDisplayLeft">

            </div>
            <div className="topDisplayRight">
                <div className="topDisplayRIghtWrapper">
                    <h4>Apple Phone Xr</h4>
                    <span>$50,000</span>
                    <p>$70,000</p>
                    <div className="topDisplayAvail">
                        <span>Item code: #668690279338</span>
                        <p>Availability: <b>In Stock</b></p>
                    </div>
                    <p>
                    Meet the iPhone X - the device that’s
                    so smart that it responds to a tap, 
                    your voice, and even a glance. Elegantly 
                    designed with a large 14.73 cm (5.8) Super 
                    Retina screen and a durable front-and-back 
                    glass, this smartphone is designed to impress 
                    you can charge this iPhone wirelessly.
                    </p>
                    <h5>Available Option:</h5>
                    <div className="QtyWrapper">
                        <div className="qty">
                            <p className="float-left">Qty:</p>
                            <input type="number" min="01" step="1" max="10" value="1" name="num"/>
                        </div>
                        <div className="size">
                            <p class="float-left">Size:</p>
                            <select class="">
                                <option value="x">X</option>
                                <option value="s">S</option>
                                <option value="xl">XL</option>
                                <option value="xxl">XXL</option>
                            </select>
                        </div>
                    </div>
                    <hr/>
                  
                    <button className='addbtn' >Add To Cart</button>  
    
                    
                </div>
            </div>
        </div>
        
        <MiddleDisplay/>
    </div>
  )
}
