import "./flash.css"
import React from 'react'
import { Link } from "@material-ui/core"

export default function Flash() {
  return (
    <div className="flash">
        <div className="flashWrapper">
            <div className="flashTop">
            <h5>Flash Sales</h5>
            <h6>Time Left: 10days: 00hrs : 00mins</h6>
            <span>See All</span>
        </div>
        <div className="flashBottom">
            <Link to="/product">
            <div className="flashBottomCard">
                <img src="/Images/boxer.jpg" alt="" />
                <h5>Men Pant Boxers</h5>
                <div>$25 - $50</div>
                <p>1 item remaining</p>
                <button>Add to Cart</button>
            </div>
            </Link>
            <Link to="/product">
            <div className="flashBottomCard">
                <img src="/Images/boxer.jpg" alt="" />
                <h5>Men Pant Boxers</h5>
                <div>$25 - $50</div>
                <p>1 item remaining</p>
                <button>Add to Cart</button>
            </div>
            </Link>
            <Link to="/product">
            <div className="flashBottomCard">
                <img src="/Images/boxer.jpg" alt="" />
                <h5>Men Pant Boxers</h5>
                <div>$25 - $50</div>
                <p>1 item remaining</p>
                <button>Add to Cart</button>
            </div>
            </Link>
            <Link to="/product">
            <div className="flashBottomCard">
                <img src="/Images/boxer.jpg" alt="" />
                <h5>Men Pant Boxers</h5>
                <div>$25 - $50</div>
                <p>1 item remaining</p>
                <button>Add to Cart</button>
            </div>
            </Link>
            <Link to="/product">
            <div className="flashBottomCard">
                <img src="/Images/boxer.jpg" alt="" />
                <h5>Men Pant Boxers</h5>
                <div>$25 - $50</div>
                <p>1 item remaining</p>
                <button>Add to Cart</button>
            </div>
            </Link>
            <Link to="/product">
            <div className="flashBottomCard">
                <img src="/Images/boxer.jpg" alt="" />
                <h5>Men Pant Boxers</h5>
                <div>$25 - $50</div>
                <p>1 item remaining</p>
                <button>Add to Cart</button>
            </div>
            </Link>
            <Link to="/product">
            <div className="flashBottomCard">
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
