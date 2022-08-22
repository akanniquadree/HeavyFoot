import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MiddleDisplay from './MiddleDisplay'
import "./singleProductDisplay.css"
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import { SnackbarContent } from '@mui/material'


export default function TopDisplay() {
    const {id} = useParams()
    const [product, setProduct]=useState([])
    const [singleProduct, setSingleProduct]=useState([])
    const [quantity, setQuantity] = useState(1)
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [state, setState] = useState({open: false,Transition: Fade});
    const [disable, setDisable] = useState(false)
    

    useEffect(()=>{
        const Clothe = async(id) =>{
            const {data} = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/public/get_all_products")
            setProduct(data)
          }
          Clothe()
    })
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
                window.location.replace("/cart")
            }
        }catch(error){
            console.log(error)
            setError(error.response.data.message)
            setDisable(false)
        }
    }
   


  return (
    <div className="topDisplay">
        <div className="topDisplayWrapper">
            <div className="topDisplayLeft">

            </div>
            <div className="topDisplayRight">
                <div className="topDisplayRIghtWrapper">{
                    product.filter((item)=> String(item.id) === id)?.map((itm, index)=>(
                        <React.Fragment key={index}>
                        <h4>{itm.name}</h4>
                        <span>{itm.discount}</span>
                        <p>{itm.price}</p>
                        <div className="topDisplayAvail">
                            <span>Initial Stock Amount: {itm.quantity}</span>
                            <p>Stock Remaining:  {itm.status}</p>
                        </div>
                        <div className="topDisplayAvail">
                            <span>Item code: #{itm.id}</span>
                            <p>Availability:  {itm.status > 1 ? <b>In Stock</b> : <b>Out of Stock</b>}</p>
                        </div>
                    <p>
                   {
                    itm.description
                   }
                    </p>
                    <h5>Available Option:</h5>
                    <div className="QtyWrapper">
                        <div className="qty">
                            <p className="float-left">Qty:</p>
                            <input type="number" min="01"  max={itm.status} value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                        </div>
                        <div className="size">
                            <p className="float-left">Size:</p>
                            <select className="">
                                <option value="x">X</option>
                                <option value="s">S</option>
                                <option value="xl">XL</option>
                                <option value="xxl">XXL</option>
                            </select>
                        </div>
                    </div>
                    <hr/>
                  
                    <button className='addbtn' disabled={disable} onClick={()=>{addToCart({id:itm.id, name:itm.name, price:itm.discount,img:itm.avater })}}>{disable ?<CircularProgress thickness={4.0} sx={{color:"white"}} size="13px"/>:"Add To Cart"}</button> 
                     <p style={{margin:"0", padding:"0", color:"red"}}>{error}</p>
                     </React.Fragment>
                    ))
                }   
                              
                </div>
            </div>
        </div>
        
        <MiddleDisplay/>
    </div>
  )
}
