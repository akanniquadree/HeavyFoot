import { AddCircle, DeleteForever, RemoveCircle } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../../Components/Footer/Footer'
import Topbar from '../../Components/Topbar/Topbar'
import "./cart.css"

export default function Cart() {
    const [product, setProduct]=useState([])
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [disable, setDisable] = useState(false)
    

    useEffect(()=>{
        const CART = async() =>{
            const {data} = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/user/get_all_cart",{headers:{"Authorization":"Bearer " +localStorage.getItem("token")}})
            setProduct(data.data)
          }
          CART()
    })
    const deleteCart = async(id) =>{
        const {data} = await axios.delete(`https://ecommerces-api.herokuapp.com/api/v1/user/delete_cart/${id}`,{headers:{"Authorization":"Bearer " +localStorage.getItem("token")}})
        if(data){
            const newData = product.filter((itm)=>{return itm.id !== id})
            setProduct(newData)
            console.log(data)
        }
    }
  return (
    <>
        <Topbar/>
        <div className="cart">
            <div className="cartWrapper">
                <div className="cartLeft">     
                    <div className="cartLeftWrapper">
                        <div className="cartLeftTop">
                            <h5>Cart({product ? product.length: "empty"})</h5>
                        </div>
                        {
                         product?.length < 1  ? <div>Cart is Empty</div> : product?.map((itm, index)=>(
                            <div className="cartLeftBottom" key={index}>
                                <div className="cartLeftBottomRight">
                                    <img src="./Images/boxer.jpg" alt="" />
                                </div>
                                <div className="cartLeftBottomMiddle">
                                    <h5>{itm.product_name}({itm.quantity})</h5>
                                    <p>{
                                        itm.description
                                        }
                                    </p>
                                    <DeleteForever onClick={()=>{deleteCart(itm.id)}} htmlColor='red' size="20px" style={{cursor:"pointer"}}/>
                                </div>
                                <div className="cartLeftBottomLeft">
                                    <h5>{itm.total}</h5>
                                    <span>$40,000</span>
                                    <div className="cartLeftBottomBut">
                                        <AddCircle className="cartLeftButton"/>
                                        <span>{itm.quantity}</span>
                                        <RemoveCircle className="cartLeftButton"/>
                                        
                                    </div>
                                </div>
                            </div>
                            ))
                            
                        }
                    </div>
                </div>
                <div className="cartRight">
                    <div className="cartRightWrapper">
                        <h5>CART SUMMARY</h5>
                        <div className="cartRightLeft">
                            <span>Subtotal</span>
                            <h5>${product?.reduce((total, item)=>total+(item.total),0).toLocaleString()}</h5>
                        </div>
                        <span>Delivery Fees not included</span>
                        <button>Proceed To CheckOut</button>
                    </div>
                </div>
                
            </div>
        </div>
        <Footer/>
    </>
  )
}
