import "./topsales.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"

export default function TopSales() {
    const [product, setProduct] = useState([])
    useEffect(()=>{
       const Product = async() =>{
        const {data} = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/public/get_all_products")
        setProduct(data.sort(() => Math.random() - 0.5))
       }
       Product() 
    })
  return (
    <div className="TopSales" style={{marginTop:"20px"}}>
        <div className="TopSalesWrapper">
            <div className="TopSalesTop">
            <h5>Top Sales</h5>
        </div>
        <div className="TopSalesBottom">
            {
                product?.slice(0, 7).map((itm, index)=>(
                        <div className="TopSalesBottomCard" key={index}>
                            <Link to={`/product/${itm.id}`} className="TopSalesBottomCard" >
                                <img src="/Images/boxer.jpg" alt="" />
                                <h5>{itm.name}</h5>
                                <div>{itm.discount}</div>
                                <p>{itm.status} item remaining</p>
                            </Link>
                            <button>Add to Cart</button>
                        </div>
                ))
            }
            
        </div>
        </div>
        
    </div>
  )
}
