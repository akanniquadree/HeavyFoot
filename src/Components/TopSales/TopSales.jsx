import "./topsales.css"
import React from 'react'
import { Link } from "react-router-dom"

export default function TopSales() {
  return (
    <div className="TopSales" style={{marginTop:"20px"}}>
        <div className="TopSalesWrapper">
            <div className="TopSalesTop">
            <h5>Top Sales</h5>
        </div>
        <div className="TopSalesBottom">
        <Link to="/product">
            <div className="TopSalesBottomCard">
                <img src="/Images/boxer.jpg" alt="" />
                <h5>Men Pant Boxers</h5>
                <div>$25 - $50</div>
                <p>1 item remaining</p>
                <button>Add to Cart</button>
            </div>
            </Link>
            <Link to="/product">
            <div className="TopSalesBottomCard">
                <img src="/Images/boxer.jpg" alt="" />
                <h5>Men Pant Boxers</h5>
                <div>$25 - $50</div>
                <p>1 item remaining</p>
                <button>Add to Cart</button>
            </div>
            </Link>
            <Link to="/product">
            <div className="TopSalesBottomCard">
                <img src="/Images/boxer.jpg" alt="" />
                <h5>Men Pant Boxers</h5>
                <div>$25 - $50</div>
                <p>1 item remaining</p>
                <button>Add to Cart</button>
            </div>
            </Link>
            <Link to="/product">
            <div className="TopSalesBottomCard">
                <img src="/Images/boxer.jpg" alt="" />
                <h5>Men Pant Boxers</h5>
                <div>$25 - $50</div>
                <p>1 item remaining</p>
                <button>Add to Cart</button>
            </div>
            </Link>
            <Link to="/product">
            <div className="TopSalesBottomCard">
                <img src="/Images/boxer.jpg" alt="" />
                <h5>Men Pant Boxers</h5>
                <div>$25 - $50</div>
                <p>1 item remaining</p>
                <button>Add to Cart</button>
            </div>
            </Link>
            <Link to="/product">
            <div className="TopSalesBottomCard">
                <img src="/Images/boxer.jpg" alt="" />
                <h5>Men Pant Boxers</h5>
                <div>$25 - $50</div>
                <p>1 item remaining</p>
                <button>Add to Cart</button>
            </div>
            </Link>
            <Link to="/product">
            <div className="TopSalesBottomCard">
                <img src="/Images/boxer.jpg" alt="" />
                <h5>Men Pant Boxers</h5>
                <div>$25 - $50</div>
                <p>1 item remaining</p>
                <button>Add to Cart</button>
            </div>
          </Link>
        </div>
        </div>
        
    </div>
  )
}
