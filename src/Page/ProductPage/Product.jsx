import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Products from '../../Components/Product/Products'
import ProductProm from '../../Components/ProductPromotion/ProductProm'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Topbar from '../../Components/Topbar/Topbar'
import "./Product.css"

export default function Product() {
  return (
    <>
        <Topbar/>
        <Link to="/" className='vome'>Home</Link>
        <span className='vomes'> &gt; Product</span>
        <ProductProm/>
        <Products/>
        <Footer/>
    </>
  )
}
