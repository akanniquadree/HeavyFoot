import "./topCart.css"
import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function TopCart() {
    const [cat, setCat] = useState([])
    useEffect(()=>{
        const category = async() =>{
            const {data} = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/public/get_all_category")
            setCat(data.data.reverse())
        }
        category()
    },[])
  return (
    <div className="TopCart">
        <div className="TopCartWrapper">
            <div className="TopCartTop">
            <h5>Top Category</h5>
        </div>
        <div className="TopCartBottom">
            {
                cat?.map((itm, index)=>(
                    <div className="TopCartBottomCard" key={index}>
                        <img src="/Images/caro3.jpg" alt="" />
                        <h5>{itm.name}</h5>
                    </div>
                ))
            }
            
        </div>
        </div>
        
    </div>
  )
}
