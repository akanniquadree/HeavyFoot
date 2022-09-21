import "./topCart.css"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import Skeleton from '@mui/material/Skeleton';

export default function TopCart() {
    const [cat, setCat] = useState([])
    const[fetching, setFetching] = useState(true)
    useEffect(()=>{
        let ignore = false
        if (!ignore) {
        const category = async() =>{
            const {data} = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/public/get_all_category")
            if(data){
            setCat(data.data.reverse())
            setFetching(false)  
            }
        }
        category()
        }
        return () => { ignore = true }; 
    },[])
  return (
    <div className="TopCart">
        <div className="TopCartWrapper">
            <div className="TopCartTop">
            <h5>Top Category</h5>
        </div>
        <div className="TopCartBottom">
            {
                 fetching ?
                
                 <Skeleton animation="wave" width="100%" height="198px" sx={{marginLeft:"10px", backgroundColor:"transparent"}} />
                 :
                    cat?.slice(0,3).map((itm, index)=>(
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
