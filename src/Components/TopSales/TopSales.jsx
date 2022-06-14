import "./topsales.css"
import React from 'react'

export default function TopSales() {
  return (
    <div className="TopSales" style={{marginTop:"20px"}}>
        <div className="TopSalesWrapper">
            <div className="TopSalesTop">
            <h5>Top Sales</h5>
        </div>
        <div className="TopSalesBottom">
            <div className="TopSalesBottomCard">
                <img src="/Images/short.jpg" alt="" />
                <h5>Men Pant Boxers</h5>
                <span>$25 - $50</span>
                <p>1 item remaining</p>
            </div>
            <div className="TopSalesBottomCard">
                <img src="/Images/boxer.jpg" alt="" />
                <h5>Men Pant Boxers</h5>
                <span>$25 - $50</span>
                <p>1 item remaining</p>
            </div>
            <div className="TopSalesBottomCard">
                <img src="/Images/boxer.jpg" alt="" />
                <h5>Men Pant Boxers</h5>
                <span>$25 - $50</span>
                <p>1 item remaining</p>
            </div>
            <div className="TopSalesBottomCard">
                <img src="/Images/boxer.jpg" alt="" />
                <h5>Men Pant Boxers</h5>
                <span>$25 - $50</span>
                <p>1 item remaining</p>
            </div>
            <div className="TopSalesBottomCard">
                <img src="/Images/boxer.jpg" alt="" />
                <h5>Men Pant Boxers</h5>
                <span>$25 - $50</span>
                <p>1 item remaining</p>
            </div>
        </div>
        </div>
        
    </div>
  )
}
