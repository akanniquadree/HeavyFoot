import { CircularProgress } from '@mui/material'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'

function ShowTimer({days, hours, minutes, seconds }) {
    const [product, setProduct] = useState([])
    const[disable, setDisable] = useState(false)
    const[error, setError] = useState("")
    const[message, setMessage] = useState("")
    const {user} = useContext(AuthContext)
    const[quantity, setQuantity] = useState(1)
    useEffect(()=>{
        let ignore = false
       const Product = async() =>{
        const {data} = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/public/get_all_products")
        if (!ignore) setProduct(data.reverse())
       }
       Product()
        return () => { ignore = true }; 
    },[])
    const addToCart = async({id,name, price,img}) =>{
        if(user){
            try{    
                const {data} = await axios.post("https://ecommerces-api.herokuapp.com/api/v1/user/add_to_cart",{product_id:id,product_name:name,product_price:price,product_image:img,quantity,product_image_url:img},{headers:{"Authorization":"Bearer " +localStorage.getItem("token")}})
                setDisable(true)
                if(data){
                    console.log(data)
                    setError("")
                    setMessage(data.message)
                    console.log(data)
                    setDisable(false)
                }
            }catch(error){
                console.log(error)
                setError(error.response.data.message)
                setDisable(false)
            } 
      }else{
        window.location.replace(`/login?redirect=product/${id}`)
        setDisable(true)
      }
    }
  return (
    <>
        <div className="flashTop">
            <h5>Flash Sales</h5>
            <h6>Time Left: {days}days : {hours}hrs : {minutes}mins : {seconds} secs</h6>
            <span>See All</span>
        </div>
        <div className="flashBottom">
        {
                product?.slice(0, 7).map((itm, index)=>(
                        <div className="TopSalesBottomCard" key={index}>
                            <Link to={`/product/${itm.id}`} className="TopSalesBottomCard" >
                                <img src="/Images/boxer.jpg" alt="" />
                                <h5>{itm.name}</h5>
                                <div>{itm.discount}</div>
                                <p>{itm.status} item remaining</p>
                            </Link>
                            <button  disabled={disable}onClick={()=>{addToCart({id:itm.id,name:itm.name, price:itm.discount,img:itm.avater})}}>{disable ? <CircularProgress thickness={4.0} style={{color:"white"}} size="13px"/>:"Add To Cart"}</button>
                        </div>
                ))
            }
            
        </div>
    </>
  )
}

export default ShowTimer