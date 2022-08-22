import React, {useEffect, useState} from 'react'
import "./products.css"
import Sidebar from '../Sidebar/Sidebar'
import axios from "axios"
import { Link, useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'

export default function Products() {
  const [product, setProduct] = useState([])
  const {name} = useParams()
  const[quantity, setQuantity] = useState(1)
  const[disable, setDisable] = useState(false)
  const[error, setError] = useState("")
  const[message, setMessage] = useState("")
  useEffect(()=>{
    const Clothe = async() =>{
      const {data} = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/public/get_all_products")
      setProduct(data.filter((item)=>item.category === name))
    }
    Clothe()
  },[name])
  const addToCart = async({id,name, price,img}) =>{
    // setState({open: true,Transition,});
    // setError("")
    // setMessage("")
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
}
  return (
    <div className="products">
        <div className="productsWrapper">
            <Sidebar/>
            <div className="productsProduct">
              <div className="productProductsTop">
                <h5>{name}</h5>
              </div>
              <div className="productsLists">
                {
                  product.map((itm, index) =>(
                    <div className="productsListsWrapper" key={index}>
                      <Link to={`/product/${itm.id}`}>
                        <div className="productListsTop">
                          <img src="/Images/boxer.jpg" alt="" />
                        </div>
                      </Link>
                      <div className="productListsBottom">
                      <Link to={`/product/${itm.id}`}>
                        <h5>{itm.name}</h5>
                        <h6>{itm.discount}</h6>
                        <p>{itm.price}</p>
                        </Link>
                        <button disabled={disable} className='productListsButton'onClick={()=>{addToCart({id:itm.id,name:itm.name, price:itm.discount,img:itm.avater})}}>{disable ? <CircularProgress thickness={4.0} style={{color:"white"}} size="13px"/>:"Add To Cart"}</button>
                      </div>
                    </div>
                  ))
                }
                
              </div>
            </div>
        </div>
    </div>
  )
}
