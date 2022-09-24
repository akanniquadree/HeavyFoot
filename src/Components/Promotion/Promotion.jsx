import React from 'react'
import "./promotion.css"

export default function Promotion() {
  return (
    <div className="promotion">
        <div className="promotionWrapper">
            <div className="promotionTop">
              <img src="/Images/ad.png" alt="" />
            </div>
            <div className="promotionBottom">
                <h4>GAMING COLLECTION</h4>
                <h2 style={{color:"#f4a51c"}}>Playstation 4</h2>
                <h2>Dualshock Controller</h2> 
                <span>sale price: $125</span>
                <button>Purchase Now</button>
            </div>
        </div>
        
    </div>
  )
}
