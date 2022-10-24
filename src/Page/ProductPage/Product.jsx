import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Products from '../../Components/Product/Products'
import ProductProm from '../../Components/ProductPromotion/ProductProm'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Topbar from '../../Components/Topbar/Topbar'
import NotFound from '../NotFound/NotFound'
import "./Product.css"

export default function Product() {
  const [product, setProduct] = useState([])
  const [notFound, setNotFound] = useState(false)
  const {name} = useParams()
  useEffect(()=>{
    const Clothe = async() =>{
      const {data} = await axios.get("https://ecommerces-api.herokuapp.com/api/v1/public/get_all_category")
      setProduct(data.data)
      if(data.data.filter((itm)=> String(itm.name) === name)){
        setNotFound(true)
      }
    }
    Clothe()
  },[name])
  console.log(product)
  return (
    <>
      {
        notFound ?
          <>
              <Topbar/>
              <div className="productTopbar">
                <div className="productdetail">
                  <Link to="/" className='vome'>Home</Link>
                  <span className='vomes'> &gt; Product</span>
                </div>
                  
              </div>
              {/* <ProductProm/> */}
              {/* <Products/> */}
              {/* <Footer/> */}
          </>
          :
          <NotFound/>
      }
    </>
  )
}
