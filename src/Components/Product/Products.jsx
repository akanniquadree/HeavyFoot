import React, {useEffect, useState} from 'react'
import "./products.css"
import Sidebar from '../Sidebar/Sidebar'
import axios from "axios"
import { Link, useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { Button, Paper } from '@material-ui/core'
import ProductFilter from './productFilter'


export default function Products() {
  const [product, setProduct] = useState([])
  const {name} = useParams()
  const[quantity, setQuantity] = useState(1)
  const[disable, setDisable] = useState(false)
  const[error, setError] = useState("")
  const[message, setMessage] = useState("")
  const {user} = useContext(AuthContext)
  useEffect(()=>{
    const Clothe = async() =>{
      const {data} = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/public/get_all_products")
      setProduct(data.filter((item)=>item.category === name))
    }
    Clothe()
  },[name])
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
  }
}
  return (
    <div className="products">
        <div className="productsWrapper">
          <div className="productFilter">
            <ProductFilter/>
          </div>
             <div className="productsProduct">
               {
                  product.map((itm, index) =>(
                    <Paper elevation={3} className="productsListsWrapper" key={index}>
                       <Link to={`/product/${itm.id}`}>
                        <div className="productListsTop">
                          <img src="/Images/boxer.jpg" alt="" />
                          <div className="addTo">
                          <Button sx={{backgroundColor:"black",borderRadius:"5px", fontSize:"10px"}} size="small" variant="contained" disabled={disable} onClick={()=>{addToCart({id:itm.id,name:itm.name, price:itm.discount,img:itm.avater})}}>{disable ? <CircularProgress thickness={4.0} style={{color:"white"}} size="13px"/>:"Add To Cart"}</Button>
                          <Button sx={{backgroundColor:"white", color:"black",borderRadius:"5px", fontSize:"10px"}} size="small" variant="contained">Quick View</Button>
                        </div>
                        </div>
                      </Link>
                     <div className="productListsBottom">
                      <Link to={`/product/${itm.id}`}>
                        <h5>{itm.name}</h5>
                        <p>{itm.price}</p>
                        <h6 className="disc">{itm.discount}</h6>
                        </Link>
                        {/* <button disabled={disable} className='productListsButton'onClick={()=>{addToCart({id:itm.id,name:itm.name, price:itm.discount,img:itm.avater})}}>{disable ? <CircularProgress thickness={4.0} style={{color:"white"}} size="13px"/>:"Add To Cart"}</button> */}
                      </div>{/* */}
                    </Paper>
                  ))
                }
            </div>
        </div>
    </div>
  )
}
